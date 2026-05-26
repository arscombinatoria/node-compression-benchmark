# Node Compression Benchmark

Last updated: 2026-05-26T23:43:28.306Z

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
| gzip | 1 | 1.029 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.062 | 30,134 | 0.3827 | 7 | yes |
| gzip | 3 | 1.195 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.331 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.753 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.109 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.312 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.707 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.720 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.351 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.816 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.820 | 29,394 | 0.3733 | 9 | yes |
| brotli | 3 | 0.975 | 29,072 | 0.3692 | 7 | yes |
| brotli | 4 | 1.429 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.015 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.257 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.838 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.740 | 26,725 | 0.3394 | 20 | yes |
| brotli | 9 | 4.834 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 35.103 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 100.136 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.318 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.258 | 30,069 | 0.3818 | 13 | yes |
| zstd | 3 | 0.301 | 29,214 | 0.3710 | 16 | yes |
| zstd | 4 | 0.356 | 29,108 | 0.3696 | 21 | yes |
| zstd | 5 | 0.936 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.231 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.556 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.640 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.793 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.049 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.423 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.528 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.435 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.678 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.760 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.012 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.003 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.008 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.615 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.531 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.573 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.542 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 96.210 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 99.643 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 103.291 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 114.176 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 133.456 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 150.535 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 160.834 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 180.586 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 194.195 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.562 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.315 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 51.629 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.458 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 94.251 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 127.220 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 148.734 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 443.289 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 599.799 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 773.687 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6973.625 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13754.862 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.796 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.976 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 35.759 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 43.967 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 68.112 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 81.149 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 88.582 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 105.109 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 107.125 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 132.585 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 178.389 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 194.348 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 430.936 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 550.805 | 2,852,038 | 0.5211 | 6 | yes |
| zstd | 15 | 609.880 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 780.198 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 918.936 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1320.373 | 2,713,297 | 0.4958 | 6 | yes |
| zstd | 19 | 1351.197 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1382.306 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1365.778 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1398.541 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.819 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.789 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.718 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 14.271 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 14.307 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 14.302 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 14.327 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 14.247 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 14.293 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.255 | 613,595 | 0.9981 | 5 | yes |
| brotli | 1 | 0.228 | 614,785 | 1.0000 | 7 | yes |
| brotli | 2 | 0.591 | 614,791 | 1.0000 | 7 | yes |
| brotli | 3 | 0.760 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.927 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.494 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.512 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 2.095 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.095 | 614,785 | 1.0000 | 21 | yes |
| brotli | 9 | 4.521 | 614,785 | 1.0000 | 12 | yes |
| brotli | 10 | 117.109 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 266.969 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.302 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.311 | 614,804 | 1.0000 | 10 | yes |
| zstd | 3 | 0.328 | 614,804 | 1.0000 | 12 | yes |
| zstd | 4 | 0.376 | 614,804 | 1.0000 | 25 | no |
| zstd | 5 | 0.492 | 614,804 | 1.0000 | 7 | yes |
| zstd | 6 | 0.485 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.532 | 614,804 | 1.0000 | 8 | yes |
| zstd | 8 | 0.527 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.621 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.604 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.619 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.621 | 614,804 | 1.0000 | 13 | yes |
| zstd | 13 | 2.618 | 612,619 | 0.9965 | 9 | yes |
| zstd | 14 | 2.299 | 612,619 | 0.9965 | 7 | yes |
| zstd | 15 | 2.373 | 612,619 | 0.9965 | 21 | yes |
| zstd | 16 | 14.493 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 14.575 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 21.158 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 24.621 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 24.699 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 24.707 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 24.374 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,376 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.225 | 144,671 | 0.2962 | 5 | yes |
| gzip | 2 | 4.637 | 137,894 | 0.2824 | 5 | yes |
| gzip | 3 | 6.100 | 133,284 | 0.2729 | 5 | yes |
| gzip | 4 | 6.198 | 125,107 | 0.2562 | 5 | yes |
| gzip | 5 | 9.103 | 120,500 | 0.2467 | 5 | yes |
| gzip | 6 | 13.342 | 118,777 | 0.2432 | 5 | yes |
| gzip | 7 | 17.091 | 118,321 | 0.2423 | 5 | yes |
| gzip | 8 | 32.280 | 118,050 | 0.2417 | 5 | yes |
| gzip | 9 | 49.921 | 117,981 | 0.2416 | 5 | yes |
| brotli | 0 | 1.547 | 149,143 | 0.3054 | 5 | yes |
| brotli | 1 | 2.205 | 136,828 | 0.2802 | 5 | yes |
| brotli | 2 | 3.979 | 128,657 | 0.2634 | 5 | yes |
| brotli | 3 | 4.616 | 125,956 | 0.2579 | 5 | yes |
| brotli | 4 | 6.552 | 122,132 | 0.2501 | 5 | yes |
| brotli | 5 | 10.208 | 112,200 | 0.2297 | 5 | yes |
| brotli | 6 | 11.753 | 109,580 | 0.2244 | 5 | yes |
| brotli | 7 | 14.311 | 107,617 | 0.2204 | 5 | yes |
| brotli | 8 | 17.258 | 106,600 | 0.2183 | 5 | yes |
| brotli | 9 | 23.127 | 105,688 | 0.2164 | 5 | yes |
| brotli | 10 | 295.388 | 98,262 | 0.2012 | 5 | yes |
| brotli | 11 | 763.717 | 96,054 | 0.1967 | 5 | yes |
| zstd | 1 | 1.778 | 137,501 | 0.2815 | 5 | yes |
| zstd | 2 | 1.929 | 133,304 | 0.2730 | 5 | yes |
| zstd | 3 | 2.073 | 125,704 | 0.2574 | 5 | yes |
| zstd | 4 | 2.251 | 125,507 | 0.2570 | 5 | yes |
| zstd | 5 | 4.602 | 116,849 | 0.2393 | 5 | yes |
| zstd | 6 | 6.250 | 112,959 | 0.2313 | 5 | yes |
| zstd | 7 | 6.968 | 111,397 | 0.2281 | 5 | yes |
| zstd | 8 | 8.799 | 110,614 | 0.2265 | 5 | yes |
| zstd | 9 | 8.862 | 110,614 | 0.2265 | 5 | yes |
| zstd | 10 | 10.607 | 109,711 | 0.2246 | 5 | yes |
| zstd | 11 | 13.326 | 109,009 | 0.2232 | 5 | yes |
| zstd | 12 | 13.427 | 109,009 | 0.2232 | 5 | yes |
| zstd | 13 | 27.945 | 107,861 | 0.2209 | 5 | yes |
| zstd | 14 | 33.283 | 107,276 | 0.2197 | 5 | yes |
| zstd | 15 | 36.762 | 107,183 | 0.2195 | 5 | yes |
| zstd | 16 | 65.102 | 101,602 | 0.2080 | 5 | yes |
| zstd | 17 | 72.618 | 100,701 | 0.2062 | 5 | yes |
| zstd | 18 | 107.945 | 99,909 | 0.2046 | 5 | yes |
| zstd | 19 | 137.616 | 99,813 | 0.2044 | 5 | yes |
| zstd | 20 | 135.874 | 99,813 | 0.2044 | 5 | yes |
| zstd | 21 | 136.839 | 99,799 | 0.2043 | 5 | yes |
| zstd | 22 | 135.969 | 99,799 | 0.2043 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.070 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.079 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.084 | 4,805 | 0.2791 | 25 | no |
| gzip | 4 | 0.111 | 4,529 | 0.2631 | 17 | yes |
| gzip | 5 | 0.134 | 4,441 | 0.2579 | 22 | yes |
| gzip | 6 | 0.192 | 4,425 | 0.2570 | 25 | no |
| gzip | 7 | 0.209 | 4,418 | 0.2566 | 9 | yes |
| gzip | 8 | 0.483 | 4,418 | 0.2566 | 5 | yes |
| gzip | 9 | 0.421 | 4,418 | 0.2566 | 8 | yes |
| brotli | 0 | 0.053 | 5,234 | 0.3040 | 12 | yes |
| brotli | 1 | 0.072 | 5,133 | 0.2981 | 7 | yes |
| brotli | 2 | 0.094 | 4,740 | 0.2753 | 11 | yes |
| brotli | 3 | 0.140 | 4,650 | 0.2701 | 25 | no |
| brotli | 4 | 0.276 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.266 | 4,276 | 0.2484 | 23 | yes |
| brotli | 6 | 0.309 | 4,275 | 0.2483 | 21 | yes |
| brotli | 7 | 0.427 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.400 | 4,257 | 0.2473 | 11 | yes |
| brotli | 9 | 1.943 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.211 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.409 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.052 | 4,924 | 0.2860 | 17 | yes |
| zstd | 2 | 0.060 | 4,868 | 0.2827 | 9 | yes |
| zstd | 3 | 0.073 | 4,718 | 0.2740 | 25 | no |
| zstd | 4 | 0.070 | 4,680 | 0.2718 | 16 | yes |
| zstd | 5 | 0.136 | 4,518 | 0.2624 | 10 | yes |
| zstd | 6 | 0.172 | 4,437 | 0.2577 | 8 | yes |
| zstd | 7 | 0.195 | 4,437 | 0.2577 | 11 | yes |
| zstd | 8 | 0.224 | 4,425 | 0.2570 | 6 | yes |
| zstd | 9 | 0.290 | 4,419 | 0.2567 | 5 | yes |
| zstd | 10 | 0.311 | 4,409 | 0.2561 | 11 | yes |
| zstd | 11 | 0.653 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.655 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.928 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.403 | 4,305 | 0.2500 | 5 | yes |
| zstd | 15 | 1.489 | 4,302 | 0.2499 | 5 | yes |
| zstd | 16 | 2.173 | 4,281 | 0.2486 | 5 | yes |
| zstd | 17 | 2.308 | 4,280 | 0.2486 | 5 | yes |
| zstd | 18 | 2.313 | 4,280 | 0.2486 | 5 | yes |
| zstd | 19 | 4.550 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.522 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.514 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.535 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.052 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.051 | 3,182 | 0.4444 | 22 | yes |
| gzip | 3 | 0.051 | 3,153 | 0.4403 | 13 | yes |
| gzip | 4 | 0.064 | 3,095 | 0.4322 | 13 | yes |
| gzip | 5 | 0.073 | 3,051 | 0.4261 | 22 | yes |
| gzip | 6 | 0.073 | 3,044 | 0.4251 | 15 | yes |
| gzip | 7 | 0.080 | 3,042 | 0.4248 | 25 | no |
| gzip | 8 | 0.076 | 3,042 | 0.4248 | 12 | yes |
| gzip | 9 | 0.080 | 3,042 | 0.4248 | 5 | yes |
| brotli | 0 | 0.031 | 3,549 | 0.4956 | 9 | yes |
| brotli | 1 | 0.042 | 3,381 | 0.4721 | 9 | yes |
| brotli | 2 | 0.058 | 3,263 | 0.4557 | 19 | yes |
| brotli | 3 | 0.074 | 3,216 | 0.4491 | 17 | yes |
| brotli | 4 | 0.123 | 3,147 | 0.4395 | 13 | yes |
| brotli | 5 | 0.154 | 2,963 | 0.4138 | 17 | yes |
| brotli | 6 | 0.164 | 2,952 | 0.4122 | 21 | yes |
| brotli | 7 | 0.170 | 2,944 | 0.4111 | 20 | yes |
| brotli | 8 | 0.179 | 2,944 | 0.4111 | 24 | yes |
| brotli | 9 | 1.743 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.247 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.078 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.031 | 3,254 | 0.4544 | 25 | no |
| zstd | 2 | 0.032 | 3,200 | 0.4469 | 22 | yes |
| zstd | 3 | 0.040 | 3,176 | 0.4435 | 19 | yes |
| zstd | 4 | 0.062 | 3,102 | 0.4332 | 14 | yes |
| zstd | 5 | 0.072 | 3,079 | 0.4300 | 12 | yes |
| zstd | 6 | 0.088 | 3,060 | 0.4273 | 19 | yes |
| zstd | 7 | 0.099 | 3,053 | 0.4263 | 7 | yes |
| zstd | 8 | 0.100 | 3,053 | 0.4263 | 5 | yes |
| zstd | 9 | 0.115 | 3,055 | 0.4266 | 24 | yes |
| zstd | 10 | 0.118 | 3,055 | 0.4266 | 7 | yes |
| zstd | 11 | 0.227 | 3,044 | 0.4251 | 17 | yes |
| zstd | 12 | 0.427 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.596 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.562 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.538 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.031 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.027 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.039 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.020 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.033 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.034 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.020 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,101 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.068 | 66,867 | 0.4075 | 5 | yes |
| gzip | 2 | 2.228 | 65,284 | 0.3978 | 5 | yes |
| gzip | 3 | 2.565 | 64,273 | 0.3917 | 5 | yes |
| gzip | 4 | 2.781 | 61,944 | 0.3775 | 5 | yes |
| gzip | 5 | 3.859 | 60,295 | 0.3674 | 5 | yes |
| gzip | 6 | 4.826 | 60,024 | 0.3658 | 5 | yes |
| gzip | 7 | 5.283 | 59,987 | 0.3655 | 5 | yes |
| gzip | 8 | 5.740 | 59,968 | 0.3654 | 5 | yes |
| gzip | 9 | 5.876 | 59,968 | 0.3654 | 5 | yes |
| brotli | 0 | 0.573 | 71,266 | 0.4343 | 19 | yes |
| brotli | 1 | 0.934 | 68,223 | 0.4157 | 5 | yes |
| brotli | 2 | 1.755 | 62,973 | 0.3837 | 5 | yes |
| brotli | 3 | 2.056 | 62,342 | 0.3799 | 5 | yes |
| brotli | 4 | 2.957 | 61,240 | 0.3732 | 5 | yes |
| brotli | 5 | 4.532 | 57,877 | 0.3527 | 5 | yes |
| brotli | 6 | 5.032 | 57,538 | 0.3506 | 5 | yes |
| brotli | 7 | 6.151 | 57,245 | 0.3488 | 5 | yes |
| brotli | 8 | 6.512 | 57,160 | 0.3483 | 5 | yes |
| brotli | 9 | 8.962 | 57,088 | 0.3479 | 5 | yes |
| brotli | 10 | 102.994 | 54,389 | 0.3314 | 5 | yes |
| brotli | 11 | 257.577 | 53,368 | 0.3252 | 5 | yes |
| zstd | 1 | 0.623 | 66,221 | 0.4035 | 5 | yes |
| zstd | 2 | 0.784 | 63,208 | 0.3852 | 5 | yes |
| zstd | 3 | 1.019 | 62,693 | 0.3820 | 5 | yes |
| zstd | 4 | 1.817 | 60,843 | 0.3708 | 5 | yes |
| zstd | 5 | 2.036 | 60,346 | 0.3677 | 5 | yes |
| zstd | 6 | 2.465 | 59,421 | 0.3621 | 5 | yes |
| zstd | 7 | 2.966 | 58,638 | 0.3573 | 5 | yes |
| zstd | 8 | 3.691 | 58,163 | 0.3544 | 5 | yes |
| zstd | 9 | 4.213 | 57,917 | 0.3529 | 5 | yes |
| zstd | 10 | 5.069 | 57,792 | 0.3522 | 5 | yes |
| zstd | 11 | 8.489 | 57,490 | 0.3503 | 5 | yes |
| zstd | 12 | 8.727 | 57,475 | 0.3502 | 5 | yes |
| zstd | 13 | 15.017 | 56,464 | 0.3441 | 5 | yes |
| zstd | 14 | 17.529 | 56,028 | 0.3414 | 5 | yes |
| zstd | 15 | 17.797 | 56,011 | 0.3413 | 5 | yes |
| zstd | 16 | 23.660 | 55,838 | 0.3403 | 5 | yes |
| zstd | 17 | 23.472 | 55,838 | 0.3403 | 5 | yes |
| zstd | 18 | 41.483 | 55,766 | 0.3398 | 5 | yes |
| zstd | 19 | 41.952 | 55,766 | 0.3398 | 5 | yes |
| zstd | 20 | 40.454 | 55,766 | 0.3398 | 5 | yes |
| zstd | 21 | 40.799 | 55,766 | 0.3398 | 5 | yes |
| zstd | 22 | 40.266 | 55,766 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.843 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.922 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.070 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.160 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.557 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.018 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.428 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.306 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.309 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.203 | 30,978 | 0.4230 | 10 | yes |
| brotli | 1 | 0.318 | 29,754 | 0.4063 | 22 | yes |
| brotli | 2 | 0.737 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.861 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.306 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.959 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.131 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.603 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.846 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.898 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 42.003 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 100.605 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.195 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.223 | 28,008 | 0.3824 | 12 | yes |
| zstd | 3 | 0.260 | 27,463 | 0.3750 | 11 | yes |
| zstd | 4 | 0.314 | 27,100 | 0.3700 | 16 | yes |
| zstd | 5 | 0.792 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.106 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.325 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.455 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.642 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.960 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.223 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.330 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.208 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.432 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.419 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.802 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.779 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.763 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.595 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.529 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.562 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.572 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.658 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.735 | 23,403 | 0.3090 | 6 | yes |
| gzip | 3 | 0.905 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.976 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.410 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 2.221 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 3.069 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 9.456 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 9.532 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.182 | 25,901 | 0.3420 | 13 | yes |
| brotli | 1 | 0.306 | 23,906 | 0.3156 | 18 | yes |
| brotli | 2 | 0.675 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.801 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.140 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.730 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.954 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.423 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.767 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 5.118 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 30.625 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 89.302 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.197 | 22,639 | 0.2989 | 13 | yes |
| zstd | 2 | 0.216 | 22,433 | 0.2962 | 11 | yes |
| zstd | 3 | 0.238 | 22,208 | 0.2932 | 17 | yes |
| zstd | 4 | 0.361 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.703 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 0.997 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.239 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.430 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.750 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.354 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.231 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.296 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.877 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 6.730 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.031 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.511 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 13.920 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.567 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 19.905 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 23.713 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.480 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 45.946 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.170 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.243 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.459 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.722 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.258 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.152 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.916 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.306 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.381 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.386 | 43,268 | 0.1864 | 25 | no |
| brotli | 1 | 0.661 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.246 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.465 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.136 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.153 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.364 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.891 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.406 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.875 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 101.965 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 305.581 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.373 | 35,549 | 0.1532 | 20 | yes |
| zstd | 2 | 0.515 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.523 | 34,393 | 0.1482 | 10 | yes |
| zstd | 4 | 1.442 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.715 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.969 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.198 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.722 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.224 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.021 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.192 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.922 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.720 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.178 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 27.861 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.520 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 52.966 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 72.615 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.536 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 83.657 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.657 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 83.538 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 97.959 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 98.913 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 121.052 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 139.744 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 171.946 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 228.006 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 359.673 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 1038.263 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1394.496 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 44.393 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 65.842 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 121.628 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 141.552 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 195.815 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 318.272 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 364.661 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 504.067 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 645.877 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 873.515 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 14362.215 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 39068.973 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 46.115 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 54.904 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 68.227 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 72.826 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 148.903 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 208.728 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 238.185 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 302.739 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 317.959 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 416.288 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 568.567 | 2,720,543 | 0.1239 | 7 | yes |
| zstd | 12 | 611.068 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 854.940 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1093.153 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1394.654 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3506.782 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3956.497 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5304.108 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9002.998 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9414.637 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9266.279 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9973.203 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.617 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.771 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.456 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.121 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 26.722 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 31.790 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 33.754 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.272 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.141 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.166 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.735 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.512 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.902 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.574 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.806 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.594 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 46.618 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 55.521 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 67.793 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 969.370 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2087.221 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.264 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.139 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.582 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.558 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.645 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.396 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.535 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.148 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.437 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.193 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.743 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.856 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 51.871 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 55.749 | 383,886 | 0.4465 | 6 | yes |
| zstd | 15 | 58.028 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 109.521 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 128.929 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 163.473 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 181.785 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 186.846 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 187.053 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 188.568 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.078 | 5,506 | 0.2826 | 24 | yes |
| gzip | 2 | 0.085 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.119 | 5,356 | 0.2749 | 25 | no |
| gzip | 4 | 0.159 | 5,145 | 0.2641 | 25 | no |
| gzip | 5 | 0.273 | 4,896 | 0.2513 | 5 | yes |
| gzip | 6 | 0.351 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.507 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.717 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.700 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.058 | 6,028 | 0.3094 | 17 | yes |
| brotli | 1 | 0.078 | 5,737 | 0.2945 | 9 | yes |
| brotli | 2 | 0.105 | 4,944 | 0.2538 | 21 | yes |
| brotli | 3 | 0.132 | 4,930 | 0.2531 | 13 | yes |
| brotli | 4 | 0.213 | 4,898 | 0.2514 | 20 | yes |
| brotli | 5 | 0.414 | 4,581 | 0.2352 | 9 | yes |
| brotli | 6 | 0.466 | 4,570 | 0.2346 | 8 | yes |
| brotli | 7 | 0.590 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.668 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.766 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.557 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.464 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.056 | 5,379 | 0.2761 | 13 | yes |
| zstd | 2 | 0.058 | 5,176 | 0.2657 | 15 | yes |
| zstd | 3 | 0.071 | 5,169 | 0.2653 | 14 | yes |
| zstd | 4 | 0.074 | 5,154 | 0.2646 | 7 | yes |
| zstd | 5 | 0.142 | 5,074 | 0.2605 | 8 | yes |
| zstd | 6 | 0.185 | 4,797 | 0.2463 | 10 | yes |
| zstd | 7 | 0.219 | 4,702 | 0.2414 | 16 | yes |
| zstd | 8 | 0.266 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.342 | 4,690 | 0.2408 | 25 | yes |
| zstd | 10 | 0.473 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.595 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.640 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.977 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.728 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.831 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.559 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.557 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.547 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.005 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.034 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.037 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.070 | 4,348 | 0.2232 | 5 | yes |
