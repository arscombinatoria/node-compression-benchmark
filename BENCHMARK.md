# Measurement methodology

Run `npm ci`, `npm test`, then `npm run benchmark` with Node.js 24 or later.

The corpus retains 13 files and all 44 compression levels per file. The Japanese
TTF is `@expo-google-fonts/m-plus-1p/400Regular/MPLUS1p_400Regular.ttf` (about 1.71 MB).
The JSON input is `world-countries/dist/countries-unescaped.json` (about 616 KB),
containing country names, translations, currencies and other regional metadata.
These replace the much larger Noto Sans JP and cities.json inputs. Results for
these inputs are not directly comparable to the old corpus.

Each condition runs synchronously with one discarded warmup and nine timed
compressions by default. Timing includes the Node compression API's allocation
and call overhead, but excludes input reads, output validation and chart rendering.
The last compressed output is decompressed and checked against the input outside
the timed region. No concurrent compression or batching is used. Conditions run
in the order recorded in the raw results; CPU drift and correlated observations
remain possible, especially on shared CI runners.

The reported time is the median. Its interval inverts the two-sided binomial sign
test using order statistics, with at least 95% coverage under independent,
identically distributed observations. With nine samples this uses the second
and eighth sorted observations, giving 96.09375% coverage for continuous data.
Ties can make coverage conservative. This is not a confidence interval for the
mean and does not account for machine-to-machine variation or systematic bias.

Sample count is fixed before timing. There is no repeated significance check or
early stopping. `Precision met` means both interval endpoints are within the
configured fraction of the observed median. A `no` is retained, rather than
silently claiming convergence or dropping the condition. Neither label guarantees
that the estimate is within 5% of the true value. A narrower target does not
increase sample count automatically. For higher precision, choose a larger fixed
sample count before a new run and use a stable, otherwise idle machine.

| Environment variable | Default | Allowed values |
| --- | ---: | --- |
| `BENCHMARK_SAMPLES` | 9 | Integer 6–200 |
| `BENCHMARK_WARMUP` | 1 | Integer 0–200 |
| `BENCHMARK_TARGET_REL_ERROR` | 0.05 | Number 0–1 |
| `BENCHMARK_VERBOSE` | 0 | `1` enables detail |

`BENCHMARK_MIN_SAMPLES` and `BENCHMARK_MAX_SAMPLES` are rejected with a migration
message; replace them with `BENCHMARK_SAMPLES`. At least six samples are required
for a finite distribution-free 95% median interval using observed endpoints.

`results/latest.json` records every timed and warmup observation in milliseconds,
execution order, interval bounds and coverage, input SHA-256 hashes, resolved
package versions, Node and compression library versions, OS/CPU information,
source and lockfile hashes, timestamps and elapsed time. The elapsed time includes
validation and chart generation, but excludes dependency installation and final
report serialization. The file is replaced on each successful run; committed
versions preserve prior runs. README and SVG charts are generated from the same
observations. CI commits all three together.

Batching was not adopted because exploratory trials did not consistently improve
stability and changed the measured statistic. Warmups remain enabled for the new
corpus; the old cities/Brotli trial does not establish that they can be removed
for these replacement inputs.
