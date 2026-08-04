# Node Compression Benchmark

Last updated: 2026-08-04T21:18:37.200Z

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
| gzip | 1 | 0.948 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.016 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.082 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.195 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.555 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.831 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.015 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.352 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.364 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.371 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.762 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.844 | 29,394 | 0.3733 | 9 | yes |
| brotli | 3 | 0.976 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.502 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.155 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.306 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 4.148 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.956 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.369 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.902 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 97.301 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.297 | 31,062 | 0.3944 | 9 | yes |
| zstd | 2 | 0.348 | 30,069 | 0.3818 | 9 | yes |
| zstd | 3 | 0.408 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.503 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.889 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.218 | 27,592 | 0.3504 | 7 | yes |
| zstd | 7 | 1.463 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.589 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.768 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.010 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.378 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.594 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.567 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.048 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.067 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.279 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.307 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.200 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.827 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.900 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.752 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.909 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 83.930 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 89.266 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 91.939 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 103.256 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 118.471 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.188 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 141.064 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 158.117 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 170.316 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.841 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.628 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.659 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.112 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 90.927 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 128.968 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 149.611 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 480.765 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 624.584 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 789.200 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6088.682 | 2,728,891 | 0.4986 | 6 | yes |
| brotli | 11 | 12945.649 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.933 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 26.011 | 3,233,695 | 0.5909 | 6 | yes |
| zstd | 3 | 39.493 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 43.864 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 66.697 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.739 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 86.050 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 101.056 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 109.012 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 142.584 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 209.328 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 202.510 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 465.074 | 2,864,062 | 0.5233 | 6 | yes |
| zstd | 14 | 477.793 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 517.643 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 714.200 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 921.012 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1347.477 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1470.247 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1318.039 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1311.511 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1313.465 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 11.898 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 11.880 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 11.819 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 12.392 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 12.314 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 12.286 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 12.315 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 12.304 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 12.430 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.239 | 596,751 | 0.9970 | 15 | yes |
| brotli | 1 | 0.240 | 598,581 | 1.0000 | 7 | yes |
| brotli | 2 | 0.596 | 598,587 | 1.0000 | 5 | yes |
| brotli | 3 | 0.753 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 1.017 | 598,581 | 1.0000 | 5 | yes |
| brotli | 5 | 1.466 | 598,581 | 1.0000 | 19 | yes |
| brotli | 6 | 1.574 | 598,581 | 1.0000 | 5 | yes |
| brotli | 7 | 1.931 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 2.183 | 598,581 | 1.0000 | 5 | yes |
| brotli | 9 | 4.496 | 598,581 | 1.0000 | 5 | yes |
| brotli | 10 | 107.499 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 269.685 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.245 | 598,601 | 1.0000 | 5 | yes |
| zstd | 2 | 0.284 | 598,600 | 1.0000 | 8 | yes |
| zstd | 3 | 0.322 | 598,600 | 1.0000 | 25 | no |
| zstd | 4 | 0.351 | 598,600 | 1.0000 | 5 | yes |
| zstd | 5 | 0.525 | 598,600 | 1.0000 | 5 | yes |
| zstd | 6 | 0.497 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.550 | 598,600 | 1.0000 | 5 | yes |
| zstd | 8 | 0.542 | 598,600 | 1.0000 | 6 | yes |
| zstd | 9 | 0.667 | 598,600 | 1.0000 | 6 | yes |
| zstd | 10 | 0.662 | 598,600 | 1.0000 | 5 | yes |
| zstd | 11 | 0.702 | 598,600 | 1.0000 | 18 | yes |
| zstd | 12 | 0.674 | 598,600 | 1.0000 | 5 | yes |
| zstd | 13 | 2.346 | 595,998 | 0.9957 | 5 | yes |
| zstd | 14 | 2.345 | 595,998 | 0.9957 | 5 | yes |
| zstd | 15 | 2.225 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 15.137 | 595,898 | 0.9955 | 11 | yes |
| zstd | 17 | 15.338 | 595,889 | 0.9955 | 5 | yes |
| zstd | 18 | 22.925 | 595,891 | 0.9955 | 5 | yes |
| zstd | 19 | 27.779 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 27.411 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 27.383 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 27.539 | 595,894 | 0.9955 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,606 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.838 | 145,358 | 0.2963 | 5 | yes |
| gzip | 2 | 4.207 | 138,587 | 0.2825 | 5 | yes |
| gzip | 3 | 5.432 | 134,017 | 0.2732 | 5 | yes |
| gzip | 4 | 5.754 | 125,747 | 0.2563 | 5 | yes |
| gzip | 5 | 8.019 | 121,096 | 0.2468 | 5 | yes |
| gzip | 6 | 11.617 | 119,388 | 0.2433 | 5 | yes |
| gzip | 7 | 14.717 | 118,921 | 0.2424 | 5 | yes |
| gzip | 8 | 27.512 | 118,636 | 0.2418 | 5 | yes |
| gzip | 9 | 42.758 | 118,573 | 0.2417 | 5 | yes |
| brotli | 0 | 1.549 | 149,660 | 0.3051 | 5 | yes |
| brotli | 1 | 2.208 | 137,516 | 0.2803 | 5 | yes |
| brotli | 2 | 3.936 | 129,301 | 0.2636 | 5 | yes |
| brotli | 3 | 4.431 | 126,719 | 0.2583 | 5 | yes |
| brotli | 4 | 6.330 | 122,606 | 0.2499 | 5 | yes |
| brotli | 5 | 9.951 | 112,797 | 0.2299 | 5 | yes |
| brotli | 6 | 11.582 | 110,134 | 0.2245 | 5 | yes |
| brotli | 7 | 13.981 | 108,151 | 0.2204 | 5 | yes |
| brotli | 8 | 17.279 | 107,109 | 0.2183 | 5 | yes |
| brotli | 9 | 23.209 | 106,222 | 0.2165 | 5 | yes |
| brotli | 10 | 279.051 | 98,788 | 0.2014 | 5 | yes |
| brotli | 11 | 714.547 | 96,573 | 0.1968 | 5 | yes |
| zstd | 1 | 1.672 | 138,262 | 0.2818 | 5 | yes |
| zstd | 2 | 1.861 | 134,013 | 0.2732 | 5 | yes |
| zstd | 3 | 2.186 | 126,350 | 0.2575 | 5 | yes |
| zstd | 4 | 2.343 | 126,170 | 0.2572 | 6 | yes |
| zstd | 5 | 4.732 | 117,532 | 0.2396 | 5 | yes |
| zstd | 6 | 6.176 | 113,548 | 0.2314 | 5 | yes |
| zstd | 7 | 6.873 | 111,995 | 0.2283 | 5 | yes |
| zstd | 8 | 8.876 | 111,203 | 0.2267 | 5 | yes |
| zstd | 9 | 8.985 | 111,203 | 0.2267 | 5 | yes |
| zstd | 10 | 11.347 | 110,167 | 0.2246 | 5 | yes |
| zstd | 11 | 13.585 | 109,539 | 0.2233 | 5 | yes |
| zstd | 12 | 13.707 | 109,539 | 0.2233 | 5 | yes |
| zstd | 13 | 27.958 | 108,363 | 0.2209 | 5 | yes |
| zstd | 14 | 33.403 | 107,778 | 0.2197 | 5 | yes |
| zstd | 15 | 37.499 | 107,709 | 0.2195 | 5 | yes |
| zstd | 16 | 68.320 | 102,120 | 0.2082 | 5 | yes |
| zstd | 17 | 74.613 | 101,237 | 0.2064 | 5 | yes |
| zstd | 18 | 118.289 | 100,409 | 0.2047 | 5 | yes |
| zstd | 19 | 150.754 | 100,335 | 0.2045 | 5 | yes |
| zstd | 20 | 152.438 | 100,335 | 0.2045 | 5 | yes |
| zstd | 21 | 150.172 | 100,340 | 0.2045 | 5 | yes |
| zstd | 22 | 151.581 | 100,340 | 0.2045 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.111 | 4,987 | 0.2897 | 21 | yes |
| gzip | 2 | 0.126 | 4,874 | 0.2831 | 21 | yes |
| gzip | 3 | 0.159 | 4,806 | 0.2791 | 5 | yes |
| gzip | 4 | 0.180 | 4,530 | 0.2631 | 8 | yes |
| gzip | 5 | 0.227 | 4,441 | 0.2579 | 15 | yes |
| gzip | 6 | 0.274 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.312 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.463 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.475 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.058 | 5,235 | 0.3041 | 25 | no |
| brotli | 1 | 0.066 | 5,134 | 0.2982 | 9 | yes |
| brotli | 2 | 0.119 | 4,741 | 0.2754 | 18 | yes |
| brotli | 3 | 0.141 | 4,650 | 0.2701 | 20 | yes |
| brotli | 4 | 0.285 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.381 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.418 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.438 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.450 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 2.383 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.897 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.835 | 3,873 | 0.2250 | 5 | yes |
| zstd | 1 | 0.052 | 4,923 | 0.2859 | 16 | yes |
| zstd | 2 | 0.067 | 4,868 | 0.2827 | 25 | no |
| zstd | 3 | 0.077 | 4,717 | 0.2740 | 12 | yes |
| zstd | 4 | 0.080 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.159 | 4,519 | 0.2625 | 9 | yes |
| zstd | 6 | 0.212 | 4,437 | 0.2577 | 10 | yes |
| zstd | 7 | 0.261 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.286 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.326 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.366 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.597 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.648 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.926 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.440 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.540 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.498 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.671 | 4,281 | 0.2486 | 8 | yes |
| zstd | 18 | 2.674 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.225 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.217 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.216 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.219 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.059 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.074 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.078 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.077 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.081 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.107 | 3,044 | 0.4251 | 11 | yes |
| gzip | 7 | 0.102 | 3,042 | 0.4248 | 17 | yes |
| gzip | 8 | 0.084 | 3,042 | 0.4248 | 20 | yes |
| gzip | 9 | 0.099 | 3,042 | 0.4248 | 25 | no |
| brotli | 0 | 0.031 | 3,549 | 0.4956 | 9 | yes |
| brotli | 1 | 0.039 | 3,381 | 0.4721 | 16 | yes |
| brotli | 2 | 0.063 | 3,263 | 0.4557 | 14 | yes |
| brotli | 3 | 0.101 | 3,216 | 0.4491 | 25 | no |
| brotli | 4 | 0.151 | 3,147 | 0.4395 | 19 | yes |
| brotli | 5 | 0.230 | 2,963 | 0.4138 | 5 | yes |
| brotli | 6 | 0.237 | 2,952 | 0.4122 | 6 | yes |
| brotli | 7 | 0.257 | 2,944 | 0.4111 | 6 | yes |
| brotli | 8 | 0.249 | 2,944 | 0.4111 | 6 | yes |
| brotli | 9 | 2.270 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.104 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.726 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.033 | 3,254 | 0.4544 | 10 | yes |
| zstd | 2 | 0.034 | 3,200 | 0.4469 | 15 | yes |
| zstd | 3 | 0.044 | 3,176 | 0.4435 | 13 | yes |
| zstd | 4 | 0.063 | 3,102 | 0.4332 | 16 | yes |
| zstd | 5 | 0.071 | 3,079 | 0.4300 | 21 | yes |
| zstd | 6 | 0.089 | 3,060 | 0.4273 | 25 | no |
| zstd | 7 | 0.125 | 3,053 | 0.4263 | 19 | yes |
| zstd | 8 | 0.128 | 3,053 | 0.4263 | 10 | yes |
| zstd | 9 | 0.199 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.164 | 3,055 | 0.4266 | 15 | yes |
| zstd | 11 | 0.340 | 3,044 | 0.4251 | 7 | yes |
| zstd | 12 | 0.473 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.655 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.676 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.663 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.269 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.267 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.268 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.270 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.266 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.277 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.305 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 165,599 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.939 | 67,507 | 0.4077 | 5 | yes |
| gzip | 2 | 2.026 | 65,886 | 0.3979 | 5 | yes |
| gzip | 3 | 2.303 | 64,874 | 0.3918 | 5 | yes |
| gzip | 4 | 2.556 | 62,487 | 0.3773 | 5 | yes |
| gzip | 5 | 3.439 | 60,848 | 0.3674 | 5 | yes |
| gzip | 6 | 4.274 | 60,570 | 0.3658 | 5 | yes |
| gzip | 7 | 4.634 | 60,527 | 0.3655 | 5 | yes |
| gzip | 8 | 5.002 | 60,509 | 0.3654 | 5 | yes |
| gzip | 9 | 5.041 | 60,509 | 0.3654 | 5 | yes |
| brotli | 0 | 0.693 | 71,790 | 0.4335 | 5 | yes |
| brotli | 1 | 0.896 | 68,843 | 0.4157 | 5 | yes |
| brotli | 2 | 1.658 | 63,505 | 0.3835 | 5 | yes |
| brotli | 3 | 1.913 | 62,945 | 0.3801 | 5 | yes |
| brotli | 4 | 2.946 | 61,772 | 0.3730 | 5 | yes |
| brotli | 5 | 4.726 | 58,412 | 0.3527 | 5 | yes |
| brotli | 6 | 4.761 | 58,008 | 0.3503 | 5 | yes |
| brotli | 7 | 5.861 | 57,755 | 0.3488 | 5 | yes |
| brotli | 8 | 6.460 | 57,667 | 0.3482 | 5 | yes |
| brotli | 9 | 9.081 | 57,589 | 0.3478 | 5 | yes |
| brotli | 10 | 95.979 | 54,874 | 0.3314 | 5 | yes |
| brotli | 11 | 242.831 | 53,818 | 0.3250 | 5 | yes |
| zstd | 1 | 0.618 | 66,843 | 0.4036 | 5 | yes |
| zstd | 2 | 0.804 | 63,844 | 0.3855 | 5 | yes |
| zstd | 3 | 0.985 | 63,294 | 0.3822 | 5 | yes |
| zstd | 4 | 1.777 | 61,396 | 0.3708 | 5 | yes |
| zstd | 5 | 2.006 | 60,869 | 0.3676 | 5 | yes |
| zstd | 6 | 2.456 | 59,979 | 0.3622 | 5 | yes |
| zstd | 7 | 2.902 | 59,158 | 0.3572 | 5 | yes |
| zstd | 8 | 3.600 | 58,671 | 0.3543 | 5 | yes |
| zstd | 9 | 4.185 | 58,430 | 0.3528 | 5 | yes |
| zstd | 10 | 4.982 | 58,290 | 0.3520 | 5 | yes |
| zstd | 11 | 8.500 | 57,983 | 0.3501 | 5 | yes |
| zstd | 12 | 8.634 | 57,969 | 0.3501 | 5 | yes |
| zstd | 13 | 15.189 | 56,943 | 0.3439 | 5 | yes |
| zstd | 14 | 18.426 | 56,556 | 0.3415 | 5 | yes |
| zstd | 15 | 18.339 | 56,517 | 0.3413 | 5 | yes |
| zstd | 16 | 25.114 | 56,330 | 0.3402 | 5 | yes |
| zstd | 17 | 25.819 | 56,330 | 0.3402 | 8 | yes |
| zstd | 18 | 45.164 | 56,259 | 0.3397 | 5 | yes |
| zstd | 19 | 44.744 | 56,259 | 0.3397 | 5 | yes |
| zstd | 20 | 42.395 | 56,259 | 0.3397 | 5 | yes |
| zstd | 21 | 42.512 | 56,259 | 0.3397 | 5 | yes |
| zstd | 22 | 43.175 | 56,259 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.771 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.849 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.953 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.066 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.378 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.769 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.122 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.854 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.873 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.262 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.381 | 29,754 | 0.4063 | 6 | yes |
| brotli | 2 | 0.698 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.800 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.309 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.902 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.065 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.414 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.644 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.786 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 38.644 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 95.763 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.260 | 28,919 | 0.3949 | 5 | yes |
| zstd | 2 | 0.272 | 28,008 | 0.3824 | 7 | yes |
| zstd | 3 | 0.359 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.455 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.787 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.067 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.301 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.413 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.610 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.880 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.206 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.342 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.313 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.539 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.658 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.760 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.699 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.726 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.396 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.413 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.432 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.396 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.621 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.739 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.881 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 0.994 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.368 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 2.077 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.744 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 7.962 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 8.167 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.264 | 27,781 | 0.3075 | 9 | yes |
| brotli | 1 | 0.410 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.710 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.834 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.218 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.837 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 2.113 | 21,822 | 0.2416 | 6 | yes |
| brotli | 7 | 2.419 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.869 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 5.610 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 34.586 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 104.107 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.293 | 24,608 | 0.2724 | 6 | yes |
| zstd | 2 | 0.301 | 24,387 | 0.2700 | 5 | yes |
| zstd | 3 | 0.369 | 24,157 | 0.2674 | 5 | yes |
| zstd | 4 | 0.435 | 24,076 | 0.2665 | 5 | yes |
| zstd | 5 | 0.791 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 1.114 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.365 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.567 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.955 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.579 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.616 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.783 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 6.060 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 8.310 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 9.875 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 14.860 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 19.716 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 27.599 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 31.824 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 37.005 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 49.026 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 54.911 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.038 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.105 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.301 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.671 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.112 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.863 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.509 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.703 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.779 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.447 | 43,268 | 0.1864 | 6 | yes |
| brotli | 1 | 0.636 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.231 | 36,514 | 0.1573 | 8 | yes |
| brotli | 3 | 1.396 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.006 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.963 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.233 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.594 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.082 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.690 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 97.134 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 299.121 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.473 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.538 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.569 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.396 | 30,973 | 0.1334 | 7 | yes |
| zstd | 5 | 1.605 | 29,744 | 0.1281 | 8 | yes |
| zstd | 6 | 1.909 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.175 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.664 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.120 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.431 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.939 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.750 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.693 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.702 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.322 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.263 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 64.032 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 85.963 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 97.614 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 100.831 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 100.282 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 100.794 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,088,846 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.391 | 3,786,228 | 0.2216 | 5 | yes |
| gzip | 2 | 101.506 | 3,637,199 | 0.2128 | 5 | yes |
| gzip | 3 | 124.600 | 3,517,128 | 0.2058 | 5 | yes |
| gzip | 4 | 149.919 | 3,388,581 | 0.1983 | 5 | yes |
| gzip | 5 | 190.862 | 3,167,259 | 0.1853 | 5 | yes |
| gzip | 6 | 281.047 | 3,098,703 | 0.1813 | 5 | yes |
| gzip | 7 | 381.493 | 3,032,397 | 0.1774 | 5 | yes |
| gzip | 8 | 1079.298 | 2,964,487 | 0.1735 | 5 | yes |
| gzip | 9 | 1133.873 | 2,963,688 | 0.1734 | 5 | yes |
| brotli | 0 | 47.885 | 4,195,167 | 0.2455 | 5 | yes |
| brotli | 1 | 65.070 | 3,728,851 | 0.2182 | 5 | yes |
| brotli | 2 | 115.115 | 3,433,235 | 0.2009 | 5 | yes |
| brotli | 3 | 133.787 | 3,377,124 | 0.1976 | 5 | yes |
| brotli | 4 | 210.319 | 3,303,878 | 0.1933 | 5 | yes |
| brotli | 5 | 320.894 | 2,946,664 | 0.1724 | 5 | yes |
| brotli | 6 | 415.191 | 2,915,320 | 0.1706 | 5 | yes |
| brotli | 7 | 577.385 | 2,887,582 | 0.1690 | 5 | yes |
| brotli | 8 | 775.823 | 2,868,532 | 0.1679 | 5 | yes |
| brotli | 9 | 997.642 | 2,857,411 | 0.1672 | 5 | yes |
| brotli | 10 | 10779.983 | 2,448,858 | 0.1433 | 5 | yes |
| brotli | 11 | 27395.432 | 2,330,104 | 0.1364 | 5 | yes |
| zstd | 1 | 44.242 | 3,534,613 | 0.2068 | 5 | yes |
| zstd | 2 | 56.378 | 3,612,321 | 0.2114 | 5 | yes |
| zstd | 3 | 67.275 | 3,537,742 | 0.2070 | 5 | yes |
| zstd | 4 | 70.522 | 3,532,781 | 0.2067 | 5 | yes |
| zstd | 5 | 139.694 | 3,315,447 | 0.1940 | 5 | yes |
| zstd | 6 | 191.377 | 3,093,505 | 0.1810 | 5 | yes |
| zstd | 7 | 224.374 | 3,054,755 | 0.1788 | 5 | yes |
| zstd | 8 | 294.592 | 2,951,480 | 0.1727 | 5 | yes |
| zstd | 9 | 321.398 | 2,962,142 | 0.1733 | 5 | yes |
| zstd | 10 | 435.448 | 2,925,109 | 0.1712 | 5 | yes |
| zstd | 11 | 638.470 | 2,897,547 | 0.1696 | 5 | yes |
| zstd | 12 | 683.161 | 2,897,453 | 0.1696 | 5 | yes |
| zstd | 13 | 876.131 | 2,874,535 | 0.1682 | 5 | yes |
| zstd | 14 | 993.013 | 2,860,101 | 0.1674 | 5 | yes |
| zstd | 15 | 1377.128 | 2,856,465 | 0.1672 | 5 | yes |
| zstd | 16 | 2858.419 | 2,667,907 | 0.1561 | 5 | yes |
| zstd | 17 | 3824.519 | 2,576,011 | 0.1507 | 5 | yes |
| zstd | 18 | 6191.868 | 2,556,665 | 0.1496 | 5 | yes |
| zstd | 19 | 6701.341 | 2,549,586 | 0.1492 | 5 | yes |
| zstd | 20 | 7038.556 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 21 | 7080.343 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 22 | 7247.672 | 2,543,154 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.241 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.362 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.512 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.309 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.251 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.467 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.468 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.045 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.180 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.883 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.424 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.936 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.978 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.965 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.940 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.533 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 47.209 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 54.919 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 67.684 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 900.696 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1934.985 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.057 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.958 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 6.047 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.606 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.376 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.094 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.086 | 388,562 | 0.4520 | 12 | yes |
| zstd | 8 | 18.698 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.885 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.854 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.162 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.788 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 60.610 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 61.911 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 64.333 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 107.909 | 369,550 | 0.4298 | 8 | yes |
| zstd | 17 | 123.972 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 166.741 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 179.111 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 179.582 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 178.006 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 180.148 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.101 | 5,565 | 0.2841 | 25 | no |
| gzip | 2 | 0.139 | 5,486 | 0.2801 | 13 | yes |
| gzip | 3 | 0.166 | 5,419 | 0.2767 | 18 | yes |
| gzip | 4 | 0.227 | 5,202 | 0.2656 | 5 | yes |
| gzip | 5 | 0.278 | 4,958 | 0.2531 | 5 | yes |
| gzip | 6 | 0.373 | 4,947 | 0.2526 | 5 | yes |
| gzip | 7 | 0.480 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.644 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.640 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.060 | 6,082 | 0.3105 | 16 | yes |
| brotli | 1 | 0.075 | 5,794 | 0.2958 | 25 | no |
| brotli | 2 | 0.126 | 5,002 | 0.2554 | 25 | yes |
| brotli | 3 | 0.185 | 4,986 | 0.2546 | 5 | yes |
| brotli | 4 | 0.297 | 4,954 | 0.2529 | 5 | yes |
| brotli | 5 | 0.461 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.491 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.551 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.604 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.727 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 7.199 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 21.703 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.059 | 5,441 | 0.2778 | 15 | yes |
| zstd | 2 | 0.063 | 5,242 | 0.2676 | 13 | yes |
| zstd | 3 | 0.083 | 5,234 | 0.2672 | 9 | yes |
| zstd | 4 | 0.085 | 5,212 | 0.2661 | 11 | yes |
| zstd | 5 | 0.180 | 5,133 | 0.2621 | 5 | yes |
| zstd | 6 | 0.242 | 4,853 | 0.2478 | 7 | yes |
| zstd | 7 | 0.290 | 4,757 | 0.2429 | 7 | yes |
| zstd | 8 | 0.330 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.415 | 4,744 | 0.2422 | 5 | yes |
| zstd | 10 | 0.494 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.582 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.644 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.994 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.811 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.920 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.874 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.881 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.875 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 5.647 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.670 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 5.692 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.680 | 4,415 | 0.2254 | 5 | yes |
