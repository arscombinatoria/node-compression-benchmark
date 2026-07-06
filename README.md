# Node Compression Benchmark

Last updated: 2026-07-06T21:20:08.492Z

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
| gzip | 1 | 1.407 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.474 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.605 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.792 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 2.309 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.736 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.986 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.730 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.721 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.364 | 33,111 | 0.4205 | 14 | yes |
| brotli | 1 | 0.811 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.860 | 29,394 | 0.3733 | 7 | yes |
| brotli | 3 | 1.052 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.549 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.206 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.374 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 4.143 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 3.059 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.832 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 36.017 | 25,340 | 0.3218 | 8 | yes |
| brotli | 11 | 102.324 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.240 | 31,062 | 0.3944 | 10 | yes |
| zstd | 2 | 0.263 | 30,069 | 0.3818 | 13 | yes |
| zstd | 3 | 0.353 | 29,214 | 0.3710 | 25 | no |
| zstd | 4 | 0.481 | 29,108 | 0.3696 | 13 | yes |
| zstd | 5 | 0.924 | 28,349 | 0.3600 | 9 | yes |
| zstd | 6 | 1.244 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.519 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.680 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.833 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.106 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.637 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.725 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.615 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.725 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.825 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.163 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.146 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.094 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.755 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.774 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.820 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.658 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.655 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 98.197 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 105.174 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 114.037 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 133.456 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 150.989 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 161.454 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 184.738 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 194.213 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.703 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 30.328 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.734 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.899 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 95.607 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 131.242 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 151.603 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 474.862 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 614.545 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 842.391 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6939.858 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 14267.765 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.876 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.946 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 38.033 | 3,139,155 | 0.5736 | 6 | yes |
| zstd | 4 | 44.776 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 68.234 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 81.147 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 88.730 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 103.787 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 113.305 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 143.911 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 184.690 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 207.243 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 482.460 | 2,864,062 | 0.5233 | 9 | yes |
| zstd | 14 | 516.952 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 631.448 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 891.998 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 1059.265 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1288.868 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1361.870 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1431.135 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1402.441 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1397.266 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.752 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.769 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.732 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 14.399 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 14.321 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 14.337 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 14.285 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 14.304 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 14.384 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.294 | 613,595 | 0.9981 | 16 | yes |
| brotli | 1 | 0.262 | 614,785 | 1.0000 | 24 | yes |
| brotli | 2 | 0.595 | 614,791 | 1.0000 | 18 | yes |
| brotli | 3 | 0.777 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.924 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.607 | 614,785 | 1.0000 | 6 | yes |
| brotli | 6 | 1.688 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 1.918 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.247 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 5.286 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 124.843 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 274.049 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.270 | 614,805 | 1.0000 | 10 | yes |
| zstd | 2 | 0.271 | 614,804 | 1.0000 | 6 | yes |
| zstd | 3 | 0.311 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.346 | 614,804 | 1.0000 | 25 | no |
| zstd | 5 | 0.446 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.454 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.550 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.503 | 614,804 | 1.0000 | 13 | yes |
| zstd | 9 | 0.621 | 614,804 | 1.0000 | 17 | yes |
| zstd | 10 | 0.607 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.613 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.604 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.468 | 612,619 | 0.9965 | 6 | yes |
| zstd | 14 | 2.939 | 612,619 | 0.9965 | 22 | yes |
| zstd | 15 | 2.839 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 16.828 | 612,536 | 0.9963 | 25 | no |
| zstd | 17 | 16.162 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 22.279 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 26.829 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 34.380 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 28.565 | 612,518 | 0.9963 | 11 | yes |
| zstd | 22 | 28.228 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,236 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.244 | 145,182 | 0.2961 | 5 | yes |
| gzip | 2 | 4.702 | 138,423 | 0.2824 | 5 | yes |
| gzip | 3 | 6.184 | 133,882 | 0.2731 | 5 | yes |
| gzip | 4 | 6.262 | 125,608 | 0.2562 | 5 | yes |
| gzip | 5 | 9.052 | 120,963 | 0.2467 | 5 | yes |
| gzip | 6 | 13.414 | 119,255 | 0.2433 | 5 | yes |
| gzip | 7 | 17.166 | 118,789 | 0.2423 | 5 | yes |
| gzip | 8 | 32.332 | 118,515 | 0.2418 | 5 | yes |
| gzip | 9 | 50.062 | 118,446 | 0.2416 | 5 | yes |
| brotli | 0 | 1.593 | 149,404 | 0.3048 | 5 | yes |
| brotli | 1 | 2.223 | 137,364 | 0.2802 | 5 | yes |
| brotli | 2 | 4.012 | 129,155 | 0.2635 | 5 | yes |
| brotli | 3 | 4.677 | 126,568 | 0.2582 | 5 | yes |
| brotli | 4 | 6.491 | 122,453 | 0.2498 | 5 | yes |
| brotli | 5 | 10.246 | 112,692 | 0.2299 | 5 | yes |
| brotli | 6 | 11.796 | 110,011 | 0.2244 | 5 | yes |
| brotli | 7 | 14.703 | 108,041 | 0.2204 | 5 | yes |
| brotli | 8 | 17.823 | 107,001 | 0.2183 | 5 | yes |
| brotli | 9 | 24.885 | 106,112 | 0.2165 | 5 | yes |
| brotli | 10 | 294.429 | 98,636 | 0.2012 | 5 | yes |
| brotli | 11 | 771.322 | 96,403 | 0.1966 | 5 | yes |
| zstd | 1 | 1.773 | 138,123 | 0.2817 | 5 | yes |
| zstd | 2 | 1.930 | 133,890 | 0.2731 | 5 | yes |
| zstd | 3 | 2.239 | 126,208 | 0.2574 | 5 | yes |
| zstd | 4 | 2.429 | 126,023 | 0.2571 | 5 | yes |
| zstd | 5 | 4.641 | 117,405 | 0.2395 | 5 | yes |
| zstd | 6 | 6.288 | 113,440 | 0.2314 | 5 | yes |
| zstd | 7 | 6.987 | 111,894 | 0.2282 | 5 | yes |
| zstd | 8 | 8.764 | 111,138 | 0.2267 | 5 | yes |
| zstd | 9 | 8.827 | 111,138 | 0.2267 | 5 | yes |
| zstd | 10 | 10.813 | 110,160 | 0.2247 | 5 | yes |
| zstd | 11 | 13.493 | 109,468 | 0.2233 | 5 | yes |
| zstd | 12 | 13.510 | 109,468 | 0.2233 | 5 | yes |
| zstd | 13 | 27.874 | 108,280 | 0.2209 | 5 | yes |
| zstd | 14 | 34.612 | 107,640 | 0.2196 | 5 | yes |
| zstd | 15 | 38.491 | 107,626 | 0.2195 | 5 | yes |
| zstd | 16 | 66.601 | 102,010 | 0.2081 | 5 | yes |
| zstd | 17 | 76.354 | 101,107 | 0.2062 | 5 | yes |
| zstd | 18 | 106.895 | 100,287 | 0.2046 | 5 | yes |
| zstd | 19 | 136.608 | 100,211 | 0.2044 | 5 | yes |
| zstd | 20 | 140.602 | 100,211 | 0.2044 | 5 | yes |
| zstd | 21 | 137.212 | 100,213 | 0.2044 | 5 | yes |
| zstd | 22 | 136.878 | 100,213 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.073 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.074 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.149 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.111 | 4,530 | 0.2631 | 17 | yes |
| gzip | 5 | 0.141 | 4,441 | 0.2579 | 17 | yes |
| gzip | 6 | 0.182 | 4,425 | 0.2570 | 20 | yes |
| gzip | 7 | 0.214 | 4,418 | 0.2566 | 12 | yes |
| gzip | 8 | 0.402 | 4,419 | 0.2567 | 14 | yes |
| gzip | 9 | 0.418 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.055 | 5,235 | 0.3041 | 21 | yes |
| brotli | 1 | 0.069 | 5,134 | 0.2982 | 11 | yes |
| brotli | 2 | 0.096 | 4,741 | 0.2754 | 17 | yes |
| brotli | 3 | 0.119 | 4,650 | 0.2701 | 13 | yes |
| brotli | 4 | 0.194 | 4,555 | 0.2646 | 18 | yes |
| brotli | 5 | 0.279 | 4,276 | 0.2484 | 23 | yes |
| brotli | 6 | 0.299 | 4,275 | 0.2483 | 24 | yes |
| brotli | 7 | 0.432 | 4,264 | 0.2477 | 9 | yes |
| brotli | 8 | 0.396 | 4,257 | 0.2473 | 13 | yes |
| brotli | 9 | 2.405 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.119 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.323 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.054 | 4,923 | 0.2859 | 9 | yes |
| zstd | 2 | 0.054 | 4,868 | 0.2827 | 14 | yes |
| zstd | 3 | 0.067 | 4,717 | 0.2740 | 19 | yes |
| zstd | 4 | 0.069 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.135 | 4,519 | 0.2625 | 10 | yes |
| zstd | 6 | 0.165 | 4,437 | 0.2577 | 14 | yes |
| zstd | 7 | 0.193 | 4,437 | 0.2577 | 9 | yes |
| zstd | 8 | 0.212 | 4,426 | 0.2571 | 17 | yes |
| zstd | 9 | 0.231 | 4,420 | 0.2567 | 22 | yes |
| zstd | 10 | 0.315 | 4,410 | 0.2561 | 9 | yes |
| zstd | 11 | 0.618 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.654 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.921 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.427 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.506 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.201 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.314 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.344 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.556 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.558 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.536 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.553 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.049 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.051 | 3,182 | 0.4444 | 24 | yes |
| gzip | 3 | 0.053 | 3,153 | 0.4403 | 18 | yes |
| gzip | 4 | 0.063 | 3,095 | 0.4322 | 18 | yes |
| gzip | 5 | 0.070 | 3,051 | 0.4261 | 13 | yes |
| gzip | 6 | 0.072 | 3,044 | 0.4251 | 13 | yes |
| gzip | 7 | 0.078 | 3,042 | 0.4248 | 25 | no |
| gzip | 8 | 0.079 | 3,042 | 0.4248 | 8 | yes |
| gzip | 9 | 0.075 | 3,042 | 0.4248 | 12 | yes |
| brotli | 0 | 0.032 | 3,549 | 0.4956 | 14 | yes |
| brotli | 1 | 0.043 | 3,381 | 0.4721 | 9 | yes |
| brotli | 2 | 0.060 | 3,263 | 0.4557 | 20 | yes |
| brotli | 3 | 0.075 | 3,216 | 0.4491 | 17 | yes |
| brotli | 4 | 0.126 | 3,147 | 0.4395 | 14 | yes |
| brotli | 5 | 0.207 | 2,963 | 0.4138 | 25 | no |
| brotli | 6 | 0.198 | 2,952 | 0.4122 | 25 | no |
| brotli | 7 | 0.176 | 2,944 | 0.4111 | 19 | yes |
| brotli | 8 | 0.182 | 2,944 | 0.4111 | 6 | yes |
| brotli | 9 | 2.172 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.264 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.103 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.034 | 3,254 | 0.4544 | 25 | no |
| zstd | 2 | 0.035 | 3,200 | 0.4469 | 17 | yes |
| zstd | 3 | 0.042 | 3,176 | 0.4435 | 14 | yes |
| zstd | 4 | 0.062 | 3,102 | 0.4332 | 9 | yes |
| zstd | 5 | 0.073 | 3,079 | 0.4300 | 20 | yes |
| zstd | 6 | 0.084 | 3,060 | 0.4273 | 10 | yes |
| zstd | 7 | 0.098 | 3,053 | 0.4263 | 8 | yes |
| zstd | 8 | 0.099 | 3,053 | 0.4263 | 7 | yes |
| zstd | 9 | 0.120 | 3,055 | 0.4266 | 20 | yes |
| zstd | 10 | 0.118 | 3,055 | 0.4266 | 20 | yes |
| zstd | 11 | 0.226 | 3,044 | 0.4251 | 16 | yes |
| zstd | 12 | 0.422 | 3,011 | 0.4205 | 25 | no |
| zstd | 13 | 0.616 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.580 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.584 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.111 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.091 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.103 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.098 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.119 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.141 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.095 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,901 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.069 | 67,260 | 0.4079 | 5 | yes |
| gzip | 2 | 2.253 | 65,641 | 0.3981 | 5 | yes |
| gzip | 3 | 2.582 | 64,609 | 0.3918 | 5 | yes |
| gzip | 4 | 2.834 | 62,246 | 0.3775 | 5 | yes |
| gzip | 5 | 3.910 | 60,620 | 0.3676 | 5 | yes |
| gzip | 6 | 4.873 | 60,347 | 0.3660 | 5 | yes |
| gzip | 7 | 5.347 | 60,306 | 0.3657 | 5 | yes |
| gzip | 8 | 5.754 | 60,288 | 0.3656 | 5 | yes |
| gzip | 9 | 5.790 | 60,288 | 0.3656 | 5 | yes |
| brotli | 0 | 0.577 | 71,542 | 0.4338 | 14 | yes |
| brotli | 1 | 0.957 | 68,608 | 0.4161 | 5 | yes |
| brotli | 2 | 1.749 | 63,268 | 0.3837 | 5 | yes |
| brotli | 3 | 2.047 | 62,714 | 0.3803 | 5 | yes |
| brotli | 4 | 2.951 | 61,492 | 0.3729 | 5 | yes |
| brotli | 5 | 4.468 | 58,210 | 0.3530 | 5 | yes |
| brotli | 6 | 5.035 | 57,839 | 0.3507 | 5 | yes |
| brotli | 7 | 6.102 | 57,540 | 0.3489 | 5 | yes |
| brotli | 8 | 6.780 | 57,465 | 0.3485 | 5 | yes |
| brotli | 9 | 10.413 | 57,391 | 0.3480 | 5 | yes |
| brotli | 10 | 101.713 | 54,557 | 0.3308 | 5 | yes |
| brotli | 11 | 264.021 | 53,655 | 0.3254 | 5 | yes |
| zstd | 1 | 0.621 | 66,585 | 0.4038 | 5 | yes |
| zstd | 2 | 0.797 | 63,595 | 0.3857 | 5 | yes |
| zstd | 3 | 0.981 | 63,025 | 0.3822 | 5 | yes |
| zstd | 4 | 1.850 | 61,203 | 0.3711 | 5 | yes |
| zstd | 5 | 2.042 | 60,668 | 0.3679 | 5 | yes |
| zstd | 6 | 2.485 | 59,769 | 0.3625 | 5 | yes |
| zstd | 7 | 2.972 | 58,956 | 0.3575 | 5 | yes |
| zstd | 8 | 3.709 | 58,460 | 0.3545 | 5 | yes |
| zstd | 9 | 4.264 | 58,213 | 0.3530 | 5 | yes |
| zstd | 10 | 5.121 | 58,073 | 0.3522 | 5 | yes |
| zstd | 11 | 8.642 | 57,781 | 0.3504 | 5 | yes |
| zstd | 12 | 8.748 | 57,769 | 0.3503 | 5 | yes |
| zstd | 13 | 15.201 | 56,782 | 0.3443 | 5 | yes |
| zstd | 14 | 19.021 | 56,326 | 0.3416 | 5 | yes |
| zstd | 15 | 19.298 | 56,318 | 0.3415 | 5 | yes |
| zstd | 16 | 24.667 | 56,132 | 0.3404 | 5 | yes |
| zstd | 17 | 24.521 | 56,132 | 0.3404 | 5 | yes |
| zstd | 18 | 42.465 | 56,049 | 0.3399 | 5 | yes |
| zstd | 19 | 41.665 | 56,049 | 0.3399 | 5 | yes |
| zstd | 20 | 42.438 | 56,049 | 0.3399 | 5 | yes |
| zstd | 21 | 41.437 | 56,049 | 0.3399 | 5 | yes |
| zstd | 22 | 41.180 | 56,049 | 0.3399 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.860 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.928 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.076 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.178 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.563 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.018 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.428 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.293 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.327 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.207 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.354 | 29,754 | 0.4063 | 21 | yes |
| brotli | 2 | 0.734 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.868 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.310 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.944 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.167 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.689 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.935 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 6.037 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 42.199 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 100.708 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.200 | 28,919 | 0.3949 | 10 | yes |
| zstd | 2 | 0.225 | 28,008 | 0.3824 | 13 | yes |
| zstd | 3 | 0.278 | 27,463 | 0.3750 | 9 | yes |
| zstd | 4 | 0.450 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.796 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.106 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.333 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.459 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.645 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.932 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.274 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.447 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.342 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.488 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.560 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.822 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.889 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.867 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.725 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.654 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.715 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.828 | 24,463 | 0.3340 | 8 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,169 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.700 | 25,582 | 0.2837 | 5 | yes |
| gzip | 2 | 0.816 | 25,330 | 0.2809 | 5 | yes |
| gzip | 3 | 0.950 | 25,125 | 0.2786 | 5 | yes |
| gzip | 4 | 1.077 | 23,752 | 0.2634 | 5 | yes |
| gzip | 5 | 1.522 | 22,851 | 0.2534 | 5 | yes |
| gzip | 6 | 2.330 | 22,618 | 0.2508 | 5 | yes |
| gzip | 7 | 3.124 | 22,513 | 0.2497 | 5 | yes |
| gzip | 8 | 9.128 | 22,266 | 0.2469 | 5 | yes |
| gzip | 9 | 9.103 | 22,264 | 0.2469 | 5 | yes |
| brotli | 0 | 0.196 | 27,662 | 0.3068 | 12 | yes |
| brotli | 1 | 0.330 | 25,918 | 0.2874 | 19 | yes |
| brotli | 2 | 0.734 | 23,445 | 0.2600 | 5 | yes |
| brotli | 3 | 0.880 | 23,374 | 0.2592 | 5 | yes |
| brotli | 4 | 1.280 | 22,948 | 0.2545 | 5 | yes |
| brotli | 5 | 1.964 | 21,885 | 0.2427 | 5 | yes |
| brotli | 6 | 2.159 | 21,770 | 0.2414 | 5 | yes |
| brotli | 7 | 2.602 | 21,692 | 0.2406 | 5 | yes |
| brotli | 8 | 3.029 | 21,642 | 0.2400 | 5 | yes |
| brotli | 9 | 6.090 | 21,554 | 0.2390 | 5 | yes |
| brotli | 10 | 37.263 | 18,928 | 0.2099 | 5 | yes |
| brotli | 11 | 107.805 | 18,418 | 0.2043 | 5 | yes |
| zstd | 1 | 0.220 | 24,558 | 0.2724 | 11 | yes |
| zstd | 2 | 0.241 | 24,331 | 0.2698 | 11 | yes |
| zstd | 3 | 0.268 | 24,100 | 0.2673 | 11 | yes |
| zstd | 4 | 0.388 | 24,021 | 0.2664 | 5 | yes |
| zstd | 5 | 0.777 | 23,309 | 0.2585 | 5 | yes |
| zstd | 6 | 1.145 | 22,411 | 0.2485 | 5 | yes |
| zstd | 7 | 1.386 | 21,911 | 0.2430 | 5 | yes |
| zstd | 8 | 1.597 | 21,844 | 0.2423 | 5 | yes |
| zstd | 9 | 1.955 | 21,770 | 0.2414 | 5 | yes |
| zstd | 10 | 2.597 | 21,703 | 0.2407 | 5 | yes |
| zstd | 11 | 3.695 | 21,560 | 0.2391 | 5 | yes |
| zstd | 12 | 4.947 | 21,531 | 0.2388 | 5 | yes |
| zstd | 13 | 5.816 | 21,345 | 0.2367 | 5 | yes |
| zstd | 14 | 8.278 | 20,515 | 0.2275 | 5 | yes |
| zstd | 15 | 9.944 | 20,378 | 0.2260 | 5 | yes |
| zstd | 16 | 13.544 | 20,209 | 0.2241 | 5 | yes |
| zstd | 17 | 18.173 | 20,179 | 0.2238 | 5 | yes |
| zstd | 18 | 27.748 | 20,175 | 0.2237 | 5 | yes |
| zstd | 19 | 27.815 | 20,183 | 0.2238 | 5 | yes |
| zstd | 20 | 32.543 | 20,146 | 0.2234 | 5 | yes |
| zstd | 21 | 47.555 | 20,138 | 0.2233 | 5 | yes |
| zstd | 22 | 55.452 | 20,133 | 0.2233 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.177 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.250 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.479 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.749 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.271 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.173 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.930 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.332 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.412 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.328 | 43,268 | 0.1864 | 14 | yes |
| brotli | 1 | 0.677 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.222 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.470 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.103 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.040 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.329 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.810 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.341 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 7.451 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 100.578 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 304.547 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.378 | 35,549 | 0.1532 | 19 | yes |
| zstd | 2 | 0.524 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.548 | 34,393 | 0.1482 | 7 | yes |
| zstd | 4 | 1.440 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.708 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.976 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.197 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.725 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.227 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.017 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.194 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.007 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.776 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.671 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.542 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.615 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 54.346 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 73.446 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 81.271 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 84.259 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 84.130 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 84.296 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,045,192 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 103.487 | 3,776,518 | 0.2216 | 5 | yes |
| gzip | 2 | 113.414 | 3,627,753 | 0.2128 | 5 | yes |
| gzip | 3 | 140.607 | 3,507,453 | 0.2058 | 5 | yes |
| gzip | 4 | 154.592 | 3,379,888 | 0.1983 | 5 | yes |
| gzip | 5 | 205.735 | 3,159,182 | 0.1853 | 5 | yes |
| gzip | 6 | 317.314 | 3,090,847 | 0.1813 | 5 | yes |
| gzip | 7 | 439.903 | 3,024,822 | 0.1775 | 5 | yes |
| gzip | 8 | 1274.243 | 2,957,000 | 0.1735 | 5 | yes |
| gzip | 9 | 1335.492 | 2,956,204 | 0.1734 | 5 | yes |
| brotli | 0 | 45.824 | 4,175,487 | 0.2450 | 5 | yes |
| brotli | 1 | 68.753 | 3,718,326 | 0.2181 | 5 | yes |
| brotli | 2 | 117.236 | 3,424,305 | 0.2009 | 5 | yes |
| brotli | 3 | 137.060 | 3,367,979 | 0.1976 | 5 | yes |
| brotli | 4 | 224.138 | 3,295,114 | 0.1933 | 5 | yes |
| brotli | 5 | 345.600 | 2,938,968 | 0.1724 | 5 | yes |
| brotli | 6 | 435.705 | 2,906,886 | 0.1705 | 5 | yes |
| brotli | 7 | 603.584 | 2,880,272 | 0.1690 | 5 | yes |
| brotli | 8 | 768.958 | 2,860,897 | 0.1678 | 5 | yes |
| brotli | 9 | 1063.731 | 2,849,681 | 0.1672 | 5 | yes |
| brotli | 10 | 12116.848 | 2,442,746 | 0.1433 | 5 | yes |
| brotli | 11 | 29669.280 | 2,324,312 | 0.1364 | 5 | yes |
| zstd | 1 | 44.964 | 3,525,070 | 0.2068 | 5 | yes |
| zstd | 2 | 54.822 | 3,602,765 | 0.2114 | 5 | yes |
| zstd | 3 | 67.362 | 3,528,707 | 0.2070 | 5 | yes |
| zstd | 4 | 73.444 | 3,523,547 | 0.2067 | 5 | yes |
| zstd | 5 | 142.357 | 3,306,721 | 0.1940 | 5 | yes |
| zstd | 6 | 205.714 | 3,085,317 | 0.1810 | 5 | yes |
| zstd | 7 | 251.868 | 3,046,804 | 0.1787 | 5 | yes |
| zstd | 8 | 333.049 | 2,943,521 | 0.1727 | 5 | yes |
| zstd | 9 | 391.001 | 2,954,143 | 0.1733 | 5 | yes |
| zstd | 10 | 523.083 | 2,917,471 | 0.1712 | 5 | yes |
| zstd | 11 | 776.754 | 2,889,922 | 0.1695 | 5 | yes |
| zstd | 12 | 772.802 | 2,889,906 | 0.1695 | 5 | yes |
| zstd | 13 | 1151.758 | 2,866,998 | 0.1682 | 6 | yes |
| zstd | 14 | 1343.133 | 2,852,567 | 0.1674 | 5 | yes |
| zstd | 15 | 1777.842 | 2,848,994 | 0.1671 | 5 | yes |
| zstd | 16 | 3484.588 | 2,661,004 | 0.1561 | 5 | yes |
| zstd | 17 | 4475.897 | 2,568,659 | 0.1507 | 5 | yes |
| zstd | 18 | 6324.579 | 2,549,776 | 0.1496 | 5 | yes |
| zstd | 19 | 6828.218 | 2,542,941 | 0.1492 | 5 | yes |
| zstd | 20 | 6680.875 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 21 | 7036.771 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 22 | 7432.811 | 2,536,119 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.646 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.974 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.610 | 414,493 | 0.4821 | 8 | yes |
| gzip | 4 | 18.227 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 26.940 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 32.373 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 33.856 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.330 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.867 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.180 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.702 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.828 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.845 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.516 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 28.717 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 34.470 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 52.806 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 60.308 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 72.443 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 985.998 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2109.367 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.275 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.097 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.604 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.486 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.739 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.615 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 16.068 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.700 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 20.730 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.491 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 28.215 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 28.620 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 69.129 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 59.842 | 383,886 | 0.4465 | 7 | yes |
| zstd | 15 | 67.732 | 383,877 | 0.4465 | 6 | yes |
| zstd | 16 | 121.379 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 142.255 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 202.539 | 358,220 | 0.4167 | 9 | yes |
| zstd | 19 | 201.600 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 205.058 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 191.950 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 193.027 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.078 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.088 | 5,424 | 0.2784 | 25 | yes |
| gzip | 3 | 0.098 | 5,356 | 0.2749 | 25 | yes |
| gzip | 4 | 0.149 | 5,145 | 0.2641 | 25 | no |
| gzip | 5 | 0.164 | 4,896 | 0.2513 | 25 | no |
| gzip | 6 | 0.329 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.499 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.694 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.690 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.057 | 6,028 | 0.3094 | 14 | yes |
| brotli | 1 | 0.077 | 5,737 | 0.2945 | 14 | yes |
| brotli | 2 | 0.133 | 4,944 | 0.2538 | 5 | yes |
| brotli | 3 | 0.126 | 4,930 | 0.2531 | 16 | yes |
| brotli | 4 | 0.204 | 4,898 | 0.2514 | 22 | yes |
| brotli | 5 | 0.427 | 4,581 | 0.2352 | 10 | yes |
| brotli | 6 | 0.472 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.577 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.598 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 2.670 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.550 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.360 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.054 | 5,379 | 0.2761 | 20 | yes |
| zstd | 2 | 0.058 | 5,176 | 0.2657 | 10 | yes |
| zstd | 3 | 0.070 | 5,169 | 0.2653 | 10 | yes |
| zstd | 4 | 0.073 | 5,154 | 0.2646 | 13 | yes |
| zstd | 5 | 0.140 | 5,074 | 0.2605 | 9 | yes |
| zstd | 6 | 0.192 | 4,797 | 0.2463 | 20 | yes |
| zstd | 7 | 0.223 | 4,702 | 0.2414 | 25 | no |
| zstd | 8 | 0.263 | 4,696 | 0.2411 | 12 | yes |
| zstd | 9 | 0.592 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.482 | 4,691 | 0.2408 | 6 | yes |
| zstd | 11 | 0.587 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.661 | 4,687 | 0.2406 | 11 | yes |
| zstd | 13 | 0.977 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.727 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.849 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.532 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.542 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.540 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.967 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.003 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.041 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 4.999 | 4,348 | 0.2232 | 5 | yes |
