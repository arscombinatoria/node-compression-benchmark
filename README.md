# Node Compression Benchmark

Last updated: 2026-06-26T08:53:42.807Z

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
| gzip | 1 | 0.940 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.991 | 30,134 | 0.3827 | 6 | yes |
| gzip | 3 | 1.093 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.279 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.593 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.859 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.059 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.388 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.342 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.392 | 33,111 | 0.4205 | 5 | yes |
| brotli | 1 | 0.784 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.837 | 29,394 | 0.3733 | 10 | yes |
| brotli | 3 | 0.919 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.456 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.108 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.222 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.587 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.581 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.736 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 34.294 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.707 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.304 | 31,062 | 0.3944 | 24 | yes |
| zstd | 2 | 0.347 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.402 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.530 | 29,108 | 0.3696 | 6 | yes |
| zstd | 5 | 0.873 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.201 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.560 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.636 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.133 | 27,118 | 0.3444 | 13 | yes |
| zstd | 10 | 2.035 | 27,062 | 0.3437 | 14 | yes |
| zstd | 11 | 3.386 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.508 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.525 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.866 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.105 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.905 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.889 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.044 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.658 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.356 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.537 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.659 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 84.505 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 89.116 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 93.477 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 106.999 | 3,213,095 | 0.5871 | 7 | yes |
| gzip | 5 | 119.537 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 133.288 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 142.285 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 159.746 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.804 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.654 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.730 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.059 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.121 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 91.593 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 128.228 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 158.885 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 458.550 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 661.135 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 783.486 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6683.499 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13080.937 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.303 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.974 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 39.707 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 41.696 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 67.860 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 79.973 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 89.699 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 100.759 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 109.089 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 140.250 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 205.586 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 216.545 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 545.904 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 505.045 | 2,852,038 | 0.5211 | 6 | yes |
| zstd | 15 | 639.084 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 915.491 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 1012.193 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1336.006 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1468.073 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1434.167 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1413.776 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1449.181 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.261 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.021 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.129 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.660 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.666 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.738 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.683 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.630 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.673 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.296 | 613,595 | 0.9981 | 9 | yes |
| brotli | 1 | 0.242 | 614,785 | 1.0000 | 20 | yes |
| brotli | 2 | 0.611 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.815 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.136 | 614,785 | 1.0000 | 9 | yes |
| brotli | 5 | 1.376 | 614,785 | 1.0000 | 6 | yes |
| brotli | 6 | 1.647 | 614,785 | 1.0000 | 5 | yes |
| brotli | 7 | 2.091 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.212 | 614,785 | 1.0000 | 25 | yes |
| brotli | 9 | 4.579 | 614,785 | 1.0000 | 15 | yes |
| brotli | 10 | 121.949 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 254.298 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.292 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.271 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.324 | 614,804 | 1.0000 | 24 | yes |
| zstd | 4 | 0.398 | 614,804 | 1.0000 | 25 | no |
| zstd | 5 | 0.518 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.505 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.508 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.526 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.780 | 614,804 | 1.0000 | 25 | no |
| zstd | 10 | 0.679 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.733 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.738 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.792 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 2.864 | 612,619 | 0.9965 | 25 | no |
| zstd | 15 | 2.761 | 612,619 | 0.9965 | 13 | yes |
| zstd | 16 | 26.189 | 612,536 | 0.9963 | 25 | no |
| zstd | 17 | 26.099 | 612,516 | 0.9963 | 25 | no |
| zstd | 18 | 37.190 | 612,519 | 0.9963 | 8 | yes |
| zstd | 19 | 44.390 | 612,518 | 0.9963 | 8 | yes |
| zstd | 20 | 45.346 | 612,518 | 0.9963 | 15 | yes |
| zstd | 21 | 40.393 | 612,518 | 0.9963 | 25 | no |
| zstd | 22 | 42.694 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 489,395 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.877 | 144,996 | 0.2963 | 5 | yes |
| gzip | 2 | 4.213 | 138,216 | 0.2824 | 5 | yes |
| gzip | 3 | 5.448 | 133,608 | 0.2730 | 5 | yes |
| gzip | 4 | 5.794 | 125,402 | 0.2562 | 5 | yes |
| gzip | 5 | 8.098 | 120,766 | 0.2468 | 5 | yes |
| gzip | 6 | 11.715 | 119,043 | 0.2432 | 5 | yes |
| gzip | 7 | 14.898 | 118,585 | 0.2423 | 5 | yes |
| gzip | 8 | 27.829 | 118,310 | 0.2417 | 5 | yes |
| gzip | 9 | 43.157 | 118,244 | 0.2416 | 5 | yes |
| brotli | 0 | 1.538 | 149,475 | 0.3054 | 5 | yes |
| brotli | 1 | 2.193 | 137,161 | 0.2803 | 5 | yes |
| brotli | 2 | 3.958 | 128,919 | 0.2634 | 5 | yes |
| brotli | 3 | 4.553 | 126,419 | 0.2583 | 5 | yes |
| brotli | 4 | 6.737 | 122,353 | 0.2500 | 5 | yes |
| brotli | 5 | 10.157 | 112,462 | 0.2298 | 5 | yes |
| brotli | 6 | 11.668 | 109,832 | 0.2244 | 5 | yes |
| brotli | 7 | 14.350 | 107,873 | 0.2204 | 5 | yes |
| brotli | 8 | 17.679 | 106,822 | 0.2183 | 5 | yes |
| brotli | 9 | 22.947 | 105,936 | 0.2165 | 5 | yes |
| brotli | 10 | 285.131 | 98,469 | 0.2012 | 5 | yes |
| brotli | 11 | 714.541 | 96,289 | 0.1968 | 5 | yes |
| zstd | 1 | 1.665 | 137,821 | 0.2816 | 5 | yes |
| zstd | 2 | 1.801 | 133,669 | 0.2731 | 5 | yes |
| zstd | 3 | 2.224 | 125,996 | 0.2575 | 5 | yes |
| zstd | 4 | 2.364 | 125,813 | 0.2571 | 5 | yes |
| zstd | 5 | 4.817 | 117,177 | 0.2394 | 7 | yes |
| zstd | 6 | 6.235 | 113,258 | 0.2314 | 5 | yes |
| zstd | 7 | 7.393 | 111,690 | 0.2282 | 5 | yes |
| zstd | 8 | 9.293 | 110,893 | 0.2266 | 5 | yes |
| zstd | 9 | 9.393 | 110,893 | 0.2266 | 5 | yes |
| zstd | 10 | 11.427 | 109,851 | 0.2245 | 5 | yes |
| zstd | 11 | 14.035 | 109,255 | 0.2232 | 5 | yes |
| zstd | 12 | 14.006 | 109,255 | 0.2232 | 5 | yes |
| zstd | 13 | 27.936 | 108,074 | 0.2208 | 5 | yes |
| zstd | 14 | 34.213 | 107,493 | 0.2196 | 5 | yes |
| zstd | 15 | 37.625 | 107,422 | 0.2195 | 5 | yes |
| zstd | 16 | 72.024 | 101,841 | 0.2081 | 5 | yes |
| zstd | 17 | 72.731 | 100,954 | 0.2063 | 5 | yes |
| zstd | 18 | 119.350 | 100,145 | 0.2046 | 5 | yes |
| zstd | 19 | 154.319 | 100,032 | 0.2044 | 5 | yes |
| zstd | 20 | 154.768 | 100,032 | 0.2044 | 5 | yes |
| zstd | 21 | 145.839 | 100,029 | 0.2044 | 5 | yes |
| zstd | 22 | 146.983 | 100,029 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.117 | 4,987 | 0.2897 | 12 | yes |
| gzip | 2 | 0.119 | 4,874 | 0.2831 | 15 | yes |
| gzip | 3 | 0.121 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.176 | 4,530 | 0.2631 | 9 | yes |
| gzip | 5 | 0.232 | 4,441 | 0.2579 | 7 | yes |
| gzip | 6 | 0.270 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.311 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.453 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.466 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.054 | 5,235 | 0.3041 | 13 | yes |
| brotli | 1 | 0.065 | 5,134 | 0.2982 | 16 | yes |
| brotli | 2 | 0.128 | 4,741 | 0.2754 | 25 | no |
| brotli | 3 | 0.155 | 4,650 | 0.2701 | 9 | yes |
| brotli | 4 | 0.306 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.402 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.423 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.462 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.473 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 2.252 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.881 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.903 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.082 | 4,923 | 0.2859 | 24 | yes |
| zstd | 2 | 0.100 | 4,868 | 0.2827 | 5 | yes |
| zstd | 3 | 0.083 | 4,717 | 0.2740 | 25 | no |
| zstd | 4 | 0.075 | 4,679 | 0.2718 | 15 | yes |
| zstd | 5 | 0.161 | 4,519 | 0.2625 | 5 | yes |
| zstd | 6 | 0.215 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.260 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.285 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.327 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.367 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.602 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.641 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.919 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.441 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.541 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.476 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.637 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.633 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.179 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.223 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.187 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.186 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.054 | 3,220 | 0.4497 | 16 | yes |
| gzip | 2 | 0.056 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.059 | 3,153 | 0.4403 | 20 | yes |
| gzip | 4 | 0.069 | 3,095 | 0.4322 | 25 | yes |
| gzip | 5 | 0.090 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.106 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.107 | 3,042 | 0.4248 | 9 | yes |
| gzip | 8 | 0.085 | 3,042 | 0.4248 | 25 | no |
| gzip | 9 | 0.086 | 3,042 | 0.4248 | 7 | yes |
| brotli | 0 | 0.031 | 3,549 | 0.4956 | 13 | yes |
| brotli | 1 | 0.040 | 3,381 | 0.4721 | 8 | yes |
| brotli | 2 | 0.061 | 3,263 | 0.4557 | 16 | yes |
| brotli | 3 | 0.082 | 3,216 | 0.4491 | 25 | no |
| brotli | 4 | 0.166 | 3,147 | 0.4395 | 12 | yes |
| brotli | 5 | 0.225 | 2,963 | 0.4138 | 8 | yes |
| brotli | 6 | 0.237 | 2,952 | 0.4122 | 5 | yes |
| brotli | 7 | 0.252 | 2,944 | 0.4111 | 10 | yes |
| brotli | 8 | 0.257 | 2,944 | 0.4111 | 6 | yes |
| brotli | 9 | 2.022 | 2,945 | 0.4113 | 13 | yes |
| brotli | 10 | 3.134 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.768 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.033 | 3,254 | 0.4544 | 13 | yes |
| zstd | 2 | 0.035 | 3,200 | 0.4469 | 13 | yes |
| zstd | 3 | 0.048 | 3,176 | 0.4435 | 11 | yes |
| zstd | 4 | 0.069 | 3,102 | 0.4332 | 25 | no |
| zstd | 5 | 0.078 | 3,079 | 0.4300 | 18 | yes |
| zstd | 6 | 0.115 | 3,060 | 0.4273 | 12 | yes |
| zstd | 7 | 0.132 | 3,053 | 0.4263 | 5 | yes |
| zstd | 8 | 0.133 | 3,053 | 0.4263 | 5 | yes |
| zstd | 9 | 0.182 | 3,055 | 0.4266 | 12 | yes |
| zstd | 10 | 0.150 | 3,055 | 0.4266 | 25 | no |
| zstd | 11 | 0.345 | 3,044 | 0.4251 | 8 | yes |
| zstd | 12 | 0.485 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.663 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.664 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.665 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.267 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.282 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.282 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.275 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.279 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.298 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.263 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,901 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.896 | 67,260 | 0.4079 | 5 | yes |
| gzip | 2 | 2.020 | 65,641 | 0.3981 | 5 | yes |
| gzip | 3 | 2.289 | 64,609 | 0.3918 | 5 | yes |
| gzip | 4 | 2.588 | 62,246 | 0.3775 | 5 | yes |
| gzip | 5 | 3.520 | 60,620 | 0.3676 | 5 | yes |
| gzip | 6 | 4.354 | 60,347 | 0.3660 | 10 | yes |
| gzip | 7 | 4.649 | 60,306 | 0.3657 | 7 | yes |
| gzip | 8 | 5.020 | 60,288 | 0.3656 | 25 | no |
| gzip | 9 | 4.969 | 60,288 | 0.3656 | 5 | yes |
| brotli | 0 | 0.663 | 71,542 | 0.4338 | 5 | yes |
| brotli | 1 | 0.914 | 68,608 | 0.4161 | 5 | yes |
| brotli | 2 | 1.646 | 63,268 | 0.3837 | 5 | yes |
| brotli | 3 | 1.911 | 62,714 | 0.3803 | 5 | yes |
| brotli | 4 | 3.028 | 61,492 | 0.3729 | 5 | yes |
| brotli | 5 | 4.449 | 58,210 | 0.3530 | 5 | yes |
| brotli | 6 | 4.920 | 57,839 | 0.3507 | 5 | yes |
| brotli | 7 | 5.718 | 57,540 | 0.3489 | 5 | yes |
| brotli | 8 | 6.601 | 57,465 | 0.3485 | 5 | yes |
| brotli | 9 | 9.494 | 57,391 | 0.3480 | 9 | yes |
| brotli | 10 | 95.426 | 54,557 | 0.3308 | 5 | yes |
| brotli | 11 | 246.328 | 53,655 | 0.3254 | 5 | yes |
| zstd | 1 | 0.619 | 66,585 | 0.4038 | 5 | yes |
| zstd | 2 | 0.796 | 63,595 | 0.3857 | 5 | yes |
| zstd | 3 | 1.030 | 63,025 | 0.3822 | 5 | yes |
| zstd | 4 | 1.803 | 61,203 | 0.3711 | 5 | yes |
| zstd | 5 | 2.028 | 60,668 | 0.3679 | 5 | yes |
| zstd | 6 | 2.421 | 59,769 | 0.3625 | 5 | yes |
| zstd | 7 | 2.857 | 58,956 | 0.3575 | 5 | yes |
| zstd | 8 | 3.619 | 58,460 | 0.3545 | 5 | yes |
| zstd | 9 | 4.197 | 58,213 | 0.3530 | 5 | yes |
| zstd | 10 | 4.976 | 58,073 | 0.3522 | 5 | yes |
| zstd | 11 | 8.218 | 57,781 | 0.3504 | 5 | yes |
| zstd | 12 | 8.392 | 57,769 | 0.3503 | 5 | yes |
| zstd | 13 | 15.074 | 56,782 | 0.3443 | 5 | yes |
| zstd | 14 | 17.692 | 56,326 | 0.3416 | 5 | yes |
| zstd | 15 | 18.533 | 56,318 | 0.3415 | 5 | yes |
| zstd | 16 | 24.622 | 56,132 | 0.3404 | 5 | yes |
| zstd | 17 | 26.287 | 56,132 | 0.3404 | 5 | yes |
| zstd | 18 | 44.702 | 56,049 | 0.3399 | 5 | yes |
| zstd | 19 | 43.759 | 56,049 | 0.3399 | 5 | yes |
| zstd | 20 | 44.899 | 56,049 | 0.3399 | 8 | yes |
| zstd | 21 | 46.380 | 56,049 | 0.3399 | 5 | yes |
| zstd | 22 | 45.201 | 56,049 | 0.3399 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.782 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.840 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.970 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.073 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.390 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.780 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.114 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.843 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.843 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.287 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.386 | 29,754 | 0.4063 | 6 | yes |
| brotli | 2 | 0.704 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.811 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.327 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.930 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.086 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.456 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.732 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.056 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 39.836 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 96.705 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.257 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.299 | 28,008 | 0.3824 | 7 | yes |
| zstd | 3 | 0.378 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.468 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.780 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.078 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.312 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.432 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.630 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.922 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.202 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.276 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.416 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.599 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.803 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.930 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.658 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.671 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.432 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.634 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.545 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.496 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.580 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.665 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.801 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.909 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.256 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.902 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.533 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.607 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.649 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.261 | 25,901 | 0.3420 | 8 | yes |
| brotli | 1 | 0.389 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.646 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.764 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.136 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.764 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.924 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.259 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.651 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 5.146 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 30.013 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 87.443 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.272 | 22,639 | 0.2989 | 5 | yes |
| zstd | 2 | 0.288 | 22,433 | 0.2962 | 6 | yes |
| zstd | 3 | 0.351 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.445 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.703 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 0.993 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.232 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.426 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.770 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.403 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.244 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.236 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.015 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.033 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.121 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.389 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.480 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 21.450 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 22.301 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 26.043 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 37.431 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 42.512 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.068 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.116 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.315 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.685 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.132 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.880 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.540 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.725 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.763 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.457 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.636 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.199 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.381 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.008 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.009 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.294 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.576 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.145 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.762 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 98.151 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 300.718 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.486 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.543 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.607 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.431 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.717 | 29,744 | 0.1281 | 17 | yes |
| zstd | 6 | 1.906 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.128 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.731 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.205 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.400 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.915 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.734 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.424 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.829 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.032 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.050 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 63.367 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 85.220 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 96.501 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 101.255 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 101.561 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 101.439 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,946,804 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 92.908 | 3,754,873 | 0.2216 | 5 | yes |
| gzip | 2 | 101.409 | 3,606,731 | 0.2128 | 5 | yes |
| gzip | 3 | 124.116 | 3,488,191 | 0.2058 | 5 | yes |
| gzip | 4 | 146.874 | 3,361,083 | 0.1983 | 5 | yes |
| gzip | 5 | 189.160 | 3,140,651 | 0.1853 | 5 | yes |
| gzip | 6 | 281.517 | 3,073,208 | 0.1813 | 5 | yes |
| gzip | 7 | 379.580 | 3,007,264 | 0.1775 | 5 | yes |
| gzip | 8 | 1073.076 | 2,939,923 | 0.1735 | 5 | yes |
| gzip | 9 | 1118.337 | 2,939,101 | 0.1734 | 5 | yes |
| brotli | 0 | 46.050 | 4,158,391 | 0.2454 | 5 | yes |
| brotli | 1 | 63.789 | 3,696,388 | 0.2181 | 5 | yes |
| brotli | 2 | 111.684 | 3,404,652 | 0.2009 | 5 | yes |
| brotli | 3 | 129.797 | 3,347,644 | 0.1975 | 5 | yes |
| brotli | 4 | 187.325 | 3,276,816 | 0.1934 | 5 | yes |
| brotli | 5 | 297.248 | 2,921,643 | 0.1724 | 5 | yes |
| brotli | 6 | 352.028 | 2,890,343 | 0.1706 | 5 | yes |
| brotli | 7 | 524.488 | 2,863,078 | 0.1689 | 5 | yes |
| brotli | 8 | 701.919 | 2,844,800 | 0.1679 | 5 | yes |
| brotli | 9 | 932.754 | 2,834,664 | 0.1673 | 5 | yes |
| brotli | 10 | 10534.719 | 2,428,562 | 0.1433 | 5 | yes |
| brotli | 11 | 27642.642 | 2,309,167 | 0.1363 | 5 | yes |
| zstd | 1 | 44.037 | 3,504,403 | 0.2068 | 5 | yes |
| zstd | 2 | 55.568 | 3,581,907 | 0.2114 | 5 | yes |
| zstd | 3 | 66.287 | 3,507,920 | 0.2070 | 5 | yes |
| zstd | 4 | 70.072 | 3,502,711 | 0.2067 | 5 | yes |
| zstd | 5 | 137.820 | 3,287,468 | 0.1940 | 5 | yes |
| zstd | 6 | 193.747 | 3,067,272 | 0.1810 | 5 | yes |
| zstd | 7 | 229.466 | 3,028,718 | 0.1787 | 5 | yes |
| zstd | 8 | 297.186 | 2,926,446 | 0.1727 | 5 | yes |
| zstd | 9 | 305.751 | 2,936,848 | 0.1733 | 5 | yes |
| zstd | 10 | 430.878 | 2,900,202 | 0.1711 | 5 | yes |
| zstd | 11 | 624.831 | 2,873,028 | 0.1695 | 5 | yes |
| zstd | 12 | 660.025 | 2,872,898 | 0.1695 | 5 | yes |
| zstd | 13 | 899.887 | 2,850,280 | 0.1682 | 5 | yes |
| zstd | 14 | 1065.429 | 2,835,958 | 0.1673 | 5 | yes |
| zstd | 15 | 1437.490 | 2,832,325 | 0.1671 | 5 | yes |
| zstd | 16 | 2889.190 | 2,645,548 | 0.1561 | 5 | yes |
| zstd | 17 | 3713.386 | 2,553,740 | 0.1507 | 5 | yes |
| zstd | 18 | 6308.813 | 2,535,042 | 0.1496 | 5 | yes |
| zstd | 19 | 7154.720 | 2,528,063 | 0.1492 | 5 | yes |
| zstd | 20 | 7308.765 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 21 | 7142.173 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 22 | 7409.253 | 2,521,575 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.251 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.324 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.474 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.432 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.568 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.725 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.321 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.256 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.193 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.902 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.469 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.936 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.025 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.945 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.482 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.498 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 45.208 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 59.682 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 68.047 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 912.525 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1941.372 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.062 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.915 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.984 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.606 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.433 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.033 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.178 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.836 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.013 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.544 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 25.394 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.432 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 56.834 | 383,952 | 0.4466 | 6 | yes |
| zstd | 14 | 58.501 | 383,886 | 0.4465 | 7 | yes |
| zstd | 15 | 59.024 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 113.394 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 127.365 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 160.535 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 189.265 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 187.952 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 187.507 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 189.879 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.118 | 5,506 | 0.2826 | 15 | yes |
| gzip | 2 | 0.121 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.155 | 5,356 | 0.2749 | 19 | yes |
| gzip | 4 | 0.211 | 5,145 | 0.2641 | 5 | yes |
| gzip | 5 | 0.281 | 4,896 | 0.2513 | 6 | yes |
| gzip | 6 | 0.361 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.483 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.645 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.630 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.060 | 6,028 | 0.3094 | 25 | no |
| brotli | 1 | 0.073 | 5,737 | 0.2945 | 15 | yes |
| brotli | 2 | 0.125 | 4,944 | 0.2538 | 25 | no |
| brotli | 3 | 0.178 | 4,930 | 0.2531 | 7 | yes |
| brotli | 4 | 0.287 | 4,898 | 0.2514 | 7 | yes |
| brotli | 5 | 0.463 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.498 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.559 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.610 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 2.473 | 4,553 | 0.2337 | 12 | yes |
| brotli | 10 | 7.093 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.756 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.059 | 5,379 | 0.2761 | 16 | yes |
| zstd | 2 | 0.063 | 5,176 | 0.2657 | 12 | yes |
| zstd | 3 | 0.086 | 5,169 | 0.2653 | 8 | yes |
| zstd | 4 | 0.084 | 5,154 | 0.2646 | 17 | yes |
| zstd | 5 | 0.181 | 5,074 | 0.2605 | 6 | yes |
| zstd | 6 | 0.243 | 4,797 | 0.2463 | 7 | yes |
| zstd | 7 | 0.289 | 4,702 | 0.2414 | 7 | yes |
| zstd | 8 | 0.328 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.624 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.525 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.601 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.668 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.017 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.788 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.892 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.862 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.833 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.841 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.571 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.607 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.618 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.648 | 4,348 | 0.2232 | 5 | yes |
