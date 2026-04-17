# Node Compression Benchmark

Last updated: 2026-04-17T12:32:39.393Z

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
| gzip | 1 | 1.017 | 31,033 | 0.3941 | 6 | yes |
| gzip | 2 | 1.068 | 30,134 | 0.3827 | 8 | yes |
| gzip | 3 | 1.198 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.351 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.772 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.189 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.346 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.753 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.751 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.343 | 33,111 | 0.4205 | 8 | yes |
| brotli | 1 | 0.790 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.920 | 29,394 | 0.3733 | 6 | yes |
| brotli | 3 | 1.013 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.543 | 28,392 | 0.3605 | 6 | yes |
| brotli | 5 | 2.945 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 3.286 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 5.441 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.757 | 26,725 | 0.3394 | 13 | yes |
| brotli | 9 | 4.637 | 26,711 | 0.3392 | 12 | yes |
| brotli | 10 | 35.896 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 100.840 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.478 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.340 | 30,069 | 0.3818 | 25 | no |
| zstd | 3 | 0.322 | 29,214 | 0.3710 | 25 | yes |
| zstd | 4 | 1.275 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 1.371 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.713 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 2.048 | 27,383 | 0.3477 | 6 | yes |
| zstd | 8 | 2.127 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.258 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.543 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.371 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.674 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.491 | 26,867 | 0.3412 | 9 | yes |
| zstd | 14 | 8.550 | 26,432 | 0.3357 | 12 | yes |
| zstd | 15 | 8.963 | 26,420 | 0.3355 | 12 | yes |
| zstd | 16 | 11.289 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.258 | 26,336 | 0.3344 | 7 | yes |
| zstd | 18 | 11.205 | 26,336 | 0.3344 | 7 | yes |
| zstd | 19 | 20.802 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 20.950 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.070 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.014 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.423 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 97.202 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 102.951 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 115.676 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 135.276 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 153.553 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 162.480 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 183.094 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 196.564 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.425 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 30.065 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.903 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.103 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 91.952 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 127.879 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 142.333 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 418.268 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 550.282 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 759.199 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6577.524 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13670.828 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.737 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.611 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 37.269 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 45.071 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 68.086 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 81.231 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 88.666 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 103.039 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 108.553 | 2,901,056 | 0.5301 | 6 | yes |
| zstd | 10 | 135.524 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 187.349 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 216.225 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 499.854 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 547.661 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 621.120 | 2,844,247 | 0.5197 | 9 | yes |
| zstd | 16 | 833.973 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 1100.843 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1310.034 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1392.656 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1371.509 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1401.954 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1401.499 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.722 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.727 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.709 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 14.461 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 14.430 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 14.364 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 14.339 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 14.365 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 14.394 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.255 | 613,595 | 0.9981 | 11 | yes |
| brotli | 1 | 0.240 | 614,785 | 1.0000 | 14 | yes |
| brotli | 2 | 0.584 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.745 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.901 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.460 | 614,785 | 1.0000 | 22 | yes |
| brotli | 6 | 1.700 | 614,785 | 1.0000 | 5 | yes |
| brotli | 7 | 2.019 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.350 | 614,785 | 1.0000 | 10 | yes |
| brotli | 9 | 3.146 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 117.082 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 265.626 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.334 | 614,805 | 1.0000 | 6 | yes |
| zstd | 2 | 0.339 | 614,804 | 1.0000 | 6 | yes |
| zstd | 3 | 0.407 | 614,804 | 1.0000 | 7 | yes |
| zstd | 4 | 0.403 | 614,804 | 1.0000 | 7 | yes |
| zstd | 5 | 0.607 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.604 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.715 | 614,804 | 1.0000 | 13 | yes |
| zstd | 8 | 0.726 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.912 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.919 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 1.760 | 614,804 | 1.0000 | 25 | no |
| zstd | 12 | 0.930 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 5.663 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 5.528 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 5.637 | 612,619 | 0.9965 | 25 | no |
| zstd | 16 | 18.711 | 612,536 | 0.9963 | 21 | yes |
| zstd | 17 | 17.420 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 29.991 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 33.127 | 612,518 | 0.9963 | 7 | yes |
| zstd | 20 | 31.740 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 31.981 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 32.938 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 485,932 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.269 | 143,926 | 0.2962 | 5 | yes |
| gzip | 2 | 4.667 | 137,191 | 0.2823 | 5 | yes |
| gzip | 3 | 6.098 | 132,653 | 0.2730 | 5 | yes |
| gzip | 4 | 6.295 | 124,449 | 0.2561 | 5 | yes |
| gzip | 5 | 9.072 | 119,890 | 0.2467 | 5 | yes |
| gzip | 6 | 13.660 | 118,178 | 0.2432 | 5 | yes |
| gzip | 7 | 17.664 | 117,703 | 0.2422 | 5 | yes |
| gzip | 8 | 32.292 | 117,442 | 0.2417 | 5 | yes |
| gzip | 9 | 49.898 | 117,362 | 0.2415 | 5 | yes |
| brotli | 0 | 1.560 | 148,131 | 0.3048 | 5 | yes |
| brotli | 1 | 2.255 | 136,118 | 0.2801 | 5 | yes |
| brotli | 2 | 3.950 | 127,982 | 0.2634 | 5 | yes |
| brotli | 3 | 4.569 | 125,362 | 0.2580 | 5 | yes |
| brotli | 4 | 6.580 | 121,305 | 0.2496 | 5 | yes |
| brotli | 5 | 10.098 | 111,621 | 0.2297 | 5 | yes |
| brotli | 6 | 11.619 | 108,983 | 0.2243 | 5 | yes |
| brotli | 7 | 14.311 | 107,042 | 0.2203 | 5 | yes |
| brotli | 8 | 17.282 | 106,024 | 0.2182 | 5 | yes |
| brotli | 9 | 22.063 | 105,126 | 0.2163 | 5 | yes |
| brotli | 10 | 290.907 | 97,714 | 0.2011 | 5 | yes |
| brotli | 11 | 742.147 | 95,541 | 0.1966 | 5 | yes |
| zstd | 1 | 1.810 | 136,834 | 0.2816 | 5 | yes |
| zstd | 2 | 1.890 | 132,597 | 0.2729 | 5 | yes |
| zstd | 3 | 2.225 | 125,085 | 0.2574 | 5 | yes |
| zstd | 4 | 2.520 | 124,856 | 0.2569 | 5 | yes |
| zstd | 5 | 4.681 | 116,229 | 0.2392 | 5 | yes |
| zstd | 6 | 6.381 | 112,386 | 0.2313 | 5 | yes |
| zstd | 7 | 7.132 | 110,843 | 0.2281 | 5 | yes |
| zstd | 8 | 8.913 | 110,044 | 0.2265 | 5 | yes |
| zstd | 9 | 8.881 | 110,044 | 0.2265 | 5 | yes |
| zstd | 10 | 10.772 | 109,065 | 0.2244 | 5 | yes |
| zstd | 11 | 13.677 | 108,472 | 0.2232 | 5 | yes |
| zstd | 12 | 13.846 | 108,472 | 0.2232 | 5 | yes |
| zstd | 13 | 28.186 | 107,308 | 0.2208 | 5 | yes |
| zstd | 14 | 34.526 | 106,712 | 0.2196 | 5 | yes |
| zstd | 15 | 38.219 | 106,627 | 0.2194 | 5 | yes |
| zstd | 16 | 66.330 | 101,091 | 0.2080 | 5 | yes |
| zstd | 17 | 72.584 | 100,209 | 0.2062 | 5 | yes |
| zstd | 18 | 102.665 | 99,415 | 0.2046 | 5 | yes |
| zstd | 19 | 135.057 | 99,306 | 0.2044 | 5 | yes |
| zstd | 20 | 134.418 | 99,306 | 0.2044 | 5 | yes |
| zstd | 21 | 134.517 | 99,313 | 0.2044 | 5 | yes |
| zstd | 22 | 135.300 | 99,313 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.069 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.086 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.087 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.122 | 4,530 | 0.2631 | 25 | no |
| gzip | 5 | 0.141 | 4,441 | 0.2579 | 21 | yes |
| gzip | 6 | 0.170 | 4,425 | 0.2570 | 19 | yes |
| gzip | 7 | 0.216 | 4,418 | 0.2566 | 14 | yes |
| gzip | 8 | 0.497 | 4,419 | 0.2567 | 6 | yes |
| gzip | 9 | 0.439 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.053 | 5,235 | 0.3041 | 17 | yes |
| brotli | 1 | 0.067 | 5,134 | 0.2982 | 13 | yes |
| brotli | 2 | 0.095 | 4,741 | 0.2754 | 17 | yes |
| brotli | 3 | 0.118 | 4,650 | 0.2701 | 24 | yes |
| brotli | 4 | 0.189 | 4,555 | 0.2646 | 21 | yes |
| brotli | 5 | 0.343 | 4,276 | 0.2484 | 7 | yes |
| brotli | 6 | 0.341 | 4,275 | 0.2483 | 14 | yes |
| brotli | 7 | 0.385 | 4,264 | 0.2477 | 22 | yes |
| brotli | 8 | 0.427 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.550 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.257 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.554 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.055 | 4,923 | 0.2859 | 9 | yes |
| zstd | 2 | 0.060 | 4,868 | 0.2827 | 8 | yes |
| zstd | 3 | 0.076 | 4,717 | 0.2740 | 5 | yes |
| zstd | 4 | 0.078 | 4,679 | 0.2718 | 12 | yes |
| zstd | 5 | 0.143 | 4,519 | 0.2625 | 6 | yes |
| zstd | 6 | 0.182 | 4,437 | 0.2577 | 9 | yes |
| zstd | 7 | 0.209 | 4,437 | 0.2577 | 9 | yes |
| zstd | 8 | 0.213 | 4,426 | 0.2571 | 11 | yes |
| zstd | 9 | 0.243 | 4,420 | 0.2567 | 20 | yes |
| zstd | 10 | 0.342 | 4,410 | 0.2561 | 6 | yes |
| zstd | 11 | 0.646 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.651 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.929 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.428 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.517 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.184 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.325 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.325 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.572 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.544 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.587 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.541 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.049 | 3,217 | 0.4493 | 19 | yes |
| gzip | 2 | 0.050 | 3,179 | 0.4440 | 25 | no |
| gzip | 3 | 0.052 | 3,150 | 0.4399 | 13 | yes |
| gzip | 4 | 0.059 | 3,092 | 0.4318 | 16 | yes |
| gzip | 5 | 0.065 | 3,047 | 0.4256 | 13 | yes |
| gzip | 6 | 0.070 | 3,041 | 0.4247 | 9 | yes |
| gzip | 7 | 0.074 | 3,039 | 0.4244 | 9 | yes |
| gzip | 8 | 0.076 | 3,039 | 0.4244 | 25 | no |
| gzip | 9 | 0.075 | 3,039 | 0.4244 | 5 | yes |
| brotli | 0 | 0.031 | 3,544 | 0.4950 | 9 | yes |
| brotli | 1 | 0.040 | 3,378 | 0.4718 | 11 | yes |
| brotli | 2 | 0.056 | 3,258 | 0.4550 | 13 | yes |
| brotli | 3 | 0.073 | 3,207 | 0.4479 | 12 | yes |
| brotli | 4 | 0.124 | 3,138 | 0.4383 | 13 | yes |
| brotli | 5 | 0.150 | 2,961 | 0.4135 | 25 | no |
| brotli | 6 | 0.171 | 2,950 | 0.4120 | 9 | yes |
| brotli | 7 | 0.196 | 2,942 | 0.4109 | 25 | no |
| brotli | 8 | 0.180 | 2,942 | 0.4109 | 10 | yes |
| brotli | 9 | 0.232 | 2,943 | 0.4110 | 14 | yes |
| brotli | 10 | 3.470 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 8.276 | 2,771 | 0.3870 | 8 | yes |
| zstd | 1 | 0.035 | 3,250 | 0.4539 | 8 | yes |
| zstd | 2 | 0.036 | 3,196 | 0.4464 | 12 | yes |
| zstd | 3 | 0.043 | 3,171 | 0.4429 | 8 | yes |
| zstd | 4 | 0.074 | 3,098 | 0.4327 | 5 | yes |
| zstd | 5 | 0.074 | 3,077 | 0.4297 | 11 | yes |
| zstd | 6 | 0.087 | 3,055 | 0.4267 | 12 | yes |
| zstd | 7 | 0.099 | 3,050 | 0.4260 | 5 | yes |
| zstd | 8 | 0.102 | 3,050 | 0.4260 | 5 | yes |
| zstd | 9 | 0.121 | 3,050 | 0.4260 | 25 | no |
| zstd | 10 | 0.120 | 3,050 | 0.4260 | 5 | yes |
| zstd | 11 | 0.232 | 3,041 | 0.4247 | 18 | yes |
| zstd | 12 | 0.462 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.596 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.553 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.576 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.094 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.055 | 2,991 | 0.4177 | 5 | yes |
| zstd | 18 | 1.043 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.036 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.093 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.130 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.098 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.055 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 2.232 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.556 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.839 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.903 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.908 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 5.352 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 5.777 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 5.786 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.647 | 70,918 | 0.4333 | 5 | yes |
| brotli | 1 | 0.914 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.723 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 2.037 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 3.061 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.497 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 4.973 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 6.021 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 6.676 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 7.810 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 104.548 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 263.831 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.622 | 65,987 | 0.4032 | 6 | yes |
| zstd | 2 | 0.840 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 1.054 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.834 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.076 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.541 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 3.007 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 3.764 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.226 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 5.138 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 9.300 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 8.765 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 15.321 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 18.066 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 18.477 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 23.944 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 23.800 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 39.863 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 39.854 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 40.049 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 40.059 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 39.676 | 55,612 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.858 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.928 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.079 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.190 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.581 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.051 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.456 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.352 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.345 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.208 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.407 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.721 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.858 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.370 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.981 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.162 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.583 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.744 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.288 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 42.645 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 101.643 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.205 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.231 | 28,008 | 0.3824 | 13 | yes |
| zstd | 3 | 0.285 | 27,463 | 0.3750 | 11 | yes |
| zstd | 4 | 0.434 | 27,100 | 0.3700 | 23 | yes |
| zstd | 5 | 0.813 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.130 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.346 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.500 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.641 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.974 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.407 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.606 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.643 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.625 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.649 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.931 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.824 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.888 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.807 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.892 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.761 | 24,463 | 0.3340 | 9 | yes |
| zstd | 22 | 18.799 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.651 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.740 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.903 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 1.019 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.434 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 2.185 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.937 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 8.727 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 8.756 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.181 | 25,901 | 0.3420 | 11 | yes |
| brotli | 1 | 0.309 | 23,906 | 0.3156 | 16 | yes |
| brotli | 2 | 0.674 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.800 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.162 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.703 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.974 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.356 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.710 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.482 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 31.485 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 89.761 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.217 | 22,639 | 0.2989 | 13 | yes |
| zstd | 2 | 0.228 | 22,433 | 0.2962 | 16 | yes |
| zstd | 3 | 0.269 | 22,208 | 0.2932 | 16 | yes |
| zstd | 4 | 0.379 | 22,181 | 0.2929 | 21 | yes |
| zstd | 5 | 0.726 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.036 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.291 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.473 | 20,295 | 0.2680 | 6 | yes |
| zstd | 9 | 1.804 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.407 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.425 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.446 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.061 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.269 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.198 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.711 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.204 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.780 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 20.121 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 24.061 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.472 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 45.787 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.201 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.269 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.484 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.783 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.306 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.188 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.962 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.369 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.447 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.326 | 43,268 | 0.1864 | 18 | yes |
| brotli | 1 | 0.659 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.227 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.457 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.146 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.070 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.450 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.833 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.341 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.289 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 104.007 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 306.347 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.503 | 35,549 | 0.1532 | 8 | yes |
| zstd | 2 | 0.510 | 34,301 | 0.1478 | 15 | yes |
| zstd | 3 | 0.598 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.504 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.791 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.164 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.321 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.764 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.324 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.107 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.138 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.047 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.866 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.639 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.460 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.748 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.952 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 73.090 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.805 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 84.258 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.641 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 84.660 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 100.305 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 100.798 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 122.096 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 142.349 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 173.595 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 230.817 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 364.993 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 1040.534 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1396.987 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 45.301 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 67.202 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 116.564 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 135.941 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 185.395 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 310.052 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 364.897 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 508.708 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 665.881 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 910.263 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 14210.085 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 38834.119 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.946 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 55.246 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 68.606 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 73.133 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 148.838 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 207.601 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 237.206 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 299.009 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 314.988 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 415.795 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 594.671 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 633.118 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 891.984 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1131.010 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1450.704 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3551.525 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 4064.571 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5326.821 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 8782.451 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 8925.595 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 8936.436 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9372.771 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.665 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.831 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.595 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.400 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 27.050 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 32.111 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 34.187 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.743 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.687 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.144 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.572 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.482 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.767 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.767 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.348 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.509 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 46.250 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 54.156 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 65.905 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 1018.571 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2076.697 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.264 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.176 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.601 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.582 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.779 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.697 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.784 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.317 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.846 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.612 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 27.890 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 27.823 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 53.911 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 54.563 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 54.926 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 94.844 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 119.715 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 152.253 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 169.219 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 170.168 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 170.682 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 171.771 | 358,041 | 0.4165 | 6 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.083 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.093 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.116 | 5,356 | 0.2749 | 25 | no |
| gzip | 4 | 0.137 | 5,145 | 0.2641 | 25 | no |
| gzip | 5 | 0.177 | 4,896 | 0.2513 | 25 | no |
| gzip | 6 | 0.356 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.529 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.726 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.711 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.057 | 6,028 | 0.3094 | 17 | yes |
| brotli | 1 | 0.078 | 5,737 | 0.2945 | 11 | yes |
| brotli | 2 | 0.101 | 4,944 | 0.2538 | 25 | yes |
| brotli | 3 | 0.130 | 4,930 | 0.2531 | 18 | yes |
| brotli | 4 | 0.212 | 4,898 | 0.2514 | 24 | yes |
| brotli | 5 | 0.395 | 4,581 | 0.2352 | 25 | no |
| brotli | 6 | 0.509 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.573 | 4,564 | 0.2343 | 8 | yes |
| brotli | 8 | 0.608 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.737 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.648 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.595 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.059 | 5,379 | 0.2761 | 13 | yes |
| zstd | 2 | 0.064 | 5,176 | 0.2657 | 17 | yes |
| zstd | 3 | 0.083 | 5,169 | 0.2653 | 14 | yes |
| zstd | 4 | 0.084 | 5,154 | 0.2646 | 8 | yes |
| zstd | 5 | 0.152 | 5,074 | 0.2605 | 8 | yes |
| zstd | 6 | 0.198 | 4,797 | 0.2463 | 10 | yes |
| zstd | 7 | 0.235 | 4,702 | 0.2414 | 13 | yes |
| zstd | 8 | 0.254 | 4,696 | 0.2411 | 23 | yes |
| zstd | 9 | 0.343 | 4,690 | 0.2408 | 12 | yes |
| zstd | 10 | 0.477 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.625 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.615 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.000 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.740 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.857 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.554 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.542 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.539 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.992 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.043 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.040 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.002 | 4,348 | 0.2232 | 5 | yes |
