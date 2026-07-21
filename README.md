# Node Compression Benchmark

Last updated: 2026-07-21T21:18:25.370Z

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
| gzip | 1 | 1.034 | 31,033 | 0.3941 | 6 | yes |
| gzip | 2 | 1.072 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.189 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.322 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.758 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.122 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.321 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.704 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.745 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.361 | 33,111 | 0.4205 | 12 | yes |
| brotli | 1 | 0.798 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.845 | 29,394 | 0.3733 | 5 | yes |
| brotli | 3 | 0.987 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.489 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.117 | 27,013 | 0.3430 | 13 | yes |
| brotli | 6 | 2.180 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.725 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.707 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.416 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 36.070 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 101.115 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.236 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.260 | 30,069 | 0.3818 | 24 | yes |
| zstd | 3 | 0.304 | 29,214 | 0.3710 | 25 | no |
| zstd | 4 | 0.516 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.918 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.236 | 27,592 | 0.3504 | 7 | yes |
| zstd | 7 | 1.497 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.703 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.803 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.064 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.421 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.519 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.520 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.462 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.848 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.143 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 9.997 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.024 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.662 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.627 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.679 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.655 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.209 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 99.525 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 103.083 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 114.268 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 133.784 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 150.853 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 161.222 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 183.857 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 194.638 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.159 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.257 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.621 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.246 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 89.182 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 127.363 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 145.940 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 427.307 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 543.919 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 705.431 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6456.712 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13524.162 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.685 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.209 | 3,233,695 | 0.5909 | 7 | yes |
| zstd | 3 | 35.689 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 42.588 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 67.981 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 81.179 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 88.442 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 101.840 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 101.435 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 122.332 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 157.731 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 179.675 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 367.102 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 449.173 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 530.600 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 666.952 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 820.970 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1118.816 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1208.621 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1221.273 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1237.482 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1238.685 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.726 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.762 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.723 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 14.270 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 14.279 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 14.253 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 14.316 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 14.286 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 14.417 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.242 | 613,595 | 0.9981 | 5 | yes |
| brotli | 1 | 0.190 | 614,785 | 1.0000 | 5 | yes |
| brotli | 2 | 0.583 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.718 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.859 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.462 | 614,785 | 1.0000 | 19 | yes |
| brotli | 6 | 1.391 | 614,785 | 1.0000 | 15 | yes |
| brotli | 7 | 1.883 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 1.970 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 2.818 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 119.302 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 267.006 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.285 | 614,805 | 1.0000 | 19 | yes |
| zstd | 2 | 0.263 | 614,804 | 1.0000 | 7 | yes |
| zstd | 3 | 0.334 | 614,804 | 1.0000 | 25 | no |
| zstd | 4 | 0.296 | 614,804 | 1.0000 | 6 | yes |
| zstd | 5 | 0.441 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.436 | 614,804 | 1.0000 | 10 | yes |
| zstd | 7 | 0.510 | 614,804 | 1.0000 | 25 | no |
| zstd | 8 | 0.479 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.564 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.575 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.580 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.604 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.185 | 612,619 | 0.9965 | 25 | no |
| zstd | 14 | 2.027 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 2.200 | 612,619 | 0.9965 | 8 | yes |
| zstd | 16 | 14.029 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 14.276 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 21.355 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 26.221 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 25.571 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 25.227 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 25.135 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,236 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.262 | 145,182 | 0.2961 | 5 | yes |
| gzip | 2 | 4.683 | 138,423 | 0.2824 | 5 | yes |
| gzip | 3 | 6.216 | 133,882 | 0.2731 | 5 | yes |
| gzip | 4 | 6.306 | 125,608 | 0.2562 | 5 | yes |
| gzip | 5 | 9.151 | 120,963 | 0.2467 | 5 | yes |
| gzip | 6 | 13.596 | 119,255 | 0.2433 | 5 | yes |
| gzip | 7 | 17.404 | 118,789 | 0.2423 | 5 | yes |
| gzip | 8 | 33.531 | 118,515 | 0.2418 | 5 | yes |
| gzip | 9 | 51.842 | 118,446 | 0.2416 | 5 | yes |
| brotli | 0 | 1.560 | 149,404 | 0.3048 | 5 | yes |
| brotli | 1 | 2.200 | 137,364 | 0.2802 | 5 | yes |
| brotli | 2 | 4.014 | 129,155 | 0.2635 | 5 | yes |
| brotli | 3 | 4.667 | 126,568 | 0.2582 | 5 | yes |
| brotli | 4 | 6.449 | 122,453 | 0.2498 | 5 | yes |
| brotli | 5 | 10.091 | 112,692 | 0.2299 | 5 | yes |
| brotli | 6 | 11.603 | 110,011 | 0.2244 | 5 | yes |
| brotli | 7 | 14.300 | 108,041 | 0.2204 | 5 | yes |
| brotli | 8 | 17.041 | 107,001 | 0.2183 | 5 | yes |
| brotli | 9 | 21.876 | 106,112 | 0.2165 | 5 | yes |
| brotli | 10 | 289.346 | 98,636 | 0.2012 | 5 | yes |
| brotli | 11 | 765.148 | 96,403 | 0.1966 | 5 | yes |
| zstd | 1 | 1.748 | 138,123 | 0.2817 | 5 | yes |
| zstd | 2 | 1.835 | 133,890 | 0.2731 | 5 | yes |
| zstd | 3 | 2.053 | 126,208 | 0.2574 | 5 | yes |
| zstd | 4 | 2.436 | 126,023 | 0.2571 | 5 | yes |
| zstd | 5 | 4.587 | 117,405 | 0.2395 | 5 | yes |
| zstd | 6 | 6.236 | 113,440 | 0.2314 | 5 | yes |
| zstd | 7 | 7.002 | 111,894 | 0.2282 | 5 | yes |
| zstd | 8 | 8.799 | 111,138 | 0.2267 | 5 | yes |
| zstd | 9 | 8.868 | 111,138 | 0.2267 | 5 | yes |
| zstd | 10 | 10.735 | 110,160 | 0.2247 | 5 | yes |
| zstd | 11 | 13.479 | 109,468 | 0.2233 | 5 | yes |
| zstd | 12 | 13.512 | 109,468 | 0.2233 | 5 | yes |
| zstd | 13 | 27.533 | 108,280 | 0.2209 | 5 | yes |
| zstd | 14 | 33.388 | 107,640 | 0.2196 | 5 | yes |
| zstd | 15 | 37.467 | 107,626 | 0.2195 | 5 | yes |
| zstd | 16 | 65.155 | 102,010 | 0.2081 | 5 | yes |
| zstd | 17 | 72.685 | 101,107 | 0.2062 | 5 | yes |
| zstd | 18 | 103.316 | 100,287 | 0.2046 | 5 | yes |
| zstd | 19 | 133.631 | 100,211 | 0.2044 | 5 | yes |
| zstd | 20 | 133.558 | 100,211 | 0.2044 | 5 | yes |
| zstd | 21 | 133.723 | 100,213 | 0.2044 | 5 | yes |
| zstd | 22 | 133.677 | 100,213 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.073 | 4,987 | 0.2897 | 18 | yes |
| gzip | 2 | 0.072 | 4,874 | 0.2831 | 20 | yes |
| gzip | 3 | 0.086 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.111 | 4,530 | 0.2631 | 25 | no |
| gzip | 5 | 0.144 | 4,441 | 0.2579 | 17 | yes |
| gzip | 6 | 0.174 | 4,425 | 0.2570 | 19 | yes |
| gzip | 7 | 0.205 | 4,418 | 0.2566 | 15 | yes |
| gzip | 8 | 0.411 | 4,419 | 0.2567 | 17 | yes |
| gzip | 9 | 0.417 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.053 | 5,235 | 0.3041 | 15 | yes |
| brotli | 1 | 0.068 | 5,134 | 0.2982 | 7 | yes |
| brotli | 2 | 0.094 | 4,741 | 0.2754 | 16 | yes |
| brotli | 3 | 0.118 | 4,650 | 0.2701 | 21 | yes |
| brotli | 4 | 0.194 | 4,555 | 0.2646 | 17 | yes |
| brotli | 5 | 0.275 | 4,276 | 0.2484 | 25 | no |
| brotli | 6 | 0.326 | 4,275 | 0.2483 | 18 | yes |
| brotli | 7 | 0.443 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.428 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.533 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.106 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.324 | 3,873 | 0.2250 | 5 | yes |
| zstd | 1 | 0.054 | 4,923 | 0.2859 | 13 | yes |
| zstd | 2 | 0.059 | 4,868 | 0.2827 | 25 | no |
| zstd | 3 | 0.063 | 4,717 | 0.2740 | 8 | yes |
| zstd | 4 | 0.066 | 4,679 | 0.2718 | 9 | yes |
| zstd | 5 | 0.132 | 4,519 | 0.2625 | 6 | yes |
| zstd | 6 | 0.188 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.245 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.204 | 4,426 | 0.2571 | 12 | yes |
| zstd | 9 | 0.233 | 4,420 | 0.2567 | 22 | yes |
| zstd | 10 | 0.299 | 4,410 | 0.2561 | 13 | yes |
| zstd | 11 | 0.630 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.644 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.916 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.412 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.503 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.193 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.346 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.378 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.548 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.542 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.568 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.547 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.050 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.051 | 3,182 | 0.4444 | 21 | yes |
| gzip | 3 | 0.052 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.061 | 3,095 | 0.4322 | 9 | yes |
| gzip | 5 | 0.067 | 3,051 | 0.4261 | 13 | yes |
| gzip | 6 | 0.072 | 3,044 | 0.4251 | 9 | yes |
| gzip | 7 | 0.074 | 3,042 | 0.4248 | 10 | yes |
| gzip | 8 | 0.077 | 3,042 | 0.4248 | 22 | yes |
| gzip | 9 | 0.077 | 3,042 | 0.4248 | 5 | yes |
| brotli | 0 | 0.030 | 3,549 | 0.4956 | 9 | yes |
| brotli | 1 | 0.041 | 3,381 | 0.4721 | 10 | yes |
| brotli | 2 | 0.060 | 3,263 | 0.4557 | 25 | no |
| brotli | 3 | 0.074 | 3,216 | 0.4491 | 13 | yes |
| brotli | 4 | 0.123 | 3,147 | 0.4395 | 18 | yes |
| brotli | 5 | 0.152 | 2,963 | 0.4138 | 20 | yes |
| brotli | 6 | 0.169 | 2,952 | 0.4122 | 23 | yes |
| brotli | 7 | 0.173 | 2,944 | 0.4111 | 18 | yes |
| brotli | 8 | 0.172 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 0.212 | 2,945 | 0.4113 | 21 | yes |
| brotli | 10 | 3.218 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.067 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.030 | 3,254 | 0.4544 | 10 | yes |
| zstd | 2 | 0.031 | 3,200 | 0.4469 | 12 | yes |
| zstd | 3 | 0.039 | 3,176 | 0.4435 | 5 | yes |
| zstd | 4 | 0.063 | 3,102 | 0.4332 | 8 | yes |
| zstd | 5 | 0.074 | 3,079 | 0.4300 | 11 | yes |
| zstd | 6 | 0.086 | 3,060 | 0.4273 | 9 | yes |
| zstd | 7 | 0.097 | 3,053 | 0.4263 | 7 | yes |
| zstd | 8 | 0.099 | 3,053 | 0.4263 | 6 | yes |
| zstd | 9 | 0.139 | 3,055 | 0.4266 | 25 | no |
| zstd | 10 | 0.123 | 3,055 | 0.4266 | 6 | yes |
| zstd | 11 | 0.224 | 3,044 | 0.4251 | 16 | yes |
| zstd | 12 | 0.322 | 3,011 | 0.4205 | 25 | no |
| zstd | 13 | 0.594 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.572 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.544 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.039 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.039 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.059 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.023 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.011 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.062 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.048 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 165,599 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.052 | 67,507 | 0.4077 | 5 | yes |
| gzip | 2 | 2.236 | 65,886 | 0.3979 | 5 | yes |
| gzip | 3 | 2.574 | 64,874 | 0.3918 | 5 | yes |
| gzip | 4 | 2.863 | 62,487 | 0.3773 | 5 | yes |
| gzip | 5 | 3.903 | 60,848 | 0.3674 | 5 | yes |
| gzip | 6 | 4.894 | 60,570 | 0.3658 | 5 | yes |
| gzip | 7 | 5.366 | 60,527 | 0.3655 | 5 | yes |
| gzip | 8 | 5.843 | 60,509 | 0.3654 | 5 | yes |
| gzip | 9 | 5.831 | 60,509 | 0.3654 | 5 | yes |
| brotli | 0 | 0.689 | 71,790 | 0.4335 | 5 | yes |
| brotli | 1 | 0.945 | 68,843 | 0.4157 | 5 | yes |
| brotli | 2 | 1.742 | 63,505 | 0.3835 | 5 | yes |
| brotli | 3 | 2.063 | 62,945 | 0.3801 | 5 | yes |
| brotli | 4 | 3.032 | 61,772 | 0.3730 | 5 | yes |
| brotli | 5 | 4.411 | 58,412 | 0.3527 | 5 | yes |
| brotli | 6 | 5.065 | 58,008 | 0.3503 | 5 | yes |
| brotli | 7 | 6.118 | 57,755 | 0.3488 | 5 | yes |
| brotli | 8 | 6.515 | 57,667 | 0.3482 | 5 | yes |
| brotli | 9 | 7.681 | 57,589 | 0.3478 | 5 | yes |
| brotli | 10 | 102.842 | 54,874 | 0.3314 | 5 | yes |
| brotli | 11 | 257.481 | 53,818 | 0.3250 | 5 | yes |
| zstd | 1 | 0.605 | 66,843 | 0.4036 | 5 | yes |
| zstd | 2 | 0.810 | 63,844 | 0.3855 | 5 | yes |
| zstd | 3 | 1.019 | 63,294 | 0.3822 | 5 | yes |
| zstd | 4 | 1.828 | 61,396 | 0.3708 | 5 | yes |
| zstd | 5 | 2.057 | 60,869 | 0.3676 | 5 | yes |
| zstd | 6 | 2.475 | 59,979 | 0.3622 | 5 | yes |
| zstd | 7 | 2.981 | 59,158 | 0.3572 | 5 | yes |
| zstd | 8 | 3.718 | 58,671 | 0.3543 | 5 | yes |
| zstd | 9 | 4.195 | 58,430 | 0.3528 | 5 | yes |
| zstd | 10 | 5.052 | 58,290 | 0.3520 | 5 | yes |
| zstd | 11 | 8.677 | 57,983 | 0.3501 | 5 | yes |
| zstd | 12 | 8.962 | 57,969 | 0.3501 | 5 | yes |
| zstd | 13 | 15.134 | 56,943 | 0.3439 | 5 | yes |
| zstd | 14 | 17.941 | 56,556 | 0.3415 | 5 | yes |
| zstd | 15 | 18.193 | 56,517 | 0.3413 | 5 | yes |
| zstd | 16 | 22.871 | 56,330 | 0.3402 | 5 | yes |
| zstd | 17 | 23.081 | 56,330 | 0.3402 | 5 | yes |
| zstd | 18 | 40.244 | 56,259 | 0.3397 | 5 | yes |
| zstd | 19 | 39.777 | 56,259 | 0.3397 | 5 | yes |
| zstd | 20 | 39.768 | 56,259 | 0.3397 | 5 | yes |
| zstd | 21 | 39.182 | 56,259 | 0.3397 | 5 | yes |
| zstd | 22 | 39.496 | 56,259 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.854 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.938 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.080 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.181 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.575 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.028 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.425 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.328 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.330 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.207 | 30,978 | 0.4230 | 12 | yes |
| brotli | 1 | 0.328 | 29,754 | 0.4063 | 13 | yes |
| brotli | 2 | 0.725 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.863 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.335 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.928 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.130 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.572 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.735 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.399 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 41.409 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 100.684 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.194 | 28,919 | 0.3949 | 12 | yes |
| zstd | 2 | 0.226 | 28,008 | 0.3824 | 12 | yes |
| zstd | 3 | 0.264 | 27,463 | 0.3750 | 11 | yes |
| zstd | 4 | 0.383 | 27,100 | 0.3700 | 8 | yes |
| zstd | 5 | 0.784 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.098 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.328 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.449 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.635 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.945 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.189 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.315 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.363 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.480 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.571 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.825 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.798 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.886 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.857 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.816 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.696 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.837 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.707 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.795 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.943 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 1.080 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.506 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 2.333 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 3.133 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 9.096 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 9.162 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.188 | 27,781 | 0.3075 | 13 | yes |
| brotli | 1 | 0.325 | 25,973 | 0.2875 | 19 | yes |
| brotli | 2 | 0.733 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.868 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.252 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.865 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 2.112 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.559 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.964 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 3.797 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 36.311 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 106.533 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.217 | 24,608 | 0.2724 | 25 | no |
| zstd | 2 | 0.235 | 24,387 | 0.2700 | 10 | yes |
| zstd | 3 | 0.256 | 24,157 | 0.2674 | 13 | yes |
| zstd | 4 | 0.325 | 24,076 | 0.2665 | 18 | yes |
| zstd | 5 | 0.794 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 1.126 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.375 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.599 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.955 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.568 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.794 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 5.007 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 6.117 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 8.280 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 9.944 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 13.559 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 18.190 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 27.914 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 27.986 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 32.587 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 47.817 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 55.609 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.158 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.247 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.471 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.748 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.275 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.162 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.942 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.343 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.416 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.324 | 43,268 | 0.1864 | 14 | yes |
| brotli | 1 | 0.660 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.208 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.449 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.142 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.034 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.381 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.781 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.285 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.215 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 101.172 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 303.820 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.374 | 35,549 | 0.1532 | 20 | yes |
| zstd | 2 | 0.521 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.546 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.447 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.727 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.936 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.199 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.715 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.209 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.958 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.185 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.048 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.597 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.410 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.183 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.347 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.437 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 72.839 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 81.180 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 83.966 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 84.021 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 84.126 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,045,192 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 103.037 | 3,776,518 | 0.2216 | 5 | yes |
| gzip | 2 | 112.930 | 3,627,753 | 0.2128 | 5 | yes |
| gzip | 3 | 141.322 | 3,507,453 | 0.2058 | 5 | yes |
| gzip | 4 | 153.573 | 3,379,888 | 0.1983 | 5 | yes |
| gzip | 5 | 207.411 | 3,159,182 | 0.1853 | 5 | yes |
| gzip | 6 | 316.524 | 3,090,847 | 0.1813 | 5 | yes |
| gzip | 7 | 439.577 | 3,024,822 | 0.1775 | 5 | yes |
| gzip | 8 | 1271.614 | 2,957,000 | 0.1735 | 5 | yes |
| gzip | 9 | 1336.597 | 2,956,204 | 0.1734 | 5 | yes |
| brotli | 0 | 44.916 | 4,175,487 | 0.2450 | 5 | yes |
| brotli | 1 | 67.432 | 3,718,326 | 0.2181 | 5 | yes |
| brotli | 2 | 116.074 | 3,424,305 | 0.2009 | 5 | yes |
| brotli | 3 | 135.022 | 3,367,979 | 0.1976 | 5 | yes |
| brotli | 4 | 190.044 | 3,295,114 | 0.1933 | 5 | yes |
| brotli | 5 | 317.560 | 2,938,968 | 0.1724 | 5 | yes |
| brotli | 6 | 383.803 | 2,906,886 | 0.1705 | 5 | yes |
| brotli | 7 | 569.293 | 2,880,272 | 0.1690 | 5 | yes |
| brotli | 8 | 736.643 | 2,860,897 | 0.1678 | 5 | yes |
| brotli | 9 | 981.398 | 2,849,681 | 0.1672 | 5 | yes |
| brotli | 10 | 11219.441 | 2,442,746 | 0.1433 | 5 | yes |
| brotli | 11 | 28806.182 | 2,324,312 | 0.1364 | 5 | yes |
| zstd | 1 | 44.514 | 3,525,070 | 0.2068 | 5 | yes |
| zstd | 2 | 57.445 | 3,602,765 | 0.2114 | 5 | yes |
| zstd | 3 | 66.878 | 3,528,707 | 0.2070 | 5 | yes |
| zstd | 4 | 73.447 | 3,523,547 | 0.2067 | 5 | yes |
| zstd | 5 | 139.040 | 3,306,721 | 0.1940 | 5 | yes |
| zstd | 6 | 200.757 | 3,085,317 | 0.1810 | 5 | yes |
| zstd | 7 | 231.162 | 3,046,804 | 0.1787 | 5 | yes |
| zstd | 8 | 299.137 | 2,943,521 | 0.1727 | 5 | yes |
| zstd | 9 | 313.470 | 2,954,143 | 0.1733 | 5 | yes |
| zstd | 10 | 409.113 | 2,917,471 | 0.1712 | 5 | yes |
| zstd | 11 | 598.793 | 2,889,922 | 0.1695 | 5 | yes |
| zstd | 12 | 633.743 | 2,889,906 | 0.1695 | 5 | yes |
| zstd | 13 | 882.437 | 2,866,998 | 0.1682 | 5 | yes |
| zstd | 14 | 1051.751 | 2,852,567 | 0.1674 | 5 | yes |
| zstd | 15 | 1377.946 | 2,848,994 | 0.1671 | 5 | yes |
| zstd | 16 | 2868.315 | 2,661,004 | 0.1561 | 5 | yes |
| zstd | 17 | 3707.716 | 2,568,659 | 0.1507 | 5 | yes |
| zstd | 18 | 5658.668 | 2,549,776 | 0.1496 | 5 | yes |
| zstd | 19 | 6215.882 | 2,542,941 | 0.1492 | 5 | yes |
| zstd | 20 | 6459.797 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 21 | 6447.174 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 22 | 6540.815 | 2,536,119 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.628 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.843 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.478 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.136 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 26.639 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 31.760 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 33.745 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.099 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.183 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.153 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.614 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.395 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.767 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.395 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.490 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.247 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 46.154 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 53.982 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 66.457 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 981.665 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2096.035 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.221 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.107 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.599 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.490 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.661 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.508 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.570 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.193 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.440 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.201 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 27.592 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 27.532 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 55.755 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 54.911 | 383,886 | 0.4465 | 7 | yes |
| zstd | 15 | 56.256 | 383,877 | 0.4465 | 6 | yes |
| zstd | 16 | 94.526 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 124.301 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 158.091 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 178.213 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 174.373 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 183.619 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 178.397 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.081 | 5,565 | 0.2841 | 25 | no |
| gzip | 2 | 0.081 | 5,486 | 0.2801 | 25 | no |
| gzip | 3 | 0.097 | 5,419 | 0.2767 | 25 | no |
| gzip | 4 | 0.131 | 5,202 | 0.2656 | 25 | no |
| gzip | 5 | 0.177 | 4,958 | 0.2531 | 25 | no |
| gzip | 6 | 0.226 | 4,947 | 0.2526 | 25 | no |
| gzip | 7 | 0.484 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.677 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.658 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.055 | 6,082 | 0.3105 | 14 | yes |
| brotli | 1 | 0.077 | 5,794 | 0.2958 | 8 | yes |
| brotli | 2 | 0.103 | 5,002 | 0.2554 | 25 | no |
| brotli | 3 | 0.135 | 4,986 | 0.2546 | 17 | yes |
| brotli | 4 | 0.205 | 4,954 | 0.2529 | 18 | yes |
| brotli | 5 | 0.370 | 4,641 | 0.2370 | 25 | no |
| brotli | 6 | 0.431 | 4,630 | 0.2364 | 9 | yes |
| brotli | 7 | 0.567 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.615 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.753 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 7.598 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 22.476 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.054 | 5,441 | 0.2778 | 9 | yes |
| zstd | 2 | 0.056 | 5,242 | 0.2676 | 18 | yes |
| zstd | 3 | 0.069 | 5,234 | 0.2672 | 7 | yes |
| zstd | 4 | 0.071 | 5,212 | 0.2661 | 8 | yes |
| zstd | 5 | 0.142 | 5,133 | 0.2621 | 12 | yes |
| zstd | 6 | 0.188 | 4,853 | 0.2478 | 23 | yes |
| zstd | 7 | 0.220 | 4,757 | 0.2429 | 16 | yes |
| zstd | 8 | 0.247 | 4,750 | 0.2425 | 9 | yes |
| zstd | 9 | 0.584 | 4,744 | 0.2422 | 5 | yes |
| zstd | 10 | 0.450 | 4,746 | 0.2423 | 9 | yes |
| zstd | 11 | 0.596 | 4,745 | 0.2423 | 10 | yes |
| zstd | 12 | 0.616 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 1.015 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.742 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.843 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.534 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.538 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.545 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 4.993 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.024 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 5.049 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.039 | 4,415 | 0.2254 | 5 | yes |
