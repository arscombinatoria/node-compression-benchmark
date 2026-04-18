# Node Compression Benchmark

Last updated: 2026-04-18T21:18:47.082Z

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
| gzip | 1 | 0.955 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.986 | 30,134 | 0.3827 | 6 | yes |
| gzip | 3 | 1.078 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.213 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.557 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.844 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.031 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.423 | 27,530 | 0.3496 | 25 | no |
| gzip | 9 | 2.391 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.360 | 33,111 | 0.4205 | 21 | yes |
| brotli | 1 | 0.741 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.869 | 29,394 | 0.3733 | 5 | yes |
| brotli | 3 | 0.940 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.464 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.086 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.273 | 26,844 | 0.3409 | 11 | yes |
| brotli | 7 | 2.452 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.610 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.785 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 34.214 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.607 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.318 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.341 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.418 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 1.070 | 29,108 | 0.3696 | 13 | yes |
| zstd | 5 | 1.267 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.602 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.831 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.989 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.149 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.363 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.037 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.384 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.477 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.921 | 26,432 | 0.3357 | 6 | yes |
| zstd | 15 | 9.039 | 26,420 | 0.3355 | 6 | yes |
| zstd | 16 | 12.041 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 12.103 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 12.118 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 22.826 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 22.800 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 22.825 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 22.780 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 83.991 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 87.675 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 92.572 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.884 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 118.711 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.993 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 141.794 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 158.769 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.812 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.340 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.180 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.238 | 3,247,965 | 0.5935 | 6 | yes |
| brotli | 3 | 66.437 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 85.023 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 125.537 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 141.947 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 410.010 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 517.701 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 699.396 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6018.097 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12510.805 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.746 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.676 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 37.758 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 43.478 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.991 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 79.125 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 84.892 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 97.858 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 102.138 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 126.387 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 143.791 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 178.077 | 2,866,083 | 0.5237 | 8 | yes |
| zstd | 13 | 339.926 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 416.344 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 493.664 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 654.921 | 2,803,911 | 0.5123 | 6 | yes |
| zstd | 17 | 819.985 | 2,756,112 | 0.5036 | 6 | yes |
| zstd | 18 | 1130.902 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1253.402 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1248.926 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1257.172 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1256.150 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 11.957 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 11.951 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 11.971 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.457 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.489 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.516 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.481 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.416 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.503 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.277 | 613,595 | 0.9981 | 5 | yes |
| brotli | 1 | 0.232 | 614,785 | 1.0000 | 18 | yes |
| brotli | 2 | 0.644 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.840 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.094 | 614,785 | 1.0000 | 12 | yes |
| brotli | 5 | 1.574 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.648 | 614,785 | 1.0000 | 13 | yes |
| brotli | 7 | 1.932 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.030 | 614,785 | 1.0000 | 7 | yes |
| brotli | 9 | 3.026 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 108.880 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 247.062 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.344 | 614,805 | 1.0000 | 6 | yes |
| zstd | 2 | 0.319 | 614,804 | 1.0000 | 7 | yes |
| zstd | 3 | 0.362 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.469 | 614,804 | 1.0000 | 7 | yes |
| zstd | 5 | 0.660 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.654 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.811 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.810 | 614,804 | 1.0000 | 13 | yes |
| zstd | 9 | 1.150 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 1.199 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 1.843 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 1.845 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 4.708 | 612,619 | 0.9965 | 25 | no |
| zstd | 14 | 4.270 | 612,619 | 0.9965 | 8 | yes |
| zstd | 15 | 4.267 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 16.830 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 16.410 | 612,516 | 0.9963 | 6 | yes |
| zstd | 18 | 22.312 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 26.182 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 25.993 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 29.061 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 28.257 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 485,915 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.821 | 143,918 | 0.2962 | 5 | yes |
| gzip | 2 | 4.168 | 137,173 | 0.2823 | 5 | yes |
| gzip | 3 | 5.365 | 132,619 | 0.2729 | 5 | yes |
| gzip | 4 | 5.701 | 124,435 | 0.2561 | 5 | yes |
| gzip | 5 | 8.072 | 119,872 | 0.2467 | 5 | yes |
| gzip | 6 | 11.591 | 118,159 | 0.2432 | 5 | yes |
| gzip | 7 | 14.750 | 117,684 | 0.2422 | 5 | yes |
| gzip | 8 | 27.482 | 117,420 | 0.2416 | 5 | yes |
| gzip | 9 | 44.037 | 117,341 | 0.2415 | 5 | yes |
| brotli | 0 | 1.528 | 148,158 | 0.3049 | 5 | yes |
| brotli | 1 | 2.141 | 136,127 | 0.2801 | 5 | yes |
| brotli | 2 | 3.894 | 127,990 | 0.2634 | 5 | yes |
| brotli | 3 | 4.494 | 125,439 | 0.2582 | 5 | yes |
| brotli | 4 | 6.511 | 121,316 | 0.2497 | 5 | yes |
| brotli | 5 | 9.889 | 111,622 | 0.2297 | 5 | yes |
| brotli | 6 | 11.275 | 108,985 | 0.2243 | 5 | yes |
| brotli | 7 | 13.635 | 107,045 | 0.2203 | 5 | yes |
| brotli | 8 | 16.507 | 106,028 | 0.2182 | 5 | yes |
| brotli | 9 | 20.811 | 105,144 | 0.2164 | 5 | yes |
| brotli | 10 | 269.416 | 97,735 | 0.2011 | 5 | yes |
| brotli | 11 | 711.466 | 95,569 | 0.1967 | 5 | yes |
| zstd | 1 | 1.656 | 136,842 | 0.2816 | 5 | yes |
| zstd | 2 | 1.787 | 132,630 | 0.2729 | 5 | yes |
| zstd | 3 | 2.172 | 125,091 | 0.2574 | 5 | yes |
| zstd | 4 | 2.361 | 124,872 | 0.2570 | 5 | yes |
| zstd | 5 | 4.631 | 116,228 | 0.2392 | 5 | yes |
| zstd | 6 | 6.241 | 112,389 | 0.2313 | 5 | yes |
| zstd | 7 | 7.193 | 110,841 | 0.2281 | 5 | yes |
| zstd | 8 | 8.808 | 110,049 | 0.2265 | 5 | yes |
| zstd | 9 | 8.894 | 110,049 | 0.2265 | 5 | yes |
| zstd | 10 | 10.399 | 109,065 | 0.2245 | 5 | yes |
| zstd | 11 | 13.919 | 108,471 | 0.2232 | 5 | yes |
| zstd | 12 | 14.296 | 108,471 | 0.2232 | 5 | yes |
| zstd | 13 | 26.134 | 107,311 | 0.2208 | 5 | yes |
| zstd | 14 | 31.172 | 106,716 | 0.2196 | 5 | yes |
| zstd | 15 | 35.558 | 106,629 | 0.2194 | 5 | yes |
| zstd | 16 | 63.042 | 101,092 | 0.2080 | 5 | yes |
| zstd | 17 | 68.742 | 100,205 | 0.2062 | 5 | yes |
| zstd | 18 | 108.730 | 99,418 | 0.2046 | 5 | yes |
| zstd | 19 | 142.219 | 99,302 | 0.2044 | 5 | yes |
| zstd | 20 | 142.088 | 99,302 | 0.2044 | 5 | yes |
| zstd | 21 | 144.163 | 99,327 | 0.2044 | 5 | yes |
| zstd | 22 | 144.225 | 99,327 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.104 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.119 | 4,874 | 0.2831 | 18 | yes |
| gzip | 3 | 0.129 | 4,806 | 0.2791 | 23 | yes |
| gzip | 4 | 0.178 | 4,530 | 0.2631 | 7 | yes |
| gzip | 5 | 0.249 | 4,441 | 0.2579 | 6 | yes |
| gzip | 6 | 0.286 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.314 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.465 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.468 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.055 | 5,235 | 0.3041 | 16 | yes |
| brotli | 1 | 0.063 | 5,134 | 0.2982 | 9 | yes |
| brotli | 2 | 0.111 | 4,741 | 0.2754 | 25 | yes |
| brotli | 3 | 0.144 | 4,650 | 0.2701 | 17 | yes |
| brotli | 4 | 0.264 | 4,555 | 0.2646 | 8 | yes |
| brotli | 5 | 0.394 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.399 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.429 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.454 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.544 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.944 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.782 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.056 | 4,923 | 0.2859 | 16 | yes |
| zstd | 2 | 0.067 | 4,868 | 0.2827 | 10 | yes |
| zstd | 3 | 0.090 | 4,717 | 0.2740 | 9 | yes |
| zstd | 4 | 0.094 | 4,679 | 0.2718 | 18 | yes |
| zstd | 5 | 0.179 | 4,519 | 0.2625 | 25 | no |
| zstd | 6 | 0.238 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.287 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.299 | 4,426 | 0.2571 | 12 | yes |
| zstd | 9 | 0.373 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.401 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.627 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.670 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.944 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.465 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.586 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.551 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.678 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.716 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.315 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.286 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.279 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.309 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.056 | 3,217 | 0.4493 | 25 | no |
| gzip | 2 | 0.056 | 3,179 | 0.4440 | 23 | yes |
| gzip | 3 | 0.066 | 3,150 | 0.4399 | 25 | no |
| gzip | 4 | 0.159 | 3,092 | 0.4318 | 8 | yes |
| gzip | 5 | 0.089 | 3,047 | 0.4256 | 25 | no |
| gzip | 6 | 0.101 | 3,041 | 0.4247 | 25 | no |
| gzip | 7 | 0.104 | 3,039 | 0.4244 | 17 | yes |
| gzip | 8 | 0.111 | 3,039 | 0.4244 | 5 | yes |
| gzip | 9 | 0.109 | 3,039 | 0.4244 | 25 | no |
| brotli | 0 | 0.031 | 3,544 | 0.4950 | 12 | yes |
| brotli | 1 | 0.038 | 3,378 | 0.4718 | 10 | yes |
| brotli | 2 | 0.060 | 3,258 | 0.4550 | 17 | yes |
| brotli | 3 | 0.076 | 3,207 | 0.4479 | 25 | no |
| brotli | 4 | 0.154 | 3,138 | 0.4383 | 12 | yes |
| brotli | 5 | 0.218 | 2,961 | 0.4135 | 13 | yes |
| brotli | 6 | 0.236 | 2,950 | 0.4120 | 5 | yes |
| brotli | 7 | 0.254 | 2,942 | 0.4109 | 5 | yes |
| brotli | 8 | 0.252 | 2,942 | 0.4109 | 5 | yes |
| brotli | 9 | 0.302 | 2,943 | 0.4110 | 5 | yes |
| brotli | 10 | 3.296 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 7.948 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.038 | 3,250 | 0.4539 | 5 | yes |
| zstd | 2 | 0.038 | 3,196 | 0.4464 | 16 | yes |
| zstd | 3 | 0.049 | 3,171 | 0.4429 | 6 | yes |
| zstd | 4 | 0.069 | 3,098 | 0.4327 | 25 | no |
| zstd | 5 | 0.087 | 3,077 | 0.4297 | 9 | yes |
| zstd | 6 | 0.101 | 3,055 | 0.4267 | 25 | no |
| zstd | 7 | 0.113 | 3,050 | 0.4260 | 8 | yes |
| zstd | 8 | 0.117 | 3,050 | 0.4260 | 14 | yes |
| zstd | 9 | 0.181 | 3,050 | 0.4260 | 12 | yes |
| zstd | 10 | 0.180 | 3,050 | 0.4260 | 7 | yes |
| zstd | 11 | 0.357 | 3,041 | 0.4247 | 5 | yes |
| zstd | 12 | 0.495 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.684 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.689 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.678 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.302 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.295 | 2,991 | 0.4177 | 5 | yes |
| zstd | 18 | 1.292 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.299 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.287 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.311 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.298 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.843 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 2.018 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.264 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.553 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.421 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.254 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 4.660 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 4.999 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 4.981 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.869 | 70,918 | 0.4333 | 5 | yes |
| brotli | 1 | 0.876 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.651 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 1.922 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 3.012 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.487 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 4.933 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 5.649 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 6.232 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 7.245 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 97.343 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 248.496 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.622 | 65,987 | 0.4032 | 5 | yes |
| zstd | 2 | 0.801 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 1.049 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.870 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.254 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.618 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 3.009 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 3.680 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.269 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 5.095 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 8.536 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 8.629 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 15.476 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 18.216 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 18.270 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 25.120 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 25.172 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 42.427 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 42.655 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 42.785 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 42.625 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 42.864 | 55,612 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.783 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.835 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.973 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.070 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.385 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.777 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.100 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.858 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.866 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.291 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.375 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.708 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.800 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.328 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.961 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.106 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.466 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.720 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.203 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 40.064 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 98.290 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.249 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.301 | 28,008 | 0.3824 | 8 | yes |
| zstd | 3 | 0.369 | 27,463 | 0.3750 | 6 | yes |
| zstd | 4 | 0.501 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.907 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.171 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.333 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.510 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.699 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 2.001 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.303 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.513 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.500 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.856 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.995 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.928 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.935 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 11.011 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.594 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.825 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.872 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.822 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.583 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.662 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.795 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.914 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.262 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.891 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.519 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.596 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.764 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.249 | 25,901 | 0.3420 | 12 | yes |
| brotli | 1 | 0.364 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.643 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.749 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.130 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.722 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.915 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.245 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.614 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.418 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 29.794 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 87.815 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.279 | 22,639 | 0.2989 | 5 | yes |
| zstd | 2 | 0.290 | 22,433 | 0.2962 | 5 | yes |
| zstd | 3 | 0.341 | 22,208 | 0.2932 | 12 | yes |
| zstd | 4 | 0.430 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.780 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.095 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.314 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.482 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.887 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.454 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.258 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.258 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.141 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.241 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.409 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.661 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.878 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 21.607 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 22.481 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 26.630 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 37.698 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 43.757 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.087 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.131 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.330 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.722 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.149 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.907 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.563 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.718 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.833 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.459 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.629 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.192 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.380 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.045 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.004 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.321 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.630 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.146 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.045 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 98.406 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 302.784 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.505 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.550 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.606 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.604 | 30,973 | 0.1334 | 9 | yes |
| zstd | 5 | 2.085 | 29,744 | 0.1281 | 25 | no |
| zstd | 6 | 2.296 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.550 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.937 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.555 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.511 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.192 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.042 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.573 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.662 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.109 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.696 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 63.727 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 84.685 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 96.630 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 100.831 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 101.289 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 101.029 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 91.146 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 91.276 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 108.765 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 143.842 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 168.680 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 214.811 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 321.563 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 904.877 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1204.643 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 44.914 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 60.464 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 110.759 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 127.444 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 161.973 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 299.122 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 354.266 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 467.853 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 605.766 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 822.742 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 12845.065 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37437.224 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 44.972 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 55.101 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 66.586 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 69.002 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 140.458 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 198.092 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 226.873 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 286.188 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 296.283 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 395.203 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 591.610 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 625.276 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 769.912 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 996.545 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1266.419 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3181.627 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3680.624 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5148.785 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9465.148 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9757.982 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9664.136 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 10305.966 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.200 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.212 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.360 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.358 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.593 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.666 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.296 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.306 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.504 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.917 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.334 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.954 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.977 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.577 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.756 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 30.714 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.257 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 53.437 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 65.123 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 907.528 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1933.102 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.038 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.896 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.879 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.496 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.343 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.148 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.079 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.618 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.886 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.919 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.250 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.905 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 51.121 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 51.404 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 52.089 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 95.921 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 116.973 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 155.758 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 174.335 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 173.419 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 180.407 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 180.988 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.108 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.173 | 5,424 | 0.2784 | 5 | yes |
| gzip | 3 | 0.159 | 5,356 | 0.2749 | 18 | yes |
| gzip | 4 | 0.207 | 5,145 | 0.2641 | 7 | yes |
| gzip | 5 | 0.278 | 4,896 | 0.2513 | 6 | yes |
| gzip | 6 | 0.371 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.501 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.649 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.644 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.067 | 6,028 | 0.3094 | 5 | yes |
| brotli | 1 | 0.071 | 5,737 | 0.2945 | 17 | yes |
| brotli | 2 | 0.137 | 4,944 | 0.2538 | 9 | yes |
| brotli | 3 | 0.186 | 4,930 | 0.2531 | 5 | yes |
| brotli | 4 | 0.282 | 4,898 | 0.2514 | 7 | yes |
| brotli | 5 | 0.457 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.483 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.556 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.605 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.724 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.266 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.861 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.061 | 5,379 | 0.2761 | 11 | yes |
| zstd | 2 | 0.069 | 5,176 | 0.2657 | 19 | yes |
| zstd | 3 | 0.095 | 5,169 | 0.2653 | 6 | yes |
| zstd | 4 | 0.095 | 5,154 | 0.2646 | 10 | yes |
| zstd | 5 | 0.189 | 5,074 | 0.2605 | 5 | yes |
| zstd | 6 | 0.250 | 4,797 | 0.2463 | 7 | yes |
| zstd | 7 | 0.303 | 4,702 | 0.2414 | 9 | yes |
| zstd | 8 | 0.343 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.425 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.501 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.613 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.656 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.026 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.823 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.940 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.889 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.888 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.886 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.627 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.680 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.725 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.675 | 4,348 | 0.2232 | 5 | yes |
