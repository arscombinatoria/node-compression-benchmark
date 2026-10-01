const { test } = require('node:test');
const assert = require('node:assert/strict');
const { median, medianInterval, readSettings } = require('./statistics');

test('median does not mutate observations and handles even counts', () => {
  const input = [4, 1, 3, 2];
  assert.equal(median(input), 2.5);
  assert.deepEqual(input, [4, 1, 3, 2]);
});
test('nine samples use second and eighth order statistics', () => {
  assert.deepEqual(medianInterval([9, 3, 5, 1, 7, 2, 4, 8, 6]),
    { lower: 2, upper: 8, coverage: 492 / 512 });
});
test('six samples require the full observed range', () => {
  assert.deepEqual(medianInterval([1, 2, 3, 4, 5, 6]),
    { lower: 1, upper: 6, coverage: 62 / 64 });
});
test('exact sign-pattern coverage for n=9 matches the reported coverage', () => {
  let covered = 0;
  for (let mask = 0; mask < 512; mask += 1) {
    const values = Array.from({ length: 9 }, (_, i) => (mask & (1 << i)) ? 2 : 0);
    const ci = medianInterval(values);
    if (ci.lower <= 1 && ci.upper >= 1) covered += 1;
  }
  assert.equal(covered, 492);
});
test('bounds remain finite at the sample limit, including ties', () => {
  assert.deepEqual(medianInterval(Array(200).fill(3)).lower, 3);
  assert.ok(medianInterval(Array.from({ length: 200 }, (_, i) => i)).coverage >= .95);
  assert.throws(() => medianInterval([1, 2, 3, 4, 5]));
  assert.throws(() => medianInterval([1, 2, 3, 4, 5, NaN]));
});
test('settings reject invalid or obsolete sampling controls', () => {
  assert.equal(readSettings({}).sampleCount, 9);
  for (const value of ['', 'NaN', '5', '201', '9.5', '9oops']) {
    assert.throws(() => readSettings({ BENCHMARK_SAMPLES: value }));
  }
  assert.throws(() => readSettings({ BENCHMARK_TARGET_REL_ERROR: 'Infinity' }));
  assert.throws(() => readSettings({ BENCHMARK_MAX_SAMPLES: '25' }));
});
