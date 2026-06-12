# Node Compression Benchmark

Last updated: 2026-06-12T21:18:50.173Z

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
| gzip | 1 | 1.013 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.085 | 30,134 | 0.3827 | 8 | yes |
| gzip | 3 | 1.218 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.358 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.774 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.116 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.371 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.770 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.782 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.334 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.783 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.858 | 29,394 | 0.3733 | 9 | yes |
| brotli | 3 | 0.987 | 29,072 | 0.3692 | 9 | yes |
| brotli | 4 | 1.432 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.057 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.207 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.782 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.761 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.494 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 35.728 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 99.861 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.245 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.295 | 30,069 | 0.3818 | 25 | no |
| zstd | 3 | 0.318 | 29,214 | 0.3710 | 13 | yes |
| zstd | 4 | 0.457 | 29,108 | 0.3696 | 25 | no |
| zstd | 5 | 1.351 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.806 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.525 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.627 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.851 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.063 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.425 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.582 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.464 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.679 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.875 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.179 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.163 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.116 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.782 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.746 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.800 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 20.797 | 26,282 | 0.3337 | 8 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 98.817 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 104.678 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 106.166 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 118.645 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 137.130 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 152.523 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 164.058 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 184.666 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 198.345 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.561 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.160 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.896 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 65.378 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 93.622 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 131.149 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 147.211 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 427.811 | 2,841,359 | 0.5192 | 9 | yes |
| brotli | 8 | 561.806 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 793.929 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6951.007 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13951.544 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.809 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.804 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 36.428 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 45.335 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 68.818 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 81.248 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 88.667 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 103.781 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 104.188 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 130.737 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 169.674 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 201.162 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 469.519 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 502.574 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 589.170 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 743.933 | 2,803,911 | 0.5123 | 7 | yes |
| zstd | 17 | 999.702 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1281.080 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1335.483 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1341.054 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1342.213 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1361.093 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.497 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.518 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.481 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 14.415 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 14.386 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 14.371 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 14.421 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 14.365 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 15.093 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.272 | 613,595 | 0.9981 | 13 | yes |
| brotli | 1 | 0.248 | 614,785 | 1.0000 | 12 | yes |
| brotli | 2 | 0.595 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.737 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.942 | 614,785 | 1.0000 | 16 | yes |
| brotli | 5 | 1.488 | 614,785 | 1.0000 | 14 | yes |
| brotli | 6 | 1.725 | 614,785 | 1.0000 | 5 | yes |
| brotli | 7 | 2.153 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.128 | 614,785 | 1.0000 | 22 | yes |
| brotli | 9 | 5.265 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 118.118 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 265.217 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.304 | 614,805 | 1.0000 | 7 | yes |
| zstd | 2 | 0.311 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.316 | 614,804 | 1.0000 | 14 | yes |
| zstd | 4 | 0.340 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.512 | 614,804 | 1.0000 | 9 | yes |
| zstd | 6 | 0.509 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.526 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.542 | 614,804 | 1.0000 | 9 | yes |
| zstd | 9 | 0.618 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.593 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.636 | 614,804 | 1.0000 | 18 | yes |
| zstd | 12 | 0.656 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.199 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 2.347 | 612,619 | 0.9965 | 23 | yes |
| zstd | 15 | 2.284 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 15.064 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 14.927 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 22.325 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 26.492 | 612,518 | 0.9963 | 20 | yes |
| zstd | 20 | 26.733 | 612,518 | 0.9963 | 9 | yes |
| zstd | 21 | 25.809 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 25.788 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,543 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.324 | 144,722 | 0.2962 | 5 | yes |
| gzip | 2 | 4.709 | 137,958 | 0.2824 | 5 | yes |
| gzip | 3 | 6.210 | 133,328 | 0.2729 | 5 | yes |
| gzip | 4 | 6.334 | 125,147 | 0.2562 | 5 | yes |
| gzip | 5 | 9.209 | 120,540 | 0.2467 | 5 | yes |
| gzip | 6 | 13.592 | 118,809 | 0.2432 | 5 | yes |
| gzip | 7 | 17.453 | 118,352 | 0.2423 | 5 | yes |
| gzip | 8 | 32.756 | 118,085 | 0.2417 | 5 | yes |
| gzip | 9 | 51.024 | 118,014 | 0.2416 | 5 | yes |
| brotli | 0 | 1.561 | 149,209 | 0.3054 | 5 | yes |
| brotli | 1 | 2.184 | 136,872 | 0.2802 | 5 | yes |
| brotli | 2 | 4.042 | 128,691 | 0.2634 | 5 | yes |
| brotli | 3 | 4.636 | 126,178 | 0.2583 | 5 | yes |
| brotli | 4 | 6.552 | 122,074 | 0.2499 | 5 | yes |
| brotli | 5 | 10.137 | 112,240 | 0.2297 | 5 | yes |
| brotli | 6 | 11.745 | 109,635 | 0.2244 | 5 | yes |
| brotli | 7 | 14.449 | 107,650 | 0.2203 | 5 | yes |
| brotli | 8 | 17.160 | 106,631 | 0.2183 | 5 | yes |
| brotli | 9 | 22.107 | 105,723 | 0.2164 | 5 | yes |
| brotli | 10 | 292.631 | 98,258 | 0.2011 | 5 | yes |
| brotli | 11 | 734.294 | 96,108 | 0.1967 | 5 | yes |
| zstd | 1 | 1.763 | 137,573 | 0.2816 | 5 | yes |
| zstd | 2 | 1.922 | 133,375 | 0.2730 | 5 | yes |
| zstd | 3 | 2.238 | 125,750 | 0.2574 | 5 | yes |
| zstd | 4 | 2.401 | 125,549 | 0.2570 | 5 | yes |
| zstd | 5 | 4.610 | 116,894 | 0.2393 | 5 | yes |
| zstd | 6 | 6.277 | 113,004 | 0.2313 | 5 | yes |
| zstd | 7 | 7.022 | 111,439 | 0.2281 | 5 | yes |
| zstd | 8 | 9.008 | 110,653 | 0.2265 | 5 | yes |
| zstd | 9 | 8.997 | 110,653 | 0.2265 | 5 | yes |
| zstd | 10 | 10.590 | 109,644 | 0.2244 | 5 | yes |
| zstd | 11 | 13.151 | 109,043 | 0.2232 | 5 | yes |
| zstd | 12 | 13.131 | 109,043 | 0.2232 | 5 | yes |
| zstd | 13 | 27.163 | 107,872 | 0.2208 | 5 | yes |
| zstd | 14 | 32.795 | 107,279 | 0.2196 | 5 | yes |
| zstd | 15 | 37.131 | 107,109 | 0.2192 | 5 | yes |
| zstd | 16 | 64.745 | 101,632 | 0.2080 | 5 | yes |
| zstd | 17 | 74.576 | 100,728 | 0.2062 | 5 | yes |
| zstd | 18 | 104.204 | 99,953 | 0.2046 | 5 | yes |
| zstd | 19 | 133.441 | 99,848 | 0.2044 | 5 | yes |
| zstd | 20 | 133.794 | 99,848 | 0.2044 | 5 | yes |
| zstd | 21 | 133.859 | 99,841 | 0.2044 | 5 | yes |
| zstd | 22 | 134.946 | 99,841 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.079 | 4,987 | 0.2897 | 20 | yes |
| gzip | 2 | 0.086 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.091 | 4,806 | 0.2791 | 15 | yes |
| gzip | 4 | 0.120 | 4,530 | 0.2631 | 13 | yes |
| gzip | 5 | 0.226 | 4,441 | 0.2579 | 25 | no |
| gzip | 6 | 0.227 | 4,425 | 0.2570 | 25 | no |
| gzip | 7 | 0.220 | 4,418 | 0.2566 | 20 | yes |
| gzip | 8 | 0.395 | 4,419 | 0.2567 | 17 | yes |
| gzip | 9 | 0.395 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.054 | 5,235 | 0.3041 | 7 | yes |
| brotli | 1 | 0.070 | 5,134 | 0.2982 | 12 | yes |
| brotli | 2 | 0.096 | 4,741 | 0.2754 | 21 | yes |
| brotli | 3 | 0.123 | 4,650 | 0.2701 | 13 | yes |
| brotli | 4 | 0.191 | 4,555 | 0.2646 | 22 | yes |
| brotli | 5 | 0.288 | 4,276 | 0.2484 | 21 | yes |
| brotli | 6 | 0.305 | 4,275 | 0.2483 | 22 | yes |
| brotli | 7 | 0.434 | 4,264 | 0.2477 | 7 | yes |
| brotli | 8 | 0.401 | 4,257 | 0.2473 | 23 | yes |
| brotli | 9 | 0.564 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.162 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.261 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.063 | 4,923 | 0.2859 | 25 | no |
| zstd | 2 | 0.061 | 4,868 | 0.2827 | 25 | no |
| zstd | 3 | 0.068 | 4,717 | 0.2740 | 6 | yes |
| zstd | 4 | 0.069 | 4,679 | 0.2718 | 9 | yes |
| zstd | 5 | 0.136 | 4,519 | 0.2625 | 11 | yes |
| zstd | 6 | 0.170 | 4,437 | 0.2577 | 8 | yes |
| zstd | 7 | 0.193 | 4,437 | 0.2577 | 20 | yes |
| zstd | 8 | 0.237 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.237 | 4,420 | 0.2567 | 19 | yes |
| zstd | 10 | 0.314 | 4,410 | 0.2561 | 11 | yes |
| zstd | 11 | 0.613 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.642 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.923 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.416 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.510 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.174 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.309 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.293 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.493 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.511 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.497 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.526 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.054 | 3,220 | 0.4497 | 21 | yes |
| gzip | 2 | 0.055 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.056 | 3,153 | 0.4403 | 12 | yes |
| gzip | 4 | 0.065 | 3,095 | 0.4322 | 9 | yes |
| gzip | 5 | 0.077 | 3,051 | 0.4261 | 9 | yes |
| gzip | 6 | 0.079 | 3,044 | 0.4251 | 9 | yes |
| gzip | 7 | 0.081 | 3,042 | 0.4248 | 11 | yes |
| gzip | 8 | 0.094 | 3,042 | 0.4248 | 25 | no |
| gzip | 9 | 0.075 | 3,042 | 0.4248 | 9 | yes |
| brotli | 0 | 0.030 | 3,549 | 0.4956 | 13 | yes |
| brotli | 1 | 0.041 | 3,381 | 0.4721 | 12 | yes |
| brotli | 2 | 0.058 | 3,263 | 0.4557 | 17 | yes |
| brotli | 3 | 0.076 | 3,216 | 0.4491 | 13 | yes |
| brotli | 4 | 0.122 | 3,147 | 0.4395 | 13 | yes |
| brotli | 5 | 0.155 | 2,963 | 0.4138 | 15 | yes |
| brotli | 6 | 0.178 | 2,952 | 0.4122 | 12 | yes |
| brotli | 7 | 0.178 | 2,944 | 0.4111 | 15 | yes |
| brotli | 8 | 0.173 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 0.213 | 2,945 | 0.4113 | 20 | yes |
| brotli | 10 | 3.274 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.076 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.031 | 3,254 | 0.4544 | 13 | yes |
| zstd | 2 | 0.033 | 3,200 | 0.4469 | 9 | yes |
| zstd | 3 | 0.040 | 3,176 | 0.4435 | 9 | yes |
| zstd | 4 | 0.060 | 3,102 | 0.4332 | 8 | yes |
| zstd | 5 | 0.070 | 3,079 | 0.4300 | 8 | yes |
| zstd | 6 | 0.081 | 3,060 | 0.4273 | 9 | yes |
| zstd | 7 | 0.095 | 3,053 | 0.4263 | 10 | yes |
| zstd | 8 | 0.097 | 3,053 | 0.4263 | 5 | yes |
| zstd | 9 | 0.116 | 3,055 | 0.4266 | 25 | no |
| zstd | 10 | 0.118 | 3,055 | 0.4266 | 25 | no |
| zstd | 11 | 0.227 | 3,044 | 0.4251 | 16 | yes |
| zstd | 12 | 0.397 | 3,011 | 0.4205 | 9 | yes |
| zstd | 13 | 0.573 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.553 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.572 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.072 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.066 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.065 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.106 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.057 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.108 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.094 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,475 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.093 | 67,036 | 0.4076 | 5 | yes |
| gzip | 2 | 2.275 | 65,451 | 0.3979 | 5 | yes |
| gzip | 3 | 2.597 | 64,421 | 0.3917 | 5 | yes |
| gzip | 4 | 2.856 | 62,075 | 0.3774 | 5 | yes |
| gzip | 5 | 3.952 | 60,450 | 0.3675 | 5 | yes |
| gzip | 6 | 4.941 | 60,174 | 0.3659 | 5 | yes |
| gzip | 7 | 5.413 | 60,131 | 0.3656 | 5 | yes |
| gzip | 8 | 5.863 | 60,115 | 0.3655 | 5 | yes |
| gzip | 9 | 5.887 | 60,115 | 0.3655 | 5 | yes |
| brotli | 0 | 0.597 | 71,306 | 0.4335 | 11 | yes |
| brotli | 1 | 0.968 | 68,383 | 0.4158 | 5 | yes |
| brotli | 2 | 1.742 | 63,134 | 0.3839 | 5 | yes |
| brotli | 3 | 2.077 | 62,525 | 0.3801 | 5 | yes |
| brotli | 4 | 3.044 | 61,271 | 0.3725 | 5 | yes |
| brotli | 5 | 4.559 | 58,043 | 0.3529 | 5 | yes |
| brotli | 6 | 5.139 | 57,682 | 0.3507 | 5 | yes |
| brotli | 7 | 6.217 | 57,387 | 0.3489 | 5 | yes |
| brotli | 8 | 6.735 | 57,305 | 0.3484 | 5 | yes |
| brotli | 9 | 7.858 | 57,230 | 0.3480 | 5 | yes |
| brotli | 10 | 104.214 | 54,405 | 0.3308 | 5 | yes |
| brotli | 11 | 254.713 | 53,493 | 0.3252 | 5 | yes |
| zstd | 1 | 0.643 | 66,378 | 0.4036 | 5 | yes |
| zstd | 2 | 0.789 | 63,336 | 0.3851 | 5 | yes |
| zstd | 3 | 1.004 | 62,859 | 0.3822 | 5 | yes |
| zstd | 4 | 1.840 | 60,996 | 0.3709 | 5 | yes |
| zstd | 5 | 2.053 | 60,478 | 0.3677 | 5 | yes |
| zstd | 6 | 2.481 | 59,586 | 0.3623 | 5 | yes |
| zstd | 7 | 2.953 | 58,792 | 0.3575 | 5 | yes |
| zstd | 8 | 3.648 | 58,314 | 0.3545 | 5 | yes |
| zstd | 9 | 4.269 | 58,070 | 0.3531 | 5 | yes |
| zstd | 10 | 5.035 | 57,939 | 0.3523 | 5 | yes |
| zstd | 11 | 8.466 | 57,635 | 0.3504 | 5 | yes |
| zstd | 12 | 8.595 | 57,621 | 0.3503 | 5 | yes |
| zstd | 13 | 15.071 | 56,599 | 0.3441 | 5 | yes |
| zstd | 14 | 17.699 | 56,168 | 0.3415 | 5 | yes |
| zstd | 15 | 18.100 | 56,140 | 0.3413 | 5 | yes |
| zstd | 16 | 23.367 | 55,973 | 0.3403 | 5 | yes |
| zstd | 17 | 23.223 | 55,973 | 0.3403 | 5 | yes |
| zstd | 18 | 39.851 | 55,896 | 0.3398 | 5 | yes |
| zstd | 19 | 39.862 | 55,896 | 0.3398 | 5 | yes |
| zstd | 20 | 39.671 | 55,896 | 0.3398 | 5 | yes |
| zstd | 21 | 39.871 | 55,896 | 0.3398 | 5 | yes |
| zstd | 22 | 39.905 | 55,896 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.931 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.967 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.114 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.206 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.627 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.095 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.505 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.404 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.396 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.210 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.376 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.729 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.862 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.352 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.944 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.184 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.584 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.721 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.323 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 41.816 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 100.170 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.209 | 28,919 | 0.3949 | 11 | yes |
| zstd | 2 | 0.231 | 28,008 | 0.3824 | 10 | yes |
| zstd | 3 | 0.273 | 27,463 | 0.3750 | 11 | yes |
| zstd | 4 | 0.338 | 27,100 | 0.3700 | 15 | yes |
| zstd | 5 | 0.800 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.095 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.319 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.451 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.665 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.935 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.236 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.366 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.320 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.424 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.516 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.735 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.790 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.796 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.693 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.668 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.699 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.679 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.664 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.770 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.919 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 1.010 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.450 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 2.238 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 3.008 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 8.929 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 8.956 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.182 | 25,901 | 0.3420 | 16 | yes |
| brotli | 1 | 0.314 | 23,906 | 0.3156 | 17 | yes |
| brotli | 2 | 0.669 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.806 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.170 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.727 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.973 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.371 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.737 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.622 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 31.553 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 89.306 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.203 | 22,639 | 0.2989 | 17 | yes |
| zstd | 2 | 0.225 | 22,433 | 0.2962 | 11 | yes |
| zstd | 3 | 0.251 | 22,208 | 0.2932 | 14 | yes |
| zstd | 4 | 0.385 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.706 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.016 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.261 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.443 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.804 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.337 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.294 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.324 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.961 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 6.845 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 7.980 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.538 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 13.942 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.580 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 19.995 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 23.902 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.481 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 45.430 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.224 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.298 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.505 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.786 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.325 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.231 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.998 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.426 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.435 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.325 | 43,268 | 0.1864 | 13 | yes |
| brotli | 1 | 0.657 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.229 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.461 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.149 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.031 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.449 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.819 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.276 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.324 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 101.973 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 303.346 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.423 | 35,549 | 0.1532 | 25 | no |
| zstd | 2 | 0.508 | 34,301 | 0.1478 | 6 | yes |
| zstd | 3 | 0.588 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.476 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.727 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.968 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.194 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.681 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.303 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.921 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.090 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.913 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.319 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.113 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.063 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.245 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.223 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 72.693 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.985 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 84.360 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.489 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 83.891 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,946,804 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 103.404 | 3,754,873 | 0.2216 | 5 | yes |
| gzip | 2 | 112.938 | 3,606,731 | 0.2128 | 5 | yes |
| gzip | 3 | 140.829 | 3,488,191 | 0.2058 | 5 | yes |
| gzip | 4 | 155.080 | 3,361,083 | 0.1983 | 5 | yes |
| gzip | 5 | 206.864 | 3,140,651 | 0.1853 | 5 | yes |
| gzip | 6 | 320.818 | 3,073,208 | 0.1813 | 5 | yes |
| gzip | 7 | 447.989 | 3,007,264 | 0.1775 | 5 | yes |
| gzip | 8 | 1285.841 | 2,939,923 | 0.1735 | 5 | yes |
| gzip | 9 | 1337.801 | 2,939,101 | 0.1734 | 5 | yes |
| brotli | 0 | 44.571 | 4,158,391 | 0.2454 | 5 | yes |
| brotli | 1 | 67.090 | 3,696,388 | 0.2181 | 5 | yes |
| brotli | 2 | 117.131 | 3,404,652 | 0.2009 | 5 | yes |
| brotli | 3 | 137.917 | 3,347,644 | 0.1975 | 5 | yes |
| brotli | 4 | 220.408 | 3,276,816 | 0.1934 | 7 | yes |
| brotli | 5 | 336.326 | 2,921,643 | 0.1724 | 5 | yes |
| brotli | 6 | 403.347 | 2,890,343 | 0.1706 | 5 | yes |
| brotli | 7 | 579.074 | 2,863,078 | 0.1689 | 5 | yes |
| brotli | 8 | 765.480 | 2,844,800 | 0.1679 | 5 | yes |
| brotli | 9 | 1032.140 | 2,834,664 | 0.1673 | 5 | yes |
| brotli | 10 | 11866.868 | 2,428,562 | 0.1433 | 5 | yes |
| brotli | 11 | 29093.713 | 2,309,167 | 0.1363 | 5 | yes |
| zstd | 1 | 44.880 | 3,504,403 | 0.2068 | 5 | yes |
| zstd | 2 | 54.800 | 3,581,907 | 0.2114 | 5 | yes |
| zstd | 3 | 67.675 | 3,507,920 | 0.2070 | 5 | yes |
| zstd | 4 | 74.303 | 3,502,711 | 0.2067 | 12 | yes |
| zstd | 5 | 142.407 | 3,287,468 | 0.1940 | 5 | yes |
| zstd | 6 | 205.205 | 3,067,272 | 0.1810 | 5 | yes |
| zstd | 7 | 236.223 | 3,028,718 | 0.1787 | 5 | yes |
| zstd | 8 | 306.626 | 2,926,446 | 0.1727 | 5 | yes |
| zstd | 9 | 324.551 | 2,936,848 | 0.1733 | 5 | yes |
| zstd | 10 | 413.816 | 2,900,202 | 0.1711 | 5 | yes |
| zstd | 11 | 610.134 | 2,873,028 | 0.1695 | 5 | yes |
| zstd | 12 | 681.887 | 2,872,898 | 0.1695 | 5 | yes |
| zstd | 13 | 936.137 | 2,850,280 | 0.1682 | 5 | yes |
| zstd | 14 | 1131.229 | 2,835,958 | 0.1673 | 5 | yes |
| zstd | 15 | 1551.902 | 2,832,325 | 0.1671 | 5 | yes |
| zstd | 16 | 2959.906 | 2,645,548 | 0.1561 | 5 | yes |
| zstd | 17 | 4021.942 | 2,553,740 | 0.1507 | 5 | yes |
| zstd | 18 | 5861.814 | 2,535,042 | 0.1496 | 5 | yes |
| zstd | 19 | 6512.061 | 2,528,063 | 0.1492 | 5 | yes |
| zstd | 20 | 6935.662 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 21 | 6665.609 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 22 | 6758.353 | 2,521,575 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.736 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.934 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.599 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.356 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 27.170 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 32.477 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 34.434 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.997 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.994 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.092 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.648 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.486 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.888 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.771 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.529 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.745 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 47.579 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 55.527 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 72.510 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 973.035 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2076.252 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.243 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.107 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.548 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.552 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.721 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.661 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.829 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.289 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.552 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.325 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.769 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.728 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 51.020 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 53.337 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 53.934 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 93.197 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 118.600 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 153.794 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 169.735 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 169.292 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 169.579 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 170.813 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.083 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.085 | 5,424 | 0.2784 | 25 | yes |
| gzip | 3 | 0.098 | 5,356 | 0.2749 | 22 | yes |
| gzip | 4 | 0.138 | 5,145 | 0.2641 | 18 | yes |
| gzip | 5 | 0.195 | 4,896 | 0.2513 | 25 | no |
| gzip | 6 | 0.313 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.490 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.687 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.674 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.057 | 6,028 | 0.3094 | 12 | yes |
| brotli | 1 | 0.077 | 5,737 | 0.2945 | 9 | yes |
| brotli | 2 | 0.120 | 4,944 | 0.2538 | 11 | yes |
| brotli | 3 | 0.141 | 4,930 | 0.2531 | 19 | yes |
| brotli | 4 | 0.222 | 4,898 | 0.2514 | 23 | yes |
| brotli | 5 | 0.464 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.510 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.597 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.637 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.774 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.447 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.171 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.055 | 5,379 | 0.2761 | 9 | yes |
| zstd | 2 | 0.060 | 5,176 | 0.2657 | 9 | yes |
| zstd | 3 | 0.072 | 5,169 | 0.2653 | 12 | yes |
| zstd | 4 | 0.075 | 5,154 | 0.2646 | 6 | yes |
| zstd | 5 | 0.143 | 5,074 | 0.2605 | 9 | yes |
| zstd | 6 | 0.185 | 4,797 | 0.2463 | 12 | yes |
| zstd | 7 | 0.223 | 4,702 | 0.2414 | 12 | yes |
| zstd | 8 | 0.253 | 4,696 | 0.2411 | 10 | yes |
| zstd | 9 | 0.339 | 4,690 | 0.2408 | 9 | yes |
| zstd | 10 | 0.451 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.606 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.652 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.986 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.721 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.823 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.565 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.539 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.532 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.960 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.021 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 4.998 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 4.990 | 4,348 | 0.2232 | 5 | yes |
