# Node Compression Benchmark

Last updated: 2026-09-25T21:15:12.775Z

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
| gzip | 1 | 0.812 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.898 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.226 | 29,671 | 0.3768 | 6 | yes |
| gzip | 4 | 1.414 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.372 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.652 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 1.833 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.119 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.108 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.292 | 33,111 | 0.4205 | 7 | yes |
| brotli | 1 | 0.643 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.681 | 29,394 | 0.3733 | 7 | yes |
| brotli | 3 | 0.811 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.212 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 1.698 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 1.781 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.172 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.243 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 3.594 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 27.545 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 78.134 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.247 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.207 | 30,069 | 0.3818 | 21 | yes |
| zstd | 3 | 0.251 | 29,214 | 0.3710 | 25 | no |
| zstd | 4 | 0.351 | 29,108 | 0.3696 | 10 | yes |
| zstd | 5 | 0.722 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 0.938 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.147 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.283 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.419 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.618 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 2.762 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 2.828 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 4.262 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 5.792 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 5.971 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 7.623 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 7.774 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 7.660 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 15.045 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 15.207 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 14.977 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 15.033 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 72.305 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 77.366 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 82.459 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 90.447 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 105.193 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 120.437 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 129.119 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 142.982 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 153.517 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 16.379 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 22.471 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 38.704 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 50.579 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 70.130 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 98.815 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 114.043 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 334.409 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 424.067 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 563.973 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5093.053 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 10806.862 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 15.411 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 18.927 | 3,233,695 | 0.5909 | 7 | yes |
| zstd | 3 | 28.203 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 35.105 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 53.359 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 62.921 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 69.155 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 80.862 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 79.214 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 101.891 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 131.724 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 156.509 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 309.118 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 394.557 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 453.452 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 568.683 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 675.256 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 951.514 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 999.650 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1014.004 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1062.079 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1058.508 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 10.249 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 10.205 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 10.209 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 10.912 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 10.922 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 10.950 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 10.948 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 10.968 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 10.991 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.201 | 596,751 | 0.9970 | 14 | yes |
| brotli | 1 | 0.188 | 598,581 | 1.0000 | 10 | yes |
| brotli | 2 | 0.452 | 598,587 | 1.0000 | 5 | yes |
| brotli | 3 | 0.532 | 598,559 | 1.0000 | 7 | yes |
| brotli | 4 | 0.689 | 598,581 | 1.0000 | 5 | yes |
| brotli | 5 | 1.125 | 598,581 | 1.0000 | 25 | no |
| brotli | 6 | 1.303 | 598,581 | 1.0000 | 25 | no |
| brotli | 7 | 1.487 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 1.620 | 598,581 | 1.0000 | 5 | yes |
| brotli | 9 | 3.362 | 598,581 | 1.0000 | 10 | yes |
| brotli | 10 | 87.807 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 219.248 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.251 | 598,601 | 1.0000 | 5 | yes |
| zstd | 2 | 0.243 | 598,600 | 1.0000 | 16 | yes |
| zstd | 3 | 0.243 | 598,600 | 1.0000 | 25 | no |
| zstd | 4 | 0.261 | 598,600 | 1.0000 | 5 | yes |
| zstd | 5 | 0.369 | 598,600 | 1.0000 | 5 | yes |
| zstd | 6 | 0.387 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.413 | 598,600 | 1.0000 | 5 | yes |
| zstd | 8 | 0.396 | 598,600 | 1.0000 | 5 | yes |
| zstd | 9 | 0.484 | 598,600 | 1.0000 | 5 | yes |
| zstd | 10 | 0.462 | 598,600 | 1.0000 | 5 | yes |
| zstd | 11 | 0.480 | 598,600 | 1.0000 | 13 | yes |
| zstd | 12 | 0.481 | 598,600 | 1.0000 | 5 | yes |
| zstd | 13 | 1.939 | 595,998 | 0.9957 | 5 | yes |
| zstd | 14 | 2.000 | 595,998 | 0.9957 | 5 | yes |
| zstd | 15 | 1.894 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 11.017 | 595,898 | 0.9955 | 5 | yes |
| zstd | 17 | 11.081 | 595,889 | 0.9955 | 6 | yes |
| zstd | 18 | 15.578 | 595,891 | 0.9955 | 5 | yes |
| zstd | 19 | 18.822 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 18.806 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 18.818 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 18.789 | 595,894 | 0.9955 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 493,290 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.344 | 146,149 | 0.2963 | 5 | yes |
| gzip | 2 | 3.669 | 139,274 | 0.2823 | 5 | yes |
| gzip | 3 | 4.862 | 134,733 | 0.2731 | 5 | yes |
| gzip | 4 | 4.922 | 126,385 | 0.2562 | 5 | yes |
| gzip | 5 | 7.163 | 121,702 | 0.2467 | 5 | yes |
| gzip | 6 | 10.578 | 119,973 | 0.2432 | 5 | yes |
| gzip | 7 | 13.602 | 119,497 | 0.2422 | 5 | yes |
| gzip | 8 | 25.661 | 119,223 | 0.2417 | 5 | yes |
| gzip | 9 | 39.714 | 119,156 | 0.2416 | 5 | yes |
| brotli | 0 | 1.211 | 150,465 | 0.3050 | 5 | yes |
| brotli | 1 | 1.771 | 138,172 | 0.2801 | 5 | yes |
| brotli | 2 | 3.089 | 129,999 | 0.2635 | 5 | yes |
| brotli | 3 | 3.624 | 127,405 | 0.2583 | 5 | yes |
| brotli | 4 | 5.138 | 123,107 | 0.2496 | 5 | yes |
| brotli | 5 | 8.016 | 113,382 | 0.2298 | 5 | yes |
| brotli | 6 | 9.391 | 110,700 | 0.2244 | 5 | yes |
| brotli | 7 | 11.418 | 108,697 | 0.2204 | 5 | yes |
| brotli | 8 | 13.659 | 107,649 | 0.2182 | 5 | yes |
| brotli | 9 | 17.399 | 106,735 | 0.2164 | 5 | yes |
| brotli | 10 | 230.019 | 99,238 | 0.2012 | 5 | yes |
| brotli | 11 | 585.623 | 97,146 | 0.1969 | 5 | yes |
| zstd | 1 | 1.369 | 138,911 | 0.2816 | 5 | yes |
| zstd | 2 | 1.502 | 134,725 | 0.2731 | 5 | yes |
| zstd | 3 | 1.766 | 126,980 | 0.2574 | 5 | yes |
| zstd | 4 | 1.884 | 126,776 | 0.2570 | 5 | yes |
| zstd | 5 | 3.579 | 118,141 | 0.2395 | 5 | yes |
| zstd | 6 | 4.849 | 114,119 | 0.2313 | 5 | yes |
| zstd | 7 | 5.479 | 112,542 | 0.2281 | 5 | yes |
| zstd | 8 | 6.866 | 111,701 | 0.2264 | 5 | yes |
| zstd | 9 | 6.911 | 111,701 | 0.2264 | 5 | yes |
| zstd | 10 | 8.253 | 110,666 | 0.2243 | 5 | yes |
| zstd | 11 | 10.247 | 110,040 | 0.2231 | 5 | yes |
| zstd | 12 | 10.254 | 110,040 | 0.2231 | 5 | yes |
| zstd | 13 | 20.694 | 108,868 | 0.2207 | 5 | yes |
| zstd | 14 | 24.994 | 108,312 | 0.2196 | 5 | yes |
| zstd | 15 | 27.953 | 108,238 | 0.2194 | 5 | yes |
| zstd | 16 | 50.274 | 102,642 | 0.2081 | 5 | yes |
| zstd | 17 | 56.439 | 101,748 | 0.2063 | 5 | yes |
| zstd | 18 | 81.274 | 100,901 | 0.2045 | 5 | yes |
| zstd | 19 | 104.271 | 100,801 | 0.2043 | 5 | yes |
| zstd | 20 | 104.507 | 100,801 | 0.2043 | 5 | yes |
| zstd | 21 | 104.436 | 100,801 | 0.2043 | 5 | yes |
| zstd | 22 | 104.690 | 100,801 | 0.2043 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 18,040 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.057 | 5,189 | 0.2876 | 25 | no |
| gzip | 2 | 0.063 | 5,069 | 0.2810 | 25 | no |
| gzip | 3 | 0.066 | 5,002 | 0.2773 | 25 | no |
| gzip | 4 | 0.091 | 4,715 | 0.2614 | 20 | yes |
| gzip | 5 | 0.115 | 4,618 | 0.2560 | 25 | no |
| gzip | 6 | 0.142 | 4,607 | 0.2554 | 25 | no |
| gzip | 7 | 0.178 | 4,600 | 0.2550 | 19 | yes |
| gzip | 8 | 0.365 | 4,598 | 0.2549 | 5 | yes |
| gzip | 9 | 0.363 | 4,598 | 0.2549 | 5 | yes |
| brotli | 0 | 0.043 | 5,483 | 0.3039 | 9 | yes |
| brotli | 1 | 0.059 | 5,356 | 0.2969 | 10 | yes |
| brotli | 2 | 0.077 | 4,956 | 0.2747 | 12 | yes |
| brotli | 3 | 0.093 | 4,866 | 0.2697 | 15 | yes |
| brotli | 4 | 0.149 | 4,752 | 0.2634 | 23 | yes |
| brotli | 5 | 0.262 | 4,451 | 0.2467 | 13 | yes |
| brotli | 6 | 0.319 | 4,446 | 0.2465 | 5 | yes |
| brotli | 7 | 0.328 | 4,432 | 0.2457 | 9 | yes |
| brotli | 8 | 0.356 | 4,424 | 0.2452 | 6 | yes |
| brotli | 9 | 0.414 | 4,416 | 0.2448 | 7 | yes |
| brotli | 10 | 6.274 | 4,142 | 0.2296 | 5 | yes |
| brotli | 11 | 15.770 | 4,027 | 0.2232 | 5 | yes |
| zstd | 1 | 0.039 | 5,115 | 0.2835 | 13 | yes |
| zstd | 2 | 0.043 | 5,057 | 0.2803 | 7 | yes |
| zstd | 3 | 0.051 | 4,922 | 0.2728 | 9 | yes |
| zstd | 4 | 0.054 | 4,885 | 0.2708 | 11 | yes |
| zstd | 5 | 0.106 | 4,708 | 0.2610 | 7 | yes |
| zstd | 6 | 0.137 | 4,620 | 0.2561 | 9 | yes |
| zstd | 7 | 0.202 | 4,618 | 0.2560 | 5 | yes |
| zstd | 8 | 0.168 | 4,600 | 0.2550 | 13 | yes |
| zstd | 9 | 0.191 | 4,592 | 0.2545 | 23 | yes |
| zstd | 10 | 0.253 | 4,584 | 0.2541 | 14 | yes |
| zstd | 11 | 0.516 | 4,562 | 0.2529 | 5 | yes |
| zstd | 12 | 0.549 | 4,561 | 0.2528 | 5 | yes |
| zstd | 13 | 0.764 | 4,554 | 0.2524 | 5 | yes |
| zstd | 14 | 1.155 | 4,473 | 0.2479 | 5 | yes |
| zstd | 15 | 1.219 | 4,468 | 0.2477 | 5 | yes |
| zstd | 16 | 1.801 | 4,450 | 0.2467 | 5 | yes |
| zstd | 17 | 1.883 | 4,450 | 0.2467 | 5 | yes |
| zstd | 18 | 1.873 | 4,450 | 0.2467 | 5 | yes |
| zstd | 19 | 3.711 | 4,435 | 0.2458 | 5 | yes |
| zstd | 20 | 3.703 | 4,435 | 0.2458 | 5 | yes |
| zstd | 21 | 3.705 | 4,435 | 0.2458 | 5 | yes |
| zstd | 22 | 3.686 | 4,435 | 0.2458 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.040 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.038 | 3,182 | 0.4444 | 13 | yes |
| gzip | 3 | 0.040 | 3,153 | 0.4403 | 13 | yes |
| gzip | 4 | 0.048 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.053 | 3,051 | 0.4261 | 23 | yes |
| gzip | 6 | 0.060 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.066 | 3,042 | 0.4248 | 5 | yes |
| gzip | 8 | 0.058 | 3,042 | 0.4248 | 7 | yes |
| gzip | 9 | 0.058 | 3,042 | 0.4248 | 25 | no |
| brotli | 0 | 0.023 | 3,549 | 0.4956 | 15 | yes |
| brotli | 1 | 0.032 | 3,381 | 0.4721 | 9 | yes |
| brotli | 2 | 0.100 | 3,263 | 0.4557 | 5 | yes |
| brotli | 3 | 0.058 | 3,216 | 0.4491 | 16 | yes |
| brotli | 4 | 0.099 | 3,147 | 0.4395 | 14 | yes |
| brotli | 5 | 0.119 | 2,963 | 0.4138 | 16 | yes |
| brotli | 6 | 0.132 | 2,952 | 0.4122 | 24 | yes |
| brotli | 7 | 0.135 | 2,944 | 0.4111 | 17 | yes |
| brotli | 8 | 0.136 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 0.184 | 2,945 | 0.4113 | 25 | no |
| brotli | 10 | 2.544 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 6.649 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.023 | 3,254 | 0.4544 | 18 | yes |
| zstd | 2 | 0.035 | 3,200 | 0.4469 | 5 | yes |
| zstd | 3 | 0.030 | 3,176 | 0.4435 | 25 | no |
| zstd | 4 | 0.046 | 3,102 | 0.4332 | 10 | yes |
| zstd | 5 | 0.055 | 3,079 | 0.4300 | 13 | yes |
| zstd | 6 | 0.064 | 3,060 | 0.4273 | 13 | yes |
| zstd | 7 | 0.079 | 3,053 | 0.4263 | 5 | yes |
| zstd | 8 | 0.075 | 3,053 | 0.4263 | 5 | yes |
| zstd | 9 | 0.145 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.090 | 3,055 | 0.4266 | 12 | yes |
| zstd | 11 | 0.178 | 3,044 | 0.4251 | 17 | yes |
| zstd | 12 | 0.330 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.458 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.435 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.423 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 0.804 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 0.850 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 0.828 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 0.817 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 0.810 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 0.861 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 0.815 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 168,331 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.627 | 68,573 | 0.4074 | 5 | yes |
| gzip | 2 | 1.777 | 66,933 | 0.3976 | 5 | yes |
| gzip | 3 | 2.049 | 65,843 | 0.3912 | 5 | yes |
| gzip | 4 | 2.243 | 63,425 | 0.3768 | 5 | yes |
| gzip | 5 | 3.093 | 61,773 | 0.3670 | 5 | yes |
| gzip | 6 | 3.913 | 61,499 | 0.3653 | 5 | yes |
| gzip | 7 | 4.249 | 61,455 | 0.3651 | 5 | yes |
| gzip | 8 | 4.597 | 61,439 | 0.3650 | 5 | yes |
| gzip | 9 | 4.605 | 61,439 | 0.3650 | 5 | yes |
| brotli | 0 | 0.480 | 72,913 | 0.4332 | 10 | yes |
| brotli | 1 | 0.739 | 69,920 | 0.4154 | 5 | yes |
| brotli | 2 | 1.369 | 64,516 | 0.3833 | 5 | yes |
| brotli | 3 | 1.613 | 63,895 | 0.3796 | 5 | yes |
| brotli | 4 | 2.334 | 62,764 | 0.3729 | 5 | yes |
| brotli | 5 | 3.539 | 59,301 | 0.3523 | 5 | yes |
| brotli | 6 | 3.942 | 58,889 | 0.3498 | 5 | yes |
| brotli | 7 | 4.863 | 58,648 | 0.3484 | 5 | yes |
| brotli | 8 | 5.277 | 58,548 | 0.3478 | 5 | yes |
| brotli | 9 | 6.257 | 58,469 | 0.3473 | 5 | yes |
| brotli | 10 | 78.068 | 55,499 | 0.3297 | 5 | yes |
| brotli | 11 | 221.820 | 54,528 | 0.3239 | 5 | yes |
| zstd | 1 | 0.519 | 67,813 | 0.4029 | 6 | yes |
| zstd | 2 | 0.639 | 64,841 | 0.3852 | 5 | yes |
| zstd | 3 | 0.784 | 64,266 | 0.3818 | 5 | yes |
| zstd | 4 | 1.453 | 62,332 | 0.3703 | 5 | yes |
| zstd | 5 | 1.629 | 61,810 | 0.3672 | 5 | yes |
| zstd | 6 | 1.986 | 60,879 | 0.3617 | 5 | yes |
| zstd | 7 | 2.320 | 60,032 | 0.3566 | 5 | yes |
| zstd | 8 | 2.881 | 59,502 | 0.3535 | 5 | yes |
| zstd | 9 | 3.369 | 59,250 | 0.3520 | 5 | yes |
| zstd | 10 | 3.968 | 59,093 | 0.3511 | 5 | yes |
| zstd | 11 | 6.640 | 58,812 | 0.3494 | 5 | yes |
| zstd | 12 | 7.083 | 58,797 | 0.3493 | 5 | yes |
| zstd | 13 | 11.676 | 57,790 | 0.3433 | 5 | yes |
| zstd | 14 | 14.135 | 57,359 | 0.3408 | 5 | yes |
| zstd | 15 | 14.333 | 57,332 | 0.3406 | 5 | yes |
| zstd | 16 | 18.201 | 57,134 | 0.3394 | 5 | yes |
| zstd | 17 | 18.216 | 57,134 | 0.3394 | 5 | yes |
| zstd | 18 | 30.743 | 57,062 | 0.3390 | 5 | yes |
| zstd | 19 | 30.727 | 57,062 | 0.3390 | 5 | yes |
| zstd | 20 | 30.630 | 57,062 | 0.3390 | 5 | yes |
| zstd | 21 | 30.592 | 57,062 | 0.3390 | 5 | yes |
| zstd | 22 | 30.888 | 57,062 | 0.3390 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.653 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.721 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.824 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 0.916 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.218 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.578 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.898 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.587 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.591 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.158 | 30,978 | 0.4230 | 21 | yes |
| brotli | 1 | 0.244 | 29,754 | 0.4063 | 15 | yes |
| brotli | 2 | 0.568 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.669 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.057 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.517 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 1.688 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 1.993 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.116 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 2.533 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 32.332 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 82.126 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.154 | 28,919 | 0.3949 | 18 | yes |
| zstd | 2 | 0.170 | 28,008 | 0.3824 | 10 | yes |
| zstd | 3 | 0.209 | 27,463 | 0.3750 | 12 | yes |
| zstd | 4 | 0.255 | 27,100 | 0.3700 | 19 | yes |
| zstd | 5 | 0.614 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 0.835 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.023 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.108 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.278 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.477 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 2.534 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 2.559 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 4.027 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 5.726 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 6.124 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 7.990 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 7.988 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 7.980 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 15.304 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 15.236 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 15.269 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 14.637 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.547 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.630 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.754 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 0.861 | 23,806 | 0.2635 | 9 | yes |
| gzip | 5 | 1.198 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 1.834 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.462 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 7.194 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 7.271 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.154 | 27,781 | 0.3075 | 14 | yes |
| brotli | 1 | 0.310 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.557 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.671 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 0.999 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.464 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 1.659 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 1.996 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.315 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 2.985 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 28.379 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 91.137 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.169 | 24,608 | 0.2724 | 11 | yes |
| zstd | 2 | 0.179 | 24,387 | 0.2700 | 12 | yes |
| zstd | 3 | 0.211 | 24,157 | 0.2674 | 15 | yes |
| zstd | 4 | 0.226 | 24,076 | 0.2665 | 15 | yes |
| zstd | 5 | 0.605 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 0.869 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.076 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.220 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.542 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 1.957 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 2.842 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 3.833 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 4.696 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 6.414 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 7.689 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 10.474 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 14.072 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 21.683 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 21.572 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 25.267 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 37.071 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 43.065 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.915 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 0.971 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.141 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.362 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 1.768 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.481 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.069 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.165 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.225 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.248 | 43,268 | 0.1864 | 14 | yes |
| brotli | 1 | 0.503 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 0.945 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.135 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.620 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.368 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 2.647 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 2.955 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 3.383 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 4.108 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 78.371 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 271.709 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.311 | 35,549 | 0.1532 | 17 | yes |
| zstd | 2 | 0.410 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.417 | 34,393 | 0.1482 | 9 | yes |
| zstd | 4 | 1.133 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.329 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.515 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 1.651 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.052 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 2.514 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.051 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 6.130 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 7.615 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 14.036 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 16.968 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 21.581 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 36.901 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 40.890 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 55.958 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 62.053 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 64.877 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 64.710 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 64.713 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,088,846 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 81.097 | 3,786,228 | 0.2216 | 5 | yes |
| gzip | 2 | 88.519 | 3,637,199 | 0.2128 | 5 | yes |
| gzip | 3 | 110.012 | 3,517,128 | 0.2058 | 5 | yes |
| gzip | 4 | 120.973 | 3,388,581 | 0.1983 | 5 | yes |
| gzip | 5 | 161.840 | 3,167,259 | 0.1853 | 5 | yes |
| gzip | 6 | 250.513 | 3,098,703 | 0.1813 | 5 | yes |
| gzip | 7 | 346.489 | 3,032,397 | 0.1774 | 5 | yes |
| gzip | 8 | 1002.434 | 2,964,487 | 0.1735 | 5 | yes |
| gzip | 9 | 1049.882 | 2,963,688 | 0.1734 | 5 | yes |
| brotli | 0 | 35.161 | 4,195,167 | 0.2455 | 5 | yes |
| brotli | 1 | 53.068 | 3,728,851 | 0.2182 | 5 | yes |
| brotli | 2 | 89.697 | 3,433,235 | 0.2009 | 5 | yes |
| brotli | 3 | 106.265 | 3,377,124 | 0.1976 | 5 | yes |
| brotli | 4 | 144.810 | 3,303,878 | 0.1933 | 5 | yes |
| brotli | 5 | 235.982 | 2,946,664 | 0.1724 | 5 | yes |
| brotli | 6 | 274.699 | 2,915,320 | 0.1706 | 5 | yes |
| brotli | 7 | 423.470 | 2,887,582 | 0.1690 | 5 | yes |
| brotli | 8 | 548.409 | 2,868,532 | 0.1679 | 5 | yes |
| brotli | 9 | 729.857 | 2,857,411 | 0.1672 | 5 | yes |
| brotli | 10 | 8779.418 | 2,448,858 | 0.1433 | 5 | yes |
| brotli | 11 | 24090.447 | 2,330,104 | 0.1364 | 5 | yes |
| zstd | 1 | 35.107 | 3,534,613 | 0.2068 | 5 | yes |
| zstd | 2 | 43.026 | 3,612,321 | 0.2114 | 5 | yes |
| zstd | 3 | 52.854 | 3,537,742 | 0.2070 | 5 | yes |
| zstd | 4 | 56.859 | 3,532,781 | 0.2067 | 5 | yes |
| zstd | 5 | 109.647 | 3,315,447 | 0.1940 | 5 | yes |
| zstd | 6 | 156.683 | 3,093,505 | 0.1810 | 5 | yes |
| zstd | 7 | 183.444 | 3,054,755 | 0.1788 | 5 | yes |
| zstd | 8 | 238.736 | 2,951,480 | 0.1727 | 5 | yes |
| zstd | 9 | 248.196 | 2,962,142 | 0.1733 | 5 | yes |
| zstd | 10 | 322.481 | 2,925,109 | 0.1712 | 5 | yes |
| zstd | 11 | 459.707 | 2,897,547 | 0.1696 | 5 | yes |
| zstd | 12 | 499.481 | 2,897,453 | 0.1696 | 5 | yes |
| zstd | 13 | 668.699 | 2,874,535 | 0.1682 | 5 | yes |
| zstd | 14 | 814.862 | 2,860,101 | 0.1674 | 5 | yes |
| zstd | 15 | 1088.401 | 2,856,465 | 0.1672 | 5 | yes |
| zstd | 16 | 2235.152 | 2,667,907 | 0.1561 | 5 | yes |
| zstd | 17 | 2849.464 | 2,576,011 | 0.1507 | 5 | yes |
| zstd | 18 | 4513.423 | 2,556,665 | 0.1496 | 5 | yes |
| zstd | 19 | 4942.754 | 2,549,586 | 0.1492 | 5 | yes |
| zstd | 20 | 5260.841 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 21 | 5148.695 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 22 | 5310.331 | 2,543,154 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 10.523 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 11.508 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 13.626 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 14.129 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 20.862 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 24.906 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 26.432 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 29.089 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 29.000 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.140 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 4.361 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 8.041 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 9.833 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 13.651 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 21.460 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 25.070 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 36.519 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 42.613 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 52.391 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 755.232 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1669.529 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 2.507 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.168 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 4.256 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 5.046 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 8.644 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 11.718 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 12.656 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 15.527 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 15.772 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 17.756 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 21.327 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 21.457 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 41.083 | 383,952 | 0.4466 | 7 | yes |
| zstd | 14 | 41.240 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 42.140 | 383,877 | 0.4465 | 6 | yes |
| zstd | 16 | 76.246 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 97.264 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 124.704 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 140.663 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 130.906 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 132.932 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 131.247 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.063 | 5,565 | 0.2841 | 25 | no |
| gzip | 2 | 0.063 | 5,486 | 0.2801 | 25 | no |
| gzip | 3 | 0.076 | 5,419 | 0.2767 | 25 | no |
| gzip | 4 | 0.095 | 5,202 | 0.2656 | 21 | yes |
| gzip | 5 | 0.130 | 4,958 | 0.2531 | 25 | no |
| gzip | 6 | 0.178 | 4,947 | 0.2526 | 22 | yes |
| gzip | 7 | 0.379 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.547 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.531 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.043 | 6,082 | 0.3105 | 15 | yes |
| brotli | 1 | 0.059 | 5,794 | 0.2958 | 16 | yes |
| brotli | 2 | 0.112 | 5,002 | 0.2554 | 5 | yes |
| brotli | 3 | 0.102 | 4,986 | 0.2546 | 24 | yes |
| brotli | 4 | 0.165 | 4,954 | 0.2529 | 25 | no |
| brotli | 5 | 0.343 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.367 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.458 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.492 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.593 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 5.904 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 18.706 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.042 | 5,441 | 0.2778 | 13 | yes |
| zstd | 2 | 0.045 | 5,242 | 0.2676 | 16 | yes |
| zstd | 3 | 0.053 | 5,234 | 0.2672 | 9 | yes |
| zstd | 4 | 0.055 | 5,212 | 0.2661 | 13 | yes |
| zstd | 5 | 0.107 | 5,133 | 0.2621 | 9 | yes |
| zstd | 6 | 0.152 | 4,853 | 0.2478 | 13 | yes |
| zstd | 7 | 0.166 | 4,757 | 0.2429 | 25 | no |
| zstd | 8 | 0.192 | 4,750 | 0.2425 | 11 | yes |
| zstd | 9 | 0.264 | 4,744 | 0.2422 | 11 | yes |
| zstd | 10 | 0.352 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.470 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.498 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.741 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.341 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.424 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 1.993 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 1.988 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 1.988 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 3.927 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 3.914 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 3.901 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 3.956 | 4,415 | 0.2254 | 5 | yes |
