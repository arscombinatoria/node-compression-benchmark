# Node Compression Benchmark

Last updated: 2026-08-19T22:47:35.604Z

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
| gzip | 1 | 1.057 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.156 | 30,134 | 0.3827 | 7 | yes |
| gzip | 3 | 1.199 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.335 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.748 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.023 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.243 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.493 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.511 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.390 | 33,111 | 0.4205 | 8 | yes |
| brotli | 1 | 0.656 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.815 | 29,394 | 0.3733 | 5 | yes |
| brotli | 3 | 0.934 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.401 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.048 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.180 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.481 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.614 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.498 | 26,711 | 0.3392 | 6 | yes |
| brotli | 10 | 34.325 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 100.252 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.298 | 31,062 | 0.3944 | 9 | yes |
| zstd | 2 | 0.325 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.369 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.437 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.834 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.148 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.444 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.569 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.833 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.969 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.835 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.023 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.795 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.657 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.950 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.182 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.178 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.086 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 20.104 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.938 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.962 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.945 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 94.634 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 100.721 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 103.915 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 113.055 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 131.873 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 146.989 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 157.147 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 174.624 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 191.457 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.928 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 26.800 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 47.209 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 57.954 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 92.012 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 123.917 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 147.628 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 463.111 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 586.717 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 722.852 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5953.223 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12729.319 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 15.592 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 17.645 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 28.470 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 39.405 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 54.055 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 65.265 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 70.807 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 84.138 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 81.123 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 96.897 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 131.242 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 138.979 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 317.448 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 386.343 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 468.242 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 596.315 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 753.589 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 979.673 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1043.701 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1085.444 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1150.903 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1155.849 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 10.867 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 10.897 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 10.888 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 11.899 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 11.501 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 11.305 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 11.326 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 11.241 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 11.257 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.264 | 596,751 | 0.9970 | 6 | yes |
| brotli | 1 | 0.281 | 598,581 | 1.0000 | 5 | yes |
| brotli | 2 | 0.612 | 598,587 | 1.0000 | 5 | yes |
| brotli | 3 | 0.681 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 0.712 | 598,581 | 1.0000 | 6 | yes |
| brotli | 5 | 1.380 | 598,581 | 1.0000 | 11 | yes |
| brotli | 6 | 1.744 | 598,581 | 1.0000 | 7 | yes |
| brotli | 7 | 1.787 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 1.921 | 598,581 | 1.0000 | 12 | yes |
| brotli | 9 | 3.752 | 598,581 | 1.0000 | 15 | yes |
| brotli | 10 | 91.726 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 230.365 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.285 | 598,601 | 1.0000 | 25 | no |
| zstd | 2 | 0.279 | 598,600 | 1.0000 | 12 | yes |
| zstd | 3 | 0.319 | 598,600 | 1.0000 | 13 | yes |
| zstd | 4 | 0.406 | 598,600 | 1.0000 | 5 | yes |
| zstd | 5 | 0.511 | 598,600 | 1.0000 | 25 | no |
| zstd | 6 | 0.466 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.549 | 598,600 | 1.0000 | 5 | yes |
| zstd | 8 | 0.561 | 598,600 | 1.0000 | 5 | yes |
| zstd | 9 | 0.744 | 598,600 | 1.0000 | 5 | yes |
| zstd | 10 | 0.775 | 598,600 | 1.0000 | 5 | yes |
| zstd | 11 | 0.850 | 598,600 | 1.0000 | 5 | yes |
| zstd | 12 | 0.891 | 598,600 | 1.0000 | 5 | yes |
| zstd | 13 | 2.691 | 595,998 | 0.9957 | 5 | yes |
| zstd | 14 | 2.751 | 595,998 | 0.9957 | 5 | yes |
| zstd | 15 | 2.709 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 14.127 | 595,898 | 0.9955 | 5 | yes |
| zstd | 17 | 14.298 | 595,889 | 0.9955 | 5 | yes |
| zstd | 18 | 18.347 | 595,891 | 0.9955 | 5 | yes |
| zstd | 19 | 22.149 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 22.244 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 22.316 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 22.689 | 595,894 | 0.9955 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,941 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.880 | 145,463 | 0.2963 | 5 | yes |
| gzip | 2 | 4.127 | 138,697 | 0.2825 | 5 | yes |
| gzip | 3 | 5.139 | 134,146 | 0.2732 | 5 | yes |
| gzip | 4 | 5.336 | 125,867 | 0.2564 | 5 | yes |
| gzip | 5 | 7.633 | 121,190 | 0.2469 | 6 | yes |
| gzip | 6 | 10.900 | 119,487 | 0.2434 | 5 | yes |
| gzip | 7 | 13.727 | 119,013 | 0.2424 | 5 | yes |
| gzip | 8 | 28.861 | 118,743 | 0.2419 | 5 | yes |
| gzip | 9 | 43.194 | 118,677 | 0.2417 | 5 | yes |
| brotli | 0 | 1.404 | 149,811 | 0.3052 | 5 | yes |
| brotli | 1 | 1.932 | 137,613 | 0.2803 | 5 | yes |
| brotli | 2 | 3.421 | 129,419 | 0.2636 | 5 | yes |
| brotli | 3 | 3.816 | 126,784 | 0.2582 | 5 | yes |
| brotli | 4 | 5.249 | 122,590 | 0.2497 | 5 | yes |
| brotli | 5 | 8.567 | 112,874 | 0.2299 | 5 | yes |
| brotli | 6 | 9.432 | 110,224 | 0.2245 | 5 | yes |
| brotli | 7 | 11.356 | 108,234 | 0.2205 | 5 | yes |
| brotli | 8 | 13.110 | 107,204 | 0.2184 | 5 | yes |
| brotli | 9 | 19.176 | 106,319 | 0.2166 | 5 | yes |
| brotli | 10 | 252.292 | 98,846 | 0.2013 | 5 | yes |
| brotli | 11 | 676.370 | 96,633 | 0.1968 | 5 | yes |
| zstd | 1 | 1.602 | 138,392 | 0.2819 | 5 | yes |
| zstd | 2 | 1.754 | 134,091 | 0.2731 | 5 | yes |
| zstd | 3 | 1.954 | 126,431 | 0.2575 | 5 | yes |
| zstd | 4 | 2.093 | 126,256 | 0.2572 | 5 | yes |
| zstd | 5 | 3.780 | 117,628 | 0.2396 | 5 | yes |
| zstd | 6 | 5.562 | 113,626 | 0.2314 | 5 | yes |
| zstd | 7 | 5.917 | 112,084 | 0.2283 | 5 | yes |
| zstd | 8 | 7.577 | 111,276 | 0.2267 | 5 | yes |
| zstd | 9 | 7.748 | 111,276 | 0.2267 | 5 | yes |
| zstd | 10 | 10.936 | 110,253 | 0.2246 | 5 | yes |
| zstd | 11 | 10.675 | 109,621 | 0.2233 | 5 | yes |
| zstd | 12 | 14.762 | 109,621 | 0.2233 | 5 | yes |
| zstd | 13 | 26.061 | 108,424 | 0.2208 | 5 | yes |
| zstd | 14 | 32.285 | 107,870 | 0.2197 | 5 | yes |
| zstd | 15 | 36.366 | 107,804 | 0.2196 | 5 | yes |
| zstd | 16 | 59.528 | 102,204 | 0.2082 | 5 | yes |
| zstd | 17 | 67.152 | 101,287 | 0.2063 | 5 | yes |
| zstd | 18 | 95.769 | 100,502 | 0.2047 | 5 | yes |
| zstd | 19 | 124.415 | 100,407 | 0.2045 | 5 | yes |
| zstd | 20 | 121.509 | 100,407 | 0.2045 | 5 | yes |
| zstd | 21 | 129.481 | 100,405 | 0.2045 | 5 | yes |
| zstd | 22 | 128.461 | 100,405 | 0.2045 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.107 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.132 | 4,874 | 0.2831 | 21 | yes |
| gzip | 3 | 0.146 | 4,806 | 0.2791 | 8 | yes |
| gzip | 4 | 0.166 | 4,530 | 0.2631 | 5 | yes |
| gzip | 5 | 0.228 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.257 | 4,425 | 0.2570 | 6 | yes |
| gzip | 7 | 0.301 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.422 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.458 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.070 | 5,235 | 0.3041 | 5 | yes |
| brotli | 1 | 0.070 | 5,134 | 0.2982 | 25 | no |
| brotli | 2 | 0.122 | 4,741 | 0.2754 | 17 | yes |
| brotli | 3 | 0.149 | 4,650 | 0.2701 | 12 | yes |
| brotli | 4 | 0.249 | 4,555 | 0.2646 | 8 | yes |
| brotli | 5 | 0.345 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.332 | 4,275 | 0.2483 | 9 | yes |
| brotli | 7 | 0.379 | 4,264 | 0.2477 | 6 | yes |
| brotli | 8 | 0.399 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 1.893 | 4,244 | 0.2465 | 9 | yes |
| brotli | 10 | 6.248 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 16.892 | 3,873 | 0.2250 | 5 | yes |
| zstd | 1 | 0.044 | 4,923 | 0.2859 | 19 | yes |
| zstd | 2 | 0.050 | 4,868 | 0.2827 | 13 | yes |
| zstd | 3 | 0.064 | 4,717 | 0.2740 | 8 | yes |
| zstd | 4 | 0.061 | 4,679 | 0.2718 | 18 | yes |
| zstd | 5 | 0.126 | 4,519 | 0.2625 | 21 | yes |
| zstd | 6 | 0.179 | 4,437 | 0.2577 | 8 | yes |
| zstd | 7 | 0.247 | 4,437 | 0.2577 | 6 | yes |
| zstd | 8 | 0.264 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.305 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.327 | 4,410 | 0.2561 | 6 | yes |
| zstd | 11 | 0.667 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.723 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.969 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.286 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.364 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.108 | 4,282 | 0.2487 | 6 | yes |
| zstd | 17 | 2.089 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.252 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.470 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.368 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.380 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 3.990 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.061 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.060 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.095 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.069 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.096 | 3,051 | 0.4261 | 17 | yes |
| gzip | 6 | 0.113 | 3,044 | 0.4251 | 8 | yes |
| gzip | 7 | 0.106 | 3,042 | 0.4248 | 9 | yes |
| gzip | 8 | 0.108 | 3,042 | 0.4248 | 11 | yes |
| gzip | 9 | 0.093 | 3,042 | 0.4248 | 14 | yes |
| brotli | 0 | 0.023 | 3,549 | 0.4956 | 9 | yes |
| brotli | 1 | 0.038 | 3,381 | 0.4721 | 9 | yes |
| brotli | 2 | 0.053 | 3,263 | 0.4557 | 25 | no |
| brotli | 3 | 0.069 | 3,216 | 0.4491 | 25 | no |
| brotli | 4 | 0.135 | 3,147 | 0.4395 | 16 | yes |
| brotli | 5 | 0.188 | 2,963 | 0.4138 | 13 | yes |
| brotli | 6 | 0.202 | 2,952 | 0.4122 | 6 | yes |
| brotli | 7 | 0.229 | 2,944 | 0.4111 | 9 | yes |
| brotli | 8 | 0.218 | 2,944 | 0.4111 | 16 | yes |
| brotli | 9 | 1.600 | 2,945 | 0.4113 | 9 | yes |
| brotli | 10 | 2.999 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.114 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.030 | 3,254 | 0.4544 | 25 | no |
| zstd | 2 | 0.031 | 3,200 | 0.4469 | 21 | yes |
| zstd | 3 | 0.037 | 3,176 | 0.4435 | 13 | yes |
| zstd | 4 | 0.053 | 3,102 | 0.4332 | 25 | no |
| zstd | 5 | 0.070 | 3,079 | 0.4300 | 12 | yes |
| zstd | 6 | 0.081 | 3,060 | 0.4273 | 25 | no |
| zstd | 7 | 0.096 | 3,053 | 0.4263 | 13 | yes |
| zstd | 8 | 0.087 | 3,053 | 0.4263 | 9 | yes |
| zstd | 9 | 0.180 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.166 | 3,055 | 0.4266 | 17 | yes |
| zstd | 11 | 0.316 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.457 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.592 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.598 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.591 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.129 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.135 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.153 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.148 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.051 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.042 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.104 | 2,992 | 0.4178 | 6 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 166,624 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.023 | 67,977 | 0.4080 | 5 | yes |
| gzip | 2 | 2.016 | 66,279 | 0.3978 | 5 | yes |
| gzip | 3 | 2.482 | 65,249 | 0.3916 | 5 | yes |
| gzip | 4 | 2.690 | 62,863 | 0.3773 | 5 | yes |
| gzip | 5 | 3.658 | 61,226 | 0.3675 | 5 | yes |
| gzip | 6 | 4.391 | 60,947 | 0.3658 | 6 | yes |
| gzip | 7 | 4.569 | 60,906 | 0.3655 | 5 | yes |
| gzip | 8 | 4.840 | 60,892 | 0.3654 | 5 | yes |
| gzip | 9 | 5.249 | 60,892 | 0.3654 | 5 | yes |
| brotli | 0 | 0.586 | 72,364 | 0.4343 | 5 | yes |
| brotli | 1 | 0.748 | 69,292 | 0.4159 | 5 | yes |
| brotli | 2 | 1.619 | 63,905 | 0.3835 | 5 | yes |
| brotli | 3 | 1.705 | 63,322 | 0.3800 | 5 | yes |
| brotli | 4 | 2.739 | 62,116 | 0.3728 | 5 | yes |
| brotli | 5 | 4.147 | 58,765 | 0.3527 | 5 | yes |
| brotli | 6 | 4.444 | 58,363 | 0.3503 | 5 | yes |
| brotli | 7 | 5.118 | 58,113 | 0.3488 | 9 | yes |
| brotli | 8 | 5.611 | 58,028 | 0.3483 | 5 | yes |
| brotli | 9 | 8.282 | 57,951 | 0.3478 | 5 | yes |
| brotli | 10 | 91.355 | 55,132 | 0.3309 | 5 | yes |
| brotli | 11 | 240.143 | 54,171 | 0.3251 | 5 | yes |
| zstd | 1 | 0.591 | 67,252 | 0.4036 | 5 | yes |
| zstd | 2 | 0.685 | 64,236 | 0.3855 | 5 | yes |
| zstd | 3 | 0.852 | 63,718 | 0.3824 | 5 | yes |
| zstd | 4 | 1.581 | 61,769 | 0.3707 | 5 | yes |
| zstd | 5 | 1.778 | 61,226 | 0.3675 | 6 | yes |
| zstd | 6 | 2.063 | 60,325 | 0.3620 | 5 | yes |
| zstd | 7 | 2.519 | 59,490 | 0.3570 | 5 | yes |
| zstd | 8 | 3.247 | 59,014 | 0.3542 | 6 | yes |
| zstd | 9 | 3.662 | 58,750 | 0.3526 | 5 | yes |
| zstd | 10 | 4.234 | 58,611 | 0.3518 | 5 | yes |
| zstd | 11 | 8.205 | 58,323 | 0.3500 | 5 | yes |
| zstd | 12 | 8.975 | 58,307 | 0.3499 | 5 | yes |
| zstd | 13 | 13.709 | 57,310 | 0.3439 | 5 | yes |
| zstd | 14 | 15.864 | 56,860 | 0.3412 | 5 | yes |
| zstd | 15 | 16.652 | 56,832 | 0.3411 | 5 | yes |
| zstd | 16 | 21.243 | 56,647 | 0.3400 | 5 | yes |
| zstd | 17 | 21.762 | 56,647 | 0.3400 | 5 | yes |
| zstd | 18 | 35.405 | 56,578 | 0.3396 | 5 | yes |
| zstd | 19 | 35.065 | 56,578 | 0.3396 | 5 | yes |
| zstd | 20 | 37.087 | 56,578 | 0.3396 | 5 | yes |
| zstd | 21 | 37.183 | 56,578 | 0.3396 | 11 | yes |
| zstd | 22 | 34.532 | 56,578 | 0.3396 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.769 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.889 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.031 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.007 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.324 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.648 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.991 | 25,913 | 0.3538 | 7 | yes |
| gzip | 8 | 2.641 | 25,894 | 0.3536 | 9 | yes |
| gzip | 9 | 2.900 | 25,894 | 0.3536 | 7 | yes |
| brotli | 0 | 0.273 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.350 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.718 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.776 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.242 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.809 | 25,217 | 0.3443 | 8 | yes |
| brotli | 6 | 1.974 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.400 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.485 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.319 | 24,870 | 0.3396 | 8 | yes |
| brotli | 10 | 36.199 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 89.694 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.230 | 28,919 | 0.3949 | 5 | yes |
| zstd | 2 | 0.261 | 28,008 | 0.3824 | 6 | yes |
| zstd | 3 | 0.295 | 27,463 | 0.3750 | 7 | yes |
| zstd | 4 | 0.379 | 27,100 | 0.3700 | 6 | yes |
| zstd | 5 | 0.667 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 0.916 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.081 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.200 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.543 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.728 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.091 | 25,317 | 0.3457 | 7 | yes |
| zstd | 12 | 3.570 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 4.841 | 25,185 | 0.3439 | 8 | yes |
| zstd | 14 | 7.196 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.346 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.440 | 24,499 | 0.3345 | 6 | yes |
| zstd | 17 | 9.545 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.572 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 16.987 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 16.485 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 16.787 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 17.419 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.635 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.733 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.847 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 1.002 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.267 | 22,906 | 0.2536 | 7 | yes |
| gzip | 6 | 2.103 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.605 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 10.397 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 10.563 | 22,318 | 0.2471 | 11 | yes |
| brotli | 0 | 0.252 | 27,781 | 0.3075 | 5 | yes |
| brotli | 1 | 0.345 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.684 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.727 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.174 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.709 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 1.780 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.283 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.629 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 4.786 | 21,604 | 0.2392 | 8 | yes |
| brotli | 10 | 31.742 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 100.997 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.255 | 24,608 | 0.2724 | 7 | yes |
| zstd | 2 | 0.291 | 24,387 | 0.2700 | 5 | yes |
| zstd | 3 | 0.285 | 24,157 | 0.2674 | 5 | yes |
| zstd | 4 | 0.359 | 24,076 | 0.2665 | 5 | yes |
| zstd | 5 | 0.639 | 23,365 | 0.2586 | 7 | yes |
| zstd | 6 | 0.982 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.139 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.427 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.811 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.172 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.911 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 5.426 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 5.949 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 7.983 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 9.682 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 12.320 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 17.775 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 25.883 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 25.258 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 30.817 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 45.735 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 53.839 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.165 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.226 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.430 | 36,152 | 0.1558 | 11 | yes |
| gzip | 4 | 1.636 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.100 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.851 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.485 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.626 | 30,670 | 0.1321 | 8 | yes |
| gzip | 9 | 4.398 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.408 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.612 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.169 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.234 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.884 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.756 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.093 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.377 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 3.820 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.016 | 26,569 | 0.1145 | 7 | yes |
| brotli | 10 | 96.775 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 290.725 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.411 | 35,549 | 0.1532 | 7 | yes |
| zstd | 2 | 0.449 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.476 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.262 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.499 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.800 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.011 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.473 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.069 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.500 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.821 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.886 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 19.223 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.879 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.789 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 46.841 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 51.242 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 70.313 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 77.271 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 78.966 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 75.977 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 79.977 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,088,846 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 102.966 | 3,786,228 | 0.2216 | 5 | yes |
| gzip | 2 | 108.506 | 3,637,199 | 0.2128 | 5 | yes |
| gzip | 3 | 131.384 | 3,517,128 | 0.2058 | 5 | yes |
| gzip | 4 | 141.126 | 3,388,581 | 0.1983 | 5 | yes |
| gzip | 5 | 185.145 | 3,167,259 | 0.1853 | 5 | yes |
| gzip | 6 | 279.037 | 3,098,703 | 0.1813 | 5 | yes |
| gzip | 7 | 379.406 | 3,032,397 | 0.1774 | 5 | yes |
| gzip | 8 | 1167.699 | 2,964,487 | 0.1735 | 5 | yes |
| gzip | 9 | 1245.717 | 2,963,688 | 0.1734 | 5 | yes |
| brotli | 0 | 50.050 | 4,195,167 | 0.2455 | 5 | yes |
| brotli | 1 | 60.510 | 3,728,851 | 0.2182 | 5 | yes |
| brotli | 2 | 107.714 | 3,433,235 | 0.2009 | 5 | yes |
| brotli | 3 | 124.474 | 3,377,124 | 0.1976 | 5 | yes |
| brotli | 4 | 183.450 | 3,303,878 | 0.1933 | 5 | yes |
| brotli | 5 | 275.427 | 2,946,664 | 0.1724 | 5 | yes |
| brotli | 6 | 334.330 | 2,915,320 | 0.1706 | 5 | yes |
| brotli | 7 | 511.142 | 2,887,582 | 0.1690 | 5 | yes |
| brotli | 8 | 641.204 | 2,868,532 | 0.1679 | 5 | yes |
| brotli | 9 | 884.720 | 2,857,411 | 0.1672 | 5 | yes |
| brotli | 10 | 10773.878 | 2,448,858 | 0.1433 | 5 | yes |
| brotli | 11 | 28084.462 | 2,330,104 | 0.1364 | 5 | yes |
| zstd | 1 | 42.002 | 3,534,613 | 0.2068 | 5 | yes |
| zstd | 2 | 49.870 | 3,612,321 | 0.2114 | 5 | yes |
| zstd | 3 | 62.398 | 3,537,742 | 0.2070 | 5 | yes |
| zstd | 4 | 76.548 | 3,532,781 | 0.2067 | 5 | yes |
| zstd | 5 | 126.701 | 3,315,447 | 0.1940 | 5 | yes |
| zstd | 6 | 185.101 | 3,093,505 | 0.1810 | 5 | yes |
| zstd | 7 | 213.798 | 3,054,755 | 0.1788 | 5 | yes |
| zstd | 8 | 280.934 | 2,951,480 | 0.1727 | 5 | yes |
| zstd | 9 | 291.236 | 2,962,142 | 0.1733 | 5 | yes |
| zstd | 10 | 373.567 | 2,925,109 | 0.1712 | 5 | yes |
| zstd | 11 | 541.019 | 2,897,547 | 0.1696 | 5 | yes |
| zstd | 12 | 583.491 | 2,897,453 | 0.1696 | 5 | yes |
| zstd | 13 | 885.270 | 2,874,535 | 0.1682 | 5 | yes |
| zstd | 14 | 1082.081 | 2,860,101 | 0.1674 | 5 | yes |
| zstd | 15 | 1449.941 | 2,856,465 | 0.1672 | 5 | yes |
| zstd | 16 | 2846.161 | 2,667,907 | 0.1561 | 5 | yes |
| zstd | 17 | 3682.730 | 2,576,011 | 0.1507 | 5 | yes |
| zstd | 18 | 5623.561 | 2,556,665 | 0.1496 | 5 | yes |
| zstd | 19 | 6218.333 | 2,549,586 | 0.1492 | 5 | yes |
| zstd | 20 | 6526.764 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 21 | 6418.015 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 22 | 6501.481 | 2,543,154 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.158 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.437 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 16.558 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 17.064 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 24.988 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 29.021 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 30.913 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 34.174 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 34.606 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.708 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 4.845 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.803 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.429 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 15.894 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 25.174 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 28.868 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 40.749 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 46.040 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 53.311 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 850.516 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1904.741 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 2.636 | 457,015 | 0.5316 | 6 | yes |
| zstd | 2 | 3.742 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 4.746 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 5.612 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 9.371 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 12.703 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.294 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 17.867 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 17.756 | 386,404 | 0.4494 | 7 | yes |
| zstd | 10 | 20.037 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 23.856 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 23.961 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 51.498 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 52.506 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 53.255 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 91.495 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 120.549 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 147.210 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 169.107 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 164.888 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 163.018 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 162.356 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.151 | 5,565 | 0.2841 | 5 | yes |
| gzip | 2 | 0.205 | 5,486 | 0.2801 | 5 | yes |
| gzip | 3 | 0.191 | 5,419 | 0.2767 | 10 | yes |
| gzip | 4 | 0.211 | 5,202 | 0.2656 | 5 | yes |
| gzip | 5 | 0.299 | 4,958 | 0.2531 | 5 | yes |
| gzip | 6 | 0.392 | 4,947 | 0.2526 | 7 | yes |
| gzip | 7 | 0.526 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.684 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.625 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.048 | 6,082 | 0.3105 | 16 | yes |
| brotli | 1 | 0.070 | 5,794 | 0.2958 | 22 | yes |
| brotli | 2 | 0.143 | 5,002 | 0.2554 | 25 | no |
| brotli | 3 | 0.176 | 4,986 | 0.2546 | 9 | yes |
| brotli | 4 | 0.277 | 4,954 | 0.2529 | 5 | yes |
| brotli | 5 | 0.421 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.450 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.535 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.599 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.695 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 6.955 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 21.159 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.047 | 5,441 | 0.2778 | 25 | no |
| zstd | 2 | 0.053 | 5,242 | 0.2676 | 9 | yes |
| zstd | 3 | 0.065 | 5,234 | 0.2672 | 10 | yes |
| zstd | 4 | 0.064 | 5,212 | 0.2661 | 13 | yes |
| zstd | 5 | 0.132 | 5,133 | 0.2621 | 17 | yes |
| zstd | 6 | 0.198 | 4,853 | 0.2478 | 14 | yes |
| zstd | 7 | 0.247 | 4,757 | 0.2429 | 13 | yes |
| zstd | 8 | 0.293 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.358 | 4,744 | 0.2422 | 5 | yes |
| zstd | 10 | 0.418 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.630 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.718 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 1.086 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.862 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.904 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.598 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.729 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.596 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 5.040 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.223 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 5.080 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.289 | 4,415 | 0.2254 | 5 | yes |
