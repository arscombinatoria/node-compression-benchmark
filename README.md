# Node Compression Benchmark

Last updated: 2026-07-17T09:05:23.389Z

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
| gzip | 1 | 1.045 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.332 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.457 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.668 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 2.107 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.409 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.027 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.353 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.352 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.383 | 33,111 | 0.4205 | 7 | yes |
| brotli | 1 | 0.764 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.806 | 29,394 | 0.3733 | 7 | yes |
| brotli | 3 | 0.953 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.498 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.177 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.266 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.727 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.665 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.561 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.448 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.309 | 24,992 | 0.3174 | 6 | yes |
| zstd | 1 | 0.319 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.331 | 30,069 | 0.3818 | 12 | yes |
| zstd | 3 | 0.398 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.496 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.909 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.200 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.482 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.608 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.778 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.981 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.402 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.476 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.513 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.847 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.037 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.113 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.073 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.111 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.584 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.719 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.682 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.632 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.994 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 98.426 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 100.161 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.352 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 117.938 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 131.919 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 143.379 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 157.833 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 169.646 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.641 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.170 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.339 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 62.339 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 89.705 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 127.732 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 145.346 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 425.869 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 544.152 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 712.776 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6174.105 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12605.810 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.899 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.212 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 38.780 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 42.930 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.639 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.037 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 84.085 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 96.823 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 106.063 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 129.533 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 188.590 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 194.985 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 476.486 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 509.035 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 582.446 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 784.713 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 1016.769 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1317.848 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1442.957 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1429.426 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1428.630 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1454.032 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.427 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.436 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.518 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.634 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.845 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.827 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.872 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.863 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.705 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.289 | 613,595 | 0.9981 | 8 | yes |
| brotli | 1 | 0.305 | 614,785 | 1.0000 | 5 | yes |
| brotli | 2 | 0.626 | 614,791 | 1.0000 | 20 | yes |
| brotli | 3 | 0.774 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.135 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.457 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.519 | 614,785 | 1.0000 | 5 | yes |
| brotli | 7 | 2.114 | 614,785 | 1.0000 | 14 | yes |
| brotli | 8 | 2.508 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 4.525 | 614,785 | 1.0000 | 8 | yes |
| brotli | 10 | 112.570 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 248.586 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.298 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.307 | 614,804 | 1.0000 | 15 | yes |
| zstd | 3 | 0.385 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.344 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.469 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.521 | 614,804 | 1.0000 | 16 | yes |
| zstd | 7 | 0.579 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.581 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.717 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.742 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.749 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.761 | 614,804 | 1.0000 | 16 | yes |
| zstd | 13 | 2.298 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 2.235 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 2.296 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 16.208 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 16.519 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 22.844 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 28.074 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 29.789 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 29.323 | 612,518 | 0.9963 | 7 | yes |
| zstd | 22 | 30.648 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,236 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.949 | 145,182 | 0.2961 | 5 | yes |
| gzip | 2 | 4.269 | 138,423 | 0.2824 | 5 | yes |
| gzip | 3 | 5.520 | 133,882 | 0.2731 | 5 | yes |
| gzip | 4 | 5.750 | 125,608 | 0.2562 | 5 | yes |
| gzip | 5 | 8.066 | 120,963 | 0.2467 | 5 | yes |
| gzip | 6 | 11.636 | 119,255 | 0.2433 | 5 | yes |
| gzip | 7 | 14.711 | 118,789 | 0.2423 | 5 | yes |
| gzip | 8 | 27.479 | 118,515 | 0.2418 | 5 | yes |
| gzip | 9 | 42.826 | 118,446 | 0.2416 | 5 | yes |
| brotli | 0 | 1.562 | 149,404 | 0.3048 | 5 | yes |
| brotli | 1 | 2.181 | 137,364 | 0.2802 | 5 | yes |
| brotli | 2 | 3.927 | 129,155 | 0.2635 | 5 | yes |
| brotli | 3 | 4.454 | 126,568 | 0.2582 | 5 | yes |
| brotli | 4 | 6.633 | 122,453 | 0.2498 | 5 | yes |
| brotli | 5 | 10.350 | 112,692 | 0.2299 | 5 | yes |
| brotli | 6 | 11.745 | 110,011 | 0.2244 | 5 | yes |
| brotli | 7 | 14.194 | 108,041 | 0.2204 | 19 | yes |
| brotli | 8 | 17.090 | 107,001 | 0.2183 | 5 | yes |
| brotli | 9 | 23.398 | 106,112 | 0.2165 | 5 | yes |
| brotli | 10 | 275.233 | 98,636 | 0.2012 | 5 | yes |
| brotli | 11 | 728.570 | 96,403 | 0.1966 | 5 | yes |
| zstd | 1 | 1.662 | 138,123 | 0.2817 | 5 | yes |
| zstd | 2 | 1.904 | 133,890 | 0.2731 | 5 | yes |
| zstd | 3 | 2.358 | 126,208 | 0.2574 | 5 | yes |
| zstd | 4 | 2.408 | 126,023 | 0.2571 | 5 | yes |
| zstd | 5 | 4.414 | 117,405 | 0.2395 | 5 | yes |
| zstd | 6 | 6.107 | 113,440 | 0.2314 | 5 | yes |
| zstd | 7 | 6.951 | 111,894 | 0.2282 | 5 | yes |
| zstd | 8 | 8.652 | 111,138 | 0.2267 | 5 | yes |
| zstd | 9 | 8.725 | 111,138 | 0.2267 | 5 | yes |
| zstd | 10 | 10.842 | 110,160 | 0.2247 | 5 | yes |
| zstd | 11 | 13.116 | 109,468 | 0.2233 | 5 | yes |
| zstd | 12 | 13.106 | 109,468 | 0.2233 | 5 | yes |
| zstd | 13 | 28.260 | 108,280 | 0.2209 | 5 | yes |
| zstd | 14 | 35.481 | 107,640 | 0.2196 | 5 | yes |
| zstd | 15 | 37.564 | 107,626 | 0.2195 | 5 | yes |
| zstd | 16 | 70.061 | 102,010 | 0.2081 | 5 | yes |
| zstd | 17 | 75.772 | 101,107 | 0.2062 | 5 | yes |
| zstd | 18 | 117.336 | 100,287 | 0.2046 | 5 | yes |
| zstd | 19 | 154.516 | 100,211 | 0.2044 | 5 | yes |
| zstd | 20 | 151.045 | 100,211 | 0.2044 | 5 | yes |
| zstd | 21 | 151.823 | 100,213 | 0.2044 | 5 | yes |
| zstd | 22 | 152.763 | 100,213 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.119 | 4,987 | 0.2897 | 17 | yes |
| gzip | 2 | 0.109 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.149 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.174 | 4,530 | 0.2631 | 17 | yes |
| gzip | 5 | 0.241 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.282 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.315 | 4,418 | 0.2566 | 6 | yes |
| gzip | 8 | 0.460 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.461 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.057 | 5,235 | 0.3041 | 13 | yes |
| brotli | 1 | 0.070 | 5,134 | 0.2982 | 24 | yes |
| brotli | 2 | 0.130 | 4,741 | 0.2754 | 14 | yes |
| brotli | 3 | 0.146 | 4,650 | 0.2701 | 18 | yes |
| brotli | 4 | 0.278 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.382 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.408 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.437 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.458 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 2.369 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.762 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.689 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.054 | 4,923 | 0.2859 | 11 | yes |
| zstd | 2 | 0.061 | 4,868 | 0.2827 | 19 | yes |
| zstd | 3 | 0.075 | 4,717 | 0.2740 | 14 | yes |
| zstd | 4 | 0.076 | 4,679 | 0.2718 | 9 | yes |
| zstd | 5 | 0.172 | 4,519 | 0.2625 | 6 | yes |
| zstd | 6 | 0.229 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.276 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.299 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.333 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.374 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.648 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.641 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.914 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.455 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.564 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.524 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.679 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.676 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.251 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.249 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.291 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.272 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.074 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.066 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.075 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.077 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.114 | 3,051 | 0.4261 | 6 | yes |
| gzip | 6 | 0.083 | 3,044 | 0.4251 | 25 | yes |
| gzip | 7 | 0.091 | 3,042 | 0.4248 | 18 | yes |
| gzip | 8 | 0.091 | 3,042 | 0.4248 | 11 | yes |
| gzip | 9 | 0.098 | 3,042 | 0.4248 | 25 | no |
| brotli | 0 | 0.033 | 3,549 | 0.4956 | 9 | yes |
| brotli | 1 | 0.042 | 3,381 | 0.4721 | 10 | yes |
| brotli | 2 | 0.063 | 3,263 | 0.4557 | 24 | yes |
| brotli | 3 | 0.085 | 3,216 | 0.4491 | 25 | no |
| brotli | 4 | 0.174 | 3,147 | 0.4395 | 25 | no |
| brotli | 5 | 0.231 | 2,963 | 0.4138 | 7 | yes |
| brotli | 6 | 0.238 | 2,952 | 0.4122 | 6 | yes |
| brotli | 7 | 0.256 | 2,944 | 0.4111 | 5 | yes |
| brotli | 8 | 0.250 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 1.980 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.154 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.779 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.037 | 3,254 | 0.4544 | 21 | yes |
| zstd | 2 | 0.040 | 3,200 | 0.4469 | 25 | no |
| zstd | 3 | 0.047 | 3,176 | 0.4435 | 17 | yes |
| zstd | 4 | 0.065 | 3,102 | 0.4332 | 17 | yes |
| zstd | 5 | 0.076 | 3,079 | 0.4300 | 15 | yes |
| zstd | 6 | 0.103 | 3,060 | 0.4273 | 15 | yes |
| zstd | 7 | 0.147 | 3,053 | 0.4263 | 5 | yes |
| zstd | 8 | 0.135 | 3,053 | 0.4263 | 5 | yes |
| zstd | 9 | 0.184 | 3,055 | 0.4266 | 10 | yes |
| zstd | 10 | 0.157 | 3,055 | 0.4266 | 15 | yes |
| zstd | 11 | 0.351 | 3,044 | 0.4251 | 9 | yes |
| zstd | 12 | 0.492 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.668 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.670 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.675 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.283 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.291 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.280 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.280 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.296 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.316 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.299 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 165,599 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.983 | 67,507 | 0.4077 | 5 | yes |
| gzip | 2 | 2.103 | 65,886 | 0.3979 | 5 | yes |
| gzip | 3 | 2.371 | 64,874 | 0.3918 | 5 | yes |
| gzip | 4 | 2.567 | 62,487 | 0.3773 | 5 | yes |
| gzip | 5 | 3.445 | 60,848 | 0.3674 | 5 | yes |
| gzip | 6 | 4.261 | 60,570 | 0.3658 | 5 | yes |
| gzip | 7 | 4.628 | 60,527 | 0.3655 | 5 | yes |
| gzip | 8 | 4.988 | 60,509 | 0.3654 | 5 | yes |
| gzip | 9 | 5.039 | 60,509 | 0.3654 | 5 | yes |
| brotli | 0 | 0.724 | 71,790 | 0.4335 | 5 | yes |
| brotli | 1 | 0.906 | 68,843 | 0.4157 | 5 | yes |
| brotli | 2 | 1.659 | 63,505 | 0.3835 | 5 | yes |
| brotli | 3 | 1.936 | 62,945 | 0.3801 | 5 | yes |
| brotli | 4 | 2.978 | 61,772 | 0.3730 | 5 | yes |
| brotli | 5 | 4.460 | 58,412 | 0.3527 | 5 | yes |
| brotli | 6 | 4.989 | 58,008 | 0.3503 | 5 | yes |
| brotli | 7 | 5.759 | 57,755 | 0.3488 | 5 | yes |
| brotli | 8 | 6.378 | 57,667 | 0.3482 | 5 | yes |
| brotli | 9 | 9.253 | 57,589 | 0.3478 | 5 | yes |
| brotli | 10 | 96.494 | 54,874 | 0.3314 | 5 | yes |
| brotli | 11 | 242.680 | 53,818 | 0.3250 | 5 | yes |
| zstd | 1 | 0.633 | 66,843 | 0.4036 | 11 | yes |
| zstd | 2 | 0.825 | 63,844 | 0.3855 | 5 | yes |
| zstd | 3 | 1.017 | 63,294 | 0.3822 | 5 | yes |
| zstd | 4 | 1.764 | 61,396 | 0.3708 | 5 | yes |
| zstd | 5 | 2.002 | 60,869 | 0.3676 | 5 | yes |
| zstd | 6 | 2.431 | 59,979 | 0.3622 | 5 | yes |
| zstd | 7 | 2.896 | 59,158 | 0.3572 | 5 | yes |
| zstd | 8 | 3.591 | 58,671 | 0.3543 | 5 | yes |
| zstd | 9 | 4.171 | 58,430 | 0.3528 | 5 | yes |
| zstd | 10 | 4.911 | 58,290 | 0.3520 | 5 | yes |
| zstd | 11 | 8.341 | 57,983 | 0.3501 | 5 | yes |
| zstd | 12 | 8.564 | 57,969 | 0.3501 | 5 | yes |
| zstd | 13 | 14.915 | 56,943 | 0.3439 | 5 | yes |
| zstd | 14 | 17.963 | 56,556 | 0.3415 | 5 | yes |
| zstd | 15 | 18.215 | 56,517 | 0.3413 | 5 | yes |
| zstd | 16 | 25.165 | 56,330 | 0.3402 | 5 | yes |
| zstd | 17 | 24.996 | 56,330 | 0.3402 | 5 | yes |
| zstd | 18 | 43.443 | 56,259 | 0.3397 | 5 | yes |
| zstd | 19 | 43.049 | 56,259 | 0.3397 | 5 | yes |
| zstd | 20 | 43.443 | 56,259 | 0.3397 | 5 | yes |
| zstd | 21 | 43.227 | 56,259 | 0.3397 | 5 | yes |
| zstd | 22 | 43.167 | 56,259 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.832 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.876 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.008 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.060 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.385 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.765 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.102 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.837 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.856 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.259 | 30,978 | 0.4230 | 11 | yes |
| brotli | 1 | 0.373 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.686 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.836 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.320 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.984 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.071 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.498 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.587 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.980 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 39.553 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 96.507 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.246 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.293 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.351 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.435 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.793 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.074 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.288 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.402 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.613 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.885 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.235 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.409 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.438 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 8.201 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 8.304 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 11.261 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 11.244 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 11.252 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 21.498 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 21.457 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 21.458 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 21.462 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.658 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.770 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.865 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 1.014 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.351 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 2.034 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.713 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 7.907 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 8.030 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.270 | 27,781 | 0.3075 | 10 | yes |
| brotli | 1 | 0.420 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.710 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.833 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.247 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.867 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 2.160 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.447 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.807 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 5.757 | 21,604 | 0.2392 | 6 | yes |
| brotli | 10 | 35.314 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 104.499 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.284 | 24,608 | 0.2724 | 5 | yes |
| zstd | 2 | 0.306 | 24,387 | 0.2700 | 6 | yes |
| zstd | 3 | 0.351 | 24,157 | 0.2674 | 5 | yes |
| zstd | 4 | 0.429 | 24,076 | 0.2665 | 5 | yes |
| zstd | 5 | 0.800 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 1.110 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.367 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.558 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.940 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.568 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.675 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.853 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 6.136 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 8.500 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 10.112 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 15.137 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 20.049 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 28.232 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 32.407 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 37.694 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 49.093 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 56.232 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.074 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.135 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.323 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.708 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.152 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.886 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.515 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.694 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.750 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.448 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.632 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.201 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.381 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.000 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.958 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.288 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.685 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.082 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.805 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 99.511 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 299.763 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.489 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.533 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.598 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.467 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.909 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.063 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.148 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.656 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.171 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.265 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.003 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.868 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.916 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.889 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.514 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.612 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 64.111 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 85.889 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 98.051 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 102.553 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 102.291 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 102.249 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,045,192 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 96.490 | 3,776,518 | 0.2216 | 5 | yes |
| gzip | 2 | 105.082 | 3,627,753 | 0.2128 | 5 | yes |
| gzip | 3 | 127.682 | 3,507,453 | 0.2058 | 5 | yes |
| gzip | 4 | 149.205 | 3,379,888 | 0.1983 | 5 | yes |
| gzip | 5 | 189.313 | 3,159,182 | 0.1853 | 5 | yes |
| gzip | 6 | 279.222 | 3,090,847 | 0.1813 | 5 | yes |
| gzip | 7 | 380.273 | 3,024,822 | 0.1775 | 5 | yes |
| gzip | 8 | 1071.332 | 2,957,000 | 0.1735 | 5 | yes |
| gzip | 9 | 1129.852 | 2,956,204 | 0.1734 | 5 | yes |
| brotli | 0 | 45.500 | 4,175,487 | 0.2450 | 5 | yes |
| brotli | 1 | 63.555 | 3,718,326 | 0.2181 | 5 | yes |
| brotli | 2 | 112.326 | 3,424,305 | 0.2009 | 5 | yes |
| brotli | 3 | 129.987 | 3,367,979 | 0.1976 | 5 | yes |
| brotli | 4 | 193.724 | 3,295,114 | 0.1933 | 5 | yes |
| brotli | 5 | 314.325 | 2,938,968 | 0.1724 | 5 | yes |
| brotli | 6 | 360.204 | 2,906,886 | 0.1705 | 5 | yes |
| brotli | 7 | 557.737 | 2,880,272 | 0.1690 | 5 | yes |
| brotli | 8 | 716.134 | 2,860,897 | 0.1678 | 5 | yes |
| brotli | 9 | 975.098 | 2,849,681 | 0.1672 | 5 | yes |
| brotli | 10 | 10847.750 | 2,442,746 | 0.1433 | 5 | yes |
| brotli | 11 | 27668.917 | 2,324,312 | 0.1364 | 5 | yes |
| zstd | 1 | 44.212 | 3,525,070 | 0.2068 | 5 | yes |
| zstd | 2 | 55.833 | 3,602,765 | 0.2114 | 5 | yes |
| zstd | 3 | 66.682 | 3,528,707 | 0.2070 | 5 | yes |
| zstd | 4 | 69.433 | 3,523,547 | 0.2067 | 5 | yes |
| zstd | 5 | 132.082 | 3,306,721 | 0.1940 | 5 | yes |
| zstd | 6 | 192.130 | 3,085,317 | 0.1810 | 5 | yes |
| zstd | 7 | 218.850 | 3,046,804 | 0.1787 | 5 | yes |
| zstd | 8 | 290.037 | 2,943,521 | 0.1727 | 5 | yes |
| zstd | 9 | 311.613 | 2,954,143 | 0.1733 | 5 | yes |
| zstd | 10 | 426.748 | 2,917,471 | 0.1712 | 5 | yes |
| zstd | 11 | 656.013 | 2,889,922 | 0.1695 | 5 | yes |
| zstd | 12 | 701.038 | 2,889,906 | 0.1695 | 5 | yes |
| zstd | 13 | 849.532 | 2,866,998 | 0.1682 | 5 | yes |
| zstd | 14 | 1025.867 | 2,852,567 | 0.1674 | 5 | yes |
| zstd | 15 | 1327.530 | 2,848,994 | 0.1671 | 9 | yes |
| zstd | 16 | 2887.426 | 2,661,004 | 0.1561 | 5 | yes |
| zstd | 17 | 3809.132 | 2,568,659 | 0.1507 | 5 | yes |
| zstd | 18 | 6784.715 | 2,549,776 | 0.1496 | 5 | yes |
| zstd | 19 | 6825.075 | 2,542,941 | 0.1492 | 5 | yes |
| zstd | 20 | 6783.727 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 21 | 7313.247 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 22 | 7199.445 | 2,536,119 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.838 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.796 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.871 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.262 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.232 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.788 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.389 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.098 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.042 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.846 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.417 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.982 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.916 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.633 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.477 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.029 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.697 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 53.521 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 66.336 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 901.207 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1925.151 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.054 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.908 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.874 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.428 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.457 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.803 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.018 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.565 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.776 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.770 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 25.131 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.106 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 49.110 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 50.805 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 53.029 | 383,877 | 0.4465 | 6 | yes |
| zstd | 16 | 96.951 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 120.671 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 161.064 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 183.134 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 183.200 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 186.317 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 182.423 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.129 | 5,565 | 0.2841 | 25 | no |
| gzip | 2 | 0.155 | 5,486 | 0.2801 | 9 | yes |
| gzip | 3 | 0.161 | 5,419 | 0.2767 | 16 | yes |
| gzip | 4 | 0.198 | 5,202 | 0.2656 | 8 | yes |
| gzip | 5 | 0.265 | 4,958 | 0.2531 | 6 | yes |
| gzip | 6 | 0.368 | 4,947 | 0.2526 | 5 | yes |
| gzip | 7 | 0.483 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.644 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.636 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.062 | 6,082 | 0.3105 | 13 | yes |
| brotli | 1 | 0.072 | 5,794 | 0.2958 | 25 | no |
| brotli | 2 | 0.135 | 5,002 | 0.2554 | 25 | yes |
| brotli | 3 | 0.187 | 4,986 | 0.2546 | 5 | yes |
| brotli | 4 | 0.277 | 4,954 | 0.2529 | 8 | yes |
| brotli | 5 | 0.447 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.493 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.555 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.593 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.703 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 7.172 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 21.693 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.056 | 5,441 | 0.2778 | 12 | yes |
| zstd | 2 | 0.060 | 5,242 | 0.2676 | 11 | yes |
| zstd | 3 | 0.077 | 5,234 | 0.2672 | 11 | yes |
| zstd | 4 | 0.079 | 5,212 | 0.2661 | 19 | yes |
| zstd | 5 | 0.178 | 5,133 | 0.2621 | 5 | yes |
| zstd | 6 | 0.242 | 4,853 | 0.2478 | 7 | yes |
| zstd | 7 | 0.285 | 4,757 | 0.2429 | 7 | yes |
| zstd | 8 | 0.334 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.391 | 4,744 | 0.2422 | 5 | yes |
| zstd | 10 | 0.485 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.582 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.639 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.981 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.812 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.926 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.871 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.883 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.893 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 5.632 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.670 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 5.697 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.684 | 4,415 | 0.2254 | 5 | yes |
