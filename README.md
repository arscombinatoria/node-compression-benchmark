# Node Compression Benchmark

Last updated: 2026-06-23T21:17:37.306Z

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
| gzip | 1 | 0.947 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.964 | 30,134 | 0.3827 | 8 | yes |
| gzip | 3 | 1.067 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.203 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.563 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.855 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.038 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 3.187 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 3.211 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.554 | 33,111 | 0.4205 | 5 | yes |
| brotli | 1 | 1.065 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 1.292 | 29,394 | 0.3733 | 7 | yes |
| brotli | 3 | 1.497 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 2.281 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 3.259 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 3.528 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 4.024 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 4.205 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 8.061 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.159 | 25,340 | 0.3218 | 7 | yes |
| brotli | 11 | 94.411 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.323 | 31,062 | 0.3944 | 13 | yes |
| zstd | 2 | 0.526 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.668 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.770 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 1.406 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.235 | 27,592 | 0.3504 | 15 | yes |
| zstd | 7 | 1.466 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.581 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.801 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.026 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.318 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.456 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.456 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.729 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.894 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.986 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.956 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.929 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.617 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.607 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.519 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.445 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 84.733 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 89.483 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 91.780 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 103.396 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 118.873 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.767 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 141.370 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 160.246 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 170.789 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.653 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 27.888 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 48.817 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.216 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 86.304 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 123.123 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 139.941 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 420.914 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 542.666 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 726.149 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6419.172 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12833.273 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.682 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.798 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 39.036 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 41.913 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.646 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 79.115 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 85.443 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 99.261 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 95.321 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 122.070 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 152.904 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 181.889 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 362.660 | 2,864,062 | 0.5233 | 7 | yes |
| zstd | 14 | 416.121 | 2,852,038 | 0.5211 | 12 | yes |
| zstd | 15 | 467.093 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 778.959 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 757.233 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1139.469 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1264.108 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1423.208 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1389.518 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1375.325 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.181 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.119 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.083 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.638 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.656 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.723 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.666 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.628 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.814 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.280 | 613,595 | 0.9981 | 6 | yes |
| brotli | 1 | 0.242 | 614,785 | 1.0000 | 8 | yes |
| brotli | 2 | 0.629 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.815 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.144 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.553 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.541 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 1.967 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.168 | 614,785 | 1.0000 | 20 | yes |
| brotli | 9 | 3.033 | 614,785 | 1.0000 | 12 | yes |
| brotli | 10 | 109.844 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 253.814 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.289 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.303 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.322 | 614,804 | 1.0000 | 13 | yes |
| zstd | 4 | 0.341 | 614,804 | 1.0000 | 25 | no |
| zstd | 5 | 0.500 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.492 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.556 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.546 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.663 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.662 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.666 | 614,804 | 1.0000 | 20 | yes |
| zstd | 12 | 0.646 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.222 | 612,619 | 0.9965 | 13 | yes |
| zstd | 14 | 2.244 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 2.674 | 612,619 | 0.9965 | 9 | yes |
| zstd | 16 | 15.142 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 15.332 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 22.373 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 26.989 | 612,518 | 0.9963 | 6 | yes |
| zstd | 20 | 26.456 | 612,518 | 0.9963 | 23 | yes |
| zstd | 21 | 26.391 | 612,518 | 0.9963 | 7 | yes |
| zstd | 22 | 25.628 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 489,361 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.824 | 144,979 | 0.2963 | 5 | yes |
| gzip | 2 | 4.145 | 138,205 | 0.2824 | 5 | yes |
| gzip | 3 | 5.411 | 133,607 | 0.2730 | 5 | yes |
| gzip | 4 | 5.770 | 125,391 | 0.2562 | 5 | yes |
| gzip | 5 | 8.098 | 120,759 | 0.2468 | 5 | yes |
| gzip | 6 | 11.688 | 119,033 | 0.2432 | 5 | yes |
| gzip | 7 | 14.828 | 118,577 | 0.2423 | 5 | yes |
| gzip | 8 | 27.754 | 118,303 | 0.2417 | 5 | yes |
| gzip | 9 | 42.957 | 118,236 | 0.2416 | 5 | yes |
| brotli | 0 | 1.509 | 149,431 | 0.3054 | 5 | yes |
| brotli | 1 | 2.148 | 137,144 | 0.2803 | 5 | yes |
| brotli | 2 | 3.892 | 128,908 | 0.2634 | 5 | yes |
| brotli | 3 | 4.478 | 126,352 | 0.2582 | 5 | yes |
| brotli | 4 | 6.501 | 122,323 | 0.2500 | 5 | yes |
| brotli | 5 | 9.884 | 112,454 | 0.2298 | 5 | yes |
| brotli | 6 | 11.543 | 109,821 | 0.2244 | 5 | yes |
| brotli | 7 | 13.721 | 107,851 | 0.2204 | 5 | yes |
| brotli | 8 | 17.296 | 106,814 | 0.2183 | 5 | yes |
| brotli | 9 | 21.024 | 105,931 | 0.2165 | 5 | yes |
| brotli | 10 | 268.083 | 98,459 | 0.2012 | 5 | yes |
| brotli | 11 | 700.287 | 96,232 | 0.1966 | 5 | yes |
| zstd | 1 | 1.646 | 137,809 | 0.2816 | 5 | yes |
| zstd | 2 | 1.869 | 133,667 | 0.2731 | 5 | yes |
| zstd | 3 | 2.219 | 125,988 | 0.2575 | 5 | yes |
| zstd | 4 | 2.276 | 125,796 | 0.2571 | 5 | yes |
| zstd | 5 | 4.417 | 117,117 | 0.2393 | 5 | yes |
| zstd | 6 | 6.015 | 113,212 | 0.2313 | 5 | yes |
| zstd | 7 | 6.745 | 111,654 | 0.2282 | 5 | yes |
| zstd | 8 | 8.572 | 110,891 | 0.2266 | 5 | yes |
| zstd | 9 | 8.549 | 110,891 | 0.2266 | 5 | yes |
| zstd | 10 | 10.122 | 109,848 | 0.2245 | 5 | yes |
| zstd | 11 | 12.975 | 109,247 | 0.2232 | 5 | yes |
| zstd | 12 | 12.884 | 109,247 | 0.2232 | 5 | yes |
| zstd | 13 | 26.053 | 108,066 | 0.2208 | 5 | yes |
| zstd | 14 | 31.889 | 107,480 | 0.2196 | 5 | yes |
| zstd | 15 | 35.499 | 107,398 | 0.2195 | 5 | yes |
| zstd | 16 | 66.702 | 101,829 | 0.2081 | 5 | yes |
| zstd | 17 | 73.137 | 100,934 | 0.2063 | 5 | yes |
| zstd | 18 | 113.120 | 100,134 | 0.2046 | 5 | yes |
| zstd | 19 | 146.447 | 100,035 | 0.2044 | 5 | yes |
| zstd | 20 | 145.551 | 100,035 | 0.2044 | 5 | yes |
| zstd | 21 | 147.724 | 100,032 | 0.2044 | 5 | yes |
| zstd | 22 | 145.637 | 100,032 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.091 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.119 | 4,874 | 0.2831 | 16 | yes |
| gzip | 3 | 0.123 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.190 | 4,530 | 0.2631 | 5 | yes |
| gzip | 5 | 0.227 | 4,441 | 0.2579 | 13 | yes |
| gzip | 6 | 0.270 | 4,425 | 0.2570 | 7 | yes |
| gzip | 7 | 0.317 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.451 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.464 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.055 | 5,235 | 0.3041 | 8 | yes |
| brotli | 1 | 0.064 | 5,134 | 0.2982 | 12 | yes |
| brotli | 2 | 0.113 | 4,741 | 0.2754 | 21 | yes |
| brotli | 3 | 0.152 | 4,650 | 0.2701 | 9 | yes |
| brotli | 4 | 0.270 | 4,555 | 0.2646 | 8 | yes |
| brotli | 5 | 0.389 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.392 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.441 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.461 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.535 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.676 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.320 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.051 | 4,923 | 0.2859 | 16 | yes |
| zstd | 2 | 0.057 | 4,868 | 0.2827 | 13 | yes |
| zstd | 3 | 0.074 | 4,717 | 0.2740 | 9 | yes |
| zstd | 4 | 0.079 | 4,679 | 0.2718 | 13 | yes |
| zstd | 5 | 0.159 | 4,519 | 0.2625 | 5 | yes |
| zstd | 6 | 0.215 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.257 | 4,437 | 0.2577 | 6 | yes |
| zstd | 8 | 0.275 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.324 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.378 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.588 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.636 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.905 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.431 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.527 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.457 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.642 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.624 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.163 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.164 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.170 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.154 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.061 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.055 | 3,182 | 0.4444 | 20 | yes |
| gzip | 3 | 0.058 | 3,153 | 0.4403 | 16 | yes |
| gzip | 4 | 0.068 | 3,095 | 0.4322 | 23 | yes |
| gzip | 5 | 0.086 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.089 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.093 | 3,042 | 0.4248 | 9 | yes |
| gzip | 8 | 0.083 | 3,042 | 0.4248 | 25 | yes |
| gzip | 9 | 0.080 | 3,042 | 0.4248 | 25 | no |
| brotli | 0 | 0.033 | 3,549 | 0.4956 | 11 | yes |
| brotli | 1 | 0.040 | 3,381 | 0.4721 | 13 | yes |
| brotli | 2 | 0.061 | 3,263 | 0.4557 | 14 | yes |
| brotli | 3 | 0.079 | 3,216 | 0.4491 | 11 | yes |
| brotli | 4 | 0.159 | 3,147 | 0.4395 | 13 | yes |
| brotli | 5 | 0.217 | 2,963 | 0.4138 | 12 | yes |
| brotli | 6 | 0.241 | 2,952 | 0.4122 | 5 | yes |
| brotli | 7 | 0.264 | 2,944 | 0.4111 | 5 | yes |
| brotli | 8 | 0.265 | 2,944 | 0.4111 | 8 | yes |
| brotli | 9 | 0.298 | 2,945 | 0.4113 | 6 | yes |
| brotli | 10 | 3.054 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.646 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.033 | 3,254 | 0.4544 | 25 | no |
| zstd | 2 | 0.034 | 3,200 | 0.4469 | 14 | yes |
| zstd | 3 | 0.042 | 3,176 | 0.4435 | 13 | yes |
| zstd | 4 | 0.064 | 3,102 | 0.4332 | 24 | yes |
| zstd | 5 | 0.073 | 3,079 | 0.4300 | 14 | yes |
| zstd | 6 | 0.090 | 3,060 | 0.4273 | 25 | no |
| zstd | 7 | 0.122 | 3,053 | 0.4263 | 9 | yes |
| zstd | 8 | 0.113 | 3,053 | 0.4263 | 25 | no |
| zstd | 9 | 0.196 | 3,055 | 0.4266 | 6 | yes |
| zstd | 10 | 0.157 | 3,055 | 0.4266 | 21 | yes |
| zstd | 11 | 0.348 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.506 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.660 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.667 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.663 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.277 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.274 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.268 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.291 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.269 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.282 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.273 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,475 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.839 | 67,036 | 0.4076 | 5 | yes |
| gzip | 2 | 1.998 | 65,451 | 0.3979 | 5 | yes |
| gzip | 3 | 2.271 | 64,421 | 0.3917 | 5 | yes |
| gzip | 4 | 2.563 | 62,075 | 0.3774 | 5 | yes |
| gzip | 5 | 3.440 | 60,450 | 0.3675 | 5 | yes |
| gzip | 6 | 4.241 | 60,174 | 0.3659 | 5 | yes |
| gzip | 7 | 4.660 | 60,131 | 0.3656 | 5 | yes |
| gzip | 8 | 4.986 | 60,115 | 0.3655 | 5 | yes |
| gzip | 9 | 5.004 | 60,115 | 0.3655 | 5 | yes |
| brotli | 0 | 0.658 | 71,306 | 0.4335 | 5 | yes |
| brotli | 1 | 0.853 | 68,383 | 0.4158 | 5 | yes |
| brotli | 2 | 1.619 | 63,134 | 0.3839 | 5 | yes |
| brotli | 3 | 1.900 | 62,525 | 0.3801 | 5 | yes |
| brotli | 4 | 2.973 | 61,271 | 0.3725 | 5 | yes |
| brotli | 5 | 4.413 | 58,043 | 0.3529 | 5 | yes |
| brotli | 6 | 4.846 | 57,682 | 0.3507 | 5 | yes |
| brotli | 7 | 5.767 | 57,387 | 0.3489 | 5 | yes |
| brotli | 8 | 6.269 | 57,305 | 0.3484 | 5 | yes |
| brotli | 9 | 7.264 | 57,230 | 0.3480 | 5 | yes |
| brotli | 10 | 97.235 | 54,405 | 0.3308 | 5 | yes |
| brotli | 11 | 239.704 | 53,493 | 0.3252 | 5 | yes |
| zstd | 1 | 0.605 | 66,378 | 0.4036 | 5 | yes |
| zstd | 2 | 0.785 | 63,336 | 0.3851 | 5 | yes |
| zstd | 3 | 1.040 | 62,859 | 0.3822 | 5 | yes |
| zstd | 4 | 1.759 | 60,996 | 0.3709 | 5 | yes |
| zstd | 5 | 1.948 | 60,478 | 0.3677 | 5 | yes |
| zstd | 6 | 2.405 | 59,586 | 0.3623 | 5 | yes |
| zstd | 7 | 2.834 | 58,792 | 0.3575 | 5 | yes |
| zstd | 8 | 3.536 | 58,314 | 0.3545 | 5 | yes |
| zstd | 9 | 4.109 | 58,070 | 0.3531 | 5 | yes |
| zstd | 10 | 4.918 | 57,939 | 0.3523 | 5 | yes |
| zstd | 11 | 8.403 | 57,635 | 0.3504 | 5 | yes |
| zstd | 12 | 8.571 | 57,621 | 0.3503 | 5 | yes |
| zstd | 13 | 15.509 | 56,599 | 0.3441 | 5 | yes |
| zstd | 14 | 17.932 | 56,168 | 0.3415 | 5 | yes |
| zstd | 15 | 18.338 | 56,140 | 0.3413 | 5 | yes |
| zstd | 16 | 24.943 | 55,973 | 0.3403 | 6 | yes |
| zstd | 17 | 24.591 | 55,973 | 0.3403 | 5 | yes |
| zstd | 18 | 42.666 | 55,896 | 0.3398 | 5 | yes |
| zstd | 19 | 42.496 | 55,896 | 0.3398 | 5 | yes |
| zstd | 20 | 42.063 | 55,896 | 0.3398 | 5 | yes |
| zstd | 21 | 41.967 | 55,896 | 0.3398 | 5 | yes |
| zstd | 22 | 42.077 | 55,896 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.770 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.838 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.971 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.063 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.387 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.771 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.096 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.834 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.823 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.272 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.385 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.677 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.804 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.339 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.923 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.072 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.457 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.535 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.034 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 38.808 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 95.551 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.258 | 28,919 | 0.3949 | 5 | yes |
| zstd | 2 | 0.293 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.347 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.437 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.788 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.063 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.364 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.413 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.628 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.916 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.112 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.293 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.372 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.702 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.804 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.748 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.763 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.789 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.490 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.647 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.553 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.596 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.589 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.667 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.795 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.921 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.257 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.930 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.539 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.602 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.600 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.260 | 25,901 | 0.3420 | 7 | yes |
| brotli | 1 | 0.398 | 23,906 | 0.3156 | 25 | no |
| brotli | 2 | 0.644 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.767 | 21,570 | 0.2848 | 13 | yes |
| brotli | 4 | 1.157 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.701 | 20,309 | 0.2682 | 11 | yes |
| brotli | 6 | 1.903 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.254 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.540 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.327 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 28.914 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 86.135 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.273 | 22,639 | 0.2989 | 5 | yes |
| zstd | 2 | 0.283 | 22,433 | 0.2962 | 6 | yes |
| zstd | 3 | 0.338 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.418 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.705 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 0.989 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.230 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.408 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.776 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.462 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.231 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.193 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.984 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.120 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.251 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.574 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.636 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 21.918 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 22.378 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 26.280 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 37.550 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 43.582 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.056 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.123 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.302 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.732 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.179 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.913 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.549 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.745 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.792 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.453 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.606 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.162 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.387 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.028 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.964 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.270 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.653 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.020 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 4.832 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 95.333 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 296.144 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.480 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.537 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.608 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.437 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.821 | 29,744 | 0.1281 | 25 | no |
| zstd | 6 | 1.989 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.205 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.709 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.232 | 28,235 | 0.1216 | 6 | yes |
| zstd | 10 | 4.463 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.041 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.772 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.692 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.541 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.252 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 55.550 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 62.941 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 83.841 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 95.586 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 99.864 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 99.138 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 99.108 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,946,804 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 92.489 | 3,754,873 | 0.2216 | 5 | yes |
| gzip | 2 | 100.637 | 3,606,731 | 0.2128 | 5 | yes |
| gzip | 3 | 123.716 | 3,488,191 | 0.2058 | 5 | yes |
| gzip | 4 | 149.775 | 3,361,083 | 0.1983 | 5 | yes |
| gzip | 5 | 189.854 | 3,140,651 | 0.1853 | 5 | yes |
| gzip | 6 | 279.866 | 3,073,208 | 0.1813 | 5 | yes |
| gzip | 7 | 382.098 | 3,007,264 | 0.1775 | 5 | yes |
| gzip | 8 | 1072.085 | 2,939,923 | 0.1735 | 5 | yes |
| gzip | 9 | 1115.019 | 2,939,101 | 0.1734 | 5 | yes |
| brotli | 0 | 45.636 | 4,158,391 | 0.2454 | 5 | yes |
| brotli | 1 | 62.579 | 3,696,388 | 0.2181 | 5 | yes |
| brotli | 2 | 109.714 | 3,404,652 | 0.2009 | 5 | yes |
| brotli | 3 | 128.495 | 3,347,644 | 0.1975 | 5 | yes |
| brotli | 4 | 176.394 | 3,276,816 | 0.1934 | 5 | yes |
| brotli | 5 | 298.843 | 2,921,643 | 0.1724 | 5 | yes |
| brotli | 6 | 344.348 | 2,890,343 | 0.1706 | 5 | yes |
| brotli | 7 | 504.987 | 2,863,078 | 0.1689 | 5 | yes |
| brotli | 8 | 646.358 | 2,844,800 | 0.1679 | 5 | yes |
| brotli | 9 | 895.111 | 2,834,664 | 0.1673 | 5 | yes |
| brotli | 10 | 9667.360 | 2,428,562 | 0.1433 | 5 | yes |
| brotli | 11 | 26915.355 | 2,309,167 | 0.1363 | 5 | yes |
| zstd | 1 | 43.605 | 3,504,403 | 0.2068 | 5 | yes |
| zstd | 2 | 55.256 | 3,581,907 | 0.2114 | 5 | yes |
| zstd | 3 | 65.603 | 3,507,920 | 0.2070 | 5 | yes |
| zstd | 4 | 68.620 | 3,502,711 | 0.2067 | 5 | yes |
| zstd | 5 | 131.406 | 3,287,468 | 0.1940 | 5 | yes |
| zstd | 6 | 190.887 | 3,067,272 | 0.1810 | 5 | yes |
| zstd | 7 | 216.882 | 3,028,718 | 0.1787 | 5 | yes |
| zstd | 8 | 285.312 | 2,926,446 | 0.1727 | 5 | yes |
| zstd | 9 | 288.096 | 2,936,848 | 0.1733 | 5 | yes |
| zstd | 10 | 385.155 | 2,900,202 | 0.1711 | 7 | yes |
| zstd | 11 | 558.360 | 2,873,028 | 0.1695 | 5 | yes |
| zstd | 12 | 628.103 | 2,872,898 | 0.1695 | 6 | yes |
| zstd | 13 | 765.241 | 2,850,280 | 0.1682 | 5 | yes |
| zstd | 14 | 911.141 | 2,835,958 | 0.1673 | 5 | yes |
| zstd | 15 | 1177.782 | 2,832,325 | 0.1671 | 5 | yes |
| zstd | 16 | 2447.971 | 2,645,548 | 0.1561 | 5 | yes |
| zstd | 17 | 3151.777 | 2,553,740 | 0.1507 | 5 | yes |
| zstd | 18 | 5771.790 | 2,535,042 | 0.1496 | 5 | yes |
| zstd | 19 | 6014.444 | 2,528,063 | 0.1492 | 5 | yes |
| zstd | 20 | 6170.179 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 21 | 6182.673 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 22 | 6359.232 | 2,521,575 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.219 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.201 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.357 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.336 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.410 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.675 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.289 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.207 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.012 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.969 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.313 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.916 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.058 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.672 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.893 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 30.640 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 43.642 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 51.006 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 65.715 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 902.776 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1932.818 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.034 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.887 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.847 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.378 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.146 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.005 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.056 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.442 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.532 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.035 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 25.070 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 24.839 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 45.390 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 46.491 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 46.720 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 85.943 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 107.847 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 144.043 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 160.544 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 162.072 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 161.438 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 162.514 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.141 | 5,506 | 0.2826 | 5 | yes |
| gzip | 2 | 0.145 | 5,424 | 0.2784 | 11 | yes |
| gzip | 3 | 0.152 | 5,356 | 0.2749 | 17 | yes |
| gzip | 4 | 0.210 | 5,145 | 0.2641 | 5 | yes |
| gzip | 5 | 0.275 | 4,896 | 0.2513 | 6 | yes |
| gzip | 6 | 0.370 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.480 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.646 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.641 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.060 | 6,028 | 0.3094 | 9 | yes |
| brotli | 1 | 0.072 | 5,737 | 0.2945 | 16 | yes |
| brotli | 2 | 0.129 | 4,944 | 0.2538 | 18 | yes |
| brotli | 3 | 0.187 | 4,930 | 0.2531 | 5 | yes |
| brotli | 4 | 0.297 | 4,898 | 0.2514 | 5 | yes |
| brotli | 5 | 0.451 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.476 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.564 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.595 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 2.324 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.064 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.318 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.070 | 5,379 | 0.2761 | 5 | yes |
| zstd | 2 | 0.062 | 5,176 | 0.2657 | 10 | yes |
| zstd | 3 | 0.080 | 5,169 | 0.2653 | 17 | yes |
| zstd | 4 | 0.083 | 5,154 | 0.2646 | 16 | yes |
| zstd | 5 | 0.175 | 5,074 | 0.2605 | 10 | yes |
| zstd | 6 | 0.241 | 4,797 | 0.2463 | 5 | yes |
| zstd | 7 | 0.288 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.327 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.400 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.525 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.589 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.629 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.973 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.785 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.898 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.843 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.848 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.841 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.552 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.584 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.591 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.592 | 4,348 | 0.2232 | 5 | yes |
