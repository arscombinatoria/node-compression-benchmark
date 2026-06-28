# Node Compression Benchmark

Last updated: 2026-06-28T21:17:52.241Z

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
| gzip | 1 | 1.333 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.425 | 30,134 | 0.3827 | 8 | yes |
| gzip | 3 | 1.486 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.730 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 2.167 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.440 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.623 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.857 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.872 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.498 | 33,111 | 0.4205 | 10 | yes |
| brotli | 1 | 0.861 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 1.200 | 29,394 | 0.3733 | 6 | yes |
| brotli | 3 | 1.369 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.360 | 28,392 | 0.3605 | 21 | yes |
| brotli | 5 | 2.058 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.241 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 4.250 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.746 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 8.416 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 34.422 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.813 | 24,992 | 0.3174 | 9 | yes |
| zstd | 1 | 0.483 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.602 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.385 | 29,214 | 0.3710 | 13 | yes |
| zstd | 4 | 0.457 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.851 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.128 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.403 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.576 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.701 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.925 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.514 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.719 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.460 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.764 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.927 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.272 | 26,336 | 0.3344 | 17 | yes |
| zstd | 17 | 10.152 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.213 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.960 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.788 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.816 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.938 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 85.673 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 90.180 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 92.492 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.799 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 120.172 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.602 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 141.006 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 157.185 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 169.986 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 18.465 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 24.572 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 44.894 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 57.218 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 103.966 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 138.423 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 169.919 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 606.151 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 728.761 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 923.485 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6701.069 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12788.782 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.725 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 22.434 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 36.318 | 3,139,155 | 0.5736 | 8 | yes |
| zstd | 4 | 43.637 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.030 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 79.295 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 91.415 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 109.103 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 117.075 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 144.826 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 229.514 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 265.683 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 521.132 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 570.933 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 670.937 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 878.437 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 1021.936 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1362.504 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1479.484 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1452.083 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1440.035 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1412.599 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.203 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.194 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.217 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.775 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.764 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.866 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.794 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.816 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.861 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.306 | 613,595 | 0.9981 | 12 | yes |
| brotli | 1 | 0.329 | 614,785 | 1.0000 | 5 | yes |
| brotli | 2 | 0.638 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.770 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.879 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.553 | 614,785 | 1.0000 | 25 | no |
| brotli | 6 | 1.938 | 614,785 | 1.0000 | 5 | yes |
| brotli | 7 | 2.187 | 614,785 | 1.0000 | 12 | yes |
| brotli | 8 | 2.382 | 614,785 | 1.0000 | 16 | yes |
| brotli | 9 | 8.574 | 614,785 | 1.0000 | 8 | yes |
| brotli | 10 | 150.570 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 275.224 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.379 | 614,805 | 1.0000 | 16 | yes |
| zstd | 2 | 0.377 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.442 | 614,804 | 1.0000 | 25 | no |
| zstd | 4 | 0.471 | 614,804 | 1.0000 | 18 | yes |
| zstd | 5 | 0.589 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.592 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.699 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.715 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.917 | 614,804 | 1.0000 | 21 | yes |
| zstd | 10 | 0.904 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 1.014 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 1.014 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 3.584 | 612,619 | 0.9965 | 6 | yes |
| zstd | 14 | 3.506 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 3.531 | 612,619 | 0.9965 | 8 | yes |
| zstd | 16 | 37.540 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 35.200 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 44.340 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 52.293 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 54.094 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 56.213 | 612,518 | 0.9963 | 6 | yes |
| zstd | 22 | 53.220 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 489,395 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.979 | 144,996 | 0.2963 | 5 | yes |
| gzip | 2 | 4.256 | 138,216 | 0.2824 | 5 | yes |
| gzip | 3 | 5.215 | 133,608 | 0.2730 | 5 | yes |
| gzip | 4 | 5.508 | 125,402 | 0.2562 | 5 | yes |
| gzip | 5 | 7.748 | 120,766 | 0.2468 | 5 | yes |
| gzip | 6 | 10.993 | 119,043 | 0.2432 | 5 | yes |
| gzip | 7 | 13.721 | 118,585 | 0.2423 | 5 | yes |
| gzip | 8 | 27.995 | 118,310 | 0.2417 | 5 | yes |
| gzip | 9 | 43.464 | 118,244 | 0.2416 | 5 | yes |
| brotli | 0 | 1.476 | 149,475 | 0.3054 | 5 | yes |
| brotli | 1 | 1.862 | 137,161 | 0.2803 | 5 | yes |
| brotli | 2 | 3.791 | 128,919 | 0.2634 | 5 | yes |
| brotli | 3 | 4.313 | 126,419 | 0.2583 | 5 | yes |
| brotli | 4 | 6.105 | 122,353 | 0.2500 | 5 | yes |
| brotli | 5 | 10.184 | 112,462 | 0.2298 | 5 | yes |
| brotli | 6 | 11.887 | 109,832 | 0.2244 | 5 | yes |
| brotli | 7 | 13.818 | 107,873 | 0.2204 | 5 | yes |
| brotli | 8 | 16.483 | 106,822 | 0.2183 | 5 | yes |
| brotli | 9 | 21.233 | 105,936 | 0.2165 | 5 | yes |
| brotli | 10 | 283.062 | 98,469 | 0.2012 | 5 | yes |
| brotli | 11 | 713.176 | 96,289 | 0.1968 | 5 | yes |
| zstd | 1 | 1.571 | 137,821 | 0.2816 | 5 | yes |
| zstd | 2 | 1.725 | 133,669 | 0.2731 | 5 | yes |
| zstd | 3 | 2.052 | 125,996 | 0.2575 | 5 | yes |
| zstd | 4 | 2.140 | 125,813 | 0.2571 | 5 | yes |
| zstd | 5 | 4.209 | 117,177 | 0.2394 | 5 | yes |
| zstd | 6 | 5.738 | 113,258 | 0.2314 | 5 | yes |
| zstd | 7 | 6.797 | 111,690 | 0.2282 | 5 | yes |
| zstd | 8 | 8.586 | 110,893 | 0.2266 | 5 | yes |
| zstd | 9 | 8.613 | 110,893 | 0.2266 | 5 | yes |
| zstd | 10 | 10.260 | 109,851 | 0.2245 | 5 | yes |
| zstd | 11 | 13.580 | 109,255 | 0.2232 | 5 | yes |
| zstd | 12 | 13.240 | 109,255 | 0.2232 | 5 | yes |
| zstd | 13 | 31.788 | 108,074 | 0.2208 | 9 | yes |
| zstd | 14 | 38.858 | 107,493 | 0.2196 | 5 | yes |
| zstd | 15 | 42.796 | 107,422 | 0.2195 | 5 | yes |
| zstd | 16 | 72.342 | 101,841 | 0.2081 | 5 | yes |
| zstd | 17 | 79.192 | 100,954 | 0.2063 | 5 | yes |
| zstd | 18 | 113.686 | 100,145 | 0.2046 | 5 | yes |
| zstd | 19 | 142.711 | 100,032 | 0.2044 | 5 | yes |
| zstd | 20 | 143.812 | 100,032 | 0.2044 | 5 | yes |
| zstd | 21 | 144.353 | 100,029 | 0.2044 | 5 | yes |
| zstd | 22 | 142.699 | 100,029 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.115 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.146 | 4,874 | 0.2831 | 5 | yes |
| gzip | 3 | 0.151 | 4,806 | 0.2791 | 5 | yes |
| gzip | 4 | 0.180 | 4,530 | 0.2631 | 5 | yes |
| gzip | 5 | 0.223 | 4,441 | 0.2579 | 7 | yes |
| gzip | 6 | 0.257 | 4,425 | 0.2570 | 7 | yes |
| gzip | 7 | 0.317 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.432 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.440 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.050 | 5,235 | 0.3041 | 10 | yes |
| brotli | 1 | 0.061 | 5,134 | 0.2982 | 9 | yes |
| brotli | 2 | 0.117 | 4,741 | 0.2754 | 12 | yes |
| brotli | 3 | 0.151 | 4,650 | 0.2701 | 11 | yes |
| brotli | 4 | 0.255 | 4,555 | 0.2646 | 7 | yes |
| brotli | 5 | 0.357 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.398 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.428 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.442 | 4,257 | 0.2473 | 7 | yes |
| brotli | 9 | 4.705 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.000 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.929 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.048 | 4,923 | 0.2859 | 13 | yes |
| zstd | 2 | 0.055 | 4,868 | 0.2827 | 9 | yes |
| zstd | 3 | 0.065 | 4,717 | 0.2740 | 25 | no |
| zstd | 4 | 0.072 | 4,679 | 0.2718 | 11 | yes |
| zstd | 5 | 0.147 | 4,519 | 0.2625 | 6 | yes |
| zstd | 6 | 0.209 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.250 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.278 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.300 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.341 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.627 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.706 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.915 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.362 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.453 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.149 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.299 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.271 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.462 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.451 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.448 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.453 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.052 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.055 | 3,182 | 0.4444 | 20 | yes |
| gzip | 3 | 0.064 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.082 | 3,095 | 0.4322 | 17 | yes |
| gzip | 5 | 0.104 | 3,051 | 0.4261 | 12 | yes |
| gzip | 6 | 0.112 | 3,044 | 0.4251 | 10 | yes |
| gzip | 7 | 0.119 | 3,042 | 0.4248 | 5 | yes |
| gzip | 8 | 0.102 | 3,042 | 0.4248 | 16 | yes |
| gzip | 9 | 0.107 | 3,042 | 0.4248 | 9 | yes |
| brotli | 0 | 0.029 | 3,549 | 0.4956 | 25 | no |
| brotli | 1 | 0.041 | 3,381 | 0.4721 | 13 | yes |
| brotli | 2 | 0.060 | 3,263 | 0.4557 | 25 | no |
| brotli | 3 | 0.072 | 3,216 | 0.4491 | 16 | yes |
| brotli | 4 | 0.136 | 3,147 | 0.4395 | 19 | yes |
| brotli | 5 | 0.210 | 2,963 | 0.4138 | 9 | yes |
| brotli | 6 | 0.221 | 2,952 | 0.4122 | 5 | yes |
| brotli | 7 | 0.260 | 2,944 | 0.4111 | 5 | yes |
| brotli | 8 | 0.239 | 2,944 | 0.4111 | 7 | yes |
| brotli | 9 | 4.791 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.201 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.958 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.050 | 3,254 | 0.4544 | 5 | yes |
| zstd | 2 | 0.032 | 3,200 | 0.4469 | 14 | yes |
| zstd | 3 | 0.039 | 3,176 | 0.4435 | 9 | yes |
| zstd | 4 | 0.061 | 3,102 | 0.4332 | 9 | yes |
| zstd | 5 | 0.089 | 3,079 | 0.4300 | 5 | yes |
| zstd | 6 | 0.085 | 3,060 | 0.4273 | 25 | no |
| zstd | 7 | 0.102 | 3,053 | 0.4263 | 7 | yes |
| zstd | 8 | 0.095 | 3,053 | 0.4263 | 8 | yes |
| zstd | 9 | 0.196 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.184 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.330 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.456 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.596 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.613 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.605 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.171 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.162 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.163 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.155 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.154 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.155 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.138 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,901 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.897 | 67,260 | 0.4079 | 5 | yes |
| gzip | 2 | 2.071 | 65,641 | 0.3981 | 5 | yes |
| gzip | 3 | 2.290 | 64,609 | 0.3918 | 5 | yes |
| gzip | 4 | 2.566 | 62,246 | 0.3775 | 5 | yes |
| gzip | 5 | 3.411 | 60,620 | 0.3676 | 5 | yes |
| gzip | 6 | 4.183 | 60,347 | 0.3660 | 5 | yes |
| gzip | 7 | 4.498 | 60,306 | 0.3657 | 5 | yes |
| gzip | 8 | 4.849 | 60,288 | 0.3656 | 5 | yes |
| gzip | 9 | 4.835 | 60,288 | 0.3656 | 5 | yes |
| brotli | 0 | 0.786 | 71,542 | 0.4338 | 8 | yes |
| brotli | 1 | 0.758 | 68,608 | 0.4161 | 8 | yes |
| brotli | 2 | 1.591 | 63,268 | 0.3837 | 5 | yes |
| brotli | 3 | 1.872 | 62,714 | 0.3803 | 5 | yes |
| brotli | 4 | 2.855 | 61,492 | 0.3729 | 5 | yes |
| brotli | 5 | 4.504 | 58,210 | 0.3530 | 5 | yes |
| brotli | 6 | 5.001 | 57,839 | 0.3507 | 5 | yes |
| brotli | 7 | 6.001 | 57,540 | 0.3489 | 5 | yes |
| brotli | 8 | 6.639 | 57,465 | 0.3485 | 5 | yes |
| brotli | 9 | 12.898 | 57,391 | 0.3480 | 5 | yes |
| brotli | 10 | 96.191 | 54,557 | 0.3308 | 5 | yes |
| brotli | 11 | 243.647 | 53,655 | 0.3254 | 5 | yes |
| zstd | 1 | 0.599 | 66,585 | 0.4038 | 5 | yes |
| zstd | 2 | 0.790 | 63,595 | 0.3857 | 5 | yes |
| zstd | 3 | 0.934 | 63,025 | 0.3822 | 5 | yes |
| zstd | 4 | 1.660 | 61,203 | 0.3711 | 5 | yes |
| zstd | 5 | 1.882 | 60,668 | 0.3679 | 5 | yes |
| zstd | 6 | 2.277 | 59,769 | 0.3625 | 5 | yes |
| zstd | 7 | 2.800 | 58,956 | 0.3575 | 5 | yes |
| zstd | 8 | 3.571 | 58,460 | 0.3545 | 5 | yes |
| zstd | 9 | 4.038 | 58,213 | 0.3530 | 5 | yes |
| zstd | 10 | 5.059 | 58,073 | 0.3522 | 5 | yes |
| zstd | 11 | 9.618 | 57,781 | 0.3504 | 25 | no |
| zstd | 12 | 9.365 | 57,769 | 0.3503 | 5 | yes |
| zstd | 13 | 15.693 | 56,782 | 0.3443 | 5 | yes |
| zstd | 14 | 18.443 | 56,326 | 0.3416 | 5 | yes |
| zstd | 15 | 19.249 | 56,318 | 0.3415 | 5 | yes |
| zstd | 16 | 26.093 | 56,132 | 0.3404 | 5 | yes |
| zstd | 17 | 25.621 | 56,132 | 0.3404 | 5 | yes |
| zstd | 18 | 42.891 | 56,049 | 0.3399 | 5 | yes |
| zstd | 19 | 42.911 | 56,049 | 0.3399 | 5 | yes |
| zstd | 20 | 42.589 | 56,049 | 0.3399 | 5 | yes |
| zstd | 21 | 43.142 | 56,049 | 0.3399 | 5 | yes |
| zstd | 22 | 42.828 | 56,049 | 0.3399 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.779 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.843 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.952 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.080 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.387 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.691 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.008 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.582 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.582 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.268 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.345 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.669 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.789 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.275 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.936 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.103 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.569 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.718 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 8.464 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 40.483 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 96.846 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.246 | 28,919 | 0.3949 | 5 | yes |
| zstd | 2 | 0.264 | 28,008 | 0.3824 | 10 | yes |
| zstd | 3 | 0.328 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.406 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.770 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.017 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.236 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.382 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.573 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.821 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.301 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.492 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.261 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.367 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.498 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.904 | 24,499 | 0.3345 | 7 | yes |
| zstd | 17 | 9.928 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.828 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.957 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.814 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.848 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.795 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,169 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.689 | 25,582 | 0.2837 | 5 | yes |
| gzip | 2 | 0.769 | 25,330 | 0.2809 | 5 | yes |
| gzip | 3 | 0.866 | 25,125 | 0.2786 | 5 | yes |
| gzip | 4 | 0.986 | 23,752 | 0.2634 | 5 | yes |
| gzip | 5 | 1.334 | 22,851 | 0.2534 | 5 | yes |
| gzip | 6 | 1.981 | 22,618 | 0.2508 | 5 | yes |
| gzip | 7 | 2.653 | 22,513 | 0.2497 | 5 | yes |
| gzip | 8 | 11.161 | 22,266 | 0.2469 | 5 | yes |
| gzip | 9 | 11.302 | 22,264 | 0.2469 | 5 | yes |
| brotli | 0 | 0.264 | 27,662 | 0.3068 | 10 | yes |
| brotli | 1 | 0.362 | 25,918 | 0.2874 | 7 | yes |
| brotli | 2 | 0.676 | 23,445 | 0.2600 | 5 | yes |
| brotli | 3 | 0.825 | 23,374 | 0.2592 | 5 | yes |
| brotli | 4 | 1.249 | 22,948 | 0.2545 | 5 | yes |
| brotli | 5 | 1.905 | 21,885 | 0.2427 | 5 | yes |
| brotli | 6 | 2.139 | 21,770 | 0.2414 | 5 | yes |
| brotli | 7 | 2.477 | 21,692 | 0.2406 | 5 | yes |
| brotli | 8 | 2.864 | 21,642 | 0.2400 | 5 | yes |
| brotli | 9 | 8.617 | 21,554 | 0.2390 | 5 | yes |
| brotli | 10 | 36.609 | 18,928 | 0.2099 | 5 | yes |
| brotli | 11 | 105.880 | 18,418 | 0.2043 | 5 | yes |
| zstd | 1 | 0.258 | 24,558 | 0.2724 | 8 | yes |
| zstd | 2 | 0.291 | 24,331 | 0.2698 | 5 | yes |
| zstd | 3 | 0.335 | 24,100 | 0.2673 | 5 | yes |
| zstd | 4 | 0.408 | 24,021 | 0.2664 | 5 | yes |
| zstd | 5 | 0.741 | 23,309 | 0.2585 | 5 | yes |
| zstd | 6 | 1.033 | 22,411 | 0.2485 | 5 | yes |
| zstd | 7 | 1.334 | 21,911 | 0.2430 | 5 | yes |
| zstd | 8 | 1.532 | 21,844 | 0.2423 | 5 | yes |
| zstd | 9 | 1.857 | 21,770 | 0.2414 | 5 | yes |
| zstd | 10 | 2.417 | 21,703 | 0.2407 | 5 | yes |
| zstd | 11 | 3.871 | 21,560 | 0.2391 | 5 | yes |
| zstd | 12 | 5.296 | 21,531 | 0.2388 | 5 | yes |
| zstd | 13 | 5.814 | 21,345 | 0.2367 | 5 | yes |
| zstd | 14 | 8.196 | 20,515 | 0.2275 | 5 | yes |
| zstd | 15 | 9.858 | 20,378 | 0.2260 | 5 | yes |
| zstd | 16 | 13.727 | 20,209 | 0.2241 | 5 | yes |
| zstd | 17 | 18.381 | 20,179 | 0.2238 | 5 | yes |
| zstd | 18 | 27.580 | 20,175 | 0.2237 | 5 | yes |
| zstd | 19 | 28.153 | 20,183 | 0.2238 | 5 | yes |
| zstd | 20 | 33.170 | 20,146 | 0.2234 | 5 | yes |
| zstd | 21 | 46.710 | 20,138 | 0.2233 | 5 | yes |
| zstd | 22 | 54.655 | 20,133 | 0.2233 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.133 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.173 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.330 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.594 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.035 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.691 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.279 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.327 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.386 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.420 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.578 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.157 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.382 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.965 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.988 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.307 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.708 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.173 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 9.724 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 99.560 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 297.496 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.466 | 35,549 | 0.1532 | 8 | yes |
| zstd | 2 | 0.520 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.558 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.314 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.647 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.866 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.066 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.623 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.117 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.806 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.877 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 11.047 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.857 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.478 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.421 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 49.122 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.726 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 73.647 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 81.325 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 84.253 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 84.043 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 84.013 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,946,804 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 97.467 | 3,754,873 | 0.2216 | 5 | yes |
| gzip | 2 | 104.871 | 3,606,731 | 0.2128 | 5 | yes |
| gzip | 3 | 124.074 | 3,488,191 | 0.2058 | 5 | yes |
| gzip | 4 | 141.542 | 3,361,083 | 0.1983 | 5 | yes |
| gzip | 5 | 182.816 | 3,140,651 | 0.1853 | 5 | yes |
| gzip | 6 | 263.318 | 3,073,208 | 0.1813 | 5 | yes |
| gzip | 7 | 357.767 | 3,007,264 | 0.1775 | 5 | yes |
| gzip | 8 | 1036.792 | 2,939,923 | 0.1735 | 5 | yes |
| gzip | 9 | 1080.722 | 2,939,101 | 0.1734 | 5 | yes |
| brotli | 0 | 43.496 | 4,158,391 | 0.2454 | 5 | yes |
| brotli | 1 | 57.846 | 3,696,388 | 0.2181 | 5 | yes |
| brotli | 2 | 110.679 | 3,404,652 | 0.2009 | 5 | yes |
| brotli | 3 | 131.618 | 3,347,644 | 0.1975 | 5 | yes |
| brotli | 4 | 237.908 | 3,276,816 | 0.1934 | 5 | yes |
| brotli | 5 | 348.791 | 2,921,643 | 0.1724 | 5 | yes |
| brotli | 6 | 443.937 | 2,890,343 | 0.1706 | 5 | yes |
| brotli | 7 | 636.717 | 2,863,078 | 0.1689 | 5 | yes |
| brotli | 8 | 848.925 | 2,844,800 | 0.1679 | 5 | yes |
| brotli | 9 | 1110.248 | 2,834,664 | 0.1673 | 5 | yes |
| brotli | 10 | 11388.441 | 2,428,562 | 0.1433 | 5 | yes |
| brotli | 11 | 28188.469 | 2,309,167 | 0.1363 | 5 | yes |
| zstd | 1 | 42.521 | 3,504,403 | 0.2068 | 5 | yes |
| zstd | 2 | 52.339 | 3,581,907 | 0.2114 | 5 | yes |
| zstd | 3 | 66.649 | 3,507,920 | 0.2070 | 5 | yes |
| zstd | 4 | 76.862 | 3,502,711 | 0.2067 | 5 | yes |
| zstd | 5 | 136.777 | 3,287,468 | 0.1940 | 5 | yes |
| zstd | 6 | 197.848 | 3,067,272 | 0.1810 | 5 | yes |
| zstd | 7 | 238.684 | 3,028,718 | 0.1787 | 5 | yes |
| zstd | 8 | 314.087 | 2,926,446 | 0.1727 | 5 | yes |
| zstd | 9 | 349.691 | 2,936,848 | 0.1733 | 5 | yes |
| zstd | 10 | 441.251 | 2,900,202 | 0.1711 | 5 | yes |
| zstd | 11 | 677.634 | 2,873,028 | 0.1695 | 5 | yes |
| zstd | 12 | 688.125 | 2,872,898 | 0.1695 | 5 | yes |
| zstd | 13 | 1081.379 | 2,850,280 | 0.1682 | 5 | yes |
| zstd | 14 | 1287.409 | 2,835,958 | 0.1673 | 5 | yes |
| zstd | 15 | 1717.456 | 2,832,325 | 0.1671 | 5 | yes |
| zstd | 16 | 3271.915 | 2,645,548 | 0.1561 | 5 | yes |
| zstd | 17 | 4342.942 | 2,553,740 | 0.1507 | 5 | yes |
| zstd | 18 | 6510.205 | 2,535,042 | 0.1496 | 5 | yes |
| zstd | 19 | 7034.753 | 2,528,063 | 0.1492 | 5 | yes |
| zstd | 20 | 7026.865 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 21 | 7176.873 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 22 | 7477.684 | 2,521,575 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.507 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.490 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.386 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.262 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.461 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.426 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 28.822 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 31.527 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 31.645 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.663 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 4.634 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.550 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.513 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 16.647 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 28.222 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 33.123 | 377,100 | 0.4386 | 7 | yes |
| brotli | 7 | 46.354 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 54.654 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 65.724 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 936.533 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1904.316 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 2.992 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.717 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.095 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.288 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 9.735 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 12.952 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.579 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.254 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.053 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.648 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 30.660 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 31.510 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 76.805 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 74.871 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 77.043 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 125.436 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 145.228 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 183.395 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 200.425 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 198.298 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 209.850 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 207.665 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.123 | 5,506 | 0.2826 | 22 | yes |
| gzip | 2 | 0.145 | 5,424 | 0.2784 | 10 | yes |
| gzip | 3 | 0.182 | 5,356 | 0.2749 | 5 | yes |
| gzip | 4 | 0.199 | 5,145 | 0.2641 | 8 | yes |
| gzip | 5 | 0.293 | 4,896 | 0.2513 | 5 | yes |
| gzip | 6 | 0.354 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.503 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.656 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.640 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.062 | 6,028 | 0.3094 | 7 | yes |
| brotli | 1 | 0.073 | 5,737 | 0.2945 | 9 | yes |
| brotli | 2 | 0.131 | 4,944 | 0.2538 | 9 | yes |
| brotli | 3 | 0.179 | 4,930 | 0.2531 | 5 | yes |
| brotli | 4 | 0.271 | 4,898 | 0.2514 | 6 | yes |
| brotli | 5 | 0.448 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.487 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.549 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.598 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.723 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.330 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.206 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.053 | 5,379 | 0.2761 | 15 | yes |
| zstd | 2 | 0.057 | 5,176 | 0.2657 | 10 | yes |
| zstd | 3 | 0.073 | 5,169 | 0.2653 | 8 | yes |
| zstd | 4 | 0.071 | 5,154 | 0.2646 | 7 | yes |
| zstd | 5 | 0.168 | 5,074 | 0.2605 | 6 | yes |
| zstd | 6 | 0.210 | 4,797 | 0.2463 | 10 | yes |
| zstd | 7 | 0.268 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.310 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.365 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.465 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.622 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.691 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.017 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.740 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.832 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.578 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.580 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.572 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.022 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.068 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.062 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.056 | 4,348 | 0.2232 | 5 | yes |
