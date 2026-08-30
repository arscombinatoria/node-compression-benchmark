# Node Compression Benchmark

Last updated: 2026-08-30T21:14:20.008Z

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
| gzip | 1 | 0.914 | 31,033 | 0.3941 | 6 | yes |
| gzip | 2 | 0.925 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.011 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.107 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.466 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.698 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 1.889 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.076 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.071 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.319 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.512 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.724 | 29,394 | 0.3733 | 5 | yes |
| brotli | 3 | 0.814 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.233 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 1.768 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 1.936 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.132 | 26,773 | 0.3400 | 9 | yes |
| brotli | 8 | 2.330 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.395 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 29.118 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 84.102 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.230 | 31,062 | 0.3944 | 10 | yes |
| zstd | 2 | 0.289 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.333 | 29,214 | 0.3710 | 13 | yes |
| zstd | 4 | 0.380 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.746 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 0.983 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.191 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.321 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.489 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.630 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.132 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.308 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 4.833 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 6.618 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 6.743 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 8.731 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 8.610 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 8.661 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 16.868 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 16.840 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 16.710 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 16.746 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 78.558 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 83.587 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 87.705 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 94.260 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 110.185 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 124.396 | 3,156,147 | 0.5767 | 7 | yes |
| gzip | 7 | 132.247 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 150.038 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 162.952 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 17.558 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 22.743 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 39.943 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 48.358 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 79.894 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 100.234 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 122.408 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 417.853 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 527.928 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 666.068 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5016.095 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 10478.115 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 15.556 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 17.552 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 26.684 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 38.992 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 52.835 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 63.154 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 69.820 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 82.344 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 79.940 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 94.475 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 127.674 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 131.195 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 282.203 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 316.981 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 372.629 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 527.521 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 619.336 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 845.454 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 926.241 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 911.169 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 923.139 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 930.511 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 10.564 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 10.623 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 10.525 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 11.011 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 10.958 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 10.959 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 10.951 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 10.956 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 10.971 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.236 | 596,751 | 0.9970 | 6 | yes |
| brotli | 1 | 0.273 | 598,581 | 1.0000 | 5 | yes |
| brotli | 2 | 0.538 | 598,587 | 1.0000 | 5 | yes |
| brotli | 3 | 0.609 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 0.691 | 598,581 | 1.0000 | 5 | yes |
| brotli | 5 | 1.398 | 598,581 | 1.0000 | 5 | yes |
| brotli | 6 | 1.543 | 598,581 | 1.0000 | 20 | yes |
| brotli | 7 | 1.827 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 1.852 | 598,581 | 1.0000 | 5 | yes |
| brotli | 9 | 4.181 | 598,581 | 1.0000 | 5 | yes |
| brotli | 10 | 91.155 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 214.975 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.271 | 598,601 | 1.0000 | 10 | yes |
| zstd | 2 | 0.302 | 598,600 | 1.0000 | 5 | yes |
| zstd | 3 | 0.373 | 598,600 | 1.0000 | 25 | no |
| zstd | 4 | 0.364 | 598,600 | 1.0000 | 10 | yes |
| zstd | 5 | 0.440 | 598,600 | 1.0000 | 8 | yes |
| zstd | 6 | 0.458 | 598,600 | 1.0000 | 17 | yes |
| zstd | 7 | 0.541 | 598,600 | 1.0000 | 5 | yes |
| zstd | 8 | 0.548 | 598,600 | 1.0000 | 19 | yes |
| zstd | 9 | 0.705 | 598,600 | 1.0000 | 5 | yes |
| zstd | 10 | 0.723 | 598,600 | 1.0000 | 5 | yes |
| zstd | 11 | 0.798 | 598,600 | 1.0000 | 5 | yes |
| zstd | 12 | 0.802 | 598,600 | 1.0000 | 5 | yes |
| zstd | 13 | 2.672 | 595,998 | 0.9957 | 5 | yes |
| zstd | 14 | 2.525 | 595,998 | 0.9957 | 5 | yes |
| zstd | 15 | 2.583 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 13.498 | 595,898 | 0.9955 | 5 | yes |
| zstd | 17 | 13.661 | 595,889 | 0.9955 | 5 | yes |
| zstd | 18 | 17.654 | 595,891 | 0.9955 | 5 | yes |
| zstd | 19 | 21.313 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 21.218 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 21.237 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 21.349 | 595,894 | 0.9955 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,941 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.185 | 145,463 | 0.2963 | 5 | yes |
| gzip | 2 | 4.049 | 138,697 | 0.2825 | 5 | yes |
| gzip | 3 | 5.010 | 134,146 | 0.2732 | 5 | yes |
| gzip | 4 | 5.156 | 125,867 | 0.2564 | 5 | yes |
| gzip | 5 | 7.350 | 121,190 | 0.2469 | 5 | yes |
| gzip | 6 | 10.529 | 119,487 | 0.2434 | 5 | yes |
| gzip | 7 | 13.389 | 119,013 | 0.2424 | 10 | yes |
| gzip | 8 | 27.623 | 118,743 | 0.2419 | 6 | yes |
| gzip | 9 | 43.070 | 118,677 | 0.2417 | 5 | yes |
| brotli | 0 | 1.333 | 149,811 | 0.3052 | 5 | yes |
| brotli | 1 | 1.780 | 137,613 | 0.2803 | 5 | yes |
| brotli | 2 | 3.333 | 129,419 | 0.2636 | 5 | yes |
| brotli | 3 | 3.744 | 126,784 | 0.2582 | 5 | yes |
| brotli | 4 | 5.155 | 122,590 | 0.2497 | 5 | yes |
| brotli | 5 | 8.083 | 112,874 | 0.2299 | 7 | yes |
| brotli | 6 | 9.688 | 110,224 | 0.2245 | 8 | yes |
| brotli | 7 | 11.164 | 108,234 | 0.2205 | 5 | yes |
| brotli | 8 | 12.854 | 107,204 | 0.2184 | 5 | yes |
| brotli | 9 | 18.368 | 106,319 | 0.2166 | 17 | yes |
| brotli | 10 | 241.952 | 98,846 | 0.2013 | 5 | yes |
| brotli | 11 | 639.346 | 96,633 | 0.1968 | 5 | yes |
| zstd | 1 | 1.447 | 138,392 | 0.2819 | 5 | yes |
| zstd | 2 | 1.530 | 134,091 | 0.2731 | 5 | yes |
| zstd | 3 | 1.742 | 126,431 | 0.2575 | 5 | yes |
| zstd | 4 | 1.982 | 126,256 | 0.2572 | 5 | yes |
| zstd | 5 | 3.586 | 117,628 | 0.2396 | 5 | yes |
| zstd | 6 | 4.966 | 113,626 | 0.2314 | 5 | yes |
| zstd | 7 | 5.753 | 112,084 | 0.2283 | 5 | yes |
| zstd | 8 | 7.296 | 111,276 | 0.2267 | 5 | yes |
| zstd | 9 | 7.293 | 111,276 | 0.2267 | 5 | yes |
| zstd | 10 | 8.512 | 110,253 | 0.2246 | 5 | yes |
| zstd | 11 | 10.396 | 109,621 | 0.2233 | 5 | yes |
| zstd | 12 | 10.502 | 109,621 | 0.2233 | 5 | yes |
| zstd | 13 | 25.059 | 108,424 | 0.2208 | 5 | yes |
| zstd | 14 | 30.289 | 107,870 | 0.2197 | 5 | yes |
| zstd | 15 | 34.000 | 107,804 | 0.2196 | 5 | yes |
| zstd | 16 | 56.771 | 102,204 | 0.2082 | 5 | yes |
| zstd | 17 | 64.029 | 101,287 | 0.2063 | 5 | yes |
| zstd | 18 | 89.179 | 100,502 | 0.2047 | 5 | yes |
| zstd | 19 | 114.073 | 100,407 | 0.2045 | 5 | yes |
| zstd | 20 | 113.770 | 100,407 | 0.2045 | 5 | yes |
| zstd | 21 | 114.157 | 100,405 | 0.2045 | 5 | yes |
| zstd | 22 | 114.222 | 100,405 | 0.2045 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.104 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.119 | 4,874 | 0.2831 | 9 | yes |
| gzip | 3 | 0.139 | 4,806 | 0.2791 | 11 | yes |
| gzip | 4 | 0.157 | 4,530 | 0.2631 | 15 | yes |
| gzip | 5 | 0.220 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.251 | 4,425 | 0.2570 | 7 | yes |
| gzip | 7 | 0.299 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.422 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.416 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.043 | 5,235 | 0.3041 | 14 | yes |
| brotli | 1 | 0.056 | 5,134 | 0.2982 | 25 | yes |
| brotli | 2 | 0.099 | 4,741 | 0.2754 | 25 | no |
| brotli | 3 | 0.123 | 4,650 | 0.2701 | 25 | no |
| brotli | 4 | 0.224 | 4,555 | 0.2646 | 8 | yes |
| brotli | 5 | 0.303 | 4,276 | 0.2484 | 8 | yes |
| brotli | 6 | 0.326 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.370 | 4,264 | 0.2477 | 6 | yes |
| brotli | 8 | 0.383 | 4,257 | 0.2473 | 6 | yes |
| brotli | 9 | 1.920 | 4,244 | 0.2465 | 8 | yes |
| brotli | 10 | 6.138 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 16.501 | 3,873 | 0.2250 | 5 | yes |
| zstd | 1 | 0.042 | 4,923 | 0.2859 | 21 | yes |
| zstd | 2 | 0.048 | 4,868 | 0.2827 | 9 | yes |
| zstd | 3 | 0.056 | 4,717 | 0.2740 | 11 | yes |
| zstd | 4 | 0.067 | 4,679 | 0.2718 | 5 | yes |
| zstd | 5 | 0.123 | 4,519 | 0.2625 | 9 | yes |
| zstd | 6 | 0.166 | 4,437 | 0.2577 | 12 | yes |
| zstd | 7 | 0.198 | 4,437 | 0.2577 | 11 | yes |
| zstd | 8 | 0.227 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.260 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.283 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.596 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.629 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.843 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.284 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.339 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 1.898 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 1.990 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 1.990 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 3.902 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 3.890 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 3.891 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 3.890 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.045 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.046 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.050 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.060 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.096 | 3,051 | 0.4261 | 7 | yes |
| gzip | 6 | 0.084 | 3,044 | 0.4251 | 22 | yes |
| gzip | 7 | 0.092 | 3,042 | 0.4248 | 17 | yes |
| gzip | 8 | 0.094 | 3,042 | 0.4248 | 13 | yes |
| gzip | 9 | 0.088 | 3,042 | 0.4248 | 5 | yes |
| brotli | 0 | 0.023 | 3,549 | 0.4956 | 8 | yes |
| brotli | 1 | 0.049 | 3,381 | 0.4721 | 25 | no |
| brotli | 2 | 0.085 | 3,263 | 0.4557 | 25 | no |
| brotli | 3 | 0.063 | 3,216 | 0.4491 | 14 | yes |
| brotli | 4 | 0.115 | 3,147 | 0.4395 | 16 | yes |
| brotli | 5 | 0.181 | 2,963 | 0.4138 | 5 | yes |
| brotli | 6 | 0.181 | 2,952 | 0.4122 | 7 | yes |
| brotli | 7 | 0.215 | 2,944 | 0.4111 | 5 | yes |
| brotli | 8 | 0.216 | 2,944 | 0.4111 | 7 | yes |
| brotli | 9 | 1.713 | 2,945 | 0.4113 | 12 | yes |
| brotli | 10 | 2.793 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 6.931 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.029 | 3,254 | 0.4544 | 25 | no |
| zstd | 2 | 0.028 | 3,200 | 0.4469 | 10 | yes |
| zstd | 3 | 0.034 | 3,176 | 0.4435 | 5 | yes |
| zstd | 4 | 0.047 | 3,102 | 0.4332 | 25 | no |
| zstd | 5 | 0.059 | 3,079 | 0.4300 | 25 | no |
| zstd | 6 | 0.072 | 3,060 | 0.4273 | 18 | yes |
| zstd | 7 | 0.084 | 3,053 | 0.4263 | 16 | yes |
| zstd | 8 | 0.084 | 3,053 | 0.4263 | 5 | yes |
| zstd | 9 | 0.175 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.150 | 3,055 | 0.4266 | 6 | yes |
| zstd | 11 | 0.292 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.415 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.515 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.507 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.524 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.011 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.007 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 0.994 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 0.990 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.003 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.002 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 0.991 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 167,536 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.831 | 68,258 | 0.4074 | 5 | yes |
| gzip | 2 | 2.008 | 66,628 | 0.3977 | 5 | yes |
| gzip | 3 | 2.257 | 65,566 | 0.3914 | 5 | yes |
| gzip | 4 | 2.429 | 63,153 | 0.3770 | 5 | yes |
| gzip | 5 | 3.316 | 61,493 | 0.3670 | 5 | yes |
| gzip | 6 | 4.059 | 61,220 | 0.3654 | 5 | yes |
| gzip | 7 | 4.403 | 61,178 | 0.3652 | 5 | yes |
| gzip | 8 | 4.746 | 61,159 | 0.3650 | 5 | yes |
| gzip | 9 | 4.755 | 61,159 | 0.3650 | 5 | yes |
| brotli | 0 | 0.578 | 72,624 | 0.4335 | 5 | yes |
| brotli | 1 | 0.729 | 69,540 | 0.4151 | 5 | yes |
| brotli | 2 | 1.450 | 64,217 | 0.3833 | 5 | yes |
| brotli | 3 | 1.658 | 63,611 | 0.3797 | 5 | yes |
| brotli | 4 | 2.476 | 62,461 | 0.3728 | 5 | yes |
| brotli | 5 | 3.740 | 59,022 | 0.3523 | 5 | yes |
| brotli | 6 | 4.201 | 58,657 | 0.3501 | 5 | yes |
| brotli | 7 | 5.065 | 58,375 | 0.3484 | 5 | yes |
| brotli | 8 | 5.363 | 58,271 | 0.3478 | 5 | yes |
| brotli | 9 | 7.909 | 58,184 | 0.3473 | 5 | yes |
| brotli | 10 | 84.643 | 55,378 | 0.3305 | 5 | yes |
| brotli | 11 | 215.000 | 54,340 | 0.3243 | 5 | yes |
| zstd | 1 | 0.529 | 67,501 | 0.4029 | 5 | yes |
| zstd | 2 | 0.663 | 64,552 | 0.3853 | 5 | yes |
| zstd | 3 | 0.822 | 64,032 | 0.3822 | 5 | yes |
| zstd | 4 | 1.427 | 62,020 | 0.3702 | 5 | yes |
| zstd | 5 | 1.614 | 61,498 | 0.3671 | 5 | yes |
| zstd | 6 | 2.008 | 60,584 | 0.3616 | 5 | yes |
| zstd | 7 | 2.458 | 59,738 | 0.3566 | 5 | yes |
| zstd | 8 | 3.046 | 59,250 | 0.3537 | 5 | yes |
| zstd | 9 | 3.919 | 58,995 | 0.3521 | 7 | yes |
| zstd | 10 | 4.151 | 58,843 | 0.3512 | 5 | yes |
| zstd | 11 | 7.789 | 58,566 | 0.3496 | 5 | yes |
| zstd | 12 | 8.033 | 58,550 | 0.3495 | 5 | yes |
| zstd | 13 | 13.081 | 57,536 | 0.3434 | 5 | yes |
| zstd | 14 | 15.261 | 57,080 | 0.3407 | 5 | yes |
| zstd | 15 | 15.546 | 57,055 | 0.3406 | 5 | yes |
| zstd | 16 | 19.979 | 56,875 | 0.3395 | 5 | yes |
| zstd | 17 | 19.927 | 56,875 | 0.3395 | 5 | yes |
| zstd | 18 | 33.645 | 56,810 | 0.3391 | 5 | yes |
| zstd | 19 | 33.634 | 56,810 | 0.3391 | 5 | yes |
| zstd | 20 | 33.635 | 56,810 | 0.3391 | 5 | yes |
| zstd | 21 | 33.743 | 56,810 | 0.3391 | 5 | yes |
| zstd | 22 | 33.653 | 56,810 | 0.3391 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.740 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.799 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.913 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 0.992 | 26,950 | 0.3680 | 9 | yes |
| gzip | 5 | 1.305 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.601 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.920 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.549 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.552 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.233 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.303 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.592 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.679 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.086 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.630 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 1.779 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.160 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.236 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.358 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 34.266 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 84.704 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.186 | 28,919 | 0.3949 | 12 | yes |
| zstd | 2 | 0.229 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.265 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.321 | 27,100 | 0.3700 | 6 | yes |
| zstd | 5 | 0.622 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 0.860 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.056 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.166 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.364 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.529 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 2.948 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.109 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 4.655 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 6.397 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 6.475 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 8.466 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 8.560 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 8.558 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 16.192 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 16.224 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 16.280 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 16.217 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.624 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.705 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.819 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 0.904 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.275 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 1.853 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.526 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 10.092 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 10.160 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.247 | 27,781 | 0.3075 | 5 | yes |
| brotli | 1 | 0.332 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.607 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.703 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.023 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.514 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 1.737 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.076 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.381 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 4.776 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 30.253 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 91.164 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.246 | 24,608 | 0.2724 | 5 | yes |
| zstd | 2 | 0.259 | 24,387 | 0.2700 | 6 | yes |
| zstd | 3 | 0.285 | 24,157 | 0.2674 | 5 | yes |
| zstd | 4 | 0.323 | 24,076 | 0.2665 | 6 | yes |
| zstd | 5 | 0.631 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 0.884 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.079 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.275 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.613 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 1.960 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.419 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.744 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 5.229 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 7.092 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 8.737 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 11.770 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 15.961 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 24.672 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 23.674 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 28.108 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 41.002 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 49.270 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.040 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.094 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.271 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.468 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 1.891 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.525 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.098 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.125 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.184 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.383 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.529 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.010 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.173 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.644 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.457 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 2.722 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.046 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 3.384 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.646 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 85.463 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 256.370 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.415 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.442 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.458 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.130 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.326 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.572 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 1.759 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.173 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 2.678 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.091 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.824 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.637 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.139 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 20.145 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 25.266 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 41.178 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 45.058 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 61.938 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 68.122 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 70.454 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 70.416 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 70.426 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,088,846 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 91.418 | 3,786,228 | 0.2216 | 5 | yes |
| gzip | 2 | 99.241 | 3,637,199 | 0.2128 | 5 | yes |
| gzip | 3 | 119.268 | 3,517,128 | 0.2058 | 5 | yes |
| gzip | 4 | 130.575 | 3,388,581 | 0.1983 | 5 | yes |
| gzip | 5 | 171.586 | 3,167,259 | 0.1853 | 5 | yes |
| gzip | 6 | 254.268 | 3,098,703 | 0.1813 | 5 | yes |
| gzip | 7 | 348.424 | 3,032,397 | 0.1774 | 5 | yes |
| gzip | 8 | 1046.268 | 2,964,487 | 0.1735 | 5 | yes |
| gzip | 9 | 1092.779 | 2,963,688 | 0.1734 | 5 | yes |
| brotli | 0 | 39.444 | 4,195,167 | 0.2455 | 5 | yes |
| brotli | 1 | 53.050 | 3,728,851 | 0.2182 | 5 | yes |
| brotli | 2 | 93.805 | 3,433,235 | 0.2009 | 5 | yes |
| brotli | 3 | 106.897 | 3,377,124 | 0.1976 | 5 | yes |
| brotli | 4 | 160.228 | 3,303,878 | 0.1933 | 5 | yes |
| brotli | 5 | 245.797 | 2,946,664 | 0.1724 | 5 | yes |
| brotli | 6 | 300.406 | 2,915,320 | 0.1706 | 5 | yes |
| brotli | 7 | 469.526 | 2,887,582 | 0.1690 | 5 | yes |
| brotli | 8 | 586.968 | 2,868,532 | 0.1679 | 5 | yes |
| brotli | 9 | 774.143 | 2,857,411 | 0.1672 | 5 | yes |
| brotli | 10 | 8819.115 | 2,448,858 | 0.1433 | 5 | yes |
| brotli | 11 | 23788.388 | 2,330,104 | 0.1364 | 5 | yes |
| zstd | 1 | 36.198 | 3,534,613 | 0.2068 | 5 | yes |
| zstd | 2 | 45.345 | 3,612,321 | 0.2114 | 5 | yes |
| zstd | 3 | 56.418 | 3,537,742 | 0.2070 | 5 | yes |
| zstd | 4 | 68.473 | 3,532,781 | 0.2067 | 5 | yes |
| zstd | 5 | 111.220 | 3,315,447 | 0.1940 | 5 | yes |
| zstd | 6 | 161.712 | 3,093,505 | 0.1810 | 5 | yes |
| zstd | 7 | 190.894 | 3,054,755 | 0.1788 | 5 | yes |
| zstd | 8 | 249.240 | 2,951,480 | 0.1727 | 5 | yes |
| zstd | 9 | 254.743 | 2,962,142 | 0.1733 | 5 | yes |
| zstd | 10 | 318.469 | 2,925,109 | 0.1712 | 5 | yes |
| zstd | 11 | 463.164 | 2,897,547 | 0.1696 | 5 | yes |
| zstd | 12 | 474.545 | 2,897,453 | 0.1696 | 5 | yes |
| zstd | 13 | 712.888 | 2,874,535 | 0.1682 | 5 | yes |
| zstd | 14 | 864.829 | 2,860,101 | 0.1674 | 5 | yes |
| zstd | 15 | 1091.343 | 2,856,465 | 0.1672 | 5 | yes |
| zstd | 16 | 2383.611 | 2,667,907 | 0.1561 | 5 | yes |
| zstd | 17 | 3037.666 | 2,576,011 | 0.1507 | 5 | yes |
| zstd | 18 | 4627.411 | 2,556,665 | 0.1496 | 5 | yes |
| zstd | 19 | 5021.968 | 2,549,586 | 0.1492 | 5 | yes |
| zstd | 20 | 5091.782 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 21 | 5105.149 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 22 | 5300.192 | 2,543,154 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 11.863 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 12.848 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 14.786 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 15.450 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 22.331 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 26.406 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 27.919 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 30.566 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 30.594 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.290 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 4.300 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 8.707 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 10.186 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 14.336 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 22.945 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 26.430 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 37.377 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 42.221 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 52.537 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 770.671 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1659.844 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 2.542 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.304 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 4.286 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 5.216 | 408,051 | 0.4746 | 8 | yes |
| zstd | 5 | 8.297 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 11.281 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 12.567 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 15.639 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 15.789 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 17.857 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 21.670 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 21.743 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 46.750 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 48.255 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 48.505 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 80.460 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 101.080 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 128.877 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 141.821 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 141.829 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 142.283 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 142.924 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.135 | 5,565 | 0.2841 | 5 | yes |
| gzip | 2 | 0.145 | 5,486 | 0.2801 | 8 | yes |
| gzip | 3 | 0.153 | 5,419 | 0.2767 | 9 | yes |
| gzip | 4 | 0.178 | 5,202 | 0.2656 | 8 | yes |
| gzip | 5 | 0.256 | 4,958 | 0.2531 | 5 | yes |
| gzip | 6 | 0.337 | 4,947 | 0.2526 | 5 | yes |
| gzip | 7 | 0.455 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.617 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.602 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.043 | 6,082 | 0.3105 | 15 | yes |
| brotli | 1 | 0.061 | 5,794 | 0.2958 | 19 | yes |
| brotli | 2 | 0.116 | 5,002 | 0.2554 | 15 | yes |
| brotli | 3 | 0.159 | 4,986 | 0.2546 | 5 | yes |
| brotli | 4 | 0.252 | 4,954 | 0.2529 | 5 | yes |
| brotli | 5 | 0.376 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.405 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.474 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.516 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 2.100 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 6.546 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 19.554 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.044 | 5,441 | 0.2778 | 19 | yes |
| zstd | 2 | 0.046 | 5,242 | 0.2676 | 8 | yes |
| zstd | 3 | 0.063 | 5,234 | 0.2672 | 5 | yes |
| zstd | 4 | 0.060 | 5,212 | 0.2661 | 9 | yes |
| zstd | 5 | 0.121 | 5,133 | 0.2621 | 9 | yes |
| zstd | 6 | 0.188 | 4,853 | 0.2478 | 5 | yes |
| zstd | 7 | 0.223 | 4,757 | 0.2429 | 5 | yes |
| zstd | 8 | 0.256 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.313 | 4,744 | 0.2422 | 5 | yes |
| zstd | 10 | 0.371 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.554 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.632 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.908 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.558 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.667 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.286 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.293 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.287 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 4.464 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 4.499 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 4.506 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 4.500 | 4,415 | 0.2254 | 5 | yes |
