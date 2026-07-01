# Node Compression Benchmark

Last updated: 2026-07-01T21:20:56.649Z

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
| gzip | 1 | 0.941 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.969 | 30,134 | 0.3827 | 8 | yes |
| gzip | 3 | 1.070 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.243 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.573 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.857 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.058 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.353 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.370 | 27,530 | 0.3496 | 9 | yes |
| brotli | 0 | 0.418 | 33,111 | 0.4205 | 5 | yes |
| brotli | 1 | 0.757 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.839 | 29,394 | 0.3733 | 15 | yes |
| brotli | 3 | 0.991 | 29,072 | 0.3692 | 10 | yes |
| brotli | 4 | 1.372 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.009 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.231 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.630 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.537 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.514 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.444 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 95.781 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.333 | 31,062 | 0.3944 | 9 | yes |
| zstd | 2 | 0.344 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.427 | 29,214 | 0.3710 | 9 | yes |
| zstd | 4 | 0.524 | 29,108 | 0.3696 | 6 | yes |
| zstd | 5 | 0.867 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.185 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.458 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.606 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.763 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.016 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.397 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.482 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.485 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.233 | 26,432 | 0.3357 | 10 | yes |
| zstd | 15 | 7.996 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.991 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.914 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.918 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.362 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.355 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.478 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.422 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 86.894 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 88.975 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 94.188 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 103.083 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 122.884 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 134.915 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 142.289 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 162.162 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.790 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.511 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.485 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.989 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 66.311 | 3,210,322 | 0.5866 | 6 | yes |
| brotli | 4 | 83.818 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 126.463 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 141.994 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 402.150 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 536.353 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 671.059 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5845.845 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12475.889 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.024 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.685 | 3,233,695 | 0.5909 | 7 | yes |
| zstd | 3 | 38.014 | 3,139,155 | 0.5736 | 6 | yes |
| zstd | 4 | 42.758 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.745 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 79.334 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 85.457 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 99.171 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 98.857 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 128.970 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 176.288 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 198.440 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 461.981 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 499.510 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 495.110 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 640.324 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 779.680 | 2,756,112 | 0.5036 | 7 | yes |
| zstd | 18 | 1121.816 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1247.546 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1354.778 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1287.677 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1280.865 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.071 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.083 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.087 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.638 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.741 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.691 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.623 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.630 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.624 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.278 | 613,595 | 0.9981 | 21 | yes |
| brotli | 1 | 0.288 | 614,785 | 1.0000 | 8 | yes |
| brotli | 2 | 0.647 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.839 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.075 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.485 | 614,785 | 1.0000 | 13 | yes |
| brotli | 6 | 1.705 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 2.060 | 614,785 | 1.0000 | 14 | yes |
| brotli | 8 | 2.221 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 5.710 | 614,785 | 1.0000 | 9 | yes |
| brotli | 10 | 109.012 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 245.656 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.304 | 614,805 | 1.0000 | 6 | yes |
| zstd | 2 | 0.311 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.354 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.362 | 614,804 | 1.0000 | 25 | no |
| zstd | 5 | 0.494 | 614,804 | 1.0000 | 25 | no |
| zstd | 6 | 0.493 | 614,804 | 1.0000 | 9 | yes |
| zstd | 7 | 0.602 | 614,804 | 1.0000 | 14 | yes |
| zstd | 8 | 0.582 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.679 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.657 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.700 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.699 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.172 | 612,619 | 0.9965 | 9 | yes |
| zstd | 14 | 2.046 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 2.034 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 13.186 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 13.351 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 21.210 | 612,519 | 0.9963 | 7 | yes |
| zstd | 19 | 23.556 | 612,518 | 0.9963 | 8 | yes |
| zstd | 20 | 23.485 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 23.397 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 23.488 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 489,438 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.884 | 144,998 | 0.2963 | 5 | yes |
| gzip | 2 | 4.183 | 138,219 | 0.2824 | 5 | yes |
| gzip | 3 | 5.445 | 133,612 | 0.2730 | 5 | yes |
| gzip | 4 | 5.798 | 125,406 | 0.2562 | 5 | yes |
| gzip | 5 | 8.183 | 120,770 | 0.2468 | 5 | yes |
| gzip | 6 | 11.769 | 119,046 | 0.2432 | 5 | yes |
| gzip | 7 | 14.842 | 118,588 | 0.2423 | 5 | yes |
| gzip | 8 | 27.797 | 118,313 | 0.2417 | 5 | yes |
| gzip | 9 | 43.126 | 118,247 | 0.2416 | 5 | yes |
| brotli | 0 | 1.536 | 149,463 | 0.3054 | 5 | yes |
| brotli | 1 | 2.121 | 137,171 | 0.2803 | 5 | yes |
| brotli | 2 | 3.888 | 128,941 | 0.2634 | 5 | yes |
| brotli | 3 | 4.436 | 126,368 | 0.2582 | 5 | yes |
| brotli | 4 | 6.492 | 122,323 | 0.2499 | 5 | yes |
| brotli | 5 | 9.874 | 112,470 | 0.2298 | 5 | yes |
| brotli | 6 | 11.458 | 109,832 | 0.2244 | 5 | yes |
| brotli | 7 | 13.599 | 107,875 | 0.2204 | 5 | yes |
| brotli | 8 | 15.905 | 106,822 | 0.2183 | 5 | yes |
| brotli | 9 | 23.052 | 105,940 | 0.2165 | 5 | yes |
| brotli | 10 | 268.459 | 98,503 | 0.2013 | 5 | yes |
| brotli | 11 | 702.908 | 96,256 | 0.1967 | 5 | yes |
| zstd | 1 | 1.634 | 137,810 | 0.2816 | 5 | yes |
| zstd | 2 | 1.811 | 133,684 | 0.2731 | 5 | yes |
| zstd | 3 | 2.186 | 126,009 | 0.2575 | 5 | yes |
| zstd | 4 | 2.356 | 125,818 | 0.2571 | 5 | yes |
| zstd | 5 | 4.419 | 117,134 | 0.2393 | 5 | yes |
| zstd | 6 | 6.194 | 113,228 | 0.2313 | 5 | yes |
| zstd | 7 | 6.722 | 111,666 | 0.2282 | 5 | yes |
| zstd | 8 | 8.506 | 110,901 | 0.2266 | 5 | yes |
| zstd | 9 | 8.498 | 110,901 | 0.2266 | 5 | yes |
| zstd | 10 | 10.172 | 109,861 | 0.2245 | 5 | yes |
| zstd | 11 | 13.123 | 109,259 | 0.2232 | 5 | yes |
| zstd | 12 | 12.924 | 109,259 | 0.2232 | 5 | yes |
| zstd | 13 | 25.953 | 108,077 | 0.2208 | 5 | yes |
| zstd | 14 | 31.436 | 107,506 | 0.2197 | 5 | yes |
| zstd | 15 | 34.952 | 107,440 | 0.2195 | 5 | yes |
| zstd | 16 | 63.224 | 101,849 | 0.2081 | 5 | yes |
| zstd | 17 | 68.662 | 100,949 | 0.2063 | 5 | yes |
| zstd | 18 | 106.224 | 100,131 | 0.2046 | 5 | yes |
| zstd | 19 | 139.678 | 100,037 | 0.2044 | 5 | yes |
| zstd | 20 | 139.115 | 100,037 | 0.2044 | 5 | yes |
| zstd | 21 | 142.270 | 100,026 | 0.2044 | 5 | yes |
| zstd | 22 | 139.652 | 100,026 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.088 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.116 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.138 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.182 | 4,530 | 0.2631 | 5 | yes |
| gzip | 5 | 0.246 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.277 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.314 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.460 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.463 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.055 | 5,235 | 0.3041 | 9 | yes |
| brotli | 1 | 0.065 | 5,134 | 0.2982 | 15 | yes |
| brotli | 2 | 0.134 | 4,741 | 0.2754 | 5 | yes |
| brotli | 3 | 0.155 | 4,650 | 0.2701 | 17 | yes |
| brotli | 4 | 0.286 | 4,555 | 0.2646 | 6 | yes |
| brotli | 5 | 0.382 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.407 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.446 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.438 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 2.197 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.791 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.605 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.052 | 4,923 | 0.2859 | 12 | yes |
| zstd | 2 | 0.063 | 4,868 | 0.2827 | 25 | no |
| zstd | 3 | 0.075 | 4,717 | 0.2740 | 21 | yes |
| zstd | 4 | 0.092 | 4,679 | 0.2718 | 5 | yes |
| zstd | 5 | 0.162 | 4,519 | 0.2625 | 6 | yes |
| zstd | 6 | 0.213 | 4,437 | 0.2577 | 7 | yes |
| zstd | 7 | 0.255 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.277 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.326 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.386 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.613 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.630 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.915 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.458 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.538 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.468 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.639 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.636 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.179 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.181 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.184 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.235 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.055 | 3,220 | 0.4497 | 20 | yes |
| gzip | 2 | 0.058 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.069 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.070 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.088 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.086 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.100 | 3,042 | 0.4248 | 9 | yes |
| gzip | 8 | 0.096 | 3,042 | 0.4248 | 25 | no |
| gzip | 9 | 0.083 | 3,042 | 0.4248 | 9 | yes |
| brotli | 0 | 0.032 | 3,549 | 0.4956 | 17 | yes |
| brotli | 1 | 0.041 | 3,381 | 0.4721 | 19 | yes |
| brotli | 2 | 0.072 | 3,263 | 0.4557 | 25 | no |
| brotli | 3 | 0.077 | 3,216 | 0.4491 | 24 | yes |
| brotli | 4 | 0.157 | 3,147 | 0.4395 | 17 | yes |
| brotli | 5 | 0.234 | 2,963 | 0.4138 | 5 | yes |
| brotli | 6 | 0.236 | 2,952 | 0.4122 | 5 | yes |
| brotli | 7 | 0.269 | 2,944 | 0.4111 | 7 | yes |
| brotli | 8 | 0.259 | 2,944 | 0.4111 | 6 | yes |
| brotli | 9 | 2.257 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.110 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.720 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.033 | 3,254 | 0.4544 | 21 | yes |
| zstd | 2 | 0.056 | 3,200 | 0.4469 | 5 | yes |
| zstd | 3 | 0.043 | 3,176 | 0.4435 | 13 | yes |
| zstd | 4 | 0.066 | 3,102 | 0.4332 | 25 | no |
| zstd | 5 | 0.073 | 3,079 | 0.4300 | 25 | no |
| zstd | 6 | 0.121 | 3,060 | 0.4273 | 7 | yes |
| zstd | 7 | 0.108 | 3,053 | 0.4263 | 18 | yes |
| zstd | 8 | 0.138 | 3,053 | 0.4263 | 6 | yes |
| zstd | 9 | 0.181 | 3,055 | 0.4266 | 13 | yes |
| zstd | 10 | 0.150 | 3,055 | 0.4266 | 19 | yes |
| zstd | 11 | 0.347 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.471 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.661 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.659 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.665 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.256 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.275 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.255 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.270 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.266 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.275 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.280 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,901 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.867 | 67,260 | 0.4079 | 5 | yes |
| gzip | 2 | 2.013 | 65,641 | 0.3981 | 5 | yes |
| gzip | 3 | 2.284 | 64,609 | 0.3918 | 5 | yes |
| gzip | 4 | 2.576 | 62,246 | 0.3775 | 5 | yes |
| gzip | 5 | 3.461 | 60,620 | 0.3676 | 5 | yes |
| gzip | 6 | 4.255 | 60,347 | 0.3660 | 5 | yes |
| gzip | 7 | 4.637 | 60,306 | 0.3657 | 5 | yes |
| gzip | 8 | 5.006 | 60,288 | 0.3656 | 5 | yes |
| gzip | 9 | 5.007 | 60,288 | 0.3656 | 5 | yes |
| brotli | 0 | 0.666 | 71,542 | 0.4338 | 5 | yes |
| brotli | 1 | 0.904 | 68,608 | 0.4161 | 5 | yes |
| brotli | 2 | 1.648 | 63,268 | 0.3837 | 5 | yes |
| brotli | 3 | 1.907 | 62,714 | 0.3803 | 5 | yes |
| brotli | 4 | 2.974 | 61,492 | 0.3729 | 5 | yes |
| brotli | 5 | 4.486 | 58,210 | 0.3530 | 5 | yes |
| brotli | 6 | 4.997 | 57,839 | 0.3507 | 5 | yes |
| brotli | 7 | 5.783 | 57,540 | 0.3489 | 5 | yes |
| brotli | 8 | 6.037 | 57,465 | 0.3485 | 5 | yes |
| brotli | 9 | 10.029 | 57,391 | 0.3480 | 5 | yes |
| brotli | 10 | 94.605 | 54,557 | 0.3308 | 5 | yes |
| brotli | 11 | 246.654 | 53,655 | 0.3254 | 5 | yes |
| zstd | 1 | 0.618 | 66,585 | 0.4038 | 5 | yes |
| zstd | 2 | 0.798 | 63,595 | 0.3857 | 5 | yes |
| zstd | 3 | 1.013 | 63,025 | 0.3822 | 5 | yes |
| zstd | 4 | 1.762 | 61,203 | 0.3711 | 5 | yes |
| zstd | 5 | 1.960 | 60,668 | 0.3679 | 7 | yes |
| zstd | 6 | 2.423 | 59,769 | 0.3625 | 5 | yes |
| zstd | 7 | 2.849 | 58,956 | 0.3575 | 5 | yes |
| zstd | 8 | 3.589 | 58,460 | 0.3545 | 5 | yes |
| zstd | 9 | 4.143 | 58,213 | 0.3530 | 5 | yes |
| zstd | 10 | 5.014 | 58,073 | 0.3522 | 5 | yes |
| zstd | 11 | 8.474 | 57,781 | 0.3504 | 5 | yes |
| zstd | 12 | 8.675 | 57,769 | 0.3503 | 5 | yes |
| zstd | 13 | 15.363 | 56,782 | 0.3443 | 5 | yes |
| zstd | 14 | 18.004 | 56,326 | 0.3416 | 5 | yes |
| zstd | 15 | 18.312 | 56,318 | 0.3415 | 5 | yes |
| zstd | 16 | 24.615 | 56,132 | 0.3404 | 5 | yes |
| zstd | 17 | 24.699 | 56,132 | 0.3404 | 5 | yes |
| zstd | 18 | 42.112 | 56,049 | 0.3399 | 5 | yes |
| zstd | 19 | 42.141 | 56,049 | 0.3399 | 5 | yes |
| zstd | 20 | 42.197 | 56,049 | 0.3399 | 5 | yes |
| zstd | 21 | 42.088 | 56,049 | 0.3399 | 5 | yes |
| zstd | 22 | 42.087 | 56,049 | 0.3399 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.781 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.851 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.963 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.063 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.385 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.774 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.095 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.844 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.845 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.269 | 30,978 | 0.4230 | 12 | yes |
| brotli | 1 | 0.377 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.687 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.795 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.306 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.920 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.095 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.461 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.526 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.853 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 38.907 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 95.620 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.248 | 28,919 | 0.3949 | 7 | yes |
| zstd | 2 | 0.294 | 28,008 | 0.3824 | 6 | yes |
| zstd | 3 | 0.349 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.447 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.777 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.058 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.279 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.409 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.619 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.917 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.129 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.337 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.305 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.537 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.645 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.603 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.598 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.601 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.314 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.297 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.237 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.274 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,169 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.647 | 25,582 | 0.2837 | 5 | yes |
| gzip | 2 | 0.738 | 25,330 | 0.2809 | 5 | yes |
| gzip | 3 | 0.848 | 25,125 | 0.2786 | 5 | yes |
| gzip | 4 | 1.006 | 23,752 | 0.2634 | 5 | yes |
| gzip | 5 | 1.365 | 22,851 | 0.2534 | 5 | yes |
| gzip | 6 | 2.054 | 22,618 | 0.2508 | 5 | yes |
| gzip | 7 | 2.741 | 22,513 | 0.2497 | 5 | yes |
| gzip | 8 | 7.968 | 22,266 | 0.2469 | 5 | yes |
| gzip | 9 | 8.054 | 22,264 | 0.2469 | 5 | yes |
| brotli | 0 | 0.263 | 27,662 | 0.3068 | 13 | yes |
| brotli | 1 | 0.405 | 25,918 | 0.2874 | 5 | yes |
| brotli | 2 | 0.706 | 23,445 | 0.2600 | 5 | yes |
| brotli | 3 | 0.822 | 23,374 | 0.2592 | 5 | yes |
| brotli | 4 | 1.242 | 22,948 | 0.2545 | 5 | yes |
| brotli | 5 | 1.861 | 21,885 | 0.2427 | 5 | yes |
| brotli | 6 | 2.106 | 21,770 | 0.2414 | 5 | yes |
| brotli | 7 | 2.478 | 21,692 | 0.2406 | 5 | yes |
| brotli | 8 | 2.773 | 21,642 | 0.2400 | 5 | yes |
| brotli | 9 | 5.818 | 21,554 | 0.2390 | 5 | yes |
| brotli | 10 | 35.238 | 18,928 | 0.2099 | 5 | yes |
| brotli | 11 | 104.477 | 18,418 | 0.2043 | 5 | yes |
| zstd | 1 | 0.292 | 24,558 | 0.2724 | 5 | yes |
| zstd | 2 | 0.300 | 24,331 | 0.2698 | 6 | yes |
| zstd | 3 | 0.354 | 24,100 | 0.2673 | 5 | yes |
| zstd | 4 | 0.460 | 24,021 | 0.2664 | 5 | yes |
| zstd | 5 | 0.769 | 23,309 | 0.2585 | 5 | yes |
| zstd | 6 | 1.101 | 22,411 | 0.2485 | 5 | yes |
| zstd | 7 | 1.347 | 21,911 | 0.2430 | 5 | yes |
| zstd | 8 | 1.546 | 21,844 | 0.2423 | 5 | yes |
| zstd | 9 | 1.940 | 21,770 | 0.2414 | 5 | yes |
| zstd | 10 | 2.654 | 21,703 | 0.2407 | 5 | yes |
| zstd | 11 | 3.687 | 21,560 | 0.2391 | 5 | yes |
| zstd | 12 | 4.899 | 21,531 | 0.2388 | 5 | yes |
| zstd | 13 | 5.793 | 21,345 | 0.2367 | 5 | yes |
| zstd | 14 | 8.236 | 20,515 | 0.2275 | 5 | yes |
| zstd | 15 | 9.815 | 20,378 | 0.2260 | 5 | yes |
| zstd | 16 | 14.720 | 20,209 | 0.2241 | 5 | yes |
| zstd | 17 | 19.396 | 20,179 | 0.2238 | 5 | yes |
| zstd | 18 | 27.089 | 20,175 | 0.2237 | 5 | yes |
| zstd | 19 | 31.552 | 20,183 | 0.2238 | 5 | yes |
| zstd | 20 | 36.530 | 20,146 | 0.2234 | 5 | yes |
| zstd | 21 | 48.095 | 20,138 | 0.2233 | 5 | yes |
| zstd | 22 | 53.986 | 20,133 | 0.2233 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.060 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.127 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.325 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.693 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.132 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.877 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.526 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.735 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.865 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.466 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.618 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.189 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.656 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.059 | 33,048 | 0.1424 | 15 | yes |
| brotli | 5 | 2.952 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.332 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.592 | 26,971 | 0.1162 | 17 | yes |
| brotli | 8 | 3.983 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 7.941 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 97.102 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 299.385 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.473 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.542 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.590 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.416 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.612 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.900 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.129 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.634 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.289 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.307 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.908 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.784 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.436 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.573 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 27.957 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 55.247 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 62.546 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 83.353 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 95.180 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 99.565 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 99.712 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 99.725 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,045,192 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.929 | 3,776,518 | 0.2216 | 5 | yes |
| gzip | 2 | 101.952 | 3,627,753 | 0.2128 | 5 | yes |
| gzip | 3 | 125.247 | 3,507,453 | 0.2058 | 5 | yes |
| gzip | 4 | 147.943 | 3,379,888 | 0.1983 | 5 | yes |
| gzip | 5 | 191.714 | 3,159,182 | 0.1853 | 5 | yes |
| gzip | 6 | 287.085 | 3,090,847 | 0.1813 | 5 | yes |
| gzip | 7 | 383.505 | 3,024,822 | 0.1775 | 5 | yes |
| gzip | 8 | 1082.409 | 2,957,000 | 0.1735 | 5 | yes |
| gzip | 9 | 1130.930 | 2,956,204 | 0.1734 | 5 | yes |
| brotli | 0 | 45.814 | 4,175,487 | 0.2450 | 5 | yes |
| brotli | 1 | 62.986 | 3,718,326 | 0.2181 | 5 | yes |
| brotli | 2 | 110.990 | 3,424,305 | 0.2009 | 5 | yes |
| brotli | 3 | 130.540 | 3,367,979 | 0.1976 | 5 | yes |
| brotli | 4 | 185.268 | 3,295,114 | 0.1933 | 5 | yes |
| brotli | 5 | 307.789 | 2,938,968 | 0.1724 | 5 | yes |
| brotli | 6 | 356.983 | 2,906,886 | 0.1705 | 5 | yes |
| brotli | 7 | 536.291 | 2,880,272 | 0.1690 | 5 | yes |
| brotli | 8 | 720.568 | 2,860,897 | 0.1678 | 5 | yes |
| brotli | 9 | 955.001 | 2,849,681 | 0.1672 | 5 | yes |
| brotli | 10 | 10250.059 | 2,442,746 | 0.1433 | 5 | yes |
| brotli | 11 | 27340.059 | 2,324,312 | 0.1364 | 5 | yes |
| zstd | 1 | 43.974 | 3,525,070 | 0.2068 | 5 | yes |
| zstd | 2 | 56.132 | 3,602,765 | 0.2114 | 5 | yes |
| zstd | 3 | 66.551 | 3,528,707 | 0.2070 | 5 | yes |
| zstd | 4 | 69.820 | 3,523,547 | 0.2067 | 5 | yes |
| zstd | 5 | 134.533 | 3,306,721 | 0.1940 | 5 | yes |
| zstd | 6 | 191.962 | 3,085,317 | 0.1810 | 5 | yes |
| zstd | 7 | 218.099 | 3,046,804 | 0.1787 | 5 | yes |
| zstd | 8 | 289.009 | 2,943,521 | 0.1727 | 5 | yes |
| zstd | 9 | 324.779 | 2,954,143 | 0.1733 | 9 | yes |
| zstd | 10 | 429.013 | 2,917,471 | 0.1712 | 5 | yes |
| zstd | 11 | 566.804 | 2,889,922 | 0.1695 | 5 | yes |
| zstd | 12 | 623.614 | 2,889,906 | 0.1695 | 5 | yes |
| zstd | 13 | 746.747 | 2,866,998 | 0.1682 | 5 | yes |
| zstd | 14 | 944.164 | 2,852,567 | 0.1674 | 5 | yes |
| zstd | 15 | 1282.573 | 2,848,994 | 0.1671 | 5 | yes |
| zstd | 16 | 2633.373 | 2,661,004 | 0.1561 | 5 | yes |
| zstd | 17 | 3325.789 | 2,568,659 | 0.1507 | 5 | yes |
| zstd | 18 | 5897.449 | 2,549,776 | 0.1496 | 5 | yes |
| zstd | 19 | 6226.155 | 2,542,941 | 0.1492 | 5 | yes |
| zstd | 20 | 6489.384 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 21 | 6294.701 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 22 | 6876.055 | 2,536,119 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.224 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.274 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.464 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.547 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.507 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.706 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.340 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.246 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.286 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.898 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.394 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.961 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.991 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.529 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.694 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 30.789 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.438 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 51.527 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 66.853 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 896.552 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1924.371 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.054 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.875 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 6.009 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.568 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.259 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.944 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.871 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.419 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.505 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.175 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 25.477 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.219 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 46.032 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 47.212 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 48.135 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 87.687 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 114.349 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 146.665 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 163.630 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 166.910 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 165.079 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 165.378 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.110 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.119 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.148 | 5,356 | 0.2749 | 20 | yes |
| gzip | 4 | 0.203 | 5,145 | 0.2641 | 6 | yes |
| gzip | 5 | 0.265 | 4,896 | 0.2513 | 6 | yes |
| gzip | 6 | 0.358 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.480 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.643 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.637 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.059 | 6,028 | 0.3094 | 15 | yes |
| brotli | 1 | 0.071 | 5,737 | 0.2945 | 17 | yes |
| brotli | 2 | 0.146 | 4,944 | 0.2538 | 9 | yes |
| brotli | 3 | 0.173 | 4,930 | 0.2531 | 13 | yes |
| brotli | 4 | 0.292 | 4,898 | 0.2514 | 5 | yes |
| brotli | 5 | 0.453 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.490 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.567 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.611 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.710 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.054 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.424 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.055 | 5,379 | 0.2761 | 14 | yes |
| zstd | 2 | 0.061 | 5,176 | 0.2657 | 20 | yes |
| zstd | 3 | 0.082 | 5,169 | 0.2653 | 14 | yes |
| zstd | 4 | 0.099 | 5,154 | 0.2646 | 5 | yes |
| zstd | 5 | 0.173 | 5,074 | 0.2605 | 5 | yes |
| zstd | 6 | 0.231 | 4,797 | 0.2463 | 8 | yes |
| zstd | 7 | 0.289 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.318 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.394 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.523 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.576 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.635 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.978 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.785 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.882 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.839 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.847 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.832 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.600 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.590 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.601 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.595 | 4,348 | 0.2232 | 5 | yes |
