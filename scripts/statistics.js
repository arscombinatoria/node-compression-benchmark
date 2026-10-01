function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

// Invert a two-sided sign test. Choose the narrowest symmetric order-statistic
// interval with >=95% coverage; no distributional shape assumption is needed.
function medianInterval(values) {
  const n = values.length;
  if (n < 6 || n > 200 || values.some((v) => !Number.isFinite(v) || v < 0)) {
    throw new Error('Expected 6–200 finite nonnegative observations');
  }
  const sorted = [...values].sort((a, b) => a - b);
  let probability = 2 ** -n;
  let tail = 0;
  let rank = 0;
  let coverage;
  for (let k = 1; k <= Math.floor(n / 2); k += 1) {
    tail += probability;
    if (2 * tail > 0.05) break;
    rank = k;
    coverage = 1 - 2 * tail;
    probability *= (n - k + 1) / k;
  }
  return { lower: sorted[rank - 1], upper: sorted[n - rank], coverage };
}

function readSettings(env) {
  for (const name of ['BENCHMARK_MIN_SAMPLES', 'BENCHMARK_MAX_SAMPLES']) {
    if (env[name] !== undefined) throw new Error(`${name} was replaced by BENCHMARK_SAMPLES (fixed sample count)`);
  }
  function number(name, fallback, min, max, integer = false) {
    const raw = env[name] ?? String(fallback);
    const value = Number(raw);
    if (!raw.trim() || !Number.isFinite(value) || value < min || value > max || (integer && !Number.isInteger(value))) {
      throw new Error(`Invalid ${name}: expected ${integer ? 'integer' : 'number'} from ${min} to ${max}`);
    }
    return value;
  }
  return {
    sampleCount: number('BENCHMARK_SAMPLES', 9, 6, 200, true),
    warmupRuns: number('BENCHMARK_WARMUP', 1, 0, 200, true),
    targetRelError: number('BENCHMARK_TARGET_REL_ERROR', 0.05, 0, 1),
  };
}
module.exports = { median, medianInterval, readSettings };
