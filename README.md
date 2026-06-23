# Node Compression Benchmark

Last updated: 2026-06-23T23:14:48.841Z

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
| gzip | 1 | 0.949 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.970 | 30,134 | 0.3827 | 7 | yes |
| gzip | 3 | 1.061 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.183 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.548 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.778 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 1.927 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.176 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.158 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.338 | 33,111 | 0.4205 | 5 | yes |
| brotli | 1 | 0.599 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.753 | 29,394 | 0.3733 | 9 | yes |
| brotli | 3 | 0.862 | 29,072 | 0.3692 | 7 | yes |
| brotli | 4 | 1.415 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 1.971 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.127 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.512 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.527 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 7.551 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.995 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 98.183 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.258 | 31,062 | 0.3944 | 20 | yes |
| zstd | 2 | 0.293 | 30,069 | 0.3818 | 8 | yes |
| zstd | 3 | 0.393 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.467 | 29,108 | 0.3696 | 21 | yes |
| zstd | 5 | 0.847 | 28,349 | 0.3600 | 23 | yes |
| zstd | 6 | 1.118 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.384 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.539 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.698 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.892 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.410 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.678 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.334 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.318 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.491 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 9.802 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.688 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 9.803 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.036 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.076 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.101 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.193 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 85.000 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 89.308 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 92.499 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.795 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 119.531 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.969 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 141.543 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 157.383 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 169.876 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 18.530 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 24.115 | 3,325,102 | 0.6076 | 8 | yes |
| brotli | 2 | 44.768 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 56.682 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 94.851 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 130.068 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 149.535 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 519.109 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 635.664 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 896.216 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6652.597 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12822.335 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.720 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 22.496 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 34.011 | 3,139,155 | 0.5736 | 6 | yes |
| zstd | 4 | 45.701 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 66.427 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.783 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 89.270 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 101.296 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 111.712 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 152.855 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 224.210 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 271.998 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 528.472 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 613.807 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 722.623 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 904.000 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 1058.659 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1405.166 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1465.343 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1440.934 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1429.609 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1422.603 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.193 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.200 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.222 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.819 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.783 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.796 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.809 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.789 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.829 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.332 | 613,595 | 0.9981 | 5 | yes |
| brotli | 1 | 0.333 | 614,785 | 1.0000 | 10 | yes |
| brotli | 2 | 0.666 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.802 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.951 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.817 | 614,785 | 1.0000 | 24 | yes |
| brotli | 6 | 1.819 | 614,785 | 1.0000 | 20 | yes |
| brotli | 7 | 2.172 | 614,785 | 1.0000 | 18 | yes |
| brotli | 8 | 2.454 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 8.424 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 147.781 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 290.142 | 614,785 | 1.0000 | 6 | yes |
| zstd | 1 | 0.402 | 614,805 | 1.0000 | 12 | yes |
| zstd | 2 | 0.418 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.465 | 614,804 | 1.0000 | 25 | no |
| zstd | 4 | 0.505 | 614,804 | 1.0000 | 22 | yes |
| zstd | 5 | 0.626 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.639 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.748 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.739 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.987 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 1.011 | 614,804 | 1.0000 | 10 | yes |
| zstd | 11 | 1.073 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 1.067 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 4.734 | 612,619 | 0.9965 | 9 | yes |
| zstd | 14 | 4.450 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 3.776 | 612,619 | 0.9965 | 25 | no |
| zstd | 16 | 43.332 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 44.156 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 49.867 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 56.408 | 612,518 | 0.9963 | 9 | yes |
| zstd | 20 | 56.774 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 61.239 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 58.360 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 489,361 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.975 | 144,979 | 0.2963 | 5 | yes |
| gzip | 2 | 4.255 | 138,205 | 0.2824 | 5 | yes |
| gzip | 3 | 5.234 | 133,607 | 0.2730 | 5 | yes |
| gzip | 4 | 5.516 | 125,391 | 0.2562 | 5 | yes |
| gzip | 5 | 7.793 | 120,759 | 0.2468 | 5 | yes |
| gzip | 6 | 10.989 | 119,033 | 0.2432 | 5 | yes |
| gzip | 7 | 13.725 | 118,577 | 0.2423 | 5 | yes |
| gzip | 8 | 27.946 | 118,303 | 0.2417 | 5 | yes |
| gzip | 9 | 43.552 | 118,236 | 0.2416 | 5 | yes |
| brotli | 0 | 1.440 | 149,431 | 0.3054 | 5 | yes |
| brotli | 1 | 1.868 | 137,144 | 0.2803 | 5 | yes |
| brotli | 2 | 3.714 | 128,908 | 0.2634 | 5 | yes |
| brotli | 3 | 4.280 | 126,352 | 0.2582 | 5 | yes |
| brotli | 4 | 6.091 | 122,323 | 0.2500 | 5 | yes |
| brotli | 5 | 10.553 | 112,454 | 0.2298 | 5 | yes |
| brotli | 6 | 12.220 | 109,821 | 0.2244 | 5 | yes |
| brotli | 7 | 15.034 | 107,851 | 0.2204 | 5 | yes |
| brotli | 8 | 17.275 | 106,814 | 0.2183 | 5 | yes |
| brotli | 9 | 26.499 | 105,931 | 0.2165 | 5 | yes |
| brotli | 10 | 287.593 | 98,459 | 0.2012 | 5 | yes |
| brotli | 11 | 727.393 | 96,232 | 0.1966 | 5 | yes |
| zstd | 1 | 1.593 | 137,809 | 0.2816 | 5 | yes |
| zstd | 2 | 1.644 | 133,667 | 0.2731 | 5 | yes |
| zstd | 3 | 2.092 | 125,988 | 0.2575 | 5 | yes |
| zstd | 4 | 2.294 | 125,796 | 0.2571 | 5 | yes |
| zstd | 5 | 4.222 | 117,117 | 0.2393 | 5 | yes |
| zstd | 6 | 5.776 | 113,212 | 0.2313 | 5 | yes |
| zstd | 7 | 6.687 | 111,654 | 0.2282 | 5 | yes |
| zstd | 8 | 8.468 | 110,891 | 0.2266 | 5 | yes |
| zstd | 9 | 8.388 | 110,891 | 0.2266 | 5 | yes |
| zstd | 10 | 10.062 | 109,848 | 0.2245 | 5 | yes |
| zstd | 11 | 12.711 | 109,247 | 0.2232 | 5 | yes |
| zstd | 12 | 12.860 | 109,247 | 0.2232 | 5 | yes |
| zstd | 13 | 31.382 | 108,066 | 0.2208 | 5 | yes |
| zstd | 14 | 38.786 | 107,480 | 0.2196 | 5 | yes |
| zstd | 15 | 43.400 | 107,398 | 0.2195 | 5 | yes |
| zstd | 16 | 73.294 | 101,829 | 0.2081 | 5 | yes |
| zstd | 17 | 81.625 | 100,934 | 0.2063 | 5 | yes |
| zstd | 18 | 112.694 | 100,134 | 0.2046 | 5 | yes |
| zstd | 19 | 145.127 | 100,035 | 0.2044 | 5 | yes |
| zstd | 20 | 143.790 | 100,035 | 0.2044 | 5 | yes |
| zstd | 21 | 145.547 | 100,032 | 0.2044 | 5 | yes |
| zstd | 22 | 144.894 | 100,032 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.147 | 4,987 | 0.2897 | 5 | yes |
| gzip | 2 | 0.127 | 4,874 | 0.2831 | 17 | yes |
| gzip | 3 | 0.140 | 4,806 | 0.2791 | 14 | yes |
| gzip | 4 | 0.178 | 4,530 | 0.2631 | 5 | yes |
| gzip | 5 | 0.231 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.288 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.320 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.436 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.454 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.052 | 5,235 | 0.3041 | 8 | yes |
| brotli | 1 | 0.072 | 5,134 | 0.2982 | 9 | yes |
| brotli | 2 | 0.118 | 4,741 | 0.2754 | 15 | yes |
| brotli | 3 | 0.166 | 4,650 | 0.2701 | 5 | yes |
| brotli | 4 | 0.264 | 4,555 | 0.2646 | 8 | yes |
| brotli | 5 | 0.381 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.403 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.429 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.454 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 4.746 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.965 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.286 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.052 | 4,923 | 0.2859 | 8 | yes |
| zstd | 2 | 0.053 | 4,868 | 0.2827 | 13 | yes |
| zstd | 3 | 0.071 | 4,717 | 0.2740 | 10 | yes |
| zstd | 4 | 0.066 | 4,679 | 0.2718 | 19 | yes |
| zstd | 5 | 0.160 | 4,519 | 0.2625 | 5 | yes |
| zstd | 6 | 0.202 | 4,437 | 0.2577 | 6 | yes |
| zstd | 7 | 0.237 | 4,437 | 0.2577 | 8 | yes |
| zstd | 8 | 0.273 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.296 | 4,420 | 0.2567 | 6 | yes |
| zstd | 10 | 0.349 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.652 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.685 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.927 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.389 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.466 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.151 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.272 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.268 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.455 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.433 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.439 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.452 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.055 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.056 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.058 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.097 | 3,095 | 0.4322 | 5 | yes |
| gzip | 5 | 0.100 | 3,051 | 0.4261 | 15 | yes |
| gzip | 6 | 0.102 | 3,044 | 0.4251 | 21 | yes |
| gzip | 7 | 0.167 | 3,042 | 0.4248 | 25 | no |
| gzip | 8 | 0.119 | 3,042 | 0.4248 | 25 | no |
| gzip | 9 | 0.107 | 3,042 | 0.4248 | 16 | yes |
| brotli | 0 | 0.031 | 3,549 | 0.4956 | 5 | yes |
| brotli | 1 | 0.041 | 3,381 | 0.4721 | 11 | yes |
| brotli | 2 | 0.057 | 3,263 | 0.4557 | 18 | yes |
| brotli | 3 | 0.076 | 3,216 | 0.4491 | 25 | no |
| brotli | 4 | 0.148 | 3,147 | 0.4395 | 25 | no |
| brotli | 5 | 0.219 | 2,963 | 0.4138 | 5 | yes |
| brotli | 6 | 0.233 | 2,952 | 0.4122 | 7 | yes |
| brotli | 7 | 0.248 | 2,944 | 0.4111 | 9 | yes |
| brotli | 8 | 0.263 | 2,944 | 0.4111 | 6 | yes |
| brotli | 9 | 4.763 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.247 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.095 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.033 | 3,254 | 0.4544 | 25 | no |
| zstd | 2 | 0.034 | 3,200 | 0.4469 | 21 | yes |
| zstd | 3 | 0.038 | 3,176 | 0.4435 | 9 | yes |
| zstd | 4 | 0.071 | 3,102 | 0.4332 | 5 | yes |
| zstd | 5 | 0.092 | 3,079 | 0.4300 | 5 | yes |
| zstd | 6 | 0.115 | 3,060 | 0.4273 | 5 | yes |
| zstd | 7 | 0.106 | 3,053 | 0.4263 | 7 | yes |
| zstd | 8 | 0.103 | 3,053 | 0.4263 | 10 | yes |
| zstd | 9 | 0.198 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.195 | 3,055 | 0.4266 | 9 | yes |
| zstd | 11 | 0.341 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.446 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.592 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.598 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.594 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.162 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.162 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.162 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.156 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.165 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.157 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.158 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,475 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.930 | 67,036 | 0.4076 | 5 | yes |
| gzip | 2 | 2.071 | 65,451 | 0.3979 | 5 | yes |
| gzip | 3 | 2.290 | 64,421 | 0.3917 | 5 | yes |
| gzip | 4 | 2.566 | 62,075 | 0.3774 | 5 | yes |
| gzip | 5 | 3.454 | 60,450 | 0.3675 | 5 | yes |
| gzip | 6 | 4.169 | 60,174 | 0.3659 | 5 | yes |
| gzip | 7 | 4.519 | 60,131 | 0.3656 | 5 | yes |
| gzip | 8 | 4.828 | 60,115 | 0.3655 | 5 | yes |
| gzip | 9 | 4.839 | 60,115 | 0.3655 | 5 | yes |
| brotli | 0 | 0.638 | 71,306 | 0.4335 | 5 | yes |
| brotli | 1 | 0.790 | 68,383 | 0.4158 | 5 | yes |
| brotli | 2 | 1.610 | 63,134 | 0.3839 | 5 | yes |
| brotli | 3 | 1.874 | 62,525 | 0.3801 | 5 | yes |
| brotli | 4 | 2.851 | 61,271 | 0.3725 | 5 | yes |
| brotli | 5 | 4.454 | 58,043 | 0.3529 | 5 | yes |
| brotli | 6 | 4.983 | 57,682 | 0.3507 | 5 | yes |
| brotli | 7 | 5.963 | 57,387 | 0.3489 | 5 | yes |
| brotli | 8 | 6.467 | 57,305 | 0.3484 | 5 | yes |
| brotli | 9 | 12.412 | 57,230 | 0.3480 | 5 | yes |
| brotli | 10 | 96.972 | 54,405 | 0.3308 | 5 | yes |
| brotli | 11 | 244.031 | 53,493 | 0.3252 | 5 | yes |
| zstd | 1 | 0.595 | 66,378 | 0.4036 | 5 | yes |
| zstd | 2 | 0.757 | 63,336 | 0.3851 | 5 | yes |
| zstd | 3 | 0.896 | 62,859 | 0.3822 | 5 | yes |
| zstd | 4 | 1.648 | 60,996 | 0.3709 | 5 | yes |
| zstd | 5 | 1.891 | 60,478 | 0.3677 | 5 | yes |
| zstd | 6 | 2.352 | 59,586 | 0.3623 | 5 | yes |
| zstd | 7 | 2.913 | 58,792 | 0.3575 | 5 | yes |
| zstd | 8 | 3.569 | 58,314 | 0.3545 | 5 | yes |
| zstd | 9 | 4.095 | 58,070 | 0.3531 | 5 | yes |
| zstd | 10 | 4.866 | 57,939 | 0.3523 | 5 | yes |
| zstd | 11 | 9.513 | 57,635 | 0.3504 | 5 | yes |
| zstd | 12 | 9.616 | 57,621 | 0.3503 | 5 | yes |
| zstd | 13 | 16.085 | 56,599 | 0.3441 | 5 | yes |
| zstd | 14 | 19.875 | 56,168 | 0.3415 | 5 | yes |
| zstd | 15 | 19.812 | 56,140 | 0.3413 | 5 | yes |
| zstd | 16 | 25.380 | 55,973 | 0.3403 | 5 | yes |
| zstd | 17 | 25.053 | 55,973 | 0.3403 | 5 | yes |
| zstd | 18 | 42.963 | 55,896 | 0.3398 | 5 | yes |
| zstd | 19 | 43.188 | 55,896 | 0.3398 | 5 | yes |
| zstd | 20 | 42.859 | 55,896 | 0.3398 | 5 | yes |
| zstd | 21 | 43.977 | 55,896 | 0.3398 | 5 | yes |
| zstd | 22 | 44.119 | 55,896 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.787 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.839 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.948 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.059 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.388 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.710 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.979 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.563 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.602 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.244 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.353 | 29,754 | 0.4063 | 13 | yes |
| brotli | 2 | 0.655 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.774 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.285 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.917 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.076 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.616 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.824 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 7.991 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 40.635 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 98.350 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.223 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.256 | 28,008 | 0.3824 | 10 | yes |
| zstd | 3 | 0.323 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.425 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.763 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.031 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.275 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.384 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.566 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.826 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.348 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.559 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.260 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.436 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.515 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.948 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.899 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.015 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.983 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 19.538 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 19.639 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 19.392 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.605 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.698 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.790 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.942 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.243 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.841 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.495 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 10.789 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 10.900 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.232 | 25,901 | 0.3420 | 6 | yes |
| brotli | 1 | 0.325 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.634 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.743 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.120 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.673 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.896 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.368 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.672 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 8.230 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 30.662 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 89.909 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.262 | 22,639 | 0.2989 | 5 | yes |
| zstd | 2 | 0.269 | 22,433 | 0.2962 | 5 | yes |
| zstd | 3 | 0.296 | 22,208 | 0.2932 | 6 | yes |
| zstd | 4 | 0.370 | 22,181 | 0.2929 | 6 | yes |
| zstd | 5 | 0.659 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 0.952 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.151 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.349 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.701 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.233 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.444 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.499 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.898 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 6.813 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.046 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.840 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.271 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.405 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 20.407 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 24.545 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 37.518 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 44.648 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.119 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.146 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.294 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.595 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.027 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.713 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.289 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.348 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.383 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.423 | 43,268 | 0.1864 | 7 | yes |
| brotli | 1 | 0.567 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.154 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.385 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.028 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.998 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.370 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.758 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.291 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 9.970 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 98.713 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 301.096 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.446 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.520 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.529 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.338 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.568 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.918 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.142 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.643 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.173 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.882 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.823 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 11.115 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 19.096 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.744 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.874 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 49.143 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.971 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 73.922 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 81.621 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 84.678 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 84.548 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 84.511 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,946,804 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 97.361 | 3,754,873 | 0.2216 | 5 | yes |
| gzip | 2 | 104.814 | 3,606,731 | 0.2128 | 5 | yes |
| gzip | 3 | 123.848 | 3,488,191 | 0.2058 | 5 | yes |
| gzip | 4 | 141.248 | 3,361,083 | 0.1983 | 5 | yes |
| gzip | 5 | 182.294 | 3,140,651 | 0.1853 | 5 | yes |
| gzip | 6 | 263.115 | 3,073,208 | 0.1813 | 5 | yes |
| gzip | 7 | 356.854 | 3,007,264 | 0.1775 | 5 | yes |
| gzip | 8 | 1037.297 | 2,939,923 | 0.1735 | 5 | yes |
| gzip | 9 | 1078.959 | 2,939,101 | 0.1734 | 5 | yes |
| brotli | 0 | 43.612 | 4,158,391 | 0.2454 | 5 | yes |
| brotli | 1 | 60.047 | 3,696,388 | 0.2181 | 5 | yes |
| brotli | 2 | 109.148 | 3,404,652 | 0.2009 | 5 | yes |
| brotli | 3 | 129.531 | 3,347,644 | 0.1975 | 5 | yes |
| brotli | 4 | 244.900 | 3,276,816 | 0.1934 | 7 | yes |
| brotli | 5 | 366.563 | 2,921,643 | 0.1724 | 5 | yes |
| brotli | 6 | 429.255 | 2,890,343 | 0.1706 | 5 | yes |
| brotli | 7 | 646.307 | 2,863,078 | 0.1689 | 5 | yes |
| brotli | 8 | 796.588 | 2,844,800 | 0.1679 | 5 | yes |
| brotli | 9 | 1024.628 | 2,834,664 | 0.1673 | 5 | yes |
| brotli | 10 | 11024.624 | 2,428,562 | 0.1433 | 5 | yes |
| brotli | 11 | 28214.548 | 2,309,167 | 0.1363 | 5 | yes |
| zstd | 1 | 42.634 | 3,504,403 | 0.2068 | 5 | yes |
| zstd | 2 | 52.307 | 3,581,907 | 0.2114 | 5 | yes |
| zstd | 3 | 67.392 | 3,507,920 | 0.2070 | 5 | yes |
| zstd | 4 | 76.678 | 3,502,711 | 0.2067 | 5 | yes |
| zstd | 5 | 127.969 | 3,287,468 | 0.1940 | 5 | yes |
| zstd | 6 | 186.398 | 3,067,272 | 0.1810 | 5 | yes |
| zstd | 7 | 220.173 | 3,028,718 | 0.1787 | 5 | yes |
| zstd | 8 | 289.447 | 2,926,446 | 0.1727 | 5 | yes |
| zstd | 9 | 318.934 | 2,936,848 | 0.1733 | 5 | yes |
| zstd | 10 | 408.949 | 2,900,202 | 0.1711 | 5 | yes |
| zstd | 11 | 605.780 | 2,873,028 | 0.1695 | 5 | yes |
| zstd | 12 | 649.501 | 2,872,898 | 0.1695 | 5 | yes |
| zstd | 13 | 1010.006 | 2,850,280 | 0.1682 | 5 | yes |
| zstd | 14 | 1150.047 | 2,835,958 | 0.1673 | 5 | yes |
| zstd | 15 | 1495.063 | 2,832,325 | 0.1671 | 5 | yes |
| zstd | 16 | 3022.803 | 2,645,548 | 0.1561 | 5 | yes |
| zstd | 17 | 3991.877 | 2,553,740 | 0.1507 | 5 | yes |
| zstd | 18 | 5976.882 | 2,535,042 | 0.1496 | 5 | yes |
| zstd | 19 | 6501.263 | 2,528,063 | 0.1492 | 5 | yes |
| zstd | 20 | 6849.320 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 21 | 6888.580 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 22 | 7105.778 | 2,521,575 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.485 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.492 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.414 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.191 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.549 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.394 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 28.914 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 31.595 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 31.610 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.707 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 4.599 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.560 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.473 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 16.875 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.497 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.937 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 46.094 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 53.025 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 64.506 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 921.961 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1920.464 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.041 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.750 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.142 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.464 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 9.662 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.018 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.585 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 17.933 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.584 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.291 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 27.379 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 28.144 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 68.985 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 70.727 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 67.432 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 117.549 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 136.251 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 170.773 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 198.737 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 198.751 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 199.744 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 201.671 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.118 | 5,506 | 0.2826 | 14 | yes |
| gzip | 2 | 0.146 | 5,424 | 0.2784 | 9 | yes |
| gzip | 3 | 0.164 | 5,356 | 0.2749 | 10 | yes |
| gzip | 4 | 0.206 | 5,145 | 0.2641 | 5 | yes |
| gzip | 5 | 0.275 | 4,896 | 0.2513 | 5 | yes |
| gzip | 6 | 0.356 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.488 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.642 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.645 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.055 | 6,028 | 0.3094 | 12 | yes |
| brotli | 1 | 0.081 | 5,737 | 0.2945 | 9 | yes |
| brotli | 2 | 0.152 | 4,944 | 0.2538 | 5 | yes |
| brotli | 3 | 0.179 | 4,930 | 0.2531 | 11 | yes |
| brotli | 4 | 0.278 | 4,898 | 0.2514 | 10 | yes |
| brotli | 5 | 0.450 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.505 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.563 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.604 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.718 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.290 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.662 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.054 | 5,379 | 0.2761 | 13 | yes |
| zstd | 2 | 0.057 | 5,176 | 0.2657 | 11 | yes |
| zstd | 3 | 0.084 | 5,169 | 0.2653 | 5 | yes |
| zstd | 4 | 0.071 | 5,154 | 0.2646 | 9 | yes |
| zstd | 5 | 0.169 | 5,074 | 0.2605 | 5 | yes |
| zstd | 6 | 0.210 | 4,797 | 0.2463 | 11 | yes |
| zstd | 7 | 0.274 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.311 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.366 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.445 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.630 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.687 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.002 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.721 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.838 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.561 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.561 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.564 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.006 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.067 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.074 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.062 | 4,348 | 0.2232 | 5 | yes |
