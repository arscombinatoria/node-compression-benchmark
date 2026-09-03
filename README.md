# Node Compression Benchmark

Last updated: 2026-09-03T21:15:38.266Z

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
| gzip | 1 | 0.748 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.782 | 30,134 | 0.3827 | 6 | yes |
| gzip | 3 | 0.852 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 0.937 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.233 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.436 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 1.588 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 1.793 | 27,530 | 0.3496 | 21 | yes |
| gzip | 9 | 1.785 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.280 | 33,111 | 0.4205 | 8 | yes |
| brotli | 1 | 0.456 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.587 | 29,394 | 0.3733 | 5 | yes |
| brotli | 3 | 0.669 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 0.943 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 1.430 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 1.539 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 2.610 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 1.957 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 3.992 | 26,711 | 0.3392 | 8 | yes |
| brotli | 10 | 24.591 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 70.613 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.209 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.251 | 30,069 | 0.3818 | 6 | yes |
| zstd | 3 | 0.280 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.353 | 29,108 | 0.3696 | 9 | yes |
| zstd | 5 | 0.615 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 0.898 | 27,592 | 0.3504 | 8 | yes |
| zstd | 7 | 1.050 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.177 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.273 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.430 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 2.706 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 2.847 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 4.149 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 5.702 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 5.719 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 7.535 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 7.520 | 26,336 | 0.3344 | 12 | yes |
| zstd | 18 | 7.530 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 14.189 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 14.408 | 26,282 | 0.3337 | 7 | yes |
| zstd | 21 | 14.151 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 14.447 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 68.228 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 70.489 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 75.039 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 81.735 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 93.567 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 106.556 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 115.280 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 125.842 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 135.265 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 15.109 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 18.932 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 35.264 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 49.324 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 77.976 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 104.886 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 125.998 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 446.113 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 539.567 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 707.113 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5015.463 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 9946.437 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 14.529 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 17.980 | 3,233,695 | 0.5909 | 10 | yes |
| zstd | 3 | 26.989 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 40.265 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 52.714 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 58.626 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 63.320 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 74.196 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 71.868 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 91.225 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 122.106 | 2,868,731 | 0.5242 | 14 | yes |
| zstd | 12 | 137.431 | 2,866,083 | 0.5237 | 6 | yes |
| zstd | 13 | 360.082 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 416.787 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 497.871 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 710.146 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 856.567 | 2,756,112 | 0.5036 | 8 | yes |
| zstd | 18 | 1122.948 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1056.208 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1117.218 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1180.503 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1111.523 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 9.124 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 9.132 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 9.119 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 9.418 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 9.392 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 9.401 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 9.464 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 9.569 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 9.449 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.246 | 596,751 | 0.9970 | 12 | yes |
| brotli | 1 | 0.272 | 598,581 | 1.0000 | 24 | yes |
| brotli | 2 | 0.467 | 598,587 | 1.0000 | 6 | yes |
| brotli | 3 | 0.549 | 598,559 | 1.0000 | 13 | yes |
| brotli | 4 | 0.586 | 598,581 | 1.0000 | 5 | yes |
| brotli | 5 | 1.128 | 598,581 | 1.0000 | 5 | yes |
| brotli | 6 | 1.439 | 598,581 | 1.0000 | 25 | no |
| brotli | 7 | 1.691 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 1.729 | 598,581 | 1.0000 | 5 | yes |
| brotli | 9 | 4.276 | 598,581 | 1.0000 | 17 | yes |
| brotli | 10 | 84.048 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 207.256 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.343 | 598,601 | 1.0000 | 5 | yes |
| zstd | 2 | 0.337 | 598,600 | 1.0000 | 25 | no |
| zstd | 3 | 0.413 | 598,600 | 1.0000 | 25 | no |
| zstd | 4 | 0.393 | 598,600 | 1.0000 | 7 | yes |
| zstd | 5 | 0.459 | 598,600 | 1.0000 | 7 | yes |
| zstd | 6 | 0.484 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.636 | 598,600 | 1.0000 | 6 | yes |
| zstd | 8 | 0.580 | 598,600 | 1.0000 | 5 | yes |
| zstd | 9 | 0.794 | 598,600 | 1.0000 | 12 | yes |
| zstd | 10 | 0.833 | 598,600 | 1.0000 | 5 | yes |
| zstd | 11 | 0.882 | 598,600 | 1.0000 | 6 | yes |
| zstd | 12 | 1.040 | 598,600 | 1.0000 | 8 | yes |
| zstd | 13 | 2.947 | 595,998 | 0.9957 | 5 | yes |
| zstd | 14 | 2.811 | 595,998 | 0.9957 | 16 | yes |
| zstd | 15 | 4.738 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 12.858 | 595,898 | 0.9955 | 10 | yes |
| zstd | 17 | 12.665 | 595,889 | 0.9955 | 5 | yes |
| zstd | 18 | 16.754 | 595,891 | 0.9955 | 5 | yes |
| zstd | 19 | 20.443 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 20.172 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 19.903 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 20.061 | 595,894 | 0.9955 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 491,099 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.238 | 145,502 | 0.2963 | 5 | yes |
| gzip | 2 | 3.511 | 138,736 | 0.2825 | 5 | yes |
| gzip | 3 | 4.381 | 134,172 | 0.2732 | 5 | yes |
| gzip | 4 | 4.416 | 125,909 | 0.2564 | 5 | yes |
| gzip | 5 | 6.382 | 121,244 | 0.2469 | 5 | yes |
| gzip | 6 | 9.169 | 119,536 | 0.2434 | 5 | yes |
| gzip | 7 | 11.515 | 119,062 | 0.2424 | 5 | yes |
| gzip | 8 | 23.921 | 118,791 | 0.2419 | 5 | yes |
| gzip | 9 | 35.935 | 118,726 | 0.2418 | 5 | yes |
| brotli | 0 | 1.188 | 149,868 | 0.3052 | 5 | yes |
| brotli | 1 | 1.532 | 137,674 | 0.2803 | 5 | yes |
| brotli | 2 | 2.796 | 129,460 | 0.2636 | 5 | yes |
| brotli | 3 | 3.212 | 126,815 | 0.2582 | 5 | yes |
| brotli | 4 | 4.271 | 122,786 | 0.2500 | 5 | yes |
| brotli | 5 | 6.857 | 112,895 | 0.2299 | 5 | yes |
| brotli | 6 | 8.239 | 110,279 | 0.2246 | 5 | yes |
| brotli | 7 | 9.806 | 108,268 | 0.2205 | 5 | yes |
| brotli | 8 | 11.221 | 107,237 | 0.2184 | 5 | yes |
| brotli | 9 | 17.394 | 106,354 | 0.2166 | 5 | yes |
| brotli | 10 | 211.210 | 98,831 | 0.2012 | 5 | yes |
| brotli | 11 | 569.144 | 96,720 | 0.1969 | 7 | yes |
| zstd | 1 | 1.287 | 138,444 | 0.2819 | 5 | yes |
| zstd | 2 | 1.405 | 134,139 | 0.2731 | 5 | yes |
| zstd | 3 | 1.579 | 126,494 | 0.2576 | 5 | yes |
| zstd | 4 | 1.803 | 126,314 | 0.2572 | 5 | yes |
| zstd | 5 | 3.223 | 117,670 | 0.2396 | 5 | yes |
| zstd | 6 | 4.443 | 113,676 | 0.2315 | 5 | yes |
| zstd | 7 | 5.165 | 112,130 | 0.2283 | 5 | yes |
| zstd | 8 | 6.515 | 111,311 | 0.2267 | 5 | yes |
| zstd | 9 | 6.396 | 111,311 | 0.2267 | 5 | yes |
| zstd | 10 | 8.274 | 110,295 | 0.2246 | 5 | yes |
| zstd | 11 | 9.644 | 109,663 | 0.2233 | 5 | yes |
| zstd | 12 | 9.452 | 109,663 | 0.2233 | 5 | yes |
| zstd | 13 | 21.731 | 108,463 | 0.2209 | 5 | yes |
| zstd | 14 | 26.418 | 107,918 | 0.2197 | 5 | yes |
| zstd | 15 | 31.014 | 107,849 | 0.2196 | 5 | yes |
| zstd | 16 | 55.266 | 102,249 | 0.2082 | 5 | yes |
| zstd | 17 | 60.775 | 101,328 | 0.2063 | 5 | yes |
| zstd | 18 | 77.408 | 100,526 | 0.2047 | 5 | yes |
| zstd | 19 | 98.945 | 100,447 | 0.2045 | 5 | yes |
| zstd | 20 | 98.680 | 100,447 | 0.2045 | 5 | yes |
| zstd | 21 | 99.455 | 100,447 | 0.2045 | 5 | yes |
| zstd | 22 | 99.089 | 100,447 | 0.2045 | 9 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.110 | 4,987 | 0.2897 | 5 | yes |
| gzip | 2 | 0.117 | 4,874 | 0.2831 | 8 | yes |
| gzip | 3 | 0.130 | 4,806 | 0.2791 | 6 | yes |
| gzip | 4 | 0.150 | 4,530 | 0.2631 | 5 | yes |
| gzip | 5 | 0.189 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.212 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.251 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.355 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.365 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.042 | 5,235 | 0.3041 | 25 | no |
| brotli | 1 | 0.048 | 5,134 | 0.2982 | 25 | no |
| brotli | 2 | 0.094 | 4,741 | 0.2754 | 17 | yes |
| brotli | 3 | 0.127 | 4,650 | 0.2701 | 7 | yes |
| brotli | 4 | 0.202 | 4,555 | 0.2646 | 14 | yes |
| brotli | 5 | 0.265 | 4,276 | 0.2484 | 9 | yes |
| brotli | 6 | 0.291 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.329 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.346 | 4,257 | 0.2473 | 6 | yes |
| brotli | 9 | 1.893 | 4,244 | 0.2465 | 12 | yes |
| brotli | 10 | 6.045 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 17.105 | 3,873 | 0.2250 | 5 | yes |
| zstd | 1 | 0.045 | 4,923 | 0.2859 | 25 | no |
| zstd | 2 | 0.053 | 4,868 | 0.2827 | 25 | no |
| zstd | 3 | 0.059 | 4,717 | 0.2740 | 19 | yes |
| zstd | 4 | 0.061 | 4,679 | 0.2718 | 15 | yes |
| zstd | 5 | 0.133 | 4,519 | 0.2625 | 7 | yes |
| zstd | 6 | 0.192 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.217 | 4,437 | 0.2577 | 7 | yes |
| zstd | 8 | 0.256 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.275 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.300 | 4,410 | 0.2561 | 6 | yes |
| zstd | 11 | 0.601 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.559 | 4,391 | 0.2550 | 7 | yes |
| zstd | 13 | 0.755 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.095 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.158 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 1.657 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 1.686 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 1.701 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 3.292 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 3.302 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 3.307 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 3.375 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.046 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.065 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.079 | 3,153 | 0.4403 | 15 | yes |
| gzip | 4 | 0.089 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.086 | 3,051 | 0.4261 | 21 | yes |
| gzip | 6 | 0.079 | 3,044 | 0.4251 | 19 | yes |
| gzip | 7 | 0.082 | 3,042 | 0.4248 | 15 | yes |
| gzip | 8 | 0.087 | 3,042 | 0.4248 | 7 | yes |
| gzip | 9 | 0.081 | 3,042 | 0.4248 | 11 | yes |
| brotli | 0 | 0.021 | 3,549 | 0.4956 | 25 | no |
| brotli | 1 | 0.036 | 3,381 | 0.4721 | 5 | yes |
| brotli | 2 | 0.046 | 3,263 | 0.4557 | 25 | no |
| brotli | 3 | 0.072 | 3,216 | 0.4491 | 19 | yes |
| brotli | 4 | 0.116 | 3,147 | 0.4395 | 8 | yes |
| brotli | 5 | 0.148 | 2,963 | 0.4138 | 13 | yes |
| brotli | 6 | 0.157 | 2,952 | 0.4122 | 11 | yes |
| brotli | 7 | 0.195 | 2,944 | 0.4111 | 5 | yes |
| brotli | 8 | 0.194 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 1.694 | 2,945 | 0.4113 | 9 | yes |
| brotli | 10 | 2.402 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 5.879 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.025 | 3,254 | 0.4544 | 17 | yes |
| zstd | 2 | 0.025 | 3,200 | 0.4469 | 25 | no |
| zstd | 3 | 0.030 | 3,176 | 0.4435 | 25 | no |
| zstd | 4 | 0.047 | 3,102 | 0.4332 | 25 | no |
| zstd | 5 | 0.060 | 3,079 | 0.4300 | 25 | no |
| zstd | 6 | 0.071 | 3,060 | 0.4273 | 23 | yes |
| zstd | 7 | 0.082 | 3,053 | 0.4263 | 15 | yes |
| zstd | 8 | 0.080 | 3,053 | 0.4263 | 11 | yes |
| zstd | 9 | 0.146 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.141 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.264 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.344 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.445 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.444 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.453 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 0.855 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 0.845 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 0.860 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 0.844 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 0.854 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 0.851 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 0.849 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 167,536 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.542 | 68,258 | 0.4074 | 5 | yes |
| gzip | 2 | 1.673 | 66,628 | 0.3977 | 5 | yes |
| gzip | 3 | 1.899 | 65,566 | 0.3914 | 5 | yes |
| gzip | 4 | 2.061 | 63,153 | 0.3770 | 5 | yes |
| gzip | 5 | 2.804 | 61,493 | 0.3670 | 5 | yes |
| gzip | 6 | 3.465 | 61,220 | 0.3654 | 5 | yes |
| gzip | 7 | 3.756 | 61,178 | 0.3652 | 5 | yes |
| gzip | 8 | 4.042 | 61,159 | 0.3650 | 5 | yes |
| gzip | 9 | 4.036 | 61,159 | 0.3650 | 5 | yes |
| brotli | 0 | 0.506 | 72,624 | 0.4335 | 5 | yes |
| brotli | 1 | 0.641 | 69,540 | 0.4151 | 6 | yes |
| brotli | 2 | 1.243 | 64,217 | 0.3833 | 5 | yes |
| brotli | 3 | 1.441 | 63,611 | 0.3797 | 5 | yes |
| brotli | 4 | 2.047 | 62,461 | 0.3728 | 8 | yes |
| brotli | 5 | 3.149 | 59,022 | 0.3523 | 5 | yes |
| brotli | 6 | 3.574 | 58,657 | 0.3501 | 5 | yes |
| brotli | 7 | 4.452 | 58,375 | 0.3484 | 5 | yes |
| brotli | 8 | 4.788 | 58,271 | 0.3478 | 5 | yes |
| brotli | 9 | 7.442 | 58,184 | 0.3473 | 7 | yes |
| brotli | 10 | 72.850 | 55,378 | 0.3305 | 5 | yes |
| brotli | 11 | 182.644 | 54,340 | 0.3243 | 5 | yes |
| zstd | 1 | 0.511 | 67,501 | 0.4029 | 5 | yes |
| zstd | 2 | 0.661 | 64,552 | 0.3853 | 5 | yes |
| zstd | 3 | 0.777 | 64,032 | 0.3822 | 5 | yes |
| zstd | 4 | 1.217 | 62,020 | 0.3702 | 5 | yes |
| zstd | 5 | 1.442 | 61,498 | 0.3671 | 5 | yes |
| zstd | 6 | 1.812 | 60,584 | 0.3616 | 5 | yes |
| zstd | 7 | 2.188 | 59,738 | 0.3566 | 5 | yes |
| zstd | 8 | 2.714 | 59,250 | 0.3537 | 5 | yes |
| zstd | 9 | 3.143 | 58,995 | 0.3521 | 5 | yes |
| zstd | 10 | 3.637 | 58,843 | 0.3512 | 5 | yes |
| zstd | 11 | 6.984 | 58,566 | 0.3496 | 5 | yes |
| zstd | 12 | 7.280 | 58,550 | 0.3495 | 5 | yes |
| zstd | 13 | 11.709 | 57,536 | 0.3434 | 5 | yes |
| zstd | 14 | 13.611 | 57,080 | 0.3407 | 5 | yes |
| zstd | 15 | 13.792 | 57,055 | 0.3406 | 5 | yes |
| zstd | 16 | 17.588 | 56,875 | 0.3395 | 5 | yes |
| zstd | 17 | 18.448 | 56,875 | 0.3395 | 5 | yes |
| zstd | 18 | 29.564 | 56,810 | 0.3391 | 5 | yes |
| zstd | 19 | 29.412 | 56,810 | 0.3391 | 5 | yes |
| zstd | 20 | 29.397 | 56,810 | 0.3391 | 5 | yes |
| zstd | 21 | 29.261 | 56,810 | 0.3391 | 5 | yes |
| zstd | 22 | 29.242 | 56,810 | 0.3391 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.636 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.675 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.771 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 0.845 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.119 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.379 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.615 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.165 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.189 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.210 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.270 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.515 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.595 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 0.895 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.376 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 1.498 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 1.854 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 1.979 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.014 | 24,870 | 0.3396 | 8 | yes |
| brotli | 10 | 29.423 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 71.261 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.182 | 28,919 | 0.3949 | 7 | yes |
| zstd | 2 | 0.210 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.243 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.288 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.545 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 0.763 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 0.912 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.025 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.152 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.321 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 2.515 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 2.634 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 4.007 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 5.546 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 5.618 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 7.205 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 7.191 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 7.253 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 13.698 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 13.677 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 13.681 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 13.703 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.527 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.614 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.685 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 0.771 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.072 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 1.593 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.164 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 8.609 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 8.709 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.217 | 27,781 | 0.3075 | 5 | yes |
| brotli | 1 | 0.300 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.527 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.604 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 0.871 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.302 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 1.533 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 1.854 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.064 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 4.272 | 21,604 | 0.2392 | 8 | yes |
| brotli | 10 | 25.779 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 77.326 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.203 | 24,608 | 0.2724 | 7 | yes |
| zstd | 2 | 0.230 | 24,387 | 0.2700 | 5 | yes |
| zstd | 3 | 0.256 | 24,157 | 0.2674 | 5 | yes |
| zstd | 4 | 0.303 | 24,076 | 0.2665 | 5 | yes |
| zstd | 5 | 0.544 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 0.782 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 0.948 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.118 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.391 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 1.769 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 2.961 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.095 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 4.569 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 6.161 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 7.485 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 10.004 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 13.619 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 21.082 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 20.157 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 23.982 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 34.999 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 42.042 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.887 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 0.937 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.064 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.239 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 1.578 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.141 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 2.632 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 3.507 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 3.642 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.333 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.456 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 0.851 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.080 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.579 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.286 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 2.394 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 2.681 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 2.941 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.722 | 26,569 | 0.1145 | 6 | yes |
| brotli | 10 | 83.169 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 221.375 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.351 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.381 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.396 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 0.921 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.173 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.387 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 1.588 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 1.993 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 2.363 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 2.846 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 6.673 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 8.255 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 14.756 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 17.366 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 21.789 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 35.493 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 38.741 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 53.681 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 59.074 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 60.615 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 60.545 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 60.437 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,088,846 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 77.760 | 3,786,228 | 0.2216 | 5 | yes |
| gzip | 2 | 84.319 | 3,637,199 | 0.2128 | 5 | yes |
| gzip | 3 | 101.652 | 3,517,128 | 0.2058 | 5 | yes |
| gzip | 4 | 111.908 | 3,388,581 | 0.1983 | 5 | yes |
| gzip | 5 | 146.206 | 3,167,259 | 0.1853 | 5 | yes |
| gzip | 6 | 216.721 | 3,098,703 | 0.1813 | 5 | yes |
| gzip | 7 | 295.993 | 3,032,397 | 0.1774 | 5 | yes |
| gzip | 8 | 900.983 | 2,964,487 | 0.1735 | 5 | yes |
| gzip | 9 | 972.123 | 2,963,688 | 0.1734 | 7 | yes |
| brotli | 0 | 39.247 | 4,195,167 | 0.2455 | 5 | yes |
| brotli | 1 | 48.453 | 3,728,851 | 0.2182 | 10 | yes |
| brotli | 2 | 80.483 | 3,433,235 | 0.2009 | 5 | yes |
| brotli | 3 | 94.915 | 3,377,124 | 0.1976 | 5 | yes |
| brotli | 4 | 163.040 | 3,303,878 | 0.1933 | 5 | yes |
| brotli | 5 | 251.944 | 2,946,664 | 0.1724 | 5 | yes |
| brotli | 6 | 295.316 | 2,915,320 | 0.1706 | 5 | yes |
| brotli | 7 | 450.094 | 2,887,582 | 0.1690 | 5 | yes |
| brotli | 8 | 570.314 | 2,868,532 | 0.1679 | 5 | yes |
| brotli | 9 | 776.383 | 2,857,411 | 0.1672 | 5 | yes |
| brotli | 10 | 8724.234 | 2,448,858 | 0.1433 | 5 | yes |
| brotli | 11 | 22336.365 | 2,330,104 | 0.1364 | 5 | yes |
| zstd | 1 | 33.338 | 3,534,613 | 0.2068 | 5 | yes |
| zstd | 2 | 38.920 | 3,612,321 | 0.2114 | 5 | yes |
| zstd | 3 | 53.318 | 3,537,742 | 0.2070 | 5 | yes |
| zstd | 4 | 65.985 | 3,532,781 | 0.2067 | 5 | yes |
| zstd | 5 | 101.283 | 3,315,447 | 0.1940 | 5 | yes |
| zstd | 6 | 142.677 | 3,093,505 | 0.1810 | 5 | yes |
| zstd | 7 | 166.332 | 3,054,755 | 0.1788 | 5 | yes |
| zstd | 8 | 221.156 | 2,951,480 | 0.1727 | 5 | yes |
| zstd | 9 | 224.264 | 2,962,142 | 0.1733 | 7 | yes |
| zstd | 10 | 320.332 | 2,925,109 | 0.1712 | 7 | yes |
| zstd | 11 | 424.033 | 2,897,547 | 0.1696 | 5 | yes |
| zstd | 12 | 467.154 | 2,897,453 | 0.1696 | 5 | yes |
| zstd | 13 | 704.214 | 2,874,535 | 0.1682 | 5 | yes |
| zstd | 14 | 894.200 | 2,860,101 | 0.1674 | 5 | yes |
| zstd | 15 | 1137.658 | 2,856,465 | 0.1672 | 5 | yes |
| zstd | 16 | 2299.093 | 2,667,907 | 0.1561 | 5 | yes |
| zstd | 17 | 3179.645 | 2,576,011 | 0.1507 | 5 | yes |
| zstd | 18 | 4504.378 | 2,556,665 | 0.1496 | 5 | yes |
| zstd | 19 | 5115.865 | 2,549,586 | 0.1492 | 5 | yes |
| zstd | 20 | 5306.016 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 21 | 5109.125 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 22 | 5286.129 | 2,543,154 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 9.876 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 10.676 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 12.428 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 13.058 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 18.995 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 22.412 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 23.678 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 26.011 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 26.081 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 2.890 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 3.742 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 7.405 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 8.677 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 11.926 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 19.441 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 22.553 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 34.694 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 37.381 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 44.735 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 673.659 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1436.032 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 2.325 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 2.959 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 3.849 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 4.866 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 7.319 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 9.978 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 11.396 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 13.680 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 13.817 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 16.394 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 19.772 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 19.693 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 43.919 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 45.242 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 45.465 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 79.453 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 96.546 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 116.126 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 128.950 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 131.954 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 140.183 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 130.976 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.101 | 5,565 | 0.2841 | 17 | yes |
| gzip | 2 | 0.126 | 5,486 | 0.2801 | 11 | yes |
| gzip | 3 | 0.141 | 5,419 | 0.2767 | 10 | yes |
| gzip | 4 | 0.158 | 5,202 | 0.2656 | 5 | yes |
| gzip | 5 | 0.216 | 4,958 | 0.2531 | 6 | yes |
| gzip | 6 | 0.290 | 4,947 | 0.2526 | 5 | yes |
| gzip | 7 | 0.378 | 4,921 | 0.2513 | 6 | yes |
| gzip | 8 | 0.516 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.507 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.040 | 6,082 | 0.3105 | 25 | no |
| brotli | 1 | 0.054 | 5,794 | 0.2958 | 23 | yes |
| brotli | 2 | 0.109 | 5,002 | 0.2554 | 7 | yes |
| brotli | 3 | 0.133 | 4,986 | 0.2546 | 12 | yes |
| brotli | 4 | 0.210 | 4,954 | 0.2529 | 5 | yes |
| brotli | 5 | 0.323 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.355 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.454 | 4,622 | 0.2360 | 6 | yes |
| brotli | 8 | 0.468 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.534 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 5.544 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 16.408 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.038 | 5,441 | 0.2778 | 23 | yes |
| zstd | 2 | 0.041 | 5,242 | 0.2676 | 24 | yes |
| zstd | 3 | 0.051 | 5,234 | 0.2672 | 17 | yes |
| zstd | 4 | 0.052 | 5,212 | 0.2661 | 25 | yes |
| zstd | 5 | 0.115 | 5,133 | 0.2621 | 8 | yes |
| zstd | 6 | 0.174 | 4,853 | 0.2478 | 5 | yes |
| zstd | 7 | 0.195 | 4,757 | 0.2429 | 6 | yes |
| zstd | 8 | 0.237 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.286 | 4,744 | 0.2422 | 5 | yes |
| zstd | 10 | 0.335 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.487 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.528 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.762 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.338 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.425 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 1.928 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 1.936 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 1.924 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 3.748 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 3.791 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 3.795 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 3.796 | 4,415 | 0.2254 | 5 | yes |
