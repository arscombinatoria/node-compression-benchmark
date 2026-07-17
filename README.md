# Node Compression Benchmark

Last updated: 2026-07-16T21:17:51.407Z

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
| gzip | 1 | 0.990 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.986 | 30,134 | 0.3827 | 8 | yes |
| gzip | 3 | 1.095 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.232 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.557 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.851 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.041 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.383 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.395 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.380 | 33,111 | 0.4205 | 6 | yes |
| brotli | 1 | 0.783 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.867 | 29,394 | 0.3733 | 6 | yes |
| brotli | 3 | 0.979 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.537 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.207 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 3.388 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.954 | 26,773 | 0.3400 | 25 | no |
| brotli | 8 | 2.716 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.537 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 34.124 | 25,340 | 0.3218 | 9 | yes |
| brotli | 11 | 95.805 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.296 | 31,062 | 0.3944 | 7 | yes |
| zstd | 2 | 0.349 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.659 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.694 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 1.360 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.828 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.476 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.602 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.764 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.985 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.357 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.491 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.538 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.922 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.067 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.220 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.132 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.134 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.824 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.748 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.710 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.630 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 85.513 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 86.356 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 91.594 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 105.894 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 117.499 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 131.445 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 140.741 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 156.400 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 169.269 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.234 | 3,488,111 | 0.6374 | 8 | yes |
| brotli | 1 | 28.024 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 48.680 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 61.398 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 83.088 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 122.221 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 137.484 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 394.292 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 503.261 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 636.363 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5729.441 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12316.317 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.627 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.411 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 37.778 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 41.715 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.081 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.059 | 2,994,480 | 0.5472 | 13 | yes |
| zstd | 7 | 82.887 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 98.197 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 96.510 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 117.196 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 144.141 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 168.418 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 303.364 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 381.069 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 449.852 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 575.496 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 714.667 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1042.068 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1151.718 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1185.526 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1204.267 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1201.685 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.301 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.284 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.133 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.624 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.707 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.668 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 11.829 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.685 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.524 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.224 | 613,595 | 0.9981 | 5 | yes |
| brotli | 1 | 0.217 | 614,785 | 1.0000 | 9 | yes |
| brotli | 2 | 0.599 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.782 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.024 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.447 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.454 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 1.988 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.003 | 614,785 | 1.0000 | 14 | yes |
| brotli | 9 | 3.964 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 105.490 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 240.631 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.309 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.269 | 614,804 | 1.0000 | 17 | yes |
| zstd | 3 | 0.317 | 614,804 | 1.0000 | 17 | yes |
| zstd | 4 | 0.334 | 614,804 | 1.0000 | 13 | yes |
| zstd | 5 | 0.461 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.454 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.532 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.543 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.591 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.632 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.655 | 614,804 | 1.0000 | 9 | yes |
| zstd | 12 | 0.662 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.128 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 2.139 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 2.115 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 13.792 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 14.122 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 20.806 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 24.994 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 25.059 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 24.935 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 25.076 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,236 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.838 | 145,182 | 0.2961 | 5 | yes |
| gzip | 2 | 4.172 | 138,423 | 0.2824 | 5 | yes |
| gzip | 3 | 5.450 | 133,882 | 0.2731 | 5 | yes |
| gzip | 4 | 5.721 | 125,608 | 0.2562 | 5 | yes |
| gzip | 5 | 8.009 | 120,963 | 0.2467 | 5 | yes |
| gzip | 6 | 11.607 | 119,255 | 0.2433 | 5 | yes |
| gzip | 7 | 14.706 | 118,789 | 0.2423 | 5 | yes |
| gzip | 8 | 27.532 | 118,515 | 0.2418 | 5 | yes |
| gzip | 9 | 42.673 | 118,446 | 0.2416 | 5 | yes |
| brotli | 0 | 1.523 | 149,404 | 0.3048 | 5 | yes |
| brotli | 1 | 2.164 | 137,364 | 0.2802 | 5 | yes |
| brotli | 2 | 3.939 | 129,155 | 0.2635 | 5 | yes |
| brotli | 3 | 4.438 | 126,568 | 0.2582 | 5 | yes |
| brotli | 4 | 6.539 | 122,453 | 0.2498 | 5 | yes |
| brotli | 5 | 9.906 | 112,692 | 0.2299 | 5 | yes |
| brotli | 6 | 11.455 | 110,011 | 0.2244 | 5 | yes |
| brotli | 7 | 13.675 | 108,041 | 0.2204 | 5 | yes |
| brotli | 8 | 16.575 | 107,001 | 0.2183 | 5 | yes |
| brotli | 9 | 21.985 | 106,112 | 0.2165 | 5 | yes |
| brotli | 10 | 266.152 | 98,636 | 0.2012 | 5 | yes |
| brotli | 11 | 711.625 | 96,403 | 0.1966 | 5 | yes |
| zstd | 1 | 1.633 | 138,123 | 0.2817 | 5 | yes |
| zstd | 2 | 1.772 | 133,890 | 0.2731 | 5 | yes |
| zstd | 3 | 2.293 | 126,208 | 0.2574 | 5 | yes |
| zstd | 4 | 2.269 | 126,023 | 0.2571 | 5 | yes |
| zstd | 5 | 4.400 | 117,405 | 0.2395 | 5 | yes |
| zstd | 6 | 6.035 | 113,440 | 0.2314 | 5 | yes |
| zstd | 7 | 6.737 | 111,894 | 0.2282 | 5 | yes |
| zstd | 8 | 8.481 | 111,138 | 0.2267 | 5 | yes |
| zstd | 9 | 8.526 | 111,138 | 0.2267 | 5 | yes |
| zstd | 10 | 10.238 | 110,160 | 0.2247 | 5 | yes |
| zstd | 11 | 12.814 | 109,468 | 0.2233 | 5 | yes |
| zstd | 12 | 12.517 | 109,468 | 0.2233 | 5 | yes |
| zstd | 13 | 25.544 | 108,280 | 0.2209 | 5 | yes |
| zstd | 14 | 31.102 | 107,640 | 0.2196 | 5 | yes |
| zstd | 15 | 34.767 | 107,626 | 0.2195 | 5 | yes |
| zstd | 16 | 63.017 | 102,010 | 0.2081 | 5 | yes |
| zstd | 17 | 69.670 | 101,107 | 0.2062 | 5 | yes |
| zstd | 18 | 108.535 | 100,287 | 0.2046 | 5 | yes |
| zstd | 19 | 142.441 | 100,211 | 0.2044 | 5 | yes |
| zstd | 20 | 142.481 | 100,211 | 0.2044 | 5 | yes |
| zstd | 21 | 142.895 | 100,213 | 0.2044 | 5 | yes |
| zstd | 22 | 142.359 | 100,213 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.093 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.136 | 4,874 | 0.2831 | 5 | yes |
| gzip | 3 | 0.128 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.170 | 4,530 | 0.2631 | 12 | yes |
| gzip | 5 | 0.223 | 4,441 | 0.2579 | 12 | yes |
| gzip | 6 | 0.272 | 4,425 | 0.2570 | 6 | yes |
| gzip | 7 | 0.311 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.470 | 4,419 | 0.2567 | 7 | yes |
| gzip | 9 | 0.463 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.055 | 5,235 | 0.3041 | 19 | yes |
| brotli | 1 | 0.065 | 5,134 | 0.2982 | 14 | yes |
| brotli | 2 | 0.133 | 4,741 | 0.2754 | 5 | yes |
| brotli | 3 | 0.145 | 4,650 | 0.2701 | 14 | yes |
| brotli | 4 | 0.259 | 4,555 | 0.2646 | 8 | yes |
| brotli | 5 | 0.377 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.401 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.437 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.464 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 1.876 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.706 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.301 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.048 | 4,923 | 0.2859 | 13 | yes |
| zstd | 2 | 0.052 | 4,868 | 0.2827 | 17 | yes |
| zstd | 3 | 0.066 | 4,717 | 0.2740 | 14 | yes |
| zstd | 4 | 0.072 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.161 | 4,519 | 0.2625 | 5 | yes |
| zstd | 6 | 0.217 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.239 | 4,437 | 0.2577 | 6 | yes |
| zstd | 8 | 0.284 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.327 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.371 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.590 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.640 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.906 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.435 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.539 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.490 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.466 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.486 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.908 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.255 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.220 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.229 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.057 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.062 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.063 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.084 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.077 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.089 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.088 | 3,042 | 0.4248 | 20 | yes |
| gzip | 8 | 0.093 | 3,042 | 0.4248 | 25 | no |
| gzip | 9 | 0.081 | 3,042 | 0.4248 | 5 | yes |
| brotli | 0 | 0.031 | 3,549 | 0.4956 | 23 | yes |
| brotli | 1 | 0.041 | 3,381 | 0.4721 | 25 | yes |
| brotli | 2 | 0.064 | 3,263 | 0.4557 | 25 | no |
| brotli | 3 | 0.076 | 3,216 | 0.4491 | 22 | yes |
| brotli | 4 | 0.148 | 3,147 | 0.4395 | 20 | yes |
| brotli | 5 | 0.206 | 2,963 | 0.4138 | 11 | yes |
| brotli | 6 | 0.240 | 2,952 | 0.4122 | 12 | yes |
| brotli | 7 | 0.252 | 2,944 | 0.4111 | 7 | yes |
| brotli | 8 | 0.251 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 1.644 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.076 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.682 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.057 | 3,254 | 0.4544 | 17 | yes |
| zstd | 2 | 0.063 | 3,200 | 0.4469 | 5 | yes |
| zstd | 3 | 0.075 | 3,176 | 0.4435 | 5 | yes |
| zstd | 4 | 0.064 | 3,102 | 0.4332 | 25 | no |
| zstd | 5 | 0.072 | 3,079 | 0.4300 | 20 | yes |
| zstd | 6 | 0.100 | 3,060 | 0.4273 | 25 | no |
| zstd | 7 | 0.119 | 3,053 | 0.4263 | 5 | yes |
| zstd | 8 | 0.114 | 3,053 | 0.4263 | 13 | yes |
| zstd | 9 | 0.154 | 3,055 | 0.4266 | 21 | yes |
| zstd | 10 | 0.165 | 3,055 | 0.4266 | 8 | yes |
| zstd | 11 | 0.340 | 3,044 | 0.4251 | 6 | yes |
| zstd | 12 | 0.479 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.657 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.666 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.662 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.271 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.272 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.287 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.184 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.246 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.206 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.290 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 165,599 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.880 | 67,507 | 0.4077 | 5 | yes |
| gzip | 2 | 1.998 | 65,886 | 0.3979 | 5 | yes |
| gzip | 3 | 2.269 | 64,874 | 0.3918 | 5 | yes |
| gzip | 4 | 2.421 | 62,487 | 0.3773 | 5 | yes |
| gzip | 5 | 3.162 | 60,848 | 0.3674 | 5 | yes |
| gzip | 6 | 3.920 | 60,570 | 0.3658 | 5 | yes |
| gzip | 7 | 4.306 | 60,527 | 0.3655 | 5 | yes |
| gzip | 8 | 4.973 | 60,509 | 0.3654 | 5 | yes |
| gzip | 9 | 4.994 | 60,509 | 0.3654 | 5 | yes |
| brotli | 0 | 0.669 | 71,790 | 0.4335 | 5 | yes |
| brotli | 1 | 0.900 | 68,843 | 0.4157 | 5 | yes |
| brotli | 2 | 1.557 | 63,505 | 0.3835 | 6 | yes |
| brotli | 3 | 1.903 | 62,945 | 0.3801 | 5 | yes |
| brotli | 4 | 2.794 | 61,772 | 0.3730 | 5 | yes |
| brotli | 5 | 4.406 | 58,412 | 0.3527 | 5 | yes |
| brotli | 6 | 4.857 | 58,008 | 0.3503 | 5 | yes |
| brotli | 7 | 5.787 | 57,755 | 0.3488 | 5 | yes |
| brotli | 8 | 6.229 | 57,667 | 0.3482 | 5 | yes |
| brotli | 9 | 8.518 | 57,589 | 0.3478 | 5 | yes |
| brotli | 10 | 94.599 | 54,874 | 0.3314 | 5 | yes |
| brotli | 11 | 241.102 | 53,818 | 0.3250 | 5 | yes |
| zstd | 1 | 0.613 | 66,843 | 0.4036 | 5 | yes |
| zstd | 2 | 0.809 | 63,844 | 0.3855 | 5 | yes |
| zstd | 3 | 0.991 | 63,294 | 0.3822 | 5 | yes |
| zstd | 4 | 1.789 | 61,396 | 0.3708 | 5 | yes |
| zstd | 5 | 2.014 | 60,869 | 0.3676 | 5 | yes |
| zstd | 6 | 2.522 | 59,979 | 0.3622 | 5 | yes |
| zstd | 7 | 2.940 | 59,158 | 0.3572 | 5 | yes |
| zstd | 8 | 3.624 | 58,671 | 0.3543 | 5 | yes |
| zstd | 9 | 4.190 | 58,430 | 0.3528 | 5 | yes |
| zstd | 10 | 4.951 | 58,290 | 0.3520 | 5 | yes |
| zstd | 11 | 8.196 | 57,983 | 0.3501 | 5 | yes |
| zstd | 12 | 8.397 | 57,969 | 0.3501 | 5 | yes |
| zstd | 13 | 14.908 | 56,943 | 0.3439 | 5 | yes |
| zstd | 14 | 18.007 | 56,556 | 0.3415 | 5 | yes |
| zstd | 15 | 18.325 | 56,517 | 0.3413 | 5 | yes |
| zstd | 16 | 24.669 | 56,330 | 0.3402 | 5 | yes |
| zstd | 17 | 24.668 | 56,330 | 0.3402 | 5 | yes |
| zstd | 18 | 42.369 | 56,259 | 0.3397 | 5 | yes |
| zstd | 19 | 42.355 | 56,259 | 0.3397 | 5 | yes |
| zstd | 20 | 42.390 | 56,259 | 0.3397 | 5 | yes |
| zstd | 21 | 42.436 | 56,259 | 0.3397 | 5 | yes |
| zstd | 22 | 42.419 | 56,259 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.782 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.845 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.960 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.088 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.376 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.758 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.097 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.837 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.829 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.263 | 30,978 | 0.4230 | 8 | yes |
| brotli | 1 | 0.385 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.699 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.795 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.326 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.911 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.065 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.452 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.703 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.405 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 38.863 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 95.618 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.251 | 28,919 | 0.3949 | 8 | yes |
| zstd | 2 | 0.290 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.344 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.459 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.795 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.105 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.296 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.416 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.635 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.893 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.139 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.301 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.322 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.602 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.711 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.762 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.725 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.767 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.441 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.448 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.182 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.221 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,169 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.648 | 25,582 | 0.2837 | 5 | yes |
| gzip | 2 | 0.723 | 25,330 | 0.2809 | 5 | yes |
| gzip | 3 | 0.858 | 25,125 | 0.2786 | 5 | yes |
| gzip | 4 | 1.018 | 23,752 | 0.2634 | 5 | yes |
| gzip | 5 | 1.352 | 22,851 | 0.2534 | 5 | yes |
| gzip | 6 | 2.039 | 22,618 | 0.2508 | 5 | yes |
| gzip | 7 | 2.703 | 22,513 | 0.2497 | 5 | yes |
| gzip | 8 | 7.880 | 22,266 | 0.2469 | 5 | yes |
| gzip | 9 | 7.959 | 22,264 | 0.2469 | 5 | yes |
| brotli | 0 | 0.268 | 27,662 | 0.3068 | 8 | yes |
| brotli | 1 | 0.406 | 25,918 | 0.2874 | 5 | yes |
| brotli | 2 | 0.706 | 23,445 | 0.2600 | 5 | yes |
| brotli | 3 | 0.813 | 23,374 | 0.2592 | 5 | yes |
| brotli | 4 | 1.142 | 22,948 | 0.2545 | 5 | yes |
| brotli | 5 | 1.780 | 21,885 | 0.2427 | 5 | yes |
| brotli | 6 | 1.914 | 21,770 | 0.2414 | 5 | yes |
| brotli | 7 | 2.259 | 21,692 | 0.2406 | 5 | yes |
| brotli | 8 | 2.710 | 21,642 | 0.2400 | 5 | yes |
| brotli | 9 | 4.682 | 21,554 | 0.2390 | 6 | yes |
| brotli | 10 | 35.162 | 18,928 | 0.2099 | 5 | yes |
| brotli | 11 | 102.423 | 18,418 | 0.2043 | 5 | yes |
| zstd | 1 | 0.292 | 24,558 | 0.2724 | 6 | yes |
| zstd | 2 | 0.329 | 24,331 | 0.2698 | 5 | yes |
| zstd | 3 | 0.363 | 24,100 | 0.2673 | 5 | yes |
| zstd | 4 | 0.428 | 24,021 | 0.2664 | 8 | yes |
| zstd | 5 | 0.787 | 23,309 | 0.2585 | 5 | yes |
| zstd | 6 | 1.102 | 22,411 | 0.2485 | 5 | yes |
| zstd | 7 | 1.353 | 21,911 | 0.2430 | 5 | yes |
| zstd | 8 | 1.555 | 21,844 | 0.2423 | 5 | yes |
| zstd | 9 | 1.937 | 21,770 | 0.2414 | 5 | yes |
| zstd | 10 | 2.539 | 21,703 | 0.2407 | 5 | yes |
| zstd | 11 | 3.579 | 21,560 | 0.2391 | 5 | yes |
| zstd | 12 | 4.773 | 21,531 | 0.2388 | 5 | yes |
| zstd | 13 | 5.838 | 21,345 | 0.2367 | 5 | yes |
| zstd | 14 | 8.297 | 20,515 | 0.2275 | 5 | yes |
| zstd | 15 | 9.849 | 20,378 | 0.2260 | 5 | yes |
| zstd | 16 | 14.836 | 20,209 | 0.2241 | 5 | yes |
| zstd | 17 | 18.851 | 20,179 | 0.2238 | 5 | yes |
| zstd | 18 | 27.278 | 20,175 | 0.2237 | 5 | yes |
| zstd | 19 | 31.632 | 20,183 | 0.2238 | 5 | yes |
| zstd | 20 | 36.691 | 20,146 | 0.2234 | 5 | yes |
| zstd | 21 | 48.207 | 20,138 | 0.2233 | 5 | yes |
| zstd | 22 | 53.368 | 20,133 | 0.2233 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.074 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.117 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.332 | 36,152 | 0.1558 | 8 | yes |
| gzip | 4 | 1.702 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.141 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.878 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.520 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.691 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.762 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.446 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.629 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.208 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.376 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.008 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.883 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.240 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.578 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.068 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.329 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 94.755 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 296.732 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.494 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.547 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.619 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.421 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.626 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.910 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.152 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.696 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.305 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.237 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.830 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.618 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.683 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.546 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 27.961 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 55.651 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 62.894 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 84.230 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 95.550 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 100.044 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 99.424 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 98.649 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,045,192 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 92.316 | 3,776,518 | 0.2216 | 5 | yes |
| gzip | 2 | 100.710 | 3,627,753 | 0.2128 | 5 | yes |
| gzip | 3 | 123.291 | 3,507,453 | 0.2058 | 5 | yes |
| gzip | 4 | 148.070 | 3,379,888 | 0.1983 | 5 | yes |
| gzip | 5 | 189.790 | 3,159,182 | 0.1853 | 5 | yes |
| gzip | 6 | 281.312 | 3,090,847 | 0.1813 | 5 | yes |
| gzip | 7 | 380.437 | 3,024,822 | 0.1775 | 5 | yes |
| gzip | 8 | 1063.702 | 2,957,000 | 0.1735 | 5 | yes |
| gzip | 9 | 1126.958 | 2,956,204 | 0.1734 | 5 | yes |
| brotli | 0 | 44.973 | 4,175,487 | 0.2450 | 5 | yes |
| brotli | 1 | 62.367 | 3,718,326 | 0.2181 | 5 | yes |
| brotli | 2 | 110.239 | 3,424,305 | 0.2009 | 5 | yes |
| brotli | 3 | 128.766 | 3,367,979 | 0.1976 | 5 | yes |
| brotli | 4 | 168.745 | 3,295,114 | 0.1933 | 5 | yes |
| brotli | 5 | 284.765 | 2,938,968 | 0.1724 | 5 | yes |
| brotli | 6 | 337.848 | 2,906,886 | 0.1705 | 5 | yes |
| brotli | 7 | 494.539 | 2,880,272 | 0.1690 | 5 | yes |
| brotli | 8 | 656.330 | 2,860,897 | 0.1678 | 5 | yes |
| brotli | 9 | 886.630 | 2,849,681 | 0.1672 | 5 | yes |
| brotli | 10 | 9878.294 | 2,442,746 | 0.1433 | 5 | yes |
| brotli | 11 | 27189.588 | 2,324,312 | 0.1364 | 5 | yes |
| zstd | 1 | 43.480 | 3,525,070 | 0.2068 | 5 | yes |
| zstd | 2 | 55.547 | 3,602,765 | 0.2114 | 7 | yes |
| zstd | 3 | 69.377 | 3,528,707 | 0.2070 | 5 | yes |
| zstd | 4 | 71.841 | 3,523,547 | 0.2067 | 5 | yes |
| zstd | 5 | 131.716 | 3,306,721 | 0.1940 | 5 | yes |
| zstd | 6 | 191.084 | 3,085,317 | 0.1810 | 5 | yes |
| zstd | 7 | 218.853 | 3,046,804 | 0.1787 | 5 | yes |
| zstd | 8 | 283.557 | 2,943,521 | 0.1727 | 5 | yes |
| zstd | 9 | 290.612 | 2,954,143 | 0.1733 | 5 | yes |
| zstd | 10 | 385.918 | 2,917,471 | 0.1712 | 5 | yes |
| zstd | 11 | 546.899 | 2,889,922 | 0.1695 | 5 | yes |
| zstd | 12 | 596.462 | 2,889,906 | 0.1695 | 5 | yes |
| zstd | 13 | 713.082 | 2,866,998 | 0.1682 | 5 | yes |
| zstd | 14 | 873.771 | 2,852,567 | 0.1674 | 5 | yes |
| zstd | 15 | 1139.465 | 2,848,994 | 0.1671 | 5 | yes |
| zstd | 16 | 2439.397 | 2,661,004 | 0.1561 | 5 | yes |
| zstd | 17 | 3135.125 | 2,568,659 | 0.1507 | 5 | yes |
| zstd | 18 | 5495.594 | 2,549,776 | 0.1496 | 5 | yes |
| zstd | 19 | 6351.807 | 2,542,941 | 0.1492 | 5 | yes |
| zstd | 20 | 6606.454 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 21 | 6295.206 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 22 | 6321.581 | 2,536,119 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.297 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.208 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.509 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.221 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.132 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.577 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 28.959 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 31.803 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 31.966 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.876 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.407 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.939 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.920 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.551 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.674 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 30.402 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 43.523 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 51.008 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 64.918 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 889.916 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1908.179 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 2.806 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.605 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.864 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.364 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.233 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.818 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.872 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.512 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.585 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.360 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 24.845 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 24.932 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 45.316 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 47.230 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 48.525 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 86.578 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 112.530 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 152.624 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 168.587 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 169.525 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 175.425 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 172.308 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.111 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.118 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.176 | 5,356 | 0.2749 | 5 | yes |
| gzip | 4 | 0.211 | 5,145 | 0.2641 | 5 | yes |
| gzip | 5 | 0.272 | 4,896 | 0.2513 | 5 | yes |
| gzip | 6 | 0.355 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.474 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.632 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.635 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.058 | 6,028 | 0.3094 | 9 | yes |
| brotli | 1 | 0.073 | 5,737 | 0.2945 | 13 | yes |
| brotli | 2 | 0.133 | 4,944 | 0.2538 | 25 | no |
| brotli | 3 | 0.166 | 4,930 | 0.2531 | 23 | yes |
| brotli | 4 | 0.284 | 4,898 | 0.2514 | 8 | yes |
| brotli | 5 | 0.461 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.486 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.553 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.612 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 2.217 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.162 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.465 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.059 | 5,379 | 0.2761 | 18 | yes |
| zstd | 2 | 0.061 | 5,176 | 0.2657 | 20 | yes |
| zstd | 3 | 0.081 | 5,169 | 0.2653 | 10 | yes |
| zstd | 4 | 0.082 | 5,154 | 0.2646 | 9 | yes |
| zstd | 5 | 0.171 | 5,074 | 0.2605 | 5 | yes |
| zstd | 6 | 0.245 | 4,797 | 0.2463 | 7 | yes |
| zstd | 7 | 0.289 | 4,702 | 0.2414 | 6 | yes |
| zstd | 8 | 0.325 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.396 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.492 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.585 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.650 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.985 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.789 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.897 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.870 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.882 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.867 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.623 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.665 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.668 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.664 | 4,348 | 0.2232 | 5 | yes |
