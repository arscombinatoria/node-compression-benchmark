# Node Compression Benchmark

Last updated: 2026-07-25T21:15:03.433Z

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
| gzip | 1 | 0.800 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.818 | 30,134 | 0.3827 | 7 | yes |
| gzip | 3 | 0.918 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.032 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.363 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.622 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 1.797 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.118 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.095 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.256 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.630 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.717 | 29,394 | 0.3733 | 6 | yes |
| brotli | 3 | 0.820 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.202 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 1.729 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 1.908 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.228 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.619 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.289 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 28.243 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 78.481 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.183 | 31,062 | 0.3944 | 21 | yes |
| zstd | 2 | 0.196 | 30,069 | 0.3818 | 18 | yes |
| zstd | 3 | 0.229 | 29,214 | 0.3710 | 25 | yes |
| zstd | 4 | 0.369 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.696 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 0.983 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.161 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.339 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.402 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.643 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 2.755 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 2.853 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 4.311 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 5.950 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 6.132 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 7.763 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 7.813 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 7.874 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 15.488 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 15.483 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 15.465 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 15.529 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 73.075 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 77.779 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 79.719 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 88.830 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 103.819 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 117.059 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 127.327 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 141.302 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 151.090 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 17.207 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 24.197 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 40.041 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 49.955 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 81.228 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 105.354 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 122.983 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 440.535 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 629.396 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 769.889 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6124.864 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 11542.904 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 15.423 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 18.648 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 28.675 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 35.339 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 54.169 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 65.359 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 73.830 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 88.757 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 97.575 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 125.256 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 188.908 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 198.085 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 511.225 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 537.970 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 671.068 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 855.780 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 1003.235 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1285.763 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1386.208 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1329.335 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1333.999 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1369.887 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 10.500 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 10.429 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 10.465 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 10.822 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 10.830 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 10.888 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 10.875 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 10.821 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 10.872 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.236 | 596,751 | 0.9970 | 6 | yes |
| brotli | 1 | 0.175 | 598,581 | 1.0000 | 18 | yes |
| brotli | 2 | 0.435 | 598,587 | 1.0000 | 6 | yes |
| brotli | 3 | 0.526 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 0.732 | 598,581 | 1.0000 | 17 | yes |
| brotli | 5 | 1.119 | 598,581 | 1.0000 | 25 | no |
| brotli | 6 | 1.180 | 598,581 | 1.0000 | 25 | no |
| brotli | 7 | 1.587 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 2.096 | 598,581 | 1.0000 | 5 | yes |
| brotli | 9 | 3.197 | 598,581 | 1.0000 | 12 | yes |
| brotli | 10 | 107.244 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 243.360 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.246 | 598,601 | 1.0000 | 5 | yes |
| zstd | 2 | 0.230 | 598,600 | 1.0000 | 9 | yes |
| zstd | 3 | 0.246 | 598,600 | 1.0000 | 6 | yes |
| zstd | 4 | 0.241 | 598,600 | 1.0000 | 25 | no |
| zstd | 5 | 0.376 | 598,600 | 1.0000 | 15 | yes |
| zstd | 6 | 0.367 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.410 | 598,600 | 1.0000 | 9 | yes |
| zstd | 8 | 0.393 | 598,600 | 1.0000 | 19 | yes |
| zstd | 9 | 0.521 | 598,600 | 1.0000 | 16 | yes |
| zstd | 10 | 0.517 | 598,600 | 1.0000 | 5 | yes |
| zstd | 11 | 0.501 | 598,600 | 1.0000 | 6 | yes |
| zstd | 12 | 0.501 | 598,600 | 1.0000 | 5 | yes |
| zstd | 13 | 3.114 | 595,998 | 0.9957 | 5 | yes |
| zstd | 14 | 3.169 | 595,998 | 0.9957 | 10 | yes |
| zstd | 15 | 3.345 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 22.170 | 595,898 | 0.9955 | 5 | yes |
| zstd | 17 | 29.787 | 595,889 | 0.9955 | 25 | no |
| zstd | 18 | 41.560 | 595,891 | 0.9955 | 24 | yes |
| zstd | 19 | 48.560 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 52.830 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 44.683 | 595,894 | 0.9955 | 14 | yes |
| zstd | 22 | 41.267 | 595,894 | 0.9955 | 25 | no |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,236 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.328 | 145,182 | 0.2961 | 5 | yes |
| gzip | 2 | 3.663 | 138,423 | 0.2824 | 5 | yes |
| gzip | 3 | 4.802 | 133,882 | 0.2731 | 5 | yes |
| gzip | 4 | 4.864 | 125,608 | 0.2562 | 5 | yes |
| gzip | 5 | 7.044 | 120,963 | 0.2467 | 5 | yes |
| gzip | 6 | 10.410 | 119,255 | 0.2433 | 5 | yes |
| gzip | 7 | 13.302 | 118,789 | 0.2423 | 5 | yes |
| gzip | 8 | 25.076 | 118,515 | 0.2418 | 5 | yes |
| gzip | 9 | 38.847 | 118,446 | 0.2416 | 5 | yes |
| brotli | 0 | 1.230 | 149,404 | 0.3048 | 5 | yes |
| brotli | 1 | 1.768 | 137,364 | 0.2802 | 5 | yes |
| brotli | 2 | 3.104 | 129,155 | 0.2635 | 5 | yes |
| brotli | 3 | 3.610 | 126,568 | 0.2582 | 5 | yes |
| brotli | 4 | 5.064 | 122,453 | 0.2498 | 5 | yes |
| brotli | 5 | 8.167 | 112,692 | 0.2299 | 5 | yes |
| brotli | 6 | 9.473 | 110,011 | 0.2244 | 5 | yes |
| brotli | 7 | 11.785 | 108,041 | 0.2204 | 5 | yes |
| brotli | 8 | 14.233 | 107,001 | 0.2183 | 5 | yes |
| brotli | 9 | 17.696 | 106,112 | 0.2165 | 5 | yes |
| brotli | 10 | 240.434 | 98,636 | 0.2012 | 5 | yes |
| brotli | 11 | 606.435 | 96,403 | 0.1966 | 5 | yes |
| zstd | 1 | 1.367 | 138,123 | 0.2817 | 5 | yes |
| zstd | 2 | 1.487 | 133,890 | 0.2731 | 5 | yes |
| zstd | 3 | 1.735 | 126,208 | 0.2574 | 5 | yes |
| zstd | 4 | 1.915 | 126,023 | 0.2571 | 5 | yes |
| zstd | 5 | 3.603 | 117,405 | 0.2395 | 5 | yes |
| zstd | 6 | 4.915 | 113,440 | 0.2314 | 5 | yes |
| zstd | 7 | 5.578 | 111,894 | 0.2282 | 5 | yes |
| zstd | 8 | 6.977 | 111,138 | 0.2267 | 5 | yes |
| zstd | 9 | 7.060 | 111,138 | 0.2267 | 5 | yes |
| zstd | 10 | 8.433 | 110,160 | 0.2247 | 5 | yes |
| zstd | 11 | 10.731 | 109,468 | 0.2233 | 5 | yes |
| zstd | 12 | 10.830 | 109,468 | 0.2233 | 5 | yes |
| zstd | 13 | 23.747 | 108,280 | 0.2209 | 5 | yes |
| zstd | 14 | 30.010 | 107,640 | 0.2196 | 5 | yes |
| zstd | 15 | 32.203 | 107,626 | 0.2195 | 5 | yes |
| zstd | 16 | 59.251 | 102,010 | 0.2081 | 5 | yes |
| zstd | 17 | 62.767 | 101,107 | 0.2062 | 5 | yes |
| zstd | 18 | 92.130 | 100,287 | 0.2046 | 5 | yes |
| zstd | 19 | 117.887 | 100,211 | 0.2044 | 5 | yes |
| zstd | 20 | 119.702 | 100,211 | 0.2044 | 5 | yes |
| zstd | 21 | 116.352 | 100,213 | 0.2044 | 5 | yes |
| zstd | 22 | 118.974 | 100,213 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.056 | 4,987 | 0.2897 | 17 | yes |
| gzip | 2 | 0.056 | 4,874 | 0.2831 | 21 | yes |
| gzip | 3 | 0.068 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.089 | 4,530 | 0.2631 | 25 | no |
| gzip | 5 | 0.107 | 4,441 | 0.2579 | 16 | yes |
| gzip | 6 | 0.135 | 4,425 | 0.2570 | 12 | yes |
| gzip | 7 | 0.163 | 4,418 | 0.2566 | 13 | yes |
| gzip | 8 | 0.337 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.325 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.041 | 5,235 | 0.3041 | 9 | yes |
| brotli | 1 | 0.054 | 5,134 | 0.2982 | 8 | yes |
| brotli | 2 | 0.073 | 4,741 | 0.2754 | 17 | yes |
| brotli | 3 | 0.091 | 4,650 | 0.2701 | 17 | yes |
| brotli | 4 | 0.156 | 4,555 | 0.2646 | 25 | no |
| brotli | 5 | 0.249 | 4,276 | 0.2484 | 13 | yes |
| brotli | 6 | 0.290 | 4,275 | 0.2483 | 6 | yes |
| brotli | 7 | 0.275 | 4,264 | 0.2477 | 21 | yes |
| brotli | 8 | 0.373 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.393 | 4,244 | 0.2465 | 9 | yes |
| brotli | 10 | 5.700 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 15.299 | 3,873 | 0.2250 | 5 | yes |
| zstd | 1 | 0.040 | 4,923 | 0.2859 | 10 | yes |
| zstd | 2 | 0.042 | 4,868 | 0.2827 | 7 | yes |
| zstd | 3 | 0.050 | 4,717 | 0.2740 | 9 | yes |
| zstd | 4 | 0.052 | 4,679 | 0.2718 | 7 | yes |
| zstd | 5 | 0.103 | 4,519 | 0.2625 | 7 | yes |
| zstd | 6 | 0.129 | 4,437 | 0.2577 | 12 | yes |
| zstd | 7 | 0.149 | 4,437 | 0.2577 | 9 | yes |
| zstd | 8 | 0.164 | 4,426 | 0.2571 | 17 | yes |
| zstd | 9 | 0.182 | 4,420 | 0.2567 | 18 | yes |
| zstd | 10 | 0.238 | 4,410 | 0.2561 | 11 | yes |
| zstd | 11 | 0.485 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.489 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.709 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.109 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.172 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 1.699 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 1.793 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 1.794 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 3.528 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 3.539 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 3.534 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 3.536 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.069 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.040 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.042 | 3,153 | 0.4403 | 9 | yes |
| gzip | 4 | 0.048 | 3,095 | 0.4322 | 8 | yes |
| gzip | 5 | 0.055 | 3,051 | 0.4261 | 7 | yes |
| gzip | 6 | 0.058 | 3,044 | 0.4251 | 5 | yes |
| gzip | 7 | 0.057 | 3,042 | 0.4248 | 8 | yes |
| gzip | 8 | 0.057 | 3,042 | 0.4248 | 5 | yes |
| gzip | 9 | 0.058 | 3,042 | 0.4248 | 6 | yes |
| brotli | 0 | 0.025 | 3,549 | 0.4956 | 7 | yes |
| brotli | 1 | 0.032 | 3,381 | 0.4721 | 15 | yes |
| brotli | 2 | 0.045 | 3,263 | 0.4557 | 17 | yes |
| brotli | 3 | 0.058 | 3,216 | 0.4491 | 16 | yes |
| brotli | 4 | 0.096 | 3,147 | 0.4395 | 20 | yes |
| brotli | 5 | 0.121 | 2,963 | 0.4138 | 22 | yes |
| brotli | 6 | 0.135 | 2,952 | 0.4122 | 10 | yes |
| brotli | 7 | 0.132 | 2,944 | 0.4111 | 21 | yes |
| brotli | 8 | 0.138 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 0.160 | 2,945 | 0.4113 | 21 | yes |
| brotli | 10 | 2.618 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 6.351 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.037 | 3,254 | 0.4544 | 5 | yes |
| zstd | 2 | 0.025 | 3,200 | 0.4469 | 13 | yes |
| zstd | 3 | 0.030 | 3,176 | 0.4435 | 18 | yes |
| zstd | 4 | 0.048 | 3,102 | 0.4332 | 12 | yes |
| zstd | 5 | 0.053 | 3,079 | 0.4300 | 17 | yes |
| zstd | 6 | 0.064 | 3,060 | 0.4273 | 9 | yes |
| zstd | 7 | 0.075 | 3,053 | 0.4263 | 9 | yes |
| zstd | 8 | 0.074 | 3,053 | 0.4263 | 5 | yes |
| zstd | 9 | 0.093 | 3,055 | 0.4266 | 19 | yes |
| zstd | 10 | 0.090 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.172 | 3,044 | 0.4251 | 20 | yes |
| zstd | 12 | 0.248 | 3,011 | 0.4205 | 25 | no |
| zstd | 13 | 0.447 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.437 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.439 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 0.831 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 0.805 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 0.804 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 0.800 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 0.784 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 0.815 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 0.792 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 165,599 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.613 | 67,507 | 0.4077 | 5 | yes |
| gzip | 2 | 1.745 | 65,886 | 0.3979 | 5 | yes |
| gzip | 3 | 2.001 | 64,874 | 0.3918 | 5 | yes |
| gzip | 4 | 2.198 | 62,487 | 0.3773 | 5 | yes |
| gzip | 5 | 3.031 | 60,848 | 0.3674 | 5 | yes |
| gzip | 6 | 3.812 | 60,570 | 0.3658 | 5 | yes |
| gzip | 7 | 4.188 | 60,527 | 0.3655 | 5 | yes |
| gzip | 8 | 4.530 | 60,509 | 0.3654 | 5 | yes |
| gzip | 9 | 4.546 | 60,509 | 0.3654 | 5 | yes |
| brotli | 0 | 0.539 | 71,790 | 0.4335 | 5 | yes |
| brotli | 1 | 0.782 | 68,843 | 0.4157 | 5 | yes |
| brotli | 2 | 1.358 | 63,505 | 0.3835 | 5 | yes |
| brotli | 3 | 1.611 | 62,945 | 0.3801 | 5 | yes |
| brotli | 4 | 2.345 | 61,772 | 0.3730 | 5 | yes |
| brotli | 5 | 3.583 | 58,412 | 0.3527 | 5 | yes |
| brotli | 6 | 4.029 | 58,008 | 0.3503 | 5 | yes |
| brotli | 7 | 5.092 | 57,755 | 0.3488 | 5 | yes |
| brotli | 8 | 5.650 | 57,667 | 0.3482 | 5 | yes |
| brotli | 9 | 6.512 | 57,589 | 0.3478 | 5 | yes |
| brotli | 10 | 81.632 | 54,874 | 0.3314 | 5 | yes |
| brotli | 11 | 201.121 | 53,818 | 0.3250 | 5 | yes |
| zstd | 1 | 0.467 | 66,843 | 0.4036 | 8 | yes |
| zstd | 2 | 0.615 | 63,844 | 0.3855 | 5 | yes |
| zstd | 3 | 0.808 | 63,294 | 0.3822 | 5 | yes |
| zstd | 4 | 1.434 | 61,396 | 0.3708 | 5 | yes |
| zstd | 5 | 1.603 | 60,869 | 0.3676 | 5 | yes |
| zstd | 6 | 1.937 | 59,979 | 0.3622 | 5 | yes |
| zstd | 7 | 2.327 | 59,158 | 0.3572 | 5 | yes |
| zstd | 8 | 2.917 | 58,671 | 0.3543 | 5 | yes |
| zstd | 9 | 3.291 | 58,430 | 0.3528 | 5 | yes |
| zstd | 10 | 3.970 | 58,290 | 0.3520 | 5 | yes |
| zstd | 11 | 7.057 | 57,983 | 0.3501 | 5 | yes |
| zstd | 12 | 7.248 | 57,969 | 0.3501 | 5 | yes |
| zstd | 13 | 12.244 | 56,943 | 0.3439 | 5 | yes |
| zstd | 14 | 14.966 | 56,556 | 0.3415 | 5 | yes |
| zstd | 15 | 15.247 | 56,517 | 0.3413 | 5 | yes |
| zstd | 16 | 19.746 | 56,330 | 0.3402 | 5 | yes |
| zstd | 17 | 19.342 | 56,330 | 0.3402 | 5 | yes |
| zstd | 18 | 33.329 | 56,259 | 0.3397 | 5 | yes |
| zstd | 19 | 33.842 | 56,259 | 0.3397 | 5 | yes |
| zstd | 20 | 34.093 | 56,259 | 0.3397 | 5 | yes |
| zstd | 21 | 33.062 | 56,259 | 0.3397 | 5 | yes |
| zstd | 22 | 34.057 | 56,259 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.658 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.718 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.836 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 0.907 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.215 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.569 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.881 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.584 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.578 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.166 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.252 | 29,754 | 0.4063 | 23 | yes |
| brotli | 2 | 0.562 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.663 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.062 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.522 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 1.671 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.040 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.298 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 2.699 | 24,870 | 0.3396 | 7 | yes |
| brotli | 10 | 33.152 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 78.526 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.159 | 28,919 | 0.3949 | 19 | yes |
| zstd | 2 | 0.172 | 28,008 | 0.3824 | 20 | yes |
| zstd | 3 | 0.207 | 27,463 | 0.3750 | 13 | yes |
| zstd | 4 | 0.261 | 27,100 | 0.3700 | 19 | yes |
| zstd | 5 | 0.620 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 0.855 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.020 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.123 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.281 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.524 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 2.565 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 2.693 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 4.130 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 5.862 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 5.944 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 7.794 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 7.733 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 7.759 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 14.697 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 14.886 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 14.754 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 14.762 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.556 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.624 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.738 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 0.853 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.180 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 1.826 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.434 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 7.062 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 7.083 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.150 | 27,781 | 0.3075 | 15 | yes |
| brotli | 1 | 0.262 | 25,973 | 0.2875 | 23 | yes |
| brotli | 2 | 0.573 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.688 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 0.997 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.464 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 1.705 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.027 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.475 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 3.081 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 29.144 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 83.449 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.172 | 24,608 | 0.2724 | 23 | yes |
| zstd | 2 | 0.180 | 24,387 | 0.2700 | 12 | yes |
| zstd | 3 | 0.210 | 24,157 | 0.2674 | 14 | yes |
| zstd | 4 | 0.251 | 24,076 | 0.2665 | 16 | yes |
| zstd | 5 | 0.606 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 0.880 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.078 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.240 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.512 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.026 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 2.962 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 3.942 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 4.754 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 6.485 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 7.812 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 10.710 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 14.374 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 21.999 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 22.093 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 25.813 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 38.231 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 44.357 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.910 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 0.979 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.141 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.354 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 1.774 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.492 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.120 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.281 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.341 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.253 | 43,268 | 0.1864 | 13 | yes |
| brotli | 1 | 0.509 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 0.955 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.141 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.647 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.390 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 2.625 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 2.989 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 3.519 | 26,813 | 0.1155 | 9 | yes |
| brotli | 9 | 4.257 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 80.700 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 238.526 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.297 | 35,549 | 0.1532 | 24 | yes |
| zstd | 2 | 0.388 | 34,301 | 0.1478 | 8 | yes |
| zstd | 3 | 0.338 | 34,393 | 0.1482 | 22 | yes |
| zstd | 4 | 1.128 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.324 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.548 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 1.719 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.119 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 2.501 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.111 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 6.356 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 7.729 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 14.454 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 17.610 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 22.158 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 38.526 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 42.523 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 58.370 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 64.560 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 66.775 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 66.736 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 67.282 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,045,192 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 80.493 | 3,776,518 | 0.2216 | 5 | yes |
| gzip | 2 | 88.081 | 3,627,753 | 0.2128 | 5 | yes |
| gzip | 3 | 109.019 | 3,507,453 | 0.2058 | 5 | yes |
| gzip | 4 | 120.613 | 3,379,888 | 0.1983 | 5 | yes |
| gzip | 5 | 159.477 | 3,159,182 | 0.1853 | 5 | yes |
| gzip | 6 | 246.323 | 3,090,847 | 0.1813 | 5 | yes |
| gzip | 7 | 341.366 | 3,024,822 | 0.1775 | 5 | yes |
| gzip | 8 | 986.665 | 2,957,000 | 0.1735 | 5 | yes |
| gzip | 9 | 1036.303 | 2,956,204 | 0.1734 | 5 | yes |
| brotli | 0 | 35.822 | 4,175,487 | 0.2450 | 5 | yes |
| brotli | 1 | 53.882 | 3,718,326 | 0.2181 | 5 | yes |
| brotli | 2 | 92.809 | 3,424,305 | 0.2009 | 5 | yes |
| brotli | 3 | 107.733 | 3,367,979 | 0.1976 | 5 | yes |
| brotli | 4 | 194.494 | 3,295,114 | 0.1933 | 5 | yes |
| brotli | 5 | 276.217 | 2,938,968 | 0.1724 | 5 | yes |
| brotli | 6 | 387.894 | 2,906,886 | 0.1705 | 5 | yes |
| brotli | 7 | 444.520 | 2,880,272 | 0.1690 | 5 | yes |
| brotli | 8 | 630.186 | 2,860,897 | 0.1678 | 5 | yes |
| brotli | 9 | 813.746 | 2,849,681 | 0.1672 | 5 | yes |
| brotli | 10 | 9195.795 | 2,442,746 | 0.1433 | 5 | yes |
| brotli | 11 | 22823.023 | 2,324,312 | 0.1364 | 5 | yes |
| zstd | 1 | 35.007 | 3,525,070 | 0.2068 | 5 | yes |
| zstd | 2 | 44.483 | 3,602,765 | 0.2114 | 5 | yes |
| zstd | 3 | 53.226 | 3,528,707 | 0.2070 | 5 | yes |
| zstd | 4 | 57.319 | 3,523,547 | 0.2067 | 5 | yes |
| zstd | 5 | 108.961 | 3,306,721 | 0.1940 | 5 | yes |
| zstd | 6 | 156.822 | 3,085,317 | 0.1810 | 5 | yes |
| zstd | 7 | 181.389 | 3,046,804 | 0.1787 | 5 | yes |
| zstd | 8 | 239.277 | 2,943,521 | 0.1727 | 5 | yes |
| zstd | 9 | 253.767 | 2,954,143 | 0.1733 | 5 | yes |
| zstd | 10 | 351.840 | 2,917,471 | 0.1712 | 5 | yes |
| zstd | 11 | 514.317 | 2,889,922 | 0.1695 | 5 | yes |
| zstd | 12 | 563.999 | 2,889,906 | 0.1695 | 5 | yes |
| zstd | 13 | 789.907 | 2,866,998 | 0.1682 | 5 | yes |
| zstd | 14 | 919.227 | 2,852,567 | 0.1674 | 7 | yes |
| zstd | 15 | 1280.660 | 2,848,994 | 0.1671 | 5 | yes |
| zstd | 16 | 2485.538 | 2,661,004 | 0.1561 | 5 | yes |
| zstd | 17 | 3294.519 | 2,568,659 | 0.1507 | 5 | yes |
| zstd | 18 | 4792.304 | 2,549,776 | 0.1496 | 5 | yes |
| zstd | 19 | 5390.357 | 2,542,941 | 0.1492 | 5 | yes |
| zstd | 20 | 5467.004 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 21 | 5662.649 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 22 | 5583.204 | 2,536,119 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 10.591 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 11.555 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 13.620 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 14.095 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 20.905 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 24.684 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 26.191 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 28.884 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 28.927 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.217 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 4.413 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 8.113 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 9.894 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 13.494 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 21.522 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 25.994 | 377,100 | 0.4386 | 6 | yes |
| brotli | 7 | 37.465 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 44.361 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 55.738 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 756.432 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1624.273 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 2.508 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.176 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 4.343 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 5.022 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 8.306 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 11.279 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 12.134 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 14.891 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 15.017 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 17.153 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 21.107 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 20.991 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 42.915 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 44.953 | 383,886 | 0.4465 | 9 | yes |
| zstd | 15 | 45.388 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 77.311 | 369,550 | 0.4298 | 9 | yes |
| zstd | 17 | 97.153 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 128.507 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 136.910 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 138.313 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 137.946 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 137.028 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.060 | 5,565 | 0.2841 | 21 | yes |
| gzip | 2 | 0.068 | 5,486 | 0.2801 | 25 | no |
| gzip | 3 | 0.078 | 5,419 | 0.2767 | 25 | no |
| gzip | 4 | 0.100 | 5,202 | 0.2656 | 20 | yes |
| gzip | 5 | 0.125 | 4,958 | 0.2531 | 25 | no |
| gzip | 6 | 0.178 | 4,947 | 0.2526 | 25 | no |
| gzip | 7 | 0.384 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.546 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.529 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.044 | 6,082 | 0.3105 | 10 | yes |
| brotli | 1 | 0.063 | 5,794 | 0.2958 | 9 | yes |
| brotli | 2 | 0.082 | 5,002 | 0.2554 | 12 | yes |
| brotli | 3 | 0.102 | 4,986 | 0.2546 | 25 | no |
| brotli | 4 | 0.159 | 4,954 | 0.2529 | 24 | yes |
| brotli | 5 | 0.308 | 4,641 | 0.2370 | 11 | yes |
| brotli | 6 | 0.342 | 4,630 | 0.2364 | 18 | yes |
| brotli | 7 | 0.459 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.485 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.597 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 5.902 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 17.534 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.043 | 5,441 | 0.2778 | 19 | yes |
| zstd | 2 | 0.046 | 5,242 | 0.2676 | 20 | yes |
| zstd | 3 | 0.056 | 5,234 | 0.2672 | 17 | yes |
| zstd | 4 | 0.058 | 5,212 | 0.2661 | 11 | yes |
| zstd | 5 | 0.109 | 5,133 | 0.2621 | 10 | yes |
| zstd | 6 | 0.157 | 4,853 | 0.2478 | 15 | yes |
| zstd | 7 | 0.172 | 4,757 | 0.2429 | 10 | yes |
| zstd | 8 | 0.201 | 4,750 | 0.2425 | 18 | yes |
| zstd | 9 | 0.257 | 4,744 | 0.2422 | 12 | yes |
| zstd | 10 | 0.357 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.466 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.474 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.773 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.352 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.427 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 1.991 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 1.986 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 1.976 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 3.883 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 3.884 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 3.895 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 3.946 | 4,415 | 0.2254 | 5 | yes |
