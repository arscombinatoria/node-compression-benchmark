# Node Compression Benchmark

Last updated: 2026-04-22T23:30:47.226Z

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
| gzip | 1 | 0.965 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.985 | 30,134 | 0.3827 | 8 | yes |
| gzip | 3 | 1.097 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.243 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.572 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.852 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.039 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.394 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.377 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.380 | 33,111 | 0.4205 | 5 | yes |
| brotli | 1 | 0.759 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.798 | 29,394 | 0.3733 | 8 | yes |
| brotli | 3 | 0.931 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.504 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.032 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.173 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.749 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.547 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.861 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.503 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 95.587 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.311 | 31,062 | 0.3944 | 14 | yes |
| zstd | 2 | 0.342 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.396 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.509 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.905 | 28,349 | 0.3600 | 8 | yes |
| zstd | 6 | 1.274 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.481 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.604 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.760 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.038 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.375 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.502 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.556 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.830 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.002 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.132 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.053 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.037 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.723 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.597 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.630 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.652 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 83.883 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 89.143 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 91.821 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.202 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 117.785 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 133.798 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 142.497 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 159.879 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.404 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.406 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.326 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.031 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 62.832 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 83.441 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 124.716 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 142.812 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 406.021 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 517.057 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 699.947 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6018.227 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12554.503 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.710 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.607 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 39.556 | 3,139,155 | 0.5736 | 6 | yes |
| zstd | 4 | 41.361 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.844 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.587 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 83.738 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 97.744 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 93.891 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 127.319 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 157.943 | 2,868,731 | 0.5242 | 6 | yes |
| zstd | 12 | 191.460 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 393.028 | 2,864,062 | 0.5233 | 7 | yes |
| zstd | 14 | 454.877 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 493.559 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 716.438 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 848.879 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1199.566 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1257.281 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1277.430 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1278.086 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1279.813 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.226 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.170 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.161 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.759 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.749 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.652 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.626 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.608 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.589 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.268 | 613,595 | 0.9981 | 8 | yes |
| brotli | 1 | 0.285 | 614,785 | 1.0000 | 5 | yes |
| brotli | 2 | 0.661 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.821 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.119 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.492 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.592 | 614,785 | 1.0000 | 7 | yes |
| brotli | 7 | 2.128 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.266 | 614,785 | 1.0000 | 11 | yes |
| brotli | 9 | 2.910 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 108.009 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 245.797 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.290 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.285 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.332 | 614,804 | 1.0000 | 25 | no |
| zstd | 4 | 0.360 | 614,804 | 1.0000 | 25 | no |
| zstd | 5 | 0.485 | 614,804 | 1.0000 | 6 | yes |
| zstd | 6 | 0.486 | 614,804 | 1.0000 | 12 | yes |
| zstd | 7 | 0.546 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.549 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.654 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.659 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.670 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.698 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.318 | 612,619 | 0.9965 | 9 | yes |
| zstd | 14 | 2.224 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 2.225 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 13.531 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 13.733 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 20.186 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 25.925 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 24.312 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 24.636 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 25.025 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 485,915 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.810 | 143,918 | 0.2962 | 5 | yes |
| gzip | 2 | 4.156 | 137,173 | 0.2823 | 5 | yes |
| gzip | 3 | 5.375 | 132,619 | 0.2729 | 5 | yes |
| gzip | 4 | 5.712 | 124,435 | 0.2561 | 5 | yes |
| gzip | 5 | 8.006 | 119,872 | 0.2467 | 5 | yes |
| gzip | 6 | 11.572 | 118,159 | 0.2432 | 5 | yes |
| gzip | 7 | 14.572 | 117,684 | 0.2422 | 5 | yes |
| gzip | 8 | 27.295 | 117,420 | 0.2416 | 5 | yes |
| gzip | 9 | 42.286 | 117,341 | 0.2415 | 5 | yes |
| brotli | 0 | 1.522 | 148,158 | 0.3049 | 5 | yes |
| brotli | 1 | 2.081 | 136,127 | 0.2801 | 5 | yes |
| brotli | 2 | 3.901 | 127,990 | 0.2634 | 5 | yes |
| brotli | 3 | 4.486 | 125,439 | 0.2582 | 5 | yes |
| brotli | 4 | 6.338 | 121,316 | 0.2497 | 5 | yes |
| brotli | 5 | 9.922 | 111,622 | 0.2297 | 5 | yes |
| brotli | 6 | 11.535 | 108,985 | 0.2243 | 5 | yes |
| brotli | 7 | 13.548 | 107,045 | 0.2203 | 5 | yes |
| brotli | 8 | 16.095 | 106,028 | 0.2182 | 5 | yes |
| brotli | 9 | 20.580 | 105,144 | 0.2164 | 5 | yes |
| brotli | 10 | 266.427 | 97,735 | 0.2011 | 5 | yes |
| brotli | 11 | 706.033 | 95,569 | 0.1967 | 5 | yes |
| zstd | 1 | 1.637 | 136,842 | 0.2816 | 5 | yes |
| zstd | 2 | 1.834 | 132,630 | 0.2729 | 5 | yes |
| zstd | 3 | 2.265 | 125,091 | 0.2574 | 5 | yes |
| zstd | 4 | 2.372 | 124,872 | 0.2570 | 5 | yes |
| zstd | 5 | 4.368 | 116,228 | 0.2392 | 5 | yes |
| zstd | 6 | 6.037 | 112,389 | 0.2313 | 5 | yes |
| zstd | 7 | 6.694 | 110,841 | 0.2281 | 5 | yes |
| zstd | 8 | 8.544 | 110,049 | 0.2265 | 5 | yes |
| zstd | 9 | 8.389 | 110,049 | 0.2265 | 5 | yes |
| zstd | 10 | 10.038 | 109,065 | 0.2245 | 5 | yes |
| zstd | 11 | 12.681 | 108,471 | 0.2232 | 5 | yes |
| zstd | 12 | 12.722 | 108,471 | 0.2232 | 5 | yes |
| zstd | 13 | 24.907 | 107,311 | 0.2208 | 5 | yes |
| zstd | 14 | 29.976 | 106,716 | 0.2196 | 5 | yes |
| zstd | 15 | 33.661 | 106,629 | 0.2194 | 5 | yes |
| zstd | 16 | 61.435 | 101,092 | 0.2080 | 5 | yes |
| zstd | 17 | 69.496 | 100,205 | 0.2062 | 5 | yes |
| zstd | 18 | 107.023 | 99,418 | 0.2046 | 5 | yes |
| zstd | 19 | 140.359 | 99,302 | 0.2044 | 5 | yes |
| zstd | 20 | 140.566 | 99,302 | 0.2044 | 5 | yes |
| zstd | 21 | 141.316 | 99,327 | 0.2044 | 5 | yes |
| zstd | 22 | 141.379 | 99,327 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.110 | 4,987 | 0.2897 | 17 | yes |
| gzip | 2 | 0.116 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.144 | 4,806 | 0.2791 | 17 | yes |
| gzip | 4 | 0.185 | 4,530 | 0.2631 | 17 | yes |
| gzip | 5 | 0.243 | 4,441 | 0.2579 | 7 | yes |
| gzip | 6 | 0.276 | 4,425 | 0.2570 | 9 | yes |
| gzip | 7 | 0.320 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.459 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.474 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.056 | 5,235 | 0.3041 | 9 | yes |
| brotli | 1 | 0.067 | 5,134 | 0.2982 | 10 | yes |
| brotli | 2 | 0.119 | 4,741 | 0.2754 | 25 | no |
| brotli | 3 | 0.168 | 4,650 | 0.2701 | 5 | yes |
| brotli | 4 | 0.270 | 4,555 | 0.2646 | 7 | yes |
| brotli | 5 | 0.382 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.407 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.430 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.450 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.539 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.810 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.589 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.054 | 4,923 | 0.2859 | 16 | yes |
| zstd | 2 | 0.058 | 4,868 | 0.2827 | 17 | yes |
| zstd | 3 | 0.073 | 4,717 | 0.2740 | 15 | yes |
| zstd | 4 | 0.085 | 4,679 | 0.2718 | 5 | yes |
| zstd | 5 | 0.170 | 4,519 | 0.2625 | 5 | yes |
| zstd | 6 | 0.215 | 4,437 | 0.2577 | 7 | yes |
| zstd | 7 | 0.274 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.287 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.325 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.365 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.607 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.657 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.927 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.462 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.560 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.490 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.666 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.712 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.290 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.248 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.259 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.248 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.059 | 3,217 | 0.4493 | 25 | no |
| gzip | 2 | 0.069 | 3,179 | 0.4440 | 25 | no |
| gzip | 3 | 0.073 | 3,150 | 0.4399 | 25 | no |
| gzip | 4 | 0.081 | 3,092 | 0.4318 | 25 | no |
| gzip | 5 | 0.078 | 3,047 | 0.4256 | 25 | no |
| gzip | 6 | 0.096 | 3,041 | 0.4247 | 25 | no |
| gzip | 7 | 0.120 | 3,039 | 0.4244 | 5 | yes |
| gzip | 8 | 0.096 | 3,039 | 0.4244 | 25 | no |
| gzip | 9 | 0.099 | 3,039 | 0.4244 | 6 | yes |
| brotli | 0 | 0.034 | 3,544 | 0.4950 | 20 | yes |
| brotli | 1 | 0.042 | 3,378 | 0.4718 | 14 | yes |
| brotli | 2 | 0.067 | 3,258 | 0.4550 | 25 | no |
| brotli | 3 | 0.079 | 3,207 | 0.4479 | 16 | yes |
| brotli | 4 | 0.180 | 3,138 | 0.4383 | 5 | yes |
| brotli | 5 | 0.238 | 2,961 | 0.4135 | 5 | yes |
| brotli | 6 | 0.257 | 2,950 | 0.4120 | 5 | yes |
| brotli | 7 | 0.262 | 2,942 | 0.4109 | 5 | yes |
| brotli | 8 | 0.262 | 2,942 | 0.4109 | 9 | yes |
| brotli | 9 | 0.308 | 2,943 | 0.4110 | 5 | yes |
| brotli | 10 | 3.185 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 7.819 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.036 | 3,250 | 0.4539 | 15 | yes |
| zstd | 2 | 0.041 | 3,196 | 0.4464 | 25 | no |
| zstd | 3 | 0.052 | 3,171 | 0.4429 | 13 | yes |
| zstd | 4 | 0.092 | 3,098 | 0.4327 | 5 | yes |
| zstd | 5 | 0.139 | 3,077 | 0.4297 | 5 | yes |
| zstd | 6 | 0.094 | 3,055 | 0.4267 | 23 | yes |
| zstd | 7 | 0.109 | 3,050 | 0.4260 | 16 | yes |
| zstd | 8 | 0.109 | 3,050 | 0.4260 | 14 | yes |
| zstd | 9 | 0.173 | 3,050 | 0.4260 | 12 | yes |
| zstd | 10 | 0.181 | 3,050 | 0.4260 | 8 | yes |
| zstd | 11 | 0.346 | 3,041 | 0.4247 | 5 | yes |
| zstd | 12 | 0.479 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.677 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.667 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.666 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.279 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.275 | 2,991 | 0.4177 | 5 | yes |
| zstd | 18 | 1.282 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.279 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.275 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.282 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.310 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 163,992 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.873 | 66,822 | 0.4075 | 5 | yes |
| gzip | 2 | 2.013 | 65,236 | 0.3978 | 5 | yes |
| gzip | 3 | 2.280 | 64,235 | 0.3917 | 5 | yes |
| gzip | 4 | 2.541 | 61,909 | 0.3775 | 5 | yes |
| gzip | 5 | 3.407 | 60,256 | 0.3674 | 5 | yes |
| gzip | 6 | 4.216 | 59,986 | 0.3658 | 5 | yes |
| gzip | 7 | 4.581 | 59,945 | 0.3655 | 5 | yes |
| gzip | 8 | 4.991 | 59,927 | 0.3654 | 5 | yes |
| gzip | 9 | 5.011 | 59,927 | 0.3654 | 5 | yes |
| brotli | 0 | 0.647 | 71,187 | 0.4341 | 5 | yes |
| brotli | 1 | 0.900 | 68,179 | 0.4157 | 5 | yes |
| brotli | 2 | 1.651 | 62,927 | 0.3837 | 5 | yes |
| brotli | 3 | 1.907 | 62,314 | 0.3800 | 5 | yes |
| brotli | 4 | 2.989 | 61,093 | 0.3725 | 5 | yes |
| brotli | 5 | 4.432 | 57,837 | 0.3527 | 5 | yes |
| brotli | 6 | 5.014 | 57,484 | 0.3505 | 5 | yes |
| brotli | 7 | 5.635 | 57,210 | 0.3489 | 5 | yes |
| brotli | 8 | 5.972 | 57,119 | 0.3483 | 5 | yes |
| brotli | 9 | 7.158 | 57,045 | 0.3479 | 5 | yes |
| brotli | 10 | 93.250 | 54,296 | 0.3311 | 5 | yes |
| brotli | 11 | 244.939 | 53,340 | 0.3253 | 5 | yes |
| zstd | 1 | 0.634 | 66,182 | 0.4036 | 8 | yes |
| zstd | 2 | 0.794 | 63,162 | 0.3852 | 5 | yes |
| zstd | 3 | 1.022 | 62,647 | 0.3820 | 5 | yes |
| zstd | 4 | 1.752 | 60,816 | 0.3708 | 5 | yes |
| zstd | 5 | 1.945 | 60,317 | 0.3678 | 5 | yes |
| zstd | 6 | 2.414 | 59,394 | 0.3622 | 5 | yes |
| zstd | 7 | 2.895 | 58,603 | 0.3574 | 5 | yes |
| zstd | 8 | 3.564 | 58,119 | 0.3544 | 5 | yes |
| zstd | 9 | 4.137 | 57,879 | 0.3529 | 5 | yes |
| zstd | 10 | 4.951 | 57,760 | 0.3522 | 5 | yes |
| zstd | 11 | 8.404 | 57,459 | 0.3504 | 5 | yes |
| zstd | 12 | 8.586 | 57,442 | 0.3503 | 5 | yes |
| zstd | 13 | 15.159 | 56,419 | 0.3440 | 5 | yes |
| zstd | 14 | 17.846 | 56,005 | 0.3415 | 5 | yes |
| zstd | 15 | 18.167 | 55,972 | 0.3413 | 5 | yes |
| zstd | 16 | 24.692 | 55,813 | 0.3403 | 5 | yes |
| zstd | 17 | 24.870 | 55,813 | 0.3403 | 5 | yes |
| zstd | 18 | 42.683 | 55,739 | 0.3399 | 5 | yes |
| zstd | 19 | 42.424 | 55,739 | 0.3399 | 5 | yes |
| zstd | 20 | 42.478 | 55,739 | 0.3399 | 5 | yes |
| zstd | 21 | 42.316 | 55,739 | 0.3399 | 5 | yes |
| zstd | 22 | 42.419 | 55,739 | 0.3399 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.784 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.835 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.962 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.065 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.390 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.778 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.134 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.839 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.865 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.271 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.378 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.702 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.806 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.304 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.928 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.120 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.409 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.629 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.088 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 38.994 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 96.121 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.262 | 28,919 | 0.3949 | 7 | yes |
| zstd | 2 | 0.293 | 28,008 | 0.3824 | 6 | yes |
| zstd | 3 | 0.361 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.457 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.791 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.080 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.294 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.426 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.626 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.890 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.230 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.366 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.413 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.622 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.754 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.737 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.811 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.848 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.490 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.479 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.488 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.511 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.605 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.679 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.807 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.912 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.250 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.890 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.530 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.584 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.753 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.248 | 25,901 | 0.3420 | 11 | yes |
| brotli | 1 | 0.386 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.647 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.764 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.145 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.714 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.943 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.280 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.586 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.367 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 29.289 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 86.976 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.392 | 22,639 | 0.2989 | 7 | yes |
| zstd | 2 | 0.299 | 22,433 | 0.2962 | 6 | yes |
| zstd | 3 | 0.376 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.400 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.713 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 0.995 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.224 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.427 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.773 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.369 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.238 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.168 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.017 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.089 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.161 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.537 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.674 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 21.669 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 22.260 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 26.182 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 37.385 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 43.085 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.055 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.128 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.310 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.720 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.176 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.905 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.551 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.739 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.823 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.453 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.641 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.193 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.391 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.012 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.986 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.253 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.548 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 3.999 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 4.889 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 96.083 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 298.265 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.480 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.540 | 34,301 | 0.1478 | 15 | yes |
| zstd | 3 | 0.572 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.407 | 30,973 | 0.1334 | 7 | yes |
| zstd | 5 | 1.628 | 29,744 | 0.1281 | 10 | yes |
| zstd | 6 | 1.921 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.228 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.679 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.147 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.416 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.080 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.899 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.999 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.017 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.441 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.102 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 63.380 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 84.941 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 96.155 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 100.606 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 100.609 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 100.770 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 88.530 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 88.777 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 106.938 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 143.249 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 168.787 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 214.838 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 319.436 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 901.808 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1195.522 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 45.000 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 61.794 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 109.946 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 126.993 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 161.426 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 283.245 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 329.444 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 450.394 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 580.349 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 787.981 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 12856.978 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37189.710 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 46.561 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 57.377 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 69.146 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 71.135 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 144.912 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 202.500 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 227.810 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 285.750 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 289.047 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 384.377 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 580.639 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 619.641 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 779.981 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1004.332 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1272.556 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3196.217 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3579.013 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5108.143 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9288.282 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9509.007 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9562.656 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9965.524 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.270 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.184 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.352 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.234 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.223 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.344 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.009 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 31.845 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.191 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.867 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.421 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.938 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.955 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.648 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.124 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.145 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.038 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 51.741 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 63.301 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 894.060 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1927.827 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.053 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.886 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.946 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.429 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.196 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.983 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.001 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.490 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.560 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.361 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 24.782 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 24.788 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 46.141 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 47.457 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 48.111 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 89.521 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 111.820 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 146.496 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 165.942 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 164.926 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 164.851 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 166.413 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.131 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.137 | 5,424 | 0.2784 | 23 | yes |
| gzip | 3 | 0.175 | 5,356 | 0.2749 | 8 | yes |
| gzip | 4 | 0.213 | 5,145 | 0.2641 | 5 | yes |
| gzip | 5 | 0.273 | 4,896 | 0.2513 | 5 | yes |
| gzip | 6 | 0.358 | 4,884 | 0.2507 | 6 | yes |
| gzip | 7 | 0.482 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.643 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.635 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.059 | 6,028 | 0.3094 | 14 | yes |
| brotli | 1 | 0.073 | 5,737 | 0.2945 | 11 | yes |
| brotli | 2 | 0.150 | 4,944 | 0.2538 | 10 | yes |
| brotli | 3 | 0.171 | 4,930 | 0.2531 | 10 | yes |
| brotli | 4 | 0.299 | 4,898 | 0.2514 | 7 | yes |
| brotli | 5 | 0.474 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.502 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.557 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.604 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.712 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.132 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.477 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.059 | 5,379 | 0.2761 | 11 | yes |
| zstd | 2 | 0.066 | 5,176 | 0.2657 | 25 | no |
| zstd | 3 | 0.082 | 5,169 | 0.2653 | 11 | yes |
| zstd | 4 | 0.087 | 5,154 | 0.2646 | 9 | yes |
| zstd | 5 | 0.171 | 5,074 | 0.2605 | 11 | yes |
| zstd | 6 | 0.240 | 4,797 | 0.2463 | 9 | yes |
| zstd | 7 | 0.289 | 4,702 | 0.2414 | 6 | yes |
| zstd | 8 | 0.323 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.404 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.500 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.583 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.637 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.995 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.819 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.936 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.895 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.886 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.893 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.660 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.711 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.735 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.722 | 4,348 | 0.2232 | 5 | yes |
