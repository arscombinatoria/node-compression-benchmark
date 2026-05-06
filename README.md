# Node Compression Benchmark

Last updated: 2026-05-06T21:23:38.813Z

This benchmark measures compression time, output size, and compression ratios for several popular npm packages across all gzip, Brotli, and Zstandard compression levels.

## Table of Contents

- [jquery/dist/jquery.min.js](#jquery-dist-jquery-min-js)
- [@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](#expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf)
- [@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](#openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2)
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
| gzip | 1 | 1.135 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.914 | 30,134 | 0.3827 | 6 | yes |
| gzip | 3 | 0.970 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.104 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.488 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.702 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 1.881 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.202 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.630 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.459 | 33,111 | 0.4205 | 17 | yes |
| brotli | 1 | 0.660 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.839 | 29,394 | 0.3733 | 5 | yes |
| brotli | 3 | 0.948 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.426 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.069 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.245 | 26,844 | 0.3409 | 8 | yes |
| brotli | 7 | 2.486 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.471 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.154 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.949 | 25,340 | 0.3218 | 11 | yes |
| brotli | 11 | 95.885 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.312 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.363 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.438 | 29,214 | 0.3710 | 8 | yes |
| zstd | 4 | 0.583 | 29,108 | 0.3696 | 25 | no |
| zstd | 5 | 1.306 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.598 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.841 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.962 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.168 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.377 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.001 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.348 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.250 | 26,867 | 0.3412 | 9 | yes |
| zstd | 14 | 8.411 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.363 | 26,420 | 0.3355 | 10 | yes |
| zstd | 16 | 11.292 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.313 | 26,336 | 0.3344 | 6 | yes |
| zstd | 18 | 11.125 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.587 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 22.539 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 22.039 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.868 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 83.473 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 88.466 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 91.622 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.625 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 118.128 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.807 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 138.698 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 156.654 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 170.775 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.055 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 27.931 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.507 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.099 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 83.686 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 117.684 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 137.121 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 379.450 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 492.717 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 638.000 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5530.073 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 11719.373 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 17.739 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.505 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 38.720 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 40.503 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 61.292 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 73.859 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 79.753 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 94.825 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 93.393 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 110.798 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 133.893 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 164.354 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 289.457 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 376.532 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 441.565 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 554.095 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 699.270 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1001.753 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1123.544 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1137.046 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1169.060 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1164.849 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 11.923 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 11.541 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 11.174 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 11.684 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 11.692 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.362 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.461 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 11.796 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 11.602 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.260 | 613,595 | 0.9981 | 12 | yes |
| brotli | 1 | 0.246 | 614,785 | 1.0000 | 25 | no |
| brotli | 2 | 0.621 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.846 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.988 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.524 | 614,785 | 1.0000 | 10 | yes |
| brotli | 6 | 1.533 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 1.861 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.220 | 614,785 | 1.0000 | 16 | yes |
| brotli | 9 | 2.841 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 100.056 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 230.509 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.292 | 614,805 | 1.0000 | 13 | yes |
| zstd | 2 | 0.318 | 614,804 | 1.0000 | 14 | yes |
| zstd | 3 | 0.383 | 614,804 | 1.0000 | 6 | yes |
| zstd | 4 | 1.295 | 614,804 | 1.0000 | 6 | yes |
| zstd | 5 | 0.660 | 614,804 | 1.0000 | 7 | yes |
| zstd | 6 | 0.609 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.801 | 614,804 | 1.0000 | 7 | yes |
| zstd | 8 | 1.635 | 614,804 | 1.0000 | 25 | no |
| zstd | 9 | 1.144 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 1.119 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 1.177 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 1.750 | 614,804 | 1.0000 | 25 | no |
| zstd | 13 | 3.876 | 612,619 | 0.9965 | 25 | yes |
| zstd | 14 | 3.947 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 4.295 | 612,619 | 0.9965 | 7 | yes |
| zstd | 16 | 15.023 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 14.698 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 20.774 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 25.557 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 25.079 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 25.714 | 612,518 | 0.9963 | 11 | yes |
| zstd | 22 | 25.940 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 485,915 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.755 | 143,918 | 0.2962 | 5 | yes |
| gzip | 2 | 4.153 | 137,173 | 0.2823 | 5 | yes |
| gzip | 3 | 4.990 | 132,619 | 0.2729 | 5 | yes |
| gzip | 4 | 5.356 | 124,435 | 0.2561 | 5 | yes |
| gzip | 5 | 7.485 | 119,872 | 0.2467 | 5 | yes |
| gzip | 6 | 10.865 | 118,159 | 0.2432 | 5 | yes |
| gzip | 7 | 13.714 | 117,684 | 0.2422 | 5 | yes |
| gzip | 8 | 25.637 | 117,420 | 0.2416 | 5 | yes |
| gzip | 9 | 41.027 | 117,341 | 0.2415 | 5 | yes |
| brotli | 0 | 1.415 | 148,158 | 0.3049 | 5 | yes |
| brotli | 1 | 1.895 | 136,127 | 0.2801 | 5 | yes |
| brotli | 2 | 3.651 | 127,990 | 0.2634 | 5 | yes |
| brotli | 3 | 4.286 | 125,439 | 0.2582 | 5 | yes |
| brotli | 4 | 5.896 | 121,316 | 0.2497 | 5 | yes |
| brotli | 5 | 9.280 | 111,622 | 0.2297 | 5 | yes |
| brotli | 6 | 11.278 | 108,985 | 0.2243 | 5 | yes |
| brotli | 7 | 13.492 | 107,045 | 0.2203 | 5 | yes |
| brotli | 8 | 16.447 | 106,028 | 0.2182 | 5 | yes |
| brotli | 9 | 20.644 | 105,144 | 0.2164 | 5 | yes |
| brotli | 10 | 254.062 | 97,735 | 0.2011 | 5 | yes |
| brotli | 11 | 667.780 | 95,569 | 0.1967 | 5 | yes |
| zstd | 1 | 1.621 | 136,842 | 0.2816 | 5 | yes |
| zstd | 2 | 1.812 | 132,630 | 0.2729 | 5 | yes |
| zstd | 3 | 2.156 | 125,091 | 0.2574 | 6 | yes |
| zstd | 4 | 2.572 | 124,872 | 0.2570 | 16 | yes |
| zstd | 5 | 5.141 | 116,228 | 0.2392 | 5 | yes |
| zstd | 6 | 6.682 | 112,389 | 0.2313 | 5 | yes |
| zstd | 7 | 7.499 | 110,841 | 0.2281 | 5 | yes |
| zstd | 8 | 9.306 | 110,049 | 0.2265 | 5 | yes |
| zstd | 9 | 8.791 | 110,049 | 0.2265 | 5 | yes |
| zstd | 10 | 10.641 | 109,065 | 0.2245 | 5 | yes |
| zstd | 11 | 12.845 | 108,471 | 0.2232 | 5 | yes |
| zstd | 12 | 12.957 | 108,471 | 0.2232 | 5 | yes |
| zstd | 13 | 24.999 | 107,311 | 0.2208 | 5 | yes |
| zstd | 14 | 29.019 | 106,716 | 0.2196 | 5 | yes |
| zstd | 15 | 32.013 | 106,629 | 0.2194 | 5 | yes |
| zstd | 16 | 62.470 | 101,092 | 0.2080 | 5 | yes |
| zstd | 17 | 64.867 | 100,205 | 0.2062 | 5 | yes |
| zstd | 18 | 101.637 | 99,418 | 0.2046 | 5 | yes |
| zstd | 19 | 134.166 | 99,302 | 0.2044 | 5 | yes |
| zstd | 20 | 133.060 | 99,302 | 0.2044 | 5 | yes |
| zstd | 21 | 134.437 | 99,327 | 0.2044 | 5 | yes |
| zstd | 22 | 136.401 | 99,327 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.087 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.102 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.122 | 4,806 | 0.2791 | 12 | yes |
| gzip | 4 | 0.167 | 4,530 | 0.2631 | 9 | yes |
| gzip | 5 | 0.217 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.283 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.278 | 4,418 | 0.2566 | 11 | yes |
| gzip | 8 | 0.431 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.430 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.050 | 5,235 | 0.3041 | 25 | no |
| brotli | 1 | 0.060 | 5,134 | 0.2982 | 13 | yes |
| brotli | 2 | 0.107 | 4,741 | 0.2754 | 18 | yes |
| brotli | 3 | 0.150 | 4,650 | 0.2701 | 25 | no |
| brotli | 4 | 0.253 | 4,555 | 0.2646 | 7 | yes |
| brotli | 5 | 0.347 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.387 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.395 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.413 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 1.796 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.399 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 17.404 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.055 | 4,923 | 0.2859 | 25 | no |
| zstd | 2 | 0.066 | 4,868 | 0.2827 | 21 | yes |
| zstd | 3 | 0.089 | 4,717 | 0.2740 | 12 | yes |
| zstd | 4 | 0.090 | 4,679 | 0.2718 | 24 | yes |
| zstd | 5 | 0.174 | 4,519 | 0.2625 | 16 | yes |
| zstd | 6 | 0.238 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.270 | 4,437 | 0.2577 | 10 | yes |
| zstd | 8 | 0.299 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.344 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.369 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.611 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.617 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.905 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.366 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.470 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.343 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.494 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.476 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.915 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.839 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.881 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.908 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.052 | 3,217 | 0.4493 | 25 | no |
| gzip | 2 | 0.065 | 3,179 | 0.4440 | 25 | no |
| gzip | 3 | 0.063 | 3,150 | 0.4399 | 25 | no |
| gzip | 4 | 0.077 | 3,092 | 0.4318 | 25 | no |
| gzip | 5 | 0.083 | 3,047 | 0.4256 | 25 | no |
| gzip | 6 | 0.082 | 3,041 | 0.4247 | 25 | no |
| gzip | 7 | 0.096 | 3,039 | 0.4244 | 17 | yes |
| gzip | 8 | 0.105 | 3,039 | 0.4244 | 5 | yes |
| gzip | 9 | 0.093 | 3,039 | 0.4244 | 25 | no |
| brotli | 0 | 0.029 | 3,544 | 0.4950 | 25 | no |
| brotli | 1 | 0.036 | 3,378 | 0.4718 | 13 | yes |
| brotli | 2 | 0.054 | 3,258 | 0.4550 | 21 | yes |
| brotli | 3 | 0.074 | 3,207 | 0.4479 | 21 | yes |
| brotli | 4 | 0.158 | 3,138 | 0.4383 | 9 | yes |
| brotli | 5 | 0.229 | 2,961 | 0.4135 | 5 | yes |
| brotli | 6 | 0.210 | 2,950 | 0.4120 | 6 | yes |
| brotli | 7 | 0.235 | 2,942 | 0.4109 | 5 | yes |
| brotli | 8 | 0.225 | 2,942 | 0.4109 | 5 | yes |
| brotli | 9 | 1.640 | 2,943 | 0.4110 | 5 | yes |
| brotli | 10 | 3.306 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 7.587 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.042 | 3,250 | 0.4539 | 25 | no |
| zstd | 2 | 0.037 | 3,196 | 0.4464 | 21 | yes |
| zstd | 3 | 0.051 | 3,171 | 0.4429 | 16 | yes |
| zstd | 4 | 0.069 | 3,098 | 0.4327 | 25 | no |
| zstd | 5 | 0.077 | 3,077 | 0.4297 | 19 | yes |
| zstd | 6 | 0.133 | 3,055 | 0.4267 | 5 | yes |
| zstd | 7 | 0.117 | 3,050 | 0.4260 | 18 | yes |
| zstd | 8 | 0.108 | 3,050 | 0.4260 | 20 | yes |
| zstd | 9 | 0.188 | 3,050 | 0.4260 | 8 | yes |
| zstd | 10 | 0.177 | 3,050 | 0.4260 | 6 | yes |
| zstd | 11 | 0.364 | 3,041 | 0.4247 | 5 | yes |
| zstd | 12 | 0.501 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.672 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.694 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.679 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.210 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.294 | 2,991 | 0.4177 | 5 | yes |
| zstd | 18 | 1.287 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.307 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.303 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.257 | 2,991 | 0.4177 | 6 | yes |
| zstd | 22 | 1.206 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,101 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.859 | 66,867 | 0.4075 | 5 | yes |
| gzip | 2 | 1.994 | 65,284 | 0.3978 | 5 | yes |
| gzip | 3 | 2.267 | 64,273 | 0.3917 | 5 | yes |
| gzip | 4 | 2.343 | 61,944 | 0.3775 | 5 | yes |
| gzip | 5 | 3.236 | 60,295 | 0.3674 | 5 | yes |
| gzip | 6 | 3.931 | 60,024 | 0.3658 | 5 | yes |
| gzip | 7 | 4.543 | 59,987 | 0.3655 | 5 | yes |
| gzip | 8 | 4.840 | 59,968 | 0.3654 | 5 | yes |
| gzip | 9 | 4.646 | 59,968 | 0.3654 | 5 | yes |
| brotli | 0 | 0.637 | 71,266 | 0.4343 | 25 | no |
| brotli | 1 | 0.806 | 68,223 | 0.4157 | 5 | yes |
| brotli | 2 | 1.550 | 62,973 | 0.3837 | 5 | yes |
| brotli | 3 | 1.762 | 62,342 | 0.3799 | 5 | yes |
| brotli | 4 | 2.680 | 61,240 | 0.3732 | 5 | yes |
| brotli | 5 | 4.047 | 57,877 | 0.3527 | 5 | yes |
| brotli | 6 | 4.546 | 57,538 | 0.3506 | 5 | yes |
| brotli | 7 | 5.243 | 57,245 | 0.3488 | 5 | yes |
| brotli | 8 | 5.620 | 57,160 | 0.3483 | 5 | yes |
| brotli | 9 | 8.058 | 57,088 | 0.3479 | 5 | yes |
| brotli | 10 | 94.066 | 54,389 | 0.3314 | 5 | yes |
| brotli | 11 | 232.445 | 53,368 | 0.3252 | 5 | yes |
| zstd | 1 | 0.601 | 66,221 | 0.4035 | 5 | yes |
| zstd | 2 | 0.795 | 63,208 | 0.3852 | 5 | yes |
| zstd | 3 | 1.071 | 62,693 | 0.3820 | 5 | yes |
| zstd | 4 | 1.762 | 60,843 | 0.3708 | 5 | yes |
| zstd | 5 | 2.292 | 60,346 | 0.3677 | 5 | yes |
| zstd | 6 | 2.572 | 59,421 | 0.3621 | 5 | yes |
| zstd | 7 | 3.279 | 58,638 | 0.3573 | 5 | yes |
| zstd | 8 | 3.915 | 58,163 | 0.3544 | 5 | yes |
| zstd | 9 | 4.420 | 57,917 | 0.3529 | 5 | yes |
| zstd | 10 | 5.546 | 57,792 | 0.3522 | 11 | yes |
| zstd | 11 | 8.754 | 57,490 | 0.3503 | 5 | yes |
| zstd | 12 | 8.854 | 57,475 | 0.3502 | 9 | yes |
| zstd | 13 | 14.851 | 56,464 | 0.3441 | 5 | yes |
| zstd | 14 | 17.710 | 56,028 | 0.3414 | 5 | yes |
| zstd | 15 | 18.307 | 56,011 | 0.3413 | 5 | yes |
| zstd | 16 | 25.026 | 55,838 | 0.3403 | 5 | yes |
| zstd | 17 | 25.167 | 55,838 | 0.3403 | 5 | yes |
| zstd | 18 | 40.622 | 55,766 | 0.3398 | 5 | yes |
| zstd | 19 | 39.724 | 55,766 | 0.3398 | 5 | yes |
| zstd | 20 | 40.442 | 55,766 | 0.3398 | 5 | yes |
| zstd | 21 | 40.310 | 55,766 | 0.3398 | 5 | yes |
| zstd | 22 | 40.406 | 55,766 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.718 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.769 | 28,191 | 0.3849 | 6 | yes |
| gzip | 3 | 0.908 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 0.991 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.277 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.662 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.966 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.645 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.656 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.266 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.354 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.628 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.824 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.349 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.914 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.029 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.415 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.513 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.033 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 38.511 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 95.257 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.234 | 28,919 | 0.3949 | 7 | yes |
| zstd | 2 | 0.299 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.348 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.461 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.838 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.047 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.241 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.369 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.534 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.835 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.117 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.303 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.577 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.751 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.864 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.349 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.241 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.585 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 19.514 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 19.268 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.169 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 19.641 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.591 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.665 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.793 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.909 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.242 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.894 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.358 | 20,888 | 0.2758 | 6 | yes |
| gzip | 8 | 7.617 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.283 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.232 | 25,901 | 0.3420 | 13 | yes |
| brotli | 1 | 0.334 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.599 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.711 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.044 | 21,297 | 0.2812 | 10 | yes |
| brotli | 5 | 1.561 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.787 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.088 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.393 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.035 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 28.261 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 81.861 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.237 | 22,639 | 0.2989 | 8 | yes |
| zstd | 2 | 0.266 | 22,433 | 0.2962 | 5 | yes |
| zstd | 3 | 0.339 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.554 | 22,181 | 0.2929 | 8 | yes |
| zstd | 5 | 0.813 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.075 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.276 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.448 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.765 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.237 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 2.983 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 3.968 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.784 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 6.640 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 7.651 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.897 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 13.792 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 21.454 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 21.000 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 24.460 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 34.778 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 42.855 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.993 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.047 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.234 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.691 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.018 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.677 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.272 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.473 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.570 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.411 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.585 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.092 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.277 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.991 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.807 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.035 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.417 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 3.772 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 4.506 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 92.180 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 290.156 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.454 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.527 | 34,301 | 0.1478 | 6 | yes |
| zstd | 3 | 0.608 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.800 | 30,973 | 0.1334 | 23 | yes |
| zstd | 5 | 2.301 | 29,744 | 0.1281 | 25 | no |
| zstd | 6 | 2.685 | 29,727 | 0.1281 | 8 | yes |
| zstd | 7 | 2.782 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 3.266 | 28,645 | 0.1234 | 19 | yes |
| zstd | 9 | 3.653 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.839 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.023 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.964 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.246 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.294 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 27.132 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 53.720 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 61.018 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 79.660 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 90.610 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 96.133 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 96.171 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 100.352 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 87.006 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 88.479 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 105.734 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 137.968 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 161.481 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 205.515 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 310.987 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 873.808 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1165.246 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 41.782 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 56.175 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 105.443 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 122.772 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 158.405 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 276.660 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 320.426 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 446.609 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 581.952 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 776.412 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 11962.309 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 35510.061 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 42.030 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 53.074 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 65.319 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 64.633 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 134.774 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 187.473 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 207.480 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 271.452 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 278.258 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 364.914 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 533.681 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 577.155 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 682.990 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 917.616 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1135.477 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 2929.754 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3318.799 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 4581.629 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 8482.869 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 8877.907 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 8789.394 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9377.445 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.243 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.209 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.408 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.376 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.401 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.546 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.178 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.144 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.352 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.912 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.321 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.910 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.963 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.508 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.687 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 30.516 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 43.325 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 50.759 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 63.184 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 893.921 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1853.847 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.044 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.897 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.919 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.543 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.189 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.222 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.644 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.900 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.125 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.329 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 24.210 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.429 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 47.684 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 46.725 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 48.055 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 85.596 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 104.973 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 138.803 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 159.245 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 160.991 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 156.515 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 162.638 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.099 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.119 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.169 | 5,356 | 0.2749 | 8 | yes |
| gzip | 4 | 0.204 | 5,145 | 0.2641 | 7 | yes |
| gzip | 5 | 0.275 | 4,896 | 0.2513 | 5 | yes |
| gzip | 6 | 0.361 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.502 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.651 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.648 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.061 | 6,028 | 0.3094 | 15 | yes |
| brotli | 1 | 0.071 | 5,737 | 0.2945 | 25 | no |
| brotli | 2 | 0.140 | 4,944 | 0.2538 | 10 | yes |
| brotli | 3 | 0.163 | 4,930 | 0.2531 | 13 | yes |
| brotli | 4 | 0.296 | 4,898 | 0.2514 | 5 | yes |
| brotli | 5 | 0.468 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.499 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.569 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.609 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.706 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 6.921 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 20.593 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.057 | 5,379 | 0.2761 | 10 | yes |
| zstd | 2 | 0.062 | 5,176 | 0.2657 | 19 | yes |
| zstd | 3 | 0.087 | 5,169 | 0.2653 | 11 | yes |
| zstd | 4 | 0.088 | 5,154 | 0.2646 | 11 | yes |
| zstd | 5 | 0.179 | 5,074 | 0.2605 | 5 | yes |
| zstd | 6 | 0.226 | 4,797 | 0.2463 | 16 | yes |
| zstd | 7 | 0.278 | 4,702 | 0.2414 | 7 | yes |
| zstd | 8 | 0.338 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.392 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.458 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.566 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.599 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.005 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.682 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.784 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.668 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.843 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.849 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.357 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.752 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.641 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.908 | 4,348 | 0.2232 | 5 | yes |
