# Node Compression Benchmark

Last updated: 2026-06-01T22:50:56.943Z

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
| gzip | 1 | 1.375 | 31,033 | 0.3941 | 9 | yes |
| gzip | 2 | 1.414 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.587 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.838 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.597 | 27,721 | 0.3520 | 9 | yes |
| gzip | 6 | 1.843 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.057 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.415 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.373 | 27,530 | 0.3496 | 8 | yes |
| brotli | 0 | 0.387 | 33,111 | 0.4205 | 9 | yes |
| brotli | 1 | 0.744 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.814 | 29,394 | 0.3733 | 10 | yes |
| brotli | 3 | 1.464 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.529 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.093 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.306 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 2.549 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.719 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.210 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 34.103 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 95.647 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.316 | 31,062 | 0.3944 | 23 | yes |
| zstd | 2 | 0.347 | 30,069 | 0.3818 | 14 | yes |
| zstd | 3 | 0.400 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.514 | 29,108 | 0.3696 | 6 | yes |
| zstd | 5 | 1.378 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.812 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.452 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.586 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.761 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.034 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.366 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.495 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.524 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.778 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.936 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.980 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.013 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.948 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.552 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.519 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.603 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.480 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 84.386 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 89.245 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 92.264 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 103.375 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 119.268 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 133.363 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 142.333 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 159.319 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.728 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.915 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.138 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.178 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.219 | 3,210,322 | 0.5866 | 6 | yes |
| brotli | 4 | 90.041 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 127.553 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 145.411 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 441.234 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 605.343 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 753.939 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6562.466 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12899.810 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.078 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 25.177 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 39.422 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 43.689 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.536 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.562 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 84.655 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 98.612 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 107.762 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 137.787 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 164.830 | 2,868,731 | 0.5242 | 9 | yes |
| zstd | 12 | 183.866 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 324.408 | 2,864,062 | 0.5233 | 25 | no |
| zstd | 14 | 416.849 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 495.264 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 679.663 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 789.641 | 2,756,112 | 0.5036 | 6 | yes |
| zstd | 18 | 1214.280 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1246.173 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1286.240 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1242.011 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1243.236 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.027 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.029 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 11.993 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.607 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.581 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.591 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.629 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.606 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.673 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.271 | 613,595 | 0.9981 | 6 | yes |
| brotli | 1 | 0.246 | 614,785 | 1.0000 | 9 | yes |
| brotli | 2 | 0.619 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.769 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.076 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.567 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.517 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 1.952 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.520 | 614,785 | 1.0000 | 13 | yes |
| brotli | 9 | 6.012 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 108.268 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 248.029 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.344 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.311 | 614,804 | 1.0000 | 14 | yes |
| zstd | 3 | 0.345 | 614,804 | 1.0000 | 14 | yes |
| zstd | 4 | 0.374 | 614,804 | 1.0000 | 23 | yes |
| zstd | 5 | 0.521 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.496 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.564 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.605 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.767 | 614,804 | 1.0000 | 18 | yes |
| zstd | 10 | 0.709 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.752 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.734 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.497 | 612,619 | 0.9965 | 6 | yes |
| zstd | 14 | 2.683 | 612,619 | 0.9965 | 11 | yes |
| zstd | 15 | 2.461 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 15.664 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 15.317 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 21.551 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 28.091 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 28.878 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 31.998 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 30.399 | 612,518 | 0.9963 | 19 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,376 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.854 | 144,671 | 0.2962 | 5 | yes |
| gzip | 2 | 4.160 | 137,894 | 0.2824 | 5 | yes |
| gzip | 3 | 5.433 | 133,284 | 0.2729 | 5 | yes |
| gzip | 4 | 5.779 | 125,107 | 0.2562 | 5 | yes |
| gzip | 5 | 8.112 | 120,500 | 0.2467 | 5 | yes |
| gzip | 6 | 11.814 | 118,777 | 0.2432 | 5 | yes |
| gzip | 7 | 15.023 | 118,321 | 0.2423 | 5 | yes |
| gzip | 8 | 27.675 | 118,050 | 0.2417 | 5 | yes |
| gzip | 9 | 43.005 | 117,981 | 0.2416 | 5 | yes |
| brotli | 0 | 1.532 | 149,143 | 0.3054 | 5 | yes |
| brotli | 1 | 2.065 | 136,828 | 0.2802 | 5 | yes |
| brotli | 2 | 3.816 | 128,657 | 0.2634 | 5 | yes |
| brotli | 3 | 4.403 | 125,956 | 0.2579 | 5 | yes |
| brotli | 4 | 6.384 | 122,132 | 0.2501 | 5 | yes |
| brotli | 5 | 9.885 | 112,200 | 0.2297 | 5 | yes |
| brotli | 6 | 11.294 | 109,580 | 0.2244 | 5 | yes |
| brotli | 7 | 13.536 | 107,617 | 0.2204 | 5 | yes |
| brotli | 8 | 16.220 | 106,600 | 0.2183 | 5 | yes |
| brotli | 9 | 23.027 | 105,688 | 0.2164 | 5 | yes |
| brotli | 10 | 265.951 | 98,262 | 0.2012 | 5 | yes |
| brotli | 11 | 715.906 | 96,054 | 0.1967 | 5 | yes |
| zstd | 1 | 1.625 | 137,501 | 0.2815 | 5 | yes |
| zstd | 2 | 1.749 | 133,304 | 0.2730 | 5 | yes |
| zstd | 3 | 2.128 | 125,704 | 0.2574 | 5 | yes |
| zstd | 4 | 2.360 | 125,507 | 0.2570 | 5 | yes |
| zstd | 5 | 4.337 | 116,849 | 0.2393 | 5 | yes |
| zstd | 6 | 5.969 | 112,959 | 0.2313 | 5 | yes |
| zstd | 7 | 6.705 | 111,397 | 0.2281 | 5 | yes |
| zstd | 8 | 8.465 | 110,614 | 0.2265 | 5 | yes |
| zstd | 9 | 8.480 | 110,614 | 0.2265 | 5 | yes |
| zstd | 10 | 10.182 | 109,711 | 0.2246 | 5 | yes |
| zstd | 11 | 12.936 | 109,009 | 0.2232 | 5 | yes |
| zstd | 12 | 12.905 | 109,009 | 0.2232 | 5 | yes |
| zstd | 13 | 25.409 | 107,861 | 0.2209 | 5 | yes |
| zstd | 14 | 31.214 | 107,276 | 0.2197 | 5 | yes |
| zstd | 15 | 34.817 | 107,183 | 0.2195 | 5 | yes |
| zstd | 16 | 63.786 | 101,602 | 0.2080 | 5 | yes |
| zstd | 17 | 70.209 | 100,701 | 0.2062 | 5 | yes |
| zstd | 18 | 109.043 | 99,909 | 0.2046 | 5 | yes |
| zstd | 19 | 141.895 | 99,813 | 0.2044 | 5 | yes |
| zstd | 20 | 140.662 | 99,813 | 0.2044 | 5 | yes |
| zstd | 21 | 141.202 | 99,799 | 0.2043 | 5 | yes |
| zstd | 22 | 141.509 | 99,799 | 0.2043 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.084 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.099 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.136 | 4,805 | 0.2791 | 25 | no |
| gzip | 4 | 0.164 | 4,529 | 0.2631 | 20 | yes |
| gzip | 5 | 0.234 | 4,441 | 0.2579 | 7 | yes |
| gzip | 6 | 0.275 | 4,425 | 0.2570 | 6 | yes |
| gzip | 7 | 0.316 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.453 | 4,418 | 0.2566 | 5 | yes |
| gzip | 9 | 0.465 | 4,418 | 0.2566 | 5 | yes |
| brotli | 0 | 0.057 | 5,234 | 0.3040 | 8 | yes |
| brotli | 1 | 0.066 | 5,133 | 0.2981 | 13 | yes |
| brotli | 2 | 0.123 | 4,740 | 0.2753 | 18 | yes |
| brotli | 3 | 0.150 | 4,650 | 0.2701 | 13 | yes |
| brotli | 4 | 0.282 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.387 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.400 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.442 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.458 | 4,257 | 0.2473 | 7 | yes |
| brotli | 9 | 2.716 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.675 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.314 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.055 | 4,924 | 0.2860 | 17 | yes |
| zstd | 2 | 0.060 | 4,868 | 0.2827 | 13 | yes |
| zstd | 3 | 0.075 | 4,718 | 0.2740 | 25 | no |
| zstd | 4 | 0.076 | 4,680 | 0.2718 | 25 | no |
| zstd | 5 | 0.163 | 4,518 | 0.2624 | 8 | yes |
| zstd | 6 | 0.219 | 4,437 | 0.2577 | 7 | yes |
| zstd | 7 | 0.266 | 4,437 | 0.2577 | 7 | yes |
| zstd | 8 | 0.285 | 4,425 | 0.2570 | 5 | yes |
| zstd | 9 | 0.330 | 4,419 | 0.2567 | 5 | yes |
| zstd | 10 | 0.388 | 4,409 | 0.2561 | 5 | yes |
| zstd | 11 | 0.601 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.642 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.905 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.437 | 4,305 | 0.2500 | 5 | yes |
| zstd | 15 | 1.532 | 4,302 | 0.2499 | 5 | yes |
| zstd | 16 | 2.481 | 4,281 | 0.2486 | 5 | yes |
| zstd | 17 | 2.645 | 4,280 | 0.2486 | 5 | yes |
| zstd | 18 | 2.642 | 4,280 | 0.2486 | 5 | yes |
| zstd | 19 | 5.202 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.188 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.174 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.168 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.056 | 3,220 | 0.4497 | 17 | yes |
| gzip | 2 | 0.097 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.105 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.070 | 3,095 | 0.4322 | 21 | yes |
| gzip | 5 | 0.086 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.084 | 3,044 | 0.4251 | 19 | yes |
| gzip | 7 | 0.092 | 3,042 | 0.4248 | 12 | yes |
| gzip | 8 | 0.086 | 3,042 | 0.4248 | 25 | no |
| gzip | 9 | 0.085 | 3,042 | 0.4248 | 9 | yes |
| brotli | 0 | 0.034 | 3,549 | 0.4956 | 12 | yes |
| brotli | 1 | 0.044 | 3,381 | 0.4721 | 25 | no |
| brotli | 2 | 0.067 | 3,263 | 0.4557 | 16 | yes |
| brotli | 3 | 0.089 | 3,216 | 0.4491 | 25 | no |
| brotli | 4 | 0.168 | 3,147 | 0.4395 | 9 | yes |
| brotli | 5 | 0.218 | 2,963 | 0.4138 | 9 | yes |
| brotli | 6 | 0.251 | 2,952 | 0.4122 | 5 | yes |
| brotli | 7 | 0.254 | 2,944 | 0.4111 | 12 | yes |
| brotli | 8 | 0.258 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 2.337 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.147 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.655 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.036 | 3,254 | 0.4544 | 13 | yes |
| zstd | 2 | 0.038 | 3,200 | 0.4469 | 25 | no |
| zstd | 3 | 0.044 | 3,176 | 0.4435 | 20 | yes |
| zstd | 4 | 0.064 | 3,102 | 0.4332 | 21 | yes |
| zstd | 5 | 0.076 | 3,079 | 0.4300 | 25 | no |
| zstd | 6 | 0.103 | 3,060 | 0.4273 | 25 | no |
| zstd | 7 | 0.117 | 3,053 | 0.4263 | 20 | yes |
| zstd | 8 | 0.123 | 3,053 | 0.4263 | 9 | yes |
| zstd | 9 | 0.196 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.183 | 3,055 | 0.4266 | 8 | yes |
| zstd | 11 | 0.398 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.476 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.668 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.672 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.696 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.320 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.278 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.293 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.283 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.287 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.290 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.300 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,217 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.856 | 66,928 | 0.4076 | 5 | yes |
| gzip | 2 | 2.019 | 65,338 | 0.3979 | 5 | yes |
| gzip | 3 | 2.282 | 64,317 | 0.3917 | 5 | yes |
| gzip | 4 | 2.563 | 61,980 | 0.3774 | 5 | yes |
| gzip | 5 | 3.473 | 60,339 | 0.3674 | 5 | yes |
| gzip | 6 | 4.244 | 60,067 | 0.3658 | 5 | yes |
| gzip | 7 | 4.630 | 60,024 | 0.3655 | 5 | yes |
| gzip | 8 | 4.999 | 60,007 | 0.3654 | 5 | yes |
| gzip | 9 | 5.005 | 60,007 | 0.3654 | 5 | yes |
| brotli | 0 | 0.698 | 71,251 | 0.4339 | 5 | yes |
| brotli | 1 | 0.889 | 68,275 | 0.4158 | 5 | yes |
| brotli | 2 | 1.684 | 63,015 | 0.3837 | 5 | yes |
| brotli | 3 | 1.926 | 62,457 | 0.3803 | 5 | yes |
| brotli | 4 | 3.002 | 61,234 | 0.3729 | 7 | yes |
| brotli | 5 | 4.439 | 57,931 | 0.3528 | 5 | yes |
| brotli | 6 | 4.837 | 57,572 | 0.3506 | 5 | yes |
| brotli | 7 | 5.656 | 57,281 | 0.3488 | 5 | yes |
| brotli | 8 | 6.418 | 57,200 | 0.3483 | 5 | yes |
| brotli | 9 | 10.267 | 57,125 | 0.3479 | 5 | yes |
| brotli | 10 | 96.067 | 54,364 | 0.3310 | 5 | yes |
| brotli | 11 | 244.644 | 53,487 | 0.3257 | 5 | yes |
| zstd | 1 | 0.635 | 66,282 | 0.4036 | 5 | yes |
| zstd | 2 | 0.797 | 63,237 | 0.3851 | 5 | yes |
| zstd | 3 | 0.988 | 62,745 | 0.3821 | 5 | yes |
| zstd | 4 | 1.769 | 60,886 | 0.3708 | 5 | yes |
| zstd | 5 | 1.964 | 60,366 | 0.3676 | 6 | yes |
| zstd | 6 | 2.405 | 59,468 | 0.3621 | 5 | yes |
| zstd | 7 | 2.856 | 58,678 | 0.3573 | 5 | yes |
| zstd | 8 | 3.553 | 58,201 | 0.3544 | 5 | yes |
| zstd | 9 | 4.105 | 57,953 | 0.3529 | 5 | yes |
| zstd | 10 | 4.928 | 57,830 | 0.3522 | 5 | yes |
| zstd | 11 | 8.207 | 57,527 | 0.3503 | 5 | yes |
| zstd | 12 | 8.549 | 57,514 | 0.3502 | 5 | yes |
| zstd | 13 | 15.059 | 56,499 | 0.3441 | 5 | yes |
| zstd | 14 | 17.842 | 56,072 | 0.3415 | 5 | yes |
| zstd | 15 | 18.160 | 56,052 | 0.3413 | 5 | yes |
| zstd | 16 | 24.371 | 55,868 | 0.3402 | 5 | yes |
| zstd | 17 | 24.657 | 55,868 | 0.3402 | 5 | yes |
| zstd | 18 | 42.399 | 55,790 | 0.3397 | 5 | yes |
| zstd | 19 | 41.835 | 55,790 | 0.3397 | 5 | yes |
| zstd | 20 | 42.074 | 55,790 | 0.3397 | 5 | yes |
| zstd | 21 | 42.032 | 55,790 | 0.3397 | 5 | yes |
| zstd | 22 | 41.986 | 55,790 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.779 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.839 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.967 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.079 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.394 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.779 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.116 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.855 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.847 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.284 | 30,978 | 0.4230 | 6 | yes |
| brotli | 1 | 0.371 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.685 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.816 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.294 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.946 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.055 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.478 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.755 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.419 | 24,870 | 0.3396 | 7 | yes |
| brotli | 10 | 38.441 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 94.787 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.265 | 28,919 | 0.3949 | 6 | yes |
| zstd | 2 | 0.292 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.355 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.431 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.799 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.076 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.301 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.427 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.641 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.925 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.111 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.285 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.380 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.544 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.665 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.618 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.666 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.606 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.196 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.433 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.283 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.176 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.584 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.670 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.801 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.934 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.261 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.910 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.548 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.603 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.637 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.266 | 25,901 | 0.3420 | 7 | yes |
| brotli | 1 | 0.375 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.636 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.749 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.131 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.689 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.895 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.234 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.577 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 6.053 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 28.934 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 86.429 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.293 | 22,639 | 0.2989 | 8 | yes |
| zstd | 2 | 0.283 | 22,433 | 0.2962 | 5 | yes |
| zstd | 3 | 0.337 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.409 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.716 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 0.999 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.238 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.417 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.775 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.400 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.222 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.185 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.019 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 6.985 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.100 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.351 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.448 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 21.299 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 22.116 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 25.939 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 36.979 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 42.497 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.080 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.152 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.355 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.734 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.189 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.966 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.632 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.858 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.930 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.460 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.645 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.170 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.405 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.060 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.979 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.289 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.683 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.066 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 7.826 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 95.589 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 296.187 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.487 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.544 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.606 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.454 | 30,973 | 0.1334 | 8 | yes |
| zstd | 5 | 1.657 | 29,744 | 0.1281 | 25 | no |
| zstd | 6 | 1.914 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.184 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.744 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.159 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.310 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.842 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.746 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.336 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.706 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.107 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 55.258 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 62.494 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 83.221 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 94.933 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 99.437 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 99.452 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 99.421 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,946,804 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.060 | 3,754,873 | 0.2216 | 5 | yes |
| gzip | 2 | 102.164 | 3,606,731 | 0.2128 | 5 | yes |
| gzip | 3 | 125.210 | 3,488,191 | 0.2058 | 5 | yes |
| gzip | 4 | 148.851 | 3,361,083 | 0.1983 | 5 | yes |
| gzip | 5 | 190.348 | 3,140,651 | 0.1853 | 5 | yes |
| gzip | 6 | 279.144 | 3,073,208 | 0.1813 | 5 | yes |
| gzip | 7 | 381.135 | 3,007,264 | 0.1775 | 5 | yes |
| gzip | 8 | 1075.194 | 2,939,923 | 0.1735 | 5 | yes |
| gzip | 9 | 1117.699 | 2,939,101 | 0.1734 | 5 | yes |
| brotli | 0 | 45.707 | 4,158,391 | 0.2454 | 5 | yes |
| brotli | 1 | 61.055 | 3,696,388 | 0.2181 | 5 | yes |
| brotli | 2 | 107.686 | 3,404,652 | 0.2009 | 5 | yes |
| brotli | 3 | 128.410 | 3,347,644 | 0.1975 | 5 | yes |
| brotli | 4 | 171.600 | 3,276,816 | 0.1934 | 5 | yes |
| brotli | 5 | 294.207 | 2,921,643 | 0.1724 | 5 | yes |
| brotli | 6 | 341.116 | 2,890,343 | 0.1706 | 5 | yes |
| brotli | 7 | 496.563 | 2,863,078 | 0.1689 | 5 | yes |
| brotli | 8 | 657.680 | 2,844,800 | 0.1679 | 5 | yes |
| brotli | 9 | 879.325 | 2,834,664 | 0.1673 | 5 | yes |
| brotli | 10 | 9973.620 | 2,428,562 | 0.1433 | 5 | yes |
| brotli | 11 | 27364.243 | 2,309,167 | 0.1363 | 5 | yes |
| zstd | 1 | 44.108 | 3,504,403 | 0.2068 | 5 | yes |
| zstd | 2 | 55.775 | 3,581,907 | 0.2114 | 5 | yes |
| zstd | 3 | 65.823 | 3,507,920 | 0.2070 | 5 | yes |
| zstd | 4 | 68.737 | 3,502,711 | 0.2067 | 5 | yes |
| zstd | 5 | 132.430 | 3,287,468 | 0.1940 | 5 | yes |
| zstd | 6 | 193.328 | 3,067,272 | 0.1810 | 5 | yes |
| zstd | 7 | 221.295 | 3,028,718 | 0.1787 | 5 | yes |
| zstd | 8 | 287.554 | 2,926,446 | 0.1727 | 5 | yes |
| zstd | 9 | 321.938 | 2,936,848 | 0.1733 | 5 | yes |
| zstd | 10 | 436.446 | 2,900,202 | 0.1711 | 5 | yes |
| zstd | 11 | 617.096 | 2,873,028 | 0.1695 | 5 | yes |
| zstd | 12 | 681.150 | 2,872,898 | 0.1695 | 5 | yes |
| zstd | 13 | 901.784 | 2,850,280 | 0.1682 | 5 | yes |
| zstd | 14 | 1070.080 | 2,835,958 | 0.1673 | 5 | yes |
| zstd | 15 | 1458.313 | 2,832,325 | 0.1671 | 5 | yes |
| zstd | 16 | 2843.026 | 2,645,548 | 0.1561 | 5 | yes |
| zstd | 17 | 3833.307 | 2,553,740 | 0.1507 | 5 | yes |
| zstd | 18 | 6369.124 | 2,535,042 | 0.1496 | 5 | yes |
| zstd | 19 | 6780.378 | 2,528,063 | 0.1492 | 5 | yes |
| zstd | 20 | 7195.117 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 21 | 6583.023 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 22 | 6671.284 | 2,521,575 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.263 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.233 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.417 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.418 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.510 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.755 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.328 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.342 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.093 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.992 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.320 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.970 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.184 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.761 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.815 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.185 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.532 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 52.347 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 65.145 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 906.684 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1947.539 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.045 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.853 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.865 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.338 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.103 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.767 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.785 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.416 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.928 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.623 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 25.291 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.394 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 50.325 | 383,952 | 0.4466 | 14 | yes |
| zstd | 14 | 58.638 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 52.811 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 99.970 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 127.569 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 165.446 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 188.044 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 184.915 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 186.860 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 187.369 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.098 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.131 | 5,424 | 0.2784 | 24 | yes |
| gzip | 3 | 0.160 | 5,356 | 0.2749 | 12 | yes |
| gzip | 4 | 0.199 | 5,145 | 0.2641 | 9 | yes |
| gzip | 5 | 0.272 | 4,896 | 0.2513 | 10 | yes |
| gzip | 6 | 0.363 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.483 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.648 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.642 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.061 | 6,028 | 0.3094 | 12 | yes |
| brotli | 1 | 0.073 | 5,737 | 0.2945 | 13 | yes |
| brotli | 2 | 0.135 | 4,944 | 0.2538 | 17 | yes |
| brotli | 3 | 0.165 | 4,930 | 0.2531 | 24 | yes |
| brotli | 4 | 0.299 | 4,898 | 0.2514 | 5 | yes |
| brotli | 5 | 0.456 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.497 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.583 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.627 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.755 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.144 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.439 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.058 | 5,379 | 0.2761 | 20 | yes |
| zstd | 2 | 0.068 | 5,176 | 0.2657 | 25 | no |
| zstd | 3 | 0.086 | 5,169 | 0.2653 | 12 | yes |
| zstd | 4 | 0.090 | 5,154 | 0.2646 | 24 | yes |
| zstd | 5 | 0.170 | 5,074 | 0.2605 | 9 | yes |
| zstd | 6 | 0.239 | 4,797 | 0.2463 | 7 | yes |
| zstd | 7 | 0.286 | 4,702 | 0.2414 | 7 | yes |
| zstd | 8 | 0.328 | 4,696 | 0.2411 | 6 | yes |
| zstd | 9 | 0.426 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.508 | 4,691 | 0.2408 | 6 | yes |
| zstd | 11 | 0.602 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.640 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.979 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.793 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.899 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.848 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.851 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.851 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.594 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.607 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.622 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.612 | 4,348 | 0.2232 | 5 | yes |
