# Node Compression Benchmark

Last updated: 2026-06-28T23:38:32.238Z

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
| gzip | 1 | 1.033 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.072 | 30,134 | 0.3827 | 7 | yes |
| gzip | 3 | 1.206 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.346 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.777 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.124 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.339 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.733 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.728 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.348 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.807 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.829 | 29,394 | 0.3733 | 14 | yes |
| brotli | 3 | 1.001 | 29,072 | 0.3692 | 6 | yes |
| brotli | 4 | 1.398 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.019 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.279 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.865 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.759 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.632 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 35.037 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 100.433 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.304 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.274 | 30,069 | 0.3818 | 25 | no |
| zstd | 3 | 0.303 | 29,214 | 0.3710 | 25 | yes |
| zstd | 4 | 0.370 | 29,108 | 0.3696 | 25 | no |
| zstd | 5 | 0.900 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.227 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.529 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.629 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.818 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.078 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.454 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.642 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.540 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.574 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.748 | 26,420 | 0.3355 | 7 | yes |
| zstd | 16 | 9.959 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.007 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 9.906 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.441 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.561 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.520 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.612 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 94.561 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 99.438 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 105.397 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 115.531 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 134.945 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 153.557 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 162.815 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 183.206 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 197.012 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.423 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.845 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.906 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.613 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 91.320 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 125.254 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 148.165 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 419.975 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 541.233 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 773.309 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6525.408 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13506.068 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.781 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.092 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 37.118 | 3,139,155 | 0.5736 | 6 | yes |
| zstd | 4 | 45.676 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 69.088 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 81.596 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 89.636 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 103.582 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 105.121 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 124.332 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 161.474 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 190.502 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 408.513 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 480.412 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 579.597 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 718.495 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 885.595 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1177.218 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1296.640 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1327.411 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1310.709 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1305.449 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.530 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.526 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.578 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 14.414 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 14.455 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 14.460 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 14.451 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 14.404 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 14.391 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.254 | 613,595 | 0.9981 | 5 | yes |
| brotli | 1 | 0.226 | 614,785 | 1.0000 | 11 | yes |
| brotli | 2 | 0.577 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.766 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.944 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.473 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.531 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 2.029 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.034 | 614,785 | 1.0000 | 13 | yes |
| brotli | 9 | 4.111 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 117.452 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 265.928 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.317 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.293 | 614,804 | 1.0000 | 6 | yes |
| zstd | 3 | 0.353 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.337 | 614,804 | 1.0000 | 25 | no |
| zstd | 5 | 0.497 | 614,804 | 1.0000 | 25 | no |
| zstd | 6 | 0.475 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.527 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.533 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.599 | 614,804 | 1.0000 | 6 | yes |
| zstd | 10 | 0.620 | 614,804 | 1.0000 | 19 | yes |
| zstd | 11 | 0.604 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.601 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.320 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 2.368 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 2.269 | 612,619 | 0.9965 | 15 | yes |
| zstd | 16 | 13.616 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 13.956 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 20.316 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 24.795 | 612,518 | 0.9963 | 10 | yes |
| zstd | 20 | 24.771 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 24.713 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 25.050 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 489,438 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.294 | 144,998 | 0.2963 | 5 | yes |
| gzip | 2 | 4.737 | 138,219 | 0.2824 | 5 | yes |
| gzip | 3 | 6.244 | 133,612 | 0.2730 | 5 | yes |
| gzip | 4 | 6.298 | 125,406 | 0.2562 | 5 | yes |
| gzip | 5 | 9.220 | 120,770 | 0.2468 | 5 | yes |
| gzip | 6 | 13.592 | 119,046 | 0.2432 | 5 | yes |
| gzip | 7 | 17.374 | 118,588 | 0.2423 | 5 | yes |
| gzip | 8 | 32.856 | 118,313 | 0.2417 | 5 | yes |
| gzip | 9 | 50.982 | 118,247 | 0.2416 | 5 | yes |
| brotli | 0 | 1.575 | 149,463 | 0.3054 | 5 | yes |
| brotli | 1 | 2.214 | 137,171 | 0.2803 | 5 | yes |
| brotli | 2 | 4.055 | 128,941 | 0.2634 | 5 | yes |
| brotli | 3 | 4.679 | 126,368 | 0.2582 | 5 | yes |
| brotli | 4 | 6.684 | 122,323 | 0.2499 | 5 | yes |
| brotli | 5 | 10.012 | 112,470 | 0.2298 | 5 | yes |
| brotli | 6 | 11.645 | 109,832 | 0.2244 | 5 | yes |
| brotli | 7 | 14.663 | 107,875 | 0.2204 | 5 | yes |
| brotli | 8 | 17.402 | 106,822 | 0.2183 | 5 | yes |
| brotli | 9 | 23.261 | 105,940 | 0.2165 | 5 | yes |
| brotli | 10 | 289.673 | 98,503 | 0.2013 | 5 | yes |
| brotli | 11 | 740.958 | 96,256 | 0.1967 | 5 | yes |
| zstd | 1 | 1.756 | 137,810 | 0.2816 | 5 | yes |
| zstd | 2 | 1.846 | 133,684 | 0.2731 | 5 | yes |
| zstd | 3 | 2.189 | 126,009 | 0.2575 | 5 | yes |
| zstd | 4 | 2.385 | 125,818 | 0.2571 | 5 | yes |
| zstd | 5 | 4.599 | 117,134 | 0.2393 | 5 | yes |
| zstd | 6 | 6.234 | 113,228 | 0.2313 | 5 | yes |
| zstd | 7 | 7.033 | 111,666 | 0.2282 | 5 | yes |
| zstd | 8 | 8.856 | 110,901 | 0.2266 | 5 | yes |
| zstd | 9 | 8.827 | 110,901 | 0.2266 | 5 | yes |
| zstd | 10 | 10.516 | 109,861 | 0.2245 | 5 | yes |
| zstd | 11 | 13.090 | 109,259 | 0.2232 | 5 | yes |
| zstd | 12 | 13.051 | 109,259 | 0.2232 | 5 | yes |
| zstd | 13 | 26.462 | 108,077 | 0.2208 | 5 | yes |
| zstd | 14 | 32.013 | 107,506 | 0.2197 | 5 | yes |
| zstd | 15 | 35.576 | 107,440 | 0.2195 | 5 | yes |
| zstd | 16 | 63.995 | 101,849 | 0.2081 | 5 | yes |
| zstd | 17 | 71.299 | 100,949 | 0.2063 | 5 | yes |
| zstd | 18 | 102.792 | 100,131 | 0.2046 | 5 | yes |
| zstd | 19 | 132.329 | 100,037 | 0.2044 | 5 | yes |
| zstd | 20 | 132.283 | 100,037 | 0.2044 | 5 | yes |
| zstd | 21 | 131.292 | 100,026 | 0.2044 | 5 | yes |
| zstd | 22 | 131.552 | 100,026 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.078 | 4,987 | 0.2897 | 18 | yes |
| gzip | 2 | 0.079 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.087 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.116 | 4,530 | 0.2631 | 18 | yes |
| gzip | 5 | 0.145 | 4,441 | 0.2579 | 16 | yes |
| gzip | 6 | 0.184 | 4,425 | 0.2570 | 12 | yes |
| gzip | 7 | 0.219 | 4,418 | 0.2566 | 11 | yes |
| gzip | 8 | 0.466 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.447 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.055 | 5,235 | 0.3041 | 13 | yes |
| brotli | 1 | 0.068 | 5,134 | 0.2982 | 11 | yes |
| brotli | 2 | 0.145 | 4,741 | 0.2754 | 25 | no |
| brotli | 3 | 0.139 | 4,650 | 0.2701 | 25 | no |
| brotli | 4 | 0.185 | 4,555 | 0.2646 | 20 | yes |
| brotli | 5 | 0.260 | 4,276 | 0.2484 | 25 | no |
| brotli | 6 | 0.351 | 4,275 | 0.2483 | 12 | yes |
| brotli | 7 | 0.404 | 4,264 | 0.2477 | 8 | yes |
| brotli | 8 | 0.400 | 4,257 | 0.2473 | 9 | yes |
| brotli | 9 | 1.842 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.061 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.172 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.052 | 4,923 | 0.2859 | 9 | yes |
| zstd | 2 | 0.054 | 4,868 | 0.2827 | 13 | yes |
| zstd | 3 | 0.066 | 4,717 | 0.2740 | 25 | no |
| zstd | 4 | 0.070 | 4,679 | 0.2718 | 10 | yes |
| zstd | 5 | 0.136 | 4,519 | 0.2625 | 11 | yes |
| zstd | 6 | 0.172 | 4,437 | 0.2577 | 9 | yes |
| zstd | 7 | 0.194 | 4,437 | 0.2577 | 9 | yes |
| zstd | 8 | 0.212 | 4,426 | 0.2571 | 9 | yes |
| zstd | 9 | 0.236 | 4,420 | 0.2567 | 20 | yes |
| zstd | 10 | 0.302 | 4,410 | 0.2561 | 13 | yes |
| zstd | 11 | 0.614 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.641 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.933 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.431 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.511 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.196 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.319 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.328 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.539 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.533 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.532 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.540 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.047 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.048 | 3,182 | 0.4444 | 12 | yes |
| gzip | 3 | 0.050 | 3,153 | 0.4403 | 14 | yes |
| gzip | 4 | 0.060 | 3,095 | 0.4322 | 12 | yes |
| gzip | 5 | 0.068 | 3,051 | 0.4261 | 10 | yes |
| gzip | 6 | 0.071 | 3,044 | 0.4251 | 9 | yes |
| gzip | 7 | 0.077 | 3,042 | 0.4248 | 11 | yes |
| gzip | 8 | 0.075 | 3,042 | 0.4248 | 8 | yes |
| gzip | 9 | 0.076 | 3,042 | 0.4248 | 9 | yes |
| brotli | 0 | 0.030 | 3,549 | 0.4956 | 12 | yes |
| brotli | 1 | 0.042 | 3,381 | 0.4721 | 12 | yes |
| brotli | 2 | 0.058 | 3,263 | 0.4557 | 13 | yes |
| brotli | 3 | 0.075 | 3,216 | 0.4491 | 9 | yes |
| brotli | 4 | 0.122 | 3,147 | 0.4395 | 14 | yes |
| brotli | 5 | 0.173 | 2,963 | 0.4138 | 25 | no |
| brotli | 6 | 0.171 | 2,952 | 0.4122 | 12 | yes |
| brotli | 7 | 0.170 | 2,944 | 0.4111 | 16 | yes |
| brotli | 8 | 0.172 | 2,944 | 0.4111 | 11 | yes |
| brotli | 9 | 1.579 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.236 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.076 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.041 | 3,254 | 0.4544 | 25 | no |
| zstd | 2 | 0.032 | 3,200 | 0.4469 | 25 | no |
| zstd | 3 | 0.039 | 3,176 | 0.4435 | 11 | yes |
| zstd | 4 | 0.082 | 3,102 | 0.4332 | 25 | no |
| zstd | 5 | 0.069 | 3,079 | 0.4300 | 9 | yes |
| zstd | 6 | 0.082 | 3,060 | 0.4273 | 19 | yes |
| zstd | 7 | 0.097 | 3,053 | 0.4263 | 13 | yes |
| zstd | 8 | 0.146 | 3,053 | 0.4263 | 21 | yes |
| zstd | 9 | 0.130 | 3,055 | 0.4266 | 25 | no |
| zstd | 10 | 0.117 | 3,055 | 0.4266 | 10 | yes |
| zstd | 11 | 0.224 | 3,044 | 0.4251 | 19 | yes |
| zstd | 12 | 0.445 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.594 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.572 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.559 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.035 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.047 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.027 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.098 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.053 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.128 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.059 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,901 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.091 | 67,260 | 0.4079 | 5 | yes |
| gzip | 2 | 2.279 | 65,641 | 0.3981 | 5 | yes |
| gzip | 3 | 2.590 | 64,609 | 0.3918 | 5 | yes |
| gzip | 4 | 2.867 | 62,246 | 0.3775 | 5 | yes |
| gzip | 5 | 3.934 | 60,620 | 0.3676 | 5 | yes |
| gzip | 6 | 4.966 | 60,347 | 0.3660 | 5 | yes |
| gzip | 7 | 5.391 | 60,306 | 0.3657 | 5 | yes |
| gzip | 8 | 5.826 | 60,288 | 0.3656 | 5 | yes |
| gzip | 9 | 5.880 | 60,288 | 0.3656 | 5 | yes |
| brotli | 0 | 0.568 | 71,542 | 0.4338 | 16 | yes |
| brotli | 1 | 0.937 | 68,608 | 0.4161 | 5 | yes |
| brotli | 2 | 1.738 | 63,268 | 0.3837 | 5 | yes |
| brotli | 3 | 2.052 | 62,714 | 0.3803 | 5 | yes |
| brotli | 4 | 2.931 | 61,492 | 0.3729 | 5 | yes |
| brotli | 5 | 4.610 | 58,210 | 0.3530 | 5 | yes |
| brotli | 6 | 4.905 | 57,839 | 0.3507 | 5 | yes |
| brotli | 7 | 6.163 | 57,540 | 0.3489 | 5 | yes |
| brotli | 8 | 6.568 | 57,465 | 0.3485 | 5 | yes |
| brotli | 9 | 8.904 | 57,391 | 0.3480 | 5 | yes |
| brotli | 10 | 100.119 | 54,557 | 0.3308 | 5 | yes |
| brotli | 11 | 261.248 | 53,655 | 0.3254 | 5 | yes |
| zstd | 1 | 0.618 | 66,585 | 0.4038 | 5 | yes |
| zstd | 2 | 0.811 | 63,595 | 0.3857 | 5 | yes |
| zstd | 3 | 0.955 | 63,025 | 0.3822 | 5 | yes |
| zstd | 4 | 1.836 | 61,203 | 0.3711 | 5 | yes |
| zstd | 5 | 2.060 | 60,668 | 0.3679 | 5 | yes |
| zstd | 6 | 2.502 | 59,769 | 0.3625 | 5 | yes |
| zstd | 7 | 2.928 | 58,956 | 0.3575 | 5 | yes |
| zstd | 8 | 3.638 | 58,460 | 0.3545 | 5 | yes |
| zstd | 9 | 4.271 | 58,213 | 0.3530 | 5 | yes |
| zstd | 10 | 5.068 | 58,073 | 0.3522 | 5 | yes |
| zstd | 11 | 8.390 | 57,781 | 0.3504 | 5 | yes |
| zstd | 12 | 8.676 | 57,769 | 0.3503 | 5 | yes |
| zstd | 13 | 15.048 | 56,782 | 0.3443 | 5 | yes |
| zstd | 14 | 17.621 | 56,326 | 0.3416 | 5 | yes |
| zstd | 15 | 17.913 | 56,318 | 0.3415 | 5 | yes |
| zstd | 16 | 22.969 | 56,132 | 0.3404 | 5 | yes |
| zstd | 17 | 22.638 | 56,132 | 0.3404 | 5 | yes |
| zstd | 18 | 38.737 | 56,049 | 0.3399 | 5 | yes |
| zstd | 19 | 38.569 | 56,049 | 0.3399 | 5 | yes |
| zstd | 20 | 38.675 | 56,049 | 0.3399 | 5 | yes |
| zstd | 21 | 38.884 | 56,049 | 0.3399 | 5 | yes |
| zstd | 22 | 38.781 | 56,049 | 0.3399 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.862 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.941 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.086 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.197 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.582 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.044 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.447 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.365 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.356 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.207 | 30,978 | 0.4230 | 10 | yes |
| brotli | 1 | 0.330 | 29,754 | 0.4063 | 16 | yes |
| brotli | 2 | 0.721 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.868 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.354 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.950 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.145 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.621 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.806 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.649 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 41.447 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 100.197 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.206 | 28,919 | 0.3949 | 10 | yes |
| zstd | 2 | 0.224 | 28,008 | 0.3824 | 13 | yes |
| zstd | 3 | 0.277 | 27,463 | 0.3750 | 12 | yes |
| zstd | 4 | 0.338 | 27,100 | 0.3700 | 17 | yes |
| zstd | 5 | 0.805 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.090 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.305 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.432 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.659 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.957 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.266 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.408 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.362 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.421 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.452 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.733 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.859 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.667 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.556 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.555 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.501 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.624 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,169 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.725 | 25,582 | 0.2837 | 5 | yes |
| gzip | 2 | 0.807 | 25,330 | 0.2809 | 5 | yes |
| gzip | 3 | 0.967 | 25,125 | 0.2786 | 5 | yes |
| gzip | 4 | 1.094 | 23,752 | 0.2634 | 5 | yes |
| gzip | 5 | 1.544 | 22,851 | 0.2534 | 5 | yes |
| gzip | 6 | 2.369 | 22,618 | 0.2508 | 5 | yes |
| gzip | 7 | 3.191 | 22,513 | 0.2497 | 5 | yes |
| gzip | 8 | 9.235 | 22,266 | 0.2469 | 5 | yes |
| gzip | 9 | 9.348 | 22,264 | 0.2469 | 5 | yes |
| brotli | 0 | 0.197 | 27,662 | 0.3068 | 10 | yes |
| brotli | 1 | 0.401 | 25,918 | 0.2874 | 5 | yes |
| brotli | 2 | 0.722 | 23,445 | 0.2600 | 5 | yes |
| brotli | 3 | 0.866 | 23,374 | 0.2592 | 5 | yes |
| brotli | 4 | 1.264 | 22,948 | 0.2545 | 5 | yes |
| brotli | 5 | 1.894 | 21,885 | 0.2427 | 5 | yes |
| brotli | 6 | 2.133 | 21,770 | 0.2414 | 5 | yes |
| brotli | 7 | 2.623 | 21,692 | 0.2406 | 5 | yes |
| brotli | 8 | 3.034 | 21,642 | 0.2400 | 5 | yes |
| brotli | 9 | 5.318 | 21,554 | 0.2390 | 5 | yes |
| brotli | 10 | 36.926 | 18,928 | 0.2099 | 5 | yes |
| brotli | 11 | 107.265 | 18,418 | 0.2043 | 5 | yes |
| zstd | 1 | 0.215 | 24,558 | 0.2724 | 11 | yes |
| zstd | 2 | 0.237 | 24,331 | 0.2698 | 12 | yes |
| zstd | 3 | 0.273 | 24,100 | 0.2673 | 17 | yes |
| zstd | 4 | 0.319 | 24,021 | 0.2664 | 15 | yes |
| zstd | 5 | 0.801 | 23,309 | 0.2585 | 5 | yes |
| zstd | 6 | 1.109 | 22,411 | 0.2485 | 5 | yes |
| zstd | 7 | 1.387 | 21,911 | 0.2430 | 5 | yes |
| zstd | 8 | 1.547 | 21,844 | 0.2423 | 5 | yes |
| zstd | 9 | 1.980 | 21,770 | 0.2414 | 5 | yes |
| zstd | 10 | 2.530 | 21,703 | 0.2407 | 5 | yes |
| zstd | 11 | 3.776 | 21,560 | 0.2391 | 5 | yes |
| zstd | 12 | 5.053 | 21,531 | 0.2388 | 5 | yes |
| zstd | 13 | 5.855 | 21,345 | 0.2367 | 5 | yes |
| zstd | 14 | 8.124 | 20,515 | 0.2275 | 5 | yes |
| zstd | 15 | 9.672 | 20,378 | 0.2260 | 5 | yes |
| zstd | 16 | 13.314 | 20,209 | 0.2241 | 5 | yes |
| zstd | 17 | 17.876 | 20,179 | 0.2238 | 5 | yes |
| zstd | 18 | 27.205 | 20,175 | 0.2237 | 5 | yes |
| zstd | 19 | 27.246 | 20,183 | 0.2238 | 5 | yes |
| zstd | 20 | 32.109 | 20,146 | 0.2234 | 5 | yes |
| zstd | 21 | 46.999 | 20,138 | 0.2233 | 5 | yes |
| zstd | 22 | 54.349 | 20,133 | 0.2233 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.197 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.259 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.498 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.789 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.316 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.191 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.967 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.391 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.461 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.326 | 43,268 | 0.1864 | 13 | yes |
| brotli | 1 | 0.661 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.221 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.454 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.110 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.044 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.341 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.829 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.355 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.564 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 99.906 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 303.689 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.512 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.490 | 34,301 | 0.1478 | 8 | yes |
| zstd | 3 | 0.566 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.456 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.741 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.968 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.186 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.682 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.250 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.889 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.996 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.766 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.297 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.966 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 27.847 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 47.676 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 52.614 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 71.806 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.093 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 83.438 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.502 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 83.019 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,946,804 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 103.740 | 3,754,873 | 0.2216 | 5 | yes |
| gzip | 2 | 113.409 | 3,606,731 | 0.2128 | 5 | yes |
| gzip | 3 | 140.978 | 3,488,191 | 0.2058 | 5 | yes |
| gzip | 4 | 154.754 | 3,361,083 | 0.1983 | 5 | yes |
| gzip | 5 | 208.021 | 3,140,651 | 0.1853 | 5 | yes |
| gzip | 6 | 321.765 | 3,073,208 | 0.1813 | 5 | yes |
| gzip | 7 | 443.096 | 3,007,264 | 0.1775 | 5 | yes |
| gzip | 8 | 1277.318 | 2,939,923 | 0.1735 | 5 | yes |
| gzip | 9 | 1321.534 | 2,939,101 | 0.1734 | 5 | yes |
| brotli | 0 | 44.949 | 4,158,391 | 0.2454 | 5 | yes |
| brotli | 1 | 66.928 | 3,696,388 | 0.2181 | 5 | yes |
| brotli | 2 | 113.798 | 3,404,652 | 0.2009 | 5 | yes |
| brotli | 3 | 133.631 | 3,347,644 | 0.1975 | 5 | yes |
| brotli | 4 | 185.643 | 3,276,816 | 0.1934 | 5 | yes |
| brotli | 5 | 298.177 | 2,921,643 | 0.1724 | 5 | yes |
| brotli | 6 | 361.314 | 2,890,343 | 0.1706 | 5 | yes |
| brotli | 7 | 545.989 | 2,863,078 | 0.1689 | 5 | yes |
| brotli | 8 | 742.011 | 2,844,800 | 0.1679 | 5 | yes |
| brotli | 9 | 932.065 | 2,834,664 | 0.1673 | 5 | yes |
| brotli | 10 | 11079.123 | 2,428,562 | 0.1433 | 5 | yes |
| brotli | 11 | 28482.921 | 2,309,167 | 0.1363 | 5 | yes |
| zstd | 1 | 44.483 | 3,504,403 | 0.2068 | 5 | yes |
| zstd | 2 | 55.912 | 3,581,907 | 0.2114 | 5 | yes |
| zstd | 3 | 66.536 | 3,507,920 | 0.2070 | 5 | yes |
| zstd | 4 | 72.147 | 3,502,711 | 0.2067 | 5 | yes |
| zstd | 5 | 138.851 | 3,287,468 | 0.1940 | 5 | yes |
| zstd | 6 | 199.879 | 3,067,272 | 0.1810 | 5 | yes |
| zstd | 7 | 233.177 | 3,028,718 | 0.1787 | 5 | yes |
| zstd | 8 | 302.626 | 2,926,446 | 0.1727 | 5 | yes |
| zstd | 9 | 316.170 | 2,936,848 | 0.1733 | 5 | yes |
| zstd | 10 | 413.066 | 2,900,202 | 0.1711 | 5 | yes |
| zstd | 11 | 575.361 | 2,873,028 | 0.1695 | 5 | yes |
| zstd | 12 | 639.053 | 2,872,898 | 0.1695 | 5 | yes |
| zstd | 13 | 871.044 | 2,850,280 | 0.1682 | 5 | yes |
| zstd | 14 | 1039.490 | 2,835,958 | 0.1673 | 5 | yes |
| zstd | 15 | 1399.878 | 2,832,325 | 0.1671 | 5 | yes |
| zstd | 16 | 2815.168 | 2,645,548 | 0.1561 | 5 | yes |
| zstd | 17 | 3675.059 | 2,553,740 | 0.1507 | 5 | yes |
| zstd | 18 | 5613.106 | 2,535,042 | 0.1496 | 5 | yes |
| zstd | 19 | 6252.102 | 2,528,063 | 0.1492 | 5 | yes |
| zstd | 20 | 6355.294 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 21 | 6349.591 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 22 | 6550.431 | 2,521,575 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.715 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.884 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.693 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.435 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 27.119 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 32.147 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 34.127 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.544 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.698 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.144 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.657 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.431 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.754 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.514 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.550 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.718 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 46.658 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 57.049 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 67.697 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 963.677 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2078.965 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.221 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.120 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.556 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.505 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 11.171 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.492 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.552 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.313 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 20.955 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 23.768 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 27.825 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 27.742 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 50.461 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 50.564 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 52.653 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 92.768 | 369,550 | 0.4298 | 6 | yes |
| zstd | 17 | 117.979 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 151.144 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 168.073 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 169.552 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 168.165 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 171.283 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.085 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.081 | 5,424 | 0.2784 | 25 | yes |
| gzip | 3 | 0.093 | 5,356 | 0.2749 | 19 | yes |
| gzip | 4 | 0.121 | 5,145 | 0.2641 | 23 | yes |
| gzip | 5 | 0.152 | 4,896 | 0.2513 | 25 | no |
| gzip | 6 | 0.224 | 4,884 | 0.2507 | 25 | no |
| gzip | 7 | 0.494 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.681 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.669 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.057 | 6,028 | 0.3094 | 9 | yes |
| brotli | 1 | 0.076 | 5,737 | 0.2945 | 9 | yes |
| brotli | 2 | 0.103 | 4,944 | 0.2538 | 25 | no |
| brotli | 3 | 0.128 | 4,930 | 0.2531 | 14 | yes |
| brotli | 4 | 0.207 | 4,898 | 0.2514 | 24 | yes |
| brotli | 5 | 0.442 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.482 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.575 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.607 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 2.037 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.448 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.160 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.053 | 5,379 | 0.2761 | 11 | yes |
| zstd | 2 | 0.057 | 5,176 | 0.2657 | 9 | yes |
| zstd | 3 | 0.067 | 5,169 | 0.2653 | 11 | yes |
| zstd | 4 | 0.071 | 5,154 | 0.2646 | 11 | yes |
| zstd | 5 | 0.146 | 5,074 | 0.2605 | 8 | yes |
| zstd | 6 | 0.194 | 4,797 | 0.2463 | 9 | yes |
| zstd | 7 | 0.223 | 4,702 | 0.2414 | 11 | yes |
| zstd | 8 | 0.255 | 4,696 | 0.2411 | 9 | yes |
| zstd | 9 | 0.353 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.446 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.603 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.628 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.998 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.729 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.820 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.550 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.553 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.548 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.985 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.023 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.022 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.006 | 4,348 | 0.2232 | 5 | yes |
