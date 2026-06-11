# Node Compression Benchmark

Last updated: 2026-06-11T12:02:38.817Z

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
| gzip | 1 | 0.969 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.029 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.115 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.192 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.567 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.792 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 1.942 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.166 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.155 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.330 | 33,111 | 0.4205 | 5 | yes |
| brotli | 1 | 0.607 | 31,803 | 0.4039 | 7 | yes |
| brotli | 2 | 0.751 | 29,394 | 0.3733 | 9 | yes |
| brotli | 3 | 0.896 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.425 | 28,392 | 0.3605 | 7 | yes |
| brotli | 5 | 2.134 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.247 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 2.599 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.705 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 7.506 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 34.732 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 98.126 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.294 | 31,062 | 0.3944 | 9 | yes |
| zstd | 2 | 0.539 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.637 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.750 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.885 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.131 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.388 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.568 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.694 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.904 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.494 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.617 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.336 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.476 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.573 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 9.977 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.070 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.152 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.703 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.375 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.395 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.289 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 89.824 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 90.001 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 93.112 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 104.722 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 120.664 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.441 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 140.923 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 156.833 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 169.705 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 18.562 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 25.217 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 45.041 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 55.883 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 104.520 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 138.858 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 159.245 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 570.741 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 744.594 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 937.209 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6685.919 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13007.038 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.715 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 21.695 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 37.309 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 46.947 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.963 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 79.355 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 86.996 | 2,946,701 | 0.5384 | 6 | yes |
| zstd | 8 | 109.429 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 106.780 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 138.532 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 220.482 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 276.419 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 539.272 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 534.352 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 652.091 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 855.123 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 993.412 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1272.140 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1412.353 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1355.054 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1341.640 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1384.083 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.193 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.180 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.166 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.743 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.825 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.807 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.810 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.827 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.804 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.330 | 613,595 | 0.9981 | 8 | yes |
| brotli | 1 | 0.355 | 614,785 | 1.0000 | 5 | yes |
| brotli | 2 | 0.680 | 614,791 | 1.0000 | 11 | yes |
| brotli | 3 | 0.773 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.861 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.543 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.985 | 614,785 | 1.0000 | 5 | yes |
| brotli | 7 | 2.138 | 614,785 | 1.0000 | 24 | yes |
| brotli | 8 | 2.194 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 6.442 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 123.660 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 272.948 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.386 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.425 | 614,804 | 1.0000 | 6 | yes |
| zstd | 3 | 0.475 | 614,804 | 1.0000 | 25 | no |
| zstd | 4 | 0.484 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.620 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.613 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.724 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.719 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.941 | 614,804 | 1.0000 | 8 | yes |
| zstd | 10 | 0.945 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 1.029 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 1.024 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 3.220 | 612,619 | 0.9965 | 9 | yes |
| zstd | 14 | 3.430 | 612,619 | 0.9965 | 6 | yes |
| zstd | 15 | 3.355 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 28.391 | 612,536 | 0.9963 | 25 | no |
| zstd | 17 | 33.629 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 45.948 | 612,519 | 0.9963 | 7 | yes |
| zstd | 19 | 55.321 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 53.511 | 612,518 | 0.9963 | 7 | yes |
| zstd | 21 | 52.427 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 55.054 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,543 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.982 | 144,722 | 0.2962 | 5 | yes |
| gzip | 2 | 4.270 | 137,958 | 0.2824 | 5 | yes |
| gzip | 3 | 5.216 | 133,328 | 0.2729 | 5 | yes |
| gzip | 4 | 5.504 | 125,147 | 0.2562 | 5 | yes |
| gzip | 5 | 7.819 | 120,540 | 0.2467 | 5 | yes |
| gzip | 6 | 11.080 | 118,809 | 0.2432 | 5 | yes |
| gzip | 7 | 13.738 | 118,352 | 0.2423 | 5 | yes |
| gzip | 8 | 27.952 | 118,085 | 0.2417 | 5 | yes |
| gzip | 9 | 43.445 | 118,014 | 0.2416 | 5 | yes |
| brotli | 0 | 1.417 | 149,209 | 0.3054 | 5 | yes |
| brotli | 1 | 1.837 | 136,872 | 0.2802 | 5 | yes |
| brotli | 2 | 3.672 | 128,691 | 0.2634 | 5 | yes |
| brotli | 3 | 4.355 | 126,178 | 0.2583 | 5 | yes |
| brotli | 4 | 6.137 | 122,074 | 0.2499 | 5 | yes |
| brotli | 5 | 10.172 | 112,240 | 0.2297 | 5 | yes |
| brotli | 6 | 11.498 | 109,635 | 0.2244 | 5 | yes |
| brotli | 7 | 13.924 | 107,650 | 0.2203 | 5 | yes |
| brotli | 8 | 16.978 | 106,631 | 0.2183 | 5 | yes |
| brotli | 9 | 25.144 | 105,723 | 0.2164 | 5 | yes |
| brotli | 10 | 279.604 | 98,258 | 0.2011 | 5 | yes |
| brotli | 11 | 714.359 | 96,108 | 0.1967 | 5 | yes |
| zstd | 1 | 1.597 | 137,573 | 0.2816 | 5 | yes |
| zstd | 2 | 1.652 | 133,375 | 0.2730 | 5 | yes |
| zstd | 3 | 1.948 | 125,750 | 0.2574 | 5 | yes |
| zstd | 4 | 2.218 | 125,549 | 0.2570 | 5 | yes |
| zstd | 5 | 4.167 | 116,894 | 0.2393 | 5 | yes |
| zstd | 6 | 5.685 | 113,004 | 0.2313 | 5 | yes |
| zstd | 7 | 6.635 | 111,439 | 0.2281 | 5 | yes |
| zstd | 8 | 8.283 | 110,653 | 0.2265 | 5 | yes |
| zstd | 9 | 8.243 | 110,653 | 0.2265 | 5 | yes |
| zstd | 10 | 9.960 | 109,644 | 0.2244 | 5 | yes |
| zstd | 11 | 12.851 | 109,043 | 0.2232 | 5 | yes |
| zstd | 12 | 13.263 | 109,043 | 0.2232 | 5 | yes |
| zstd | 13 | 30.321 | 107,872 | 0.2208 | 5 | yes |
| zstd | 14 | 35.825 | 107,279 | 0.2196 | 5 | yes |
| zstd | 15 | 40.613 | 107,109 | 0.2192 | 5 | yes |
| zstd | 16 | 68.126 | 101,632 | 0.2080 | 5 | yes |
| zstd | 17 | 76.317 | 100,728 | 0.2062 | 5 | yes |
| zstd | 18 | 106.163 | 99,953 | 0.2046 | 5 | yes |
| zstd | 19 | 135.874 | 99,848 | 0.2044 | 5 | yes |
| zstd | 20 | 134.915 | 99,848 | 0.2044 | 5 | yes |
| zstd | 21 | 135.191 | 99,841 | 0.2044 | 5 | yes |
| zstd | 22 | 135.706 | 99,841 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.116 | 4,987 | 0.2897 | 15 | yes |
| gzip | 2 | 0.130 | 4,874 | 0.2831 | 11 | yes |
| gzip | 3 | 0.140 | 4,806 | 0.2791 | 16 | yes |
| gzip | 4 | 0.178 | 4,530 | 0.2631 | 5 | yes |
| gzip | 5 | 0.222 | 4,441 | 0.2579 | 9 | yes |
| gzip | 6 | 0.273 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.304 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.451 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.467 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.052 | 5,235 | 0.3041 | 12 | yes |
| brotli | 1 | 0.076 | 5,134 | 0.2982 | 6 | yes |
| brotli | 2 | 0.123 | 4,741 | 0.2754 | 16 | yes |
| brotli | 3 | 0.166 | 4,650 | 0.2701 | 5 | yes |
| brotli | 4 | 0.256 | 4,555 | 0.2646 | 8 | yes |
| brotli | 5 | 0.373 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.395 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.433 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.441 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 4.444 | 4,244 | 0.2465 | 10 | yes |
| brotli | 10 | 6.942 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.181 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.049 | 4,923 | 0.2859 | 15 | yes |
| zstd | 2 | 0.054 | 4,868 | 0.2827 | 13 | yes |
| zstd | 3 | 0.065 | 4,717 | 0.2740 | 10 | yes |
| zstd | 4 | 0.065 | 4,679 | 0.2718 | 12 | yes |
| zstd | 5 | 0.151 | 4,519 | 0.2625 | 7 | yes |
| zstd | 6 | 0.199 | 4,437 | 0.2577 | 17 | yes |
| zstd | 7 | 0.245 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.274 | 4,426 | 0.2571 | 6 | yes |
| zstd | 9 | 0.299 | 4,420 | 0.2567 | 6 | yes |
| zstd | 10 | 0.349 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.642 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.683 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.914 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.372 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.458 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.148 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.295 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.267 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.462 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.443 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.442 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.431 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.054 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.056 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.077 | 3,153 | 0.4403 | 9 | yes |
| gzip | 4 | 0.084 | 3,095 | 0.4322 | 14 | yes |
| gzip | 5 | 0.113 | 3,051 | 0.4261 | 7 | yes |
| gzip | 6 | 0.120 | 3,044 | 0.4251 | 5 | yes |
| gzip | 7 | 0.118 | 3,042 | 0.4248 | 6 | yes |
| gzip | 8 | 0.110 | 3,042 | 0.4248 | 12 | yes |
| gzip | 9 | 0.106 | 3,042 | 0.4248 | 8 | yes |
| brotli | 0 | 0.031 | 3,549 | 0.4956 | 13 | yes |
| brotli | 1 | 0.066 | 3,381 | 0.4721 | 25 | no |
| brotli | 2 | 0.114 | 3,263 | 0.4557 | 5 | yes |
| brotli | 3 | 0.148 | 3,216 | 0.4491 | 5 | yes |
| brotli | 4 | 0.164 | 3,147 | 0.4395 | 25 | no |
| brotli | 5 | 0.208 | 2,963 | 0.4138 | 25 | no |
| brotli | 6 | 0.220 | 2,952 | 0.4122 | 5 | yes |
| brotli | 7 | 0.254 | 2,944 | 0.4111 | 11 | yes |
| brotli | 8 | 0.267 | 2,944 | 0.4111 | 9 | yes |
| brotli | 9 | 4.343 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.164 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.238 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.031 | 3,254 | 0.4544 | 8 | yes |
| zstd | 2 | 0.033 | 3,200 | 0.4469 | 5 | yes |
| zstd | 3 | 0.039 | 3,176 | 0.4435 | 9 | yes |
| zstd | 4 | 0.068 | 3,102 | 0.4332 | 5 | yes |
| zstd | 5 | 0.082 | 3,079 | 0.4300 | 6 | yes |
| zstd | 6 | 0.087 | 3,060 | 0.4273 | 15 | yes |
| zstd | 7 | 0.106 | 3,053 | 0.4263 | 5 | yes |
| zstd | 8 | 0.099 | 3,053 | 0.4263 | 5 | yes |
| zstd | 9 | 0.177 | 3,055 | 0.4266 | 9 | yes |
| zstd | 10 | 0.179 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.323 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.471 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.594 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.588 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.586 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.152 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.144 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.138 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.135 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.150 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.146 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.164 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,475 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.888 | 67,036 | 0.4076 | 5 | yes |
| gzip | 2 | 2.071 | 65,451 | 0.3979 | 5 | yes |
| gzip | 3 | 2.295 | 64,421 | 0.3917 | 5 | yes |
| gzip | 4 | 2.550 | 62,075 | 0.3774 | 5 | yes |
| gzip | 5 | 3.428 | 60,450 | 0.3675 | 5 | yes |
| gzip | 6 | 4.225 | 60,174 | 0.3659 | 5 | yes |
| gzip | 7 | 4.533 | 60,131 | 0.3656 | 5 | yes |
| gzip | 8 | 4.851 | 60,115 | 0.3655 | 5 | yes |
| gzip | 9 | 4.836 | 60,115 | 0.3655 | 5 | yes |
| brotli | 0 | 0.603 | 71,306 | 0.4335 | 9 | yes |
| brotli | 1 | 0.772 | 68,383 | 0.4158 | 5 | yes |
| brotli | 2 | 1.565 | 63,134 | 0.3839 | 5 | yes |
| brotli | 3 | 1.834 | 62,525 | 0.3801 | 5 | yes |
| brotli | 4 | 2.822 | 61,271 | 0.3725 | 5 | yes |
| brotli | 5 | 4.487 | 58,043 | 0.3529 | 5 | yes |
| brotli | 6 | 4.895 | 57,682 | 0.3507 | 5 | yes |
| brotli | 7 | 5.801 | 57,387 | 0.3489 | 5 | yes |
| brotli | 8 | 6.305 | 57,305 | 0.3484 | 5 | yes |
| brotli | 9 | 11.316 | 57,230 | 0.3480 | 5 | yes |
| brotli | 10 | 95.554 | 54,405 | 0.3308 | 5 | yes |
| brotli | 11 | 240.702 | 53,493 | 0.3252 | 5 | yes |
| zstd | 1 | 0.585 | 66,378 | 0.4036 | 9 | yes |
| zstd | 2 | 0.766 | 63,336 | 0.3851 | 5 | yes |
| zstd | 3 | 0.888 | 62,859 | 0.3822 | 5 | yes |
| zstd | 4 | 1.638 | 60,996 | 0.3709 | 5 | yes |
| zstd | 5 | 1.873 | 60,478 | 0.3677 | 5 | yes |
| zstd | 6 | 2.290 | 59,586 | 0.3623 | 5 | yes |
| zstd | 7 | 2.795 | 58,792 | 0.3575 | 5 | yes |
| zstd | 8 | 3.478 | 58,314 | 0.3545 | 5 | yes |
| zstd | 9 | 3.974 | 58,070 | 0.3531 | 5 | yes |
| zstd | 10 | 4.749 | 57,939 | 0.3523 | 5 | yes |
| zstd | 11 | 8.489 | 57,635 | 0.3504 | 5 | yes |
| zstd | 12 | 8.919 | 57,621 | 0.3503 | 5 | yes |
| zstd | 13 | 14.438 | 56,599 | 0.3441 | 5 | yes |
| zstd | 14 | 17.594 | 56,168 | 0.3415 | 5 | yes |
| zstd | 15 | 17.339 | 56,140 | 0.3413 | 5 | yes |
| zstd | 16 | 23.498 | 55,973 | 0.3403 | 5 | yes |
| zstd | 17 | 23.450 | 55,973 | 0.3403 | 5 | yes |
| zstd | 18 | 40.228 | 55,896 | 0.3398 | 5 | yes |
| zstd | 19 | 39.609 | 55,896 | 0.3398 | 5 | yes |
| zstd | 20 | 39.682 | 55,896 | 0.3398 | 5 | yes |
| zstd | 21 | 39.847 | 55,896 | 0.3398 | 5 | yes |
| zstd | 22 | 40.627 | 55,896 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.781 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.839 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.959 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.053 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.364 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.714 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.987 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.576 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.571 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.259 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.336 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.646 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.777 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.282 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.864 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.062 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.454 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.567 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.075 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 39.878 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 98.255 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.224 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.272 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.324 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.399 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.738 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.008 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.225 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.367 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.534 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.807 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.241 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.427 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.130 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.299 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.331 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.677 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.727 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.712 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.565 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.504 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.749 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.571 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.589 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.697 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.794 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.876 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.229 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.830 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.489 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 10.782 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 10.905 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.233 | 25,901 | 0.3420 | 5 | yes |
| brotli | 1 | 0.322 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.615 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.727 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.096 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.697 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.911 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.242 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.642 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.376 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 29.893 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 89.880 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.258 | 22,639 | 0.2989 | 5 | yes |
| zstd | 2 | 0.270 | 22,433 | 0.2962 | 5 | yes |
| zstd | 3 | 0.304 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.374 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.660 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 0.923 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.153 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.357 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.674 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.190 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.345 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.384 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.728 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 6.579 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 7.787 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.530 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 13.863 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.145 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 19.730 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 23.773 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 37.069 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 44.260 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.135 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.163 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.317 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.605 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.018 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.688 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.272 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.322 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.373 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.413 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.572 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.159 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.385 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.960 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.999 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.258 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.632 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.098 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 4.923 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 98.787 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 299.182 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.446 | 35,549 | 0.1532 | 7 | yes |
| zstd | 2 | 0.521 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.555 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.302 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.559 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.813 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.075 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.573 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.057 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.720 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.643 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.654 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.470 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.143 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.178 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.121 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 52.996 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 72.485 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.085 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 82.987 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.066 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 83.171 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,946,804 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 97.378 | 3,754,873 | 0.2216 | 5 | yes |
| gzip | 2 | 104.745 | 3,606,731 | 0.2128 | 5 | yes |
| gzip | 3 | 123.938 | 3,488,191 | 0.2058 | 5 | yes |
| gzip | 4 | 140.949 | 3,361,083 | 0.1983 | 5 | yes |
| gzip | 5 | 182.492 | 3,140,651 | 0.1853 | 5 | yes |
| gzip | 6 | 263.854 | 3,073,208 | 0.1813 | 5 | yes |
| gzip | 7 | 357.622 | 3,007,264 | 0.1775 | 5 | yes |
| gzip | 8 | 1034.467 | 2,939,923 | 0.1735 | 5 | yes |
| gzip | 9 | 1078.570 | 2,939,101 | 0.1734 | 5 | yes |
| brotli | 0 | 42.772 | 4,158,391 | 0.2454 | 5 | yes |
| brotli | 1 | 55.662 | 3,696,388 | 0.2181 | 5 | yes |
| brotli | 2 | 110.597 | 3,404,652 | 0.2009 | 5 | yes |
| brotli | 3 | 127.678 | 3,347,644 | 0.1975 | 5 | yes |
| brotli | 4 | 212.872 | 3,276,816 | 0.1934 | 5 | yes |
| brotli | 5 | 323.640 | 2,921,643 | 0.1724 | 5 | yes |
| brotli | 6 | 398.490 | 2,890,343 | 0.1706 | 5 | yes |
| brotli | 7 | 604.403 | 2,863,078 | 0.1689 | 5 | yes |
| brotli | 8 | 792.826 | 2,844,800 | 0.1679 | 5 | yes |
| brotli | 9 | 1029.991 | 2,834,664 | 0.1673 | 5 | yes |
| brotli | 10 | 11188.736 | 2,428,562 | 0.1433 | 5 | yes |
| brotli | 11 | 28133.132 | 2,309,167 | 0.1363 | 5 | yes |
| zstd | 1 | 42.732 | 3,504,403 | 0.2068 | 5 | yes |
| zstd | 2 | 53.015 | 3,581,907 | 0.2114 | 5 | yes |
| zstd | 3 | 67.861 | 3,507,920 | 0.2070 | 5 | yes |
| zstd | 4 | 77.285 | 3,502,711 | 0.2067 | 5 | yes |
| zstd | 5 | 132.376 | 3,287,468 | 0.1940 | 5 | yes |
| zstd | 6 | 187.867 | 3,067,272 | 0.1810 | 5 | yes |
| zstd | 7 | 224.514 | 3,028,718 | 0.1787 | 5 | yes |
| zstd | 8 | 291.609 | 2,926,446 | 0.1727 | 5 | yes |
| zstd | 9 | 309.418 | 2,936,848 | 0.1733 | 5 | yes |
| zstd | 10 | 404.760 | 2,900,202 | 0.1711 | 5 | yes |
| zstd | 11 | 622.931 | 2,873,028 | 0.1695 | 5 | yes |
| zstd | 12 | 657.941 | 2,872,898 | 0.1695 | 5 | yes |
| zstd | 13 | 986.761 | 2,850,280 | 0.1682 | 5 | yes |
| zstd | 14 | 1125.502 | 2,835,958 | 0.1673 | 5 | yes |
| zstd | 15 | 1498.850 | 2,832,325 | 0.1671 | 5 | yes |
| zstd | 16 | 3012.054 | 2,645,548 | 0.1561 | 5 | yes |
| zstd | 17 | 3982.745 | 2,553,740 | 0.1507 | 5 | yes |
| zstd | 18 | 6105.886 | 2,535,042 | 0.1496 | 5 | yes |
| zstd | 19 | 6668.815 | 2,528,063 | 0.1492 | 5 | yes |
| zstd | 20 | 6931.491 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 21 | 7054.949 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 22 | 7267.036 | 2,521,575 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.518 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.493 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.367 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.349 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.685 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.723 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 28.957 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 31.654 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 31.691 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.727 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 4.574 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.577 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.488 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 16.769 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.451 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.366 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 45.789 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 54.259 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 63.853 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 922.915 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1915.238 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.009 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.729 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.145 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.515 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 9.886 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.176 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.696 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 17.952 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.186 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.879 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 29.422 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 29.131 | 385,152 | 0.4480 | 6 | yes |
| zstd | 13 | 71.352 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 74.317 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 71.627 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 121.667 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 143.469 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 176.301 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 196.677 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 208.048 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 203.766 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 201.421 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.132 | 5,506 | 0.2826 | 7 | yes |
| gzip | 2 | 0.160 | 5,424 | 0.2784 | 15 | yes |
| gzip | 3 | 0.167 | 5,356 | 0.2749 | 8 | yes |
| gzip | 4 | 0.188 | 5,145 | 0.2641 | 9 | yes |
| gzip | 5 | 0.270 | 4,896 | 0.2513 | 5 | yes |
| gzip | 6 | 0.360 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.505 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.646 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.634 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.054 | 6,028 | 0.3094 | 18 | yes |
| brotli | 1 | 0.070 | 5,737 | 0.2945 | 12 | yes |
| brotli | 2 | 0.130 | 4,944 | 0.2538 | 14 | yes |
| brotli | 3 | 0.186 | 4,930 | 0.2531 | 5 | yes |
| brotli | 4 | 0.276 | 4,898 | 0.2514 | 7 | yes |
| brotli | 5 | 0.438 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.505 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.556 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.610 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.736 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.319 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.683 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.053 | 5,379 | 0.2761 | 25 | yes |
| zstd | 2 | 0.061 | 5,176 | 0.2657 | 5 | yes |
| zstd | 3 | 0.073 | 5,169 | 0.2653 | 6 | yes |
| zstd | 4 | 0.070 | 5,154 | 0.2646 | 11 | yes |
| zstd | 5 | 0.158 | 5,074 | 0.2605 | 11 | yes |
| zstd | 6 | 0.220 | 4,797 | 0.2463 | 5 | yes |
| zstd | 7 | 0.266 | 4,702 | 0.2414 | 6 | yes |
| zstd | 8 | 0.313 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.364 | 4,690 | 0.2408 | 6 | yes |
| zstd | 10 | 0.442 | 4,691 | 0.2408 | 7 | yes |
| zstd | 11 | 0.629 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.683 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.004 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.739 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.830 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.560 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.563 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.566 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.014 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.101 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.073 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.070 | 4,348 | 0.2232 | 5 | yes |
