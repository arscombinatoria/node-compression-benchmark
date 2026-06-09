# Node Compression Benchmark

Last updated: 2026-06-09T21:18:30.293Z

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
| gzip | 1 | 1.262 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.436 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.474 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.719 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 2.195 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.477 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.688 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.937 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.978 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.513 | 33,111 | 0.4205 | 5 | yes |
| brotli | 1 | 0.902 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 1.215 | 29,394 | 0.3733 | 5 | yes |
| brotli | 3 | 1.399 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.368 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.010 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.131 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.433 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.582 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 7.568 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 34.929 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 97.738 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.273 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.360 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.367 | 29,214 | 0.3710 | 8 | yes |
| zstd | 4 | 0.441 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.840 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.134 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.413 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.531 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.700 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.924 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.418 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.676 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.332 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.275 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.403 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 9.784 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 9.766 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 9.759 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.124 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.085 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.035 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.001 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 85.175 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 89.806 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 92.440 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.234 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 118.759 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.552 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 141.155 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 157.328 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 169.228 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 18.402 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 23.803 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 43.930 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 55.173 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 89.540 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 125.450 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 146.468 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 464.255 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 613.918 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 840.882 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6241.565 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12642.604 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.520 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 22.466 | 3,233,695 | 0.5909 | 6 | yes |
| zstd | 3 | 33.577 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 45.597 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 64.303 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 75.097 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 82.622 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 97.501 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 94.775 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 117.807 | 2,879,072 | 0.5261 | 6 | yes |
| zstd | 11 | 178.121 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 245.286 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 489.865 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 521.798 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 633.680 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 790.603 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 926.219 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1217.435 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1314.095 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1292.074 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1288.649 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1279.797 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.136 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.132 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.149 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.696 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.689 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.696 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.733 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.722 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.729 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.322 | 613,595 | 0.9981 | 5 | yes |
| brotli | 1 | 0.333 | 614,785 | 1.0000 | 5 | yes |
| brotli | 2 | 0.657 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.769 | 614,763 | 1.0000 | 18 | yes |
| brotli | 4 | 0.883 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.431 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.893 | 614,785 | 1.0000 | 7 | yes |
| brotli | 7 | 2.016 | 614,785 | 1.0000 | 25 | no |
| brotli | 8 | 2.079 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 6.939 | 614,785 | 1.0000 | 16 | yes |
| brotli | 10 | 132.109 | 614,785 | 1.0000 | 8 | yes |
| brotli | 11 | 273.134 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.376 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.411 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.478 | 614,804 | 1.0000 | 25 | no |
| zstd | 4 | 0.461 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.598 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.578 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.693 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.680 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.863 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.896 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.988 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.962 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.978 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 2.999 | 612,619 | 0.9965 | 9 | yes |
| zstd | 15 | 3.075 | 612,619 | 0.9965 | 9 | yes |
| zstd | 16 | 26.626 | 612,536 | 0.9963 | 25 | no |
| zstd | 17 | 17.364 | 612,516 | 0.9963 | 25 | no |
| zstd | 18 | 21.261 | 612,519 | 0.9963 | 25 | no |
| zstd | 19 | 24.475 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 24.045 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 24.652 | 612,518 | 0.9963 | 8 | yes |
| zstd | 22 | 30.066 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,543 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.919 | 144,722 | 0.2962 | 5 | yes |
| gzip | 2 | 4.225 | 137,958 | 0.2824 | 5 | yes |
| gzip | 3 | 5.217 | 133,328 | 0.2729 | 5 | yes |
| gzip | 4 | 5.602 | 125,147 | 0.2562 | 5 | yes |
| gzip | 5 | 7.854 | 120,540 | 0.2467 | 5 | yes |
| gzip | 6 | 11.060 | 118,809 | 0.2432 | 5 | yes |
| gzip | 7 | 13.667 | 118,352 | 0.2423 | 5 | yes |
| gzip | 8 | 27.843 | 118,085 | 0.2417 | 5 | yes |
| gzip | 9 | 43.385 | 118,014 | 0.2416 | 5 | yes |
| brotli | 0 | 1.409 | 149,209 | 0.3054 | 5 | yes |
| brotli | 1 | 1.786 | 136,872 | 0.2802 | 5 | yes |
| brotli | 2 | 3.658 | 128,691 | 0.2634 | 5 | yes |
| brotli | 3 | 4.235 | 126,178 | 0.2583 | 5 | yes |
| brotli | 4 | 5.954 | 122,074 | 0.2499 | 5 | yes |
| brotli | 5 | 9.643 | 112,240 | 0.2297 | 5 | yes |
| brotli | 6 | 11.424 | 109,635 | 0.2244 | 5 | yes |
| brotli | 7 | 13.442 | 107,650 | 0.2203 | 5 | yes |
| brotli | 8 | 15.633 | 106,631 | 0.2183 | 5 | yes |
| brotli | 9 | 24.676 | 105,723 | 0.2164 | 5 | yes |
| brotli | 10 | 275.629 | 98,258 | 0.2011 | 5 | yes |
| brotli | 11 | 713.228 | 96,108 | 0.1967 | 5 | yes |
| zstd | 1 | 1.584 | 137,573 | 0.2816 | 5 | yes |
| zstd | 2 | 1.698 | 133,375 | 0.2730 | 5 | yes |
| zstd | 3 | 1.924 | 125,750 | 0.2574 | 5 | yes |
| zstd | 4 | 2.139 | 125,549 | 0.2570 | 5 | yes |
| zstd | 5 | 4.114 | 116,894 | 0.2393 | 5 | yes |
| zstd | 6 | 5.564 | 113,004 | 0.2313 | 5 | yes |
| zstd | 7 | 6.416 | 111,439 | 0.2281 | 5 | yes |
| zstd | 8 | 8.161 | 110,653 | 0.2265 | 5 | yes |
| zstd | 9 | 8.177 | 110,653 | 0.2265 | 5 | yes |
| zstd | 10 | 9.973 | 109,644 | 0.2244 | 5 | yes |
| zstd | 11 | 12.610 | 109,043 | 0.2232 | 5 | yes |
| zstd | 12 | 12.263 | 109,043 | 0.2232 | 5 | yes |
| zstd | 13 | 27.068 | 107,872 | 0.2208 | 5 | yes |
| zstd | 14 | 33.587 | 107,279 | 0.2196 | 5 | yes |
| zstd | 15 | 37.700 | 107,109 | 0.2192 | 5 | yes |
| zstd | 16 | 64.104 | 101,632 | 0.2080 | 5 | yes |
| zstd | 17 | 72.950 | 100,728 | 0.2062 | 5 | yes |
| zstd | 18 | 102.155 | 99,953 | 0.2046 | 5 | yes |
| zstd | 19 | 132.800 | 99,848 | 0.2044 | 5 | yes |
| zstd | 20 | 137.765 | 99,848 | 0.2044 | 5 | yes |
| zstd | 21 | 139.079 | 99,841 | 0.2044 | 5 | yes |
| zstd | 22 | 134.108 | 99,841 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.118 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.126 | 4,874 | 0.2831 | 14 | yes |
| gzip | 3 | 0.130 | 4,806 | 0.2791 | 21 | yes |
| gzip | 4 | 0.176 | 4,530 | 0.2631 | 5 | yes |
| gzip | 5 | 0.239 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.264 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.298 | 4,418 | 0.2566 | 6 | yes |
| gzip | 8 | 0.435 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.452 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.053 | 5,235 | 0.3041 | 9 | yes |
| brotli | 1 | 0.062 | 5,134 | 0.2982 | 16 | yes |
| brotli | 2 | 0.112 | 4,741 | 0.2754 | 20 | yes |
| brotli | 3 | 0.155 | 4,650 | 0.2701 | 8 | yes |
| brotli | 4 | 0.252 | 4,555 | 0.2646 | 10 | yes |
| brotli | 5 | 0.370 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.396 | 4,275 | 0.2483 | 6 | yes |
| brotli | 7 | 0.428 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.433 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 3.754 | 4,244 | 0.2465 | 13 | yes |
| brotli | 10 | 6.912 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.167 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.051 | 4,923 | 0.2859 | 9 | yes |
| zstd | 2 | 0.053 | 4,868 | 0.2827 | 8 | yes |
| zstd | 3 | 0.066 | 4,717 | 0.2740 | 10 | yes |
| zstd | 4 | 0.068 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.155 | 4,519 | 0.2625 | 8 | yes |
| zstd | 6 | 0.214 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.240 | 4,437 | 0.2577 | 8 | yes |
| zstd | 8 | 0.268 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.294 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.334 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.644 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.683 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.920 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.360 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.447 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.152 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.256 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.271 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.429 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.416 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.430 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.426 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.055 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.053 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.065 | 3,153 | 0.4403 | 14 | yes |
| gzip | 4 | 0.086 | 3,095 | 0.4322 | 14 | yes |
| gzip | 5 | 0.114 | 3,051 | 0.4261 | 5 | yes |
| gzip | 6 | 0.102 | 3,044 | 0.4251 | 11 | yes |
| gzip | 7 | 0.116 | 3,042 | 0.4248 | 5 | yes |
| gzip | 8 | 0.109 | 3,042 | 0.4248 | 9 | yes |
| gzip | 9 | 0.101 | 3,042 | 0.4248 | 5 | yes |
| brotli | 0 | 0.030 | 3,549 | 0.4956 | 6 | yes |
| brotli | 1 | 0.040 | 3,381 | 0.4721 | 8 | yes |
| brotli | 2 | 0.074 | 3,263 | 0.4557 | 7 | yes |
| brotli | 3 | 0.074 | 3,216 | 0.4491 | 15 | yes |
| brotli | 4 | 0.148 | 3,147 | 0.4395 | 9 | yes |
| brotli | 5 | 0.200 | 2,963 | 0.4138 | 24 | yes |
| brotli | 6 | 0.218 | 2,952 | 0.4122 | 10 | yes |
| brotli | 7 | 0.273 | 2,944 | 0.4111 | 5 | yes |
| brotli | 8 | 0.250 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 2.474 | 2,945 | 0.4113 | 25 | no |
| brotli | 10 | 3.162 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.013 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.038 | 3,254 | 0.4544 | 25 | no |
| zstd | 2 | 0.034 | 3,200 | 0.4469 | 6 | yes |
| zstd | 3 | 0.040 | 3,176 | 0.4435 | 5 | yes |
| zstd | 4 | 0.067 | 3,102 | 0.4332 | 10 | yes |
| zstd | 5 | 0.075 | 3,079 | 0.4300 | 25 | no |
| zstd | 6 | 0.087 | 3,060 | 0.4273 | 24 | yes |
| zstd | 7 | 0.102 | 3,053 | 0.4263 | 9 | yes |
| zstd | 8 | 0.100 | 3,053 | 0.4263 | 5 | yes |
| zstd | 9 | 0.193 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.175 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.340 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.443 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.589 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.593 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.584 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.141 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.140 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.149 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.150 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.145 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.147 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.142 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,217 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.883 | 66,928 | 0.4076 | 5 | yes |
| gzip | 2 | 2.045 | 65,338 | 0.3979 | 5 | yes |
| gzip | 3 | 2.266 | 64,317 | 0.3917 | 5 | yes |
| gzip | 4 | 2.528 | 61,980 | 0.3774 | 5 | yes |
| gzip | 5 | 3.427 | 60,339 | 0.3674 | 5 | yes |
| gzip | 6 | 4.151 | 60,067 | 0.3658 | 5 | yes |
| gzip | 7 | 4.491 | 60,024 | 0.3655 | 5 | yes |
| gzip | 8 | 4.836 | 60,007 | 0.3654 | 5 | yes |
| gzip | 9 | 4.852 | 60,007 | 0.3654 | 5 | yes |
| brotli | 0 | 0.613 | 71,251 | 0.4339 | 5 | yes |
| brotli | 1 | 0.775 | 68,275 | 0.4158 | 5 | yes |
| brotli | 2 | 1.571 | 63,015 | 0.3837 | 5 | yes |
| brotli | 3 | 1.861 | 62,457 | 0.3803 | 5 | yes |
| brotli | 4 | 2.779 | 61,234 | 0.3729 | 5 | yes |
| brotli | 5 | 4.317 | 57,931 | 0.3528 | 5 | yes |
| brotli | 6 | 4.728 | 57,572 | 0.3506 | 5 | yes |
| brotli | 7 | 5.729 | 57,281 | 0.3488 | 5 | yes |
| brotli | 8 | 5.994 | 57,200 | 0.3483 | 5 | yes |
| brotli | 9 | 11.374 | 57,125 | 0.3479 | 5 | yes |
| brotli | 10 | 93.962 | 54,364 | 0.3310 | 5 | yes |
| brotli | 11 | 243.226 | 53,487 | 0.3257 | 5 | yes |
| zstd | 1 | 0.593 | 66,282 | 0.4036 | 5 | yes |
| zstd | 2 | 0.761 | 63,237 | 0.3851 | 5 | yes |
| zstd | 3 | 0.948 | 62,745 | 0.3821 | 5 | yes |
| zstd | 4 | 1.653 | 60,886 | 0.3708 | 5 | yes |
| zstd | 5 | 1.897 | 60,366 | 0.3676 | 5 | yes |
| zstd | 6 | 2.277 | 59,468 | 0.3621 | 5 | yes |
| zstd | 7 | 2.786 | 58,678 | 0.3573 | 5 | yes |
| zstd | 8 | 3.464 | 58,201 | 0.3544 | 5 | yes |
| zstd | 9 | 3.960 | 57,953 | 0.3529 | 5 | yes |
| zstd | 10 | 4.745 | 57,830 | 0.3522 | 5 | yes |
| zstd | 11 | 8.751 | 57,527 | 0.3503 | 5 | yes |
| zstd | 12 | 8.812 | 57,514 | 0.3502 | 5 | yes |
| zstd | 13 | 14.930 | 56,499 | 0.3441 | 5 | yes |
| zstd | 14 | 16.518 | 56,072 | 0.3415 | 5 | yes |
| zstd | 15 | 16.826 | 56,052 | 0.3413 | 5 | yes |
| zstd | 16 | 21.899 | 55,868 | 0.3402 | 5 | yes |
| zstd | 17 | 22.043 | 55,868 | 0.3402 | 5 | yes |
| zstd | 18 | 40.122 | 55,790 | 0.3397 | 5 | yes |
| zstd | 19 | 38.925 | 55,790 | 0.3397 | 5 | yes |
| zstd | 20 | 37.553 | 55,790 | 0.3397 | 5 | yes |
| zstd | 21 | 39.260 | 55,790 | 0.3397 | 5 | yes |
| zstd | 22 | 38.810 | 55,790 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.778 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.841 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.965 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.082 | 26,950 | 0.3680 | 9 | yes |
| gzip | 5 | 1.362 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.720 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.001 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.572 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.566 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.253 | 30,978 | 0.4230 | 8 | yes |
| brotli | 1 | 0.318 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.653 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.771 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.239 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.851 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.019 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.400 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.543 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 7.466 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 39.119 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 97.730 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.223 | 28,919 | 0.3949 | 8 | yes |
| zstd | 2 | 0.261 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.315 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.383 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.735 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.001 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.216 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.351 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.540 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.797 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.243 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.417 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.120 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.086 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.179 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.532 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.542 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.621 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.152 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.140 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.140 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.094 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.587 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.670 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.781 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.868 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.218 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.818 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.478 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 10.806 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 10.926 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.230 | 25,901 | 0.3420 | 5 | yes |
| brotli | 1 | 0.319 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.612 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.718 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.073 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.660 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.850 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.215 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.568 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 7.073 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 29.279 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 89.967 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.239 | 22,639 | 0.2989 | 8 | yes |
| zstd | 2 | 0.263 | 22,433 | 0.2962 | 5 | yes |
| zstd | 3 | 0.315 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.348 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.648 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 0.928 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.146 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.339 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.670 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.187 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.268 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.394 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.717 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 6.596 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 7.779 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.542 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 13.801 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.056 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 19.885 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 23.784 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 36.744 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 43.911 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.117 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.135 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.311 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.603 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.013 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.678 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.264 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.321 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.379 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.418 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.570 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.147 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.366 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.951 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.916 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.215 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.574 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.087 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 9.343 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 97.002 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 301.872 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.450 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.511 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.516 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.291 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.579 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.792 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.074 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.551 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.036 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.682 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.428 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.519 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.123 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.708 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 27.546 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 47.450 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 52.565 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 71.682 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 79.603 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 82.333 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 82.247 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 82.369 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,946,804 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 96.824 | 3,754,873 | 0.2216 | 5 | yes |
| gzip | 2 | 105.005 | 3,606,731 | 0.2128 | 5 | yes |
| gzip | 3 | 124.381 | 3,488,191 | 0.2058 | 5 | yes |
| gzip | 4 | 140.956 | 3,361,083 | 0.1983 | 5 | yes |
| gzip | 5 | 183.551 | 3,140,651 | 0.1853 | 5 | yes |
| gzip | 6 | 263.155 | 3,073,208 | 0.1813 | 5 | yes |
| gzip | 7 | 356.969 | 3,007,264 | 0.1775 | 5 | yes |
| gzip | 8 | 1032.517 | 2,939,923 | 0.1735 | 5 | yes |
| gzip | 9 | 1079.729 | 2,939,101 | 0.1734 | 5 | yes |
| brotli | 0 | 46.722 | 4,158,391 | 0.2454 | 8 | yes |
| brotli | 1 | 55.922 | 3,696,388 | 0.2181 | 8 | yes |
| brotli | 2 | 105.547 | 3,404,652 | 0.2009 | 5 | yes |
| brotli | 3 | 123.725 | 3,347,644 | 0.1975 | 5 | yes |
| brotli | 4 | 190.000 | 3,276,816 | 0.1934 | 5 | yes |
| brotli | 5 | 303.966 | 2,921,643 | 0.1724 | 5 | yes |
| brotli | 6 | 357.572 | 2,890,343 | 0.1706 | 5 | yes |
| brotli | 7 | 536.221 | 2,863,078 | 0.1689 | 5 | yes |
| brotli | 8 | 688.516 | 2,844,800 | 0.1679 | 5 | yes |
| brotli | 9 | 955.372 | 2,834,664 | 0.1673 | 5 | yes |
| brotli | 10 | 10667.702 | 2,428,562 | 0.1433 | 5 | yes |
| brotli | 11 | 28036.798 | 2,309,167 | 0.1363 | 5 | yes |
| zstd | 1 | 42.542 | 3,504,403 | 0.2068 | 5 | yes |
| zstd | 2 | 54.258 | 3,581,907 | 0.2114 | 5 | yes |
| zstd | 3 | 69.650 | 3,507,920 | 0.2070 | 5 | yes |
| zstd | 4 | 76.253 | 3,502,711 | 0.2067 | 5 | yes |
| zstd | 5 | 130.679 | 3,287,468 | 0.1940 | 5 | yes |
| zstd | 6 | 184.631 | 3,067,272 | 0.1810 | 5 | yes |
| zstd | 7 | 218.254 | 3,028,718 | 0.1787 | 5 | yes |
| zstd | 8 | 289.694 | 2,926,446 | 0.1727 | 5 | yes |
| zstd | 9 | 316.473 | 2,936,848 | 0.1733 | 5 | yes |
| zstd | 10 | 412.839 | 2,900,202 | 0.1711 | 5 | yes |
| zstd | 11 | 593.716 | 2,873,028 | 0.1695 | 5 | yes |
| zstd | 12 | 659.123 | 2,872,898 | 0.1695 | 5 | yes |
| zstd | 13 | 1008.174 | 2,850,280 | 0.1682 | 5 | yes |
| zstd | 14 | 1099.990 | 2,835,958 | 0.1673 | 5 | yes |
| zstd | 15 | 1410.985 | 2,832,325 | 0.1671 | 5 | yes |
| zstd | 16 | 2929.084 | 2,645,548 | 0.1561 | 5 | yes |
| zstd | 17 | 3846.133 | 2,553,740 | 0.1507 | 5 | yes |
| zstd | 18 | 5879.467 | 2,535,042 | 0.1496 | 5 | yes |
| zstd | 19 | 6417.651 | 2,528,063 | 0.1492 | 5 | yes |
| zstd | 20 | 6578.260 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 21 | 6607.028 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 22 | 6890.240 | 2,521,575 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.469 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.439 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.387 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.144 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.578 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.412 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 28.897 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 31.498 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 31.698 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.685 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 4.598 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.540 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.447 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 16.538 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.653 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.957 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.097 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 50.816 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 66.430 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 910.542 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1905.864 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.017 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.671 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.080 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.375 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 9.670 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 12.926 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.261 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 17.791 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.301 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 20.927 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.228 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.609 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 59.194 | 383,952 | 0.4466 | 6 | yes |
| zstd | 14 | 60.449 | 383,886 | 0.4465 | 8 | yes |
| zstd | 15 | 62.445 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 104.353 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 125.650 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 161.269 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 178.088 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 174.089 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 180.103 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 181.371 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.123 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.136 | 5,424 | 0.2784 | 17 | yes |
| gzip | 3 | 0.165 | 5,356 | 0.2749 | 12 | yes |
| gzip | 4 | 0.197 | 5,145 | 0.2641 | 5 | yes |
| gzip | 5 | 0.280 | 4,896 | 0.2513 | 5 | yes |
| gzip | 6 | 0.355 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.481 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.635 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.645 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.056 | 6,028 | 0.3094 | 12 | yes |
| brotli | 1 | 0.082 | 5,737 | 0.2945 | 25 | no |
| brotli | 2 | 0.139 | 4,944 | 0.2538 | 5 | yes |
| brotli | 3 | 0.172 | 4,930 | 0.2531 | 9 | yes |
| brotli | 4 | 0.278 | 4,898 | 0.2514 | 9 | yes |
| brotli | 5 | 0.443 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.494 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.561 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.584 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.716 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.271 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.515 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.051 | 5,379 | 0.2761 | 15 | yes |
| zstd | 2 | 0.054 | 5,176 | 0.2657 | 7 | yes |
| zstd | 3 | 0.073 | 5,169 | 0.2653 | 7 | yes |
| zstd | 4 | 0.068 | 5,154 | 0.2646 | 12 | yes |
| zstd | 5 | 0.149 | 5,074 | 0.2605 | 6 | yes |
| zstd | 6 | 0.216 | 4,797 | 0.2463 | 5 | yes |
| zstd | 7 | 0.252 | 4,702 | 0.2414 | 7 | yes |
| zstd | 8 | 0.298 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.365 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.438 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.617 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.681 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.999 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.725 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.823 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.559 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.558 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.560 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.988 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.049 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.044 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.049 | 4,348 | 0.2232 | 5 | yes |
