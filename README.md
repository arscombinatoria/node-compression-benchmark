# Node Compression Benchmark

Last updated: 2026-05-09T08:06:29.615Z

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
| gzip | 1 | 1.414 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.454 | 30,134 | 0.3827 | 6 | yes |
| gzip | 3 | 1.568 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.806 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 2.056 | 27,721 | 0.3520 | 6 | yes |
| gzip | 6 | 2.320 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.515 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.830 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.366 | 27,530 | 0.3496 | 10 | yes |
| brotli | 0 | 0.359 | 33,111 | 0.4205 | 21 | yes |
| brotli | 1 | 0.742 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.796 | 29,394 | 0.3733 | 8 | yes |
| brotli | 3 | 0.949 | 29,072 | 0.3692 | 6 | yes |
| brotli | 4 | 1.498 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.076 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.265 | 26,844 | 0.3409 | 22 | yes |
| brotli | 7 | 3.686 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.575 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.354 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 34.201 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.982 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.486 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.357 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.418 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.532 | 29,108 | 0.3696 | 8 | yes |
| zstd | 5 | 1.387 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.602 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.826 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.935 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.137 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.362 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.004 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.243 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.259 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.530 | 26,432 | 0.3357 | 10 | yes |
| zstd | 15 | 8.942 | 26,420 | 0.3355 | 8 | yes |
| zstd | 16 | 11.972 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 12.072 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 12.056 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 22.632 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 22.815 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 22.082 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 22.123 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 83.750 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 87.495 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 91.542 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.731 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 119.059 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.830 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 141.464 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 158.731 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.287 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.536 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 27.976 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.840 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.349 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 86.791 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 125.221 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 144.241 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 420.290 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 538.716 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 697.953 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6034.067 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12613.242 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.908 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 25.185 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 40.493 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 43.787 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 66.110 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.796 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 84.628 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 98.428 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 99.287 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 122.467 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 143.789 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 207.402 | 2,866,083 | 0.5237 | 6 | yes |
| zstd | 13 | 398.214 | 2,864,062 | 0.5233 | 22 | yes |
| zstd | 14 | 477.273 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 546.692 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 691.792 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 894.512 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1230.335 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1352.195 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1335.728 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1390.792 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1394.331 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 11.945 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 11.947 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 11.950 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.553 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.547 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.589 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.512 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.522 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.550 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.313 | 613,595 | 0.9981 | 13 | yes |
| brotli | 1 | 0.338 | 614,785 | 1.0000 | 8 | yes |
| brotli | 2 | 0.709 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.890 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.121 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.793 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.654 | 614,785 | 1.0000 | 19 | yes |
| brotli | 7 | 2.074 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.700 | 614,785 | 1.0000 | 12 | yes |
| brotli | 9 | 3.655 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 112.253 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 252.170 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.437 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.469 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.534 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.635 | 614,804 | 1.0000 | 23 | yes |
| zstd | 5 | 0.832 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.776 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 1.091 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.978 | 614,804 | 1.0000 | 6 | yes |
| zstd | 9 | 1.485 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 2.087 | 614,804 | 1.0000 | 10 | yes |
| zstd | 11 | 2.721 | 614,804 | 1.0000 | 8 | yes |
| zstd | 12 | 1.628 | 614,804 | 1.0000 | 25 | no |
| zstd | 13 | 6.464 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 6.051 | 612,619 | 0.9965 | 7 | yes |
| zstd | 15 | 5.934 | 612,619 | 0.9965 | 8 | yes |
| zstd | 16 | 16.628 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 20.302 | 612,516 | 0.9963 | 12 | yes |
| zstd | 18 | 25.790 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 32.475 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 29.552 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 33.892 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 26.886 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,120 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.863 | 144,617 | 0.2963 | 5 | yes |
| gzip | 2 | 4.175 | 137,841 | 0.2824 | 5 | yes |
| gzip | 3 | 5.425 | 133,234 | 0.2730 | 5 | yes |
| gzip | 4 | 5.805 | 125,052 | 0.2562 | 5 | yes |
| gzip | 5 | 8.139 | 120,442 | 0.2467 | 5 | yes |
| gzip | 6 | 11.788 | 118,722 | 0.2432 | 5 | yes |
| gzip | 7 | 14.877 | 118,261 | 0.2423 | 5 | yes |
| gzip | 8 | 27.978 | 117,996 | 0.2417 | 5 | yes |
| gzip | 9 | 43.076 | 117,926 | 0.2416 | 5 | yes |
| brotli | 0 | 1.548 | 148,891 | 0.3050 | 5 | yes |
| brotli | 1 | 2.161 | 136,753 | 0.2802 | 5 | yes |
| brotli | 2 | 3.896 | 128,591 | 0.2634 | 5 | yes |
| brotli | 3 | 4.462 | 125,908 | 0.2579 | 5 | yes |
| brotli | 4 | 6.368 | 122,108 | 0.2502 | 5 | yes |
| brotli | 5 | 9.900 | 112,160 | 0.2298 | 5 | yes |
| brotli | 6 | 11.612 | 109,504 | 0.2243 | 5 | yes |
| brotli | 7 | 13.481 | 107,566 | 0.2204 | 5 | yes |
| brotli | 8 | 16.722 | 106,551 | 0.2183 | 5 | yes |
| brotli | 9 | 21.878 | 105,637 | 0.2164 | 6 | yes |
| brotli | 10 | 276.501 | 98,220 | 0.2012 | 5 | yes |
| brotli | 11 | 714.724 | 96,024 | 0.1967 | 5 | yes |
| zstd | 1 | 1.692 | 137,463 | 0.2816 | 5 | yes |
| zstd | 2 | 1.872 | 133,238 | 0.2730 | 5 | yes |
| zstd | 3 | 2.331 | 125,660 | 0.2574 | 5 | yes |
| zstd | 4 | 2.405 | 125,451 | 0.2570 | 5 | yes |
| zstd | 5 | 4.899 | 116,783 | 0.2393 | 5 | yes |
| zstd | 6 | 6.536 | 112,910 | 0.2313 | 5 | yes |
| zstd | 7 | 7.547 | 111,350 | 0.2281 | 5 | yes |
| zstd | 8 | 9.084 | 110,572 | 0.2265 | 5 | yes |
| zstd | 9 | 9.086 | 110,572 | 0.2265 | 5 | yes |
| zstd | 10 | 10.817 | 109,567 | 0.2245 | 5 | yes |
| zstd | 11 | 14.282 | 108,971 | 0.2232 | 6 | yes |
| zstd | 12 | 14.267 | 108,971 | 0.2232 | 5 | yes |
| zstd | 13 | 27.012 | 107,801 | 0.2208 | 5 | yes |
| zstd | 14 | 31.978 | 107,188 | 0.2196 | 5 | yes |
| zstd | 15 | 34.787 | 107,114 | 0.2194 | 5 | yes |
| zstd | 16 | 64.217 | 101,538 | 0.2080 | 5 | yes |
| zstd | 17 | 70.287 | 100,666 | 0.2062 | 5 | yes |
| zstd | 18 | 108.416 | 99,875 | 0.2046 | 5 | yes |
| zstd | 19 | 144.799 | 99,768 | 0.2044 | 5 | yes |
| zstd | 20 | 145.421 | 99,768 | 0.2044 | 5 | yes |
| zstd | 21 | 146.064 | 99,792 | 0.2044 | 5 | yes |
| zstd | 22 | 142.251 | 99,792 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.117 | 4,987 | 0.2897 | 9 | yes |
| gzip | 2 | 0.132 | 4,874 | 0.2831 | 5 | yes |
| gzip | 3 | 0.138 | 4,805 | 0.2791 | 18 | yes |
| gzip | 4 | 0.174 | 4,529 | 0.2631 | 9 | yes |
| gzip | 5 | 0.229 | 4,441 | 0.2579 | 8 | yes |
| gzip | 6 | 0.280 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.314 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.462 | 4,418 | 0.2566 | 5 | yes |
| gzip | 9 | 0.483 | 4,418 | 0.2566 | 5 | yes |
| brotli | 0 | 0.059 | 5,234 | 0.3040 | 15 | yes |
| brotli | 1 | 0.066 | 5,133 | 0.2981 | 10 | yes |
| brotli | 2 | 0.120 | 4,740 | 0.2753 | 25 | no |
| brotli | 3 | 0.146 | 4,650 | 0.2701 | 22 | yes |
| brotli | 4 | 0.273 | 4,555 | 0.2646 | 7 | yes |
| brotli | 5 | 0.378 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.398 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.435 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.474 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.586 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.945 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.801 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.061 | 4,924 | 0.2860 | 7 | yes |
| zstd | 2 | 0.068 | 4,868 | 0.2827 | 16 | yes |
| zstd | 3 | 0.104 | 4,718 | 0.2740 | 20 | yes |
| zstd | 4 | 0.131 | 4,680 | 0.2718 | 5 | yes |
| zstd | 5 | 0.191 | 4,518 | 0.2624 | 5 | yes |
| zstd | 6 | 0.253 | 4,437 | 0.2577 | 20 | yes |
| zstd | 7 | 0.295 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.329 | 4,425 | 0.2570 | 7 | yes |
| zstd | 9 | 0.374 | 4,419 | 0.2567 | 5 | yes |
| zstd | 10 | 0.406 | 4,409 | 0.2561 | 5 | yes |
| zstd | 11 | 0.668 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.694 | 4,391 | 0.2550 | 8 | yes |
| zstd | 13 | 0.996 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.539 | 4,305 | 0.2500 | 5 | yes |
| zstd | 15 | 1.646 | 4,302 | 0.2499 | 5 | yes |
| zstd | 16 | 2.586 | 4,281 | 0.2486 | 5 | yes |
| zstd | 17 | 2.697 | 4,280 | 0.2486 | 5 | yes |
| zstd | 18 | 2.683 | 4,280 | 0.2486 | 5 | yes |
| zstd | 19 | 5.278 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.253 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.259 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.323 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.063 | 3,217 | 0.4493 | 25 | no |
| gzip | 2 | 0.056 | 3,179 | 0.4440 | 25 | no |
| gzip | 3 | 0.062 | 3,150 | 0.4399 | 25 | no |
| gzip | 4 | 0.066 | 3,092 | 0.4318 | 23 | yes |
| gzip | 5 | 0.097 | 3,047 | 0.4256 | 25 | no |
| gzip | 6 | 0.086 | 3,041 | 0.4247 | 25 | no |
| gzip | 7 | 0.091 | 3,039 | 0.4244 | 25 | no |
| gzip | 8 | 0.089 | 3,039 | 0.4244 | 25 | no |
| gzip | 9 | 0.119 | 3,039 | 0.4244 | 5 | yes |
| brotli | 0 | 0.031 | 3,544 | 0.4950 | 13 | yes |
| brotli | 1 | 0.039 | 3,378 | 0.4718 | 8 | yes |
| brotli | 2 | 0.063 | 3,258 | 0.4550 | 25 | no |
| brotli | 3 | 0.079 | 3,207 | 0.4479 | 25 | yes |
| brotli | 4 | 0.187 | 3,138 | 0.4383 | 5 | yes |
| brotli | 5 | 0.221 | 2,961 | 0.4135 | 11 | yes |
| brotli | 6 | 0.235 | 2,950 | 0.4120 | 5 | yes |
| brotli | 7 | 0.251 | 2,942 | 0.4109 | 7 | yes |
| brotli | 8 | 0.256 | 2,942 | 0.4109 | 8 | yes |
| brotli | 9 | 0.338 | 2,943 | 0.4110 | 6 | yes |
| brotli | 10 | 3.356 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 7.993 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.039 | 3,250 | 0.4539 | 25 | no |
| zstd | 2 | 0.045 | 3,196 | 0.4464 | 13 | yes |
| zstd | 3 | 0.056 | 3,171 | 0.4429 | 17 | yes |
| zstd | 4 | 0.072 | 3,098 | 0.4327 | 22 | yes |
| zstd | 5 | 0.079 | 3,077 | 0.4297 | 20 | yes |
| zstd | 6 | 0.109 | 3,055 | 0.4267 | 13 | yes |
| zstd | 7 | 0.140 | 3,050 | 0.4260 | 5 | yes |
| zstd | 8 | 0.137 | 3,050 | 0.4260 | 5 | yes |
| zstd | 9 | 0.186 | 3,050 | 0.4260 | 11 | yes |
| zstd | 10 | 0.170 | 3,050 | 0.4260 | 9 | yes |
| zstd | 11 | 0.372 | 3,041 | 0.4247 | 5 | yes |
| zstd | 12 | 0.508 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.698 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.692 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.675 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.299 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.299 | 2,991 | 0.4177 | 5 | yes |
| zstd | 18 | 1.322 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.312 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.306 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.338 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.318 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,101 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.853 | 66,867 | 0.4075 | 5 | yes |
| gzip | 2 | 2.006 | 65,284 | 0.3978 | 5 | yes |
| gzip | 3 | 2.269 | 64,273 | 0.3917 | 5 | yes |
| gzip | 4 | 2.574 | 61,944 | 0.3775 | 5 | yes |
| gzip | 5 | 3.439 | 60,295 | 0.3674 | 5 | yes |
| gzip | 6 | 4.271 | 60,024 | 0.3658 | 5 | yes |
| gzip | 7 | 4.641 | 59,987 | 0.3655 | 5 | yes |
| gzip | 8 | 5.056 | 59,968 | 0.3654 | 5 | yes |
| gzip | 9 | 5.069 | 59,968 | 0.3654 | 5 | yes |
| brotli | 0 | 0.661 | 71,266 | 0.4343 | 5 | yes |
| brotli | 1 | 0.924 | 68,223 | 0.4157 | 5 | yes |
| brotli | 2 | 1.659 | 62,973 | 0.3837 | 5 | yes |
| brotli | 3 | 1.935 | 62,342 | 0.3799 | 5 | yes |
| brotli | 4 | 2.993 | 61,240 | 0.3732 | 5 | yes |
| brotli | 5 | 4.465 | 57,877 | 0.3527 | 5 | yes |
| brotli | 6 | 4.906 | 57,538 | 0.3506 | 5 | yes |
| brotli | 7 | 5.767 | 57,245 | 0.3488 | 5 | yes |
| brotli | 8 | 6.170 | 57,160 | 0.3483 | 5 | yes |
| brotli | 9 | 7.663 | 57,088 | 0.3479 | 5 | yes |
| brotli | 10 | 98.539 | 54,389 | 0.3314 | 5 | yes |
| brotli | 11 | 245.220 | 53,368 | 0.3252 | 5 | yes |
| zstd | 1 | 0.655 | 66,221 | 0.4035 | 5 | yes |
| zstd | 2 | 0.810 | 63,208 | 0.3852 | 5 | yes |
| zstd | 3 | 1.099 | 62,693 | 0.3820 | 5 | yes |
| zstd | 4 | 1.964 | 60,843 | 0.3708 | 5 | yes |
| zstd | 5 | 2.240 | 60,346 | 0.3677 | 5 | yes |
| zstd | 6 | 2.758 | 59,421 | 0.3621 | 5 | yes |
| zstd | 7 | 3.214 | 58,638 | 0.3573 | 5 | yes |
| zstd | 8 | 3.758 | 58,163 | 0.3544 | 5 | yes |
| zstd | 9 | 4.414 | 57,917 | 0.3529 | 5 | yes |
| zstd | 10 | 5.151 | 57,792 | 0.3522 | 5 | yes |
| zstd | 11 | 8.612 | 57,490 | 0.3503 | 5 | yes |
| zstd | 12 | 8.747 | 57,475 | 0.3502 | 5 | yes |
| zstd | 13 | 15.286 | 56,464 | 0.3441 | 5 | yes |
| zstd | 14 | 17.922 | 56,028 | 0.3414 | 5 | yes |
| zstd | 15 | 19.003 | 56,011 | 0.3413 | 5 | yes |
| zstd | 16 | 25.313 | 55,838 | 0.3403 | 5 | yes |
| zstd | 17 | 25.429 | 55,838 | 0.3403 | 5 | yes |
| zstd | 18 | 42.677 | 55,766 | 0.3398 | 5 | yes |
| zstd | 19 | 42.576 | 55,766 | 0.3398 | 5 | yes |
| zstd | 20 | 43.230 | 55,766 | 0.3398 | 5 | yes |
| zstd | 21 | 42.862 | 55,766 | 0.3398 | 5 | yes |
| zstd | 22 | 42.981 | 55,766 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.776 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.836 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.966 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.069 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.388 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.777 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.188 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.888 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.861 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.271 | 30,978 | 0.4230 | 8 | yes |
| brotli | 1 | 0.383 | 29,754 | 0.4063 | 6 | yes |
| brotli | 2 | 0.687 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.798 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.307 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.911 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.058 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.609 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.790 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.303 | 24,870 | 0.3396 | 11 | yes |
| brotli | 10 | 40.236 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 97.598 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.262 | 28,919 | 0.3949 | 5 | yes |
| zstd | 2 | 0.298 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.418 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.667 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.853 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.152 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.369 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.483 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.758 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 2.026 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.280 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.443 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.477 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.779 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.920 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.908 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.850 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.926 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.671 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.802 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.645 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.569 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.579 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.655 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.787 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.898 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.243 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.903 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.560 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.553 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.713 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.245 | 25,901 | 0.3420 | 12 | yes |
| brotli | 1 | 0.378 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.643 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.751 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.135 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.691 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.871 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.251 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.688 | 20,088 | 0.2652 | 6 | yes |
| brotli | 9 | 3.681 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 29.812 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 88.367 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.263 | 22,639 | 0.2989 | 7 | yes |
| zstd | 2 | 0.288 | 22,433 | 0.2962 | 6 | yes |
| zstd | 3 | 0.383 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.480 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.818 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.066 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.329 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.495 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.852 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.479 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.323 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.252 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.151 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.225 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.413 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.677 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.880 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 21.873 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 22.578 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 26.394 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 37.493 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 43.033 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.082 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.225 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.352 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.750 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.162 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.934 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.623 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.832 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.879 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.435 | 43,268 | 0.1864 | 6 | yes |
| brotli | 1 | 0.628 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.181 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.398 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.048 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.988 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.261 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.660 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.156 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.182 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 98.240 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 308.336 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.497 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.558 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.654 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.727 | 30,973 | 0.1334 | 7 | yes |
| zstd | 5 | 2.367 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.361 | 29,727 | 0.1281 | 7 | yes |
| zstd | 7 | 2.598 | 29,710 | 0.1280 | 7 | yes |
| zstd | 8 | 3.160 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.873 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.577 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.214 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.123 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.969 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.909 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.285 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.773 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 64.375 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 84.861 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 96.455 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 100.829 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 101.068 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 102.096 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 92.582 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 93.044 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 111.195 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 148.513 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 172.875 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 216.883 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 323.322 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 908.257 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1212.091 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 45.910 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 62.176 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 113.626 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 131.462 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 173.948 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 311.420 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 341.732 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 477.877 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 618.725 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 839.650 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 13362.796 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37314.988 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.383 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 55.472 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 66.976 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 69.506 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 143.418 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 200.097 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 225.211 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 288.130 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 292.758 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 389.622 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 573.397 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 613.012 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 758.330 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 999.789 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1274.783 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3191.452 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3536.241 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5093.552 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9243.028 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9475.060 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9518.779 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 10001.229 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.333 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.315 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.471 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.512 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.616 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.668 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.410 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.243 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.413 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.932 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.329 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.001 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.959 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.607 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.248 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.087 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.205 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 51.779 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 64.404 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 903.811 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1924.526 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.078 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.905 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.864 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.415 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.656 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.039 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.105 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.635 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.061 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.926 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 25.776 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.959 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 48.265 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 49.524 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 49.772 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 92.757 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 111.515 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 149.289 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 165.431 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 170.478 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 170.365 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 170.673 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.143 | 5,506 | 0.2826 | 5 | yes |
| gzip | 2 | 0.137 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.172 | 5,356 | 0.2749 | 8 | yes |
| gzip | 4 | 0.200 | 5,145 | 0.2641 | 10 | yes |
| gzip | 5 | 0.276 | 4,896 | 0.2513 | 5 | yes |
| gzip | 6 | 0.365 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.482 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.653 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.653 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.062 | 6,028 | 0.3094 | 17 | yes |
| brotli | 1 | 0.074 | 5,737 | 0.2945 | 11 | yes |
| brotli | 2 | 0.138 | 4,944 | 0.2538 | 9 | yes |
| brotli | 3 | 0.172 | 4,930 | 0.2531 | 9 | yes |
| brotli | 4 | 0.290 | 4,898 | 0.2514 | 6 | yes |
| brotli | 5 | 0.457 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.510 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.585 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.612 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.739 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.261 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.829 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.060 | 5,379 | 0.2761 | 12 | yes |
| zstd | 2 | 0.070 | 5,176 | 0.2657 | 14 | yes |
| zstd | 3 | 0.097 | 5,169 | 0.2653 | 16 | yes |
| zstd | 4 | 0.099 | 5,154 | 0.2646 | 16 | yes |
| zstd | 5 | 0.199 | 5,074 | 0.2605 | 5 | yes |
| zstd | 6 | 0.266 | 4,797 | 0.2463 | 6 | yes |
| zstd | 7 | 0.315 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.358 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.452 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.530 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.610 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.654 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.012 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.832 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.949 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.890 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.885 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.889 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.639 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.682 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.690 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.692 | 4,348 | 0.2232 | 5 | yes |
