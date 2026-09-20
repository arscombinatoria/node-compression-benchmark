# Node Compression Benchmark

Last updated: 2026-09-20T21:17:44.339Z

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
| gzip | 1 | 1.067 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.101 | 30,134 | 0.3827 | 6 | yes |
| gzip | 3 | 1.167 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.286 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.710 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.023 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.215 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.472 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.468 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.361 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.635 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.865 | 29,394 | 0.3733 | 5 | yes |
| brotli | 3 | 0.956 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.417 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.114 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.226 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.726 | 26,773 | 0.3400 | 6 | yes |
| brotli | 8 | 2.680 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.963 | 26,711 | 0.3392 | 7 | yes |
| brotli | 10 | 34.616 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 99.236 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.273 | 31,062 | 0.3944 | 14 | yes |
| zstd | 2 | 0.318 | 30,069 | 0.3818 | 25 | yes |
| zstd | 3 | 0.357 | 29,214 | 0.3710 | 8 | yes |
| zstd | 4 | 0.430 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.865 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.141 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.443 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.557 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.728 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.949 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.739 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.994 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.892 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.877 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.969 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.640 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.372 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 9.918 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.571 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.670 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.390 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.671 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 94.091 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 99.257 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 102.407 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 111.926 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 129.324 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 148.141 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 158.252 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 176.826 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 188.832 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.713 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 27.177 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 48.594 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 58.162 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 91.870 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 123.984 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 149.611 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 493.197 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 629.756 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 817.194 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6373.428 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13085.022 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.626 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 21.675 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 32.607 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 45.309 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 62.781 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 75.565 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 84.143 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 97.323 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 96.362 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 118.927 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 172.985 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 209.739 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 458.725 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 543.374 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 649.633 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 866.949 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 996.910 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1327.444 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1431.730 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1428.952 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1408.017 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1411.483 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.766 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 12.850 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 12.732 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 13.258 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 13.021 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 13.003 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 13.112 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 13.164 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 12.917 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.264 | 596,751 | 0.9970 | 13 | yes |
| brotli | 1 | 0.278 | 598,581 | 1.0000 | 12 | yes |
| brotli | 2 | 0.644 | 598,587 | 1.0000 | 5 | yes |
| brotli | 3 | 0.689 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 0.836 | 598,581 | 1.0000 | 5 | yes |
| brotli | 5 | 1.659 | 598,581 | 1.0000 | 12 | yes |
| brotli | 6 | 1.911 | 598,581 | 1.0000 | 5 | yes |
| brotli | 7 | 2.027 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 2.220 | 598,581 | 1.0000 | 5 | yes |
| brotli | 9 | 5.930 | 598,581 | 1.0000 | 5 | yes |
| brotli | 10 | 109.685 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 261.632 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.318 | 598,601 | 1.0000 | 8 | yes |
| zstd | 2 | 0.339 | 598,600 | 1.0000 | 5 | yes |
| zstd | 3 | 0.462 | 598,600 | 1.0000 | 25 | no |
| zstd | 4 | 0.467 | 598,600 | 1.0000 | 5 | yes |
| zstd | 5 | 0.564 | 598,600 | 1.0000 | 5 | yes |
| zstd | 6 | 0.521 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.633 | 598,600 | 1.0000 | 5 | yes |
| zstd | 8 | 0.640 | 598,600 | 1.0000 | 25 | yes |
| zstd | 9 | 0.895 | 598,600 | 1.0000 | 12 | yes |
| zstd | 10 | 0.892 | 598,600 | 1.0000 | 5 | yes |
| zstd | 11 | 0.985 | 598,600 | 1.0000 | 5 | yes |
| zstd | 12 | 0.993 | 598,600 | 1.0000 | 5 | yes |
| zstd | 13 | 3.205 | 595,998 | 0.9957 | 5 | yes |
| zstd | 14 | 3.115 | 595,998 | 0.9957 | 5 | yes |
| zstd | 15 | 3.196 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 17.800 | 595,898 | 0.9955 | 8 | yes |
| zstd | 17 | 16.893 | 595,889 | 0.9955 | 5 | yes |
| zstd | 18 | 23.056 | 595,891 | 0.9955 | 5 | yes |
| zstd | 19 | 28.731 | 595,894 | 0.9955 | 6 | yes |
| zstd | 20 | 27.772 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 29.582 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 29.055 | 595,894 | 0.9955 | 9 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 492,050 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.576 | 145,723 | 0.2962 | 5 | yes |
| gzip | 2 | 4.865 | 138,992 | 0.2825 | 5 | yes |
| gzip | 3 | 6.102 | 134,384 | 0.2731 | 5 | yes |
| gzip | 4 | 6.161 | 126,097 | 0.2563 | 5 | yes |
| gzip | 5 | 8.703 | 121,433 | 0.2468 | 5 | yes |
| gzip | 6 | 12.627 | 119,722 | 0.2433 | 5 | yes |
| gzip | 7 | 15.736 | 119,242 | 0.2423 | 5 | yes |
| gzip | 8 | 32.461 | 118,976 | 0.2418 | 5 | yes |
| gzip | 9 | 50.012 | 118,909 | 0.2417 | 5 | yes |
| brotli | 0 | 1.583 | 150,014 | 0.3049 | 5 | yes |
| brotli | 1 | 2.128 | 137,890 | 0.2802 | 5 | yes |
| brotli | 2 | 3.983 | 129,673 | 0.2635 | 5 | yes |
| brotli | 3 | 4.517 | 127,084 | 0.2583 | 5 | yes |
| brotli | 4 | 6.020 | 123,034 | 0.2500 | 5 | yes |
| brotli | 5 | 9.626 | 113,099 | 0.2299 | 5 | yes |
| brotli | 6 | 11.316 | 110,434 | 0.2244 | 5 | yes |
| brotli | 7 | 13.550 | 108,448 | 0.2204 | 5 | yes |
| brotli | 8 | 16.025 | 107,427 | 0.2183 | 5 | yes |
| brotli | 9 | 23.021 | 106,489 | 0.2164 | 10 | yes |
| brotli | 10 | 294.000 | 98,992 | 0.2012 | 5 | yes |
| brotli | 11 | 752.151 | 96,855 | 0.1968 | 5 | yes |
| zstd | 1 | 1.727 | 138,646 | 0.2818 | 5 | yes |
| zstd | 2 | 1.843 | 134,428 | 0.2732 | 5 | yes |
| zstd | 3 | 2.002 | 126,707 | 0.2575 | 5 | yes |
| zstd | 4 | 2.274 | 126,533 | 0.2572 | 5 | yes |
| zstd | 5 | 4.210 | 117,808 | 0.2394 | 5 | yes |
| zstd | 6 | 5.877 | 113,815 | 0.2313 | 5 | yes |
| zstd | 7 | 6.796 | 112,260 | 0.2281 | 5 | yes |
| zstd | 8 | 8.334 | 111,499 | 0.2266 | 5 | yes |
| zstd | 9 | 8.463 | 111,499 | 0.2266 | 5 | yes |
| zstd | 10 | 10.162 | 110,576 | 0.2247 | 5 | yes |
| zstd | 11 | 12.783 | 109,858 | 0.2233 | 5 | yes |
| zstd | 12 | 12.939 | 109,858 | 0.2233 | 5 | yes |
| zstd | 13 | 31.110 | 108,663 | 0.2208 | 5 | yes |
| zstd | 14 | 37.843 | 108,097 | 0.2197 | 5 | yes |
| zstd | 15 | 43.575 | 108,016 | 0.2195 | 5 | yes |
| zstd | 16 | 73.264 | 102,415 | 0.2081 | 5 | yes |
| zstd | 17 | 80.903 | 101,525 | 0.2063 | 5 | yes |
| zstd | 18 | 112.233 | 100,706 | 0.2047 | 5 | yes |
| zstd | 19 | 143.162 | 100,613 | 0.2045 | 5 | yes |
| zstd | 20 | 142.054 | 100,613 | 0.2045 | 5 | yes |
| zstd | 21 | 140.883 | 100,587 | 0.2044 | 5 | yes |
| zstd | 22 | 141.524 | 100,587 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 18,040 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.149 | 5,189 | 0.2876 | 25 | no |
| gzip | 2 | 0.144 | 5,069 | 0.2810 | 18 | yes |
| gzip | 3 | 0.168 | 5,002 | 0.2773 | 20 | yes |
| gzip | 4 | 0.198 | 4,715 | 0.2614 | 12 | yes |
| gzip | 5 | 0.265 | 4,618 | 0.2560 | 5 | yes |
| gzip | 6 | 0.305 | 4,607 | 0.2554 | 5 | yes |
| gzip | 7 | 0.358 | 4,600 | 0.2550 | 5 | yes |
| gzip | 8 | 0.485 | 4,598 | 0.2549 | 5 | yes |
| gzip | 9 | 0.473 | 4,598 | 0.2549 | 5 | yes |
| brotli | 0 | 0.050 | 5,483 | 0.3039 | 19 | yes |
| brotli | 1 | 0.081 | 5,356 | 0.2969 | 5 | yes |
| brotli | 2 | 0.125 | 4,956 | 0.2747 | 11 | yes |
| brotli | 3 | 0.158 | 4,866 | 0.2697 | 12 | yes |
| brotli | 4 | 0.258 | 4,752 | 0.2634 | 5 | yes |
| brotli | 5 | 0.395 | 4,451 | 0.2467 | 5 | yes |
| brotli | 6 | 0.399 | 4,446 | 0.2465 | 5 | yes |
| brotli | 7 | 0.445 | 4,432 | 0.2457 | 5 | yes |
| brotli | 8 | 0.476 | 4,424 | 0.2452 | 5 | yes |
| brotli | 9 | 2.258 | 4,416 | 0.2448 | 12 | yes |
| brotli | 10 | 7.982 | 4,142 | 0.2296 | 5 | yes |
| brotli | 11 | 20.159 | 4,027 | 0.2232 | 5 | yes |
| zstd | 1 | 0.071 | 5,115 | 0.2835 | 5 | yes |
| zstd | 2 | 0.055 | 5,057 | 0.2803 | 9 | yes |
| zstd | 3 | 0.066 | 4,922 | 0.2728 | 9 | yes |
| zstd | 4 | 0.079 | 4,885 | 0.2708 | 5 | yes |
| zstd | 5 | 0.167 | 4,708 | 0.2610 | 5 | yes |
| zstd | 6 | 0.213 | 4,620 | 0.2561 | 21 | yes |
| zstd | 7 | 0.254 | 4,618 | 0.2560 | 6 | yes |
| zstd | 8 | 0.281 | 4,600 | 0.2550 | 5 | yes |
| zstd | 9 | 0.311 | 4,592 | 0.2545 | 5 | yes |
| zstd | 10 | 0.352 | 4,584 | 0.2541 | 5 | yes |
| zstd | 11 | 0.729 | 4,562 | 0.2529 | 5 | yes |
| zstd | 12 | 0.782 | 4,561 | 0.2528 | 5 | yes |
| zstd | 13 | 1.062 | 4,554 | 0.2524 | 5 | yes |
| zstd | 14 | 1.565 | 4,473 | 0.2479 | 5 | yes |
| zstd | 15 | 1.635 | 4,468 | 0.2477 | 5 | yes |
| zstd | 16 | 2.366 | 4,450 | 0.2467 | 5 | yes |
| zstd | 17 | 2.412 | 4,450 | 0.2467 | 5 | yes |
| zstd | 18 | 2.471 | 4,450 | 0.2467 | 5 | yes |
| zstd | 19 | 4.802 | 4,435 | 0.2458 | 5 | yes |
| zstd | 20 | 4.883 | 4,435 | 0.2458 | 5 | yes |
| zstd | 21 | 4.818 | 4,435 | 0.2458 | 5 | yes |
| zstd | 22 | 4.779 | 4,435 | 0.2458 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.051 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.048 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.064 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.074 | 3,095 | 0.4322 | 24 | yes |
| gzip | 5 | 0.100 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.101 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.113 | 3,042 | 0.4248 | 5 | yes |
| gzip | 8 | 0.118 | 3,042 | 0.4248 | 5 | yes |
| gzip | 9 | 0.099 | 3,042 | 0.4248 | 7 | yes |
| brotli | 0 | 0.026 | 3,549 | 0.4956 | 11 | yes |
| brotli | 1 | 0.037 | 3,381 | 0.4721 | 13 | yes |
| brotli | 2 | 0.056 | 3,263 | 0.4557 | 19 | yes |
| brotli | 3 | 0.072 | 3,216 | 0.4491 | 25 | no |
| brotli | 4 | 0.241 | 3,147 | 0.4395 | 8 | yes |
| brotli | 5 | 0.214 | 2,963 | 0.4138 | 20 | yes |
| brotli | 6 | 0.213 | 2,952 | 0.4122 | 9 | yes |
| brotli | 7 | 0.252 | 2,944 | 0.4111 | 5 | yes |
| brotli | 8 | 0.237 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 2.177 | 2,945 | 0.4113 | 13 | yes |
| brotli | 10 | 3.214 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.987 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.031 | 3,254 | 0.4544 | 11 | yes |
| zstd | 2 | 0.031 | 3,200 | 0.4469 | 23 | yes |
| zstd | 3 | 0.036 | 3,176 | 0.4435 | 18 | yes |
| zstd | 4 | 0.061 | 3,102 | 0.4332 | 13 | yes |
| zstd | 5 | 0.067 | 3,079 | 0.4300 | 15 | yes |
| zstd | 6 | 0.082 | 3,060 | 0.4273 | 20 | yes |
| zstd | 7 | 0.097 | 3,053 | 0.4263 | 13 | yes |
| zstd | 8 | 0.095 | 3,053 | 0.4263 | 12 | yes |
| zstd | 9 | 0.184 | 3,055 | 0.4266 | 8 | yes |
| zstd | 10 | 0.175 | 3,055 | 0.4266 | 10 | yes |
| zstd | 11 | 0.338 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.453 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.581 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.610 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.600 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.154 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.166 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.145 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.184 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.181 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.198 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.194 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 168,331 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.149 | 68,573 | 0.4074 | 5 | yes |
| gzip | 2 | 2.344 | 66,933 | 0.3976 | 5 | yes |
| gzip | 3 | 2.600 | 65,843 | 0.3912 | 5 | yes |
| gzip | 4 | 2.871 | 63,425 | 0.3768 | 5 | yes |
| gzip | 5 | 3.925 | 61,773 | 0.3670 | 5 | yes |
| gzip | 6 | 4.778 | 61,499 | 0.3653 | 5 | yes |
| gzip | 7 | 5.248 | 61,455 | 0.3651 | 5 | yes |
| gzip | 8 | 5.653 | 61,439 | 0.3650 | 5 | yes |
| gzip | 9 | 5.627 | 61,439 | 0.3650 | 5 | yes |
| brotli | 0 | 0.698 | 72,913 | 0.4332 | 6 | yes |
| brotli | 1 | 0.914 | 69,920 | 0.4154 | 5 | yes |
| brotli | 2 | 1.768 | 64,516 | 0.3833 | 5 | yes |
| brotli | 3 | 1.931 | 63,895 | 0.3796 | 5 | yes |
| brotli | 4 | 2.870 | 62,764 | 0.3729 | 5 | yes |
| brotli | 5 | 4.252 | 59,301 | 0.3523 | 5 | yes |
| brotli | 6 | 4.862 | 58,889 | 0.3498 | 5 | yes |
| brotli | 7 | 6.042 | 58,648 | 0.3484 | 5 | yes |
| brotli | 8 | 6.554 | 58,548 | 0.3478 | 5 | yes |
| brotli | 9 | 10.212 | 58,469 | 0.3473 | 5 | yes |
| brotli | 10 | 95.395 | 55,499 | 0.3297 | 5 | yes |
| brotli | 11 | 260.536 | 54,528 | 0.3239 | 5 | yes |
| zstd | 1 | 0.623 | 67,813 | 0.4029 | 5 | yes |
| zstd | 2 | 0.797 | 64,841 | 0.3852 | 5 | yes |
| zstd | 3 | 0.957 | 64,266 | 0.3818 | 5 | yes |
| zstd | 4 | 1.707 | 62,332 | 0.3703 | 5 | yes |
| zstd | 5 | 1.922 | 61,810 | 0.3672 | 5 | yes |
| zstd | 6 | 2.342 | 60,879 | 0.3617 | 5 | yes |
| zstd | 7 | 2.925 | 60,032 | 0.3566 | 5 | yes |
| zstd | 8 | 3.740 | 59,502 | 0.3535 | 5 | yes |
| zstd | 9 | 4.200 | 59,250 | 0.3520 | 5 | yes |
| zstd | 10 | 4.888 | 59,093 | 0.3511 | 5 | yes |
| zstd | 11 | 9.276 | 58,812 | 0.3494 | 5 | yes |
| zstd | 12 | 9.410 | 58,797 | 0.3493 | 5 | yes |
| zstd | 13 | 16.015 | 57,790 | 0.3433 | 5 | yes |
| zstd | 14 | 18.645 | 57,359 | 0.3408 | 5 | yes |
| zstd | 15 | 18.884 | 57,332 | 0.3406 | 5 | yes |
| zstd | 16 | 24.788 | 57,134 | 0.3394 | 5 | yes |
| zstd | 17 | 24.504 | 57,134 | 0.3394 | 5 | yes |
| zstd | 18 | 40.245 | 57,062 | 0.3390 | 5 | yes |
| zstd | 19 | 40.194 | 57,062 | 0.3390 | 5 | yes |
| zstd | 20 | 40.674 | 57,062 | 0.3390 | 5 | yes |
| zstd | 21 | 40.541 | 57,062 | 0.3390 | 5 | yes |
| zstd | 22 | 40.325 | 57,062 | 0.3390 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.899 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.961 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.078 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.175 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.567 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.933 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.224 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.985 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.941 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.277 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.350 | 29,754 | 0.4063 | 10 | yes |
| brotli | 2 | 0.702 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.803 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.276 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.889 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.043 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.575 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.739 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.024 | 24,870 | 0.3396 | 10 | yes |
| brotli | 10 | 41.190 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 100.172 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.239 | 28,919 | 0.3949 | 5 | yes |
| zstd | 2 | 0.264 | 28,008 | 0.3824 | 8 | yes |
| zstd | 3 | 0.328 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.384 | 27,100 | 0.3700 | 7 | yes |
| zstd | 5 | 0.740 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.020 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.262 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.384 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.594 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.857 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.539 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.787 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.443 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.578 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.619 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.868 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.918 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.778 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.703 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.822 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.918 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 19.013 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.740 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.832 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.977 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 1.123 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.466 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 2.176 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.956 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 11.749 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 12.122 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.291 | 27,781 | 0.3075 | 5 | yes |
| brotli | 1 | 0.426 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.735 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.818 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.202 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.833 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 2.018 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.433 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.827 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 5.369 | 21,604 | 0.2392 | 8 | yes |
| brotli | 10 | 36.114 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 108.102 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.279 | 24,608 | 0.2724 | 7 | yes |
| zstd | 2 | 0.294 | 24,387 | 0.2700 | 6 | yes |
| zstd | 3 | 0.361 | 24,157 | 0.2674 | 5 | yes |
| zstd | 4 | 0.380 | 24,076 | 0.2665 | 13 | yes |
| zstd | 5 | 0.754 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 1.074 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.278 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.545 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.790 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.428 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 4.036 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 5.562 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 6.108 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 8.465 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 10.217 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 13.796 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 18.732 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 28.946 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 27.825 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 32.773 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 47.985 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 58.310 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.241 | 41,452 | 0.1786 | 6 | yes |
| gzip | 2 | 1.315 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.502 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.702 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.197 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.043 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.715 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.789 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.922 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.456 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.609 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.192 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.427 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.964 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.930 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.180 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.687 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 3.997 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 7.334 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 103.412 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 305.364 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.471 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.532 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.550 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.263 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.547 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.859 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.195 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.690 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.089 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.771 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 9.041 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 11.173 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 20.423 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 23.936 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.990 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 49.022 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.958 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 74.377 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.906 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 83.784 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.694 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 83.247 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,088,846 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 109.030 | 3,786,228 | 0.2216 | 5 | yes |
| gzip | 2 | 119.478 | 3,637,199 | 0.2128 | 5 | yes |
| gzip | 3 | 143.716 | 3,517,128 | 0.2058 | 5 | yes |
| gzip | 4 | 155.450 | 3,388,581 | 0.1983 | 5 | yes |
| gzip | 5 | 202.317 | 3,167,259 | 0.1853 | 5 | yes |
| gzip | 6 | 298.392 | 3,098,703 | 0.1813 | 5 | yes |
| gzip | 7 | 412.380 | 3,032,397 | 0.1774 | 5 | yes |
| gzip | 8 | 1236.122 | 2,964,487 | 0.1735 | 5 | yes |
| gzip | 9 | 1296.504 | 2,963,688 | 0.1734 | 5 | yes |
| brotli | 0 | 48.645 | 4,195,167 | 0.2455 | 5 | yes |
| brotli | 1 | 64.957 | 3,728,851 | 0.2182 | 5 | yes |
| brotli | 2 | 114.798 | 3,433,235 | 0.2009 | 5 | yes |
| brotli | 3 | 129.930 | 3,377,124 | 0.1976 | 5 | yes |
| brotli | 4 | 193.098 | 3,303,878 | 0.1933 | 5 | yes |
| brotli | 5 | 315.539 | 2,946,664 | 0.1724 | 5 | yes |
| brotli | 6 | 371.019 | 2,915,320 | 0.1706 | 5 | yes |
| brotli | 7 | 580.100 | 2,887,582 | 0.1690 | 5 | yes |
| brotli | 8 | 736.963 | 2,868,532 | 0.1679 | 5 | yes |
| brotli | 9 | 986.272 | 2,857,411 | 0.1672 | 5 | yes |
| brotli | 10 | 11530.695 | 2,448,858 | 0.1433 | 5 | yes |
| brotli | 11 | 29488.346 | 2,330,104 | 0.1364 | 5 | yes |
| zstd | 1 | 43.455 | 3,534,613 | 0.2068 | 5 | yes |
| zstd | 2 | 53.706 | 3,612,321 | 0.2114 | 5 | yes |
| zstd | 3 | 68.006 | 3,537,742 | 0.2070 | 5 | yes |
| zstd | 4 | 79.374 | 3,532,781 | 0.2067 | 5 | yes |
| zstd | 5 | 129.444 | 3,315,447 | 0.1940 | 5 | yes |
| zstd | 6 | 188.839 | 3,093,505 | 0.1810 | 5 | yes |
| zstd | 7 | 225.002 | 3,054,755 | 0.1788 | 5 | yes |
| zstd | 8 | 291.512 | 2,951,480 | 0.1727 | 5 | yes |
| zstd | 9 | 296.630 | 2,962,142 | 0.1733 | 5 | yes |
| zstd | 10 | 391.196 | 2,925,109 | 0.1712 | 5 | yes |
| zstd | 11 | 560.465 | 2,897,547 | 0.1696 | 5 | yes |
| zstd | 12 | 583.991 | 2,897,453 | 0.1696 | 5 | yes |
| zstd | 13 | 917.668 | 2,874,535 | 0.1682 | 5 | yes |
| zstd | 14 | 1150.008 | 2,860,101 | 0.1674 | 5 | yes |
| zstd | 15 | 1488.711 | 2,856,465 | 0.1672 | 5 | yes |
| zstd | 16 | 3098.811 | 2,667,907 | 0.1561 | 5 | yes |
| zstd | 17 | 4025.992 | 2,576,011 | 0.1507 | 5 | yes |
| zstd | 18 | 5957.493 | 2,556,665 | 0.1496 | 5 | yes |
| zstd | 19 | 6699.518 | 2,549,586 | 0.1492 | 5 | yes |
| zstd | 20 | 7141.295 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 21 | 7119.837 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 22 | 7424.452 | 2,543,154 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 14.051 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 15.157 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.593 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.355 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 26.328 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 31.361 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 33.112 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 35.868 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 36.386 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.890 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.183 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.347 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.205 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 16.817 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.631 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.653 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.466 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 49.805 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 60.875 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 932.019 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1980.681 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.013 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.850 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.010 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.054 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 9.857 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.430 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.911 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.165 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.372 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.131 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 25.929 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.063 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 56.424 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 59.101 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 58.762 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 102.505 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 127.280 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 163.354 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 181.153 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 180.959 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 179.982 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 181.948 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.131 | 5,565 | 0.2841 | 9 | yes |
| gzip | 2 | 0.164 | 5,486 | 0.2801 | 25 | no |
| gzip | 3 | 0.203 | 5,419 | 0.2767 | 5 | yes |
| gzip | 4 | 0.221 | 5,202 | 0.2656 | 5 | yes |
| gzip | 5 | 0.288 | 4,958 | 0.2531 | 5 | yes |
| gzip | 6 | 0.389 | 4,947 | 0.2526 | 5 | yes |
| gzip | 7 | 0.532 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.688 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.685 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.051 | 6,082 | 0.3105 | 25 | no |
| brotli | 1 | 0.084 | 5,794 | 0.2958 | 9 | yes |
| brotli | 2 | 0.152 | 5,002 | 0.2554 | 5 | yes |
| brotli | 3 | 0.173 | 4,986 | 0.2546 | 9 | yes |
| brotli | 4 | 0.280 | 4,954 | 0.2529 | 5 | yes |
| brotli | 5 | 0.429 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.478 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.556 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.608 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.727 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 7.565 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 22.954 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.052 | 5,441 | 0.2778 | 18 | yes |
| zstd | 2 | 0.057 | 5,242 | 0.2676 | 9 | yes |
| zstd | 3 | 0.076 | 5,234 | 0.2672 | 5 | yes |
| zstd | 4 | 0.067 | 5,212 | 0.2661 | 13 | yes |
| zstd | 5 | 0.154 | 5,133 | 0.2621 | 8 | yes |
| zstd | 6 | 0.241 | 4,853 | 0.2478 | 5 | yes |
| zstd | 7 | 0.268 | 4,757 | 0.2429 | 7 | yes |
| zstd | 8 | 0.322 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.370 | 4,744 | 0.2422 | 5 | yes |
| zstd | 10 | 0.467 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.672 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.734 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 1.073 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.884 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 2.008 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.624 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.711 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.654 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 5.232 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.327 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 5.265 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.298 | 4,415 | 0.2254 | 5 | yes |
