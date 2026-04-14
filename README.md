# Node Compression Benchmark

Last updated: 2026-04-14T15:42:09.850Z

This benchmark measures compression time, output size, and compression ratios for several popular npm packages across all gzip, Brotli, and Zstandard compression levels.

## Table of Contents

- [jquery/dist/jquery.min.js](#jquery-dist-jquery-min-js)
- [@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](#expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf)
- [@codemirror/view/dist/index.js](#codemirror-view-dist-index-js)
- [react/cjs/react.production.js](#react-cjs-react-production-js)
- [dayjs/dayjs.min.js](#dayjs-dayjs-min-js)
- [vue/dist/vue.global.prod.js](#vue-dist-vue-global-prod-js)
- [lodash/lodash.min.js](#lodash-lodash-min-js)
- [@fortawesome/fontawesome-free/css/all.min.css](#fortawesome-fontawesome-free-css-all-min-css)
- [bootstrap/dist/css/bootstrap.min.css](#bootstrap-dist-css-bootstrap-min-css)
- [cities.json/cities.json](#cities-json-cities-json)
- [@sqlite.org/sqlite-wasm/dist/sqlite3.wasm](#sqlite-org-sqlite-wasm-dist-sqlite3-wasm)
- [tailwindcss/theme.css](#tailwindcss-theme-css)

Benchmark settings:

- Warmup runs per level: 1
- Minimum samples per level: 5
- Maximum samples per level: 25
- Target relative half-width (median-based robust estimate): 0.0500

<h2 id="jquery-dist-jquery-min-js">jquery/dist/jquery.min.js</h2>

- Original size: 78,748 bytes
- Chart: ![Compression ratio chart for jquery/dist/jquery.min.js](charts/jquery-dist-jquery-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.013 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.051 | 30,134 | 0.3827 | 7 | yes |
| gzip | 3 | 1.194 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.334 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.770 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.123 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.370 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.747 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.762 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.344 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.808 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.839 | 29,394 | 0.3733 | 23 | yes |
| brotli | 3 | 0.996 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.439 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.103 | 27,013 | 0.3430 | 6 | yes |
| brotli | 6 | 2.240 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.801 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.682 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.350 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 35.916 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 100.598 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.238 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.493 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.615 | 29,214 | 0.3710 | 25 | no |
| zstd | 4 | 1.246 | 29,108 | 0.3696 | 13 | yes |
| zstd | 5 | 1.375 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.675 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.951 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 2.066 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.229 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.471 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.260 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.488 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.472 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.849 | 26,432 | 0.3357 | 7 | yes |
| zstd | 15 | 8.967 | 26,420 | 0.3355 | 9 | yes |
| zstd | 16 | 11.070 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.194 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.172 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.058 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 20.854 | 26,282 | 0.3337 | 15 | yes |
| zstd | 21 | 20.726 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.755 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.565 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 97.513 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 103.174 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 115.955 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 134.750 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 152.393 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 162.617 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 182.801 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 196.232 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.541 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.913 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.678 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.053 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 89.925 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 125.906 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 139.880 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 411.516 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 521.425 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 761.891 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6565.521 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13612.261 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.701 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.804 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 37.624 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 44.518 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 67.790 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 80.564 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 87.953 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 102.210 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 108.705 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 132.705 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 171.888 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 210.033 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 417.859 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 493.444 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 570.176 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 748.941 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 884.443 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1226.702 | 2,713,297 | 0.4958 | 6 | yes |
| zstd | 19 | 1288.443 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1273.968 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1292.566 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1266.658 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 485,932 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.264 | 143,926 | 0.2962 | 5 | yes |
| gzip | 2 | 4.648 | 137,191 | 0.2823 | 5 | yes |
| gzip | 3 | 6.101 | 132,653 | 0.2730 | 5 | yes |
| gzip | 4 | 6.259 | 124,449 | 0.2561 | 5 | yes |
| gzip | 5 | 9.077 | 119,890 | 0.2467 | 5 | yes |
| gzip | 6 | 13.407 | 118,178 | 0.2432 | 5 | yes |
| gzip | 7 | 17.171 | 117,703 | 0.2422 | 5 | yes |
| gzip | 8 | 32.327 | 117,442 | 0.2417 | 5 | yes |
| gzip | 9 | 49.780 | 117,362 | 0.2415 | 5 | yes |
| brotli | 0 | 1.567 | 148,131 | 0.3048 | 5 | yes |
| brotli | 1 | 2.163 | 136,118 | 0.2801 | 5 | yes |
| brotli | 2 | 3.942 | 127,982 | 0.2634 | 5 | yes |
| brotli | 3 | 4.575 | 125,362 | 0.2580 | 5 | yes |
| brotli | 4 | 6.575 | 121,305 | 0.2496 | 5 | yes |
| brotli | 5 | 10.065 | 111,621 | 0.2297 | 5 | yes |
| brotli | 6 | 11.467 | 108,983 | 0.2243 | 5 | yes |
| brotli | 7 | 14.152 | 107,042 | 0.2203 | 5 | yes |
| brotli | 8 | 16.784 | 106,024 | 0.2182 | 5 | yes |
| brotli | 9 | 21.343 | 105,126 | 0.2163 | 5 | yes |
| brotli | 10 | 285.053 | 97,714 | 0.2011 | 5 | yes |
| brotli | 11 | 737.319 | 95,541 | 0.1966 | 5 | yes |
| zstd | 1 | 1.791 | 136,834 | 0.2816 | 5 | yes |
| zstd | 2 | 1.923 | 132,597 | 0.2729 | 5 | yes |
| zstd | 3 | 2.223 | 125,085 | 0.2574 | 5 | yes |
| zstd | 4 | 2.723 | 124,856 | 0.2569 | 6 | yes |
| zstd | 5 | 4.576 | 116,229 | 0.2392 | 5 | yes |
| zstd | 6 | 6.274 | 112,386 | 0.2313 | 5 | yes |
| zstd | 7 | 6.996 | 110,843 | 0.2281 | 5 | yes |
| zstd | 8 | 8.852 | 110,044 | 0.2265 | 5 | yes |
| zstd | 9 | 8.877 | 110,044 | 0.2265 | 5 | yes |
| zstd | 10 | 10.753 | 109,065 | 0.2244 | 5 | yes |
| zstd | 11 | 13.535 | 108,472 | 0.2232 | 5 | yes |
| zstd | 12 | 14.579 | 108,472 | 0.2232 | 5 | yes |
| zstd | 13 | 26.459 | 107,308 | 0.2208 | 5 | yes |
| zstd | 14 | 32.298 | 106,712 | 0.2196 | 5 | yes |
| zstd | 15 | 35.918 | 106,627 | 0.2194 | 5 | yes |
| zstd | 16 | 64.515 | 101,091 | 0.2080 | 5 | yes |
| zstd | 17 | 72.340 | 100,209 | 0.2062 | 5 | yes |
| zstd | 18 | 101.041 | 99,415 | 0.2046 | 5 | yes |
| zstd | 19 | 130.428 | 99,306 | 0.2044 | 5 | yes |
| zstd | 20 | 129.822 | 99,306 | 0.2044 | 5 | yes |
| zstd | 21 | 130.387 | 99,313 | 0.2044 | 5 | yes |
| zstd | 22 | 130.733 | 99,313 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.071 | 4,987 | 0.2897 | 17 | yes |
| gzip | 2 | 0.081 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.085 | 4,806 | 0.2791 | 14 | yes |
| gzip | 4 | 0.114 | 4,530 | 0.2631 | 25 | no |
| gzip | 5 | 0.145 | 4,441 | 0.2579 | 25 | yes |
| gzip | 6 | 0.183 | 4,425 | 0.2570 | 13 | yes |
| gzip | 7 | 0.259 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.429 | 4,419 | 0.2567 | 6 | yes |
| gzip | 9 | 0.429 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.054 | 5,235 | 0.3041 | 14 | yes |
| brotli | 1 | 0.069 | 5,134 | 0.2982 | 12 | yes |
| brotli | 2 | 0.097 | 4,741 | 0.2754 | 16 | yes |
| brotli | 3 | 0.117 | 4,650 | 0.2701 | 24 | yes |
| brotli | 4 | 0.211 | 4,555 | 0.2646 | 25 | no |
| brotli | 5 | 0.343 | 4,276 | 0.2484 | 15 | yes |
| brotli | 6 | 0.368 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.373 | 4,264 | 0.2477 | 12 | yes |
| brotli | 8 | 0.390 | 4,257 | 0.2473 | 6 | yes |
| brotli | 9 | 0.518 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.286 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.419 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.054 | 4,923 | 0.2859 | 10 | yes |
| zstd | 2 | 0.060 | 4,868 | 0.2827 | 7 | yes |
| zstd | 3 | 0.074 | 4,717 | 0.2740 | 8 | yes |
| zstd | 4 | 0.090 | 4,679 | 0.2718 | 5 | yes |
| zstd | 5 | 0.142 | 4,519 | 0.2625 | 10 | yes |
| zstd | 6 | 0.255 | 4,437 | 0.2577 | 25 | no |
| zstd | 7 | 0.197 | 4,437 | 0.2577 | 12 | yes |
| zstd | 8 | 0.211 | 4,426 | 0.2571 | 12 | yes |
| zstd | 9 | 0.272 | 4,420 | 0.2567 | 17 | yes |
| zstd | 10 | 0.324 | 4,410 | 0.2561 | 8 | yes |
| zstd | 11 | 0.634 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.646 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.938 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.435 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.502 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.187 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.307 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.311 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.518 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.537 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.534 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.495 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.048 | 3,217 | 0.4493 | 12 | yes |
| gzip | 2 | 0.049 | 3,179 | 0.4440 | 14 | yes |
| gzip | 3 | 0.051 | 3,150 | 0.4399 | 13 | yes |
| gzip | 4 | 0.060 | 3,092 | 0.4318 | 14 | yes |
| gzip | 5 | 0.067 | 3,047 | 0.4256 | 20 | yes |
| gzip | 6 | 0.071 | 3,041 | 0.4247 | 10 | yes |
| gzip | 7 | 0.075 | 3,039 | 0.4244 | 9 | yes |
| gzip | 8 | 0.074 | 3,039 | 0.4244 | 11 | yes |
| gzip | 9 | 0.078 | 3,039 | 0.4244 | 10 | yes |
| brotli | 0 | 0.031 | 3,544 | 0.4950 | 13 | yes |
| brotli | 1 | 0.041 | 3,378 | 0.4718 | 9 | yes |
| brotli | 2 | 0.058 | 3,258 | 0.4550 | 10 | yes |
| brotli | 3 | 0.075 | 3,207 | 0.4479 | 13 | yes |
| brotli | 4 | 0.126 | 3,138 | 0.4383 | 14 | yes |
| brotli | 5 | 0.163 | 2,961 | 0.4135 | 17 | yes |
| brotli | 6 | 0.170 | 2,950 | 0.4120 | 10 | yes |
| brotli | 7 | 0.181 | 2,942 | 0.4109 | 25 | no |
| brotli | 8 | 0.170 | 2,942 | 0.4109 | 6 | yes |
| brotli | 9 | 0.222 | 2,943 | 0.4110 | 16 | yes |
| brotli | 10 | 3.462 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 8.232 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.035 | 3,250 | 0.4539 | 9 | yes |
| zstd | 2 | 0.036 | 3,196 | 0.4464 | 9 | yes |
| zstd | 3 | 0.044 | 3,171 | 0.4429 | 9 | yes |
| zstd | 4 | 0.063 | 3,098 | 0.4327 | 18 | yes |
| zstd | 5 | 0.074 | 3,077 | 0.4297 | 23 | yes |
| zstd | 6 | 0.090 | 3,055 | 0.4267 | 17 | yes |
| zstd | 7 | 0.103 | 3,050 | 0.4260 | 12 | yes |
| zstd | 8 | 0.105 | 3,050 | 0.4260 | 5 | yes |
| zstd | 9 | 0.126 | 3,050 | 0.4260 | 20 | yes |
| zstd | 10 | 0.131 | 3,050 | 0.4260 | 5 | yes |
| zstd | 11 | 0.226 | 3,041 | 0.4247 | 24 | yes |
| zstd | 12 | 0.462 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.585 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.574 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.554 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.085 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.043 | 2,991 | 0.4177 | 5 | yes |
| zstd | 18 | 1.044 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.040 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.026 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.025 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.089 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.060 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 2.226 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.563 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.832 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.891 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.888 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 5.341 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 5.754 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 5.776 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.611 | 70,918 | 0.4333 | 7 | yes |
| brotli | 1 | 0.941 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.718 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 2.025 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 2.996 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.460 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 4.898 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 5.990 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 6.408 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 7.568 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 103.590 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 262.669 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.626 | 65,987 | 0.4032 | 5 | yes |
| zstd | 2 | 0.790 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 1.018 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.832 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.060 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.612 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 3.049 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 3.733 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.225 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 5.137 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 8.827 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 9.018 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 14.909 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 17.519 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 17.723 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 22.583 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 23.774 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 39.306 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 38.620 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 39.300 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 39.528 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 39.658 | 55,612 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.839 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.930 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.071 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.171 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.560 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.038 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.443 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.322 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.338 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.205 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.372 | 29,754 | 0.4063 | 8 | yes |
| brotli | 2 | 0.723 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.850 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.365 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.922 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.123 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.503 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.689 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.204 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 42.635 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 101.395 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.202 | 28,919 | 0.3949 | 23 | yes |
| zstd | 2 | 0.229 | 28,008 | 0.3824 | 11 | yes |
| zstd | 3 | 0.522 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.436 | 27,100 | 0.3700 | 6 | yes |
| zstd | 5 | 0.813 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.114 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.332 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.478 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.661 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.961 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.289 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.414 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.271 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.489 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.634 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.890 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.954 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.895 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.728 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.763 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.699 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.754 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.645 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.727 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.888 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.993 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.421 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 2.192 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.940 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 8.715 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 8.823 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.182 | 25,901 | 0.3420 | 13 | yes |
| brotli | 1 | 0.307 | 23,906 | 0.3156 | 19 | yes |
| brotli | 2 | 0.663 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.783 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.159 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.698 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.930 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.310 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.687 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.522 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 31.248 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 89.618 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.201 | 22,639 | 0.2989 | 12 | yes |
| zstd | 2 | 0.229 | 22,433 | 0.2962 | 25 | no |
| zstd | 3 | 0.255 | 22,208 | 0.2932 | 12 | yes |
| zstd | 4 | 0.323 | 22,181 | 0.2929 | 17 | yes |
| zstd | 5 | 0.725 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.028 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.258 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.453 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.799 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.386 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.300 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.261 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.994 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 6.997 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.157 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.636 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.022 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.804 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 20.109 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 23.958 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.443 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 45.466 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.187 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.259 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.471 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.768 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.279 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.187 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.937 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.358 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.425 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.323 | 43,268 | 0.1864 | 18 | yes |
| brotli | 1 | 0.656 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.217 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.444 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.102 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.034 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.377 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.793 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.263 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.232 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 103.093 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 304.536 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.384 | 35,549 | 0.1532 | 22 | yes |
| zstd | 2 | 0.567 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.583 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.463 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.767 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.055 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.279 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.818 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.280 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.076 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.258 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.050 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.724 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.292 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.007 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 47.936 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.484 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 72.631 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.738 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 83.962 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.861 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 84.084 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 99.228 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 100.108 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 122.078 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 142.786 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 173.449 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 230.678 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 362.011 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 1062.941 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1401.792 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 44.646 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 66.163 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 117.588 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 135.581 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 180.455 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 296.808 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 350.576 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 496.027 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 637.258 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 884.208 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 13790.577 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 38387.250 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.888 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 54.642 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 68.332 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 73.721 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 150.787 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 210.895 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 240.192 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 315.740 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 362.825 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 460.423 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 655.653 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 664.921 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 990.065 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1246.853 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1568.081 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3925.049 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 4426.488 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5646.249 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 8969.872 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9222.833 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9476.590 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 10186.590 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.660 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.842 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.505 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.370 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 27.013 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 32.461 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 34.759 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.590 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.696 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.129 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.646 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.453 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.756 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.800 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.953 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 33.248 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 52.148 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 62.743 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 74.350 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 1015.419 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2082.157 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.246 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.164 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.599 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.551 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.789 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.623 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.871 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.493 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 20.200 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 23.488 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 28.782 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 30.430 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 67.007 | 383,952 | 0.4466 | 11 | yes |
| zstd | 14 | 69.531 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 59.658 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 111.585 | 369,550 | 0.4298 | 11 | yes |
| zstd | 17 | 135.966 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 182.358 | 358,220 | 0.4167 | 6 | yes |
| zstd | 19 | 175.742 | 358,047 | 0.4165 | 10 | yes |
| zstd | 20 | 172.183 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 176.446 | 358,041 | 0.4165 | 8 | yes |
| zstd | 22 | 175.055 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.076 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.081 | 5,424 | 0.2784 | 21 | yes |
| gzip | 3 | 0.096 | 5,356 | 0.2749 | 19 | yes |
| gzip | 4 | 0.121 | 5,145 | 0.2641 | 22 | yes |
| gzip | 5 | 0.163 | 4,896 | 0.2513 | 25 | no |
| gzip | 6 | 0.255 | 4,884 | 0.2507 | 25 | no |
| gzip | 7 | 0.489 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.696 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.699 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.062 | 6,028 | 0.3094 | 5 | yes |
| brotli | 1 | 0.075 | 5,737 | 0.2945 | 9 | yes |
| brotli | 2 | 0.113 | 4,944 | 0.2538 | 19 | yes |
| brotli | 3 | 0.142 | 4,930 | 0.2531 | 25 | yes |
| brotli | 4 | 0.209 | 4,898 | 0.2514 | 25 | yes |
| brotli | 5 | 0.427 | 4,581 | 0.2352 | 7 | yes |
| brotli | 6 | 0.443 | 4,570 | 0.2346 | 9 | yes |
| brotli | 7 | 0.590 | 4,564 | 0.2343 | 6 | yes |
| brotli | 8 | 0.615 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.750 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.615 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.335 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.057 | 5,379 | 0.2761 | 12 | yes |
| zstd | 2 | 0.062 | 5,176 | 0.2657 | 19 | yes |
| zstd | 3 | 0.080 | 5,169 | 0.2653 | 11 | yes |
| zstd | 4 | 0.081 | 5,154 | 0.2646 | 12 | yes |
| zstd | 5 | 0.148 | 5,074 | 0.2605 | 11 | yes |
| zstd | 6 | 0.193 | 4,797 | 0.2463 | 12 | yes |
| zstd | 7 | 0.232 | 4,702 | 0.2414 | 13 | yes |
| zstd | 8 | 0.277 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.366 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.454 | 4,691 | 0.2408 | 10 | yes |
| zstd | 11 | 0.616 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.610 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.993 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.722 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.819 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.566 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.551 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.558 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.989 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 4.996 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 4.993 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.067 | 4,348 | 0.2232 | 5 | yes |
