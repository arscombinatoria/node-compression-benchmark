const fs = require('fs');
const os = require('os');
const { createHash } = require('crypto');
const { median, medianInterval, readSettings } = require('./statistics');
const path = require('path');
const zlib = require('zlib');
const { performance } = require('perf_hooks');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

if (typeof zlib.zstdCompressSync !== 'function') {
  throw new Error('Zstandard compression requires Node.js v22 or later.');
}

const repoRoot = path.resolve(__dirname, '..');
const chartsDir = path.join(repoRoot, 'charts');
const verbose = process.env.BENCHMARK_VERBOSE === '1';

function findPackageRoot(packageName) {
  const entryPath = require.resolve(packageName, { paths: [repoRoot] });
  let currentDir = path.dirname(entryPath);
  const { root } = path.parse(currentDir);

  while (currentDir !== root) {
    const packageJsonPath = path.join(currentDir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      if (packageJson.name === packageName) {
        return currentDir;
      }
    }
    currentDir = path.dirname(currentDir);
  }

  throw new Error(`Unable to locate package.json for ${packageName}`);
}

function resolvePackageFile(packageName, ...pathSegments) {
  const packageRoot = findPackageRoot(packageName);
  return path.join(packageRoot, ...pathSegments);
}

function createPackageFile({
  id,
  displayName,
  packageName,
  pathSegments,
  candidates,
}) {
  const candidateList = (candidates ?? [
    {
      pathSegments,
      displayName,
    },
  ])
    .filter(Boolean)
    .map((candidate) => ({
      ...candidate,
      displayName:
        candidate.displayName ?? `${packageName}/${candidate.pathSegments.join('/')}`,
    }));

  for (const candidate of candidateList) {
    const absolutePath = resolvePackageFile(packageName, ...candidate.pathSegments);
    if (fs.existsSync(absolutePath)) {
      return {
        id,
        displayName: candidate.displayName,
        absolutePath,
        relativePath: path.relative(repoRoot, absolutePath),
      };
    }
  }

  const attempted = candidateList.map((candidate) =>
    path.join(packageName, ...candidate.pathSegments)
  );

  throw new Error(
    `Required file not found for ${packageName}. Tried: ${attempted.join(', ')}`
  );
}

