const fs = require('fs');
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

function resolvePackageFile(packageName, ...pathSegments) {
  const packageJsonPath = require.resolve(path.join(packageName, 'package.json'), {
    paths: [repoRoot],
  });
  const packageRoot = path.dirname(packageJsonPath);
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
    id: 'noto-sans-jp',
    displayName: '@expo-google-fonts/noto-sans-jp/NotoSansJP_400Regular.ttf',
    packageName: '@expo-google-fonts/noto-sans-jp',
    candidates: [
      {
        pathSegments: ['400Regular', 'NotoSansJP_400Regular.ttf'],
      },
      {
        pathSegments: ['NotoSansJP_400Regular.ttf'],
      },
    ],
  }),
  createPackageFile({
    id: 'react',
    displayName: 'react/umd/react.production.min.js',
    packageName: 'react',
    pathSegments: ['umd', 'react.production.min.js'],
  }),
  createPackageFile({
    id: 'moment',
    displayName: 'moment/min/moment.min.js',
    packageName: 'moment',
    pathSegments: ['min', 'moment.min.js'],
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
    id: 'normalize-css',
    displayName: 'normalize.css/normalize.css',
    packageName: 'normalize.css',
    pathSegments: ['normalize.css'],
  }),
  createPackageFile({
    id: 'bootstrap',
    displayName: 'bootstrap/dist/css/bootstrap.min.css',
    packageName: 'bootstrap',
    pathSegments: ['dist', 'css', 'bootstrap.min.css'],
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
    levels: Array.from({ length: 9 }, (_, index) => index + 1),
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

function formatNumber(value, fractionDigits = 3) {
  return Number(value).toFixed(fractionDigits);
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
  if (!fs.existsSync(chartsDir)) {
    fs.mkdirSync(chartsDir, { recursive: true });
  }

  const results = [];

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
        const start = performance.now();
        const compressed = algorithm.compress(originalBuffer, level);
        const end = performance.now();

        const compressedSize = compressed.length;
        const durationMs = end - start;
        const ratio = compressedSize / originalSize;

        measurements.push({
          level,
          time: durationMs,
          size: compressedSize,
          ratio,
        });
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

  const readmeLines = [];
  readmeLines.push('# Node Compression Benchmark');
  readmeLines.push('');
  readmeLines.push(`Last updated: ${new Date().toISOString()}`);
  readmeLines.push('');
  readmeLines.push('This benchmark measures compression time, output size, and compression ratios for several popular npm packages across all gzip, Brotli, and Zstandard compression levels.');
  readmeLines.push('');

  for (const result of results) {
    readmeLines.push(`## ${result.displayName}`);
    readmeLines.push('');
    readmeLines.push(`- Original size: ${result.originalSize} bytes`);
    readmeLines.push(`- Chart: ![Compression ratio chart for ${result.displayName}](${result.chartPath})`);
    readmeLines.push('');
    readmeLines.push('| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio |');
    readmeLines.push('| --- | --- | --- | --- | --- |');

    for (const algorithm of result.algorithms) {
      for (const measurement of algorithm.measurements) {
        readmeLines.push(
          `| ${algorithm.name} | ${measurement.level} | ${formatNumber(measurement.time)} | ${measurement.size} | ${formatNumber(measurement.ratio, 4)} |`
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
