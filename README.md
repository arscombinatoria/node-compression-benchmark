# Node Compression Benchmark

Last updated: 2026-07-04T21:15:58.160Z

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
| gzip | 1 | 0.948 | 31,033 | 0.3941 | 11 | yes |
| gzip | 2 | 0.966 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.073 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.220 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.577 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.839 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.022 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.383 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.380 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.377 | 33,111 | 0.4205 | 5 | yes |
| brotli | 1 | 0.761 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.824 | 29,394 | 0.3733 | 6 | yes |
| brotli | 3 | 0.963 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.520 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.187 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.346 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.808 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.701 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.735 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.923 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.230 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.316 | 31,062 | 0.3944 | 14 | yes |
| zstd | 2 | 0.519 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.677 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.769 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 1.371 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.868 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.490 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.607 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.784 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.991 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.419 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.568 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.633 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.911 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.201 | 26,420 | 0.3355 | 17 | yes |
| zstd | 16 | 11.156 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.203 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.049 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.729 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.898 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.683 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.746 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 84.484 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 87.359 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 94.582 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.424 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 119.127 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.321 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 142.085 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 160.505 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 170.214 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.314 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 27.621 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.326 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 62.986 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 86.520 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 125.468 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 144.373 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 418.429 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 484.199 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 638.030 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5910.720 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12265.645 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.670 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 25.061 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 39.116 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 43.034 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.435 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.544 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 83.419 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 98.134 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 93.913 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 115.489 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 140.989 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 169.722 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 309.796 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 391.209 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 457.287 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 595.845 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 728.284 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1056.325 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1160.993 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1190.415 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1204.197 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1209.854 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.175 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.096 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.157 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.591 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.658 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.689 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.631 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.657 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.581 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.239 | 613,595 | 0.9981 | 6 | yes |
| brotli | 1 | 0.228 | 614,785 | 1.0000 | 13 | yes |
| brotli | 2 | 0.569 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.752 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.014 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.587 | 614,785 | 1.0000 | 21 | yes |
| brotli | 6 | 1.552 | 614,785 | 1.0000 | 5 | yes |
| brotli | 7 | 1.902 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 1.991 | 614,785 | 1.0000 | 11 | yes |
| brotli | 9 | 4.858 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 109.198 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 242.365 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.277 | 614,805 | 1.0000 | 19 | yes |
| zstd | 2 | 0.258 | 614,804 | 1.0000 | 16 | yes |
| zstd | 3 | 0.321 | 614,804 | 1.0000 | 25 | no |
| zstd | 4 | 0.331 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.462 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.641 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.550 | 614,804 | 1.0000 | 6 | yes |
| zstd | 8 | 0.534 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.676 | 614,804 | 1.0000 | 11 | yes |
| zstd | 10 | 0.673 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.666 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.666 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.128 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 2.116 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 2.128 | 612,619 | 0.9965 | 9 | yes |
| zstd | 16 | 13.527 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 13.883 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 19.796 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 23.842 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 23.951 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 23.919 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 23.917 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,203 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.848 | 145,186 | 0.2962 | 5 | yes |
| gzip | 2 | 4.166 | 138,416 | 0.2824 | 5 | yes |
| gzip | 3 | 5.426 | 133,876 | 0.2731 | 5 | yes |
| gzip | 4 | 5.759 | 125,601 | 0.2562 | 5 | yes |
| gzip | 5 | 8.119 | 120,956 | 0.2467 | 5 | yes |
| gzip | 6 | 11.648 | 119,245 | 0.2433 | 5 | yes |
| gzip | 7 | 14.754 | 118,777 | 0.2423 | 5 | yes |
| gzip | 8 | 27.528 | 118,504 | 0.2417 | 5 | yes |
| gzip | 9 | 42.720 | 118,432 | 0.2416 | 5 | yes |
| brotli | 0 | 1.545 | 149,403 | 0.3048 | 5 | yes |
| brotli | 1 | 2.209 | 137,359 | 0.2802 | 5 | yes |
| brotli | 2 | 3.864 | 129,149 | 0.2635 | 5 | yes |
| brotli | 3 | 4.420 | 126,616 | 0.2583 | 5 | yes |
| brotli | 4 | 6.455 | 122,372 | 0.2496 | 5 | yes |
| brotli | 5 | 10.192 | 112,685 | 0.2299 | 5 | yes |
| brotli | 6 | 11.523 | 110,020 | 0.2244 | 5 | yes |
| brotli | 7 | 13.500 | 108,033 | 0.2204 | 5 | yes |
| brotli | 8 | 15.997 | 106,992 | 0.2183 | 5 | yes |
| brotli | 9 | 23.039 | 106,100 | 0.2164 | 5 | yes |
| brotli | 10 | 267.253 | 98,605 | 0.2012 | 5 | yes |
| brotli | 11 | 685.414 | 96,451 | 0.1968 | 5 | yes |
| zstd | 1 | 1.648 | 138,119 | 0.2818 | 5 | yes |
| zstd | 2 | 1.783 | 133,877 | 0.2731 | 5 | yes |
| zstd | 3 | 2.263 | 126,195 | 0.2574 | 5 | yes |
| zstd | 4 | 2.375 | 126,019 | 0.2571 | 5 | yes |
| zstd | 5 | 4.464 | 117,401 | 0.2395 | 5 | yes |
| zstd | 6 | 6.031 | 113,444 | 0.2314 | 5 | yes |
| zstd | 7 | 6.790 | 111,887 | 0.2282 | 5 | yes |
| zstd | 8 | 8.614 | 111,126 | 0.2267 | 5 | yes |
| zstd | 9 | 8.470 | 111,126 | 0.2267 | 5 | yes |
| zstd | 10 | 10.688 | 110,088 | 0.2246 | 5 | yes |
| zstd | 11 | 12.983 | 109,457 | 0.2233 | 5 | yes |
| zstd | 12 | 12.863 | 109,457 | 0.2233 | 5 | yes |
| zstd | 13 | 25.830 | 108,272 | 0.2209 | 5 | yes |
| zstd | 14 | 31.267 | 107,630 | 0.2196 | 5 | yes |
| zstd | 15 | 34.680 | 107,612 | 0.2195 | 5 | yes |
| zstd | 16 | 63.245 | 101,999 | 0.2081 | 5 | yes |
| zstd | 17 | 69.899 | 101,110 | 0.2063 | 5 | yes |
| zstd | 18 | 108.180 | 100,283 | 0.2046 | 5 | yes |
| zstd | 19 | 141.940 | 100,204 | 0.2044 | 5 | yes |
| zstd | 20 | 141.748 | 100,204 | 0.2044 | 5 | yes |
| zstd | 21 | 142.374 | 100,195 | 0.2044 | 5 | yes |
| zstd | 22 | 142.123 | 100,195 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.103 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.123 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.124 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.164 | 4,530 | 0.2631 | 21 | yes |
| gzip | 5 | 0.231 | 4,441 | 0.2579 | 7 | yes |
| gzip | 6 | 0.270 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.310 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.458 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.458 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.054 | 5,235 | 0.3041 | 9 | yes |
| brotli | 1 | 0.067 | 5,134 | 0.2982 | 18 | yes |
| brotli | 2 | 0.119 | 4,741 | 0.2754 | 12 | yes |
| brotli | 3 | 0.144 | 4,650 | 0.2701 | 19 | yes |
| brotli | 4 | 0.285 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.388 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.413 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.451 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.464 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 2.199 | 4,244 | 0.2465 | 7 | yes |
| brotli | 10 | 6.773 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.557 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.055 | 4,923 | 0.2859 | 20 | yes |
| zstd | 2 | 0.060 | 4,868 | 0.2827 | 16 | yes |
| zstd | 3 | 0.075 | 4,717 | 0.2740 | 9 | yes |
| zstd | 4 | 0.078 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.157 | 4,519 | 0.2625 | 11 | yes |
| zstd | 6 | 0.215 | 4,437 | 0.2577 | 7 | yes |
| zstd | 7 | 0.263 | 4,437 | 0.2577 | 6 | yes |
| zstd | 8 | 0.280 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.328 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.359 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.613 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.633 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.906 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.449 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.541 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.497 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.697 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.659 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.261 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.226 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.240 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.243 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.062 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.057 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.074 | 3,153 | 0.4403 | 13 | yes |
| gzip | 4 | 0.079 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.086 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.093 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.119 | 3,042 | 0.4248 | 5 | yes |
| gzip | 8 | 0.098 | 3,042 | 0.4248 | 25 | no |
| gzip | 9 | 0.082 | 3,042 | 0.4248 | 19 | yes |
| brotli | 0 | 0.032 | 3,549 | 0.4956 | 25 | no |
| brotli | 1 | 0.039 | 3,381 | 0.4721 | 25 | no |
| brotli | 2 | 0.060 | 3,263 | 0.4557 | 18 | yes |
| brotli | 3 | 0.083 | 3,216 | 0.4491 | 25 | no |
| brotli | 4 | 0.155 | 3,147 | 0.4395 | 16 | yes |
| brotli | 5 | 0.233 | 2,963 | 0.4138 | 8 | yes |
| brotli | 6 | 0.248 | 2,952 | 0.4122 | 6 | yes |
| brotli | 7 | 0.256 | 2,944 | 0.4111 | 5 | yes |
| brotli | 8 | 0.252 | 2,944 | 0.4111 | 10 | yes |
| brotli | 9 | 1.881 | 2,945 | 0.4113 | 6 | yes |
| brotli | 10 | 3.203 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.781 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.035 | 3,254 | 0.4544 | 18 | yes |
| zstd | 2 | 0.033 | 3,200 | 0.4469 | 24 | yes |
| zstd | 3 | 0.042 | 3,176 | 0.4435 | 12 | yes |
| zstd | 4 | 0.062 | 3,102 | 0.4332 | 15 | yes |
| zstd | 5 | 0.074 | 3,079 | 0.4300 | 16 | yes |
| zstd | 6 | 0.103 | 3,060 | 0.4273 | 22 | yes |
| zstd | 7 | 0.135 | 3,053 | 0.4263 | 5 | yes |
| zstd | 8 | 0.117 | 3,053 | 0.4263 | 16 | yes |
| zstd | 9 | 0.196 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.156 | 3,055 | 0.4266 | 10 | yes |
| zstd | 11 | 0.340 | 3,044 | 0.4251 | 7 | yes |
| zstd | 12 | 0.479 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.653 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.662 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.662 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.280 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.271 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.273 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.273 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.283 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.283 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.281 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,901 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.855 | 67,260 | 0.4079 | 5 | yes |
| gzip | 2 | 2.017 | 65,641 | 0.3981 | 5 | yes |
| gzip | 3 | 2.267 | 64,609 | 0.3918 | 5 | yes |
| gzip | 4 | 2.851 | 62,246 | 0.3775 | 5 | yes |
| gzip | 5 | 3.427 | 60,620 | 0.3676 | 5 | yes |
| gzip | 6 | 4.220 | 60,347 | 0.3660 | 5 | yes |
| gzip | 7 | 4.591 | 60,306 | 0.3657 | 5 | yes |
| gzip | 8 | 4.994 | 60,288 | 0.3656 | 5 | yes |
| gzip | 9 | 4.962 | 60,288 | 0.3656 | 5 | yes |
| brotli | 0 | 0.679 | 71,542 | 0.4338 | 5 | yes |
| brotli | 1 | 0.911 | 68,608 | 0.4161 | 5 | yes |
| brotli | 2 | 1.640 | 63,268 | 0.3837 | 5 | yes |
| brotli | 3 | 1.902 | 62,714 | 0.3803 | 5 | yes |
| brotli | 4 | 2.886 | 61,492 | 0.3729 | 5 | yes |
| brotli | 5 | 4.466 | 58,210 | 0.3530 | 5 | yes |
| brotli | 6 | 4.911 | 57,839 | 0.3507 | 5 | yes |
| brotli | 7 | 5.666 | 57,540 | 0.3489 | 5 | yes |
| brotli | 8 | 5.982 | 57,465 | 0.3485 | 5 | yes |
| brotli | 9 | 9.542 | 57,391 | 0.3480 | 5 | yes |
| brotli | 10 | 94.396 | 54,557 | 0.3308 | 5 | yes |
| brotli | 11 | 245.458 | 53,655 | 0.3254 | 5 | yes |
| zstd | 1 | 0.617 | 66,585 | 0.4038 | 5 | yes |
| zstd | 2 | 0.808 | 63,595 | 0.3857 | 5 | yes |
| zstd | 3 | 0.993 | 63,025 | 0.3822 | 5 | yes |
| zstd | 4 | 1.757 | 61,203 | 0.3711 | 5 | yes |
| zstd | 5 | 1.969 | 60,668 | 0.3679 | 5 | yes |
| zstd | 6 | 2.441 | 59,769 | 0.3625 | 5 | yes |
| zstd | 7 | 2.874 | 58,956 | 0.3575 | 5 | yes |
| zstd | 8 | 3.571 | 58,460 | 0.3545 | 5 | yes |
| zstd | 9 | 4.112 | 58,213 | 0.3530 | 5 | yes |
| zstd | 10 | 4.903 | 58,073 | 0.3522 | 5 | yes |
| zstd | 11 | 8.469 | 57,781 | 0.3504 | 5 | yes |
| zstd | 12 | 8.320 | 57,769 | 0.3503 | 5 | yes |
| zstd | 13 | 15.020 | 56,782 | 0.3443 | 5 | yes |
| zstd | 14 | 17.554 | 56,326 | 0.3416 | 5 | yes |
| zstd | 15 | 17.843 | 56,318 | 0.3415 | 5 | yes |
| zstd | 16 | 24.985 | 56,132 | 0.3404 | 5 | yes |
| zstd | 17 | 24.891 | 56,132 | 0.3404 | 5 | yes |
| zstd | 18 | 42.515 | 56,049 | 0.3399 | 5 | yes |
| zstd | 19 | 42.530 | 56,049 | 0.3399 | 5 | yes |
| zstd | 20 | 42.543 | 56,049 | 0.3399 | 5 | yes |
| zstd | 21 | 42.475 | 56,049 | 0.3399 | 5 | yes |
| zstd | 22 | 42.495 | 56,049 | 0.3399 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.786 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.846 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.959 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.078 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.383 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.765 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.090 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.828 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.831 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.277 | 30,978 | 0.4230 | 6 | yes |
| brotli | 1 | 0.391 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.693 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.800 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.279 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.911 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.081 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.388 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.533 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.307 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 38.691 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 95.510 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.259 | 28,919 | 0.3949 | 7 | yes |
| zstd | 2 | 0.285 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.353 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.453 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.784 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.072 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.297 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.419 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.637 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.883 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.227 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.378 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.331 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.791 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.826 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.866 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.861 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.867 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.810 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.801 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.701 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.762 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,169 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.656 | 25,582 | 0.2837 | 5 | yes |
| gzip | 2 | 0.730 | 25,330 | 0.2809 | 5 | yes |
| gzip | 3 | 0.855 | 25,125 | 0.2786 | 5 | yes |
| gzip | 4 | 1.001 | 23,752 | 0.2634 | 5 | yes |
| gzip | 5 | 1.346 | 22,851 | 0.2534 | 5 | yes |
| gzip | 6 | 2.033 | 22,618 | 0.2508 | 5 | yes |
| gzip | 7 | 2.703 | 22,513 | 0.2497 | 5 | yes |
| gzip | 8 | 7.855 | 22,266 | 0.2469 | 5 | yes |
| gzip | 9 | 8.015 | 22,264 | 0.2469 | 5 | yes |
| brotli | 0 | 0.277 | 27,662 | 0.3068 | 8 | yes |
| brotli | 1 | 0.398 | 25,918 | 0.2874 | 5 | yes |
| brotli | 2 | 0.713 | 23,445 | 0.2600 | 5 | yes |
| brotli | 3 | 0.817 | 23,374 | 0.2592 | 5 | yes |
| brotli | 4 | 1.223 | 22,948 | 0.2545 | 5 | yes |
| brotli | 5 | 1.849 | 21,885 | 0.2427 | 5 | yes |
| brotli | 6 | 2.080 | 21,770 | 0.2414 | 5 | yes |
| brotli | 7 | 2.396 | 21,692 | 0.2406 | 5 | yes |
| brotli | 8 | 2.763 | 21,642 | 0.2400 | 5 | yes |
| brotli | 9 | 5.750 | 21,554 | 0.2390 | 5 | yes |
| brotli | 10 | 35.259 | 18,928 | 0.2099 | 5 | yes |
| brotli | 11 | 104.139 | 18,418 | 0.2043 | 5 | yes |
| zstd | 1 | 0.304 | 24,558 | 0.2724 | 5 | yes |
| zstd | 2 | 0.297 | 24,331 | 0.2698 | 6 | yes |
| zstd | 3 | 0.360 | 24,100 | 0.2673 | 5 | yes |
| zstd | 4 | 0.456 | 24,021 | 0.2664 | 5 | yes |
| zstd | 5 | 0.779 | 23,309 | 0.2585 | 5 | yes |
| zstd | 6 | 1.131 | 22,411 | 0.2485 | 5 | yes |
| zstd | 7 | 1.363 | 21,911 | 0.2430 | 5 | yes |
| zstd | 8 | 1.567 | 21,844 | 0.2423 | 5 | yes |
| zstd | 9 | 1.936 | 21,770 | 0.2414 | 5 | yes |
| zstd | 10 | 2.533 | 21,703 | 0.2407 | 5 | yes |
| zstd | 11 | 3.642 | 21,560 | 0.2391 | 5 | yes |
| zstd | 12 | 4.782 | 21,531 | 0.2388 | 5 | yes |
| zstd | 13 | 5.880 | 21,345 | 0.2367 | 5 | yes |
| zstd | 14 | 8.478 | 20,515 | 0.2275 | 5 | yes |
| zstd | 15 | 10.051 | 20,378 | 0.2260 | 5 | yes |
| zstd | 16 | 14.985 | 20,209 | 0.2241 | 5 | yes |
| zstd | 17 | 19.789 | 20,179 | 0.2238 | 5 | yes |
| zstd | 18 | 27.766 | 20,175 | 0.2237 | 5 | yes |
| zstd | 19 | 32.032 | 20,183 | 0.2238 | 5 | yes |
| zstd | 20 | 37.154 | 20,146 | 0.2234 | 5 | yes |
| zstd | 21 | 48.775 | 20,138 | 0.2233 | 5 | yes |
| zstd | 22 | 55.154 | 20,133 | 0.2233 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.092 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.145 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.336 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.692 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.144 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.853 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.491 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.664 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.732 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.447 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.639 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.194 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.385 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.044 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.980 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.266 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.551 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.019 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 7.224 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 95.243 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 298.441 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.488 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.534 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.606 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.409 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.630 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.986 | 29,727 | 0.1281 | 7 | yes |
| zstd | 7 | 2.179 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.805 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.303 | 28,235 | 0.1216 | 13 | yes |
| zstd | 10 | 4.232 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.104 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.784 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.987 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.993 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.450 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 57.674 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 65.152 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 86.451 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 98.289 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 103.260 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 103.821 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 102.618 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,045,192 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 94.916 | 3,776,518 | 0.2216 | 5 | yes |
| gzip | 2 | 102.000 | 3,627,753 | 0.2128 | 5 | yes |
| gzip | 3 | 124.180 | 3,507,453 | 0.2058 | 5 | yes |
| gzip | 4 | 147.518 | 3,379,888 | 0.1983 | 5 | yes |
| gzip | 5 | 188.462 | 3,159,182 | 0.1853 | 5 | yes |
| gzip | 6 | 279.903 | 3,090,847 | 0.1813 | 5 | yes |
| gzip | 7 | 380.419 | 3,024,822 | 0.1775 | 5 | yes |
| gzip | 8 | 1070.663 | 2,957,000 | 0.1735 | 5 | yes |
| gzip | 9 | 1134.192 | 2,956,204 | 0.1734 | 5 | yes |
| brotli | 0 | 45.417 | 4,175,487 | 0.2450 | 5 | yes |
| brotli | 1 | 63.222 | 3,718,326 | 0.2181 | 5 | yes |
| brotli | 2 | 109.307 | 3,424,305 | 0.2009 | 5 | yes |
| brotli | 3 | 127.892 | 3,367,979 | 0.1976 | 5 | yes |
| brotli | 4 | 169.081 | 3,295,114 | 0.1933 | 5 | yes |
| brotli | 5 | 287.758 | 2,938,968 | 0.1724 | 5 | yes |
| brotli | 6 | 338.984 | 2,906,886 | 0.1705 | 5 | yes |
| brotli | 7 | 492.255 | 2,880,272 | 0.1690 | 5 | yes |
| brotli | 8 | 645.043 | 2,860,897 | 0.1678 | 5 | yes |
| brotli | 9 | 881.716 | 2,849,681 | 0.1672 | 5 | yes |
| brotli | 10 | 10010.921 | 2,442,746 | 0.1433 | 5 | yes |
| brotli | 11 | 27574.734 | 2,324,312 | 0.1364 | 5 | yes |
| zstd | 1 | 43.546 | 3,525,070 | 0.2068 | 5 | yes |
| zstd | 2 | 55.532 | 3,602,765 | 0.2114 | 5 | yes |
| zstd | 3 | 65.793 | 3,528,707 | 0.2070 | 5 | yes |
| zstd | 4 | 69.088 | 3,523,547 | 0.2067 | 5 | yes |
| zstd | 5 | 130.281 | 3,306,721 | 0.1940 | 5 | yes |
| zstd | 6 | 189.682 | 3,085,317 | 0.1810 | 5 | yes |
| zstd | 7 | 221.692 | 3,046,804 | 0.1787 | 5 | yes |
| zstd | 8 | 283.088 | 2,943,521 | 0.1727 | 5 | yes |
| zstd | 9 | 296.519 | 2,954,143 | 0.1733 | 5 | yes |
| zstd | 10 | 413.486 | 2,917,471 | 0.1712 | 5 | yes |
| zstd | 11 | 599.313 | 2,889,922 | 0.1695 | 5 | yes |
| zstd | 12 | 645.009 | 2,889,906 | 0.1695 | 5 | yes |
| zstd | 13 | 832.260 | 2,866,998 | 0.1682 | 5 | yes |
| zstd | 14 | 988.236 | 2,852,567 | 0.1674 | 5 | yes |
| zstd | 15 | 1285.268 | 2,848,994 | 0.1671 | 5 | yes |
| zstd | 16 | 2444.101 | 2,661,004 | 0.1561 | 5 | yes |
| zstd | 17 | 3165.165 | 2,568,659 | 0.1507 | 5 | yes |
| zstd | 18 | 6015.572 | 2,549,776 | 0.1496 | 5 | yes |
| zstd | 19 | 6565.692 | 2,542,941 | 0.1492 | 5 | yes |
| zstd | 20 | 6436.709 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 21 | 6376.815 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 22 | 6577.272 | 2,536,119 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.271 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.250 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.361 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.261 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.251 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.567 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.033 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 31.898 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 31.893 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.906 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.475 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.963 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.024 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.791 | 400,331 | 0.4656 | 7 | yes |
| brotli | 5 | 27.096 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.186 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.608 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 54.834 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 68.852 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 895.361 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1926.363 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.042 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.888 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.899 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.510 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.191 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.937 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.963 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.522 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.618 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.280 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 25.496 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.187 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 47.147 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 49.757 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 49.470 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 91.232 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 113.189 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 150.640 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 168.936 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 174.331 | 358,047 | 0.4165 | 6 | yes |
| zstd | 21 | 171.690 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 174.293 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.126 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.132 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.167 | 5,356 | 0.2749 | 7 | yes |
| gzip | 4 | 0.200 | 5,145 | 0.2641 | 15 | yes |
| gzip | 5 | 0.266 | 4,896 | 0.2513 | 6 | yes |
| gzip | 6 | 0.363 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.492 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.645 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.631 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.061 | 6,028 | 0.3094 | 18 | yes |
| brotli | 1 | 0.076 | 5,737 | 0.2945 | 25 | no |
| brotli | 2 | 0.125 | 4,944 | 0.2538 | 23 | yes |
| brotli | 3 | 0.186 | 4,930 | 0.2531 | 6 | yes |
| brotli | 4 | 0.285 | 4,898 | 0.2514 | 8 | yes |
| brotli | 5 | 0.462 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.515 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.571 | 4,564 | 0.2343 | 7 | yes |
| brotli | 8 | 0.600 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 2.636 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.078 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.535 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.058 | 5,379 | 0.2761 | 19 | yes |
| zstd | 2 | 0.071 | 5,176 | 0.2657 | 25 | no |
| zstd | 3 | 0.082 | 5,169 | 0.2653 | 17 | yes |
| zstd | 4 | 0.082 | 5,154 | 0.2646 | 13 | yes |
| zstd | 5 | 0.169 | 5,074 | 0.2605 | 9 | yes |
| zstd | 6 | 0.239 | 4,797 | 0.2463 | 8 | yes |
| zstd | 7 | 0.287 | 4,702 | 0.2414 | 7 | yes |
| zstd | 8 | 0.349 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.395 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.484 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.597 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.636 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.997 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.795 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.908 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.862 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.881 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.868 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.631 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.666 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.661 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.695 | 4,348 | 0.2232 | 5 | yes |
