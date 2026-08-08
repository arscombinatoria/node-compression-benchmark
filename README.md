# Node Compression Benchmark

Last updated: 2026-08-08T21:16:10.293Z

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
| gzip | 1 | 0.930 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.991 | 30,134 | 0.3827 | 6 | yes |
| gzip | 3 | 1.083 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.206 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.544 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.833 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.026 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.338 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.394 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.385 | 33,111 | 0.4205 | 6 | yes |
| brotli | 1 | 0.768 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.829 | 29,394 | 0.3733 | 6 | yes |
| brotli | 3 | 0.964 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.549 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.117 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.287 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.805 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.945 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.931 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.461 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.286 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.303 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.370 | 30,069 | 0.3818 | 8 | yes |
| zstd | 3 | 0.399 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.500 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.885 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.215 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.467 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.629 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.793 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.009 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.347 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.539 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.504 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.871 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.088 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.160 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.139 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.156 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.877 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.794 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.666 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.727 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 83.652 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 88.695 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 91.630 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 103.494 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 118.943 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 133.324 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 140.734 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 158.151 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 169.418 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.303 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.618 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.881 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.256 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 86.725 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 126.123 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 141.692 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 420.034 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 541.966 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 678.473 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5976.841 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12466.638 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.711 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 25.053 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 40.455 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 43.636 | 3,084,237 | 0.5636 | 7 | yes |
| zstd | 5 | 65.958 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.399 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 84.485 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 98.377 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 100.462 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 131.092 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 165.797 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 178.820 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 369.069 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 431.620 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 492.269 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 667.145 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 816.523 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1156.577 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1270.808 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1271.743 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1289.255 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1277.759 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 11.832 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 11.840 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 11.854 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 12.370 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 12.358 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 12.316 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 12.294 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 12.268 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 12.421 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.253 | 596,751 | 0.9970 | 6 | yes |
| brotli | 1 | 0.229 | 598,581 | 1.0000 | 5 | yes |
| brotli | 2 | 0.602 | 598,587 | 1.0000 | 5 | yes |
| brotli | 3 | 0.790 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 1.028 | 598,581 | 1.0000 | 5 | yes |
| brotli | 5 | 1.456 | 598,581 | 1.0000 | 5 | yes |
| brotli | 6 | 1.541 | 598,581 | 1.0000 | 25 | no |
| brotli | 7 | 1.825 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 2.191 | 598,581 | 1.0000 | 5 | yes |
| brotli | 9 | 4.459 | 598,581 | 1.0000 | 9 | yes |
| brotli | 10 | 108.852 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 265.487 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.318 | 598,601 | 1.0000 | 9 | yes |
| zstd | 2 | 0.283 | 598,600 | 1.0000 | 5 | yes |
| zstd | 3 | 0.333 | 598,600 | 1.0000 | 25 | no |
| zstd | 4 | 0.348 | 598,600 | 1.0000 | 25 | no |
| zstd | 5 | 0.481 | 598,600 | 1.0000 | 5 | yes |
| zstd | 6 | 0.488 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.533 | 598,600 | 1.0000 | 21 | yes |
| zstd | 8 | 0.543 | 598,600 | 1.0000 | 5 | yes |
| zstd | 9 | 0.668 | 598,600 | 1.0000 | 5 | yes |
| zstd | 10 | 0.661 | 598,600 | 1.0000 | 5 | yes |
| zstd | 11 | 0.673 | 598,600 | 1.0000 | 5 | yes |
| zstd | 12 | 0.690 | 598,600 | 1.0000 | 5 | yes |
| zstd | 13 | 2.307 | 595,998 | 0.9957 | 12 | yes |
| zstd | 14 | 2.410 | 595,998 | 0.9957 | 5 | yes |
| zstd | 15 | 2.244 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 14.374 | 595,898 | 0.9955 | 5 | yes |
| zstd | 17 | 15.065 | 595,889 | 0.9955 | 20 | yes |
| zstd | 18 | 21.693 | 595,891 | 0.9955 | 5 | yes |
| zstd | 19 | 26.247 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 26.331 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 26.101 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 26.488 | 595,894 | 0.9955 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,802 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.955 | 145,459 | 0.2964 | 5 | yes |
| gzip | 2 | 4.170 | 138,655 | 0.2825 | 5 | yes |
| gzip | 3 | 5.449 | 134,120 | 0.2733 | 5 | yes |
| gzip | 4 | 5.793 | 125,846 | 0.2564 | 5 | yes |
| gzip | 5 | 8.176 | 121,168 | 0.2469 | 5 | yes |
| gzip | 6 | 11.908 | 119,464 | 0.2434 | 5 | yes |
| gzip | 7 | 15.067 | 118,991 | 0.2424 | 5 | yes |
| gzip | 8 | 28.143 | 118,721 | 0.2419 | 5 | yes |
| gzip | 9 | 43.396 | 118,656 | 0.2418 | 5 | yes |
| brotli | 0 | 1.534 | 149,780 | 0.3052 | 5 | yes |
| brotli | 1 | 2.151 | 137,594 | 0.2803 | 5 | yes |
| brotli | 2 | 3.943 | 129,396 | 0.2636 | 5 | yes |
| brotli | 3 | 4.515 | 126,773 | 0.2583 | 5 | yes |
| brotli | 4 | 6.545 | 122,637 | 0.2499 | 5 | yes |
| brotli | 5 | 10.071 | 112,852 | 0.2299 | 5 | yes |
| brotli | 6 | 11.431 | 110,205 | 0.2245 | 5 | yes |
| brotli | 7 | 13.978 | 108,216 | 0.2205 | 5 | yes |
| brotli | 8 | 16.604 | 107,187 | 0.2184 | 5 | yes |
| brotli | 9 | 22.695 | 106,299 | 0.2166 | 5 | yes |
| brotli | 10 | 270.701 | 98,781 | 0.2013 | 5 | yes |
| brotli | 11 | 711.326 | 96,661 | 0.1969 | 5 | yes |
| zstd | 1 | 1.677 | 138,381 | 0.2819 | 5 | yes |
| zstd | 2 | 1.883 | 134,062 | 0.2731 | 5 | yes |
| zstd | 3 | 2.156 | 126,400 | 0.2575 | 5 | yes |
| zstd | 4 | 2.237 | 126,225 | 0.2572 | 5 | yes |
| zstd | 5 | 4.388 | 117,610 | 0.2396 | 5 | yes |
| zstd | 6 | 6.013 | 113,616 | 0.2315 | 5 | yes |
| zstd | 7 | 6.673 | 112,064 | 0.2283 | 5 | yes |
| zstd | 8 | 8.432 | 111,256 | 0.2267 | 5 | yes |
| zstd | 9 | 8.462 | 111,256 | 0.2267 | 5 | yes |
| zstd | 10 | 10.946 | 110,241 | 0.2246 | 5 | yes |
| zstd | 11 | 13.009 | 109,605 | 0.2233 | 5 | yes |
| zstd | 12 | 12.935 | 109,605 | 0.2233 | 5 | yes |
| zstd | 13 | 25.964 | 108,404 | 0.2209 | 5 | yes |
| zstd | 14 | 31.902 | 107,840 | 0.2197 | 5 | yes |
| zstd | 15 | 34.972 | 107,780 | 0.2196 | 5 | yes |
| zstd | 16 | 63.639 | 102,193 | 0.2082 | 5 | yes |
| zstd | 17 | 70.181 | 101,271 | 0.2063 | 5 | yes |
| zstd | 18 | 110.888 | 100,490 | 0.2047 | 5 | yes |
| zstd | 19 | 143.958 | 100,397 | 0.2046 | 5 | yes |
| zstd | 20 | 143.678 | 100,397 | 0.2046 | 5 | yes |
| zstd | 21 | 143.671 | 100,396 | 0.2046 | 5 | yes |
| zstd | 22 | 143.675 | 100,396 | 0.2046 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.142 | 4,987 | 0.2897 | 5 | yes |
| gzip | 2 | 0.143 | 4,874 | 0.2831 | 5 | yes |
| gzip | 3 | 0.153 | 4,806 | 0.2791 | 5 | yes |
| gzip | 4 | 0.171 | 4,530 | 0.2631 | 12 | yes |
| gzip | 5 | 0.238 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.270 | 4,425 | 0.2570 | 7 | yes |
| gzip | 7 | 0.318 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.448 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.463 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.055 | 5,235 | 0.3041 | 9 | yes |
| brotli | 1 | 0.065 | 5,134 | 0.2982 | 10 | yes |
| brotli | 2 | 0.132 | 4,741 | 0.2754 | 23 | yes |
| brotli | 3 | 0.144 | 4,650 | 0.2701 | 25 | no |
| brotli | 4 | 0.283 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.383 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.403 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.447 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.474 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 1.962 | 4,244 | 0.2465 | 6 | yes |
| brotli | 10 | 6.811 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.618 | 3,873 | 0.2250 | 5 | yes |
| zstd | 1 | 0.054 | 4,923 | 0.2859 | 25 | no |
| zstd | 2 | 0.057 | 4,868 | 0.2827 | 12 | yes |
| zstd | 3 | 0.076 | 4,717 | 0.2740 | 12 | yes |
| zstd | 4 | 0.078 | 4,679 | 0.2718 | 24 | yes |
| zstd | 5 | 0.165 | 4,519 | 0.2625 | 9 | yes |
| zstd | 6 | 0.220 | 4,437 | 0.2577 | 8 | yes |
| zstd | 7 | 0.261 | 4,437 | 0.2577 | 7 | yes |
| zstd | 8 | 0.290 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.325 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.366 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.610 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.640 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.934 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.457 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.543 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.496 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.680 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.675 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.270 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.261 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.240 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.249 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.083 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.058 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.062 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.072 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.117 | 3,051 | 0.4261 | 5 | yes |
| gzip | 6 | 0.109 | 3,044 | 0.4251 | 5 | yes |
| gzip | 7 | 0.116 | 3,042 | 0.4248 | 7 | yes |
| gzip | 8 | 0.087 | 3,042 | 0.4248 | 25 | no |
| gzip | 9 | 0.090 | 3,042 | 0.4248 | 14 | yes |
| brotli | 0 | 0.030 | 3,549 | 0.4956 | 10 | yes |
| brotli | 1 | 0.039 | 3,381 | 0.4721 | 16 | yes |
| brotli | 2 | 0.061 | 3,263 | 0.4557 | 17 | yes |
| brotli | 3 | 0.086 | 3,216 | 0.4491 | 9 | yes |
| brotli | 4 | 0.168 | 3,147 | 0.4395 | 5 | yes |
| brotli | 5 | 0.228 | 2,963 | 0.4138 | 8 | yes |
| brotli | 6 | 0.257 | 2,952 | 0.4122 | 5 | yes |
| brotli | 7 | 0.260 | 2,944 | 0.4111 | 7 | yes |
| brotli | 8 | 0.258 | 2,944 | 0.4111 | 6 | yes |
| brotli | 9 | 1.920 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.119 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.711 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.033 | 3,254 | 0.4544 | 15 | yes |
| zstd | 2 | 0.036 | 3,200 | 0.4469 | 13 | yes |
| zstd | 3 | 0.043 | 3,176 | 0.4435 | 19 | yes |
| zstd | 4 | 0.064 | 3,102 | 0.4332 | 25 | no |
| zstd | 5 | 0.073 | 3,079 | 0.4300 | 12 | yes |
| zstd | 6 | 0.101 | 3,060 | 0.4273 | 25 | no |
| zstd | 7 | 0.117 | 3,053 | 0.4263 | 16 | yes |
| zstd | 8 | 0.104 | 3,053 | 0.4263 | 24 | yes |
| zstd | 9 | 0.182 | 3,055 | 0.4266 | 15 | yes |
| zstd | 10 | 0.167 | 3,055 | 0.4266 | 15 | yes |
| zstd | 11 | 0.350 | 3,044 | 0.4251 | 6 | yes |
| zstd | 12 | 0.482 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.673 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.675 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.694 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.273 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.281 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.277 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.294 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.281 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.295 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.281 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 166,624 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.908 | 67,977 | 0.4080 | 5 | yes |
| gzip | 2 | 2.039 | 66,279 | 0.3978 | 5 | yes |
| gzip | 3 | 2.355 | 65,249 | 0.3916 | 5 | yes |
| gzip | 4 | 2.573 | 62,863 | 0.3773 | 5 | yes |
| gzip | 5 | 3.464 | 61,226 | 0.3675 | 5 | yes |
| gzip | 6 | 4.286 | 60,947 | 0.3658 | 5 | yes |
| gzip | 7 | 4.678 | 60,906 | 0.3655 | 5 | yes |
| gzip | 8 | 5.110 | 60,892 | 0.3654 | 5 | yes |
| gzip | 9 | 5.109 | 60,892 | 0.3654 | 5 | yes |
| brotli | 0 | 0.670 | 72,364 | 0.4343 | 5 | yes |
| brotli | 1 | 0.902 | 69,292 | 0.4159 | 5 | yes |
| brotli | 2 | 1.667 | 63,905 | 0.3835 | 5 | yes |
| brotli | 3 | 1.923 | 63,322 | 0.3800 | 5 | yes |
| brotli | 4 | 2.937 | 62,116 | 0.3728 | 5 | yes |
| brotli | 5 | 4.505 | 58,765 | 0.3527 | 5 | yes |
| brotli | 6 | 4.955 | 58,363 | 0.3503 | 5 | yes |
| brotli | 7 | 5.796 | 58,113 | 0.3488 | 5 | yes |
| brotli | 8 | 6.196 | 58,028 | 0.3483 | 5 | yes |
| brotli | 9 | 8.683 | 57,951 | 0.3478 | 5 | yes |
| brotli | 10 | 97.672 | 55,132 | 0.3309 | 5 | yes |
| brotli | 11 | 256.910 | 54,171 | 0.3251 | 5 | yes |
| zstd | 1 | 0.633 | 67,252 | 0.4036 | 5 | yes |
| zstd | 2 | 0.804 | 64,236 | 0.3855 | 5 | yes |
| zstd | 3 | 0.991 | 63,718 | 0.3824 | 5 | yes |
| zstd | 4 | 1.779 | 61,769 | 0.3707 | 5 | yes |
| zstd | 5 | 2.115 | 61,226 | 0.3675 | 11 | yes |
| zstd | 6 | 2.421 | 60,325 | 0.3620 | 5 | yes |
| zstd | 7 | 2.895 | 59,490 | 0.3570 | 5 | yes |
| zstd | 8 | 3.600 | 59,014 | 0.3542 | 5 | yes |
| zstd | 9 | 4.150 | 58,750 | 0.3526 | 5 | yes |
| zstd | 10 | 4.984 | 58,611 | 0.3518 | 5 | yes |
| zstd | 11 | 8.540 | 58,323 | 0.3500 | 5 | yes |
| zstd | 12 | 8.728 | 58,307 | 0.3499 | 5 | yes |
| zstd | 13 | 15.341 | 57,310 | 0.3439 | 5 | yes |
| zstd | 14 | 18.097 | 56,860 | 0.3412 | 5 | yes |
| zstd | 15 | 18.409 | 56,832 | 0.3411 | 5 | yes |
| zstd | 16 | 25.179 | 56,647 | 0.3400 | 5 | yes |
| zstd | 17 | 25.229 | 56,647 | 0.3400 | 5 | yes |
| zstd | 18 | 42.893 | 56,578 | 0.3396 | 5 | yes |
| zstd | 19 | 42.972 | 56,578 | 0.3396 | 5 | yes |
| zstd | 20 | 42.684 | 56,578 | 0.3396 | 5 | yes |
| zstd | 21 | 42.788 | 56,578 | 0.3396 | 5 | yes |
| zstd | 22 | 42.791 | 56,578 | 0.3396 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.774 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.835 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.962 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.066 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.375 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.757 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.103 | 25,913 | 0.3538 | 12 | yes |
| gzip | 8 | 2.824 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.841 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.269 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.370 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.682 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.812 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.311 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.887 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.008 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.440 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.567 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.481 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 39.183 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 96.048 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.261 | 28,919 | 0.3949 | 5 | yes |
| zstd | 2 | 0.279 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.343 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.423 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.780 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.072 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.285 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.424 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.613 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.899 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.133 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.275 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.410 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.671 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.872 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.863 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.813 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.820 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.624 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.628 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.707 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.635 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.637 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.731 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.850 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 1.003 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.354 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 2.041 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.698 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 7.864 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 8.093 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.286 | 27,781 | 0.3075 | 5 | yes |
| brotli | 1 | 0.396 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.703 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.820 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.224 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.841 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 2.073 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.459 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.804 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 5.182 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 34.429 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 104.199 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.279 | 24,608 | 0.2724 | 8 | yes |
| zstd | 2 | 0.303 | 24,387 | 0.2700 | 5 | yes |
| zstd | 3 | 0.354 | 24,157 | 0.2674 | 5 | yes |
| zstd | 4 | 0.430 | 24,076 | 0.2665 | 5 | yes |
| zstd | 5 | 0.783 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 1.102 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.352 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.562 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.957 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.552 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.696 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.805 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 6.148 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 8.488 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 10.036 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 15.003 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 19.775 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 27.554 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 31.888 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 37.250 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 48.614 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 54.864 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.050 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.113 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.295 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.707 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.143 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.881 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.549 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.698 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.740 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.457 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.620 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.199 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.376 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.010 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.932 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.255 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.601 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.109 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.553 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 95.947 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 297.581 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.494 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.541 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.595 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.416 | 30,973 | 0.1334 | 6 | yes |
| zstd | 5 | 1.615 | 29,744 | 0.1281 | 9 | yes |
| zstd | 6 | 1.880 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.137 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.681 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.167 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.357 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.851 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.617 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.685 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.606 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.207 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.633 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 63.430 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 84.640 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 96.261 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 100.785 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 100.745 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 100.759 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,088,846 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 92.550 | 3,786,228 | 0.2216 | 5 | yes |
| gzip | 2 | 101.663 | 3,637,199 | 0.2128 | 5 | yes |
| gzip | 3 | 124.553 | 3,517,128 | 0.2058 | 5 | yes |
| gzip | 4 | 149.142 | 3,388,581 | 0.1983 | 5 | yes |
| gzip | 5 | 190.090 | 3,167,259 | 0.1853 | 5 | yes |
| gzip | 6 | 280.315 | 3,098,703 | 0.1813 | 5 | yes |
| gzip | 7 | 382.438 | 3,032,397 | 0.1774 | 5 | yes |
| gzip | 8 | 1075.209 | 2,964,487 | 0.1735 | 5 | yes |
| gzip | 9 | 1131.868 | 2,963,688 | 0.1734 | 5 | yes |
| brotli | 0 | 46.662 | 4,195,167 | 0.2455 | 5 | yes |
| brotli | 1 | 62.430 | 3,728,851 | 0.2182 | 5 | yes |
| brotli | 2 | 111.144 | 3,433,235 | 0.2009 | 5 | yes |
| brotli | 3 | 129.304 | 3,377,124 | 0.1976 | 5 | yes |
| brotli | 4 | 180.796 | 3,303,878 | 0.1933 | 5 | yes |
| brotli | 5 | 291.880 | 2,946,664 | 0.1724 | 5 | yes |
| brotli | 6 | 349.982 | 2,915,320 | 0.1706 | 5 | yes |
| brotli | 7 | 534.409 | 2,887,582 | 0.1690 | 5 | yes |
| brotli | 8 | 699.797 | 2,868,532 | 0.1679 | 5 | yes |
| brotli | 9 | 950.890 | 2,857,411 | 0.1672 | 5 | yes |
| brotli | 10 | 10358.434 | 2,448,858 | 0.1433 | 5 | yes |
| brotli | 11 | 27210.822 | 2,330,104 | 0.1364 | 5 | yes |
| zstd | 1 | 43.844 | 3,534,613 | 0.2068 | 5 | yes |
| zstd | 2 | 55.691 | 3,612,321 | 0.2114 | 5 | yes |
| zstd | 3 | 66.000 | 3,537,742 | 0.2070 | 5 | yes |
| zstd | 4 | 69.019 | 3,532,781 | 0.2067 | 5 | yes |
| zstd | 5 | 133.587 | 3,315,447 | 0.1940 | 5 | yes |
| zstd | 6 | 190.370 | 3,093,505 | 0.1810 | 5 | yes |
| zstd | 7 | 217.114 | 3,054,755 | 0.1788 | 5 | yes |
| zstd | 8 | 286.270 | 2,951,480 | 0.1727 | 5 | yes |
| zstd | 9 | 300.205 | 2,962,142 | 0.1733 | 5 | yes |
| zstd | 10 | 404.903 | 2,925,109 | 0.1712 | 5 | yes |
| zstd | 11 | 596.235 | 2,897,547 | 0.1696 | 5 | yes |
| zstd | 12 | 644.743 | 2,897,453 | 0.1696 | 5 | yes |
| zstd | 13 | 783.085 | 2,874,535 | 0.1682 | 5 | yes |
| zstd | 14 | 942.988 | 2,860,101 | 0.1674 | 5 | yes |
| zstd | 15 | 1245.943 | 2,856,465 | 0.1672 | 5 | yes |
| zstd | 16 | 2601.341 | 2,667,907 | 0.1561 | 5 | yes |
| zstd | 17 | 3381.873 | 2,576,011 | 0.1507 | 5 | yes |
| zstd | 18 | 5836.584 | 2,556,665 | 0.1496 | 5 | yes |
| zstd | 19 | 6339.915 | 2,549,586 | 0.1492 | 5 | yes |
| zstd | 20 | 6504.646 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 21 | 6514.369 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 22 | 6695.013 | 2,543,154 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.206 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.294 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.428 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.283 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.201 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.362 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.046 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 31.863 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.325 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.855 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.454 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.997 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.966 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.435 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.869 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.225 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 43.837 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 51.565 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 66.515 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 894.544 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1925.109 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.038 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.878 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.853 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.444 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.180 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.848 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.849 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.417 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.647 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.135 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 24.953 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.487 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 51.659 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 47.836 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 48.204 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 91.998 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 113.917 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 150.217 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 170.193 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 168.414 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 169.796 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 176.932 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.112 | 5,565 | 0.2841 | 20 | yes |
| gzip | 2 | 0.134 | 5,486 | 0.2801 | 20 | yes |
| gzip | 3 | 0.188 | 5,419 | 0.2767 | 5 | yes |
| gzip | 4 | 0.196 | 5,202 | 0.2656 | 9 | yes |
| gzip | 5 | 0.278 | 4,958 | 0.2531 | 5 | yes |
| gzip | 6 | 0.364 | 4,947 | 0.2526 | 5 | yes |
| gzip | 7 | 0.497 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.641 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.640 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.060 | 6,082 | 0.3105 | 15 | yes |
| brotli | 1 | 0.074 | 5,794 | 0.2958 | 9 | yes |
| brotli | 2 | 0.147 | 5,002 | 0.2554 | 6 | yes |
| brotli | 3 | 0.172 | 4,986 | 0.2546 | 10 | yes |
| brotli | 4 | 0.294 | 4,954 | 0.2529 | 6 | yes |
| brotli | 5 | 0.471 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.486 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.549 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.612 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 2.271 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 7.252 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 21.712 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.057 | 5,441 | 0.2778 | 13 | yes |
| zstd | 2 | 0.061 | 5,242 | 0.2676 | 11 | yes |
| zstd | 3 | 0.080 | 5,234 | 0.2672 | 10 | yes |
| zstd | 4 | 0.083 | 5,212 | 0.2661 | 14 | yes |
| zstd | 5 | 0.175 | 5,133 | 0.2621 | 8 | yes |
| zstd | 6 | 0.245 | 4,853 | 0.2478 | 7 | yes |
| zstd | 7 | 0.307 | 4,757 | 0.2429 | 7 | yes |
| zstd | 8 | 0.336 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.400 | 4,744 | 0.2422 | 7 | yes |
| zstd | 10 | 0.498 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.590 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.629 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.983 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.815 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.911 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.870 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.881 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.873 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 5.644 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.678 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 5.665 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.669 | 4,415 | 0.2254 | 5 | yes |
