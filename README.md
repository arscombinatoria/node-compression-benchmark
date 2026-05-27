# Node Compression Benchmark

Last updated: 2026-05-27T22:51:44.203Z

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
| gzip | 1 | 0.930 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.946 | 30,134 | 0.3827 | 8 | yes |
| gzip | 3 | 1.067 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.203 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.559 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.839 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.027 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.354 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.381 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.373 | 33,111 | 0.4205 | 10 | yes |
| brotli | 1 | 0.750 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.809 | 29,394 | 0.3733 | 23 | yes |
| brotli | 3 | 0.943 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.426 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.081 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.259 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.774 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.577 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.747 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.964 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 95.382 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.310 | 31,062 | 0.3944 | 8 | yes |
| zstd | 2 | 0.368 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.441 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.506 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.891 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.192 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.443 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.610 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.772 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.025 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.358 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.483 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.462 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.731 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.868 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.910 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.881 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.926 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.268 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.500 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.445 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.396 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 85.713 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 89.457 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 93.506 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 103.688 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 120.593 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 133.465 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 142.388 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 160.237 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 172.354 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.358 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 27.526 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 48.981 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.242 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 84.113 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 123.760 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 140.220 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 409.664 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 545.551 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 716.288 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6178.540 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12848.341 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.715 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.912 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 39.258 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 42.179 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.004 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.246 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 83.892 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 97.948 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 94.840 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 124.005 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 174.781 | 2,868,731 | 0.5242 | 15 | yes |
| zstd | 12 | 196.415 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 411.876 | 2,864,062 | 0.5233 | 15 | yes |
| zstd | 14 | 455.635 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 505.776 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 679.649 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 817.078 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1158.925 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1258.791 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1280.306 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1287.299 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1289.626 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.001 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 11.977 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 11.999 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.647 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.598 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.599 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.618 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.667 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.710 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.264 | 613,595 | 0.9981 | 6 | yes |
| brotli | 1 | 0.251 | 614,785 | 1.0000 | 5 | yes |
| brotli | 2 | 0.665 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.839 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.063 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.525 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.579 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 1.946 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.331 | 614,785 | 1.0000 | 16 | yes |
| brotli | 9 | 4.432 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 108.023 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 245.874 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.300 | 614,805 | 1.0000 | 6 | yes |
| zstd | 2 | 0.298 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.339 | 614,804 | 1.0000 | 25 | no |
| zstd | 4 | 0.459 | 614,804 | 1.0000 | 9 | yes |
| zstd | 5 | 0.507 | 614,804 | 1.0000 | 8 | yes |
| zstd | 6 | 0.487 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.564 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.551 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.730 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.693 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.678 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.718 | 614,804 | 1.0000 | 24 | yes |
| zstd | 13 | 2.223 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 2.349 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 2.255 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 14.965 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 15.003 | 612,516 | 0.9963 | 25 | no |
| zstd | 18 | 20.198 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 24.512 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 24.110 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 23.978 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 24.786 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,376 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.831 | 144,671 | 0.2962 | 5 | yes |
| gzip | 2 | 4.154 | 137,894 | 0.2824 | 5 | yes |
| gzip | 3 | 5.427 | 133,284 | 0.2729 | 5 | yes |
| gzip | 4 | 5.732 | 125,107 | 0.2562 | 5 | yes |
| gzip | 5 | 8.103 | 120,500 | 0.2467 | 5 | yes |
| gzip | 6 | 11.701 | 118,777 | 0.2432 | 5 | yes |
| gzip | 7 | 14.797 | 118,321 | 0.2423 | 5 | yes |
| gzip | 8 | 27.588 | 118,050 | 0.2417 | 5 | yes |
| gzip | 9 | 42.904 | 117,981 | 0.2416 | 5 | yes |
| brotli | 0 | 1.504 | 149,143 | 0.3054 | 5 | yes |
| brotli | 1 | 2.073 | 136,828 | 0.2802 | 5 | yes |
| brotli | 2 | 3.791 | 128,657 | 0.2634 | 5 | yes |
| brotli | 3 | 4.448 | 125,956 | 0.2579 | 5 | yes |
| brotli | 4 | 6.366 | 122,132 | 0.2501 | 5 | yes |
| brotli | 5 | 9.756 | 112,200 | 0.2297 | 5 | yes |
| brotli | 6 | 11.204 | 109,580 | 0.2244 | 5 | yes |
| brotli | 7 | 13.481 | 107,617 | 0.2204 | 5 | yes |
| brotli | 8 | 16.234 | 106,600 | 0.2183 | 5 | yes |
| brotli | 9 | 22.540 | 105,688 | 0.2164 | 5 | yes |
| brotli | 10 | 266.004 | 98,262 | 0.2012 | 5 | yes |
| brotli | 11 | 710.044 | 96,054 | 0.1967 | 5 | yes |
| zstd | 1 | 1.630 | 137,501 | 0.2815 | 5 | yes |
| zstd | 2 | 1.824 | 133,304 | 0.2730 | 5 | yes |
| zstd | 3 | 2.106 | 125,704 | 0.2574 | 5 | yes |
| zstd | 4 | 2.196 | 125,507 | 0.2570 | 5 | yes |
| zstd | 5 | 4.374 | 116,849 | 0.2393 | 5 | yes |
| zstd | 6 | 6.087 | 112,959 | 0.2313 | 5 | yes |
| zstd | 7 | 6.807 | 111,397 | 0.2281 | 5 | yes |
| zstd | 8 | 8.726 | 110,614 | 0.2265 | 5 | yes |
| zstd | 9 | 8.552 | 110,614 | 0.2265 | 5 | yes |
| zstd | 10 | 10.194 | 109,711 | 0.2246 | 5 | yes |
| zstd | 11 | 12.950 | 109,009 | 0.2232 | 5 | yes |
| zstd | 12 | 12.812 | 109,009 | 0.2232 | 5 | yes |
| zstd | 13 | 25.216 | 107,861 | 0.2209 | 5 | yes |
| zstd | 14 | 30.510 | 107,276 | 0.2197 | 5 | yes |
| zstd | 15 | 33.932 | 107,183 | 0.2195 | 5 | yes |
| zstd | 16 | 62.002 | 101,602 | 0.2080 | 5 | yes |
| zstd | 17 | 69.015 | 100,701 | 0.2062 | 5 | yes |
| zstd | 18 | 108.251 | 99,909 | 0.2046 | 5 | yes |
| zstd | 19 | 143.487 | 99,813 | 0.2044 | 5 | yes |
| zstd | 20 | 140.974 | 99,813 | 0.2044 | 5 | yes |
| zstd | 21 | 141.685 | 99,799 | 0.2043 | 5 | yes |
| zstd | 22 | 141.171 | 99,799 | 0.2043 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.109 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.110 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.135 | 4,805 | 0.2791 | 10 | yes |
| gzip | 4 | 0.174 | 4,529 | 0.2631 | 12 | yes |
| gzip | 5 | 0.235 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.269 | 4,425 | 0.2570 | 6 | yes |
| gzip | 7 | 0.310 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.455 | 4,418 | 0.2566 | 5 | yes |
| gzip | 9 | 0.459 | 4,418 | 0.2566 | 5 | yes |
| brotli | 0 | 0.060 | 5,234 | 0.3040 | 8 | yes |
| brotli | 1 | 0.067 | 5,133 | 0.2981 | 9 | yes |
| brotli | 2 | 0.129 | 4,740 | 0.2753 | 9 | yes |
| brotli | 3 | 0.153 | 4,650 | 0.2701 | 13 | yes |
| brotli | 4 | 0.289 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.384 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.401 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.444 | 4,264 | 0.2477 | 6 | yes |
| brotli | 8 | 0.470 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 2.526 | 4,244 | 0.2465 | 7 | yes |
| brotli | 10 | 6.727 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.376 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.054 | 4,924 | 0.2860 | 11 | yes |
| zstd | 2 | 0.059 | 4,868 | 0.2827 | 13 | yes |
| zstd | 3 | 0.075 | 4,718 | 0.2740 | 9 | yes |
| zstd | 4 | 0.081 | 4,680 | 0.2718 | 11 | yes |
| zstd | 5 | 0.167 | 4,518 | 0.2624 | 11 | yes |
| zstd | 6 | 0.205 | 4,437 | 0.2577 | 8 | yes |
| zstd | 7 | 0.266 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.279 | 4,425 | 0.2570 | 5 | yes |
| zstd | 9 | 0.324 | 4,419 | 0.2567 | 5 | yes |
| zstd | 10 | 0.374 | 4,409 | 0.2561 | 5 | yes |
| zstd | 11 | 0.596 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.634 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.906 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.429 | 4,305 | 0.2500 | 5 | yes |
| zstd | 15 | 1.527 | 4,302 | 0.2499 | 5 | yes |
| zstd | 16 | 2.455 | 4,281 | 0.2486 | 5 | yes |
| zstd | 17 | 2.636 | 4,280 | 0.2486 | 5 | yes |
| zstd | 18 | 2.629 | 4,280 | 0.2486 | 5 | yes |
| zstd | 19 | 5.170 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.171 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.164 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.169 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.057 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.055 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.057 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.070 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.077 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.187 | 3,044 | 0.4251 | 16 | yes |
| gzip | 7 | 0.090 | 3,042 | 0.4248 | 25 | no |
| gzip | 8 | 0.096 | 3,042 | 0.4248 | 25 | no |
| gzip | 9 | 0.082 | 3,042 | 0.4248 | 14 | yes |
| brotli | 0 | 0.032 | 3,549 | 0.4956 | 10 | yes |
| brotli | 1 | 0.040 | 3,381 | 0.4721 | 12 | yes |
| brotli | 2 | 0.064 | 3,263 | 0.4557 | 25 | no |
| brotli | 3 | 0.077 | 3,216 | 0.4491 | 15 | yes |
| brotli | 4 | 0.159 | 3,147 | 0.4395 | 24 | yes |
| brotli | 5 | 0.217 | 2,963 | 0.4138 | 9 | yes |
| brotli | 6 | 0.232 | 2,952 | 0.4122 | 6 | yes |
| brotli | 7 | 0.255 | 2,944 | 0.4111 | 7 | yes |
| brotli | 8 | 0.252 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 1.906 | 2,945 | 0.4113 | 7 | yes |
| brotli | 10 | 3.110 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.693 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.032 | 3,254 | 0.4544 | 14 | yes |
| zstd | 2 | 0.034 | 3,200 | 0.4469 | 20 | yes |
| zstd | 3 | 0.043 | 3,176 | 0.4435 | 11 | yes |
| zstd | 4 | 0.060 | 3,102 | 0.4332 | 16 | yes |
| zstd | 5 | 0.071 | 3,079 | 0.4300 | 16 | yes |
| zstd | 6 | 0.089 | 3,060 | 0.4273 | 23 | yes |
| zstd | 7 | 0.121 | 3,053 | 0.4263 | 22 | yes |
| zstd | 8 | 0.115 | 3,053 | 0.4263 | 25 | no |
| zstd | 9 | 0.189 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.144 | 3,055 | 0.4266 | 25 | no |
| zstd | 11 | 0.344 | 3,044 | 0.4251 | 7 | yes |
| zstd | 12 | 0.480 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.649 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.658 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.658 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.269 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.269 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.282 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.259 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.268 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.287 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.273 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,217 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.852 | 66,928 | 0.4076 | 5 | yes |
| gzip | 2 | 2.024 | 65,338 | 0.3979 | 5 | yes |
| gzip | 3 | 2.280 | 64,317 | 0.3917 | 5 | yes |
| gzip | 4 | 2.546 | 61,980 | 0.3774 | 5 | yes |
| gzip | 5 | 3.429 | 60,339 | 0.3674 | 5 | yes |
| gzip | 6 | 4.240 | 60,067 | 0.3658 | 5 | yes |
| gzip | 7 | 4.608 | 60,024 | 0.3655 | 5 | yes |
| gzip | 8 | 5.014 | 60,007 | 0.3654 | 5 | yes |
| gzip | 9 | 4.988 | 60,007 | 0.3654 | 5 | yes |
| brotli | 0 | 0.666 | 71,251 | 0.4339 | 5 | yes |
| brotli | 1 | 0.865 | 68,275 | 0.4158 | 5 | yes |
| brotli | 2 | 1.633 | 63,015 | 0.3837 | 5 | yes |
| brotli | 3 | 1.895 | 62,457 | 0.3803 | 5 | yes |
| brotli | 4 | 2.909 | 61,234 | 0.3729 | 5 | yes |
| brotli | 5 | 4.339 | 57,931 | 0.3528 | 5 | yes |
| brotli | 6 | 4.725 | 57,572 | 0.3506 | 5 | yes |
| brotli | 7 | 5.599 | 57,281 | 0.3488 | 5 | yes |
| brotli | 8 | 6.248 | 57,200 | 0.3483 | 5 | yes |
| brotli | 9 | 8.650 | 57,125 | 0.3479 | 5 | yes |
| brotli | 10 | 95.385 | 54,364 | 0.3310 | 5 | yes |
| brotli | 11 | 242.124 | 53,487 | 0.3257 | 5 | yes |
| zstd | 1 | 0.620 | 66,282 | 0.4036 | 5 | yes |
| zstd | 2 | 0.802 | 63,237 | 0.3851 | 5 | yes |
| zstd | 3 | 1.042 | 62,745 | 0.3821 | 5 | yes |
| zstd | 4 | 1.759 | 60,886 | 0.3708 | 5 | yes |
| zstd | 5 | 1.931 | 60,366 | 0.3676 | 5 | yes |
| zstd | 6 | 2.403 | 59,468 | 0.3621 | 5 | yes |
| zstd | 7 | 2.836 | 58,678 | 0.3573 | 5 | yes |
| zstd | 8 | 3.546 | 58,201 | 0.3544 | 5 | yes |
| zstd | 9 | 4.106 | 57,953 | 0.3529 | 5 | yes |
| zstd | 10 | 4.934 | 57,830 | 0.3522 | 5 | yes |
| zstd | 11 | 8.191 | 57,527 | 0.3503 | 5 | yes |
| zstd | 12 | 8.430 | 57,514 | 0.3502 | 5 | yes |
| zstd | 13 | 14.873 | 56,499 | 0.3441 | 5 | yes |
| zstd | 14 | 17.665 | 56,072 | 0.3415 | 5 | yes |
| zstd | 15 | 18.032 | 56,052 | 0.3413 | 5 | yes |
| zstd | 16 | 24.399 | 55,868 | 0.3402 | 5 | yes |
| zstd | 17 | 24.365 | 55,868 | 0.3402 | 5 | yes |
| zstd | 18 | 41.701 | 55,790 | 0.3397 | 5 | yes |
| zstd | 19 | 42.993 | 55,790 | 0.3397 | 5 | yes |
| zstd | 20 | 41.870 | 55,790 | 0.3397 | 5 | yes |
| zstd | 21 | 41.641 | 55,790 | 0.3397 | 5 | yes |
| zstd | 22 | 41.557 | 55,790 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.796 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.856 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.976 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.076 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.407 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.783 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.134 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.867 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.852 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.290 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.376 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.679 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.797 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.331 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.951 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.083 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.391 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.588 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.847 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 38.944 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 95.149 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.263 | 28,919 | 0.3949 | 5 | yes |
| zstd | 2 | 0.295 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.338 | 27,463 | 0.3750 | 7 | yes |
| zstd | 4 | 0.435 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.779 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.063 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.289 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.403 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.620 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.935 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.161 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.365 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.383 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.542 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.601 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.566 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.582 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.594 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.176 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.189 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.202 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.174 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.579 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.669 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.804 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.908 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.266 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.897 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.532 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.584 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.696 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.269 | 25,901 | 0.3420 | 5 | yes |
| brotli | 1 | 0.378 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.630 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.752 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.155 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.679 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.890 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.221 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.693 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 5.066 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 28.945 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 86.787 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.267 | 22,639 | 0.2989 | 6 | yes |
| zstd | 2 | 0.285 | 22,433 | 0.2962 | 5 | yes |
| zstd | 3 | 0.331 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.406 | 22,181 | 0.2929 | 12 | yes |
| zstd | 5 | 0.743 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 0.987 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.232 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.416 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.771 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.485 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.237 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.096 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.931 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 6.944 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.062 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.389 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.420 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 21.232 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 21.972 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 25.866 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 36.911 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 42.699 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.073 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.135 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.305 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.681 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.148 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.896 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.536 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.733 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.792 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.447 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.629 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.157 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.378 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.031 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.993 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.229 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.573 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.116 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.674 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 94.406 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 294.733 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.527 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.558 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.608 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.409 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.636 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.919 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.129 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.632 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.152 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.320 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.854 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.605 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.170 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.230 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 27.545 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 55.664 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 62.621 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 83.279 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 95.772 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 99.517 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 99.713 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 99.454 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 90.114 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 90.656 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 108.617 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 141.393 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 166.790 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 211.493 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 319.608 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 903.109 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1203.450 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 45.137 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 61.480 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 108.571 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 130.355 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 168.691 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 292.509 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 343.351 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 465.758 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 596.069 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 811.843 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 12827.029 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37012.387 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.305 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 55.343 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 66.685 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 69.246 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 141.823 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 201.563 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 227.839 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 288.967 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 298.161 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 408.680 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 589.191 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 631.669 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 794.624 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1015.925 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1352.747 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3224.357 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3631.894 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5125.503 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9307.067 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9577.338 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9607.343 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 10352.182 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.287 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.267 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.503 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.463 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.519 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.736 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.386 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.276 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.362 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.009 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.322 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.961 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.115 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.765 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.434 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.382 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.943 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 53.515 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 67.760 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 911.009 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1944.623 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.042 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.829 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.851 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.524 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.226 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.820 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.854 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.563 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.599 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.323 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 25.148 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.006 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 47.464 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 46.793 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 47.090 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 89.346 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 111.679 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 151.493 | 358,220 | 0.4167 | 6 | yes |
| zstd | 19 | 164.359 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 165.608 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 171.113 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 167.883 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.116 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.121 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.159 | 5,356 | 0.2749 | 13 | yes |
| gzip | 4 | 0.203 | 5,145 | 0.2641 | 9 | yes |
| gzip | 5 | 0.264 | 4,896 | 0.2513 | 8 | yes |
| gzip | 6 | 0.354 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.478 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.644 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.642 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.061 | 6,028 | 0.3094 | 12 | yes |
| brotli | 1 | 0.072 | 5,737 | 0.2945 | 13 | yes |
| brotli | 2 | 0.136 | 4,944 | 0.2538 | 13 | yes |
| brotli | 3 | 0.172 | 4,930 | 0.2531 | 9 | yes |
| brotli | 4 | 0.304 | 4,898 | 0.2514 | 5 | yes |
| brotli | 5 | 0.467 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.501 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.554 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.599 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.715 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.089 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.318 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.057 | 5,379 | 0.2761 | 13 | yes |
| zstd | 2 | 0.063 | 5,176 | 0.2657 | 21 | yes |
| zstd | 3 | 0.080 | 5,169 | 0.2653 | 9 | yes |
| zstd | 4 | 0.086 | 5,154 | 0.2646 | 16 | yes |
| zstd | 5 | 0.177 | 5,074 | 0.2605 | 7 | yes |
| zstd | 6 | 0.242 | 4,797 | 0.2463 | 5 | yes |
| zstd | 7 | 0.294 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.323 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.396 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.500 | 4,691 | 0.2408 | 6 | yes |
| zstd | 11 | 0.583 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.646 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.986 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.787 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.910 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.846 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.836 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.828 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.562 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.596 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.603 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.593 | 4,348 | 0.2232 | 5 | yes |