const files = [
  createPackageFile({
    id: 'jquery',
    displayName: 'jquery/dist/jquery.min.js',
    packageName: 'jquery',
    pathSegments: ['dist', 'jquery.min.js'],
  }),
  createPackageFile({
    id: 'm-plus-1p',
    displayName: '@expo-google-fonts/m-plus-1p/MPLUS1p_400Regular.ttf',
    packageName: '@expo-google-fonts/m-plus-1p',
    candidates: [
      {
        pathSegments: ['400Regular', 'MPLUS1p_400Regular.ttf'],
      },
      {
        pathSegments: ['MPLUS1p_400Regular.ttf'],
      },
    ],
  }),
  createPackageFile({
    id: 'm-plus-1p-japanese',
    displayName: '@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2',
    packageName: '@openfonts/m-plus-1p_japanese',
    candidates: [
      {
        pathSegments: ['m-plus-1p-japanese-400.woff2'],
        displayName: '@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2',
      },
      {
        pathSegments: ['files', 'm-plus-1p-japanese-400.woff2'],
        displayName: '@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2',
      },
    ],
  }),
  createPackageFile({
    id: 'codemirror-view',
    packageName: '@codemirror/view',
    candidates: [
      {
        pathSegments: ['dist', 'index.js'],
        displayName: '@codemirror/view/dist/index.js',
      },
      {
        pathSegments: ['dist', 'index.cjs'],
        displayName: '@codemirror/view/dist/index.cjs',
      },
    ],
  }),
  createPackageFile({
    id: 'react',
    packageName: 'react',
    candidates: [
      {
        pathSegments: ['cjs', 'react.production.js'],
        displayName: 'react/cjs/react.production.js',
      },
      {
        pathSegments: ['umd', 'react.production.min.js'],
        displayName: 'react/umd/react.production.min.js',
      },
    ],
  }),
  createPackageFile({
    id: 'dayjs',
    displayName: 'dayjs/dayjs.min.js',
    packageName: 'dayjs',
    pathSegments: ['dayjs.min.js'],
  }),
  createPackageFile({
    id: 'vue',
    displayName: 'vue/dist/vue.global.prod.js',
    packageName: 'vue',
    pathSegments: ['dist', 'vue.global.prod.js'],
  }),
  createPackageFile({
    id: 'lodash',
    displayName: 'lodash/lodash.min.js',
    packageName: 'lodash',
    pathSegments: ['lodash.min.js'],
  }),
  createPackageFile({
    id: 'fontawesome-all',
    displayName: '@fortawesome/fontawesome-free/css/all.min.css',
    packageName: '@fortawesome/fontawesome-free',
    pathSegments: ['css', 'all.min.css'],
  }),
  createPackageFile({
    id: 'bootstrap',
    displayName: 'bootstrap/dist/css/bootstrap.min.css',
    packageName: 'bootstrap',
    pathSegments: ['dist', 'css', 'bootstrap.min.css'],
  }),
  createPackageFile({
    id: 'world-countries',
    displayName: 'world-countries/dist/countries-unescaped.json',
    packageName: 'world-countries',
    pathSegments: ['dist', 'countries-unescaped.json'],
  }),
  createPackageFile({
    id: 'sqlite-wasm',
    displayName: '@sqlite.org/sqlite-wasm/dist/sqlite3.wasm',
    packageName: '@sqlite.org/sqlite-wasm',
    pathSegments: ['dist', 'sqlite3.wasm'],
  }),
  createPackageFile({
    id: 'tailwind-config',
    packageName: 'tailwindcss',
    candidates: [
      {
        pathSegments: ['stubs', 'config.full.js'],
        displayName: 'tailwindcss/stubs/config.full.js',
      },
      {
        pathSegments: ['theme.css'],
        displayName: 'tailwindcss/theme.css',
      },
      {
        pathSegments: ['index.css'],
        displayName: 'tailwindcss/index.css',
      },
      {
        pathSegments: ['utilities.css'],
        displayName: 'tailwindcss/utilities.css',
      },
    ],
  }),
];

const algorithms = [
  {
    name: 'gzip',
    levels: Array.from({ length: 10 }, (_, index) => index),
    compress(buffer, level) {
      return zlib.gzipSync(buffer, { level });
    },
  },
  {
    name: 'brotli',
    levels: Array.from({ length: 12 }, (_, index) => index),
    compress(buffer, level) {
      return zlib.brotliCompressSync(buffer, {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: level,
        },
      });
    },
  },
  {
    name: 'zstd',
    levels: Array.from({ length: 22 }, (_, index) => index + 1),
    compress(buffer, level) {
      return zlib.zstdCompressSync(buffer, {
        params: {
          [zlib.constants.ZSTD_c_compressionLevel]: level,
        },
      });
    },
  },
];

const { targetRelError, sampleCount, warmupRuns } = readSettings(process.env);

const chartJSNodeCanvas = new ChartJSNodeCanvas({
  width: 960,
  height: 480,
  type: 'svg',
  backgroundColour: 'white',
});

function ensureFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Required file not found: ${filePath}`);
  }
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function createReadmeAnchor(displayName) {
  return displayName
    .toLowerCase()
    .replace(/[@]/g, '')
    .replace(/[^a-z0-9\u00C0-\u024F\u3040-\u30ff\u3400-\u9fff]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function formatNumber(value, fractionDigits = 3) {
  return Number(value).toFixed(fractionDigits);
}

function formatInteger(value) {
  return Number(value).toLocaleString('en-US');
}

async function generateChart(fileResult) {
  const configuration = {
    type: 'line',
    data: {
      datasets: fileResult.algorithms.map((algorithm) => ({
        label: `${algorithm.name.toUpperCase()}`,
        data: algorithm.measurements.map(({ level, ratio }) => ({ x: level, y: ratio })),
        borderWidth: 2,
        fill: false,
        tension: 0.2,
      })),
    },
    options: {
      parsing: false,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: `${fileResult.displayName} Compression Ratio`,
        },
        tooltip: {
          callbacks: {
            label(context) {
              const { raw } = context;
              return `${context.dataset.label} (level ${raw.x}): ${formatNumber(raw.y, 4)}`;
            },
          },
        },
      },
      scales: {
        x: {
          type: 'linear',
          title: {
            display: true,
            text: 'Compression Level',
          },
          ticks: {
            precision: 0,
          },
        },
        y: {
          title: {
            display: true,
            text: 'Compression Ratio',
          },
        },
      },
    },
  };

  const svgBuffer = chartJSNodeCanvas.renderToBufferSync(
    configuration,
    'image/svg+xml'
  );
  return svgBuffer.toString('utf8');
}

async function main() {
  const startedAt = new Date().toISOString();
  const runStart = performance.now();
  const hash = (buffer) => createHash('sha256').update(buffer).digest('hex');
  const lock = JSON.parse(fs.readFileSync(path.join(repoRoot, 'package-lock.json'), 'utf8'));
  const packageVersions = Object.fromEntries(Object.keys(require('../package.json').dependencies)
    .map((name) => [name, lock.packages[`node_modules/${name}`].version]));
  if (!fs.existsSync(chartsDir)) {
    fs.mkdirSync(chartsDir, { recursive: true });
  }

  const results = [];
  const totalVariants = files.reduce(
    (fileTotal, _file) =>
      fileTotal +
      algorithms.reduce(
        (algorithmTotal, algorithm) => algorithmTotal + algorithm.levels.length,
        0
      ),
    0
  );
  let completedVariants = 0;

  for (const file of files) {
    const absolutePath = file.absolutePath;
    ensureFile(absolutePath);

    const originalBuffer = fs.readFileSync(absolutePath);
    const originalSize = originalBuffer.length;

    if (verbose) {
      console.log(`Processing ${file.displayName} (${originalSize} bytes)`);
    }

    const algorithmResults = [];

    for (const algorithm of algorithms) {
      const measurements = [];

      for (const level of algorithm.levels) {
        const warmupDurationsMs = [];
        for (let index = 0; index < warmupRuns; index += 1) {
          const start = performance.now();
          algorithm.compress(originalBuffer, level);
          warmupDurationsMs.push(performance.now() - start);
        }

        const durationSamples = [];
        let compressed;
        for (let index = 0; index < sampleCount; index += 1) {
          const start = performance.now();
          compressed = algorithm.compress(originalBuffer, level);
          durationSamples.push(performance.now() - start);
        }
        // Validate outside the timed region.
        const decompress = { gzip: zlib.gunzipSync, brotli: zlib.brotliDecompressSync,
          zstd: zlib.zstdDecompressSync }[algorithm.name];
        if (!decompress(compressed).equals(originalBuffer)) {
          throw new Error(`Round-trip failed: ${file.displayName} ${algorithm.name} ${level}`);
        }
        const durationMs = median(durationSamples);
        const interval = medianInterval(durationSamples);
        const relativeHalfWidth = durationMs > 0
          ? Math.max(durationMs - interval.lower, interval.upper - durationMs) / durationMs
          : null;
        measurements.push({
          level, time: durationMs, size: compressed.length,
          ratio: compressed.length / originalSize, samples: sampleCount,
          interval, relativeHalfWidth,
          precisionMet: relativeHalfWidth !== null && relativeHalfWidth <= targetRelError,
          durationSamplesMs: durationSamples, warmupDurationsMs,
          order: completedVariants + 1,
        });

        completedVariants += 1;
        const overallProgress = (completedVariants / totalVariants) * 100;
        console.log(
          `[${formatNumber(overallProgress, 1)}%] ${file.displayName} ${algorithm.name} level ${level} complete`
        );
      }

      algorithmResults.push({
        name: algorithm.name,
        measurements,
      });

      if (verbose) {
        console.log(
          `  Completed ${algorithm.name} levels (${measurements.length} variants)`
        );
      }
    }

    const fileResult = {
      id: file.id,
      displayName: file.displayName,
      originalSize,
      sha256: hash(originalBuffer),
      algorithms: algorithmResults,
    };

    if (verbose) {
      console.log('  Generating chart');
    }

    let chartSvg;
    try {
      chartSvg = await generateChart(fileResult);
    } catch (error) {
      console.error(`  Failed to generate chart for ${file.displayName}`);
      throw error;
    }
    const chartPath = path.join(chartsDir, `${slugify(file.displayName)}.svg`);
    fs.writeFileSync(chartPath, chartSvg, 'utf8');

    if (verbose) {
      console.log(`  Saved chart to ${chartPath}`);
    }

    results.push({ ...fileResult, chartPath: path.relative(repoRoot, chartPath) });
  }

  const metadata = {
    schemaVersion: 1, startedAt, finishedAt: new Date().toISOString(),
    elapsedMs: performance.now() - runStart,
    settings: { sampleCount, warmupRuns, targetRelError, confidence: 0.95,
      method: 'fixed-sample median with binomial order-statistic interval' },
    environment: { node: process.version, versions: process.versions,
      platform: process.platform, arch: process.arch, kernel: os.release(),
      cpu: os.cpus()[0]?.model, logicalCpus: os.cpus().length,
      availableParallelism: os.availableParallelism() },
    packageVersions,
    sourceHashes: Object.fromEntries(['scripts/benchmark.js', 'scripts/statistics.js', 'package-lock.json']
      .map((file) => [file, hash(fs.readFileSync(path.join(repoRoot, file)))])),
    results,
  };
  fs.mkdirSync(path.join(repoRoot, 'results'), { recursive: true });
  fs.writeFileSync(path.join(repoRoot, 'results/latest.json'), JSON.stringify(metadata, null, 2) + '\n');
  console.log(`Benchmark completed in ${(metadata.elapsedMs / 1000).toFixed(1)} seconds`);

  const readmeLines = [];
  readmeLines.push('# Node Compression Benchmark');
  readmeLines.push('');
  readmeLines.push(`Last updated: ${new Date().toISOString()}`);
  readmeLines.push('');
  readmeLines.push('This benchmark measures compression time, output size, and compression ratios for several popular npm packages across all gzip, Brotli, and Zstandard compression levels.');
  readmeLines.push('');
  readmeLines.push('## Table of Contents');
  readmeLines.push('');
  for (const result of results) {
    readmeLines.push(
      `- [${result.displayName}](#${createReadmeAnchor(result.displayName)})`
    );
  }
  readmeLines.push('');
  readmeLines.push('Benchmark settings:');
  readmeLines.push('');
  readmeLines.push(`- Warmup runs per level: ${formatInteger(warmupRuns)}`);
  readmeLines.push(`- Fixed samples per level: ${formatInteger(sampleCount)}`);
  readmeLines.push(`- Target relative interval radius: ${formatNumber(targetRelError, 4)}`);
  readmeLines.push(`- Elapsed benchmark time: ${formatNumber(metadata.elapsedMs / 1000, 1)} seconds`);
  readmeLines.push('- [Raw observations and environment](results/latest.json) · [Measurement methodology](BENCHMARK.md)');
  readmeLines.push('- Intervals have at least 95% coverage for independent, identically distributed samples. Precision met means both bounds are within the target distance of the observed median; it is not an accuracy guarantee.');
  readmeLines.push('');

  for (const result of results) {
    readmeLines.push(
      `<h2 id="${createReadmeAnchor(result.displayName)}">${result.displayName}</h2>`
    );
    readmeLines.push('');
    readmeLines.push(`- Original size: ${formatInteger(result.originalSize)} bytes`);
    readmeLines.push(`- Chart: ![Compression ratio chart for ${result.displayName}](${result.chartPath})`);
    readmeLines.push('');
    readmeLines.push('| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Median CI (ms) | Precision met |');
    readmeLines.push('| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |');

    for (const algorithm of result.algorithms) {
      for (const measurement of algorithm.measurements) {
        readmeLines.push(
          `| ${algorithm.name} | ${measurement.level} | ${formatNumber(measurement.time)} | ${formatInteger(measurement.size)} | ${formatNumber(measurement.ratio, 4)} | ${formatInteger(measurement.samples)} | ${formatNumber(measurement.interval.lower)}–${formatNumber(measurement.interval.upper)} | ${measurement.precisionMet ? 'yes' : 'no'} |`
        );
      }
    }

    readmeLines.push('');
  }

  fs.writeFileSync(path.join(repoRoot, 'README.md'), readmeLines.join('\n'), 'utf8');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
