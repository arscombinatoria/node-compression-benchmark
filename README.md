# Node Compression Benchmark

Last updated: 2026-09-12T21:16:08.775Z

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
| gzip | 1 | 0.959 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.025 | 30,134 | 0.3827 | 8 | yes |
| gzip | 3 | 1.063 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.202 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.550 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.825 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.034 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.349 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.342 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.383 | 33,111 | 0.4205 | 8 | yes |
| brotli | 1 | 0.747 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.812 | 29,394 | 0.3733 | 5 | yes |
| brotli | 3 | 0.914 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.454 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.040 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.173 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.625 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.534 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.223 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.280 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 95.456 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.311 | 31,062 | 0.3944 | 12 | yes |
| zstd | 2 | 0.326 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.407 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.492 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.910 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.206 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.482 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.589 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.770 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.985 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.415 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.530 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.562 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.751 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.025 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.052 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.998 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.028 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.593 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.526 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.564 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.595 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 83.246 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 90.922 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 91.973 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.994 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 117.349 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 131.966 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 140.702 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 161.395 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 170.866 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.347 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.473 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.304 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 65.833 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 83.564 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 122.763 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 139.427 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 411.094 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 538.672 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 630.701 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5981.981 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12531.971 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.022 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.976 | 3,233,695 | 0.5909 | 10 | yes |
| zstd | 3 | 41.099 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 44.084 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.507 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 79.573 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 84.665 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 98.663 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 96.918 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 124.387 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 155.038 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 189.728 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 325.638 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 435.861 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 505.580 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 612.779 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 759.988 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1087.367 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1202.857 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1237.375 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1265.157 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1287.488 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 11.818 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 11.850 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 11.854 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 12.519 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 12.539 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 12.462 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 12.471 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 12.486 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 12.459 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.306 | 596,751 | 0.9970 | 5 | yes |
| brotli | 1 | 0.262 | 598,581 | 1.0000 | 10 | yes |
| brotli | 2 | 0.633 | 598,587 | 1.0000 | 13 | yes |
| brotli | 3 | 0.758 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 0.999 | 598,581 | 1.0000 | 5 | yes |
| brotli | 5 | 1.365 | 598,581 | 1.0000 | 5 | yes |
| brotli | 6 | 1.724 | 598,581 | 1.0000 | 5 | yes |
| brotli | 7 | 2.070 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 2.148 | 598,581 | 1.0000 | 11 | yes |
| brotli | 9 | 5.506 | 598,581 | 1.0000 | 5 | yes |
| brotli | 10 | 106.629 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 262.606 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.331 | 598,601 | 1.0000 | 25 | yes |
| zstd | 2 | 0.316 | 598,600 | 1.0000 | 21 | yes |
| zstd | 3 | 0.360 | 598,600 | 1.0000 | 25 | no |
| zstd | 4 | 0.354 | 598,600 | 1.0000 | 8 | yes |
| zstd | 5 | 0.503 | 598,600 | 1.0000 | 5 | yes |
| zstd | 6 | 0.550 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.587 | 598,600 | 1.0000 | 5 | yes |
| zstd | 8 | 0.576 | 598,600 | 1.0000 | 5 | yes |
| zstd | 9 | 0.714 | 598,600 | 1.0000 | 5 | yes |
| zstd | 10 | 0.718 | 598,600 | 1.0000 | 13 | yes |
| zstd | 11 | 0.731 | 598,600 | 1.0000 | 5 | yes |
| zstd | 12 | 0.724 | 598,600 | 1.0000 | 5 | yes |
| zstd | 13 | 2.136 | 595,998 | 0.9957 | 5 | yes |
| zstd | 14 | 2.197 | 595,998 | 0.9957 | 5 | yes |
| zstd | 15 | 2.219 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 13.586 | 595,898 | 0.9955 | 5 | yes |
| zstd | 17 | 13.494 | 595,889 | 0.9955 | 5 | yes |
| zstd | 18 | 19.317 | 595,891 | 0.9955 | 5 | yes |
| zstd | 19 | 23.557 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 23.553 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 23.528 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 23.499 | 595,894 | 0.9955 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 491,133 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.892 | 145,515 | 0.2963 | 5 | yes |
| gzip | 2 | 4.231 | 138,742 | 0.2825 | 5 | yes |
| gzip | 3 | 5.502 | 134,178 | 0.2732 | 5 | yes |
| gzip | 4 | 5.807 | 125,904 | 0.2564 | 5 | yes |
| gzip | 5 | 8.120 | 121,244 | 0.2469 | 5 | yes |
| gzip | 6 | 11.752 | 119,535 | 0.2434 | 5 | yes |
| gzip | 7 | 14.899 | 119,056 | 0.2424 | 5 | yes |
| gzip | 8 | 28.162 | 118,789 | 0.2419 | 5 | yes |
| gzip | 9 | 44.140 | 118,722 | 0.2417 | 5 | yes |
| brotli | 0 | 1.548 | 149,857 | 0.3051 | 5 | yes |
| brotli | 1 | 2.120 | 137,662 | 0.2803 | 5 | yes |
| brotli | 2 | 3.873 | 129,468 | 0.2636 | 5 | yes |
| brotli | 3 | 4.480 | 126,782 | 0.2581 | 5 | yes |
| brotli | 4 | 6.540 | 122,564 | 0.2496 | 5 | yes |
| brotli | 5 | 9.960 | 112,906 | 0.2299 | 5 | yes |
| brotli | 6 | 11.411 | 110,272 | 0.2245 | 5 | yes |
| brotli | 7 | 13.786 | 108,288 | 0.2205 | 5 | yes |
| brotli | 8 | 16.265 | 107,239 | 0.2184 | 5 | yes |
| brotli | 9 | 23.405 | 106,336 | 0.2165 | 5 | yes |
| brotli | 10 | 267.900 | 98,876 | 0.2013 | 5 | yes |
| brotli | 11 | 710.059 | 96,673 | 0.1968 | 5 | yes |
| zstd | 1 | 1.671 | 138,429 | 0.2819 | 5 | yes |
| zstd | 2 | 1.814 | 134,145 | 0.2731 | 5 | yes |
| zstd | 3 | 2.228 | 126,482 | 0.2575 | 5 | yes |
| zstd | 4 | 2.397 | 126,300 | 0.2572 | 5 | yes |
| zstd | 5 | 4.368 | 117,669 | 0.2396 | 5 | yes |
| zstd | 6 | 6.079 | 113,671 | 0.2314 | 5 | yes |
| zstd | 7 | 7.155 | 112,134 | 0.2283 | 5 | yes |
| zstd | 8 | 8.849 | 111,308 | 0.2266 | 5 | yes |
| zstd | 9 | 8.588 | 111,308 | 0.2266 | 5 | yes |
| zstd | 10 | 10.212 | 110,287 | 0.2246 | 5 | yes |
| zstd | 11 | 12.828 | 109,656 | 0.2233 | 5 | yes |
| zstd | 12 | 12.811 | 109,656 | 0.2233 | 5 | yes |
| zstd | 13 | 25.721 | 108,458 | 0.2208 | 5 | yes |
| zstd | 14 | 31.027 | 107,909 | 0.2197 | 5 | yes |
| zstd | 15 | 34.507 | 107,840 | 0.2196 | 5 | yes |
| zstd | 16 | 63.195 | 102,248 | 0.2082 | 5 | yes |
| zstd | 17 | 69.877 | 101,327 | 0.2063 | 5 | yes |
| zstd | 18 | 108.920 | 100,538 | 0.2047 | 5 | yes |
| zstd | 19 | 142.247 | 100,425 | 0.2045 | 5 | yes |
| zstd | 20 | 142.196 | 100,425 | 0.2045 | 5 | yes |
| zstd | 21 | 142.621 | 100,425 | 0.2045 | 5 | yes |
| zstd | 22 | 142.717 | 100,425 | 0.2045 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 18,040 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.096 | 5,189 | 0.2876 | 25 | no |
| gzip | 2 | 0.126 | 5,069 | 0.2810 | 25 | no |
| gzip | 3 | 0.156 | 5,002 | 0.2773 | 9 | yes |
| gzip | 4 | 0.190 | 4,715 | 0.2614 | 7 | yes |
| gzip | 5 | 0.247 | 4,618 | 0.2560 | 8 | yes |
| gzip | 6 | 0.290 | 4,607 | 0.2554 | 5 | yes |
| gzip | 7 | 0.336 | 4,600 | 0.2550 | 5 | yes |
| gzip | 8 | 0.469 | 4,598 | 0.2549 | 5 | yes |
| gzip | 9 | 0.465 | 4,598 | 0.2549 | 5 | yes |
| brotli | 0 | 0.060 | 5,483 | 0.3039 | 9 | yes |
| brotli | 1 | 0.071 | 5,356 | 0.2969 | 25 | no |
| brotli | 2 | 0.130 | 4,956 | 0.2747 | 19 | yes |
| brotli | 3 | 0.159 | 4,866 | 0.2697 | 11 | yes |
| brotli | 4 | 0.289 | 4,752 | 0.2634 | 5 | yes |
| brotli | 5 | 0.398 | 4,451 | 0.2467 | 5 | yes |
| brotli | 6 | 0.443 | 4,446 | 0.2465 | 5 | yes |
| brotli | 7 | 0.475 | 4,432 | 0.2457 | 5 | yes |
| brotli | 8 | 0.471 | 4,424 | 0.2452 | 5 | yes |
| brotli | 9 | 2.661 | 4,416 | 0.2448 | 5 | yes |
| brotli | 10 | 7.787 | 4,142 | 0.2296 | 5 | yes |
| brotli | 11 | 19.439 | 4,027 | 0.2232 | 5 | yes |
| zstd | 1 | 0.063 | 5,115 | 0.2835 | 25 | no |
| zstd | 2 | 0.065 | 5,057 | 0.2803 | 17 | yes |
| zstd | 3 | 0.080 | 4,922 | 0.2728 | 16 | yes |
| zstd | 4 | 0.086 | 4,885 | 0.2708 | 8 | yes |
| zstd | 5 | 0.169 | 4,708 | 0.2610 | 5 | yes |
| zstd | 6 | 0.230 | 4,620 | 0.2561 | 8 | yes |
| zstd | 7 | 0.278 | 4,618 | 0.2560 | 6 | yes |
| zstd | 8 | 0.305 | 4,600 | 0.2550 | 5 | yes |
| zstd | 9 | 0.356 | 4,592 | 0.2545 | 5 | yes |
| zstd | 10 | 0.377 | 4,584 | 0.2541 | 5 | yes |
| zstd | 11 | 0.636 | 4,562 | 0.2529 | 5 | yes |
| zstd | 12 | 0.671 | 4,561 | 0.2528 | 5 | yes |
| zstd | 13 | 0.995 | 4,554 | 0.2524 | 5 | yes |
| zstd | 14 | 1.537 | 4,473 | 0.2479 | 5 | yes |
| zstd | 15 | 1.644 | 4,468 | 0.2477 | 5 | yes |
| zstd | 16 | 2.681 | 4,450 | 0.2467 | 5 | yes |
| zstd | 17 | 2.825 | 4,450 | 0.2467 | 5 | yes |
| zstd | 18 | 2.824 | 4,450 | 0.2467 | 5 | yes |
| zstd | 19 | 5.513 | 4,435 | 0.2458 | 5 | yes |
| zstd | 20 | 5.509 | 4,435 | 0.2458 | 5 | yes |
| zstd | 21 | 5.506 | 4,435 | 0.2458 | 5 | yes |
| zstd | 22 | 5.511 | 4,435 | 0.2458 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.058 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.117 | 3,182 | 0.4444 | 6 | yes |
| gzip | 3 | 0.077 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.144 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.108 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.092 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.103 | 3,042 | 0.4248 | 25 | no |
| gzip | 8 | 0.119 | 3,042 | 0.4248 | 6 | yes |
| gzip | 9 | 0.110 | 3,042 | 0.4248 | 25 | no |
| brotli | 0 | 0.066 | 3,549 | 0.4956 | 12 | yes |
| brotli | 1 | 0.071 | 3,381 | 0.4721 | 8 | yes |
| brotli | 2 | 0.130 | 3,263 | 0.4557 | 5 | yes |
| brotli | 3 | 0.160 | 3,216 | 0.4491 | 6 | yes |
| brotli | 4 | 0.160 | 3,147 | 0.4395 | 17 | yes |
| brotli | 5 | 0.245 | 2,963 | 0.4138 | 5 | yes |
| brotli | 6 | 0.260 | 2,952 | 0.4122 | 5 | yes |
| brotli | 7 | 0.279 | 2,944 | 0.4111 | 9 | yes |
| brotli | 8 | 0.255 | 2,944 | 0.4111 | 19 | yes |
| brotli | 9 | 2.054 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.095 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.762 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.041 | 3,254 | 0.4544 | 25 | no |
| zstd | 2 | 0.040 | 3,200 | 0.4469 | 21 | yes |
| zstd | 3 | 0.049 | 3,176 | 0.4435 | 10 | yes |
| zstd | 4 | 0.073 | 3,102 | 0.4332 | 25 | no |
| zstd | 5 | 0.077 | 3,079 | 0.4300 | 16 | yes |
| zstd | 6 | 0.100 | 3,060 | 0.4273 | 21 | yes |
| zstd | 7 | 0.119 | 3,053 | 0.4263 | 8 | yes |
| zstd | 8 | 0.112 | 3,053 | 0.4263 | 7 | yes |
| zstd | 9 | 0.182 | 3,055 | 0.4266 | 12 | yes |
| zstd | 10 | 0.192 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.358 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.485 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.672 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.685 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.680 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.314 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.312 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.311 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.326 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.312 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.334 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.309 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 167,536 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.908 | 68,258 | 0.4074 | 5 | yes |
| gzip | 2 | 2.055 | 66,628 | 0.3977 | 11 | yes |
| gzip | 3 | 2.326 | 65,566 | 0.3914 | 5 | yes |
| gzip | 4 | 2.594 | 63,153 | 0.3770 | 5 | yes |
| gzip | 5 | 3.487 | 61,493 | 0.3670 | 5 | yes |
| gzip | 6 | 4.328 | 61,220 | 0.3654 | 5 | yes |
| gzip | 7 | 4.712 | 61,178 | 0.3652 | 5 | yes |
| gzip | 8 | 5.101 | 61,159 | 0.3650 | 5 | yes |
| gzip | 9 | 5.100 | 61,159 | 0.3650 | 5 | yes |
| brotli | 0 | 0.694 | 72,624 | 0.4335 | 5 | yes |
| brotli | 1 | 0.939 | 69,540 | 0.4151 | 5 | yes |
| brotli | 2 | 1.714 | 64,217 | 0.3833 | 5 | yes |
| brotli | 3 | 1.984 | 63,611 | 0.3797 | 5 | yes |
| brotli | 4 | 3.073 | 62,461 | 0.3728 | 5 | yes |
| brotli | 5 | 4.525 | 59,022 | 0.3523 | 5 | yes |
| brotli | 6 | 4.899 | 58,657 | 0.3501 | 5 | yes |
| brotli | 7 | 5.931 | 58,375 | 0.3484 | 5 | yes |
| brotli | 8 | 6.295 | 58,271 | 0.3478 | 5 | yes |
| brotli | 9 | 9.926 | 58,184 | 0.3473 | 5 | yes |
| brotli | 10 | 98.144 | 55,378 | 0.3305 | 5 | yes |
| brotli | 11 | 246.208 | 54,340 | 0.3243 | 5 | yes |
| zstd | 1 | 0.644 | 67,501 | 0.4029 | 5 | yes |
| zstd | 2 | 0.826 | 64,552 | 0.3853 | 5 | yes |
| zstd | 3 | 1.027 | 64,032 | 0.3822 | 5 | yes |
| zstd | 4 | 1.799 | 62,020 | 0.3702 | 5 | yes |
| zstd | 5 | 2.008 | 61,498 | 0.3671 | 5 | yes |
| zstd | 6 | 2.461 | 60,584 | 0.3616 | 5 | yes |
| zstd | 7 | 2.921 | 59,738 | 0.3566 | 5 | yes |
| zstd | 8 | 3.639 | 59,250 | 0.3537 | 5 | yes |
| zstd | 9 | 4.233 | 58,995 | 0.3521 | 5 | yes |
| zstd | 10 | 5.023 | 58,843 | 0.3512 | 5 | yes |
| zstd | 11 | 8.562 | 58,566 | 0.3496 | 5 | yes |
| zstd | 12 | 8.842 | 58,550 | 0.3495 | 5 | yes |
| zstd | 13 | 15.328 | 57,536 | 0.3434 | 5 | yes |
| zstd | 14 | 18.329 | 57,080 | 0.3407 | 5 | yes |
| zstd | 15 | 18.692 | 57,055 | 0.3406 | 5 | yes |
| zstd | 16 | 25.192 | 56,875 | 0.3395 | 5 | yes |
| zstd | 17 | 25.110 | 56,875 | 0.3395 | 5 | yes |
| zstd | 18 | 42.526 | 56,810 | 0.3391 | 5 | yes |
| zstd | 19 | 42.436 | 56,810 | 0.3391 | 5 | yes |
| zstd | 20 | 42.508 | 56,810 | 0.3391 | 5 | yes |
| zstd | 21 | 42.464 | 56,810 | 0.3391 | 5 | yes |
| zstd | 22 | 42.481 | 56,810 | 0.3391 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.786 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.844 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.963 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.071 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.391 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.790 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.120 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.872 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.832 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.289 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.381 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.688 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.806 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.310 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.882 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.069 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.536 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.540 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.734 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 38.591 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 95.712 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.246 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.280 | 28,008 | 0.3824 | 7 | yes |
| zstd | 3 | 0.343 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.426 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.803 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.089 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.293 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.420 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.623 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.880 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.148 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.318 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.352 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.639 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.749 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.794 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.807 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.801 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.633 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.648 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.694 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.669 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.659 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.736 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.850 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 1.003 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.370 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 2.057 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.736 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 8.071 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 8.170 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.291 | 27,781 | 0.3075 | 5 | yes |
| brotli | 1 | 0.411 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.700 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.821 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.244 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.850 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 2.084 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.587 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.771 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 5.967 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 34.245 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 103.777 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.293 | 24,608 | 0.2724 | 5 | yes |
| zstd | 2 | 0.304 | 24,387 | 0.2700 | 5 | yes |
| zstd | 3 | 0.359 | 24,157 | 0.2674 | 5 | yes |
| zstd | 4 | 0.413 | 24,076 | 0.2665 | 5 | yes |
| zstd | 5 | 0.788 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 1.113 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.365 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.576 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.937 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.576 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.594 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.853 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 6.037 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 8.280 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 9.871 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 14.807 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 19.632 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 27.430 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 31.678 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 36.779 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 48.379 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 54.422 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.072 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.134 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.310 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.713 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.142 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.897 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.565 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.778 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.833 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.465 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.626 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.199 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.377 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.004 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.933 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.264 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.609 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.054 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 7.216 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 95.129 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 296.698 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.489 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.553 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.584 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.415 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.633 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.904 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.141 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.660 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.089 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.422 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.781 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.607 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.566 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.505 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 27.990 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 55.528 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 62.788 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 83.872 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 95.398 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 99.869 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 99.872 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 99.837 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,088,846 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.944 | 3,786,228 | 0.2216 | 5 | yes |
| gzip | 2 | 102.356 | 3,637,199 | 0.2128 | 5 | yes |
| gzip | 3 | 125.824 | 3,517,128 | 0.2058 | 5 | yes |
| gzip | 4 | 148.837 | 3,388,581 | 0.1983 | 5 | yes |
| gzip | 5 | 189.320 | 3,167,259 | 0.1853 | 5 | yes |
| gzip | 6 | 281.500 | 3,098,703 | 0.1813 | 5 | yes |
| gzip | 7 | 383.885 | 3,032,397 | 0.1774 | 5 | yes |
| gzip | 8 | 1088.230 | 2,964,487 | 0.1735 | 5 | yes |
| gzip | 9 | 1130.717 | 2,963,688 | 0.1734 | 5 | yes |
| brotli | 0 | 45.707 | 4,195,167 | 0.2455 | 5 | yes |
| brotli | 1 | 63.651 | 3,728,851 | 0.2182 | 5 | yes |
| brotli | 2 | 110.013 | 3,433,235 | 0.2009 | 5 | yes |
| brotli | 3 | 129.185 | 3,377,124 | 0.1976 | 5 | yes |
| brotli | 4 | 171.003 | 3,303,878 | 0.1933 | 5 | yes |
| brotli | 5 | 291.734 | 2,946,664 | 0.1724 | 5 | yes |
| brotli | 6 | 341.627 | 2,915,320 | 0.1706 | 5 | yes |
| brotli | 7 | 511.337 | 2,887,582 | 0.1690 | 5 | yes |
| brotli | 8 | 670.447 | 2,868,532 | 0.1679 | 5 | yes |
| brotli | 9 | 903.370 | 2,857,411 | 0.1672 | 5 | yes |
| brotli | 10 | 9851.380 | 2,448,858 | 0.1433 | 5 | yes |
| brotli | 11 | 27786.494 | 2,330,104 | 0.1364 | 5 | yes |
| zstd | 1 | 44.801 | 3,534,613 | 0.2068 | 11 | yes |
| zstd | 2 | 57.045 | 3,612,321 | 0.2114 | 5 | yes |
| zstd | 3 | 67.114 | 3,537,742 | 0.2070 | 5 | yes |
| zstd | 4 | 70.026 | 3,532,781 | 0.2067 | 5 | yes |
| zstd | 5 | 131.829 | 3,315,447 | 0.1940 | 5 | yes |
| zstd | 6 | 192.524 | 3,093,505 | 0.1810 | 5 | yes |
| zstd | 7 | 217.341 | 3,054,755 | 0.1788 | 5 | yes |
| zstd | 8 | 284.982 | 2,951,480 | 0.1727 | 5 | yes |
| zstd | 9 | 295.303 | 2,962,142 | 0.1733 | 5 | yes |
| zstd | 10 | 390.853 | 2,925,109 | 0.1712 | 5 | yes |
| zstd | 11 | 545.858 | 2,897,547 | 0.1696 | 5 | yes |
| zstd | 12 | 621.252 | 2,897,453 | 0.1696 | 5 | yes |
| zstd | 13 | 735.761 | 2,874,535 | 0.1682 | 5 | yes |
| zstd | 14 | 981.721 | 2,860,101 | 0.1674 | 6 | yes |
| zstd | 15 | 1280.157 | 2,856,465 | 0.1672 | 5 | yes |
| zstd | 16 | 2479.215 | 2,667,907 | 0.1561 | 5 | yes |
| zstd | 17 | 3166.852 | 2,576,011 | 0.1507 | 5 | yes |
| zstd | 18 | 5578.138 | 2,556,665 | 0.1496 | 5 | yes |
| zstd | 19 | 6149.535 | 2,549,586 | 0.1492 | 5 | yes |
| zstd | 20 | 6469.233 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 21 | 6591.558 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 22 | 6530.613 | 2,543,154 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.284 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.285 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.544 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.310 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.369 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.567 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.158 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.187 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.302 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.918 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.404 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.098 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.895 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.441 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.363 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 30.859 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 43.851 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 51.417 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 63.333 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 889.184 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1913.046 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.049 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.902 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.849 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.441 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.178 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.851 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.911 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.521 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.473 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.189 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 24.827 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 24.819 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 45.299 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 46.556 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 46.866 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 86.594 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 109.029 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 145.294 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 161.887 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 162.115 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 162.830 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 163.933 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.116 | 5,565 | 0.2841 | 25 | no |
| gzip | 2 | 0.136 | 5,486 | 0.2801 | 23 | yes |
| gzip | 3 | 0.169 | 5,419 | 0.2767 | 15 | yes |
| gzip | 4 | 0.211 | 5,202 | 0.2656 | 5 | yes |
| gzip | 5 | 0.269 | 4,958 | 0.2531 | 7 | yes |
| gzip | 6 | 0.372 | 4,947 | 0.2526 | 5 | yes |
| gzip | 7 | 0.503 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.638 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.630 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.131 | 6,082 | 0.3105 | 5 | yes |
| brotli | 1 | 0.142 | 5,794 | 0.2958 | 5 | yes |
| brotli | 2 | 0.138 | 5,002 | 0.2554 | 25 | no |
| brotli | 3 | 0.171 | 4,986 | 0.2546 | 19 | yes |
| brotli | 4 | 0.285 | 4,954 | 0.2529 | 7 | yes |
| brotli | 5 | 0.469 | 4,641 | 0.2370 | 6 | yes |
| brotli | 6 | 0.493 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.584 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.601 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.730 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 7.171 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 21.722 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.065 | 5,441 | 0.2778 | 12 | yes |
| zstd | 2 | 0.061 | 5,242 | 0.2676 | 18 | yes |
| zstd | 3 | 0.078 | 5,234 | 0.2672 | 13 | yes |
| zstd | 4 | 0.080 | 5,212 | 0.2661 | 9 | yes |
| zstd | 5 | 0.174 | 5,133 | 0.2621 | 5 | yes |
| zstd | 6 | 0.243 | 4,853 | 0.2478 | 8 | yes |
| zstd | 7 | 0.298 | 4,757 | 0.2429 | 6 | yes |
| zstd | 8 | 0.330 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.398 | 4,744 | 0.2422 | 7 | yes |
| zstd | 10 | 0.489 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.590 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.644 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.982 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.802 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.905 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.865 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.871 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.868 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 5.649 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.660 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 5.673 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.675 | 4,415 | 0.2254 | 5 | yes |
