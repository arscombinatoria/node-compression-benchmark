# Node Compression Benchmark

Last updated: 2026-05-14T21:25:40.605Z

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
| gzip | 1 | 0.942 | 31,033 | 0.3941 | 6 | yes |
| gzip | 2 | 0.958 | 30,134 | 0.3827 | 6 | yes |
| gzip | 3 | 1.055 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.172 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.517 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.778 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 1.935 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.141 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.193 | 27,530 | 0.3496 | 7 | yes |
| brotli | 0 | 0.320 | 33,111 | 0.4205 | 8 | yes |
| brotli | 1 | 0.931 | 31,803 | 0.4039 | 11 | yes |
| brotli | 2 | 0.778 | 29,394 | 0.3733 | 16 | yes |
| brotli | 3 | 0.857 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.345 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 1.939 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.162 | 26,844 | 0.3409 | 7 | yes |
| brotli | 7 | 3.544 | 26,773 | 0.3400 | 8 | yes |
| brotli | 8 | 2.597 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 7.465 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.877 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 98.040 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.315 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.360 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.419 | 29,214 | 0.3710 | 9 | yes |
| zstd | 4 | 0.957 | 29,108 | 0.3696 | 25 | yes |
| zstd | 5 | 1.174 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.475 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.706 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.881 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.070 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.239 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.026 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.428 | 26,970 | 0.3425 | 17 | yes |
| zstd | 13 | 6.187 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.440 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.329 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.031 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.152 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.666 | 26,336 | 0.3344 | 6 | yes |
| zstd | 19 | 21.054 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 20.714 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 20.602 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 20.757 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 85.976 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 91.425 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 93.008 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 101.854 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 117.764 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 131.596 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 140.016 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 156.855 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 168.760 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 18.520 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 23.976 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 43.877 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 56.318 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 91.393 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 128.673 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 146.402 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 498.589 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 614.403 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 839.426 | 2,793,428 | 0.5104 | 6 | yes |
| brotli | 10 | 6373.948 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12755.449 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.566 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 22.118 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 34.941 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 45.193 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 64.162 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 76.736 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 87.016 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 101.533 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 106.549 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 132.293 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 190.514 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 247.840 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 493.506 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 549.943 | 2,852,038 | 0.5211 | 8 | yes |
| zstd | 15 | 643.268 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 849.379 | 2,803,911 | 0.5123 | 6 | yes |
| zstd | 17 | 999.514 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1248.402 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1378.565 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1327.464 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1300.472 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1295.489 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.188 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.238 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.218 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.702 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.700 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.673 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.717 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.670 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.806 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.294 | 613,595 | 0.9981 | 25 | no |
| brotli | 1 | 0.339 | 614,785 | 1.0000 | 5 | yes |
| brotli | 2 | 0.631 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.781 | 614,763 | 1.0000 | 9 | yes |
| brotli | 4 | 0.896 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.653 | 614,785 | 1.0000 | 20 | yes |
| brotli | 6 | 1.775 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 1.985 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.127 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 3.460 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 123.191 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 270.308 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.398 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.463 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.563 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.708 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.922 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.902 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 1.177 | 614,804 | 1.0000 | 9 | yes |
| zstd | 8 | 1.179 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 1.641 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 1.656 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 2.773 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 2.847 | 614,804 | 1.0000 | 25 | no |
| zstd | 13 | 5.923 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 6.082 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 6.002 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 30.289 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 28.839 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 35.366 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 45.473 | 612,518 | 0.9963 | 6 | yes |
| zstd | 20 | 47.928 | 612,518 | 0.9963 | 6 | yes |
| zstd | 21 | 50.042 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 39.963 | 612,518 | 0.9963 | 13 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,376 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.922 | 144,671 | 0.2962 | 5 | yes |
| gzip | 2 | 4.222 | 137,894 | 0.2824 | 5 | yes |
| gzip | 3 | 5.189 | 133,284 | 0.2729 | 5 | yes |
| gzip | 4 | 5.456 | 125,107 | 0.2562 | 5 | yes |
| gzip | 5 | 7.723 | 120,500 | 0.2467 | 5 | yes |
| gzip | 6 | 10.940 | 118,777 | 0.2432 | 5 | yes |
| gzip | 7 | 13.696 | 118,321 | 0.2423 | 5 | yes |
| gzip | 8 | 28.035 | 118,050 | 0.2417 | 5 | yes |
| gzip | 9 | 43.678 | 117,981 | 0.2416 | 5 | yes |
| brotli | 0 | 1.451 | 149,143 | 0.3054 | 5 | yes |
| brotli | 1 | 1.791 | 136,828 | 0.2802 | 5 | yes |
| brotli | 2 | 3.665 | 128,657 | 0.2634 | 5 | yes |
| brotli | 3 | 4.234 | 125,956 | 0.2579 | 5 | yes |
| brotli | 4 | 6.060 | 122,132 | 0.2501 | 5 | yes |
| brotli | 5 | 9.780 | 112,200 | 0.2297 | 5 | yes |
| brotli | 6 | 11.314 | 109,580 | 0.2244 | 5 | yes |
| brotli | 7 | 13.409 | 107,617 | 0.2204 | 5 | yes |
| brotli | 8 | 15.768 | 106,600 | 0.2183 | 5 | yes |
| brotli | 9 | 20.670 | 105,688 | 0.2164 | 5 | yes |
| brotli | 10 | 275.534 | 98,262 | 0.2012 | 5 | yes |
| brotli | 11 | 733.464 | 96,054 | 0.1967 | 5 | yes |
| zstd | 1 | 1.628 | 137,501 | 0.2815 | 5 | yes |
| zstd | 2 | 1.709 | 133,304 | 0.2730 | 5 | yes |
| zstd | 3 | 2.212 | 125,704 | 0.2574 | 5 | yes |
| zstd | 4 | 2.805 | 125,507 | 0.2570 | 5 | yes |
| zstd | 5 | 4.651 | 116,849 | 0.2393 | 5 | yes |
| zstd | 6 | 6.192 | 112,959 | 0.2313 | 5 | yes |
| zstd | 7 | 7.242 | 111,397 | 0.2281 | 5 | yes |
| zstd | 8 | 8.839 | 110,614 | 0.2265 | 5 | yes |
| zstd | 9 | 8.905 | 110,614 | 0.2265 | 5 | yes |
| zstd | 10 | 10.443 | 109,711 | 0.2246 | 5 | yes |
| zstd | 11 | 13.588 | 109,009 | 0.2232 | 5 | yes |
| zstd | 12 | 14.062 | 109,009 | 0.2232 | 5 | yes |
| zstd | 13 | 30.014 | 107,861 | 0.2209 | 5 | yes |
| zstd | 14 | 35.657 | 107,276 | 0.2197 | 5 | yes |
| zstd | 15 | 39.748 | 107,183 | 0.2195 | 5 | yes |
| zstd | 16 | 67.139 | 101,602 | 0.2080 | 5 | yes |
| zstd | 17 | 73.659 | 100,701 | 0.2062 | 5 | yes |
| zstd | 18 | 104.496 | 99,909 | 0.2046 | 5 | yes |
| zstd | 19 | 133.060 | 99,813 | 0.2044 | 5 | yes |
| zstd | 20 | 133.049 | 99,813 | 0.2044 | 5 | yes |
| zstd | 21 | 133.753 | 99,799 | 0.2043 | 5 | yes |
| zstd | 22 | 132.919 | 99,799 | 0.2043 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.113 | 4,987 | 0.2897 | 13 | yes |
| gzip | 2 | 0.122 | 4,874 | 0.2831 | 12 | yes |
| gzip | 3 | 0.142 | 4,805 | 0.2791 | 15 | yes |
| gzip | 4 | 0.185 | 4,529 | 0.2631 | 5 | yes |
| gzip | 5 | 0.234 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.284 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.312 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.445 | 4,418 | 0.2566 | 5 | yes |
| gzip | 9 | 0.459 | 4,418 | 0.2566 | 5 | yes |
| brotli | 0 | 0.050 | 5,234 | 0.3040 | 22 | yes |
| brotli | 1 | 0.062 | 5,133 | 0.2981 | 25 | no |
| brotli | 2 | 0.141 | 4,740 | 0.2753 | 5 | yes |
| brotli | 3 | 0.157 | 4,650 | 0.2701 | 10 | yes |
| brotli | 4 | 0.270 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.366 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.403 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.429 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.448 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.530 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.881 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.310 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.056 | 4,924 | 0.2860 | 25 | no |
| zstd | 2 | 0.065 | 4,868 | 0.2827 | 25 | no |
| zstd | 3 | 0.099 | 4,718 | 0.2740 | 6 | yes |
| zstd | 4 | 0.100 | 4,680 | 0.2718 | 12 | yes |
| zstd | 5 | 0.175 | 4,518 | 0.2624 | 10 | yes |
| zstd | 6 | 0.229 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.269 | 4,437 | 0.2577 | 8 | yes |
| zstd | 8 | 0.312 | 4,425 | 0.2570 | 5 | yes |
| zstd | 9 | 0.328 | 4,419 | 0.2567 | 15 | yes |
| zstd | 10 | 0.366 | 4,409 | 0.2561 | 5 | yes |
| zstd | 11 | 0.689 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.746 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.974 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.436 | 4,305 | 0.2500 | 5 | yes |
| zstd | 15 | 1.529 | 4,302 | 0.2499 | 5 | yes |
| zstd | 16 | 2.212 | 4,281 | 0.2486 | 5 | yes |
| zstd | 17 | 2.320 | 4,280 | 0.2486 | 5 | yes |
| zstd | 18 | 2.323 | 4,280 | 0.2486 | 5 | yes |
| zstd | 19 | 4.499 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.518 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.482 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.508 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.054 | 3,217 | 0.4493 | 25 | no |
| gzip | 2 | 0.056 | 3,179 | 0.4440 | 20 | yes |
| gzip | 3 | 0.058 | 3,150 | 0.4399 | 17 | yes |
| gzip | 4 | 0.073 | 3,092 | 0.4318 | 16 | yes |
| gzip | 5 | 0.101 | 3,047 | 0.4256 | 11 | yes |
| gzip | 6 | 0.104 | 3,041 | 0.4247 | 12 | yes |
| gzip | 7 | 0.105 | 3,039 | 0.4244 | 9 | yes |
| gzip | 8 | 0.109 | 3,039 | 0.4244 | 5 | yes |
| gzip | 9 | 0.103 | 3,039 | 0.4244 | 13 | yes |
| brotli | 0 | 0.029 | 3,544 | 0.4950 | 17 | yes |
| brotli | 1 | 0.041 | 3,378 | 0.4718 | 25 | no |
| brotli | 2 | 0.055 | 3,258 | 0.4550 | 15 | yes |
| brotli | 3 | 0.071 | 3,207 | 0.4479 | 17 | yes |
| brotli | 4 | 0.144 | 3,138 | 0.4383 | 9 | yes |
| brotli | 5 | 0.208 | 2,961 | 0.4135 | 7 | yes |
| brotli | 6 | 0.221 | 2,950 | 0.4120 | 8 | yes |
| brotli | 7 | 0.247 | 2,942 | 0.4109 | 5 | yes |
| brotli | 8 | 0.247 | 2,942 | 0.4109 | 5 | yes |
| brotli | 9 | 0.302 | 2,943 | 0.4110 | 5 | yes |
| brotli | 10 | 3.269 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 8.147 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.037 | 3,250 | 0.4539 | 5 | yes |
| zstd | 2 | 0.065 | 3,196 | 0.4464 | 5 | yes |
| zstd | 3 | 0.047 | 3,171 | 0.4429 | 20 | yes |
| zstd | 4 | 0.072 | 3,098 | 0.4327 | 9 | yes |
| zstd | 5 | 0.079 | 3,077 | 0.4297 | 15 | yes |
| zstd | 6 | 0.115 | 3,055 | 0.4267 | 5 | yes |
| zstd | 7 | 0.116 | 3,050 | 0.4260 | 5 | yes |
| zstd | 8 | 0.110 | 3,050 | 0.4260 | 5 | yes |
| zstd | 9 | 0.211 | 3,050 | 0.4260 | 5 | yes |
| zstd | 10 | 0.202 | 3,050 | 0.4260 | 5 | yes |
| zstd | 11 | 0.342 | 3,041 | 0.4247 | 5 | yes |
| zstd | 12 | 0.464 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.603 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.605 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.622 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.170 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.175 | 2,991 | 0.4177 | 5 | yes |
| zstd | 18 | 1.167 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.171 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.177 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.161 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.168 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,101 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.880 | 66,867 | 0.4075 | 5 | yes |
| gzip | 2 | 2.050 | 65,284 | 0.3978 | 5 | yes |
| gzip | 3 | 2.280 | 64,273 | 0.3917 | 5 | yes |
| gzip | 4 | 2.516 | 61,944 | 0.3775 | 5 | yes |
| gzip | 5 | 3.381 | 60,295 | 0.3674 | 5 | yes |
| gzip | 6 | 4.124 | 60,024 | 0.3658 | 5 | yes |
| gzip | 7 | 4.490 | 59,987 | 0.3655 | 5 | yes |
| gzip | 8 | 4.813 | 59,968 | 0.3654 | 5 | yes |
| gzip | 9 | 4.837 | 59,968 | 0.3654 | 5 | yes |
| brotli | 0 | 0.606 | 71,266 | 0.4343 | 5 | yes |
| brotli | 1 | 0.777 | 68,223 | 0.4157 | 5 | yes |
| brotli | 2 | 1.605 | 62,973 | 0.3837 | 8 | yes |
| brotli | 3 | 1.854 | 62,342 | 0.3799 | 5 | yes |
| brotli | 4 | 2.753 | 61,240 | 0.3732 | 5 | yes |
| brotli | 5 | 4.368 | 57,877 | 0.3527 | 11 | yes |
| brotli | 6 | 4.659 | 57,538 | 0.3506 | 5 | yes |
| brotli | 7 | 5.671 | 57,245 | 0.3488 | 5 | yes |
| brotli | 8 | 6.127 | 57,160 | 0.3483 | 5 | yes |
| brotli | 9 | 7.428 | 57,088 | 0.3479 | 5 | yes |
| brotli | 10 | 95.737 | 54,389 | 0.3314 | 5 | yes |
| brotli | 11 | 243.447 | 53,368 | 0.3252 | 5 | yes |
| zstd | 1 | 0.607 | 66,221 | 0.4035 | 5 | yes |
| zstd | 2 | 0.796 | 63,208 | 0.3852 | 5 | yes |
| zstd | 3 | 0.952 | 62,693 | 0.3820 | 5 | yes |
| zstd | 4 | 1.731 | 60,843 | 0.3708 | 5 | yes |
| zstd | 5 | 2.168 | 60,346 | 0.3677 | 5 | yes |
| zstd | 6 | 2.718 | 59,421 | 0.3621 | 5 | yes |
| zstd | 7 | 3.163 | 58,638 | 0.3573 | 5 | yes |
| zstd | 8 | 3.917 | 58,163 | 0.3544 | 5 | yes |
| zstd | 9 | 4.368 | 57,917 | 0.3529 | 5 | yes |
| zstd | 10 | 5.275 | 57,792 | 0.3522 | 5 | yes |
| zstd | 11 | 9.290 | 57,490 | 0.3503 | 5 | yes |
| zstd | 12 | 9.767 | 57,475 | 0.3502 | 5 | yes |
| zstd | 13 | 15.280 | 56,464 | 0.3441 | 5 | yes |
| zstd | 14 | 18.021 | 56,028 | 0.3414 | 5 | yes |
| zstd | 15 | 18.325 | 56,011 | 0.3413 | 5 | yes |
| zstd | 16 | 23.946 | 55,838 | 0.3403 | 5 | yes |
| zstd | 17 | 23.675 | 55,838 | 0.3403 | 5 | yes |
| zstd | 18 | 39.588 | 55,766 | 0.3398 | 5 | yes |
| zstd | 19 | 39.784 | 55,766 | 0.3398 | 5 | yes |
| zstd | 20 | 39.278 | 55,766 | 0.3398 | 5 | yes |
| zstd | 21 | 40.105 | 55,766 | 0.3398 | 5 | yes |
| zstd | 22 | 39.499 | 55,766 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.787 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.870 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.950 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.075 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.377 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.712 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.982 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.590 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.597 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.244 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.323 | 29,754 | 0.4063 | 7 | yes |
| brotli | 2 | 0.663 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.774 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.255 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.851 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 1.997 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.394 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.547 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.091 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 39.610 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 98.952 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.267 | 28,919 | 0.3949 | 5 | yes |
| zstd | 2 | 0.290 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.368 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.480 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.809 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.066 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.304 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.431 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.619 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.875 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.368 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.664 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.483 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.697 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.834 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.196 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.137 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.110 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 19.034 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 19.003 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 19.192 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.749 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.596 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.713 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.784 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.878 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.207 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.822 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.492 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 10.800 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 10.960 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.222 | 25,901 | 0.3420 | 9 | yes |
| brotli | 1 | 0.319 | 23,906 | 0.3156 | 9 | yes |
| brotli | 2 | 0.611 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.722 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.067 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.631 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.829 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.199 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.567 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.381 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 30.239 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 90.390 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.248 | 22,639 | 0.2989 | 8 | yes |
| zstd | 2 | 0.283 | 22,433 | 0.2962 | 7 | yes |
| zstd | 3 | 0.348 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.440 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.727 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 0.988 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.226 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.426 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.753 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.264 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.409 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.659 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.112 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.139 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.324 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.069 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.367 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.369 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 20.414 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 24.397 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 37.398 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 44.669 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.103 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.148 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.311 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.588 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.017 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.693 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.260 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.319 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.376 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.403 | 43,268 | 0.1864 | 7 | yes |
| brotli | 1 | 0.541 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.134 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.344 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.971 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.939 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.199 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.602 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.134 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.084 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 98.722 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 302.072 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.494 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.542 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.588 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.349 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.719 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.098 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.308 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.894 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.366 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.156 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 9.092 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 11.247 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 19.105 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.933 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.672 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.728 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.484 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 73.083 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.806 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 83.598 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.641 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 83.637 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 96.357 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 96.369 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 109.800 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 129.816 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 154.107 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 197.048 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 300.887 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 1154.990 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1694.626 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 43.006 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 54.205 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 106.768 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 126.065 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 183.395 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 312.901 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 378.108 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 518.167 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 641.448 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 869.531 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 13713.644 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37453.097 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 43.851 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 52.693 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 69.067 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 76.080 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 133.022 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 189.462 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 218.871 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 281.132 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 291.910 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 377.381 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 559.550 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 608.566 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 905.330 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1144.534 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1489.713 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3641.741 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 4227.607 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5681.271 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9135.847 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9535.729 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9497.793 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9811.419 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.480 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.415 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.466 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.151 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.504 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.398 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 28.882 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 31.705 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 31.697 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.639 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 4.507 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.501 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.464 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 16.288 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.529 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.907 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 43.757 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 50.565 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 61.998 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 898.141 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1922.003 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 2.980 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.776 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.309 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.619 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.074 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.511 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.272 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.375 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.304 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 23.066 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 29.361 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 28.319 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 60.372 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 65.574 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 64.358 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 111.911 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 128.954 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 163.942 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 179.597 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 184.781 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 190.938 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 183.388 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.114 | 5,506 | 0.2826 | 15 | yes |
| gzip | 2 | 0.135 | 5,424 | 0.2784 | 22 | yes |
| gzip | 3 | 0.182 | 5,356 | 0.2749 | 5 | yes |
| gzip | 4 | 0.183 | 5,145 | 0.2641 | 10 | yes |
| gzip | 5 | 0.270 | 4,896 | 0.2513 | 5 | yes |
| gzip | 6 | 0.365 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.462 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.620 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.640 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.052 | 6,028 | 0.3094 | 15 | yes |
| brotli | 1 | 0.065 | 5,737 | 0.2945 | 15 | yes |
| brotli | 2 | 0.139 | 4,944 | 0.2538 | 6 | yes |
| brotli | 3 | 0.177 | 4,930 | 0.2531 | 9 | yes |
| brotli | 4 | 0.268 | 4,898 | 0.2514 | 7 | yes |
| brotli | 5 | 0.436 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.470 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.547 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.595 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.725 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.312 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.899 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.060 | 5,379 | 0.2761 | 18 | yes |
| zstd | 2 | 0.069 | 5,176 | 0.2657 | 9 | yes |
| zstd | 3 | 0.104 | 5,169 | 0.2653 | 7 | yes |
| zstd | 4 | 0.100 | 5,154 | 0.2646 | 17 | yes |
| zstd | 5 | 0.173 | 5,074 | 0.2605 | 9 | yes |
| zstd | 6 | 0.242 | 4,797 | 0.2463 | 8 | yes |
| zstd | 7 | 0.289 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.338 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.385 | 4,690 | 0.2408 | 6 | yes |
| zstd | 10 | 0.476 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.664 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.727 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.045 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.764 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.881 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.610 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.616 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.611 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.061 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.096 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.121 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.100 | 4,348 | 0.2232 | 5 | yes |
