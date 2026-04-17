# Node Compression Benchmark

Last updated: 2026-04-17T12:51:43.003Z

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
| gzip | 1 | 0.993 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.057 | 30,134 | 0.3827 | 9 | yes |
| gzip | 3 | 1.101 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.215 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.591 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.825 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.041 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.353 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.363 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.373 | 33,111 | 0.4205 | 7 | yes |
| brotli | 1 | 0.741 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.877 | 29,394 | 0.3733 | 10 | yes |
| brotli | 3 | 1.004 | 29,072 | 0.3692 | 15 | yes |
| brotli | 4 | 1.397 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.044 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.195 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.787 | 26,773 | 0.3400 | 7 | yes |
| brotli | 8 | 3.801 | 26,725 | 0.3394 | 6 | yes |
| brotli | 9 | 6.753 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 34.024 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.592 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.332 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.338 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.416 | 29,214 | 0.3710 | 15 | yes |
| zstd | 4 | 0.530 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 1.275 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.582 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.877 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.969 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.142 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.385 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.994 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.305 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.383 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.586 | 26,432 | 0.3357 | 6 | yes |
| zstd | 15 | 9.019 | 26,420 | 0.3355 | 7 | yes |
| zstd | 16 | 12.086 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 12.115 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 12.148 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 22.808 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 22.746 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 22.791 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 22.757 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 86.276 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 90.155 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 94.560 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.545 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 118.299 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.601 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 141.970 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 158.870 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.059 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.258 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.210 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.522 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 62.612 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 87.928 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 125.111 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 140.424 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 425.170 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 518.595 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 707.750 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6085.707 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12648.379 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.062 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.773 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 40.216 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 42.267 | 3,084,237 | 0.5636 | 6 | yes |
| zstd | 5 | 66.245 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.928 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 84.583 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 99.120 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 100.298 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 125.894 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 147.549 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 178.144 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 360.750 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 445.115 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 492.076 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 674.289 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 821.011 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1262.532 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1309.673 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1258.792 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1274.943 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1253.146 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.040 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.093 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.073 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.451 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.521 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.423 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.490 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.446 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.441 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.273 | 613,595 | 0.9981 | 6 | yes |
| brotli | 1 | 0.252 | 614,785 | 1.0000 | 12 | yes |
| brotli | 2 | 0.665 | 614,791 | 1.0000 | 9 | yes |
| brotli | 3 | 0.854 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.070 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.643 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.573 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 2.098 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.388 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 3.136 | 614,785 | 1.0000 | 11 | yes |
| brotli | 10 | 108.549 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 249.415 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.343 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.339 | 614,804 | 1.0000 | 7 | yes |
| zstd | 3 | 0.390 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.489 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.631 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.638 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.823 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.893 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 1.148 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 1.143 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 1.824 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 1.788 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 4.510 | 612,619 | 0.9965 | 22 | yes |
| zstd | 14 | 4.209 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 4.304 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 16.802 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 17.063 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 21.372 | 612,519 | 0.9963 | 6 | yes |
| zstd | 19 | 27.546 | 612,518 | 0.9963 | 7 | yes |
| zstd | 20 | 27.819 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 25.498 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 26.004 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 485,932 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.870 | 143,926 | 0.2962 | 5 | yes |
| gzip | 2 | 4.240 | 137,191 | 0.2823 | 5 | yes |
| gzip | 3 | 5.454 | 132,653 | 0.2730 | 5 | yes |
| gzip | 4 | 5.727 | 124,449 | 0.2561 | 5 | yes |
| gzip | 5 | 8.017 | 119,890 | 0.2467 | 5 | yes |
| gzip | 6 | 11.591 | 118,178 | 0.2432 | 5 | yes |
| gzip | 7 | 14.654 | 117,703 | 0.2422 | 5 | yes |
| gzip | 8 | 27.432 | 117,442 | 0.2417 | 5 | yes |
| gzip | 9 | 42.482 | 117,362 | 0.2415 | 5 | yes |
| brotli | 0 | 1.508 | 148,131 | 0.3048 | 5 | yes |
| brotli | 1 | 2.045 | 136,118 | 0.2801 | 5 | yes |
| brotli | 2 | 3.892 | 127,982 | 0.2634 | 5 | yes |
| brotli | 3 | 4.424 | 125,362 | 0.2580 | 5 | yes |
| brotli | 4 | 6.450 | 121,305 | 0.2496 | 5 | yes |
| brotli | 5 | 10.187 | 111,621 | 0.2297 | 5 | yes |
| brotli | 6 | 11.588 | 108,983 | 0.2243 | 5 | yes |
| brotli | 7 | 13.936 | 107,042 | 0.2203 | 5 | yes |
| brotli | 8 | 17.178 | 106,024 | 0.2182 | 5 | yes |
| brotli | 9 | 21.175 | 105,126 | 0.2163 | 5 | yes |
| brotli | 10 | 269.092 | 97,714 | 0.2011 | 5 | yes |
| brotli | 11 | 705.484 | 95,541 | 0.1966 | 5 | yes |
| zstd | 1 | 1.654 | 136,834 | 0.2816 | 5 | yes |
| zstd | 2 | 1.790 | 132,597 | 0.2729 | 5 | yes |
| zstd | 3 | 2.303 | 125,085 | 0.2574 | 5 | yes |
| zstd | 4 | 2.454 | 124,856 | 0.2569 | 5 | yes |
| zstd | 5 | 4.616 | 116,229 | 0.2392 | 5 | yes |
| zstd | 6 | 6.325 | 112,386 | 0.2313 | 5 | yes |
| zstd | 7 | 7.162 | 110,843 | 0.2281 | 5 | yes |
| zstd | 8 | 8.801 | 110,044 | 0.2265 | 5 | yes |
| zstd | 9 | 8.909 | 110,044 | 0.2265 | 5 | yes |
| zstd | 10 | 10.643 | 109,065 | 0.2244 | 5 | yes |
| zstd | 11 | 13.738 | 108,472 | 0.2232 | 5 | yes |
| zstd | 12 | 13.822 | 108,472 | 0.2232 | 5 | yes |
| zstd | 13 | 26.149 | 107,308 | 0.2208 | 5 | yes |
| zstd | 14 | 31.393 | 106,712 | 0.2196 | 5 | yes |
| zstd | 15 | 34.613 | 106,627 | 0.2194 | 5 | yes |
| zstd | 16 | 63.588 | 101,091 | 0.2080 | 5 | yes |
| zstd | 17 | 69.342 | 100,209 | 0.2062 | 5 | yes |
| zstd | 18 | 109.280 | 99,415 | 0.2046 | 5 | yes |
| zstd | 19 | 142.264 | 99,306 | 0.2044 | 5 | yes |
| zstd | 20 | 143.183 | 99,306 | 0.2044 | 5 | yes |
| zstd | 21 | 142.103 | 99,313 | 0.2044 | 5 | yes |
| zstd | 22 | 142.214 | 99,313 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.093 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.146 | 4,874 | 0.2831 | 5 | yes |
| gzip | 3 | 0.163 | 4,806 | 0.2791 | 6 | yes |
| gzip | 4 | 0.194 | 4,530 | 0.2631 | 5 | yes |
| gzip | 5 | 0.233 | 4,441 | 0.2579 | 7 | yes |
| gzip | 6 | 0.273 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.314 | 4,418 | 0.2566 | 6 | yes |
| gzip | 8 | 0.454 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.469 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.087 | 5,235 | 0.3041 | 25 | no |
| brotli | 1 | 0.065 | 5,134 | 0.2982 | 25 | no |
| brotli | 2 | 0.110 | 4,741 | 0.2754 | 25 | no |
| brotli | 3 | 0.143 | 4,650 | 0.2701 | 19 | yes |
| brotli | 4 | 0.286 | 4,555 | 0.2646 | 11 | yes |
| brotli | 5 | 0.393 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.420 | 4,275 | 0.2483 | 6 | yes |
| brotli | 7 | 0.438 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.467 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.553 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.895 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.796 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.057 | 4,923 | 0.2859 | 13 | yes |
| zstd | 2 | 0.066 | 4,868 | 0.2827 | 13 | yes |
| zstd | 3 | 0.095 | 4,717 | 0.2740 | 13 | yes |
| zstd | 4 | 0.102 | 4,679 | 0.2718 | 5 | yes |
| zstd | 5 | 0.171 | 4,519 | 0.2625 | 25 | no |
| zstd | 6 | 0.247 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.271 | 4,437 | 0.2577 | 7 | yes |
| zstd | 8 | 0.299 | 4,426 | 0.2571 | 12 | yes |
| zstd | 9 | 0.366 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.390 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.632 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.667 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.948 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.459 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.565 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.508 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.682 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.691 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.237 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.263 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.265 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.265 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.062 | 3,217 | 0.4493 | 20 | yes |
| gzip | 2 | 0.072 | 3,179 | 0.4440 | 25 | no |
| gzip | 3 | 0.066 | 3,150 | 0.4399 | 18 | yes |
| gzip | 4 | 0.071 | 3,092 | 0.4318 | 25 | yes |
| gzip | 5 | 0.088 | 3,047 | 0.4256 | 25 | no |
| gzip | 6 | 0.082 | 3,041 | 0.4247 | 25 | no |
| gzip | 7 | 0.101 | 3,039 | 0.4244 | 24 | yes |
| gzip | 8 | 0.081 | 3,039 | 0.4244 | 25 | no |
| gzip | 9 | 0.107 | 3,039 | 0.4244 | 5 | yes |
| brotli | 0 | 0.032 | 3,544 | 0.4950 | 10 | yes |
| brotli | 1 | 0.038 | 3,378 | 0.4718 | 17 | yes |
| brotli | 2 | 0.060 | 3,258 | 0.4550 | 13 | yes |
| brotli | 3 | 0.076 | 3,207 | 0.4479 | 16 | yes |
| brotli | 4 | 0.156 | 3,138 | 0.4383 | 15 | yes |
| brotli | 5 | 0.228 | 2,961 | 0.4135 | 7 | yes |
| brotli | 6 | 0.237 | 2,950 | 0.4120 | 6 | yes |
| brotli | 7 | 0.251 | 2,942 | 0.4109 | 5 | yes |
| brotli | 8 | 0.258 | 2,942 | 0.4109 | 5 | yes |
| brotli | 9 | 0.308 | 2,943 | 0.4110 | 5 | yes |
| brotli | 10 | 3.299 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 7.841 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.036 | 3,250 | 0.4539 | 9 | yes |
| zstd | 2 | 0.039 | 3,196 | 0.4464 | 16 | yes |
| zstd | 3 | 0.050 | 3,171 | 0.4429 | 25 | no |
| zstd | 4 | 0.068 | 3,098 | 0.4327 | 23 | yes |
| zstd | 5 | 0.078 | 3,077 | 0.4297 | 25 | no |
| zstd | 6 | 0.096 | 3,055 | 0.4267 | 20 | yes |
| zstd | 7 | 0.135 | 3,050 | 0.4260 | 17 | yes |
| zstd | 8 | 0.113 | 3,050 | 0.4260 | 18 | yes |
| zstd | 9 | 0.199 | 3,050 | 0.4260 | 5 | yes |
| zstd | 10 | 0.165 | 3,050 | 0.4260 | 9 | yes |
| zstd | 11 | 0.350 | 3,041 | 0.4247 | 5 | yes |
| zstd | 12 | 0.482 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.673 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.667 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.688 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.287 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.283 | 2,991 | 0.4177 | 5 | yes |
| zstd | 18 | 1.280 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.285 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.286 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.299 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.286 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.900 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 2.060 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.310 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.538 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.401 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.198 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 4.590 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 4.943 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 4.951 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.650 | 70,918 | 0.4333 | 5 | yes |
| brotli | 1 | 0.890 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.650 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 1.914 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 2.903 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.417 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 4.994 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 5.812 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 6.219 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 7.342 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 96.144 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 248.492 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.615 | 65,987 | 0.4032 | 5 | yes |
| zstd | 2 | 0.784 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 1.050 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.816 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.119 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.585 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 3.009 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 3.665 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.276 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 4.983 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 8.534 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 8.678 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 15.105 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 18.041 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 19.061 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 25.054 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 25.213 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 42.310 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 42.691 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 42.870 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 42.435 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 42.564 | 55,612 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.816 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.871 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.990 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.062 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.380 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.770 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.135 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.841 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.840 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.274 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.360 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.682 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.790 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.291 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.909 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.043 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.511 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.739 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.217 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 40.190 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 96.847 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.251 | 28,919 | 0.3949 | 6 | yes |
| zstd | 2 | 0.293 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.391 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.570 | 27,100 | 0.3700 | 25 | no |
| zstd | 5 | 0.894 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.221 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.351 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.481 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.726 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.937 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.275 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.546 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.668 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.883 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.861 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.877 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.851 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.935 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.699 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.828 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.745 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.666 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.605 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.686 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.822 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.901 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.239 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.896 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.514 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.589 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.637 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.261 | 25,901 | 0.3420 | 5 | yes |
| brotli | 1 | 0.359 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.642 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.739 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.106 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.712 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.907 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.301 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.668 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.441 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 29.525 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 87.719 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.270 | 22,639 | 0.2989 | 5 | yes |
| zstd | 2 | 0.281 | 22,433 | 0.2962 | 5 | yes |
| zstd | 3 | 0.330 | 22,208 | 0.2932 | 9 | yes |
| zstd | 4 | 0.574 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.804 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.068 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.314 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.531 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.896 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.425 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.282 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.328 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.081 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.231 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.324 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.598 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.842 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 21.786 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 22.402 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 26.374 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 37.575 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 43.275 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.106 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.153 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.356 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.718 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.138 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.877 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.532 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.698 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.805 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.444 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.619 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.266 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.455 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.045 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.107 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.444 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.764 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.230 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.055 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 98.359 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 302.699 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.483 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.541 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.609 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.721 | 30,973 | 0.1334 | 6 | yes |
| zstd | 5 | 2.061 | 29,744 | 0.1281 | 6 | yes |
| zstd | 6 | 2.365 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.500 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.904 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.606 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.322 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.093 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.926 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.047 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.127 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.224 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.493 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 63.897 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 84.760 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 96.565 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 100.875 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 100.785 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 100.733 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 94.767 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 94.607 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 112.638 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 145.320 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 171.481 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 216.496 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 322.826 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 901.229 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1204.943 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 45.476 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 60.913 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 112.719 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 130.413 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 171.637 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 298.012 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 347.336 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 486.025 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 635.220 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 838.825 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 12961.246 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37350.925 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.030 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 55.507 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 66.623 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 70.428 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 144.428 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 198.955 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 222.587 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 286.292 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 294.865 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 393.981 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 588.978 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 627.321 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 775.938 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 991.993 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1283.594 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3262.022 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3624.112 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5186.985 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9386.407 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9663.941 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9640.966 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 10055.647 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.439 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.444 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.572 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.327 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.442 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.626 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.273 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.082 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.163 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.916 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.357 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.947 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.934 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.556 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.933 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.068 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.225 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 52.012 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 65.053 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 904.680 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1929.928 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.023 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.920 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.979 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.623 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.293 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.050 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.171 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.759 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.705 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.987 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.802 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.593 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 49.375 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 50.778 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 52.390 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 92.559 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 113.275 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 157.157 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 171.775 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 170.554 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 170.654 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 174.294 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.099 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.131 | 5,424 | 0.2784 | 17 | yes |
| gzip | 3 | 0.166 | 5,356 | 0.2749 | 20 | yes |
| gzip | 4 | 0.188 | 5,145 | 0.2641 | 17 | yes |
| gzip | 5 | 0.269 | 4,896 | 0.2513 | 5 | yes |
| gzip | 6 | 0.357 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.483 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.665 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.634 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.057 | 6,028 | 0.3094 | 10 | yes |
| brotli | 1 | 0.069 | 5,737 | 0.2945 | 16 | yes |
| brotli | 2 | 0.121 | 4,944 | 0.2538 | 24 | yes |
| brotli | 3 | 0.168 | 4,930 | 0.2531 | 8 | yes |
| brotli | 4 | 0.282 | 4,898 | 0.2514 | 7 | yes |
| brotli | 5 | 0.456 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.479 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.564 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.589 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.716 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.205 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.773 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.059 | 5,379 | 0.2761 | 16 | yes |
| zstd | 2 | 0.066 | 5,176 | 0.2657 | 15 | yes |
| zstd | 3 | 0.091 | 5,169 | 0.2653 | 11 | yes |
| zstd | 4 | 0.095 | 5,154 | 0.2646 | 8 | yes |
| zstd | 5 | 0.178 | 5,074 | 0.2605 | 5 | yes |
| zstd | 6 | 0.247 | 4,797 | 0.2463 | 7 | yes |
| zstd | 7 | 0.296 | 4,702 | 0.2414 | 6 | yes |
| zstd | 8 | 0.339 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.411 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.498 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.608 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.644 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.012 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.801 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.912 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.864 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.890 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.875 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.638 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.675 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.661 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.659 | 4,348 | 0.2232 | 5 | yes |
