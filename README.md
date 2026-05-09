# Node Compression Benchmark

Last updated: 2026-05-09T04:55:56.353Z

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
| gzip | 1 | 1.011 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.044 | 30,134 | 0.3827 | 10 | yes |
| gzip | 3 | 1.192 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 2.051 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 2.656 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.562 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.345 | 27,547 | 0.3498 | 8 | yes |
| gzip | 8 | 2.724 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.717 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.355 | 33,111 | 0.4205 | 5 | yes |
| brotli | 1 | 0.804 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.814 | 29,394 | 0.3733 | 25 | yes |
| brotli | 3 | 0.941 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.454 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.045 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.208 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.028 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.910 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.246 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 35.964 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 100.555 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.464 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.350 | 30,069 | 0.3818 | 25 | no |
| zstd | 3 | 0.309 | 29,214 | 0.3710 | 17 | yes |
| zstd | 4 | 1.095 | 29,108 | 0.3696 | 12 | yes |
| zstd | 5 | 1.322 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.673 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.963 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 2.097 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.239 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.522 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.156 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.609 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.532 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.869 | 26,432 | 0.3357 | 6 | yes |
| zstd | 15 | 9.154 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.280 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.413 | 26,336 | 0.3344 | 9 | yes |
| zstd | 18 | 11.341 | 26,336 | 0.3344 | 6 | yes |
| zstd | 19 | 20.906 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.011 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 20.911 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.003 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 94.341 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 97.116 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 103.305 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 115.471 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 134.604 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 151.958 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 162.982 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 183.151 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 196.385 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.364 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.937 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.915 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.412 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 89.593 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 125.974 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 141.333 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 414.798 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 537.494 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 725.061 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6535.943 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13617.965 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.641 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.946 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 38.761 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 46.217 | 3,084,237 | 0.5636 | 7 | yes |
| zstd | 5 | 68.714 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 81.145 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 88.166 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 103.018 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 103.474 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 127.644 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 168.974 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 193.511 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 410.439 | 2,864,062 | 0.5233 | 7 | yes |
| zstd | 14 | 459.020 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 555.925 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 732.214 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 902.122 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1139.352 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1279.655 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1241.008 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1269.094 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1258.056 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.631 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.646 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.700 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 14.493 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 14.366 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 14.423 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 14.383 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 14.339 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 14.311 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.251 | 613,595 | 0.9981 | 14 | yes |
| brotli | 1 | 0.211 | 614,785 | 1.0000 | 12 | yes |
| brotli | 2 | 0.568 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.720 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.883 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.423 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.472 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 1.960 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.215 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 3.136 | 614,785 | 1.0000 | 6 | yes |
| brotli | 10 | 115.556 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 263.484 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.329 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.372 | 614,804 | 1.0000 | 9 | yes |
| zstd | 3 | 0.433 | 614,804 | 1.0000 | 25 | no |
| zstd | 4 | 0.405 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.548 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.582 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.653 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.646 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.933 | 614,804 | 1.0000 | 25 | no |
| zstd | 10 | 0.809 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 1.280 | 614,804 | 1.0000 | 9 | yes |
| zstd | 12 | 1.311 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 5.103 | 612,619 | 0.9965 | 25 | no |
| zstd | 14 | 5.056 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 4.589 | 612,619 | 0.9965 | 25 | no |
| zstd | 16 | 15.804 | 612,536 | 0.9963 | 6 | yes |
| zstd | 17 | 18.885 | 612,516 | 0.9963 | 6 | yes |
| zstd | 18 | 28.217 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 29.152 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 28.076 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 28.312 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 28.882 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,120 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.270 | 144,617 | 0.2963 | 5 | yes |
| gzip | 2 | 4.684 | 137,841 | 0.2824 | 5 | yes |
| gzip | 3 | 6.122 | 133,234 | 0.2730 | 5 | yes |
| gzip | 4 | 6.274 | 125,052 | 0.2562 | 5 | yes |
| gzip | 5 | 9.090 | 120,442 | 0.2467 | 5 | yes |
| gzip | 6 | 13.475 | 118,722 | 0.2432 | 5 | yes |
| gzip | 7 | 17.178 | 118,261 | 0.2423 | 5 | yes |
| gzip | 8 | 32.390 | 117,996 | 0.2417 | 5 | yes |
| gzip | 9 | 50.179 | 117,926 | 0.2416 | 5 | yes |
| brotli | 0 | 1.575 | 148,891 | 0.3050 | 5 | yes |
| brotli | 1 | 2.136 | 136,753 | 0.2802 | 5 | yes |
| brotli | 2 | 3.988 | 128,591 | 0.2634 | 5 | yes |
| brotli | 3 | 4.603 | 125,908 | 0.2579 | 5 | yes |
| brotli | 4 | 6.457 | 122,108 | 0.2502 | 5 | yes |
| brotli | 5 | 10.027 | 112,160 | 0.2298 | 5 | yes |
| brotli | 6 | 11.568 | 109,504 | 0.2243 | 5 | yes |
| brotli | 7 | 14.236 | 107,566 | 0.2204 | 5 | yes |
| brotli | 8 | 17.312 | 106,551 | 0.2183 | 5 | yes |
| brotli | 9 | 21.831 | 105,637 | 0.2164 | 5 | yes |
| brotli | 10 | 293.951 | 98,220 | 0.2012 | 5 | yes |
| brotli | 11 | 746.506 | 96,024 | 0.1967 | 5 | yes |
| zstd | 1 | 1.784 | 137,463 | 0.2816 | 5 | yes |
| zstd | 2 | 1.927 | 133,238 | 0.2730 | 5 | yes |
| zstd | 3 | 2.284 | 125,660 | 0.2574 | 10 | yes |
| zstd | 4 | 2.778 | 125,451 | 0.2570 | 7 | yes |
| zstd | 5 | 4.663 | 116,783 | 0.2393 | 5 | yes |
| zstd | 6 | 6.309 | 112,910 | 0.2313 | 5 | yes |
| zstd | 7 | 7.052 | 111,350 | 0.2281 | 5 | yes |
| zstd | 8 | 8.931 | 110,572 | 0.2265 | 5 | yes |
| zstd | 9 | 8.868 | 110,572 | 0.2265 | 5 | yes |
| zstd | 10 | 10.805 | 109,567 | 0.2245 | 5 | yes |
| zstd | 11 | 13.642 | 108,971 | 0.2232 | 5 | yes |
| zstd | 12 | 13.740 | 108,971 | 0.2232 | 5 | yes |
| zstd | 13 | 27.419 | 107,801 | 0.2208 | 5 | yes |
| zstd | 14 | 32.950 | 107,188 | 0.2196 | 5 | yes |
| zstd | 15 | 36.684 | 107,114 | 0.2194 | 5 | yes |
| zstd | 16 | 64.850 | 101,538 | 0.2080 | 5 | yes |
| zstd | 17 | 71.806 | 100,666 | 0.2062 | 5 | yes |
| zstd | 18 | 101.887 | 99,875 | 0.2046 | 5 | yes |
| zstd | 19 | 131.196 | 99,768 | 0.2044 | 5 | yes |
| zstd | 20 | 131.174 | 99,768 | 0.2044 | 5 | yes |
| zstd | 21 | 132.261 | 99,792 | 0.2044 | 5 | yes |
| zstd | 22 | 131.674 | 99,792 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.069 | 4,987 | 0.2897 | 20 | yes |
| gzip | 2 | 0.076 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.089 | 4,805 | 0.2791 | 25 | no |
| gzip | 4 | 0.111 | 4,529 | 0.2631 | 20 | yes |
| gzip | 5 | 0.134 | 4,441 | 0.2579 | 22 | yes |
| gzip | 6 | 0.176 | 4,425 | 0.2570 | 13 | yes |
| gzip | 7 | 0.219 | 4,418 | 0.2566 | 13 | yes |
| gzip | 8 | 0.443 | 4,418 | 0.2566 | 5 | yes |
| gzip | 9 | 0.445 | 4,418 | 0.2566 | 5 | yes |
| brotli | 0 | 0.055 | 5,234 | 0.3040 | 9 | yes |
| brotli | 1 | 0.067 | 5,133 | 0.2981 | 13 | yes |
| brotli | 2 | 0.101 | 4,740 | 0.2753 | 25 | no |
| brotli | 3 | 0.114 | 4,650 | 0.2701 | 19 | yes |
| brotli | 4 | 0.197 | 4,555 | 0.2646 | 25 | no |
| brotli | 5 | 0.351 | 4,276 | 0.2484 | 7 | yes |
| brotli | 6 | 0.365 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.371 | 4,264 | 0.2477 | 14 | yes |
| brotli | 8 | 0.393 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.529 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.265 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.535 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.082 | 4,924 | 0.2860 | 9 | yes |
| zstd | 2 | 0.058 | 4,868 | 0.2827 | 14 | yes |
| zstd | 3 | 0.072 | 4,718 | 0.2740 | 18 | yes |
| zstd | 4 | 0.076 | 4,680 | 0.2718 | 11 | yes |
| zstd | 5 | 0.140 | 4,518 | 0.2624 | 8 | yes |
| zstd | 6 | 0.187 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.203 | 4,437 | 0.2577 | 14 | yes |
| zstd | 8 | 0.223 | 4,425 | 0.2570 | 7 | yes |
| zstd | 9 | 0.239 | 4,419 | 0.2567 | 18 | yes |
| zstd | 10 | 0.309 | 4,409 | 0.2561 | 15 | yes |
| zstd | 11 | 0.674 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.661 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.948 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.403 | 4,305 | 0.2500 | 5 | yes |
| zstd | 15 | 1.518 | 4,302 | 0.2499 | 5 | yes |
| zstd | 16 | 2.212 | 4,281 | 0.2486 | 5 | yes |
| zstd | 17 | 2.310 | 4,280 | 0.2486 | 5 | yes |
| zstd | 18 | 2.312 | 4,280 | 0.2486 | 5 | yes |
| zstd | 19 | 4.526 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.532 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.554 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.506 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.048 | 3,217 | 0.4493 | 24 | yes |
| gzip | 2 | 0.050 | 3,179 | 0.4440 | 18 | yes |
| gzip | 3 | 0.053 | 3,150 | 0.4399 | 17 | yes |
| gzip | 4 | 0.060 | 3,092 | 0.4318 | 16 | yes |
| gzip | 5 | 0.066 | 3,047 | 0.4256 | 25 | no |
| gzip | 6 | 0.071 | 3,041 | 0.4247 | 19 | yes |
| gzip | 7 | 0.075 | 3,039 | 0.4244 | 25 | no |
| gzip | 8 | 0.075 | 3,039 | 0.4244 | 5 | yes |
| gzip | 9 | 0.073 | 3,039 | 0.4244 | 5 | yes |
| brotli | 0 | 0.032 | 3,544 | 0.4950 | 9 | yes |
| brotli | 1 | 0.043 | 3,378 | 0.4718 | 25 | no |
| brotli | 2 | 0.059 | 3,258 | 0.4550 | 13 | yes |
| brotli | 3 | 0.072 | 3,207 | 0.4479 | 15 | yes |
| brotli | 4 | 0.125 | 3,138 | 0.4383 | 14 | yes |
| brotli | 5 | 0.171 | 2,961 | 0.4135 | 25 | no |
| brotli | 6 | 0.170 | 2,950 | 0.4120 | 13 | yes |
| brotli | 7 | 0.170 | 2,942 | 0.4109 | 16 | yes |
| brotli | 8 | 0.175 | 2,942 | 0.4109 | 7 | yes |
| brotli | 9 | 0.279 | 2,943 | 0.4110 | 5 | yes |
| brotli | 10 | 3.450 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 8.277 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.034 | 3,250 | 0.4539 | 21 | yes |
| zstd | 2 | 0.035 | 3,196 | 0.4464 | 13 | yes |
| zstd | 3 | 0.043 | 3,171 | 0.4429 | 12 | yes |
| zstd | 4 | 0.063 | 3,098 | 0.4327 | 16 | yes |
| zstd | 5 | 0.073 | 3,077 | 0.4297 | 9 | yes |
| zstd | 6 | 0.087 | 3,055 | 0.4267 | 9 | yes |
| zstd | 7 | 0.099 | 3,050 | 0.4260 | 7 | yes |
| zstd | 8 | 0.099 | 3,050 | 0.4260 | 13 | yes |
| zstd | 9 | 0.120 | 3,050 | 0.4260 | 20 | yes |
| zstd | 10 | 0.120 | 3,050 | 0.4260 | 5 | yes |
| zstd | 11 | 0.235 | 3,041 | 0.4247 | 15 | yes |
| zstd | 12 | 0.431 | 3,009 | 0.4203 | 6 | yes |
| zstd | 13 | 0.575 | 2,994 | 0.4182 | 7 | yes |
| zstd | 14 | 0.596 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.556 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.041 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.125 | 2,991 | 0.4177 | 6 | yes |
| zstd | 18 | 1.084 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.042 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.100 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.091 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.068 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,101 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.052 | 66,867 | 0.4075 | 5 | yes |
| gzip | 2 | 2.243 | 65,284 | 0.3978 | 5 | yes |
| gzip | 3 | 2.547 | 64,273 | 0.3917 | 5 | yes |
| gzip | 4 | 2.856 | 61,944 | 0.3775 | 5 | yes |
| gzip | 5 | 3.924 | 60,295 | 0.3674 | 5 | yes |
| gzip | 6 | 4.919 | 60,024 | 0.3658 | 5 | yes |
| gzip | 7 | 5.366 | 59,987 | 0.3655 | 5 | yes |
| gzip | 8 | 5.852 | 59,968 | 0.3654 | 5 | yes |
| gzip | 9 | 5.803 | 59,968 | 0.3654 | 5 | yes |
| brotli | 0 | 0.550 | 71,266 | 0.4343 | 17 | yes |
| brotli | 1 | 0.911 | 68,223 | 0.4157 | 5 | yes |
| brotli | 2 | 1.725 | 62,973 | 0.3837 | 5 | yes |
| brotli | 3 | 2.027 | 62,342 | 0.3799 | 5 | yes |
| brotli | 4 | 2.983 | 61,240 | 0.3732 | 5 | yes |
| brotli | 5 | 4.454 | 57,877 | 0.3527 | 5 | yes |
| brotli | 6 | 4.995 | 57,538 | 0.3506 | 5 | yes |
| brotli | 7 | 6.024 | 57,245 | 0.3488 | 5 | yes |
| brotli | 8 | 6.543 | 57,160 | 0.3483 | 5 | yes |
| brotli | 9 | 7.658 | 57,088 | 0.3479 | 5 | yes |
| brotli | 10 | 105.184 | 54,389 | 0.3314 | 5 | yes |
| brotli | 11 | 257.582 | 53,368 | 0.3252 | 5 | yes |
| zstd | 1 | 0.669 | 66,221 | 0.4035 | 7 | yes |
| zstd | 2 | 0.813 | 63,208 | 0.3852 | 5 | yes |
| zstd | 3 | 1.037 | 62,693 | 0.3820 | 5 | yes |
| zstd | 4 | 1.840 | 60,843 | 0.3708 | 5 | yes |
| zstd | 5 | 2.081 | 60,346 | 0.3677 | 5 | yes |
| zstd | 6 | 2.546 | 59,421 | 0.3621 | 5 | yes |
| zstd | 7 | 3.027 | 58,638 | 0.3573 | 5 | yes |
| zstd | 8 | 3.743 | 58,163 | 0.3544 | 5 | yes |
| zstd | 9 | 4.237 | 57,917 | 0.3529 | 5 | yes |
| zstd | 10 | 5.151 | 57,792 | 0.3522 | 5 | yes |
| zstd | 11 | 8.682 | 57,490 | 0.3503 | 5 | yes |
| zstd | 12 | 8.971 | 57,475 | 0.3502 | 5 | yes |
| zstd | 13 | 14.974 | 56,464 | 0.3441 | 5 | yes |
| zstd | 14 | 17.575 | 56,028 | 0.3414 | 5 | yes |
| zstd | 15 | 18.045 | 56,011 | 0.3413 | 5 | yes |
| zstd | 16 | 23.609 | 55,838 | 0.3403 | 5 | yes |
| zstd | 17 | 23.774 | 55,838 | 0.3403 | 5 | yes |
| zstd | 18 | 39.731 | 55,766 | 0.3398 | 5 | yes |
| zstd | 19 | 39.477 | 55,766 | 0.3398 | 5 | yes |
| zstd | 20 | 39.399 | 55,766 | 0.3398 | 5 | yes |
| zstd | 21 | 39.761 | 55,766 | 0.3398 | 5 | yes |
| zstd | 22 | 39.644 | 55,766 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.842 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.929 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.076 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.178 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.563 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.036 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.440 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.342 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.334 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.208 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.326 | 29,754 | 0.4063 | 13 | yes |
| brotli | 2 | 0.723 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.857 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.343 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.932 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.087 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.551 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.744 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.254 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 42.239 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 101.071 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.209 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.229 | 28,008 | 0.3824 | 9 | yes |
| zstd | 3 | 0.289 | 27,463 | 0.3750 | 9 | yes |
| zstd | 4 | 0.436 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.821 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.141 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.336 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.472 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.658 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.966 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.230 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.441 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.394 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.535 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.573 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.879 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.914 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.882 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.734 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.716 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.649 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.825 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.649 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.723 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.889 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.999 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.416 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 2.187 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.942 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 8.730 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 8.712 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.181 | 25,901 | 0.3420 | 9 | yes |
| brotli | 1 | 0.375 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.660 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.802 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.210 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.698 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.929 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.326 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.728 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.553 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 31.051 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 89.360 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.210 | 22,639 | 0.2989 | 9 | yes |
| zstd | 2 | 0.227 | 22,433 | 0.2962 | 17 | yes |
| zstd | 3 | 0.266 | 22,208 | 0.2932 | 10 | yes |
| zstd | 4 | 0.372 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.727 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.032 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.264 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.457 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.800 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.406 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.344 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.402 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.994 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 6.978 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.110 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.615 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.094 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.780 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 20.255 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 24.048 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.648 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 45.870 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.198 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.266 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.480 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.779 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.284 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.188 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.958 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.360 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.435 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.323 | 43,268 | 0.1864 | 24 | yes |
| brotli | 1 | 0.644 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.217 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.456 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.319 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.183 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.428 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.795 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.325 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.223 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 103.208 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 305.810 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.509 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.540 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.593 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.462 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.753 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.019 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.275 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.801 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.324 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.055 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.188 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.073 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.729 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.213 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.027 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.869 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.669 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 73.004 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.895 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 83.743 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 84.043 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 84.130 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 99.252 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 99.935 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 121.817 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 142.125 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 173.414 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 231.561 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 361.541 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 1040.845 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1391.912 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 44.090 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 65.296 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 115.816 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 135.455 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 184.176 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 308.945 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 359.068 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 521.204 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 669.190 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 914.566 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 14079.265 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 38399.237 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.780 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 54.677 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 68.182 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 72.961 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 147.749 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 207.576 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 236.019 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 299.978 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 310.365 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 409.854 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 582.309 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 608.982 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 863.268 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1098.838 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1399.018 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3500.326 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3980.911 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5296.011 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 8715.731 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 8959.861 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 8967.997 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9413.296 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.668 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.822 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.492 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.404 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 27.018 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 32.155 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 34.137 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.686 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.847 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.104 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.603 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.417 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.671 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.671 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.311 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.823 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 45.849 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 55.289 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 67.983 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 975.797 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2064.085 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.278 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.111 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.584 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.516 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.684 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.526 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.668 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.412 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.747 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 23.831 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 28.548 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 27.743 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 56.381 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 54.990 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 55.296 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 95.730 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 122.193 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 154.123 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 170.514 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 170.698 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 174.187 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 172.595 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.084 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.086 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.096 | 5,356 | 0.2749 | 24 | yes |
| gzip | 4 | 0.134 | 5,145 | 0.2641 | 17 | yes |
| gzip | 5 | 0.169 | 4,896 | 0.2513 | 25 | no |
| gzip | 6 | 0.278 | 4,884 | 0.2507 | 25 | no |
| gzip | 7 | 0.519 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.698 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.707 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.060 | 6,028 | 0.3094 | 13 | yes |
| brotli | 1 | 0.077 | 5,737 | 0.2945 | 9 | yes |
| brotli | 2 | 0.108 | 4,944 | 0.2538 | 16 | yes |
| brotli | 3 | 0.128 | 4,930 | 0.2531 | 25 | no |
| brotli | 4 | 0.211 | 4,898 | 0.2514 | 25 | no |
| brotli | 5 | 0.387 | 4,581 | 0.2352 | 18 | yes |
| brotli | 6 | 0.473 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.637 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.628 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.743 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.638 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.441 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.060 | 5,379 | 0.2761 | 14 | yes |
| zstd | 2 | 0.063 | 5,176 | 0.2657 | 11 | yes |
| zstd | 3 | 0.080 | 5,169 | 0.2653 | 7 | yes |
| zstd | 4 | 0.083 | 5,154 | 0.2646 | 10 | yes |
| zstd | 5 | 0.156 | 5,074 | 0.2605 | 16 | yes |
| zstd | 6 | 0.199 | 4,797 | 0.2463 | 9 | yes |
| zstd | 7 | 0.235 | 4,702 | 0.2414 | 13 | yes |
| zstd | 8 | 0.274 | 4,696 | 0.2411 | 12 | yes |
| zstd | 9 | 0.334 | 4,690 | 0.2408 | 14 | yes |
| zstd | 10 | 0.459 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.612 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.642 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.980 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.741 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.839 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.550 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.553 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.547 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.950 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.040 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.020 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.015 | 4,348 | 0.2232 | 5 | yes |
