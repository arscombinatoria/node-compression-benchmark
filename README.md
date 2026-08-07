# Node Compression Benchmark

Last updated: 2026-08-07T22:44:31.710Z

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
| gzip | 1 | 1.036 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.094 | 30,134 | 0.3827 | 7 | yes |
| gzip | 3 | 1.188 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.345 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.774 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.115 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.326 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.731 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.723 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.321 | 33,111 | 0.4205 | 16 | yes |
| brotli | 1 | 0.800 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.839 | 29,394 | 0.3733 | 5 | yes |
| brotli | 3 | 0.994 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.405 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.015 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.228 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.967 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.887 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.928 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 35.295 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 100.581 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.237 | 31,062 | 0.3944 | 23 | yes |
| zstd | 2 | 0.271 | 30,069 | 0.3818 | 25 | no |
| zstd | 3 | 0.297 | 29,214 | 0.3710 | 25 | yes |
| zstd | 4 | 0.502 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.925 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.248 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.504 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.654 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.831 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.092 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.412 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.579 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.384 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.613 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.707 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.076 | 26,336 | 0.3344 | 6 | yes |
| zstd | 17 | 10.041 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.021 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.585 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.603 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.682 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.630 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.840 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 99.804 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 102.867 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 113.867 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 133.245 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 150.360 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 161.506 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 180.949 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 194.626 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.440 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.663 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 51.540 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.152 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 91.076 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 126.990 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 151.182 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 446.604 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 630.859 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 831.713 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 7199.959 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13949.058 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.758 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.893 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 36.475 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 45.267 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 68.224 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 81.336 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 87.998 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 102.404 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 105.888 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 134.965 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 184.967 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 213.189 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 497.684 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 564.400 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 640.001 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 916.083 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 1041.214 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1376.941 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1389.091 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1388.155 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1379.714 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1461.913 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.374 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 13.387 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 13.361 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 13.894 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 13.903 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 13.898 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 13.925 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 13.907 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 13.936 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.240 | 596,751 | 0.9970 | 5 | yes |
| brotli | 1 | 0.220 | 598,581 | 1.0000 | 6 | yes |
| brotli | 2 | 0.558 | 598,587 | 1.0000 | 5 | yes |
| brotli | 3 | 0.673 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 0.877 | 598,581 | 1.0000 | 5 | yes |
| brotli | 5 | 1.464 | 598,581 | 1.0000 | 25 | no |
| brotli | 6 | 1.384 | 598,581 | 1.0000 | 25 | no |
| brotli | 7 | 1.905 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 1.999 | 598,581 | 1.0000 | 8 | yes |
| brotli | 9 | 3.247 | 598,581 | 1.0000 | 5 | yes |
| brotli | 10 | 115.313 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 283.661 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.285 | 598,601 | 1.0000 | 5 | yes |
| zstd | 2 | 0.260 | 598,600 | 1.0000 | 11 | yes |
| zstd | 3 | 0.304 | 598,600 | 1.0000 | 7 | yes |
| zstd | 4 | 0.340 | 598,600 | 1.0000 | 25 | no |
| zstd | 5 | 0.458 | 598,600 | 1.0000 | 5 | yes |
| zstd | 6 | 0.460 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.500 | 598,600 | 1.0000 | 5 | yes |
| zstd | 8 | 0.513 | 598,600 | 1.0000 | 5 | yes |
| zstd | 9 | 0.632 | 598,600 | 1.0000 | 8 | yes |
| zstd | 10 | 0.625 | 598,600 | 1.0000 | 5 | yes |
| zstd | 11 | 0.641 | 598,600 | 1.0000 | 20 | yes |
| zstd | 12 | 0.642 | 598,600 | 1.0000 | 5 | yes |
| zstd | 13 | 2.633 | 595,998 | 0.9957 | 6 | yes |
| zstd | 14 | 3.073 | 595,998 | 0.9957 | 6 | yes |
| zstd | 15 | 2.537 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 17.034 | 595,898 | 0.9955 | 23 | yes |
| zstd | 17 | 16.145 | 595,889 | 0.9955 | 9 | yes |
| zstd | 18 | 24.450 | 595,891 | 0.9955 | 11 | yes |
| zstd | 19 | 26.703 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 27.803 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 27.911 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 27.435 | 595,894 | 0.9955 | 8 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,802 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.286 | 145,459 | 0.2964 | 5 | yes |
| gzip | 2 | 4.668 | 138,655 | 0.2825 | 5 | yes |
| gzip | 3 | 6.145 | 134,120 | 0.2733 | 5 | yes |
| gzip | 4 | 6.269 | 125,846 | 0.2564 | 5 | yes |
| gzip | 5 | 9.050 | 121,168 | 0.2469 | 5 | yes |
| gzip | 6 | 13.412 | 119,464 | 0.2434 | 5 | yes |
| gzip | 7 | 17.153 | 118,991 | 0.2424 | 5 | yes |
| gzip | 8 | 32.495 | 118,721 | 0.2419 | 5 | yes |
| gzip | 9 | 50.089 | 118,656 | 0.2418 | 5 | yes |
| brotli | 0 | 1.558 | 149,780 | 0.3052 | 5 | yes |
| brotli | 1 | 2.280 | 137,594 | 0.2803 | 5 | yes |
| brotli | 2 | 3.999 | 129,396 | 0.2636 | 5 | yes |
| brotli | 3 | 4.696 | 126,773 | 0.2583 | 5 | yes |
| brotli | 4 | 6.669 | 122,637 | 0.2499 | 5 | yes |
| brotli | 5 | 10.024 | 112,852 | 0.2299 | 5 | yes |
| brotli | 6 | 11.763 | 110,205 | 0.2245 | 5 | yes |
| brotli | 7 | 14.490 | 108,216 | 0.2205 | 5 | yes |
| brotli | 8 | 17.526 | 107,187 | 0.2184 | 5 | yes |
| brotli | 9 | 22.716 | 106,299 | 0.2166 | 5 | yes |
| brotli | 10 | 299.399 | 98,781 | 0.2013 | 5 | yes |
| brotli | 11 | 755.379 | 96,661 | 0.1969 | 5 | yes |
| zstd | 1 | 1.790 | 138,381 | 0.2819 | 5 | yes |
| zstd | 2 | 1.878 | 134,062 | 0.2731 | 5 | yes |
| zstd | 3 | 2.324 | 126,400 | 0.2575 | 5 | yes |
| zstd | 4 | 2.419 | 126,225 | 0.2572 | 5 | yes |
| zstd | 5 | 4.558 | 117,610 | 0.2396 | 5 | yes |
| zstd | 6 | 6.282 | 113,616 | 0.2315 | 5 | yes |
| zstd | 7 | 7.720 | 112,064 | 0.2283 | 5 | yes |
| zstd | 8 | 9.476 | 111,256 | 0.2267 | 5 | yes |
| zstd | 9 | 9.421 | 111,256 | 0.2267 | 5 | yes |
| zstd | 10 | 11.377 | 110,241 | 0.2246 | 5 | yes |
| zstd | 11 | 14.116 | 109,605 | 0.2233 | 5 | yes |
| zstd | 12 | 14.038 | 109,605 | 0.2233 | 5 | yes |
| zstd | 13 | 27.275 | 108,404 | 0.2209 | 5 | yes |
| zstd | 14 | 32.539 | 107,840 | 0.2197 | 5 | yes |
| zstd | 15 | 36.382 | 107,780 | 0.2196 | 5 | yes |
| zstd | 16 | 67.742 | 102,193 | 0.2082 | 5 | yes |
| zstd | 17 | 75.992 | 101,271 | 0.2063 | 5 | yes |
| zstd | 18 | 105.884 | 100,490 | 0.2047 | 5 | yes |
| zstd | 19 | 136.792 | 100,397 | 0.2046 | 5 | yes |
| zstd | 20 | 137.592 | 100,397 | 0.2046 | 5 | yes |
| zstd | 21 | 136.452 | 100,396 | 0.2046 | 5 | yes |
| zstd | 22 | 137.105 | 100,396 | 0.2046 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.074 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.073 | 4,874 | 0.2831 | 17 | yes |
| gzip | 3 | 0.085 | 4,806 | 0.2791 | 23 | yes |
| gzip | 4 | 0.123 | 4,530 | 0.2631 | 25 | no |
| gzip | 5 | 0.135 | 4,441 | 0.2579 | 19 | yes |
| gzip | 6 | 0.187 | 4,425 | 0.2570 | 14 | yes |
| gzip | 7 | 0.209 | 4,418 | 0.2566 | 13 | yes |
| gzip | 8 | 0.371 | 4,419 | 0.2567 | 20 | yes |
| gzip | 9 | 0.423 | 4,419 | 0.2567 | 10 | yes |
| brotli | 0 | 0.054 | 5,235 | 0.3041 | 11 | yes |
| brotli | 1 | 0.068 | 5,134 | 0.2982 | 25 | no |
| brotli | 2 | 0.095 | 4,741 | 0.2754 | 16 | yes |
| brotli | 3 | 0.114 | 4,650 | 0.2701 | 18 | yes |
| brotli | 4 | 0.192 | 4,555 | 0.2646 | 17 | yes |
| brotli | 5 | 0.278 | 4,276 | 0.2484 | 24 | yes |
| brotli | 6 | 0.333 | 4,275 | 0.2483 | 25 | no |
| brotli | 7 | 0.390 | 4,264 | 0.2477 | 16 | yes |
| brotli | 8 | 0.399 | 4,257 | 0.2473 | 11 | yes |
| brotli | 9 | 0.514 | 4,244 | 0.2465 | 9 | yes |
| brotli | 10 | 7.127 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.365 | 3,873 | 0.2250 | 5 | yes |
| zstd | 1 | 0.051 | 4,923 | 0.2859 | 25 | yes |
| zstd | 2 | 0.056 | 4,868 | 0.2827 | 25 | no |
| zstd | 3 | 0.065 | 4,717 | 0.2740 | 9 | yes |
| zstd | 4 | 0.069 | 4,679 | 0.2718 | 11 | yes |
| zstd | 5 | 0.133 | 4,519 | 0.2625 | 8 | yes |
| zstd | 6 | 0.182 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.191 | 4,437 | 0.2577 | 9 | yes |
| zstd | 8 | 0.206 | 4,426 | 0.2571 | 9 | yes |
| zstd | 9 | 0.239 | 4,420 | 0.2567 | 19 | yes |
| zstd | 10 | 0.333 | 4,410 | 0.2561 | 25 | no |
| zstd | 11 | 0.638 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.636 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.918 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.411 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.507 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.169 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.297 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.298 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.517 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.498 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.510 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.548 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.049 | 3,220 | 0.4497 | 20 | yes |
| gzip | 2 | 0.049 | 3,182 | 0.4444 | 23 | yes |
| gzip | 3 | 0.050 | 3,153 | 0.4403 | 16 | yes |
| gzip | 4 | 0.060 | 3,095 | 0.4322 | 21 | yes |
| gzip | 5 | 0.067 | 3,051 | 0.4261 | 15 | yes |
| gzip | 6 | 0.070 | 3,044 | 0.4251 | 10 | yes |
| gzip | 7 | 0.081 | 3,042 | 0.4248 | 5 | yes |
| gzip | 8 | 0.074 | 3,042 | 0.4248 | 20 | yes |
| gzip | 9 | 0.074 | 3,042 | 0.4248 | 9 | yes |
| brotli | 0 | 0.031 | 3,549 | 0.4956 | 9 | yes |
| brotli | 1 | 0.041 | 3,381 | 0.4721 | 9 | yes |
| brotli | 2 | 0.057 | 3,263 | 0.4557 | 25 | yes |
| brotli | 3 | 0.073 | 3,216 | 0.4491 | 20 | yes |
| brotli | 4 | 0.123 | 3,147 | 0.4395 | 13 | yes |
| brotli | 5 | 0.155 | 2,963 | 0.4138 | 20 | yes |
| brotli | 6 | 0.173 | 2,952 | 0.4122 | 25 | no |
| brotli | 7 | 0.170 | 2,944 | 0.4111 | 21 | yes |
| brotli | 8 | 0.180 | 2,944 | 0.4111 | 18 | yes |
| brotli | 9 | 0.212 | 2,945 | 0.4113 | 25 | yes |
| brotli | 10 | 3.291 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.071 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.031 | 3,254 | 0.4544 | 25 | no |
| zstd | 2 | 0.032 | 3,200 | 0.4469 | 25 | no |
| zstd | 3 | 0.055 | 3,176 | 0.4435 | 5 | yes |
| zstd | 4 | 0.066 | 3,102 | 0.4332 | 23 | yes |
| zstd | 5 | 0.073 | 3,079 | 0.4300 | 8 | yes |
| zstd | 6 | 0.094 | 3,060 | 0.4273 | 9 | yes |
| zstd | 7 | 0.105 | 3,053 | 0.4263 | 5 | yes |
| zstd | 8 | 0.107 | 3,053 | 0.4263 | 5 | yes |
| zstd | 9 | 0.134 | 3,055 | 0.4266 | 25 | no |
| zstd | 10 | 0.115 | 3,055 | 0.4266 | 6 | yes |
| zstd | 11 | 0.223 | 3,044 | 0.4251 | 25 | no |
| zstd | 12 | 0.433 | 3,011 | 0.4205 | 7 | yes |
| zstd | 13 | 0.570 | 2,998 | 0.4187 | 6 | yes |
| zstd | 14 | 0.580 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.570 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.116 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.062 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.072 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.033 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.084 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.050 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.029 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 165,599 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.119 | 67,507 | 0.4077 | 5 | yes |
| gzip | 2 | 2.267 | 65,886 | 0.3979 | 5 | yes |
| gzip | 3 | 2.588 | 64,874 | 0.3918 | 5 | yes |
| gzip | 4 | 2.843 | 62,487 | 0.3773 | 5 | yes |
| gzip | 5 | 3.910 | 60,848 | 0.3674 | 5 | yes |
| gzip | 6 | 4.914 | 60,570 | 0.3658 | 5 | yes |
| gzip | 7 | 5.375 | 60,527 | 0.3655 | 5 | yes |
| gzip | 8 | 5.804 | 60,509 | 0.3654 | 5 | yes |
| gzip | 9 | 5.832 | 60,509 | 0.3654 | 5 | yes |
| brotli | 0 | 0.667 | 71,790 | 0.4335 | 10 | yes |
| brotli | 1 | 0.955 | 68,843 | 0.4157 | 5 | yes |
| brotli | 2 | 1.756 | 63,505 | 0.3835 | 5 | yes |
| brotli | 3 | 2.072 | 62,945 | 0.3801 | 5 | yes |
| brotli | 4 | 3.061 | 61,772 | 0.3730 | 5 | yes |
| brotli | 5 | 4.496 | 58,412 | 0.3527 | 5 | yes |
| brotli | 6 | 5.175 | 58,008 | 0.3503 | 5 | yes |
| brotli | 7 | 6.427 | 57,755 | 0.3488 | 5 | yes |
| brotli | 8 | 6.997 | 57,667 | 0.3482 | 5 | yes |
| brotli | 9 | 8.113 | 57,589 | 0.3478 | 5 | yes |
| brotli | 10 | 102.724 | 54,874 | 0.3314 | 5 | yes |
| brotli | 11 | 258.075 | 53,818 | 0.3250 | 5 | yes |
| zstd | 1 | 0.615 | 66,843 | 0.4036 | 5 | yes |
| zstd | 2 | 0.802 | 63,844 | 0.3855 | 5 | yes |
| zstd | 3 | 1.005 | 63,294 | 0.3822 | 5 | yes |
| zstd | 4 | 1.852 | 61,396 | 0.3708 | 5 | yes |
| zstd | 5 | 2.030 | 60,869 | 0.3676 | 5 | yes |
| zstd | 6 | 2.485 | 59,979 | 0.3622 | 5 | yes |
| zstd | 7 | 2.994 | 59,158 | 0.3572 | 5 | yes |
| zstd | 8 | 3.736 | 58,671 | 0.3543 | 5 | yes |
| zstd | 9 | 4.221 | 58,430 | 0.3528 | 5 | yes |
| zstd | 10 | 5.118 | 58,290 | 0.3520 | 5 | yes |
| zstd | 11 | 8.445 | 57,983 | 0.3501 | 5 | yes |
| zstd | 12 | 9.058 | 57,969 | 0.3501 | 5 | yes |
| zstd | 13 | 14.804 | 56,943 | 0.3439 | 5 | yes |
| zstd | 14 | 17.512 | 56,556 | 0.3415 | 5 | yes |
| zstd | 15 | 17.656 | 56,517 | 0.3413 | 5 | yes |
| zstd | 16 | 22.966 | 56,330 | 0.3402 | 5 | yes |
| zstd | 17 | 22.960 | 56,330 | 0.3402 | 5 | yes |
| zstd | 18 | 39.454 | 56,259 | 0.3397 | 5 | yes |
| zstd | 19 | 39.520 | 56,259 | 0.3397 | 5 | yes |
| zstd | 20 | 39.536 | 56,259 | 0.3397 | 5 | yes |
| zstd | 21 | 39.714 | 56,259 | 0.3397 | 5 | yes |
| zstd | 22 | 40.397 | 56,259 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.858 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.922 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.083 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.179 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.568 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.028 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.430 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.301 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.340 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.215 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.327 | 29,754 | 0.4063 | 23 | yes |
| brotli | 2 | 0.738 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.883 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.318 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.944 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.149 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.541 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.784 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.279 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 41.621 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 100.297 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.198 | 28,919 | 0.3949 | 13 | yes |
| zstd | 2 | 0.229 | 28,008 | 0.3824 | 9 | yes |
| zstd | 3 | 0.265 | 27,463 | 0.3750 | 20 | yes |
| zstd | 4 | 0.317 | 27,100 | 0.3700 | 18 | yes |
| zstd | 5 | 0.790 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.094 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.319 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.459 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.645 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.962 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.272 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.307 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.259 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.301 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.501 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.774 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.705 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.880 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.595 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.606 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.505 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.555 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.698 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.820 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.959 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 1.093 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.526 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 2.347 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 3.137 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 9.108 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 9.179 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.237 | 27,781 | 0.3075 | 25 | no |
| brotli | 1 | 0.452 | 25,973 | 0.2875 | 7 | yes |
| brotli | 2 | 0.756 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.880 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.297 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.875 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 2.122 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.579 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 3.024 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 3.845 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 36.739 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 107.132 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.224 | 24,608 | 0.2724 | 10 | yes |
| zstd | 2 | 0.240 | 24,387 | 0.2700 | 20 | yes |
| zstd | 3 | 0.275 | 24,157 | 0.2674 | 15 | yes |
| zstd | 4 | 0.302 | 24,076 | 0.2665 | 17 | yes |
| zstd | 5 | 0.802 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 1.134 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.383 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.592 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.947 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.599 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.677 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.970 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 5.942 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 8.190 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 9.716 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 13.438 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 17.999 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 27.653 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 27.868 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 32.301 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 47.510 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 55.378 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.168 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.251 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.474 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.753 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.273 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.164 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.926 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.329 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.412 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.328 | 43,268 | 0.1864 | 13 | yes |
| brotli | 1 | 0.653 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.246 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.457 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.109 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.018 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.378 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.835 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.345 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.312 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 101.547 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 304.604 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.440 | 35,549 | 0.1532 | 9 | yes |
| zstd | 2 | 0.509 | 34,301 | 0.1478 | 6 | yes |
| zstd | 3 | 0.560 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.436 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.690 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.958 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.189 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.717 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.200 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.986 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.089 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.921 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.288 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.232 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 27.922 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.659 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.466 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 73.414 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 81.316 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 84.085 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 84.166 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 84.636 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,088,846 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 103.621 | 3,786,228 | 0.2216 | 5 | yes |
| gzip | 2 | 113.672 | 3,637,199 | 0.2128 | 5 | yes |
| gzip | 3 | 141.379 | 3,517,128 | 0.2058 | 5 | yes |
| gzip | 4 | 155.726 | 3,388,581 | 0.1983 | 5 | yes |
| gzip | 5 | 213.177 | 3,167,259 | 0.1853 | 5 | yes |
| gzip | 6 | 319.057 | 3,098,703 | 0.1813 | 5 | yes |
| gzip | 7 | 442.049 | 3,032,397 | 0.1774 | 5 | yes |
| gzip | 8 | 1276.602 | 2,964,487 | 0.1735 | 5 | yes |
| gzip | 9 | 1343.973 | 2,963,688 | 0.1734 | 5 | yes |
| brotli | 0 | 45.337 | 4,195,167 | 0.2455 | 5 | yes |
| brotli | 1 | 67.011 | 3,728,851 | 0.2182 | 5 | yes |
| brotli | 2 | 114.935 | 3,433,235 | 0.2009 | 5 | yes |
| brotli | 3 | 136.911 | 3,377,124 | 0.1976 | 5 | yes |
| brotli | 4 | 198.258 | 3,303,878 | 0.1933 | 5 | yes |
| brotli | 5 | 314.137 | 2,946,664 | 0.1724 | 5 | yes |
| brotli | 6 | 386.909 | 2,915,320 | 0.1706 | 5 | yes |
| brotli | 7 | 581.785 | 2,887,582 | 0.1690 | 5 | yes |
| brotli | 8 | 771.635 | 2,868,532 | 0.1679 | 5 | yes |
| brotli | 9 | 1040.343 | 2,857,411 | 0.1672 | 5 | yes |
| brotli | 10 | 12010.936 | 2,448,858 | 0.1433 | 5 | yes |
| brotli | 11 | 28988.879 | 2,330,104 | 0.1364 | 5 | yes |
| zstd | 1 | 44.868 | 3,534,613 | 0.2068 | 5 | yes |
| zstd | 2 | 55.186 | 3,612,321 | 0.2114 | 5 | yes |
| zstd | 3 | 68.328 | 3,537,742 | 0.2070 | 5 | yes |
| zstd | 4 | 73.263 | 3,532,781 | 0.2067 | 5 | yes |
| zstd | 5 | 140.020 | 3,315,447 | 0.1940 | 5 | yes |
| zstd | 6 | 202.230 | 3,093,505 | 0.1810 | 5 | yes |
| zstd | 7 | 233.162 | 3,054,755 | 0.1788 | 5 | yes |
| zstd | 8 | 303.577 | 2,951,480 | 0.1727 | 5 | yes |
| zstd | 9 | 323.609 | 2,962,142 | 0.1733 | 5 | yes |
| zstd | 10 | 443.982 | 2,925,109 | 0.1712 | 5 | yes |
| zstd | 11 | 656.329 | 2,897,547 | 0.1696 | 5 | yes |
| zstd | 12 | 706.540 | 2,897,453 | 0.1696 | 5 | yes |
| zstd | 13 | 1011.734 | 2,874,535 | 0.1682 | 5 | yes |
| zstd | 14 | 1230.584 | 2,860,101 | 0.1674 | 5 | yes |
| zstd | 15 | 1571.074 | 2,856,465 | 0.1672 | 5 | yes |
| zstd | 16 | 3267.176 | 2,667,907 | 0.1561 | 5 | yes |
| zstd | 17 | 4257.251 | 2,576,011 | 0.1507 | 5 | yes |
| zstd | 18 | 6497.173 | 2,556,665 | 0.1496 | 5 | yes |
| zstd | 19 | 6745.160 | 2,549,586 | 0.1492 | 5 | yes |
| zstd | 20 | 6966.984 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 21 | 6874.522 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 22 | 7126.181 | 2,543,154 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.613 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.809 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.515 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.209 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 26.707 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 31.751 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 33.890 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.205 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.380 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.157 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.674 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.503 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.838 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.604 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.751 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.944 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 46.759 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 57.362 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 70.780 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 976.824 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2089.327 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.238 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.094 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.543 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.427 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.734 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.567 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.683 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.262 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.833 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.397 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 27.206 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 27.353 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 63.328 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 62.042 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 61.235 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 102.547 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 125.478 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 160.467 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 178.220 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 178.223 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 180.887 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 183.650 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.085 | 5,565 | 0.2841 | 25 | no |
| gzip | 2 | 0.082 | 5,486 | 0.2801 | 20 | yes |
| gzip | 3 | 0.100 | 5,419 | 0.2767 | 24 | yes |
| gzip | 4 | 0.127 | 5,202 | 0.2656 | 21 | yes |
| gzip | 5 | 0.165 | 4,958 | 0.2531 | 25 | no |
| gzip | 6 | 0.359 | 4,947 | 0.2526 | 5 | yes |
| gzip | 7 | 0.565 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.700 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.684 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.058 | 6,082 | 0.3105 | 10 | yes |
| brotli | 1 | 0.078 | 5,794 | 0.2958 | 11 | yes |
| brotli | 2 | 0.107 | 5,002 | 0.2554 | 18 | yes |
| brotli | 3 | 0.175 | 4,986 | 0.2546 | 6 | yes |
| brotli | 4 | 0.211 | 4,954 | 0.2529 | 19 | yes |
| brotli | 5 | 0.397 | 4,641 | 0.2370 | 17 | yes |
| brotli | 6 | 0.476 | 4,630 | 0.2364 | 6 | yes |
| brotli | 7 | 0.576 | 4,622 | 0.2360 | 6 | yes |
| brotli | 8 | 0.610 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 2.469 | 4,612 | 0.2355 | 6 | yes |
| brotli | 10 | 7.586 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 22.599 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.056 | 5,441 | 0.2778 | 13 | yes |
| zstd | 2 | 0.058 | 5,242 | 0.2676 | 9 | yes |
| zstd | 3 | 0.071 | 5,234 | 0.2672 | 8 | yes |
| zstd | 4 | 0.074 | 5,212 | 0.2661 | 8 | yes |
| zstd | 5 | 0.144 | 5,133 | 0.2621 | 9 | yes |
| zstd | 6 | 0.191 | 4,853 | 0.2478 | 10 | yes |
| zstd | 7 | 0.227 | 4,757 | 0.2429 | 16 | yes |
| zstd | 8 | 0.255 | 4,750 | 0.2425 | 12 | yes |
| zstd | 9 | 0.332 | 4,744 | 0.2422 | 15 | yes |
| zstd | 10 | 0.451 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.627 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.628 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.981 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.747 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.841 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.548 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.537 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.531 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 4.992 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.052 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 4.996 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.042 | 4,415 | 0.2254 | 5 | yes |
