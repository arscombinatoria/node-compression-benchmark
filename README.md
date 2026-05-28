# Node Compression Benchmark

Last updated: 2026-05-28T22:43:05.664Z

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
| gzip | 1 | 1.036 | 31,033 | 0.3941 | 19 | yes |
| gzip | 2 | 1.049 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.193 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.336 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.769 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.126 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.352 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.748 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.699 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.316 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.782 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.832 | 29,394 | 0.3733 | 9 | yes |
| brotli | 3 | 1.067 | 29,072 | 0.3692 | 17 | yes |
| brotli | 4 | 1.440 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.199 | 27,013 | 0.3430 | 6 | yes |
| brotli | 6 | 2.223 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.797 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.759 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.677 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 35.832 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 99.876 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.334 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.486 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.520 | 29,214 | 0.3710 | 12 | yes |
| zstd | 4 | 0.662 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 1.394 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.252 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.505 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.637 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.888 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.102 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.420 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.508 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.462 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.661 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.766 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 9.978 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.034 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.088 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.557 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.877 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.769 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 20.275 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.040 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 96.977 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 106.255 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 115.234 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 134.562 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 152.330 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 163.187 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 184.312 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 197.392 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.583 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.800 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.930 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 66.075 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 89.829 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 125.510 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 141.892 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 425.736 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 523.777 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 766.761 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6620.490 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13968.788 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.751 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.086 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 35.337 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 43.619 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 68.332 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 81.530 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 88.408 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 103.242 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 103.059 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 134.723 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 172.984 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 196.517 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 447.682 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 491.575 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 580.526 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 796.304 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 941.526 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1221.766 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1297.527 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1370.938 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1340.569 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1357.756 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.497 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.468 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.433 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 14.397 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 14.426 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 14.354 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 14.393 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 14.327 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 14.355 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.264 | 613,595 | 0.9981 | 9 | yes |
| brotli | 1 | 0.222 | 614,785 | 1.0000 | 5 | yes |
| brotli | 2 | 0.562 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.726 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.864 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.385 | 614,785 | 1.0000 | 25 | no |
| brotli | 6 | 1.372 | 614,785 | 1.0000 | 5 | yes |
| brotli | 7 | 2.074 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.238 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 4.080 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 115.490 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 266.182 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.290 | 614,805 | 1.0000 | 22 | yes |
| zstd | 2 | 0.277 | 614,804 | 1.0000 | 9 | yes |
| zstd | 3 | 0.324 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.328 | 614,804 | 1.0000 | 25 | no |
| zstd | 5 | 0.486 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.506 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.545 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.539 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.661 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.629 | 614,804 | 1.0000 | 11 | yes |
| zstd | 11 | 0.620 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.610 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.636 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 2.870 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 2.851 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 14.709 | 612,536 | 0.9963 | 11 | yes |
| zstd | 17 | 14.456 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 20.352 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 25.065 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 25.202 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 25.105 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 25.587 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,376 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.301 | 144,671 | 0.2962 | 5 | yes |
| gzip | 2 | 4.706 | 137,894 | 0.2824 | 5 | yes |
| gzip | 3 | 6.224 | 133,284 | 0.2729 | 5 | yes |
| gzip | 4 | 6.265 | 125,107 | 0.2562 | 5 | yes |
| gzip | 5 | 9.162 | 120,500 | 0.2467 | 5 | yes |
| gzip | 6 | 13.618 | 118,777 | 0.2432 | 5 | yes |
| gzip | 7 | 17.713 | 118,321 | 0.2423 | 5 | yes |
| gzip | 8 | 32.810 | 118,050 | 0.2417 | 5 | yes |
| gzip | 9 | 51.743 | 117,981 | 0.2416 | 5 | yes |
| brotli | 0 | 1.554 | 149,143 | 0.3054 | 5 | yes |
| brotli | 1 | 2.238 | 136,828 | 0.2802 | 5 | yes |
| brotli | 2 | 3.960 | 128,657 | 0.2634 | 5 | yes |
| brotli | 3 | 4.708 | 125,956 | 0.2579 | 5 | yes |
| brotli | 4 | 6.483 | 122,132 | 0.2501 | 5 | yes |
| brotli | 5 | 10.147 | 112,200 | 0.2297 | 5 | yes |
| brotli | 6 | 11.672 | 109,580 | 0.2244 | 5 | yes |
| brotli | 7 | 14.170 | 107,617 | 0.2204 | 5 | yes |
| brotli | 8 | 17.325 | 106,600 | 0.2183 | 5 | yes |
| brotli | 9 | 22.599 | 105,688 | 0.2164 | 5 | yes |
| brotli | 10 | 289.689 | 98,262 | 0.2012 | 5 | yes |
| brotli | 11 | 751.098 | 96,054 | 0.1967 | 5 | yes |
| zstd | 1 | 1.777 | 137,501 | 0.2815 | 5 | yes |
| zstd | 2 | 1.871 | 133,304 | 0.2730 | 5 | yes |
| zstd | 3 | 2.282 | 125,704 | 0.2574 | 5 | yes |
| zstd | 4 | 2.444 | 125,507 | 0.2570 | 5 | yes |
| zstd | 5 | 4.648 | 116,849 | 0.2393 | 5 | yes |
| zstd | 6 | 6.227 | 112,959 | 0.2313 | 5 | yes |
| zstd | 7 | 7.075 | 111,397 | 0.2281 | 5 | yes |
| zstd | 8 | 8.823 | 110,614 | 0.2265 | 5 | yes |
| zstd | 9 | 8.824 | 110,614 | 0.2265 | 5 | yes |
| zstd | 10 | 10.555 | 109,711 | 0.2246 | 5 | yes |
| zstd | 11 | 13.066 | 109,009 | 0.2232 | 5 | yes |
| zstd | 12 | 13.111 | 109,009 | 0.2232 | 5 | yes |
| zstd | 13 | 26.656 | 107,861 | 0.2209 | 5 | yes |
| zstd | 14 | 33.191 | 107,276 | 0.2197 | 5 | yes |
| zstd | 15 | 36.259 | 107,183 | 0.2195 | 5 | yes |
| zstd | 16 | 64.791 | 101,602 | 0.2080 | 5 | yes |
| zstd | 17 | 72.153 | 100,701 | 0.2062 | 5 | yes |
| zstd | 18 | 103.600 | 99,909 | 0.2046 | 5 | yes |
| zstd | 19 | 134.037 | 99,813 | 0.2044 | 5 | yes |
| zstd | 20 | 134.418 | 99,813 | 0.2044 | 5 | yes |
| zstd | 21 | 134.186 | 99,799 | 0.2043 | 5 | yes |
| zstd | 22 | 135.748 | 99,799 | 0.2043 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.068 | 4,987 | 0.2897 | 23 | yes |
| gzip | 2 | 0.072 | 4,874 | 0.2831 | 17 | yes |
| gzip | 3 | 0.084 | 4,805 | 0.2791 | 25 | no |
| gzip | 4 | 0.108 | 4,529 | 0.2631 | 16 | yes |
| gzip | 5 | 0.136 | 4,441 | 0.2579 | 16 | yes |
| gzip | 6 | 0.172 | 4,425 | 0.2570 | 25 | yes |
| gzip | 7 | 0.207 | 4,418 | 0.2566 | 12 | yes |
| gzip | 8 | 0.433 | 4,418 | 0.2566 | 7 | yes |
| gzip | 9 | 0.419 | 4,418 | 0.2566 | 5 | yes |
| brotli | 0 | 0.054 | 5,234 | 0.3040 | 7 | yes |
| brotli | 1 | 0.068 | 5,133 | 0.2981 | 13 | yes |
| brotli | 2 | 0.098 | 4,740 | 0.2753 | 15 | yes |
| brotli | 3 | 0.118 | 4,650 | 0.2701 | 15 | yes |
| brotli | 4 | 0.277 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.292 | 4,276 | 0.2484 | 25 | no |
| brotli | 6 | 0.319 | 4,275 | 0.2483 | 21 | yes |
| brotli | 7 | 0.439 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.409 | 4,257 | 0.2473 | 10 | yes |
| brotli | 9 | 1.816 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.147 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.246 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.052 | 4,924 | 0.2860 | 8 | yes |
| zstd | 2 | 0.055 | 4,868 | 0.2827 | 8 | yes |
| zstd | 3 | 0.065 | 4,718 | 0.2740 | 9 | yes |
| zstd | 4 | 0.073 | 4,680 | 0.2718 | 25 | no |
| zstd | 5 | 0.136 | 4,518 | 0.2624 | 9 | yes |
| zstd | 6 | 0.167 | 4,437 | 0.2577 | 11 | yes |
| zstd | 7 | 0.194 | 4,437 | 0.2577 | 9 | yes |
| zstd | 8 | 0.209 | 4,425 | 0.2570 | 12 | yes |
| zstd | 9 | 0.320 | 4,419 | 0.2567 | 5 | yes |
| zstd | 10 | 0.322 | 4,409 | 0.2561 | 9 | yes |
| zstd | 11 | 0.623 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.627 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.933 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.418 | 4,305 | 0.2500 | 5 | yes |
| zstd | 15 | 1.508 | 4,302 | 0.2499 | 5 | yes |
| zstd | 16 | 2.202 | 4,281 | 0.2486 | 5 | yes |
| zstd | 17 | 2.311 | 4,280 | 0.2486 | 5 | yes |
| zstd | 18 | 2.306 | 4,280 | 0.2486 | 5 | yes |
| zstd | 19 | 4.529 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.545 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.555 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.527 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.052 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.048 | 3,182 | 0.4444 | 18 | yes |
| gzip | 3 | 0.052 | 3,153 | 0.4403 | 12 | yes |
| gzip | 4 | 0.061 | 3,095 | 0.4322 | 13 | yes |
| gzip | 5 | 0.067 | 3,051 | 0.4261 | 13 | yes |
| gzip | 6 | 0.074 | 3,044 | 0.4251 | 9 | yes |
| gzip | 7 | 0.075 | 3,042 | 0.4248 | 14 | yes |
| gzip | 8 | 0.075 | 3,042 | 0.4248 | 8 | yes |
| gzip | 9 | 0.076 | 3,042 | 0.4248 | 5 | yes |
| brotli | 0 | 0.031 | 3,549 | 0.4956 | 7 | yes |
| brotli | 1 | 0.044 | 3,381 | 0.4721 | 25 | no |
| brotli | 2 | 0.058 | 3,263 | 0.4557 | 8 | yes |
| brotli | 3 | 0.077 | 3,216 | 0.4491 | 9 | yes |
| brotli | 4 | 0.122 | 3,147 | 0.4395 | 11 | yes |
| brotli | 5 | 0.161 | 2,963 | 0.4138 | 15 | yes |
| brotli | 6 | 0.173 | 2,952 | 0.4122 | 25 | yes |
| brotli | 7 | 0.171 | 2,944 | 0.4111 | 23 | yes |
| brotli | 8 | 0.181 | 2,944 | 0.4111 | 16 | yes |
| brotli | 9 | 1.603 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.241 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.086 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.031 | 3,254 | 0.4544 | 20 | yes |
| zstd | 2 | 0.032 | 3,200 | 0.4469 | 16 | yes |
| zstd | 3 | 0.040 | 3,176 | 0.4435 | 17 | yes |
| zstd | 4 | 0.060 | 3,102 | 0.4332 | 13 | yes |
| zstd | 5 | 0.069 | 3,079 | 0.4300 | 10 | yes |
| zstd | 6 | 0.082 | 3,060 | 0.4273 | 9 | yes |
| zstd | 7 | 0.096 | 3,053 | 0.4263 | 5 | yes |
| zstd | 8 | 0.097 | 3,053 | 0.4263 | 8 | yes |
| zstd | 9 | 0.114 | 3,055 | 0.4266 | 16 | yes |
| zstd | 10 | 0.115 | 3,055 | 0.4266 | 7 | yes |
| zstd | 11 | 0.233 | 3,044 | 0.4251 | 18 | yes |
| zstd | 12 | 0.450 | 3,011 | 0.4205 | 6 | yes |
| zstd | 13 | 0.571 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.573 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.581 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.050 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.065 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.086 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.058 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.052 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.066 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.057 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,217 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.067 | 66,928 | 0.4076 | 5 | yes |
| gzip | 2 | 2.244 | 65,338 | 0.3979 | 5 | yes |
| gzip | 3 | 2.584 | 64,317 | 0.3917 | 5 | yes |
| gzip | 4 | 2.841 | 61,980 | 0.3774 | 5 | yes |
| gzip | 5 | 3.920 | 60,339 | 0.3674 | 5 | yes |
| gzip | 6 | 4.945 | 60,067 | 0.3658 | 5 | yes |
| gzip | 7 | 5.388 | 60,024 | 0.3655 | 5 | yes |
| gzip | 8 | 5.838 | 60,007 | 0.3654 | 5 | yes |
| gzip | 9 | 5.856 | 60,007 | 0.3654 | 5 | yes |
| brotli | 0 | 0.679 | 71,251 | 0.4339 | 5 | yes |
| brotli | 1 | 0.945 | 68,275 | 0.4158 | 5 | yes |
| brotli | 2 | 1.729 | 63,015 | 0.3837 | 5 | yes |
| brotli | 3 | 2.048 | 62,457 | 0.3803 | 5 | yes |
| brotli | 4 | 2.936 | 61,234 | 0.3729 | 5 | yes |
| brotli | 5 | 4.506 | 57,931 | 0.3528 | 5 | yes |
| brotli | 6 | 5.076 | 57,572 | 0.3506 | 5 | yes |
| brotli | 7 | 6.024 | 57,281 | 0.3488 | 5 | yes |
| brotli | 8 | 6.428 | 57,200 | 0.3483 | 5 | yes |
| brotli | 9 | 8.961 | 57,125 | 0.3479 | 5 | yes |
| brotli | 10 | 103.737 | 54,364 | 0.3310 | 5 | yes |
| brotli | 11 | 258.951 | 53,487 | 0.3257 | 5 | yes |
| zstd | 1 | 0.643 | 66,282 | 0.4036 | 5 | yes |
| zstd | 2 | 0.793 | 63,237 | 0.3851 | 5 | yes |
| zstd | 3 | 0.993 | 62,745 | 0.3821 | 5 | yes |
| zstd | 4 | 1.832 | 60,886 | 0.3708 | 5 | yes |
| zstd | 5 | 2.037 | 60,366 | 0.3676 | 5 | yes |
| zstd | 6 | 2.463 | 59,468 | 0.3621 | 5 | yes |
| zstd | 7 | 2.891 | 58,678 | 0.3573 | 5 | yes |
| zstd | 8 | 3.657 | 58,201 | 0.3544 | 5 | yes |
| zstd | 9 | 4.268 | 57,953 | 0.3529 | 5 | yes |
| zstd | 10 | 4.999 | 57,830 | 0.3522 | 5 | yes |
| zstd | 11 | 8.156 | 57,527 | 0.3503 | 5 | yes |
| zstd | 12 | 8.418 | 57,514 | 0.3502 | 5 | yes |
| zstd | 13 | 14.771 | 56,499 | 0.3441 | 5 | yes |
| zstd | 14 | 17.368 | 56,072 | 0.3415 | 5 | yes |
| zstd | 15 | 17.664 | 56,052 | 0.3413 | 5 | yes |
| zstd | 16 | 22.655 | 55,868 | 0.3402 | 5 | yes |
| zstd | 17 | 23.207 | 55,868 | 0.3402 | 5 | yes |
| zstd | 18 | 41.679 | 55,790 | 0.3397 | 5 | yes |
| zstd | 19 | 38.734 | 55,790 | 0.3397 | 5 | yes |
| zstd | 20 | 38.694 | 55,790 | 0.3397 | 5 | yes |
| zstd | 21 | 38.785 | 55,790 | 0.3397 | 5 | yes |
| zstd | 22 | 38.743 | 55,790 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.863 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.931 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.079 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.184 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.571 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.058 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.448 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.349 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.341 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.209 | 30,978 | 0.4230 | 20 | yes |
| brotli | 1 | 0.320 | 29,754 | 0.4063 | 17 | yes |
| brotli | 2 | 0.734 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.879 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.329 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.984 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.108 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.540 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.703 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.655 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 41.081 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 99.866 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.199 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.228 | 28,008 | 0.3824 | 13 | yes |
| zstd | 3 | 0.282 | 27,463 | 0.3750 | 13 | yes |
| zstd | 4 | 0.338 | 27,100 | 0.3700 | 18 | yes |
| zstd | 5 | 0.820 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.077 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.318 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.429 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.678 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.910 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.130 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.276 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.359 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.469 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.534 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.782 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.779 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.733 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.617 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.712 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.675 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.650 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.651 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.733 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.896 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 1.001 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.421 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 2.195 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.965 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 8.878 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 8.973 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.180 | 25,901 | 0.3420 | 9 | yes |
| brotli | 1 | 0.326 | 23,906 | 0.3156 | 13 | yes |
| brotli | 2 | 0.663 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.787 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.134 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.724 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.911 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.322 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.718 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 4.897 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 30.541 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 89.000 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.199 | 22,639 | 0.2989 | 16 | yes |
| zstd | 2 | 0.221 | 22,433 | 0.2962 | 10 | yes |
| zstd | 3 | 0.247 | 22,208 | 0.2932 | 13 | yes |
| zstd | 4 | 0.360 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.705 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.002 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.239 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.421 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.793 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.298 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.270 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.294 | 20,012 | 0.2642 | 8 | yes |
| zstd | 13 | 4.825 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 6.828 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 7.990 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.577 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 13.892 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.600 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 19.977 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 24.228 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.700 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 45.089 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.184 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.267 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.484 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.769 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.313 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.201 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.966 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.401 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.391 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.320 | 43,268 | 0.1864 | 16 | yes |
| brotli | 1 | 0.648 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.233 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.461 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.099 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.096 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.351 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.771 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.339 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.582 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 101.242 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 302.535 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.506 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.507 | 34,301 | 0.1478 | 6 | yes |
| zstd | 3 | 0.556 | 34,393 | 0.1482 | 6 | yes |
| zstd | 4 | 1.461 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.690 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.962 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.165 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.673 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.254 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.903 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.124 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.743 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.285 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.979 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 27.716 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 47.793 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 52.877 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 72.219 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 81.635 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 83.679 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 84.259 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 83.441 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,944,411 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 103.471 | 3,754,350 | 0.2216 | 5 | yes |
| gzip | 2 | 112.661 | 3,606,233 | 0.2128 | 5 | yes |
| gzip | 3 | 140.638 | 3,487,706 | 0.2058 | 5 | yes |
| gzip | 4 | 154.408 | 3,360,625 | 0.1983 | 5 | yes |
| gzip | 5 | 207.657 | 3,140,276 | 0.1853 | 5 | yes |
| gzip | 6 | 321.588 | 3,072,755 | 0.1813 | 5 | yes |
| gzip | 7 | 446.394 | 3,006,848 | 0.1775 | 5 | yes |
| gzip | 8 | 1288.306 | 2,939,514 | 0.1735 | 5 | yes |
| gzip | 9 | 1341.562 | 2,938,738 | 0.1734 | 5 | yes |
| brotli | 0 | 45.069 | 4,158,628 | 0.2454 | 5 | yes |
| brotli | 1 | 66.052 | 3,695,752 | 0.2181 | 5 | yes |
| brotli | 2 | 114.731 | 3,404,117 | 0.2009 | 5 | yes |
| brotli | 3 | 133.329 | 3,347,178 | 0.1975 | 5 | yes |
| brotli | 4 | 186.260 | 3,275,664 | 0.1933 | 5 | yes |
| brotli | 5 | 299.270 | 2,921,057 | 0.1724 | 5 | yes |
| brotli | 6 | 381.226 | 2,889,987 | 0.1706 | 5 | yes |
| brotli | 7 | 540.491 | 2,862,545 | 0.1689 | 5 | yes |
| brotli | 8 | 717.485 | 2,844,134 | 0.1679 | 5 | yes |
| brotli | 9 | 968.541 | 2,834,240 | 0.1673 | 5 | yes |
| brotli | 10 | 11182.235 | 2,428,155 | 0.1433 | 5 | yes |
| brotli | 11 | 28510.562 | 2,309,679 | 0.1363 | 5 | yes |
| zstd | 1 | 44.659 | 3,503,899 | 0.2068 | 5 | yes |
| zstd | 2 | 54.845 | 3,581,288 | 0.2114 | 5 | yes |
| zstd | 3 | 66.861 | 3,507,347 | 0.2070 | 5 | yes |
| zstd | 4 | 74.898 | 3,502,293 | 0.2067 | 5 | yes |
| zstd | 5 | 140.631 | 3,287,078 | 0.1940 | 5 | yes |
| zstd | 6 | 200.789 | 3,066,802 | 0.1810 | 5 | yes |
| zstd | 7 | 233.635 | 3,028,172 | 0.1787 | 5 | yes |
| zstd | 8 | 303.523 | 2,926,011 | 0.1727 | 5 | yes |
| zstd | 9 | 323.210 | 2,936,384 | 0.1733 | 5 | yes |
| zstd | 10 | 412.199 | 2,899,811 | 0.1711 | 5 | yes |
| zstd | 11 | 602.468 | 2,872,639 | 0.1695 | 5 | yes |
| zstd | 12 | 642.215 | 2,872,536 | 0.1695 | 5 | yes |
| zstd | 13 | 868.321 | 2,849,958 | 0.1682 | 5 | yes |
| zstd | 14 | 1083.435 | 2,835,631 | 0.1673 | 5 | yes |
| zstd | 15 | 1414.003 | 2,831,966 | 0.1671 | 5 | yes |
| zstd | 16 | 2920.586 | 2,644,958 | 0.1561 | 5 | yes |
| zstd | 17 | 3808.821 | 2,553,377 | 0.1507 | 5 | yes |
| zstd | 18 | 5751.852 | 2,534,839 | 0.1496 | 5 | yes |
| zstd | 19 | 6742.338 | 2,527,723 | 0.1492 | 5 | yes |
| zstd | 20 | 6871.243 | 2,526,319 | 0.1491 | 5 | yes |
| zstd | 21 | 6732.085 | 2,526,319 | 0.1491 | 5 | yes |
| zstd | 22 | 7087.242 | 2,521,487 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.713 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.969 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.575 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.310 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 27.141 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 32.267 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 34.396 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.772 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.874 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.063 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.621 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.451 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.793 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.664 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.313 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.115 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 47.166 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 56.917 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 71.389 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 977.223 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2081.705 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.205 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.113 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.544 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.465 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.720 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.526 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.694 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.466 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.759 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.660 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 27.563 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 27.335 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 62.614 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 61.220 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 62.868 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 114.255 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 140.238 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 167.595 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 191.201 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 180.820 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 180.065 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 193.394 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.077 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.079 | 5,424 | 0.2784 | 22 | yes |
| gzip | 3 | 0.094 | 5,356 | 0.2749 | 14 | yes |
| gzip | 4 | 0.122 | 5,145 | 0.2641 | 25 | no |
| gzip | 5 | 0.151 | 4,896 | 0.2513 | 21 | yes |
| gzip | 6 | 0.221 | 4,884 | 0.2507 | 20 | yes |
| gzip | 7 | 0.489 | 4,857 | 0.2493 | 7 | yes |
| gzip | 8 | 0.712 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.818 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.071 | 6,028 | 0.3094 | 25 | no |
| brotli | 1 | 0.087 | 5,737 | 0.2945 | 21 | yes |
| brotli | 2 | 0.124 | 4,944 | 0.2538 | 25 | no |
| brotli | 3 | 0.128 | 4,930 | 0.2531 | 25 | no |
| brotli | 4 | 0.216 | 4,898 | 0.2514 | 25 | no |
| brotli | 5 | 0.405 | 4,581 | 0.2352 | 12 | yes |
| brotli | 6 | 0.457 | 4,570 | 0.2346 | 7 | yes |
| brotli | 7 | 0.543 | 4,564 | 0.2343 | 7 | yes |
| brotli | 8 | 0.615 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.757 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.555 | 3,934 | 0.2020 | 8 | yes |
| brotli | 11 | 22.286 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.055 | 5,379 | 0.2761 | 9 | yes |
| zstd | 2 | 0.056 | 5,176 | 0.2657 | 13 | yes |
| zstd | 3 | 0.068 | 5,169 | 0.2653 | 9 | yes |
| zstd | 4 | 0.073 | 5,154 | 0.2646 | 11 | yes |
| zstd | 5 | 0.138 | 5,074 | 0.2605 | 9 | yes |
| zstd | 6 | 0.186 | 4,797 | 0.2463 | 9 | yes |
| zstd | 7 | 0.218 | 4,702 | 0.2414 | 12 | yes |
| zstd | 8 | 0.244 | 4,696 | 0.2411 | 14 | yes |
| zstd | 9 | 0.322 | 4,690 | 0.2408 | 18 | yes |
| zstd | 10 | 0.443 | 4,691 | 0.2408 | 6 | yes |
| zstd | 11 | 0.594 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.595 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.960 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.724 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.821 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.560 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.521 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.530 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.967 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.045 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 4.981 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.004 | 4,348 | 0.2232 | 5 | yes |
