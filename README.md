# Node Compression Benchmark

Last updated: 2026-06-25T21:18:20.836Z

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
| gzip | 1 | 1.009 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.075 | 30,134 | 0.3827 | 6 | yes |
| gzip | 3 | 1.196 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.344 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.774 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.121 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.337 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.734 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.701 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.335 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.801 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.819 | 29,394 | 0.3733 | 9 | yes |
| brotli | 3 | 0.978 | 29,072 | 0.3692 | 13 | yes |
| brotli | 4 | 1.404 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.017 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.300 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.998 | 26,773 | 0.3400 | 9 | yes |
| brotli | 8 | 2.726 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.559 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 35.339 | 25,340 | 0.3218 | 9 | yes |
| brotli | 11 | 100.234 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.328 | 31,062 | 0.3944 | 9 | yes |
| zstd | 2 | 0.290 | 30,069 | 0.3818 | 25 | no |
| zstd | 3 | 0.297 | 29,214 | 0.3710 | 13 | yes |
| zstd | 4 | 0.474 | 29,108 | 0.3696 | 11 | yes |
| zstd | 5 | 0.930 | 28,349 | 0.3600 | 8 | yes |
| zstd | 6 | 1.282 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.489 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.643 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.837 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.030 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.404 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.554 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.473 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.571 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.703 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 9.983 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 9.967 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 9.940 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.465 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.520 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.500 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.485 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 92.988 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 99.051 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 103.654 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 115.456 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 134.943 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 152.356 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 164.307 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 182.973 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 197.775 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.529 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.821 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 52.061 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 66.446 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 96.727 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 127.568 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 146.755 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 420.243 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 633.344 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 803.214 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6774.207 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 14246.178 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.974 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 22.817 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 38.321 | 3,139,155 | 0.5736 | 6 | yes |
| zstd | 4 | 45.971 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 69.576 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 83.906 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 95.639 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 106.384 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 113.718 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 150.501 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 217.077 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 217.584 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 553.492 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 502.475 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 544.198 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 737.235 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 840.449 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1182.421 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1274.171 | 2,710,797 | 0.4953 | 7 | yes |
| zstd | 20 | 1352.159 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1365.382 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1303.468 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.471 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.420 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.421 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 14.359 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 14.434 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 14.371 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 14.336 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 14.423 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 14.384 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.254 | 613,595 | 0.9981 | 19 | yes |
| brotli | 1 | 0.224 | 614,785 | 1.0000 | 9 | yes |
| brotli | 2 | 0.559 | 614,791 | 1.0000 | 6 | yes |
| brotli | 3 | 0.725 | 614,763 | 1.0000 | 6 | yes |
| brotli | 4 | 0.900 | 614,785 | 1.0000 | 9 | yes |
| brotli | 5 | 1.483 | 614,785 | 1.0000 | 13 | yes |
| brotli | 6 | 1.637 | 614,785 | 1.0000 | 6 | yes |
| brotli | 7 | 1.985 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.087 | 614,785 | 1.0000 | 9 | yes |
| brotli | 9 | 4.177 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 115.740 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 267.511 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.289 | 614,805 | 1.0000 | 13 | yes |
| zstd | 2 | 0.285 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.334 | 614,804 | 1.0000 | 17 | yes |
| zstd | 4 | 0.348 | 614,804 | 1.0000 | 18 | yes |
| zstd | 5 | 0.466 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.472 | 614,804 | 1.0000 | 8 | yes |
| zstd | 7 | 0.531 | 614,804 | 1.0000 | 25 | no |
| zstd | 8 | 0.536 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.658 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.617 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.628 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.619 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.444 | 612,619 | 0.9965 | 13 | yes |
| zstd | 14 | 2.386 | 612,619 | 0.9965 | 6 | yes |
| zstd | 15 | 2.408 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 14.989 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 14.805 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 21.490 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 25.509 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 25.620 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 26.653 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 25.987 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 489,395 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.288 | 144,996 | 0.2963 | 5 | yes |
| gzip | 2 | 4.708 | 138,216 | 0.2824 | 5 | yes |
| gzip | 3 | 6.199 | 133,608 | 0.2730 | 5 | yes |
| gzip | 4 | 6.331 | 125,402 | 0.2562 | 5 | yes |
| gzip | 5 | 9.199 | 120,766 | 0.2468 | 5 | yes |
| gzip | 6 | 13.581 | 119,043 | 0.2432 | 5 | yes |
| gzip | 7 | 17.389 | 118,585 | 0.2423 | 5 | yes |
| gzip | 8 | 32.785 | 118,310 | 0.2417 | 5 | yes |
| gzip | 9 | 50.841 | 118,244 | 0.2416 | 5 | yes |
| brotli | 0 | 1.560 | 149,475 | 0.3054 | 5 | yes |
| brotli | 1 | 2.276 | 137,161 | 0.2803 | 5 | yes |
| brotli | 2 | 4.053 | 128,919 | 0.2634 | 5 | yes |
| brotli | 3 | 4.713 | 126,419 | 0.2583 | 5 | yes |
| brotli | 4 | 6.700 | 122,353 | 0.2500 | 5 | yes |
| brotli | 5 | 10.062 | 112,462 | 0.2298 | 5 | yes |
| brotli | 6 | 11.916 | 109,832 | 0.2244 | 5 | yes |
| brotli | 7 | 14.414 | 107,873 | 0.2204 | 5 | yes |
| brotli | 8 | 17.361 | 106,822 | 0.2183 | 5 | yes |
| brotli | 9 | 23.079 | 105,936 | 0.2165 | 5 | yes |
| brotli | 10 | 295.189 | 98,469 | 0.2012 | 5 | yes |
| brotli | 11 | 745.852 | 96,289 | 0.1968 | 5 | yes |
| zstd | 1 | 1.763 | 137,821 | 0.2816 | 5 | yes |
| zstd | 2 | 1.853 | 133,669 | 0.2731 | 5 | yes |
| zstd | 3 | 2.261 | 125,996 | 0.2575 | 5 | yes |
| zstd | 4 | 2.238 | 125,813 | 0.2571 | 5 | yes |
| zstd | 5 | 4.621 | 117,177 | 0.2394 | 5 | yes |
| zstd | 6 | 6.311 | 113,258 | 0.2314 | 5 | yes |
| zstd | 7 | 7.028 | 111,690 | 0.2282 | 5 | yes |
| zstd | 8 | 9.010 | 110,893 | 0.2266 | 5 | yes |
| zstd | 9 | 8.906 | 110,893 | 0.2266 | 5 | yes |
| zstd | 10 | 10.612 | 109,851 | 0.2245 | 5 | yes |
| zstd | 11 | 13.044 | 109,255 | 0.2232 | 5 | yes |
| zstd | 12 | 13.042 | 109,255 | 0.2232 | 5 | yes |
| zstd | 13 | 27.169 | 108,074 | 0.2208 | 5 | yes |
| zstd | 14 | 32.883 | 107,493 | 0.2196 | 5 | yes |
| zstd | 15 | 38.164 | 107,422 | 0.2195 | 5 | yes |
| zstd | 16 | 66.829 | 101,841 | 0.2081 | 5 | yes |
| zstd | 17 | 74.724 | 100,954 | 0.2063 | 5 | yes |
| zstd | 18 | 104.293 | 100,145 | 0.2046 | 5 | yes |
| zstd | 19 | 133.922 | 100,032 | 0.2044 | 5 | yes |
| zstd | 20 | 132.526 | 100,032 | 0.2044 | 5 | yes |
| zstd | 21 | 132.995 | 100,029 | 0.2044 | 5 | yes |
| zstd | 22 | 133.396 | 100,029 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.070 | 4,987 | 0.2897 | 16 | yes |
| gzip | 2 | 0.072 | 4,874 | 0.2831 | 24 | yes |
| gzip | 3 | 0.110 | 4,806 | 0.2791 | 5 | yes |
| gzip | 4 | 0.115 | 4,530 | 0.2631 | 25 | no |
| gzip | 5 | 0.135 | 4,441 | 0.2579 | 25 | no |
| gzip | 6 | 0.283 | 4,425 | 0.2570 | 25 | no |
| gzip | 7 | 0.231 | 4,418 | 0.2566 | 25 | no |
| gzip | 8 | 0.457 | 4,419 | 0.2567 | 7 | yes |
| gzip | 9 | 0.479 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.053 | 5,235 | 0.3041 | 25 | no |
| brotli | 1 | 0.069 | 5,134 | 0.2982 | 8 | yes |
| brotli | 2 | 0.096 | 4,741 | 0.2754 | 25 | no |
| brotli | 3 | 0.118 | 4,650 | 0.2701 | 17 | yes |
| brotli | 4 | 0.185 | 4,555 | 0.2646 | 19 | yes |
| brotli | 5 | 0.328 | 4,276 | 0.2484 | 8 | yes |
| brotli | 6 | 0.297 | 4,275 | 0.2483 | 18 | yes |
| brotli | 7 | 0.422 | 4,264 | 0.2477 | 6 | yes |
| brotli | 8 | 0.405 | 4,257 | 0.2473 | 15 | yes |
| brotli | 9 | 1.991 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.140 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.182 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.050 | 4,923 | 0.2859 | 12 | yes |
| zstd | 2 | 0.054 | 4,868 | 0.2827 | 7 | yes |
| zstd | 3 | 0.063 | 4,717 | 0.2740 | 7 | yes |
| zstd | 4 | 0.070 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.133 | 4,519 | 0.2625 | 12 | yes |
| zstd | 6 | 0.166 | 4,437 | 0.2577 | 9 | yes |
| zstd | 7 | 0.197 | 4,437 | 0.2577 | 9 | yes |
| zstd | 8 | 0.214 | 4,426 | 0.2571 | 10 | yes |
| zstd | 9 | 0.233 | 4,420 | 0.2567 | 20 | yes |
| zstd | 10 | 0.306 | 4,410 | 0.2561 | 13 | yes |
| zstd | 11 | 0.622 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.636 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.927 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.418 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.538 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.220 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.291 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.299 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.535 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.521 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.534 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.516 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.047 | 3,220 | 0.4497 | 21 | yes |
| gzip | 2 | 0.047 | 3,182 | 0.4444 | 14 | yes |
| gzip | 3 | 0.051 | 3,153 | 0.4403 | 17 | yes |
| gzip | 4 | 0.061 | 3,095 | 0.4322 | 9 | yes |
| gzip | 5 | 0.067 | 3,051 | 0.4261 | 9 | yes |
| gzip | 6 | 0.073 | 3,044 | 0.4251 | 25 | yes |
| gzip | 7 | 0.075 | 3,042 | 0.4248 | 9 | yes |
| gzip | 8 | 0.074 | 3,042 | 0.4248 | 9 | yes |
| gzip | 9 | 0.074 | 3,042 | 0.4248 | 25 | no |
| brotli | 0 | 0.030 | 3,549 | 0.4956 | 13 | yes |
| brotli | 1 | 0.041 | 3,381 | 0.4721 | 13 | yes |
| brotli | 2 | 0.057 | 3,263 | 0.4557 | 15 | yes |
| brotli | 3 | 0.074 | 3,216 | 0.4491 | 16 | yes |
| brotli | 4 | 0.122 | 3,147 | 0.4395 | 14 | yes |
| brotli | 5 | 0.155 | 2,963 | 0.4138 | 23 | yes |
| brotli | 6 | 0.174 | 2,952 | 0.4122 | 11 | yes |
| brotli | 7 | 0.176 | 2,944 | 0.4111 | 16 | yes |
| brotli | 8 | 0.171 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 1.720 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.248 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.071 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.048 | 3,254 | 0.4544 | 5 | yes |
| zstd | 2 | 0.032 | 3,200 | 0.4469 | 20 | yes |
| zstd | 3 | 0.059 | 3,176 | 0.4435 | 24 | yes |
| zstd | 4 | 0.098 | 3,102 | 0.4332 | 13 | yes |
| zstd | 5 | 0.072 | 3,079 | 0.4300 | 9 | yes |
| zstd | 6 | 0.084 | 3,060 | 0.4273 | 25 | no |
| zstd | 7 | 0.099 | 3,053 | 0.4263 | 5 | yes |
| zstd | 8 | 0.099 | 3,053 | 0.4263 | 14 | yes |
| zstd | 9 | 0.123 | 3,055 | 0.4266 | 25 | no |
| zstd | 10 | 0.115 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.223 | 3,044 | 0.4251 | 18 | yes |
| zstd | 12 | 0.427 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.577 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.548 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.553 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.048 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.035 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.025 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.019 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.019 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.020 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.020 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,475 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.073 | 67,036 | 0.4076 | 5 | yes |
| gzip | 2 | 2.251 | 65,451 | 0.3979 | 5 | yes |
| gzip | 3 | 2.589 | 64,421 | 0.3917 | 5 | yes |
| gzip | 4 | 2.857 | 62,075 | 0.3774 | 5 | yes |
| gzip | 5 | 3.930 | 60,450 | 0.3675 | 5 | yes |
| gzip | 6 | 4.926 | 60,174 | 0.3659 | 5 | yes |
| gzip | 7 | 5.387 | 60,131 | 0.3656 | 5 | yes |
| gzip | 8 | 5.857 | 60,115 | 0.3655 | 5 | yes |
| gzip | 9 | 5.869 | 60,115 | 0.3655 | 5 | yes |
| brotli | 0 | 0.573 | 71,306 | 0.4335 | 14 | yes |
| brotli | 1 | 0.980 | 68,383 | 0.4158 | 5 | yes |
| brotli | 2 | 1.740 | 63,134 | 0.3839 | 5 | yes |
| brotli | 3 | 2.040 | 62,525 | 0.3801 | 5 | yes |
| brotli | 4 | 3.025 | 61,271 | 0.3725 | 5 | yes |
| brotli | 5 | 4.554 | 58,043 | 0.3529 | 5 | yes |
| brotli | 6 | 5.091 | 57,682 | 0.3507 | 5 | yes |
| brotli | 7 | 6.055 | 57,387 | 0.3489 | 5 | yes |
| brotli | 8 | 6.582 | 57,305 | 0.3484 | 5 | yes |
| brotli | 9 | 9.004 | 57,230 | 0.3480 | 5 | yes |
| brotli | 10 | 102.774 | 54,405 | 0.3308 | 5 | yes |
| brotli | 11 | 254.633 | 53,493 | 0.3252 | 5 | yes |
| zstd | 1 | 0.633 | 66,378 | 0.4036 | 5 | yes |
| zstd | 2 | 0.819 | 63,336 | 0.3851 | 5 | yes |
| zstd | 3 | 1.014 | 62,859 | 0.3822 | 5 | yes |
| zstd | 4 | 1.837 | 60,996 | 0.3709 | 5 | yes |
| zstd | 5 | 2.061 | 60,478 | 0.3677 | 5 | yes |
| zstd | 6 | 2.488 | 59,586 | 0.3623 | 5 | yes |
| zstd | 7 | 2.931 | 58,792 | 0.3575 | 5 | yes |
| zstd | 8 | 3.628 | 58,314 | 0.3545 | 5 | yes |
| zstd | 9 | 4.252 | 58,070 | 0.3531 | 5 | yes |
| zstd | 10 | 5.011 | 57,939 | 0.3523 | 5 | yes |
| zstd | 11 | 8.754 | 57,635 | 0.3504 | 5 | yes |
| zstd | 12 | 8.838 | 57,621 | 0.3503 | 5 | yes |
| zstd | 13 | 15.416 | 56,599 | 0.3441 | 5 | yes |
| zstd | 14 | 18.005 | 56,168 | 0.3415 | 5 | yes |
| zstd | 15 | 18.340 | 56,140 | 0.3413 | 5 | yes |
| zstd | 16 | 22.916 | 55,973 | 0.3403 | 5 | yes |
| zstd | 17 | 22.989 | 55,973 | 0.3403 | 5 | yes |
| zstd | 18 | 39.675 | 55,896 | 0.3398 | 5 | yes |
| zstd | 19 | 39.586 | 55,896 | 0.3398 | 5 | yes |
| zstd | 20 | 39.601 | 55,896 | 0.3398 | 5 | yes |
| zstd | 21 | 39.533 | 55,896 | 0.3398 | 5 | yes |
| zstd | 22 | 39.541 | 55,896 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.854 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.939 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.075 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.177 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.596 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.059 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.460 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.385 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.360 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.208 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.409 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.735 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.867 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.391 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.968 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.164 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.570 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.720 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.708 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 41.015 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 100.398 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.199 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.231 | 28,008 | 0.3824 | 9 | yes |
| zstd | 3 | 0.279 | 27,463 | 0.3750 | 11 | yes |
| zstd | 4 | 0.426 | 27,100 | 0.3700 | 6 | yes |
| zstd | 5 | 0.792 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.098 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.319 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.450 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.661 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.951 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.267 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.353 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.279 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.538 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.597 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.814 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.837 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.843 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.721 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.726 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.751 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.769 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.650 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.756 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.906 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 1.015 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.417 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 2.200 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.984 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 8.879 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 9.017 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.181 | 25,901 | 0.3420 | 13 | yes |
| brotli | 1 | 0.313 | 23,906 | 0.3156 | 17 | yes |
| brotli | 2 | 0.663 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.796 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.175 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.739 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.973 | 20,220 | 0.2670 | 19 | yes |
| brotli | 7 | 2.364 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.701 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 4.988 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 30.820 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 89.355 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.201 | 22,639 | 0.2989 | 10 | yes |
| zstd | 2 | 0.305 | 22,433 | 0.2962 | 9 | yes |
| zstd | 3 | 0.252 | 22,208 | 0.2932 | 25 | no |
| zstd | 4 | 0.516 | 22,181 | 0.2929 | 25 | no |
| zstd | 5 | 0.814 | 21,579 | 0.2849 | 25 | no |
| zstd | 6 | 1.081 | 20,795 | 0.2746 | 25 | no |
| zstd | 7 | 1.293 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.473 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.846 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.361 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.244 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.304 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.838 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.000 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.228 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.606 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.106 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 23.553 | 18,740 | 0.2474 | 11 | yes |
| zstd | 19 | 21.236 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 24.096 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.746 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 46.026 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.190 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.278 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.498 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.796 | 33,830 | 0.1457 | 8 | yes |
| gzip | 5 | 2.366 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.222 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.988 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.414 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.500 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.331 | 43,268 | 0.1864 | 15 | yes |
| brotli | 1 | 0.672 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.234 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.464 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.183 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.150 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.410 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.887 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.342 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.849 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 102.765 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 305.615 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.521 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.540 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.546 | 34,393 | 0.1482 | 6 | yes |
| zstd | 4 | 1.489 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.716 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.976 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.186 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.702 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.328 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.905 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.146 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.905 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.698 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.515 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.252 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 47.968 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.206 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 72.477 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.632 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 83.509 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.877 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 83.989 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,946,804 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 103.991 | 3,754,873 | 0.2216 | 5 | yes |
| gzip | 2 | 113.367 | 3,606,731 | 0.2128 | 5 | yes |
| gzip | 3 | 141.818 | 3,488,191 | 0.2058 | 5 | yes |
| gzip | 4 | 164.412 | 3,361,083 | 0.1983 | 9 | yes |
| gzip | 5 | 207.823 | 3,140,651 | 0.1853 | 5 | yes |
| gzip | 6 | 321.130 | 3,073,208 | 0.1813 | 5 | yes |
| gzip | 7 | 443.063 | 3,007,264 | 0.1775 | 5 | yes |
| gzip | 8 | 1279.602 | 2,939,923 | 0.1735 | 5 | yes |
| gzip | 9 | 1337.823 | 2,939,101 | 0.1734 | 5 | yes |
| brotli | 0 | 45.408 | 4,158,391 | 0.2454 | 5 | yes |
| brotli | 1 | 66.927 | 3,696,388 | 0.2181 | 5 | yes |
| brotli | 2 | 114.217 | 3,404,652 | 0.2009 | 5 | yes |
| brotli | 3 | 134.952 | 3,347,644 | 0.1975 | 5 | yes |
| brotli | 4 | 205.256 | 3,276,816 | 0.1934 | 6 | yes |
| brotli | 5 | 321.886 | 2,921,643 | 0.1724 | 5 | yes |
| brotli | 6 | 380.125 | 2,890,343 | 0.1706 | 5 | yes |
| brotli | 7 | 584.089 | 2,863,078 | 0.1689 | 5 | yes |
| brotli | 8 | 826.808 | 2,844,800 | 0.1679 | 5 | yes |
| brotli | 9 | 1074.968 | 2,834,664 | 0.1673 | 6 | yes |
| brotli | 10 | 11632.282 | 2,428,562 | 0.1433 | 5 | yes |
| brotli | 11 | 28717.693 | 2,309,167 | 0.1363 | 5 | yes |
| zstd | 1 | 44.558 | 3,504,403 | 0.2068 | 5 | yes |
| zstd | 2 | 55.031 | 3,581,907 | 0.2114 | 5 | yes |
| zstd | 3 | 67.048 | 3,507,920 | 0.2070 | 5 | yes |
| zstd | 4 | 72.401 | 3,502,711 | 0.2067 | 5 | yes |
| zstd | 5 | 142.436 | 3,287,468 | 0.1940 | 8 | yes |
| zstd | 6 | 204.606 | 3,067,272 | 0.1810 | 5 | yes |
| zstd | 7 | 234.003 | 3,028,718 | 0.1787 | 5 | yes |
| zstd | 8 | 307.694 | 2,926,446 | 0.1727 | 5 | yes |
| zstd | 9 | 324.456 | 2,936,848 | 0.1733 | 5 | yes |
| zstd | 10 | 416.210 | 2,900,202 | 0.1711 | 5 | yes |
| zstd | 11 | 580.198 | 2,873,028 | 0.1695 | 5 | yes |
| zstd | 12 | 657.217 | 2,872,898 | 0.1695 | 5 | yes |
| zstd | 13 | 908.053 | 2,850,280 | 0.1682 | 5 | yes |
| zstd | 14 | 1111.791 | 2,835,958 | 0.1673 | 5 | yes |
| zstd | 15 | 1479.162 | 2,832,325 | 0.1671 | 5 | yes |
| zstd | 16 | 3019.146 | 2,645,548 | 0.1561 | 5 | yes |
| zstd | 17 | 3623.941 | 2,553,740 | 0.1507 | 5 | yes |
| zstd | 18 | 5606.999 | 2,535,042 | 0.1496 | 5 | yes |
| zstd | 19 | 6285.443 | 2,528,063 | 0.1492 | 5 | yes |
| zstd | 20 | 6239.315 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 21 | 6314.282 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 22 | 6525.666 | 2,521,575 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.711 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.858 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.603 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.413 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 27.059 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 32.154 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 34.211 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.662 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.856 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.153 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.656 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.453 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.784 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.544 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.677 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.225 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 46.101 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 53.894 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 66.947 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 970.144 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2091.417 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.246 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.148 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.594 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.381 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.714 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.463 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 17.198 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.515 | 386,566 | 0.4496 | 6 | yes |
| zstd | 9 | 19.610 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.217 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.762 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.669 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 51.962 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 53.599 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 54.005 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 94.142 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 127.476 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 162.626 | 358,220 | 0.4167 | 6 | yes |
| zstd | 19 | 177.215 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 179.282 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 180.442 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 194.183 | 358,041 | 0.4165 | 10 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.079 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.082 | 5,424 | 0.2784 | 13 | yes |
| gzip | 3 | 0.099 | 5,356 | 0.2749 | 22 | yes |
| gzip | 4 | 0.125 | 5,145 | 0.2641 | 17 | yes |
| gzip | 5 | 0.157 | 4,896 | 0.2513 | 20 | yes |
| gzip | 6 | 0.289 | 4,884 | 0.2507 | 25 | no |
| gzip | 7 | 0.518 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.692 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.673 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.058 | 6,028 | 0.3094 | 9 | yes |
| brotli | 1 | 0.078 | 5,737 | 0.2945 | 9 | yes |
| brotli | 2 | 0.107 | 4,944 | 0.2538 | 13 | yes |
| brotli | 3 | 0.136 | 4,930 | 0.2531 | 12 | yes |
| brotli | 4 | 0.216 | 4,898 | 0.2514 | 25 | yes |
| brotli | 5 | 0.410 | 4,581 | 0.2352 | 10 | yes |
| brotli | 6 | 0.459 | 4,570 | 0.2346 | 8 | yes |
| brotli | 7 | 0.590 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.626 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 2.288 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.470 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.342 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.055 | 5,379 | 0.2761 | 25 | no |
| zstd | 2 | 0.059 | 5,176 | 0.2657 | 12 | yes |
| zstd | 3 | 0.071 | 5,169 | 0.2653 | 11 | yes |
| zstd | 4 | 0.074 | 5,154 | 0.2646 | 11 | yes |
| zstd | 5 | 0.139 | 5,074 | 0.2605 | 11 | yes |
| zstd | 6 | 0.186 | 4,797 | 0.2463 | 10 | yes |
| zstd | 7 | 0.222 | 4,702 | 0.2414 | 14 | yes |
| zstd | 8 | 0.255 | 4,696 | 0.2411 | 8 | yes |
| zstd | 9 | 0.322 | 4,690 | 0.2408 | 15 | yes |
| zstd | 10 | 0.447 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.577 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.588 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.980 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.723 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.823 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.557 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.526 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.540 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.961 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.018 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.021 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 4.999 | 4,348 | 0.2232 | 5 | yes |
