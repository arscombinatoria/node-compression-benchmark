# Node Compression Benchmark

Last updated: 2026-04-21T21:23:07.387Z

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
| gzip | 1 | 0.954 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.022 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.102 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.244 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.630 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.878 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.082 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.395 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.388 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.375 | 33,111 | 0.4205 | 9 | yes |
| brotli | 1 | 0.745 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.830 | 29,394 | 0.3733 | 10 | yes |
| brotli | 3 | 0.923 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.403 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 3.163 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 3.373 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.735 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.574 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.559 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.703 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.739 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.465 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.473 | 30,069 | 0.3818 | 19 | yes |
| zstd | 3 | 0.616 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.567 | 29,108 | 0.3696 | 25 | no |
| zstd | 5 | 0.993 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.562 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.910 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.965 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.173 | 27,118 | 0.3444 | 8 | yes |
| zstd | 10 | 2.404 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.005 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.298 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.439 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.864 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 9.026 | 26,420 | 0.3355 | 6 | yes |
| zstd | 16 | 12.112 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 12.109 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 12.093 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 22.777 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 22.703 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 22.700 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 22.803 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 84.000 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 89.967 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 92.860 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 103.291 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 119.045 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 137.573 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 142.512 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 160.183 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.647 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.513 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 27.696 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.534 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.048 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 83.648 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 126.061 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 142.443 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 402.548 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 510.440 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 681.909 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5952.371 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12491.588 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.780 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 25.000 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 40.122 | 3,139,155 | 0.5736 | 9 | yes |
| zstd | 4 | 41.532 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 67.561 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.899 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 83.737 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 97.660 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 98.644 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 117.160 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 155.432 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 183.044 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 365.234 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 432.466 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 526.080 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 746.970 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 878.061 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1194.477 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1305.596 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1303.397 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1243.251 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1251.682 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.000 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 11.893 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 11.885 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.498 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.430 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.432 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.438 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.409 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.478 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.266 | 613,595 | 0.9981 | 13 | yes |
| brotli | 1 | 0.239 | 614,785 | 1.0000 | 16 | yes |
| brotli | 2 | 0.636 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.831 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.138 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.648 | 614,785 | 1.0000 | 7 | yes |
| brotli | 6 | 1.532 | 614,785 | 1.0000 | 11 | yes |
| brotli | 7 | 1.950 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.144 | 614,785 | 1.0000 | 12 | yes |
| brotli | 9 | 4.869 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 108.048 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 245.856 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.321 | 614,805 | 1.0000 | 11 | yes |
| zstd | 2 | 0.306 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.362 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.463 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 1.755 | 614,804 | 1.0000 | 13 | yes |
| zstd | 6 | 0.609 | 614,804 | 1.0000 | 12 | yes |
| zstd | 7 | 1.015 | 614,804 | 1.0000 | 25 | no |
| zstd | 8 | 0.843 | 614,804 | 1.0000 | 25 | no |
| zstd | 9 | 1.219 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 1.771 | 614,804 | 1.0000 | 25 | no |
| zstd | 11 | 1.139 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 1.126 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 4.570 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 4.379 | 612,619 | 0.9965 | 25 | no |
| zstd | 15 | 4.511 | 612,619 | 0.9965 | 15 | yes |
| zstd | 16 | 17.052 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 15.861 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 22.287 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 25.964 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 25.643 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 24.435 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 26.248 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 485,915 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.823 | 143,918 | 0.2962 | 5 | yes |
| gzip | 2 | 4.189 | 137,173 | 0.2823 | 5 | yes |
| gzip | 3 | 5.420 | 132,619 | 0.2729 | 5 | yes |
| gzip | 4 | 5.754 | 124,435 | 0.2561 | 5 | yes |
| gzip | 5 | 8.058 | 119,872 | 0.2467 | 5 | yes |
| gzip | 6 | 11.586 | 118,159 | 0.2432 | 5 | yes |
| gzip | 7 | 14.715 | 117,684 | 0.2422 | 5 | yes |
| gzip | 8 | 27.538 | 117,420 | 0.2416 | 5 | yes |
| gzip | 9 | 42.621 | 117,341 | 0.2415 | 5 | yes |
| brotli | 0 | 1.517 | 148,158 | 0.3049 | 5 | yes |
| brotli | 1 | 2.114 | 136,127 | 0.2801 | 5 | yes |
| brotli | 2 | 3.890 | 127,990 | 0.2634 | 5 | yes |
| brotli | 3 | 4.471 | 125,439 | 0.2582 | 5 | yes |
| brotli | 4 | 6.473 | 121,316 | 0.2497 | 5 | yes |
| brotli | 5 | 10.059 | 111,622 | 0.2297 | 5 | yes |
| brotli | 6 | 11.540 | 108,985 | 0.2243 | 5 | yes |
| brotli | 7 | 13.568 | 107,045 | 0.2203 | 5 | yes |
| brotli | 8 | 16.416 | 106,028 | 0.2182 | 5 | yes |
| brotli | 9 | 23.137 | 105,144 | 0.2164 | 5 | yes |
| brotli | 10 | 267.918 | 97,735 | 0.2011 | 5 | yes |
| brotli | 11 | 707.858 | 95,569 | 0.1967 | 5 | yes |
| zstd | 1 | 1.651 | 136,842 | 0.2816 | 5 | yes |
| zstd | 2 | 1.795 | 132,630 | 0.2729 | 5 | yes |
| zstd | 3 | 2.237 | 125,091 | 0.2574 | 5 | yes |
| zstd | 4 | 2.266 | 124,872 | 0.2570 | 5 | yes |
| zstd | 5 | 4.581 | 116,228 | 0.2392 | 5 | yes |
| zstd | 6 | 6.730 | 112,389 | 0.2313 | 5 | yes |
| zstd | 7 | 7.864 | 110,841 | 0.2281 | 5 | yes |
| zstd | 8 | 9.729 | 110,049 | 0.2265 | 5 | yes |
| zstd | 9 | 9.688 | 110,049 | 0.2265 | 5 | yes |
| zstd | 10 | 11.943 | 109,065 | 0.2245 | 5 | yes |
| zstd | 11 | 14.221 | 108,471 | 0.2232 | 6 | yes |
| zstd | 12 | 13.580 | 108,471 | 0.2232 | 5 | yes |
| zstd | 13 | 25.879 | 107,311 | 0.2208 | 5 | yes |
| zstd | 14 | 30.921 | 106,716 | 0.2196 | 5 | yes |
| zstd | 15 | 34.353 | 106,629 | 0.2194 | 5 | yes |
| zstd | 16 | 63.211 | 101,092 | 0.2080 | 5 | yes |
| zstd | 17 | 71.086 | 100,205 | 0.2062 | 8 | yes |
| zstd | 18 | 107.972 | 99,418 | 0.2046 | 5 | yes |
| zstd | 19 | 142.130 | 99,302 | 0.2044 | 5 | yes |
| zstd | 20 | 140.680 | 99,302 | 0.2044 | 5 | yes |
| zstd | 21 | 141.247 | 99,327 | 0.2044 | 5 | yes |
| zstd | 22 | 141.376 | 99,327 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.085 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.114 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.150 | 4,806 | 0.2791 | 5 | yes |
| gzip | 4 | 0.170 | 4,530 | 0.2631 | 11 | yes |
| gzip | 5 | 0.238 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.282 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.312 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.458 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.471 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.055 | 5,235 | 0.3041 | 25 | no |
| brotli | 1 | 0.063 | 5,134 | 0.2982 | 25 | no |
| brotli | 2 | 0.111 | 4,741 | 0.2754 | 20 | yes |
| brotli | 3 | 0.142 | 4,650 | 0.2701 | 18 | yes |
| brotli | 4 | 0.266 | 4,555 | 0.2646 | 8 | yes |
| brotli | 5 | 0.405 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.400 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.429 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.446 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 2.047 | 4,244 | 0.2465 | 8 | yes |
| brotli | 10 | 6.928 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.823 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.056 | 4,923 | 0.2859 | 8 | yes |
| zstd | 2 | 0.065 | 4,868 | 0.2827 | 25 | yes |
| zstd | 3 | 0.096 | 4,717 | 0.2740 | 5 | yes |
| zstd | 4 | 0.098 | 4,679 | 0.2718 | 10 | yes |
| zstd | 5 | 0.187 | 4,519 | 0.2625 | 12 | yes |
| zstd | 6 | 0.246 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.275 | 4,437 | 0.2577 | 7 | yes |
| zstd | 8 | 0.304 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.362 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.398 | 4,410 | 0.2561 | 6 | yes |
| zstd | 11 | 0.631 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.665 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.953 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.475 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.561 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.517 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.708 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.728 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.273 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.274 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.274 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.289 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.054 | 3,217 | 0.4493 | 20 | yes |
| gzip | 2 | 0.057 | 3,179 | 0.4440 | 25 | no |
| gzip | 3 | 0.060 | 3,150 | 0.4399 | 25 | no |
| gzip | 4 | 0.140 | 3,092 | 0.4318 | 25 | no |
| gzip | 5 | 0.083 | 3,047 | 0.4256 | 25 | no |
| gzip | 6 | 0.090 | 3,041 | 0.4247 | 25 | no |
| gzip | 7 | 0.104 | 3,039 | 0.4244 | 8 | yes |
| gzip | 8 | 0.111 | 3,039 | 0.4244 | 5 | yes |
| gzip | 9 | 0.083 | 3,039 | 0.4244 | 21 | yes |
| brotli | 0 | 0.030 | 3,544 | 0.4950 | 20 | yes |
| brotli | 1 | 0.040 | 3,378 | 0.4718 | 25 | no |
| brotli | 2 | 0.058 | 3,258 | 0.4550 | 16 | yes |
| brotli | 3 | 0.076 | 3,207 | 0.4479 | 25 | no |
| brotli | 4 | 0.168 | 3,138 | 0.4383 | 6 | yes |
| brotli | 5 | 0.222 | 2,961 | 0.4135 | 6 | yes |
| brotli | 6 | 0.227 | 2,950 | 0.4120 | 11 | yes |
| brotli | 7 | 0.257 | 2,942 | 0.4109 | 5 | yes |
| brotli | 8 | 0.267 | 2,942 | 0.4109 | 5 | yes |
| brotli | 9 | 1.876 | 2,943 | 0.4110 | 8 | yes |
| brotli | 10 | 3.297 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 7.880 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.040 | 3,250 | 0.4539 | 25 | yes |
| zstd | 2 | 0.041 | 3,196 | 0.4464 | 25 | no |
| zstd | 3 | 0.045 | 3,171 | 0.4429 | 19 | yes |
| zstd | 4 | 0.086 | 3,098 | 0.4327 | 5 | yes |
| zstd | 5 | 0.075 | 3,077 | 0.4297 | 9 | yes |
| zstd | 6 | 0.103 | 3,055 | 0.4267 | 15 | yes |
| zstd | 7 | 0.121 | 3,050 | 0.4260 | 8 | yes |
| zstd | 8 | 0.118 | 3,050 | 0.4260 | 15 | yes |
| zstd | 9 | 0.196 | 3,050 | 0.4260 | 5 | yes |
| zstd | 10 | 0.159 | 3,050 | 0.4260 | 19 | yes |
| zstd | 11 | 0.355 | 3,041 | 0.4247 | 5 | yes |
| zstd | 12 | 0.489 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.670 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.677 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.670 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.284 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.291 | 2,991 | 0.4177 | 5 | yes |
| zstd | 18 | 1.287 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.281 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.290 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.294 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.288 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.845 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 2.005 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.274 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.534 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.415 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.234 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 4.575 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 4.952 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 5.021 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.659 | 70,918 | 0.4333 | 5 | yes |
| brotli | 1 | 0.899 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.656 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 1.937 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 2.986 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.372 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 4.771 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 5.578 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 5.979 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 9.253 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 96.547 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 247.487 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.623 | 65,987 | 0.4032 | 8 | yes |
| zstd | 2 | 0.795 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 1.056 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.833 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.226 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.517 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 2.982 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 3.668 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.792 | 57,744 | 0.3528 | 7 | yes |
| zstd | 10 | 5.576 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 9.000 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 9.527 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 15.656 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 18.475 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 18.701 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 25.297 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 24.998 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 42.359 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 42.486 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 42.541 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 42.377 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 42.157 | 55,612 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.769 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.833 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.955 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.055 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.387 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.781 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.100 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.829 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.844 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.260 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.380 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.683 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.797 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.318 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.906 | 25,217 | 0.3443 | 6 | yes |
| brotli | 6 | 2.064 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.380 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.546 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.167 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 39.992 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 97.004 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.247 | 28,919 | 0.3949 | 10 | yes |
| zstd | 2 | 0.292 | 28,008 | 0.3824 | 7 | yes |
| zstd | 3 | 0.372 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.475 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.861 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.135 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.341 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.470 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.730 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.956 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.221 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.380 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.456 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.652 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.874 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.750 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.978 | 24,499 | 0.3345 | 6 | yes |
| zstd | 18 | 11.793 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 21.644 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 21.606 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 21.181 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 21.611 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.573 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.661 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.803 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.902 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.234 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.881 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.520 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.581 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.679 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.247 | 25,901 | 0.3420 | 8 | yes |
| brotli | 1 | 0.364 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.639 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.746 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.162 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.726 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.913 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.215 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.530 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 5.324 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 29.547 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 87.612 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.281 | 22,639 | 0.2989 | 5 | yes |
| zstd | 2 | 0.289 | 22,433 | 0.2962 | 5 | yes |
| zstd | 3 | 0.349 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.422 | 22,181 | 0.2929 | 6 | yes |
| zstd | 5 | 0.792 | 21,579 | 0.2849 | 6 | yes |
| zstd | 6 | 1.062 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.280 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.482 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.844 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.384 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.289 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.172 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.046 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.548 | 18,964 | 0.2504 | 10 | yes |
| zstd | 15 | 9.211 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 12.639 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 15.724 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.766 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 23.399 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 26.585 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.182 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 44.000 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.089 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.116 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.301 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.743 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.274 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.930 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.576 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.719 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.844 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.450 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.621 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.187 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.366 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.060 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.995 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.277 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.574 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.077 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 4.849 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 97.883 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 301.679 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.484 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.547 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.610 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.709 | 30,973 | 0.1334 | 8 | yes |
| zstd | 5 | 2.421 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.250 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.316 | 29,710 | 0.1280 | 6 | yes |
| zstd | 8 | 3.017 | 28,645 | 0.1234 | 6 | yes |
| zstd | 9 | 3.610 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.619 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.328 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.262 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.158 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.372 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.036 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.365 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 63.826 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 84.683 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 96.228 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 100.675 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 101.229 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 100.695 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 91.323 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 95.311 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 108.746 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 145.748 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 171.318 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 214.603 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 325.641 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 903.726 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1201.814 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 45.110 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 61.087 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 110.803 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 127.646 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 162.050 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 288.580 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 331.233 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 462.267 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 592.228 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 814.048 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 12771.252 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37323.016 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.152 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 56.923 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 66.588 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 69.040 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 142.325 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 199.732 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 224.824 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 286.313 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 289.740 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 389.773 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 562.753 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 613.331 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 737.996 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 963.258 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1211.547 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3146.633 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3553.486 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 4902.809 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 8973.479 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9199.288 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9214.370 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9614.814 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.281 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.226 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.390 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.411 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.430 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.683 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.290 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.156 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.434 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.904 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.304 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.967 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.967 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.507 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.008 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.452 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 43.909 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 51.669 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 65.497 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 901.486 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1921.031 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.044 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.885 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.876 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.446 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.369 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 15.095 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 16.494 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.940 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 20.170 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.917 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.556 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.604 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 49.690 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 51.066 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 51.392 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 90.695 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 112.158 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 148.378 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 165.101 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 165.345 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 167.273 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 166.439 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.103 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.130 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.173 | 5,356 | 0.2749 | 5 | yes |
| gzip | 4 | 0.201 | 5,145 | 0.2641 | 9 | yes |
| gzip | 5 | 0.271 | 4,896 | 0.2513 | 6 | yes |
| gzip | 6 | 0.367 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.486 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.666 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.649 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.059 | 6,028 | 0.3094 | 14 | yes |
| brotli | 1 | 0.068 | 5,737 | 0.2945 | 23 | yes |
| brotli | 2 | 0.122 | 4,944 | 0.2538 | 21 | yes |
| brotli | 3 | 0.168 | 4,930 | 0.2531 | 8 | yes |
| brotli | 4 | 0.277 | 4,898 | 0.2514 | 8 | yes |
| brotli | 5 | 0.452 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.486 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.558 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.612 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 2.310 | 4,553 | 0.2337 | 9 | yes |
| brotli | 10 | 7.228 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.827 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.059 | 5,379 | 0.2761 | 9 | yes |
| zstd | 2 | 0.068 | 5,176 | 0.2657 | 22 | yes |
| zstd | 3 | 0.097 | 5,169 | 0.2653 | 12 | yes |
| zstd | 4 | 0.108 | 5,154 | 0.2646 | 5 | yes |
| zstd | 5 | 0.184 | 5,074 | 0.2605 | 10 | yes |
| zstd | 6 | 0.280 | 4,797 | 0.2463 | 5 | yes |
| zstd | 7 | 0.329 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.352 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.423 | 4,690 | 0.2408 | 6 | yes |
| zstd | 10 | 0.536 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.596 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.650 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.012 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.824 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.912 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.889 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.880 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.886 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.644 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.691 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.683 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.661 | 4,348 | 0.2232 | 5 | yes |
