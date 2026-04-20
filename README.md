# Node Compression Benchmark

Last updated: 2026-04-20T23:02:13.187Z

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
| gzip | 1 | 0.919 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.931 | 30,134 | 0.3827 | 7 | yes |
| gzip | 3 | 1.054 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.196 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.561 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.853 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.037 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.364 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.379 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.364 | 33,111 | 0.4205 | 11 | yes |
| brotli | 1 | 0.750 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.802 | 29,394 | 0.3733 | 9 | yes |
| brotli | 3 | 0.978 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.496 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.089 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.240 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 2.478 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.647 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.716 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 50.726 | 25,340 | 0.3218 | 10 | yes |
| brotli | 11 | 98.887 | 24,992 | 0.3174 | 7 | yes |
| zstd | 1 | 0.498 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.366 | 30,069 | 0.3818 | 7 | yes |
| zstd | 3 | 0.426 | 29,214 | 0.3710 | 9 | yes |
| zstd | 4 | 0.572 | 29,108 | 0.3696 | 25 | no |
| zstd | 5 | 1.500 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.618 | 27,592 | 0.3504 | 16 | yes |
| zstd | 7 | 1.869 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.983 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.205 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.396 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.050 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.343 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.427 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.962 | 26,432 | 0.3357 | 7 | yes |
| zstd | 15 | 9.070 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 12.174 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.696 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 12.123 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 22.730 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 22.962 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 22.959 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 22.149 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 83.997 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 86.948 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 91.733 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 103.326 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 118.451 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 133.324 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 142.001 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 158.902 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 170.959 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.190 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.050 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.226 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.987 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 87.781 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 126.929 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 141.657 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 408.203 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 533.051 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 734.147 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6060.052 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12441.393 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.790 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.817 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 40.520 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 43.965 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.782 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.808 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 85.062 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 98.316 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 99.860 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 119.455 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 138.802 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 174.400 | 2,866,083 | 0.5237 | 6 | yes |
| zstd | 13 | 312.316 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 397.023 | 2,852,038 | 0.5211 | 6 | yes |
| zstd | 15 | 459.789 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 640.595 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 731.965 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1056.819 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1165.126 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1184.265 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1222.487 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1207.670 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 11.961 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 11.923 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 11.883 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.485 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.447 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.415 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.390 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.405 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.507 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.278 | 613,595 | 0.9981 | 5 | yes |
| brotli | 1 | 0.249 | 614,785 | 1.0000 | 7 | yes |
| brotli | 2 | 0.623 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.817 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.131 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.541 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.549 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 2.043 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.331 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 3.093 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 108.159 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 245.551 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.324 | 614,805 | 1.0000 | 6 | yes |
| zstd | 2 | 0.373 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.405 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.620 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.660 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.663 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.818 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.803 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 1.165 | 614,804 | 1.0000 | 13 | yes |
| zstd | 10 | 1.079 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 1.765 | 614,804 | 1.0000 | 9 | yes |
| zstd | 12 | 1.791 | 614,804 | 1.0000 | 25 | no |
| zstd | 13 | 4.619 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 4.285 | 612,619 | 0.9965 | 7 | yes |
| zstd | 15 | 4.104 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 15.368 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 15.936 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 21.541 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 25.942 | 612,518 | 0.9963 | 6 | yes |
| zstd | 20 | 26.428 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 28.059 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 26.988 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 485,915 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.981 | 143,918 | 0.2962 | 5 | yes |
| gzip | 2 | 4.302 | 137,173 | 0.2823 | 5 | yes |
| gzip | 3 | 5.512 | 132,619 | 0.2729 | 5 | yes |
| gzip | 4 | 5.863 | 124,435 | 0.2561 | 5 | yes |
| gzip | 5 | 8.212 | 119,872 | 0.2467 | 5 | yes |
| gzip | 6 | 11.769 | 118,159 | 0.2432 | 5 | yes |
| gzip | 7 | 14.846 | 117,684 | 0.2422 | 5 | yes |
| gzip | 8 | 27.662 | 117,420 | 0.2416 | 5 | yes |
| gzip | 9 | 42.670 | 117,341 | 0.2415 | 5 | yes |
| brotli | 0 | 1.497 | 148,158 | 0.3049 | 5 | yes |
| brotli | 1 | 2.150 | 136,127 | 0.2801 | 5 | yes |
| brotli | 2 | 3.895 | 127,990 | 0.2634 | 5 | yes |
| brotli | 3 | 4.484 | 125,439 | 0.2582 | 5 | yes |
| brotli | 4 | 6.369 | 121,316 | 0.2497 | 5 | yes |
| brotli | 5 | 9.989 | 111,622 | 0.2297 | 5 | yes |
| brotli | 6 | 11.391 | 108,985 | 0.2243 | 5 | yes |
| brotli | 7 | 13.717 | 107,045 | 0.2203 | 5 | yes |
| brotli | 8 | 16.680 | 106,028 | 0.2182 | 5 | yes |
| brotli | 9 | 21.263 | 105,144 | 0.2164 | 5 | yes |
| brotli | 10 | 268.753 | 97,735 | 0.2011 | 5 | yes |
| brotli | 11 | 706.900 | 95,569 | 0.1967 | 5 | yes |
| zstd | 1 | 1.631 | 136,842 | 0.2816 | 5 | yes |
| zstd | 2 | 1.861 | 132,630 | 0.2729 | 5 | yes |
| zstd | 3 | 2.320 | 125,091 | 0.2574 | 6 | yes |
| zstd | 4 | 2.723 | 124,872 | 0.2570 | 10 | yes |
| zstd | 5 | 4.751 | 116,228 | 0.2392 | 5 | yes |
| zstd | 6 | 6.291 | 112,389 | 0.2313 | 5 | yes |
| zstd | 7 | 7.155 | 110,841 | 0.2281 | 5 | yes |
| zstd | 8 | 8.744 | 110,049 | 0.2265 | 5 | yes |
| zstd | 9 | 8.698 | 110,049 | 0.2265 | 5 | yes |
| zstd | 10 | 10.501 | 109,065 | 0.2245 | 5 | yes |
| zstd | 11 | 13.679 | 108,471 | 0.2232 | 5 | yes |
| zstd | 12 | 13.970 | 108,471 | 0.2232 | 5 | yes |
| zstd | 13 | 26.563 | 107,311 | 0.2208 | 5 | yes |
| zstd | 14 | 31.107 | 106,716 | 0.2196 | 5 | yes |
| zstd | 15 | 34.511 | 106,629 | 0.2194 | 5 | yes |
| zstd | 16 | 62.945 | 101,092 | 0.2080 | 5 | yes |
| zstd | 17 | 69.473 | 100,205 | 0.2062 | 5 | yes |
| zstd | 18 | 107.911 | 99,418 | 0.2046 | 5 | yes |
| zstd | 19 | 140.925 | 99,302 | 0.2044 | 5 | yes |
| zstd | 20 | 141.398 | 99,302 | 0.2044 | 5 | yes |
| zstd | 21 | 141.622 | 99,327 | 0.2044 | 5 | yes |
| zstd | 22 | 141.979 | 99,327 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.111 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.147 | 4,874 | 0.2831 | 5 | yes |
| gzip | 3 | 0.129 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.186 | 4,530 | 0.2631 | 5 | yes |
| gzip | 5 | 0.240 | 4,441 | 0.2579 | 7 | yes |
| gzip | 6 | 0.270 | 4,425 | 0.2570 | 6 | yes |
| gzip | 7 | 0.313 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.452 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.460 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.057 | 5,235 | 0.3041 | 20 | yes |
| brotli | 1 | 0.081 | 5,134 | 0.2982 | 5 | yes |
| brotli | 2 | 0.114 | 4,741 | 0.2754 | 25 | no |
| brotli | 3 | 0.155 | 4,650 | 0.2701 | 13 | yes |
| brotli | 4 | 0.274 | 4,555 | 0.2646 | 9 | yes |
| brotli | 5 | 0.390 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.407 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.436 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.465 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.559 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.904 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.765 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.058 | 4,923 | 0.2859 | 13 | yes |
| zstd | 2 | 0.067 | 4,868 | 0.2827 | 13 | yes |
| zstd | 3 | 0.095 | 4,717 | 0.2740 | 25 | yes |
| zstd | 4 | 0.105 | 4,679 | 0.2718 | 9 | yes |
| zstd | 5 | 0.185 | 4,519 | 0.2625 | 5 | yes |
| zstd | 6 | 0.241 | 4,437 | 0.2577 | 9 | yes |
| zstd | 7 | 0.273 | 4,437 | 0.2577 | 7 | yes |
| zstd | 8 | 0.292 | 4,426 | 0.2571 | 6 | yes |
| zstd | 9 | 0.366 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.381 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.621 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.664 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.953 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.467 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.593 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.549 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.711 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.684 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.279 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.282 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.276 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.293 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.055 | 3,217 | 0.4493 | 25 | no |
| gzip | 2 | 0.071 | 3,179 | 0.4440 | 25 | no |
| gzip | 3 | 0.065 | 3,150 | 0.4399 | 25 | no |
| gzip | 4 | 0.068 | 3,092 | 0.4318 | 25 | no |
| gzip | 5 | 0.112 | 3,047 | 0.4256 | 5 | yes |
| gzip | 6 | 0.081 | 3,041 | 0.4247 | 25 | no |
| gzip | 7 | 0.092 | 3,039 | 0.4244 | 9 | yes |
| gzip | 8 | 0.092 | 3,039 | 0.4244 | 21 | yes |
| gzip | 9 | 0.090 | 3,039 | 0.4244 | 5 | yes |
| brotli | 0 | 0.031 | 3,544 | 0.4950 | 25 | no |
| brotli | 1 | 0.038 | 3,378 | 0.4718 | 12 | yes |
| brotli | 2 | 0.063 | 3,258 | 0.4550 | 12 | yes |
| brotli | 3 | 0.079 | 3,207 | 0.4479 | 25 | no |
| brotli | 4 | 0.156 | 3,138 | 0.4383 | 14 | yes |
| brotli | 5 | 0.240 | 2,961 | 0.4135 | 5 | yes |
| brotli | 6 | 0.230 | 2,950 | 0.4120 | 5 | yes |
| brotli | 7 | 0.248 | 2,942 | 0.4109 | 8 | yes |
| brotli | 8 | 0.271 | 2,942 | 0.4109 | 5 | yes |
| brotli | 9 | 0.315 | 2,943 | 0.4110 | 5 | yes |
| brotli | 10 | 3.295 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 7.874 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.038 | 3,250 | 0.4539 | 11 | yes |
| zstd | 2 | 0.040 | 3,196 | 0.4464 | 25 | no |
| zstd | 3 | 0.048 | 3,171 | 0.4429 | 6 | yes |
| zstd | 4 | 0.074 | 3,098 | 0.4327 | 25 | no |
| zstd | 5 | 0.076 | 3,077 | 0.4297 | 24 | yes |
| zstd | 6 | 0.106 | 3,055 | 0.4267 | 25 | no |
| zstd | 7 | 0.131 | 3,050 | 0.4260 | 17 | yes |
| zstd | 8 | 0.124 | 3,050 | 0.4260 | 12 | yes |
| zstd | 9 | 0.174 | 3,050 | 0.4260 | 12 | yes |
| zstd | 10 | 0.175 | 3,050 | 0.4260 | 5 | yes |
| zstd | 11 | 0.350 | 3,041 | 0.4247 | 5 | yes |
| zstd | 12 | 0.480 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.687 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.680 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.667 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.279 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.281 | 2,991 | 0.4177 | 5 | yes |
| zstd | 18 | 1.285 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.286 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.299 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.300 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.295 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.845 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 1.997 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.270 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.608 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.401 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.210 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 4.587 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 4.940 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 5.025 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.647 | 70,918 | 0.4333 | 5 | yes |
| brotli | 1 | 0.853 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.651 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 1.921 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 3.020 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.426 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 4.903 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 5.685 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 6.188 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 7.234 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 96.545 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 247.134 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.621 | 65,987 | 0.4032 | 10 | yes |
| zstd | 2 | 0.798 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 1.036 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.804 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.087 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.581 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 3.019 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 3.683 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.225 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 5.088 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 8.335 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 8.644 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 15.132 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 17.847 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 18.863 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 25.214 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 25.067 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 42.343 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 42.388 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 42.445 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 42.469 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 42.823 | 55,612 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.761 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.829 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.952 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.068 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.388 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.759 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.104 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.837 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.835 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.273 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.366 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.686 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.819 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.504 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 2.165 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.300 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.713 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 3.077 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.426 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 39.989 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 96.936 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.262 | 28,919 | 0.3949 | 5 | yes |
| zstd | 2 | 0.281 | 28,008 | 0.3824 | 10 | yes |
| zstd | 3 | 0.372 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.463 | 27,100 | 0.3700 | 12 | yes |
| zstd | 5 | 0.836 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.156 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.344 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.471 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.680 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.969 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.233 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.400 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.423 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.737 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.873 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.926 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.899 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.892 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.694 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.785 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.601 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.653 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.573 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.651 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.801 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.895 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.240 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.877 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.508 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.571 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.630 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.260 | 25,901 | 0.3420 | 5 | yes |
| brotli | 1 | 0.353 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.633 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.746 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.133 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.684 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.885 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.250 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.643 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.377 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 29.662 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 87.607 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.261 | 22,639 | 0.2989 | 5 | yes |
| zstd | 2 | 0.278 | 22,433 | 0.2962 | 7 | yes |
| zstd | 3 | 0.360 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.442 | 22,181 | 0.2929 | 25 | no |
| zstd | 5 | 0.764 | 21,579 | 0.2849 | 6 | yes |
| zstd | 6 | 1.064 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.325 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.499 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.857 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.407 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.263 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.182 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.143 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.207 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.372 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.587 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.763 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 21.691 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 22.521 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 26.335 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.605 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 44.308 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.079 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.116 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.326 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.706 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.193 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.884 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.553 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.786 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.773 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.446 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.623 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.185 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.399 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.377 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.268 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.542 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.920 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.467 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.354 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 97.723 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 301.490 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.475 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.533 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.621 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.586 | 30,973 | 0.1334 | 6 | yes |
| zstd | 5 | 1.996 | 29,744 | 0.1281 | 13 | yes |
| zstd | 6 | 2.223 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.339 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.985 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.574 | 28,235 | 0.1216 | 6 | yes |
| zstd | 10 | 4.444 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.026 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.892 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.991 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.322 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.069 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.253 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 63.528 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 84.693 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 96.264 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 101.033 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 100.911 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 100.783 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 91.835 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 91.413 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 109.213 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 144.873 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 168.482 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 215.647 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 321.704 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 904.118 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1201.416 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 44.685 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 60.707 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 110.732 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 127.679 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 164.445 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 293.913 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 343.145 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 477.666 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 605.014 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 795.065 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 12513.678 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37348.084 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.579 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 55.577 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 67.288 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 70.545 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 142.150 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 199.747 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 228.454 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 293.275 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 289.764 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 396.228 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 600.172 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 637.023 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 810.788 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1046.553 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1353.128 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3296.480 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3476.784 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5007.575 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9119.414 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9327.247 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9414.819 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9763.283 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.212 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.195 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.349 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.354 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.408 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.613 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.256 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.164 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.654 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.904 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.334 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.955 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.985 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.639 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.663 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.033 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.271 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 51.699 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 64.141 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 903.318 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1922.761 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.037 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.904 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 6.021 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.668 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.553 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.941 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.204 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.651 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.139 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.696 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.758 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.601 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 51.361 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 51.959 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 51.853 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 89.484 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 112.725 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 150.060 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 166.676 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 167.461 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 166.771 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 168.762 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.095 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.125 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.161 | 5,356 | 0.2749 | 9 | yes |
| gzip | 4 | 0.190 | 5,145 | 0.2641 | 11 | yes |
| gzip | 5 | 0.270 | 4,896 | 0.2513 | 5 | yes |
| gzip | 6 | 0.357 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.476 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.638 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.636 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.057 | 6,028 | 0.3094 | 12 | yes |
| brotli | 1 | 0.069 | 5,737 | 0.2945 | 8 | yes |
| brotli | 2 | 0.158 | 4,944 | 0.2538 | 5 | yes |
| brotli | 3 | 0.192 | 4,930 | 0.2531 | 5 | yes |
| brotli | 4 | 0.353 | 4,898 | 0.2514 | 5 | yes |
| brotli | 5 | 0.533 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.571 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.636 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.691 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.784 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.247 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.846 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.059 | 5,379 | 0.2761 | 8 | yes |
| zstd | 2 | 0.066 | 5,176 | 0.2657 | 17 | yes |
| zstd | 3 | 0.096 | 5,169 | 0.2653 | 8 | yes |
| zstd | 4 | 0.094 | 5,154 | 0.2646 | 25 | no |
| zstd | 5 | 0.192 | 5,074 | 0.2605 | 24 | yes |
| zstd | 6 | 0.261 | 4,797 | 0.2463 | 11 | yes |
| zstd | 7 | 0.314 | 4,702 | 0.2414 | 6 | yes |
| zstd | 8 | 0.342 | 4,696 | 0.2411 | 7 | yes |
| zstd | 9 | 0.428 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.520 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.610 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.650 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.010 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.818 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.908 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.882 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.866 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.874 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.641 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.655 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.661 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.696 | 4,348 | 0.2232 | 5 | yes |
