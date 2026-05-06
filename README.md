# Node Compression Benchmark

Last updated: 2026-05-06T23:09:02.849Z

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
| gzip | 1 | 1.354 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.441 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.544 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.220 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.592 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.866 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.043 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.377 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.379 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.374 | 33,111 | 0.4205 | 7 | yes |
| brotli | 1 | 0.766 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.808 | 29,394 | 0.3733 | 9 | yes |
| brotli | 3 | 0.917 | 29,072 | 0.3692 | 7 | yes |
| brotli | 4 | 1.425 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.044 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.187 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.590 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.504 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.222 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.714 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.653 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.348 | 31,062 | 0.3944 | 9 | yes |
| zstd | 2 | 0.343 | 30,069 | 0.3818 | 17 | yes |
| zstd | 3 | 0.416 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.547 | 29,108 | 0.3696 | 10 | yes |
| zstd | 5 | 0.945 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.240 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.830 | 27,383 | 0.3477 | 12 | yes |
| zstd | 8 | 1.957 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.165 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.390 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.024 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.370 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.456 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.886 | 26,432 | 0.3357 | 6 | yes |
| zstd | 15 | 9.026 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.574 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 12.207 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 12.071 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 22.931 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 22.853 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 22.150 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 22.881 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 83.650 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 86.866 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 94.376 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 103.307 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 119.034 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 133.712 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 142.152 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 158.807 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.097 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.517 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 27.475 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.278 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.111 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 82.515 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 124.447 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 141.172 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 411.585 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 494.540 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 641.098 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5773.335 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12254.538 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.582 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.469 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 39.241 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 42.016 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.513 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.005 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 83.426 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 97.166 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 96.253 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 114.766 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 138.399 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 169.347 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 300.438 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 391.105 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 453.112 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 577.798 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 711.758 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1034.258 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1143.792 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1180.448 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1204.234 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1210.354 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.156 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 11.999 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 11.980 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.464 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.569 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.512 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.492 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.406 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.426 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.260 | 613,595 | 0.9981 | 25 | no |
| brotli | 1 | 0.246 | 614,785 | 1.0000 | 12 | yes |
| brotli | 2 | 0.613 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.816 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.060 | 614,785 | 1.0000 | 8 | yes |
| brotli | 5 | 1.548 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.595 | 614,785 | 1.0000 | 9 | yes |
| brotli | 7 | 1.908 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 1.978 | 614,785 | 1.0000 | 13 | yes |
| brotli | 9 | 2.778 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 107.702 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 244.764 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.302 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.304 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.398 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.449 | 614,804 | 1.0000 | 8 | yes |
| zstd | 5 | 1.785 | 614,804 | 1.0000 | 8 | yes |
| zstd | 6 | 1.836 | 614,804 | 1.0000 | 6 | yes |
| zstd | 7 | 0.870 | 614,804 | 1.0000 | 25 | no |
| zstd | 8 | 1.023 | 614,804 | 1.0000 | 25 | no |
| zstd | 9 | 1.143 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 1.771 | 614,804 | 1.0000 | 9 | yes |
| zstd | 11 | 1.797 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 1.259 | 614,804 | 1.0000 | 25 | no |
| zstd | 13 | 4.219 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 4.114 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 4.111 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 14.786 | 612,536 | 0.9963 | 6 | yes |
| zstd | 17 | 16.718 | 612,516 | 0.9963 | 8 | yes |
| zstd | 18 | 22.696 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 26.517 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 26.481 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 26.618 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 27.481 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,136 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.860 | 144,622 | 0.2963 | 5 | yes |
| gzip | 2 | 4.220 | 137,864 | 0.2824 | 5 | yes |
| gzip | 3 | 5.439 | 133,234 | 0.2729 | 5 | yes |
| gzip | 4 | 5.791 | 125,058 | 0.2562 | 5 | yes |
| gzip | 5 | 8.113 | 120,452 | 0.2468 | 5 | yes |
| gzip | 6 | 11.658 | 118,735 | 0.2432 | 5 | yes |
| gzip | 7 | 14.756 | 118,276 | 0.2423 | 5 | yes |
| gzip | 8 | 27.629 | 118,010 | 0.2418 | 5 | yes |
| gzip | 9 | 42.814 | 117,938 | 0.2416 | 5 | yes |
| brotli | 0 | 1.512 | 148,884 | 0.3050 | 5 | yes |
| brotli | 1 | 2.103 | 136,768 | 0.2802 | 5 | yes |
| brotli | 2 | 3.852 | 128,603 | 0.2635 | 5 | yes |
| brotli | 3 | 4.466 | 125,978 | 0.2581 | 5 | yes |
| brotli | 4 | 6.388 | 122,064 | 0.2501 | 5 | yes |
| brotli | 5 | 9.875 | 112,164 | 0.2298 | 5 | yes |
| brotli | 6 | 11.267 | 109,514 | 0.2244 | 5 | yes |
| brotli | 7 | 13.629 | 107,575 | 0.2204 | 5 | yes |
| brotli | 8 | 16.293 | 106,560 | 0.2183 | 5 | yes |
| brotli | 9 | 20.947 | 105,642 | 0.2164 | 5 | yes |
| brotli | 10 | 269.448 | 98,169 | 0.2011 | 5 | yes |
| brotli | 11 | 702.386 | 96,068 | 0.1968 | 5 | yes |
| zstd | 1 | 1.666 | 137,483 | 0.2816 | 5 | yes |
| zstd | 2 | 1.878 | 133,245 | 0.2730 | 5 | yes |
| zstd | 3 | 2.307 | 125,682 | 0.2575 | 8 | yes |
| zstd | 4 | 2.414 | 125,469 | 0.2570 | 5 | yes |
| zstd | 5 | 4.681 | 116,807 | 0.2393 | 5 | yes |
| zstd | 6 | 6.669 | 112,937 | 0.2314 | 5 | yes |
| zstd | 7 | 7.755 | 111,368 | 0.2281 | 5 | yes |
| zstd | 8 | 9.592 | 110,586 | 0.2265 | 5 | yes |
| zstd | 9 | 9.608 | 110,586 | 0.2265 | 6 | yes |
| zstd | 10 | 11.059 | 109,587 | 0.2245 | 5 | yes |
| zstd | 11 | 14.071 | 108,983 | 0.2233 | 5 | yes |
| zstd | 12 | 13.902 | 108,983 | 0.2233 | 5 | yes |
| zstd | 13 | 26.075 | 107,822 | 0.2209 | 5 | yes |
| zstd | 14 | 31.399 | 107,218 | 0.2196 | 5 | yes |
| zstd | 15 | 34.593 | 107,140 | 0.2195 | 5 | yes |
| zstd | 16 | 62.807 | 101,551 | 0.2080 | 5 | yes |
| zstd | 17 | 69.462 | 100,673 | 0.2062 | 5 | yes |
| zstd | 18 | 108.540 | 99,877 | 0.2046 | 5 | yes |
| zstd | 19 | 141.625 | 99,786 | 0.2044 | 5 | yes |
| zstd | 20 | 143.206 | 99,786 | 0.2044 | 5 | yes |
| zstd | 21 | 145.073 | 99,782 | 0.2044 | 5 | yes |
| zstd | 22 | 143.598 | 99,782 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.094 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.114 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.143 | 4,805 | 0.2791 | 10 | yes |
| gzip | 4 | 0.180 | 4,529 | 0.2631 | 9 | yes |
| gzip | 5 | 0.239 | 4,441 | 0.2579 | 6 | yes |
| gzip | 6 | 0.276 | 4,425 | 0.2570 | 6 | yes |
| gzip | 7 | 0.319 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.460 | 4,418 | 0.2566 | 5 | yes |
| gzip | 9 | 0.473 | 4,418 | 0.2566 | 5 | yes |
| brotli | 0 | 0.057 | 5,234 | 0.3040 | 25 | no |
| brotli | 1 | 0.065 | 5,133 | 0.2981 | 9 | yes |
| brotli | 2 | 0.117 | 4,740 | 0.2753 | 21 | yes |
| brotli | 3 | 0.151 | 4,650 | 0.2701 | 23 | yes |
| brotli | 4 | 0.277 | 4,555 | 0.2646 | 7 | yes |
| brotli | 5 | 0.388 | 4,276 | 0.2484 | 7 | yes |
| brotli | 6 | 0.416 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.446 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.455 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.528 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.915 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.831 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.057 | 4,924 | 0.2860 | 8 | yes |
| zstd | 2 | 0.064 | 4,868 | 0.2827 | 25 | yes |
| zstd | 3 | 0.088 | 4,718 | 0.2740 | 12 | yes |
| zstd | 4 | 0.099 | 4,680 | 0.2718 | 5 | yes |
| zstd | 5 | 0.209 | 4,518 | 0.2624 | 5 | yes |
| zstd | 6 | 0.254 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.288 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.319 | 4,425 | 0.2570 | 6 | yes |
| zstd | 9 | 0.377 | 4,419 | 0.2567 | 5 | yes |
| zstd | 10 | 0.391 | 4,409 | 0.2561 | 5 | yes |
| zstd | 11 | 0.632 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.664 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.946 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.483 | 4,305 | 0.2500 | 5 | yes |
| zstd | 15 | 1.593 | 4,302 | 0.2499 | 5 | yes |
| zstd | 16 | 2.508 | 4,281 | 0.2486 | 5 | yes |
| zstd | 17 | 2.710 | 4,280 | 0.2486 | 5 | yes |
| zstd | 18 | 2.686 | 4,280 | 0.2486 | 5 | yes |
| zstd | 19 | 5.253 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.271 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.237 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.261 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.057 | 3,217 | 0.4493 | 25 | no |
| gzip | 2 | 0.057 | 3,179 | 0.4440 | 25 | no |
| gzip | 3 | 0.061 | 3,150 | 0.4399 | 25 | no |
| gzip | 4 | 0.083 | 3,092 | 0.4318 | 25 | no |
| gzip | 5 | 0.092 | 3,047 | 0.4256 | 25 | no |
| gzip | 6 | 0.105 | 3,041 | 0.4247 | 25 | no |
| gzip | 7 | 0.166 | 3,039 | 0.4244 | 8 | yes |
| gzip | 8 | 0.162 | 3,039 | 0.4244 | 5 | yes |
| gzip | 9 | 0.183 | 3,039 | 0.4244 | 5 | yes |
| brotli | 0 | 0.031 | 3,544 | 0.4950 | 17 | yes |
| brotli | 1 | 0.038 | 3,378 | 0.4718 | 11 | yes |
| brotli | 2 | 0.063 | 3,258 | 0.4550 | 25 | no |
| brotli | 3 | 0.077 | 3,207 | 0.4479 | 23 | yes |
| brotli | 4 | 0.156 | 3,138 | 0.4383 | 13 | yes |
| brotli | 5 | 0.223 | 2,961 | 0.4135 | 7 | yes |
| brotli | 6 | 0.224 | 2,950 | 0.4120 | 8 | yes |
| brotli | 7 | 0.256 | 2,942 | 0.4109 | 5 | yes |
| brotli | 8 | 0.250 | 2,942 | 0.4109 | 6 | yes |
| brotli | 9 | 0.295 | 2,943 | 0.4110 | 5 | yes |
| brotli | 10 | 3.357 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 7.928 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.037 | 3,250 | 0.4539 | 13 | yes |
| zstd | 2 | 0.038 | 3,196 | 0.4464 | 21 | yes |
| zstd | 3 | 0.049 | 3,171 | 0.4429 | 15 | yes |
| zstd | 4 | 0.067 | 3,098 | 0.4327 | 25 | no |
| zstd | 5 | 0.074 | 3,077 | 0.4297 | 16 | yes |
| zstd | 6 | 0.092 | 3,055 | 0.4267 | 15 | yes |
| zstd | 7 | 0.128 | 3,050 | 0.4260 | 5 | yes |
| zstd | 8 | 0.116 | 3,050 | 0.4260 | 15 | yes |
| zstd | 9 | 0.196 | 3,050 | 0.4260 | 5 | yes |
| zstd | 10 | 0.177 | 3,050 | 0.4260 | 5 | yes |
| zstd | 11 | 0.356 | 3,041 | 0.4247 | 5 | yes |
| zstd | 12 | 0.479 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.684 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.679 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.683 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.294 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.328 | 2,991 | 0.4177 | 10 | yes |
| zstd | 18 | 1.322 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.315 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.286 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.308 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.300 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,101 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.850 | 66,867 | 0.4075 | 5 | yes |
| gzip | 2 | 2.006 | 65,284 | 0.3978 | 5 | yes |
| gzip | 3 | 2.289 | 64,273 | 0.3917 | 5 | yes |
| gzip | 4 | 2.637 | 61,944 | 0.3775 | 7 | yes |
| gzip | 5 | 3.440 | 60,295 | 0.3674 | 5 | yes |
| gzip | 6 | 4.247 | 60,024 | 0.3658 | 5 | yes |
| gzip | 7 | 4.644 | 59,987 | 0.3655 | 5 | yes |
| gzip | 8 | 5.012 | 59,968 | 0.3654 | 6 | yes |
| gzip | 9 | 5.048 | 59,968 | 0.3654 | 5 | yes |
| brotli | 0 | 0.655 | 71,266 | 0.4343 | 5 | yes |
| brotli | 1 | 0.869 | 68,223 | 0.4157 | 5 | yes |
| brotli | 2 | 1.625 | 62,973 | 0.3837 | 5 | yes |
| brotli | 3 | 1.882 | 62,342 | 0.3799 | 5 | yes |
| brotli | 4 | 2.908 | 61,240 | 0.3732 | 8 | yes |
| brotli | 5 | 4.404 | 57,877 | 0.3527 | 5 | yes |
| brotli | 6 | 4.806 | 57,538 | 0.3506 | 5 | yes |
| brotli | 7 | 5.675 | 57,245 | 0.3488 | 5 | yes |
| brotli | 8 | 5.979 | 57,160 | 0.3483 | 5 | yes |
| brotli | 9 | 7.146 | 57,088 | 0.3479 | 5 | yes |
| brotli | 10 | 98.949 | 54,389 | 0.3314 | 5 | yes |
| brotli | 11 | 246.125 | 53,368 | 0.3252 | 5 | yes |
| zstd | 1 | 0.614 | 66,221 | 0.4035 | 6 | yes |
| zstd | 2 | 0.794 | 63,208 | 0.3852 | 5 | yes |
| zstd | 3 | 1.002 | 62,693 | 0.3820 | 5 | yes |
| zstd | 4 | 1.853 | 60,843 | 0.3708 | 5 | yes |
| zstd | 5 | 2.204 | 60,346 | 0.3677 | 9 | yes |
| zstd | 6 | 2.568 | 59,421 | 0.3621 | 5 | yes |
| zstd | 7 | 3.530 | 58,638 | 0.3573 | 5 | yes |
| zstd | 8 | 4.234 | 58,163 | 0.3544 | 5 | yes |
| zstd | 9 | 4.750 | 57,917 | 0.3529 | 5 | yes |
| zstd | 10 | 5.736 | 57,792 | 0.3522 | 10 | yes |
| zstd | 11 | 9.043 | 57,490 | 0.3503 | 5 | yes |
| zstd | 12 | 9.571 | 57,475 | 0.3502 | 6 | yes |
| zstd | 13 | 15.047 | 56,464 | 0.3441 | 5 | yes |
| zstd | 14 | 18.476 | 56,028 | 0.3414 | 5 | yes |
| zstd | 15 | 18.869 | 56,011 | 0.3413 | 5 | yes |
| zstd | 16 | 25.333 | 55,838 | 0.3403 | 5 | yes |
| zstd | 17 | 25.346 | 55,838 | 0.3403 | 5 | yes |
| zstd | 18 | 42.622 | 55,766 | 0.3398 | 5 | yes |
| zstd | 19 | 42.667 | 55,766 | 0.3398 | 5 | yes |
| zstd | 20 | 44.239 | 55,766 | 0.3398 | 5 | yes |
| zstd | 21 | 42.484 | 55,766 | 0.3398 | 5 | yes |
| zstd | 22 | 42.839 | 55,766 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.778 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.831 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.973 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.072 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.392 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.773 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.130 | 25,913 | 0.3538 | 11 | yes |
| gzip | 8 | 2.849 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.859 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.268 | 30,978 | 0.4230 | 8 | yes |
| brotli | 1 | 0.375 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.689 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.804 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.312 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.914 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.062 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.403 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.501 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.032 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 39.966 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 99.130 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.271 | 28,919 | 0.3949 | 5 | yes |
| zstd | 2 | 0.276 | 28,008 | 0.3824 | 8 | yes |
| zstd | 3 | 0.368 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.486 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.861 | 26,525 | 0.3622 | 21 | yes |
| zstd | 6 | 1.107 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.328 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.417 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.678 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.955 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.208 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.459 | 25,315 | 0.3457 | 8 | yes |
| zstd | 13 | 5.490 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 8.457 | 24,642 | 0.3365 | 8 | yes |
| zstd | 15 | 8.837 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 11.845 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 11.794 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 11.238 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 21.620 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 21.642 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.870 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 21.668 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.593 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.660 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.784 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.912 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.251 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.957 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.538 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.617 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.711 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.284 | 25,901 | 0.3420 | 5 | yes |
| brotli | 1 | 0.378 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.641 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.750 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.131 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.684 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.904 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.214 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.547 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.339 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 30.042 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 88.491 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.256 | 22,639 | 0.2989 | 8 | yes |
| zstd | 2 | 0.275 | 22,433 | 0.2962 | 5 | yes |
| zstd | 3 | 0.352 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.438 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.774 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.067 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.291 | 20,334 | 0.2685 | 16 | yes |
| zstd | 8 | 1.488 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.847 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.414 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.776 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.932 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.763 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 8.068 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.899 | 18,878 | 0.2493 | 6 | yes |
| zstd | 16 | 12.511 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 15.716 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 21.632 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 22.399 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 26.334 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 37.384 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 43.210 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.091 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.125 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.317 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.724 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.167 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.911 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.570 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.773 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.791 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.444 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.603 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.197 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.385 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.030 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.001 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.271 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.659 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.039 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 4.895 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 97.418 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 301.471 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.519 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.536 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.595 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.512 | 30,973 | 0.1334 | 6 | yes |
| zstd | 5 | 2.059 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.273 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.447 | 29,710 | 0.1280 | 10 | yes |
| zstd | 8 | 2.929 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.826 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.948 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.610 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.080 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.482 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.659 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.102 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.420 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 63.556 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 84.615 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 96.348 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 100.770 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 100.774 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 100.751 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 90.418 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 90.589 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 110.178 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 146.292 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 172.754 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 216.264 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 322.313 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 907.865 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1203.256 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 44.702 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 60.756 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 110.992 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 127.927 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 158.237 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 287.995 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 327.376 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 463.987 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 599.110 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 780.354 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 12235.584 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 36985.174 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 44.827 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 55.078 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 66.769 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 68.879 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 142.301 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 197.790 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 224.538 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 283.155 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 288.957 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 370.670 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 527.295 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 585.282 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 725.762 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 948.590 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1191.205 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3069.374 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3427.965 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 4905.825 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 8994.689 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9235.371 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9272.558 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9667.881 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.200 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.164 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.404 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.376 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.421 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.604 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.301 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.161 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.351 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.943 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.324 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.951 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.972 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.545 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.680 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 30.634 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.037 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 51.489 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 63.165 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 900.473 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1920.001 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.042 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.879 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.887 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.426 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.356 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.109 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.506 | 388,562 | 0.4520 | 6 | yes |
| zstd | 8 | 20.220 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 20.302 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.813 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.635 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.646 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 49.421 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 50.599 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 50.313 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 90.869 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 112.088 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 148.183 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 165.124 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 164.609 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 165.873 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 166.745 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.097 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.120 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.162 | 5,356 | 0.2749 | 15 | yes |
| gzip | 4 | 0.193 | 5,145 | 0.2641 | 12 | yes |
| gzip | 5 | 0.264 | 4,896 | 0.2513 | 8 | yes |
| gzip | 6 | 0.359 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.482 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.638 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.646 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.058 | 6,028 | 0.3094 | 13 | yes |
| brotli | 1 | 0.068 | 5,737 | 0.2945 | 15 | yes |
| brotli | 2 | 0.120 | 4,944 | 0.2538 | 20 | yes |
| brotli | 3 | 0.176 | 4,930 | 0.2531 | 6 | yes |
| brotli | 4 | 0.283 | 4,898 | 0.2514 | 6 | yes |
| brotli | 5 | 0.448 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.473 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.541 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.605 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.718 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.226 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.854 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.057 | 5,379 | 0.2761 | 11 | yes |
| zstd | 2 | 0.076 | 5,176 | 0.2657 | 5 | yes |
| zstd | 3 | 0.096 | 5,169 | 0.2653 | 10 | yes |
| zstd | 4 | 0.093 | 5,154 | 0.2646 | 12 | yes |
| zstd | 5 | 0.191 | 5,074 | 0.2605 | 25 | no |
| zstd | 6 | 0.277 | 4,797 | 0.2463 | 7 | yes |
| zstd | 7 | 0.326 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.359 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.431 | 4,690 | 0.2408 | 7 | yes |
| zstd | 10 | 0.515 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.609 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.661 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.010 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.811 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.938 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.892 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.870 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.874 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.644 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.691 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.655 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.664 | 4,348 | 0.2232 | 5 | yes |
