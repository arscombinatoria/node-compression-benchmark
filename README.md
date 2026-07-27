# Node Compression Benchmark

Last updated: 2026-07-27T21:16:21.929Z

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
| gzip | 1 | 0.742 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.788 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 0.847 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 0.939 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.224 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.439 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 1.573 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 1.773 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 1.759 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.278 | 33,111 | 0.4205 | 13 | yes |
| brotli | 1 | 0.459 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.595 | 29,394 | 0.3733 | 7 | yes |
| brotli | 3 | 0.678 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 0.983 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 1.525 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 1.671 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 2.720 | 26,773 | 0.3400 | 9 | yes |
| brotli | 8 | 2.079 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 3.611 | 26,711 | 0.3392 | 9 | yes |
| brotli | 10 | 24.659 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 70.893 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.206 | 31,062 | 0.3944 | 8 | yes |
| zstd | 2 | 0.237 | 30,069 | 0.3818 | 6 | yes |
| zstd | 3 | 0.281 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.341 | 29,108 | 0.3696 | 16 | yes |
| zstd | 5 | 0.610 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 0.851 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.046 | 27,383 | 0.3477 | 11 | yes |
| zstd | 8 | 1.141 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.265 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.439 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 2.786 | 26,969 | 0.3425 | 16 | yes |
| zstd | 12 | 2.870 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 4.196 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 5.727 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 5.856 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 7.357 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 7.338 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 7.305 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 14.214 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 14.215 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 14.192 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 14.164 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 65.898 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 69.508 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 73.166 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 78.960 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 92.574 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 104.702 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 111.184 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 124.707 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 134.332 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 15.607 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 19.502 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 34.515 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 42.586 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 76.266 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 95.923 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 117.786 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 434.378 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 539.113 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 692.188 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5069.813 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 10002.478 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 13.751 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 15.997 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 24.417 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 40.533 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 47.263 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 56.311 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 64.246 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 73.220 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 72.291 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 87.358 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 119.811 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 140.458 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 309.000 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 392.058 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 480.611 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 527.428 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 763.935 | 2,756,112 | 0.5036 | 8 | yes |
| zstd | 18 | 1043.429 | 2,713,297 | 0.4958 | 6 | yes |
| zstd | 19 | 1114.620 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1183.341 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1267.239 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1275.517 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 8.967 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 8.950 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 8.963 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 9.309 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 9.333 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 9.338 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 9.306 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 9.323 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 9.316 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.256 | 596,751 | 0.9970 | 9 | yes |
| brotli | 1 | 0.310 | 598,581 | 1.0000 | 5 | yes |
| brotli | 2 | 0.475 | 598,587 | 1.0000 | 5 | yes |
| brotli | 3 | 0.585 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 0.725 | 598,581 | 1.0000 | 5 | yes |
| brotli | 5 | 1.286 | 598,581 | 1.0000 | 14 | yes |
| brotli | 6 | 1.144 | 598,581 | 1.0000 | 5 | yes |
| brotli | 7 | 1.839 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 1.790 | 598,581 | 1.0000 | 5 | yes |
| brotli | 9 | 4.065 | 598,581 | 1.0000 | 12 | yes |
| brotli | 10 | 86.442 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 203.918 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.299 | 598,601 | 1.0000 | 22 | yes |
| zstd | 2 | 0.334 | 598,600 | 1.0000 | 15 | yes |
| zstd | 3 | 0.378 | 598,600 | 1.0000 | 25 | no |
| zstd | 4 | 0.435 | 598,600 | 1.0000 | 25 | no |
| zstd | 5 | 0.488 | 598,600 | 1.0000 | 5 | yes |
| zstd | 6 | 0.477 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.566 | 598,600 | 1.0000 | 5 | yes |
| zstd | 8 | 0.577 | 598,600 | 1.0000 | 5 | yes |
| zstd | 9 | 0.798 | 598,600 | 1.0000 | 5 | yes |
| zstd | 10 | 0.831 | 598,600 | 1.0000 | 5 | yes |
| zstd | 11 | 0.957 | 598,600 | 1.0000 | 5 | yes |
| zstd | 12 | 0.975 | 598,600 | 1.0000 | 23 | yes |
| zstd | 13 | 2.773 | 595,998 | 0.9957 | 5 | yes |
| zstd | 14 | 2.719 | 595,998 | 0.9957 | 5 | yes |
| zstd | 15 | 2.682 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 13.506 | 595,898 | 0.9955 | 5 | yes |
| zstd | 17 | 13.047 | 595,889 | 0.9955 | 5 | yes |
| zstd | 18 | 17.707 | 595,891 | 0.9955 | 5 | yes |
| zstd | 19 | 22.411 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 21.468 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 22.596 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 21.503 | 595,894 | 0.9955 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,606 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.099 | 145,358 | 0.2963 | 5 | yes |
| gzip | 2 | 3.350 | 138,587 | 0.2825 | 5 | yes |
| gzip | 3 | 4.185 | 134,017 | 0.2732 | 5 | yes |
| gzip | 4 | 4.318 | 125,747 | 0.2563 | 5 | yes |
| gzip | 5 | 6.118 | 121,096 | 0.2468 | 5 | yes |
| gzip | 6 | 8.842 | 119,388 | 0.2433 | 5 | yes |
| gzip | 7 | 11.154 | 118,921 | 0.2424 | 5 | yes |
| gzip | 8 | 23.188 | 118,636 | 0.2418 | 5 | yes |
| gzip | 9 | 36.091 | 118,573 | 0.2417 | 5 | yes |
| brotli | 0 | 1.202 | 149,660 | 0.3051 | 5 | yes |
| brotli | 1 | 1.644 | 137,516 | 0.2803 | 6 | yes |
| brotli | 2 | 3.090 | 129,301 | 0.2636 | 5 | yes |
| brotli | 3 | 3.510 | 126,719 | 0.2583 | 5 | yes |
| brotli | 4 | 5.129 | 122,606 | 0.2499 | 19 | yes |
| brotli | 5 | 7.856 | 112,797 | 0.2299 | 5 | yes |
| brotli | 6 | 9.024 | 110,134 | 0.2245 | 5 | yes |
| brotli | 7 | 11.047 | 108,151 | 0.2204 | 5 | yes |
| brotli | 8 | 12.874 | 107,109 | 0.2183 | 5 | yes |
| brotli | 9 | 18.854 | 106,222 | 0.2165 | 5 | yes |
| brotli | 10 | 222.266 | 98,788 | 0.2014 | 5 | yes |
| brotli | 11 | 543.686 | 96,573 | 0.1968 | 5 | yes |
| zstd | 1 | 1.238 | 138,262 | 0.2818 | 5 | yes |
| zstd | 2 | 1.328 | 134,013 | 0.2732 | 5 | yes |
| zstd | 3 | 1.520 | 126,350 | 0.2575 | 5 | yes |
| zstd | 4 | 1.708 | 126,170 | 0.2572 | 5 | yes |
| zstd | 5 | 3.074 | 117,532 | 0.2396 | 5 | yes |
| zstd | 6 | 4.265 | 113,548 | 0.2314 | 5 | yes |
| zstd | 7 | 4.959 | 111,995 | 0.2283 | 5 | yes |
| zstd | 8 | 6.211 | 111,203 | 0.2267 | 5 | yes |
| zstd | 9 | 6.180 | 111,203 | 0.2267 | 5 | yes |
| zstd | 10 | 7.969 | 110,167 | 0.2246 | 5 | yes |
| zstd | 11 | 9.412 | 109,539 | 0.2233 | 5 | yes |
| zstd | 12 | 9.452 | 109,539 | 0.2233 | 5 | yes |
| zstd | 13 | 22.328 | 108,363 | 0.2209 | 5 | yes |
| zstd | 14 | 27.147 | 107,778 | 0.2197 | 5 | yes |
| zstd | 15 | 30.625 | 107,709 | 0.2195 | 5 | yes |
| zstd | 16 | 51.612 | 102,120 | 0.2082 | 5 | yes |
| zstd | 17 | 57.383 | 101,237 | 0.2064 | 5 | yes |
| zstd | 18 | 79.951 | 100,409 | 0.2047 | 5 | yes |
| zstd | 19 | 103.553 | 100,335 | 0.2045 | 5 | yes |
| zstd | 20 | 110.178 | 100,335 | 0.2045 | 5 | yes |
| zstd | 21 | 101.450 | 100,340 | 0.2045 | 5 | yes |
| zstd | 22 | 100.599 | 100,340 | 0.2045 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.108 | 4,987 | 0.2897 | 9 | yes |
| gzip | 2 | 0.112 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.134 | 4,806 | 0.2791 | 5 | yes |
| gzip | 4 | 0.138 | 4,530 | 0.2631 | 9 | yes |
| gzip | 5 | 0.181 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.215 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.244 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.350 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.362 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.041 | 5,235 | 0.3041 | 25 | no |
| brotli | 1 | 0.048 | 5,134 | 0.2982 | 25 | no |
| brotli | 2 | 0.094 | 4,741 | 0.2754 | 14 | yes |
| brotli | 3 | 0.129 | 4,650 | 0.2701 | 5 | yes |
| brotli | 4 | 0.194 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.262 | 4,276 | 0.2484 | 6 | yes |
| brotli | 6 | 0.284 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.319 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.339 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 1.796 | 4,244 | 0.2465 | 14 | yes |
| brotli | 10 | 5.128 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 13.902 | 3,873 | 0.2250 | 5 | yes |
| zstd | 1 | 0.040 | 4,923 | 0.2859 | 25 | no |
| zstd | 2 | 0.043 | 4,868 | 0.2827 | 20 | yes |
| zstd | 3 | 0.050 | 4,717 | 0.2740 | 25 | no |
| zstd | 4 | 0.050 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.113 | 4,519 | 0.2625 | 8 | yes |
| zstd | 6 | 0.155 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.185 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.205 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.236 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.258 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.507 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.544 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.730 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.071 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.136 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 1.598 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 1.673 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 1.677 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 3.294 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 3.309 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 3.295 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 3.290 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.046 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.048 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.048 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.076 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.096 | 3,051 | 0.4261 | 5 | yes |
| gzip | 6 | 0.097 | 3,044 | 0.4251 | 5 | yes |
| gzip | 7 | 0.094 | 3,042 | 0.4248 | 5 | yes |
| gzip | 8 | 0.091 | 3,042 | 0.4248 | 5 | yes |
| gzip | 9 | 0.084 | 3,042 | 0.4248 | 5 | yes |
| brotli | 0 | 0.020 | 3,549 | 0.4956 | 16 | yes |
| brotli | 1 | 0.028 | 3,381 | 0.4721 | 15 | yes |
| brotli | 2 | 0.069 | 3,263 | 0.4557 | 25 | no |
| brotli | 3 | 0.099 | 3,216 | 0.4491 | 5 | yes |
| brotli | 4 | 0.128 | 3,147 | 0.4395 | 25 | no |
| brotli | 5 | 0.153 | 2,963 | 0.4138 | 5 | yes |
| brotli | 6 | 0.151 | 2,952 | 0.4122 | 9 | yes |
| brotli | 7 | 0.189 | 2,944 | 0.4111 | 5 | yes |
| brotli | 8 | 0.195 | 2,944 | 0.4111 | 10 | yes |
| brotli | 9 | 1.618 | 2,945 | 0.4113 | 13 | yes |
| brotli | 10 | 2.358 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 5.835 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.025 | 3,254 | 0.4544 | 11 | yes |
| zstd | 2 | 0.025 | 3,200 | 0.4469 | 24 | yes |
| zstd | 3 | 0.031 | 3,176 | 0.4435 | 25 | no |
| zstd | 4 | 0.044 | 3,102 | 0.4332 | 25 | no |
| zstd | 5 | 0.059 | 3,079 | 0.4300 | 25 | no |
| zstd | 6 | 0.069 | 3,060 | 0.4273 | 25 | no |
| zstd | 7 | 0.090 | 3,053 | 0.4263 | 5 | yes |
| zstd | 8 | 0.084 | 3,053 | 0.4263 | 6 | yes |
| zstd | 9 | 0.148 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.138 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.260 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.341 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.442 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.442 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.438 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 0.851 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 0.842 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 0.848 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 0.844 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 0.844 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 0.854 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 0.844 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 165,599 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.508 | 67,507 | 0.4077 | 5 | yes |
| gzip | 2 | 1.628 | 65,886 | 0.3979 | 5 | yes |
| gzip | 3 | 1.826 | 64,874 | 0.3918 | 5 | yes |
| gzip | 4 | 2.025 | 62,487 | 0.3773 | 5 | yes |
| gzip | 5 | 2.731 | 60,848 | 0.3674 | 5 | yes |
| gzip | 6 | 3.360 | 60,570 | 0.3658 | 5 | yes |
| gzip | 7 | 3.655 | 60,527 | 0.3655 | 5 | yes |
| gzip | 8 | 3.956 | 60,509 | 0.3654 | 5 | yes |
| gzip | 9 | 3.963 | 60,509 | 0.3654 | 5 | yes |
| brotli | 0 | 0.506 | 71,790 | 0.4335 | 5 | yes |
| brotli | 1 | 0.634 | 68,843 | 0.4157 | 7 | yes |
| brotli | 2 | 1.222 | 63,505 | 0.3835 | 5 | yes |
| brotli | 3 | 1.410 | 62,945 | 0.3801 | 5 | yes |
| brotli | 4 | 2.033 | 61,772 | 0.3730 | 5 | yes |
| brotli | 5 | 3.107 | 58,412 | 0.3527 | 5 | yes |
| brotli | 6 | 3.567 | 58,008 | 0.3503 | 5 | yes |
| brotli | 7 | 4.458 | 57,755 | 0.3488 | 5 | yes |
| brotli | 8 | 4.736 | 57,667 | 0.3482 | 5 | yes |
| brotli | 9 | 6.838 | 57,589 | 0.3478 | 7 | yes |
| brotli | 10 | 70.249 | 54,874 | 0.3314 | 5 | yes |
| brotli | 11 | 178.142 | 53,818 | 0.3250 | 5 | yes |
| zstd | 1 | 0.449 | 66,843 | 0.4036 | 5 | yes |
| zstd | 2 | 0.567 | 63,844 | 0.3855 | 5 | yes |
| zstd | 3 | 0.684 | 63,294 | 0.3822 | 5 | yes |
| zstd | 4 | 1.199 | 61,396 | 0.3708 | 5 | yes |
| zstd | 5 | 1.400 | 60,869 | 0.3676 | 5 | yes |
| zstd | 6 | 1.775 | 59,979 | 0.3622 | 5 | yes |
| zstd | 7 | 2.168 | 59,158 | 0.3572 | 5 | yes |
| zstd | 8 | 2.689 | 58,671 | 0.3543 | 5 | yes |
| zstd | 9 | 3.105 | 58,430 | 0.3528 | 5 | yes |
| zstd | 10 | 3.591 | 58,290 | 0.3520 | 5 | yes |
| zstd | 11 | 6.980 | 57,983 | 0.3501 | 5 | yes |
| zstd | 12 | 7.167 | 57,969 | 0.3501 | 5 | yes |
| zstd | 13 | 11.516 | 56,943 | 0.3439 | 5 | yes |
| zstd | 14 | 13.537 | 56,556 | 0.3415 | 5 | yes |
| zstd | 15 | 13.781 | 56,517 | 0.3413 | 5 | yes |
| zstd | 16 | 17.600 | 56,330 | 0.3402 | 5 | yes |
| zstd | 17 | 17.555 | 56,330 | 0.3402 | 5 | yes |
| zstd | 18 | 29.855 | 56,259 | 0.3397 | 5 | yes |
| zstd | 19 | 29.882 | 56,259 | 0.3397 | 5 | yes |
| zstd | 20 | 29.864 | 56,259 | 0.3397 | 5 | yes |
| zstd | 21 | 29.871 | 56,259 | 0.3397 | 5 | yes |
| zstd | 22 | 29.968 | 56,259 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.615 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.666 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.756 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 0.835 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.087 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.376 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.598 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.150 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.158 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.205 | 30,978 | 0.4230 | 6 | yes |
| brotli | 1 | 0.275 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.507 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.593 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 0.893 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.424 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 1.538 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 1.926 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.014 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.716 | 24,870 | 0.3396 | 8 | yes |
| brotli | 10 | 29.154 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 71.355 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.186 | 28,919 | 0.3949 | 5 | yes |
| zstd | 2 | 0.215 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.248 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.282 | 27,100 | 0.3700 | 6 | yes |
| zstd | 5 | 0.536 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 0.747 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 0.908 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.015 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.143 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.329 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 2.491 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 2.631 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 3.943 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 5.483 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 5.535 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 7.119 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 7.141 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 7.163 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 13.525 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 13.540 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 13.516 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 13.511 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.514 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.582 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.671 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 0.766 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.055 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 1.588 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.132 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 8.586 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 8.738 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.213 | 27,781 | 0.3075 | 5 | yes |
| brotli | 1 | 0.293 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.529 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.615 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 0.873 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.367 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 1.553 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 1.896 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.120 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 4.175 | 21,604 | 0.2392 | 9 | yes |
| brotli | 10 | 25.825 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 77.419 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.230 | 24,608 | 0.2724 | 5 | yes |
| zstd | 2 | 0.237 | 24,387 | 0.2700 | 5 | yes |
| zstd | 3 | 0.257 | 24,157 | 0.2674 | 8 | yes |
| zstd | 4 | 0.287 | 24,076 | 0.2665 | 7 | yes |
| zstd | 5 | 0.542 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 0.782 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 0.953 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.133 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.405 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 1.933 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.213 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.727 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 5.246 | 21,357 | 0.2364 | 16 | yes |
| zstd | 14 | 6.975 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 8.184 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 10.528 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 14.823 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 23.164 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 22.117 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 25.000 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 35.259 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 46.917 | 20,186 | 0.2235 | 8 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.868 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 0.915 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.042 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.225 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 1.557 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.104 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 2.586 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 3.465 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 3.507 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.331 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.451 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 0.836 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.001 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.382 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.097 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 2.385 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 2.653 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 2.924 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.211 | 26,569 | 0.1145 | 6 | yes |
| brotli | 10 | 73.341 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 252.795 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.392 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.444 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.450 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.063 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.356 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.535 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 1.767 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.212 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 2.644 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.234 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.463 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.364 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 16.657 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 19.807 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 25.697 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 40.249 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 43.828 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 59.861 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 66.357 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 69.467 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 68.572 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 68.663 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,045,192 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 76.235 | 3,776,518 | 0.2216 | 5 | yes |
| gzip | 2 | 84.602 | 3,627,753 | 0.2128 | 5 | yes |
| gzip | 3 | 102.020 | 3,507,453 | 0.2058 | 5 | yes |
| gzip | 4 | 114.077 | 3,379,888 | 0.1983 | 5 | yes |
| gzip | 5 | 148.445 | 3,159,182 | 0.1853 | 5 | yes |
| gzip | 6 | 219.957 | 3,090,847 | 0.1813 | 5 | yes |
| gzip | 7 | 301.091 | 3,024,822 | 0.1775 | 5 | yes |
| gzip | 8 | 901.790 | 2,957,000 | 0.1735 | 5 | yes |
| gzip | 9 | 943.897 | 2,956,204 | 0.1734 | 5 | yes |
| brotli | 0 | 34.386 | 4,175,487 | 0.2450 | 5 | yes |
| brotli | 1 | 45.783 | 3,718,326 | 0.2181 | 5 | yes |
| brotli | 2 | 80.833 | 3,424,305 | 0.2009 | 5 | yes |
| brotli | 3 | 94.887 | 3,367,979 | 0.1976 | 5 | yes |
| brotli | 4 | 159.371 | 3,295,114 | 0.1933 | 5 | yes |
| brotli | 5 | 236.773 | 2,938,968 | 0.1724 | 5 | yes |
| brotli | 6 | 296.639 | 2,906,886 | 0.1705 | 5 | yes |
| brotli | 7 | 472.303 | 2,880,272 | 0.1690 | 5 | yes |
| brotli | 8 | 600.923 | 2,860,897 | 0.1678 | 5 | yes |
| brotli | 9 | 808.896 | 2,849,681 | 0.1672 | 5 | yes |
| brotli | 10 | 8454.165 | 2,442,746 | 0.1433 | 5 | yes |
| brotli | 11 | 22222.524 | 2,324,312 | 0.1364 | 5 | yes |
| zstd | 1 | 32.105 | 3,525,070 | 0.2068 | 5 | yes |
| zstd | 2 | 40.752 | 3,602,765 | 0.2114 | 5 | yes |
| zstd | 3 | 52.817 | 3,528,707 | 0.2070 | 5 | yes |
| zstd | 4 | 70.599 | 3,523,547 | 0.2067 | 5 | yes |
| zstd | 5 | 104.664 | 3,306,721 | 0.1940 | 5 | yes |
| zstd | 6 | 149.173 | 3,085,317 | 0.1810 | 5 | yes |
| zstd | 7 | 173.390 | 3,046,804 | 0.1787 | 5 | yes |
| zstd | 8 | 224.341 | 2,943,521 | 0.1727 | 5 | yes |
| zstd | 9 | 231.187 | 2,954,143 | 0.1733 | 5 | yes |
| zstd | 10 | 320.550 | 2,917,471 | 0.1712 | 5 | yes |
| zstd | 11 | 437.608 | 2,889,922 | 0.1695 | 5 | yes |
| zstd | 12 | 480.613 | 2,889,906 | 0.1695 | 5 | yes |
| zstd | 13 | 715.861 | 2,866,998 | 0.1682 | 5 | yes |
| zstd | 14 | 883.327 | 2,852,567 | 0.1674 | 5 | yes |
| zstd | 15 | 1228.792 | 2,848,994 | 0.1671 | 5 | yes |
| zstd | 16 | 2405.204 | 2,661,004 | 0.1561 | 5 | yes |
| zstd | 17 | 3063.286 | 2,568,659 | 0.1507 | 5 | yes |
| zstd | 18 | 4471.763 | 2,549,776 | 0.1496 | 5 | yes |
| zstd | 19 | 4951.382 | 2,542,941 | 0.1492 | 5 | yes |
| zstd | 20 | 5464.305 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 21 | 5460.212 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 22 | 5747.707 | 2,536,119 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 9.758 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 10.634 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 12.319 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 12.940 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 19.176 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 23.682 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 27.298 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 26.484 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 26.519 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 2.878 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 3.775 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 7.592 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 9.558 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 13.004 | 400,331 | 0.4656 | 6 | yes |
| brotli | 5 | 19.950 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 26.976 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 33.880 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 39.183 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 46.642 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 685.063 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1457.178 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 2.227 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 2.848 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 3.722 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 4.843 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 7.129 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 9.818 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 10.958 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 13.406 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 13.562 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 16.180 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 19.530 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 19.610 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 44.463 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 46.206 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 46.883 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 77.158 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 95.856 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 120.605 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 133.820 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 134.085 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 136.292 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 136.904 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.108 | 5,565 | 0.2841 | 23 | yes |
| gzip | 2 | 0.131 | 5,486 | 0.2801 | 5 | yes |
| gzip | 3 | 0.144 | 5,419 | 0.2767 | 6 | yes |
| gzip | 4 | 0.158 | 5,202 | 0.2656 | 5 | yes |
| gzip | 5 | 0.212 | 4,958 | 0.2531 | 5 | yes |
| gzip | 6 | 0.294 | 4,947 | 0.2526 | 5 | yes |
| gzip | 7 | 0.395 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.521 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.514 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.037 | 6,082 | 0.3105 | 25 | no |
| brotli | 1 | 0.073 | 5,794 | 0.2958 | 25 | no |
| brotli | 2 | 0.115 | 5,002 | 0.2554 | 6 | yes |
| brotli | 3 | 0.136 | 4,986 | 0.2546 | 5 | yes |
| brotli | 4 | 0.204 | 4,954 | 0.2529 | 5 | yes |
| brotli | 5 | 0.320 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.357 | 4,630 | 0.2364 | 6 | yes |
| brotli | 7 | 0.420 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.451 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.534 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 5.501 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 16.351 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.038 | 5,441 | 0.2778 | 17 | yes |
| zstd | 2 | 0.040 | 5,242 | 0.2676 | 25 | no |
| zstd | 3 | 0.051 | 5,234 | 0.2672 | 22 | yes |
| zstd | 4 | 0.056 | 5,212 | 0.2661 | 14 | yes |
| zstd | 5 | 0.116 | 5,133 | 0.2621 | 5 | yes |
| zstd | 6 | 0.169 | 4,853 | 0.2478 | 5 | yes |
| zstd | 7 | 0.199 | 4,757 | 0.2429 | 5 | yes |
| zstd | 8 | 0.234 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.281 | 4,744 | 0.2422 | 5 | yes |
| zstd | 10 | 0.331 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.485 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.530 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.764 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.337 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.431 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 1.917 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 1.914 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 1.913 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 3.745 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 3.790 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 3.790 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 3.779 | 4,415 | 0.2254 | 5 | yes |
