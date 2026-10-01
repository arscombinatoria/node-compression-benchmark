# Node Compression Benchmark

Last updated: 2026-10-01T13:09:16.208Z

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
| gzip | 0 | 0.169 | 78,776 | 1.0004 | 25 | no |
| gzip | 1 | 0.898 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.962 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.079 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.218 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.575 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.862 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.042 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.386 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.386 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.371 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.744 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.869 | 29,394 | 0.3733 | 11 | yes |
| brotli | 3 | 0.943 | 29,072 | 0.3692 | 6 | yes |
| brotli | 4 | 1.467 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.150 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.313 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 4.261 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.616 | 26,725 | 0.3394 | 13 | yes |
| brotli | 9 | 5.266 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 35.020 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.362 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.307 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.336 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.416 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.537 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.939 | 28,349 | 0.3600 | 6 | yes |
| zstd | 6 | 1.202 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.510 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.637 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.800 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.067 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.454 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.675 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.659 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.168 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.246 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.392 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.537 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.326 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 22.435 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 22.188 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 23.292 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 22.112 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 0 | 2.984 | 5,473,637 | 1.0002 | 25 | no |
| gzip | 1 | 88.272 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 88.086 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 93.196 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 104.674 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 119.862 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 135.016 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 142.874 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 160.507 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.629 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.928 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.173 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.880 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.798 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 91.075 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 131.228 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 159.208 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 460.326 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 596.744 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 794.002 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6773.568 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13531.786 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.264 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 25.259 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 41.689 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 41.855 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.592 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 79.125 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 90.570 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 107.985 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 112.762 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 143.064 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 204.664 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 203.597 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 484.822 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 514.648 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 631.470 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 890.037 | 2,803,911 | 0.5123 | 7 | yes |
| zstd | 17 | 1045.977 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1412.760 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1552.072 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1586.451 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1581.658 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1587.451 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 0 | 0.318 | 598,684 | 1.0002 | 19 | yes |
| gzip | 1 | 11.830 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 11.901 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 11.799 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 12.380 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 12.412 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 12.695 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 12.385 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 12.395 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 12.418 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.270 | 596,751 | 0.9970 | 10 | yes |
| brotli | 1 | 0.239 | 598,581 | 1.0000 | 12 | yes |
| brotli | 2 | 0.654 | 598,587 | 1.0000 | 19 | yes |
| brotli | 3 | 0.798 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 1.105 | 598,581 | 1.0000 | 5 | yes |
| brotli | 5 | 1.518 | 598,581 | 1.0000 | 5 | yes |
| brotli | 6 | 1.563 | 598,581 | 1.0000 | 25 | no |
| brotli | 7 | 2.210 | 598,581 | 1.0000 | 11 | yes |
| brotli | 8 | 3.133 | 598,581 | 1.0000 | 5 | yes |
| brotli | 9 | 6.087 | 598,581 | 1.0000 | 9 | yes |
| brotli | 10 | 137.720 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 279.982 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.285 | 598,601 | 1.0000 | 7 | yes |
| zstd | 2 | 0.272 | 598,600 | 1.0000 | 25 | no |
| zstd | 3 | 0.305 | 598,600 | 1.0000 | 25 | no |
| zstd | 4 | 0.324 | 598,600 | 1.0000 | 7 | yes |
| zstd | 5 | 0.467 | 598,600 | 1.0000 | 5 | yes |
| zstd | 6 | 0.481 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.552 | 598,600 | 1.0000 | 5 | yes |
| zstd | 8 | 0.576 | 598,600 | 1.0000 | 5 | yes |
| zstd | 9 | 0.780 | 598,600 | 1.0000 | 25 | no |
| zstd | 10 | 0.700 | 598,600 | 1.0000 | 20 | yes |
| zstd | 11 | 0.800 | 598,600 | 1.0000 | 22 | yes |
| zstd | 12 | 0.772 | 598,600 | 1.0000 | 13 | yes |
| zstd | 13 | 2.933 | 595,998 | 0.9957 | 25 | no |
| zstd | 14 | 3.082 | 595,998 | 0.9957 | 25 | no |
| zstd | 15 | 2.720 | 595,998 | 0.9957 | 25 | no |
| zstd | 16 | 32.045 | 595,898 | 0.9955 | 5 | yes |
| zstd | 17 | 28.373 | 595,889 | 0.9955 | 5 | yes |
| zstd | 18 | 44.550 | 595,891 | 0.9955 | 5 | yes |
| zstd | 19 | 53.428 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 52.561 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 53.848 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 50.111 | 595,894 | 0.9955 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 493,290 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 0 | 0.280 | 493,383 | 1.0002 | 5 | yes |
| gzip | 1 | 3.949 | 146,149 | 0.2963 | 5 | yes |
| gzip | 2 | 4.350 | 139,274 | 0.2823 | 5 | yes |
| gzip | 3 | 5.598 | 134,733 | 0.2731 | 5 | yes |
| gzip | 4 | 5.907 | 126,385 | 0.2562 | 5 | yes |
| gzip | 5 | 8.327 | 121,702 | 0.2467 | 5 | yes |
| gzip | 6 | 11.969 | 119,973 | 0.2432 | 5 | yes |
| gzip | 7 | 15.085 | 119,497 | 0.2422 | 5 | yes |
| gzip | 8 | 28.133 | 119,223 | 0.2417 | 5 | yes |
| gzip | 9 | 43.752 | 119,156 | 0.2416 | 5 | yes |
| brotli | 0 | 1.549 | 150,465 | 0.3050 | 5 | yes |
| brotli | 1 | 2.151 | 138,172 | 0.2801 | 5 | yes |
| brotli | 2 | 3.921 | 129,999 | 0.2635 | 5 | yes |
| brotli | 3 | 4.542 | 127,405 | 0.2583 | 5 | yes |
| brotli | 4 | 6.860 | 123,107 | 0.2496 | 5 | yes |
| brotli | 5 | 10.574 | 113,382 | 0.2298 | 5 | yes |
| brotli | 6 | 11.991 | 110,700 | 0.2244 | 5 | yes |
| brotli | 7 | 14.857 | 108,697 | 0.2204 | 5 | yes |
| brotli | 8 | 18.548 | 107,649 | 0.2182 | 5 | yes |
| brotli | 9 | 24.608 | 106,735 | 0.2164 | 5 | yes |
| brotli | 10 | 292.370 | 99,238 | 0.2012 | 5 | yes |
| brotli | 11 | 719.001 | 97,146 | 0.1969 | 5 | yes |
| zstd | 1 | 1.659 | 138,911 | 0.2816 | 5 | yes |
| zstd | 2 | 1.813 | 134,725 | 0.2731 | 5 | yes |
| zstd | 3 | 2.348 | 126,980 | 0.2574 | 5 | yes |
| zstd | 4 | 2.313 | 126,776 | 0.2570 | 5 | yes |
| zstd | 5 | 4.719 | 118,141 | 0.2395 | 5 | yes |
| zstd | 6 | 6.388 | 114,119 | 0.2313 | 5 | yes |
| zstd | 7 | 7.406 | 112,542 | 0.2281 | 5 | yes |
| zstd | 8 | 9.471 | 111,701 | 0.2264 | 5 | yes |
| zstd | 9 | 9.893 | 111,701 | 0.2264 | 5 | yes |
| zstd | 10 | 11.541 | 110,666 | 0.2243 | 5 | yes |
| zstd | 11 | 14.732 | 110,040 | 0.2231 | 5 | yes |
| zstd | 12 | 14.725 | 110,040 | 0.2231 | 5 | yes |
| zstd | 13 | 34.363 | 108,868 | 0.2207 | 5 | yes |
| zstd | 14 | 38.549 | 108,312 | 0.2196 | 5 | yes |
| zstd | 15 | 42.344 | 108,238 | 0.2194 | 5 | yes |
| zstd | 16 | 79.259 | 102,642 | 0.2081 | 5 | yes |
| zstd | 17 | 84.092 | 101,748 | 0.2063 | 5 | yes |
| zstd | 18 | 127.291 | 100,901 | 0.2045 | 5 | yes |
| zstd | 19 | 159.097 | 100,801 | 0.2043 | 5 | yes |
| zstd | 20 | 163.231 | 100,801 | 0.2043 | 5 | yes |
| zstd | 21 | 163.414 | 100,801 | 0.2043 | 5 | yes |
| zstd | 22 | 165.663 | 100,801 | 0.2043 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 18,040 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 0 | 0.021 | 18,063 | 1.0013 | 16 | yes |
| gzip | 1 | 0.099 | 5,189 | 0.2876 | 25 | no |
| gzip | 2 | 0.127 | 5,069 | 0.2810 | 14 | yes |
| gzip | 3 | 0.167 | 5,002 | 0.2773 | 5 | yes |
| gzip | 4 | 0.193 | 4,715 | 0.2614 | 10 | yes |
| gzip | 5 | 0.241 | 4,618 | 0.2560 | 7 | yes |
| gzip | 6 | 0.292 | 4,607 | 0.2554 | 5 | yes |
| gzip | 7 | 0.334 | 4,600 | 0.2550 | 5 | yes |
| gzip | 8 | 0.456 | 4,598 | 0.2549 | 5 | yes |
| gzip | 9 | 0.464 | 4,598 | 0.2549 | 5 | yes |
| brotli | 0 | 0.063 | 5,483 | 0.3039 | 25 | no |
| brotli | 1 | 0.068 | 5,356 | 0.2969 | 17 | yes |
| brotli | 2 | 0.120 | 4,956 | 0.2747 | 16 | yes |
| brotli | 3 | 0.178 | 4,866 | 0.2697 | 5 | yes |
| brotli | 4 | 0.296 | 4,752 | 0.2634 | 11 | yes |
| brotli | 5 | 0.402 | 4,451 | 0.2467 | 5 | yes |
| brotli | 6 | 0.425 | 4,446 | 0.2465 | 5 | yes |
| brotli | 7 | 0.468 | 4,432 | 0.2457 | 5 | yes |
| brotli | 8 | 0.478 | 4,424 | 0.2452 | 5 | yes |
| brotli | 9 | 2.766 | 4,416 | 0.2448 | 5 | yes |
| brotli | 10 | 7.977 | 4,142 | 0.2296 | 5 | yes |
| brotli | 11 | 19.794 | 4,027 | 0.2232 | 5 | yes |
| zstd | 1 | 0.057 | 5,115 | 0.2835 | 21 | yes |
| zstd | 2 | 0.059 | 5,057 | 0.2803 | 25 | no |
| zstd | 3 | 0.077 | 4,922 | 0.2728 | 5 | yes |
| zstd | 4 | 0.079 | 4,885 | 0.2708 | 8 | yes |
| zstd | 5 | 0.176 | 4,708 | 0.2610 | 5 | yes |
| zstd | 6 | 0.225 | 4,620 | 0.2561 | 6 | yes |
| zstd | 7 | 0.277 | 4,618 | 0.2560 | 5 | yes |
| zstd | 8 | 0.302 | 4,600 | 0.2550 | 5 | yes |
| zstd | 9 | 0.356 | 4,592 | 0.2545 | 5 | yes |
| zstd | 10 | 0.399 | 4,584 | 0.2541 | 5 | yes |
| zstd | 11 | 0.640 | 4,562 | 0.2529 | 5 | yes |
| zstd | 12 | 0.680 | 4,561 | 0.2528 | 5 | yes |
| zstd | 13 | 0.992 | 4,554 | 0.2524 | 5 | yes |
| zstd | 14 | 1.536 | 4,473 | 0.2479 | 5 | yes |
| zstd | 15 | 1.647 | 4,468 | 0.2477 | 5 | yes |
| zstd | 16 | 2.635 | 4,450 | 0.2467 | 5 | yes |
| zstd | 17 | 2.846 | 4,450 | 0.2467 | 5 | yes |
| zstd | 18 | 2.807 | 4,450 | 0.2467 | 5 | yes |
| zstd | 19 | 5.525 | 4,435 | 0.2458 | 5 | yes |
| zstd | 20 | 5.503 | 4,435 | 0.2458 | 5 | yes |
| zstd | 21 | 5.519 | 4,435 | 0.2458 | 5 | yes |
| zstd | 22 | 5.513 | 4,435 | 0.2458 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 0 | 0.020 | 7,184 | 1.0032 | 25 | no |
| gzip | 1 | 0.056 | 3,220 | 0.4497 | 22 | yes |
| gzip | 2 | 0.057 | 3,182 | 0.4444 | 21 | yes |
| gzip | 3 | 0.059 | 3,153 | 0.4403 | 25 | yes |
| gzip | 4 | 0.091 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.112 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.081 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.087 | 3,042 | 0.4248 | 25 | no |
| gzip | 8 | 0.084 | 3,042 | 0.4248 | 21 | yes |
| gzip | 9 | 0.083 | 3,042 | 0.4248 | 8 | yes |
| brotli | 0 | 0.034 | 3,549 | 0.4956 | 25 | no |
| brotli | 1 | 0.061 | 3,381 | 0.4721 | 5 | yes |
| brotli | 2 | 0.065 | 3,263 | 0.4557 | 25 | no |
| brotli | 3 | 0.078 | 3,216 | 0.4491 | 19 | yes |
| brotli | 4 | 0.158 | 3,147 | 0.4395 | 13 | yes |
| brotli | 5 | 0.226 | 2,963 | 0.4138 | 5 | yes |
| brotli | 6 | 0.247 | 2,952 | 0.4122 | 21 | yes |
| brotli | 7 | 0.260 | 2,944 | 0.4111 | 11 | yes |
| brotli | 8 | 0.270 | 2,944 | 0.4111 | 7 | yes |
| brotli | 9 | 2.486 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.274 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.090 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.032 | 3,254 | 0.4544 | 25 | yes |
| zstd | 2 | 0.036 | 3,200 | 0.4469 | 23 | yes |
| zstd | 3 | 0.042 | 3,176 | 0.4435 | 17 | yes |
| zstd | 4 | 0.065 | 3,102 | 0.4332 | 25 | no |
| zstd | 5 | 0.073 | 3,079 | 0.4300 | 25 | yes |
| zstd | 6 | 0.090 | 3,060 | 0.4273 | 20 | yes |
| zstd | 7 | 0.112 | 3,053 | 0.4263 | 15 | yes |
| zstd | 8 | 0.108 | 3,053 | 0.4263 | 8 | yes |
| zstd | 9 | 0.176 | 3,055 | 0.4266 | 10 | yes |
| zstd | 10 | 0.174 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.343 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.479 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.661 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.665 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.680 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.290 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.301 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.301 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.271 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.271 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.266 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.296 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 168,331 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 0 | 0.121 | 168,374 | 1.0003 | 25 | no |
| gzip | 1 | 1.950 | 68,573 | 0.4074 | 5 | yes |
| gzip | 2 | 2.097 | 66,933 | 0.3976 | 5 | yes |
| gzip | 3 | 2.366 | 65,843 | 0.3912 | 5 | yes |
| gzip | 4 | 2.658 | 63,425 | 0.3768 | 5 | yes |
| gzip | 5 | 3.571 | 61,773 | 0.3670 | 5 | yes |
| gzip | 6 | 4.375 | 61,499 | 0.3653 | 5 | yes |
| gzip | 7 | 4.767 | 61,455 | 0.3651 | 5 | yes |
| gzip | 8 | 5.136 | 61,439 | 0.3650 | 5 | yes |
| gzip | 9 | 5.126 | 61,439 | 0.3650 | 5 | yes |
| brotli | 0 | 0.736 | 72,913 | 0.4332 | 5 | yes |
| brotli | 1 | 0.955 | 69,920 | 0.4154 | 5 | yes |
| brotli | 2 | 1.713 | 64,516 | 0.3833 | 5 | yes |
| brotli | 3 | 1.996 | 63,895 | 0.3796 | 5 | yes |
| brotli | 4 | 3.110 | 62,764 | 0.3729 | 5 | yes |
| brotli | 5 | 4.734 | 59,301 | 0.3523 | 5 | yes |
| brotli | 6 | 5.288 | 58,889 | 0.3498 | 5 | yes |
| brotli | 7 | 6.761 | 58,648 | 0.3484 | 5 | yes |
| brotli | 8 | 7.283 | 58,548 | 0.3478 | 6 | yes |
| brotli | 9 | 10.296 | 58,469 | 0.3473 | 5 | yes |
| brotli | 10 | 97.965 | 55,499 | 0.3297 | 5 | yes |
| brotli | 11 | 257.714 | 54,528 | 0.3239 | 5 | yes |
| zstd | 1 | 0.640 | 67,813 | 0.4029 | 5 | yes |
| zstd | 2 | 0.813 | 64,841 | 0.3852 | 5 | yes |
| zstd | 3 | 1.022 | 64,266 | 0.3818 | 5 | yes |
| zstd | 4 | 1.817 | 62,332 | 0.3703 | 5 | yes |
| zstd | 5 | 2.179 | 61,810 | 0.3672 | 5 | yes |
| zstd | 6 | 2.511 | 60,879 | 0.3617 | 5 | yes |
| zstd | 7 | 2.955 | 60,032 | 0.3566 | 5 | yes |
| zstd | 8 | 3.718 | 59,502 | 0.3535 | 5 | yes |
| zstd | 9 | 4.361 | 59,250 | 0.3520 | 5 | yes |
| zstd | 10 | 5.262 | 59,093 | 0.3511 | 5 | yes |
| zstd | 11 | 9.517 | 58,812 | 0.3494 | 5 | yes |
| zstd | 12 | 10.272 | 58,797 | 0.3493 | 5 | yes |
| zstd | 13 | 18.673 | 57,790 | 0.3433 | 5 | yes |
| zstd | 14 | 21.735 | 57,359 | 0.3408 | 5 | yes |
| zstd | 15 | 23.713 | 57,332 | 0.3406 | 5 | yes |
| zstd | 16 | 32.283 | 57,134 | 0.3394 | 5 | yes |
| zstd | 17 | 32.704 | 57,134 | 0.3394 | 5 | yes |
| zstd | 18 | 55.252 | 57,062 | 0.3390 | 5 | yes |
| zstd | 19 | 54.160 | 57,062 | 0.3390 | 5 | yes |
| zstd | 20 | 53.348 | 57,062 | 0.3390 | 5 | yes |
| zstd | 21 | 51.441 | 57,062 | 0.3390 | 5 | yes |
| zstd | 22 | 54.199 | 57,062 | 0.3390 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 0 | 0.063 | 73,262 | 1.0004 | 25 | no |
| gzip | 1 | 0.788 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.862 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.974 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.088 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.408 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.811 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.124 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.879 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.861 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.264 | 30,978 | 0.4230 | 11 | yes |
| brotli | 1 | 0.369 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.677 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.812 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.352 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.969 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.241 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.499 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.657 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.269 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 40.488 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 96.719 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.259 | 28,919 | 0.3949 | 6 | yes |
| zstd | 2 | 0.282 | 28,008 | 0.3824 | 7 | yes |
| zstd | 3 | 0.370 | 27,463 | 0.3750 | 6 | yes |
| zstd | 4 | 0.465 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.794 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.073 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.307 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.424 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.645 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.943 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.181 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.415 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.441 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 8.063 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 8.236 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 11.632 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 11.550 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 11.348 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 21.336 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 21.109 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 21.240 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 21.214 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 0 | 0.061 | 90,364 | 1.0003 | 9 | yes |
| gzip | 1 | 0.655 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.737 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.868 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 1.020 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.389 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 2.106 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.809 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 8.241 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 8.213 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.279 | 27,781 | 0.3075 | 24 | yes |
| brotli | 1 | 0.415 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.703 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.838 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.264 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.974 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 2.239 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.622 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 3.044 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 5.997 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 35.735 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 104.720 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.302 | 24,608 | 0.2724 | 5 | yes |
| zstd | 2 | 0.305 | 24,387 | 0.2700 | 5 | yes |
| zstd | 3 | 0.364 | 24,157 | 0.2674 | 5 | yes |
| zstd | 4 | 0.444 | 24,076 | 0.2665 | 5 | yes |
| zstd | 5 | 0.783 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 1.099 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.368 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.568 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.961 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.638 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.711 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.915 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 6.098 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 8.589 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 10.263 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 15.621 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 20.393 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 28.494 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 32.892 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 38.219 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 50.814 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 56.943 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 0 | 0.141 | 232,164 | 1.0002 | 25 | yes |
| gzip | 1 | 1.073 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.142 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.330 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.715 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.159 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.919 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.578 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.773 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.838 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.481 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.636 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.195 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.428 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.157 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.277 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.625 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.969 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.654 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 7.655 | 26,569 | 0.1145 | 7 | yes |
| brotli | 10 | 101.598 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 299.526 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.493 | 35,549 | 0.1532 | 6 | yes |
| zstd | 2 | 0.550 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.583 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.450 | 30,973 | 0.1334 | 19 | yes |
| zstd | 5 | 1.959 | 29,744 | 0.1281 | 25 | no |
| zstd | 6 | 2.345 | 29,727 | 0.1281 | 10 | yes |
| zstd | 7 | 2.479 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.921 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.781 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.705 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.894 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 11.335 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 19.322 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 23.564 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 30.308 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 57.773 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 65.993 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 86.526 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 99.465 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 103.563 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 104.166 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 103.661 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,142,887 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 0 | 12.058 | 17,145,520 | 1.0002 | 25 | no |
| gzip | 1 | 94.972 | 3,798,872 | 0.2216 | 5 | yes |
| gzip | 2 | 103.289 | 3,648,515 | 0.2128 | 5 | yes |
| gzip | 3 | 126.967 | 3,528,210 | 0.2058 | 5 | yes |
| gzip | 4 | 149.905 | 3,399,518 | 0.1983 | 5 | yes |
| gzip | 5 | 192.325 | 3,176,921 | 0.1853 | 5 | yes |
| gzip | 6 | 283.932 | 3,108,674 | 0.1813 | 5 | yes |
| gzip | 7 | 386.461 | 3,041,678 | 0.1774 | 5 | yes |
| gzip | 8 | 1088.254 | 2,973,564 | 0.1735 | 5 | yes |
| gzip | 9 | 1131.928 | 2,972,718 | 0.1734 | 5 | yes |
| brotli | 0 | 46.754 | 4,204,341 | 0.2453 | 5 | yes |
| brotli | 1 | 64.000 | 3,740,942 | 0.2182 | 5 | yes |
| brotli | 2 | 116.620 | 3,444,381 | 0.2009 | 5 | yes |
| brotli | 3 | 143.424 | 3,388,809 | 0.1977 | 5 | yes |
| brotli | 4 | 250.948 | 3,315,562 | 0.1934 | 5 | yes |
| brotli | 5 | 320.330 | 2,955,446 | 0.1724 | 11 | yes |
| brotli | 6 | 410.245 | 2,923,464 | 0.1705 | 5 | yes |
| brotli | 7 | 582.045 | 2,896,501 | 0.1690 | 5 | yes |
| brotli | 8 | 744.316 | 2,877,699 | 0.1679 | 5 | yes |
| brotli | 9 | 1046.086 | 2,867,032 | 0.1672 | 5 | yes |
| brotli | 10 | 10682.050 | 2,457,267 | 0.1433 | 5 | yes |
| brotli | 11 | 27867.454 | 2,335,742 | 0.1363 | 5 | yes |
| zstd | 1 | 44.264 | 3,545,737 | 0.2068 | 5 | yes |
| zstd | 2 | 57.454 | 3,623,783 | 0.2114 | 5 | yes |
| zstd | 3 | 69.075 | 3,548,801 | 0.2070 | 5 | yes |
| zstd | 4 | 69.866 | 3,544,084 | 0.2067 | 5 | yes |
| zstd | 5 | 134.144 | 3,325,770 | 0.1940 | 5 | yes |
| zstd | 6 | 194.035 | 3,103,254 | 0.1810 | 5 | yes |
| zstd | 7 | 220.272 | 3,064,165 | 0.1787 | 5 | yes |
| zstd | 8 | 298.510 | 2,960,667 | 0.1727 | 5 | yes |
| zstd | 9 | 310.696 | 2,971,362 | 0.1733 | 5 | yes |
| zstd | 10 | 426.609 | 2,934,210 | 0.1712 | 5 | yes |
| zstd | 11 | 632.548 | 2,906,614 | 0.1696 | 5 | yes |
| zstd | 12 | 643.069 | 2,906,476 | 0.1695 | 5 | yes |
| zstd | 13 | 963.770 | 2,883,090 | 0.1682 | 5 | yes |
| zstd | 14 | 1097.952 | 2,868,621 | 0.1673 | 5 | yes |
| zstd | 15 | 1385.950 | 2,864,993 | 0.1671 | 6 | yes |
| zstd | 16 | 2813.935 | 2,676,541 | 0.1561 | 5 | yes |
| zstd | 17 | 3567.612 | 2,583,840 | 0.1507 | 5 | yes |
| zstd | 18 | 6249.837 | 2,564,714 | 0.1496 | 5 | yes |
| zstd | 19 | 6447.384 | 2,557,683 | 0.1492 | 5 | yes |
| zstd | 20 | 6765.593 | 2,555,786 | 0.1491 | 5 | yes |
| zstd | 21 | 7131.267 | 2,555,786 | 0.1491 | 5 | yes |
| zstd | 22 | 7362.094 | 2,551,081 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 0 | 0.408 | 859,878 | 1.0002 | 5 | yes |
| gzip | 1 | 12.350 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.450 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.614 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.499 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.746 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.800 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.487 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.609 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.223 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.997 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.380 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.928 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.071 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 18.166 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.040 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.282 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 45.525 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 55.017 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 68.692 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 918.415 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1961.215 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.080 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.885 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.937 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.611 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.229 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.860 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.007 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.682 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.365 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.551 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 25.719 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.772 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 52.533 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 52.757 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 57.649 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 100.308 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 130.224 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 178.367 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 187.147 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 183.316 | 358,047 | 0.4165 | 6 | yes |
| zstd | 21 | 181.025 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 182.228 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 0 | 0.021 | 19,609 | 1.0012 | 25 | no |
| gzip | 1 | 0.094 | 5,565 | 0.2841 | 25 | no |
| gzip | 2 | 0.139 | 5,486 | 0.2801 | 15 | yes |
| gzip | 3 | 0.180 | 5,419 | 0.2767 | 5 | yes |
| gzip | 4 | 0.213 | 5,202 | 0.2656 | 5 | yes |
| gzip | 5 | 0.276 | 4,958 | 0.2531 | 7 | yes |
| gzip | 6 | 0.366 | 4,947 | 0.2526 | 5 | yes |
| gzip | 7 | 0.489 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.640 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.634 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.064 | 6,082 | 0.3105 | 21 | yes |
| brotli | 1 | 0.072 | 5,794 | 0.2958 | 17 | yes |
| brotli | 2 | 0.135 | 5,002 | 0.2554 | 13 | yes |
| brotli | 3 | 0.186 | 4,986 | 0.2546 | 5 | yes |
| brotli | 4 | 0.301 | 4,954 | 0.2529 | 5 | yes |
| brotli | 5 | 0.469 | 4,641 | 0.2370 | 7 | yes |
| brotli | 6 | 0.489 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.572 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.610 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.736 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 7.244 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 21.671 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.057 | 5,441 | 0.2778 | 15 | yes |
| zstd | 2 | 0.062 | 5,242 | 0.2676 | 13 | yes |
| zstd | 3 | 0.093 | 5,234 | 0.2672 | 5 | yes |
| zstd | 4 | 0.084 | 5,212 | 0.2661 | 16 | yes |
| zstd | 5 | 0.169 | 5,133 | 0.2621 | 9 | yes |
| zstd | 6 | 0.239 | 4,853 | 0.2478 | 8 | yes |
| zstd | 7 | 0.298 | 4,757 | 0.2429 | 5 | yes |
| zstd | 8 | 0.338 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.407 | 4,744 | 0.2422 | 5 | yes |
| zstd | 10 | 0.519 | 4,746 | 0.2423 | 7 | yes |
| zstd | 11 | 0.596 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.630 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.988 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.806 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.908 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.868 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.847 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.851 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 5.614 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.628 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 5.645 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.628 | 4,415 | 0.2254 | 5 | yes |
