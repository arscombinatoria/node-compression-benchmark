# Node Compression Benchmark

Last updated: 2026-06-02T00:07:48.517Z

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
| gzip | 1 | 1.339 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.456 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.556 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.804 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 2.257 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.613 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.067 | 27,547 | 0.3498 | 16 | yes |
| gzip | 8 | 2.374 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.343 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.372 | 33,111 | 0.4205 | 5 | yes |
| brotli | 1 | 0.759 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.785 | 29,394 | 0.3733 | 9 | yes |
| brotli | 3 | 0.918 | 29,072 | 0.3692 | 10 | yes |
| brotli | 4 | 1.458 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.100 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.270 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 2.488 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.572 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.942 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 34.109 | 25,340 | 0.3218 | 18 | yes |
| brotli | 11 | 101.356 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.304 | 31,062 | 0.3944 | 19 | yes |
| zstd | 2 | 0.343 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.432 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.506 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.901 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.192 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.473 | 27,383 | 0.3477 | 7 | yes |
| zstd | 8 | 1.607 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.790 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.045 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.405 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.528 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.568 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.808 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.117 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.131 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.057 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.071 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.709 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.658 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.808 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.636 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 85.762 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 87.573 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 94.724 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 103.177 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 119.135 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 133.296 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 141.681 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 158.928 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.078 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.523 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 27.513 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.891 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 65.412 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 87.412 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 126.086 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 145.597 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 417.776 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 554.007 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 690.862 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6266.674 | 2,728,891 | 0.4986 | 6 | yes |
| brotli | 11 | 12852.629 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.884 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.567 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 40.597 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 44.453 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.594 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 80.776 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 87.519 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 101.732 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 102.614 | 2,901,056 | 0.5301 | 6 | yes |
| zstd | 10 | 130.585 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 194.627 | 2,868,731 | 0.5242 | 7 | yes |
| zstd | 12 | 209.706 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 481.112 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 463.141 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 598.642 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 732.036 | 2,803,911 | 0.5123 | 10 | yes |
| zstd | 17 | 1129.301 | 2,756,112 | 0.5036 | 25 | no |
| zstd | 18 | 1497.103 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1568.507 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1448.075 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1500.093 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1501.987 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.086 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.029 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.000 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.674 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.637 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.658 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.721 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.643 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.804 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.319 | 613,595 | 0.9981 | 5 | yes |
| brotli | 1 | 0.281 | 614,785 | 1.0000 | 16 | yes |
| brotli | 2 | 0.643 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.797 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.066 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.737 | 614,785 | 1.0000 | 9 | yes |
| brotli | 6 | 1.716 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 2.147 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.699 | 614,785 | 1.0000 | 11 | yes |
| brotli | 9 | 4.916 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 126.419 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 252.550 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.314 | 614,805 | 1.0000 | 8 | yes |
| zstd | 2 | 0.300 | 614,804 | 1.0000 | 20 | yes |
| zstd | 3 | 0.401 | 614,804 | 1.0000 | 25 | no |
| zstd | 4 | 0.384 | 614,804 | 1.0000 | 9 | yes |
| zstd | 5 | 0.496 | 614,804 | 1.0000 | 12 | yes |
| zstd | 6 | 0.482 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.562 | 614,804 | 1.0000 | 25 | no |
| zstd | 8 | 0.574 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.683 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.672 | 614,804 | 1.0000 | 7 | yes |
| zstd | 11 | 0.677 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.694 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.636 | 612,619 | 0.9965 | 25 | no |
| zstd | 14 | 2.780 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 2.713 | 612,619 | 0.9965 | 8 | yes |
| zstd | 16 | 22.155 | 612,536 | 0.9963 | 25 | no |
| zstd | 17 | 24.433 | 612,516 | 0.9963 | 25 | no |
| zstd | 18 | 46.631 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 32.100 | 612,518 | 0.9963 | 25 | no |
| zstd | 20 | 30.802 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 31.334 | 612,518 | 0.9963 | 25 | no |
| zstd | 22 | 46.856 | 612,518 | 0.9963 | 25 | no |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,376 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.900 | 144,671 | 0.2962 | 5 | yes |
| gzip | 2 | 4.213 | 137,894 | 0.2824 | 5 | yes |
| gzip | 3 | 5.484 | 133,284 | 0.2729 | 5 | yes |
| gzip | 4 | 5.803 | 125,107 | 0.2562 | 5 | yes |
| gzip | 5 | 8.189 | 120,500 | 0.2467 | 5 | yes |
| gzip | 6 | 11.740 | 118,777 | 0.2432 | 5 | yes |
| gzip | 7 | 14.828 | 118,321 | 0.2423 | 5 | yes |
| gzip | 8 | 27.698 | 118,050 | 0.2417 | 5 | yes |
| gzip | 9 | 42.881 | 117,981 | 0.2416 | 5 | yes |
| brotli | 0 | 1.586 | 149,143 | 0.3054 | 5 | yes |
| brotli | 1 | 2.183 | 136,828 | 0.2802 | 5 | yes |
| brotli | 2 | 3.970 | 128,657 | 0.2634 | 5 | yes |
| brotli | 3 | 4.549 | 125,956 | 0.2579 | 5 | yes |
| brotli | 4 | 6.845 | 122,132 | 0.2501 | 5 | yes |
| brotli | 5 | 10.219 | 112,200 | 0.2297 | 5 | yes |
| brotli | 6 | 11.822 | 109,580 | 0.2244 | 6 | yes |
| brotli | 7 | 14.159 | 107,617 | 0.2204 | 5 | yes |
| brotli | 8 | 17.158 | 106,600 | 0.2183 | 5 | yes |
| brotli | 9 | 23.736 | 105,688 | 0.2164 | 5 | yes |
| brotli | 10 | 278.706 | 98,262 | 0.2012 | 5 | yes |
| brotli | 11 | 714.348 | 96,054 | 0.1967 | 5 | yes |
| zstd | 1 | 1.662 | 137,501 | 0.2815 | 5 | yes |
| zstd | 2 | 1.796 | 133,304 | 0.2730 | 5 | yes |
| zstd | 3 | 2.200 | 125,704 | 0.2574 | 5 | yes |
| zstd | 4 | 2.499 | 125,507 | 0.2570 | 5 | yes |
| zstd | 5 | 4.548 | 116,849 | 0.2393 | 5 | yes |
| zstd | 6 | 6.340 | 112,959 | 0.2313 | 5 | yes |
| zstd | 7 | 7.183 | 111,397 | 0.2281 | 5 | yes |
| zstd | 8 | 9.175 | 110,614 | 0.2265 | 5 | yes |
| zstd | 9 | 8.700 | 110,614 | 0.2265 | 5 | yes |
| zstd | 10 | 10.775 | 109,711 | 0.2246 | 5 | yes |
| zstd | 11 | 13.165 | 109,009 | 0.2232 | 5 | yes |
| zstd | 12 | 13.251 | 109,009 | 0.2232 | 5 | yes |
| zstd | 13 | 25.942 | 107,861 | 0.2209 | 5 | yes |
| zstd | 14 | 31.275 | 107,276 | 0.2197 | 5 | yes |
| zstd | 15 | 34.948 | 107,183 | 0.2195 | 5 | yes |
| zstd | 16 | 72.996 | 101,602 | 0.2080 | 7 | yes |
| zstd | 17 | 73.131 | 100,701 | 0.2062 | 5 | yes |
| zstd | 18 | 111.573 | 99,909 | 0.2046 | 6 | yes |
| zstd | 19 | 144.294 | 99,813 | 0.2044 | 5 | yes |
| zstd | 20 | 144.911 | 99,813 | 0.2044 | 5 | yes |
| zstd | 21 | 153.192 | 99,799 | 0.2043 | 5 | yes |
| zstd | 22 | 146.850 | 99,799 | 0.2043 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.140 | 4,987 | 0.2897 | 5 | yes |
| gzip | 2 | 0.110 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.125 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.164 | 4,530 | 0.2631 | 25 | yes |
| gzip | 5 | 0.227 | 4,441 | 0.2579 | 8 | yes |
| gzip | 6 | 0.276 | 4,425 | 0.2570 | 7 | yes |
| gzip | 7 | 0.318 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.466 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.470 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.058 | 5,235 | 0.3041 | 11 | yes |
| brotli | 1 | 0.066 | 5,134 | 0.2982 | 18 | yes |
| brotli | 2 | 0.133 | 4,741 | 0.2754 | 7 | yes |
| brotli | 3 | 0.163 | 4,650 | 0.2701 | 13 | yes |
| brotli | 4 | 0.301 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.394 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.423 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.449 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.472 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 2.281 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.824 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.415 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.055 | 4,923 | 0.2859 | 19 | yes |
| zstd | 2 | 0.062 | 4,868 | 0.2827 | 13 | yes |
| zstd | 3 | 0.084 | 4,717 | 0.2740 | 16 | yes |
| zstd | 4 | 0.087 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.165 | 4,519 | 0.2625 | 8 | yes |
| zstd | 6 | 0.218 | 4,437 | 0.2577 | 9 | yes |
| zstd | 7 | 0.282 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.306 | 4,426 | 0.2571 | 6 | yes |
| zstd | 9 | 0.341 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.380 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.615 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.666 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.923 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.467 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.553 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.475 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.660 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.655 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.215 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.200 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.209 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.242 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.058 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.057 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.061 | 3,153 | 0.4403 | 20 | yes |
| gzip | 4 | 0.075 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.079 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.091 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.111 | 3,042 | 0.4248 | 22 | yes |
| gzip | 8 | 0.092 | 3,042 | 0.4248 | 25 | no |
| gzip | 9 | 0.084 | 3,042 | 0.4248 | 9 | yes |
| brotli | 0 | 0.035 | 3,549 | 0.4956 | 14 | yes |
| brotli | 1 | 0.043 | 3,381 | 0.4721 | 12 | yes |
| brotli | 2 | 0.066 | 3,263 | 0.4557 | 16 | yes |
| brotli | 3 | 0.093 | 3,216 | 0.4491 | 25 | no |
| brotli | 4 | 0.170 | 3,147 | 0.4395 | 12 | yes |
| brotli | 5 | 0.240 | 2,963 | 0.4138 | 5 | yes |
| brotli | 6 | 0.240 | 2,952 | 0.4122 | 5 | yes |
| brotli | 7 | 0.266 | 2,944 | 0.4111 | 8 | yes |
| brotli | 8 | 0.301 | 2,944 | 0.4111 | 6 | yes |
| brotli | 9 | 1.952 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.164 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.729 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.041 | 3,254 | 0.4544 | 25 | no |
| zstd | 2 | 0.045 | 3,200 | 0.4469 | 25 | no |
| zstd | 3 | 0.047 | 3,176 | 0.4435 | 7 | yes |
| zstd | 4 | 0.078 | 3,102 | 0.4332 | 6 | yes |
| zstd | 5 | 0.074 | 3,079 | 0.4300 | 13 | yes |
| zstd | 6 | 0.101 | 3,060 | 0.4273 | 25 | no |
| zstd | 7 | 0.128 | 3,053 | 0.4263 | 25 | no |
| zstd | 8 | 0.107 | 3,053 | 0.4263 | 25 | no |
| zstd | 9 | 0.212 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.190 | 3,055 | 0.4266 | 16 | yes |
| zstd | 11 | 0.350 | 3,044 | 0.4251 | 8 | yes |
| zstd | 12 | 0.491 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.663 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.662 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.670 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.274 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.284 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.282 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.322 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.284 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.309 | 2,992 | 0.4178 | 9 | yes |
| zstd | 22 | 1.306 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,217 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.885 | 66,928 | 0.4076 | 5 | yes |
| gzip | 2 | 2.025 | 65,338 | 0.3979 | 5 | yes |
| gzip | 3 | 2.289 | 64,317 | 0.3917 | 5 | yes |
| gzip | 4 | 2.585 | 61,980 | 0.3774 | 5 | yes |
| gzip | 5 | 3.463 | 60,339 | 0.3674 | 5 | yes |
| gzip | 6 | 4.282 | 60,067 | 0.3658 | 5 | yes |
| gzip | 7 | 4.636 | 60,024 | 0.3655 | 5 | yes |
| gzip | 8 | 5.014 | 60,007 | 0.3654 | 5 | yes |
| gzip | 9 | 5.052 | 60,007 | 0.3654 | 5 | yes |
| brotli | 0 | 0.699 | 71,251 | 0.4339 | 5 | yes |
| brotli | 1 | 0.908 | 68,275 | 0.4158 | 5 | yes |
| brotli | 2 | 1.669 | 63,015 | 0.3837 | 5 | yes |
| brotli | 3 | 1.969 | 62,457 | 0.3803 | 5 | yes |
| brotli | 4 | 2.990 | 61,234 | 0.3729 | 5 | yes |
| brotli | 5 | 4.533 | 57,931 | 0.3528 | 5 | yes |
| brotli | 6 | 4.936 | 57,572 | 0.3506 | 5 | yes |
| brotli | 7 | 5.825 | 57,281 | 0.3488 | 5 | yes |
| brotli | 8 | 6.402 | 57,200 | 0.3483 | 5 | yes |
| brotli | 9 | 9.849 | 57,125 | 0.3479 | 5 | yes |
| brotli | 10 | 97.954 | 54,364 | 0.3310 | 5 | yes |
| brotli | 11 | 243.698 | 53,487 | 0.3257 | 5 | yes |
| zstd | 1 | 0.630 | 66,282 | 0.4036 | 5 | yes |
| zstd | 2 | 0.802 | 63,237 | 0.3851 | 5 | yes |
| zstd | 3 | 1.012 | 62,745 | 0.3821 | 5 | yes |
| zstd | 4 | 1.812 | 60,886 | 0.3708 | 5 | yes |
| zstd | 5 | 1.964 | 60,366 | 0.3676 | 5 | yes |
| zstd | 6 | 2.445 | 59,468 | 0.3621 | 5 | yes |
| zstd | 7 | 2.867 | 58,678 | 0.3573 | 5 | yes |
| zstd | 8 | 3.581 | 58,201 | 0.3544 | 5 | yes |
| zstd | 9 | 4.219 | 57,953 | 0.3529 | 5 | yes |
| zstd | 10 | 5.043 | 57,830 | 0.3522 | 5 | yes |
| zstd | 11 | 8.369 | 57,527 | 0.3503 | 5 | yes |
| zstd | 12 | 8.615 | 57,514 | 0.3502 | 5 | yes |
| zstd | 13 | 15.199 | 56,499 | 0.3441 | 5 | yes |
| zstd | 14 | 18.282 | 56,072 | 0.3415 | 5 | yes |
| zstd | 15 | 18.211 | 56,052 | 0.3413 | 5 | yes |
| zstd | 16 | 24.405 | 55,868 | 0.3402 | 5 | yes |
| zstd | 17 | 25.446 | 55,868 | 0.3402 | 5 | yes |
| zstd | 18 | 42.179 | 55,790 | 0.3397 | 5 | yes |
| zstd | 19 | 42.078 | 55,790 | 0.3397 | 5 | yes |
| zstd | 20 | 51.473 | 55,790 | 0.3397 | 5 | yes |
| zstd | 21 | 43.079 | 55,790 | 0.3397 | 9 | yes |
| zstd | 22 | 44.294 | 55,790 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.774 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.844 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.969 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.090 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.404 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.789 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.123 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.866 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.851 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.285 | 30,978 | 0.4230 | 6 | yes |
| brotli | 1 | 0.397 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.683 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.821 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.390 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 2.020 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.098 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.654 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.785 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.185 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 40.586 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 96.027 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.252 | 28,919 | 0.3949 | 11 | yes |
| zstd | 2 | 0.291 | 28,008 | 0.3824 | 6 | yes |
| zstd | 3 | 0.359 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.463 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.781 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.090 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.292 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.409 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.644 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.935 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.183 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.360 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.393 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.691 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.805 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.857 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.837 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.824 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.834 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.692 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.512 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.632 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.582 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.668 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.807 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.952 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.257 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.895 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.534 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.761 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.708 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.262 | 25,901 | 0.3420 | 6 | yes |
| brotli | 1 | 0.386 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.660 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.771 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.167 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.714 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.965 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.378 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.743 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 5.314 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 30.274 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 87.053 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.258 | 22,639 | 0.2989 | 13 | yes |
| zstd | 2 | 0.284 | 22,433 | 0.2962 | 7 | yes |
| zstd | 3 | 0.334 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.381 | 22,181 | 0.2929 | 11 | yes |
| zstd | 5 | 0.709 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 0.995 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.238 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.431 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.820 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.470 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.165 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.140 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.970 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.288 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.418 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.776 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 15.165 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.180 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 22.704 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 26.573 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 37.393 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 43.183 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.066 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.135 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.299 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.703 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.160 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.892 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.547 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.742 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.784 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.460 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.613 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.184 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.401 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.099 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.017 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.270 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.612 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.224 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.712 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 95.761 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 297.030 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.518 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.535 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.587 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.505 | 30,973 | 0.1334 | 19 | yes |
| zstd | 5 | 2.354 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.142 | 29,727 | 0.1281 | 17 | yes |
| zstd | 7 | 2.577 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.760 | 28,645 | 0.1234 | 6 | yes |
| zstd | 9 | 3.482 | 28,235 | 0.1216 | 7 | yes |
| zstd | 10 | 4.441 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.909 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.894 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.438 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.754 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.297 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.188 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 63.215 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 84.261 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 96.035 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 100.037 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 100.181 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 101.463 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,946,804 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.032 | 3,754,873 | 0.2216 | 5 | yes |
| gzip | 2 | 101.428 | 3,606,731 | 0.2128 | 5 | yes |
| gzip | 3 | 124.763 | 3,488,191 | 0.2058 | 5 | yes |
| gzip | 4 | 147.081 | 3,361,083 | 0.1983 | 5 | yes |
| gzip | 5 | 188.530 | 3,140,651 | 0.1853 | 5 | yes |
| gzip | 6 | 278.848 | 3,073,208 | 0.1813 | 5 | yes |
| gzip | 7 | 381.138 | 3,007,264 | 0.1775 | 5 | yes |
| gzip | 8 | 1073.627 | 2,939,923 | 0.1735 | 5 | yes |
| gzip | 9 | 1117.826 | 2,939,101 | 0.1734 | 5 | yes |
| brotli | 0 | 47.212 | 4,158,391 | 0.2454 | 5 | yes |
| brotli | 1 | 62.280 | 3,696,388 | 0.2181 | 5 | yes |
| brotli | 2 | 111.968 | 3,404,652 | 0.2009 | 5 | yes |
| brotli | 3 | 131.115 | 3,347,644 | 0.1975 | 5 | yes |
| brotli | 4 | 184.757 | 3,276,816 | 0.1934 | 5 | yes |
| brotli | 5 | 291.835 | 2,921,643 | 0.1724 | 5 | yes |
| brotli | 6 | 353.854 | 2,890,343 | 0.1706 | 5 | yes |
| brotli | 7 | 521.533 | 2,863,078 | 0.1689 | 5 | yes |
| brotli | 8 | 699.452 | 2,844,800 | 0.1679 | 5 | yes |
| brotli | 9 | 1048.960 | 2,834,664 | 0.1673 | 6 | yes |
| brotli | 10 | 11352.270 | 2,428,562 | 0.1433 | 5 | yes |
| brotli | 11 | 28407.506 | 2,309,167 | 0.1363 | 5 | yes |
| zstd | 1 | 44.295 | 3,504,403 | 0.2068 | 5 | yes |
| zstd | 2 | 56.414 | 3,581,907 | 0.2114 | 5 | yes |
| zstd | 3 | 68.406 | 3,507,920 | 0.2070 | 5 | yes |
| zstd | 4 | 74.234 | 3,502,711 | 0.2067 | 5 | yes |
| zstd | 5 | 157.141 | 3,287,468 | 0.1940 | 5 | yes |
| zstd | 6 | 220.839 | 3,067,272 | 0.1810 | 5 | yes |
| zstd | 7 | 255.734 | 3,028,718 | 0.1787 | 5 | yes |
| zstd | 8 | 329.277 | 2,926,446 | 0.1727 | 5 | yes |
| zstd | 9 | 385.433 | 2,936,848 | 0.1733 | 5 | yes |
| zstd | 10 | 478.792 | 2,900,202 | 0.1711 | 5 | yes |
| zstd | 11 | 727.928 | 2,873,028 | 0.1695 | 5 | yes |
| zstd | 12 | 764.333 | 2,872,898 | 0.1695 | 5 | yes |
| zstd | 13 | 1120.145 | 2,850,280 | 0.1682 | 5 | yes |
| zstd | 14 | 1337.553 | 2,835,958 | 0.1673 | 5 | yes |
| zstd | 15 | 1781.768 | 2,832,325 | 0.1671 | 5 | yes |
| zstd | 16 | 3304.271 | 2,645,548 | 0.1561 | 5 | yes |
| zstd | 17 | 4436.207 | 2,553,740 | 0.1507 | 5 | yes |
| zstd | 18 | 7101.073 | 2,535,042 | 0.1496 | 5 | yes |
| zstd | 19 | 7732.084 | 2,528,063 | 0.1492 | 5 | yes |
| zstd | 20 | 7715.020 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 21 | 7645.808 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 22 | 7940.061 | 2,521,575 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.280 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.333 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.488 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.485 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.572 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.746 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.433 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.576 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.168 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.064 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.396 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.157 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.322 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 18.243 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.470 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.442 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 50.060 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 61.911 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 74.484 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 941.935 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1966.528 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.112 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.918 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 6.056 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.621 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.397 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.021 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.081 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.205 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.758 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.385 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 29.043 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 28.803 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 71.025 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 75.557 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 77.607 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 135.661 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 149.149 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 187.177 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 215.861 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 223.639 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 213.182 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 212.316 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.167 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.237 | 5,424 | 0.2784 | 5 | yes |
| gzip | 3 | 0.161 | 5,356 | 0.2749 | 16 | yes |
| gzip | 4 | 0.192 | 5,145 | 0.2641 | 19 | yes |
| gzip | 5 | 0.266 | 4,896 | 0.2513 | 6 | yes |
| gzip | 6 | 0.354 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.481 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.645 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.638 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.058 | 6,028 | 0.3094 | 10 | yes |
| brotli | 1 | 0.074 | 5,737 | 0.2945 | 25 | no |
| brotli | 2 | 0.139 | 4,944 | 0.2538 | 23 | yes |
| brotli | 3 | 0.167 | 4,930 | 0.2531 | 14 | yes |
| brotli | 4 | 0.299 | 4,898 | 0.2514 | 5 | yes |
| brotli | 5 | 0.457 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.502 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.558 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.602 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.719 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.166 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.636 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.057 | 5,379 | 0.2761 | 21 | yes |
| zstd | 2 | 0.065 | 5,176 | 0.2657 | 25 | no |
| zstd | 3 | 0.088 | 5,169 | 0.2653 | 10 | yes |
| zstd | 4 | 0.089 | 5,154 | 0.2646 | 11 | yes |
| zstd | 5 | 0.168 | 5,074 | 0.2605 | 14 | yes |
| zstd | 6 | 0.246 | 4,797 | 0.2463 | 5 | yes |
| zstd | 7 | 0.298 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.330 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.407 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.531 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.607 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.646 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.992 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.800 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.895 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.850 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.849 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.886 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.732 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.628 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.683 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.650 | 4,348 | 0.2232 | 5 | yes |
