# Node Compression Benchmark

Last updated: 2026-06-18T21:17:46.174Z

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
| gzip | 1 | 1.346 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.468 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.610 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.851 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 2.377 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.126 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.407 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.779 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.714 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.370 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.793 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.851 | 29,394 | 0.3733 | 10 | yes |
| brotli | 3 | 0.988 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.490 | 28,392 | 0.3605 | 6 | yes |
| brotli | 5 | 2.144 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.327 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 2.658 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.765 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.621 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 35.812 | 25,340 | 0.3218 | 11 | yes |
| brotli | 11 | 99.892 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.284 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.263 | 30,069 | 0.3818 | 25 | no |
| zstd | 3 | 0.337 | 29,214 | 0.3710 | 13 | yes |
| zstd | 4 | 0.474 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.920 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.246 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.508 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.641 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.776 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.069 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.380 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.518 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.455 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.644 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.616 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.149 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 9.940 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 9.924 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.536 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.782 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.785 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.454 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 95.544 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 99.639 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 102.788 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 117.872 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 135.364 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 152.963 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 163.357 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 184.426 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 198.102 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.361 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.805 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.810 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.797 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 90.746 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 126.586 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 147.528 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 418.889 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 535.916 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 701.737 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6477.600 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13728.361 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.748 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.716 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 37.873 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 45.595 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 68.373 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 81.023 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 88.155 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 102.453 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 102.033 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 123.031 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 158.995 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 184.049 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 359.454 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 459.899 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 537.920 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 669.560 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 828.994 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1131.708 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1222.052 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1246.927 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1269.655 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1267.155 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.498 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.478 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.445 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 14.345 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 14.359 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 14.355 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 14.371 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 14.418 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 14.354 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.254 | 613,595 | 0.9981 | 10 | yes |
| brotli | 1 | 0.235 | 614,785 | 1.0000 | 6 | yes |
| brotli | 2 | 0.558 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.776 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.000 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.489 | 614,785 | 1.0000 | 25 | no |
| brotli | 6 | 1.431 | 614,785 | 1.0000 | 19 | yes |
| brotli | 7 | 2.100 | 614,785 | 1.0000 | 9 | yes |
| brotli | 8 | 2.116 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 5.182 | 614,785 | 1.0000 | 9 | yes |
| brotli | 10 | 115.860 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 262.997 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.278 | 614,805 | 1.0000 | 9 | yes |
| zstd | 2 | 0.297 | 614,804 | 1.0000 | 8 | yes |
| zstd | 3 | 0.345 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.365 | 614,804 | 1.0000 | 20 | yes |
| zstd | 5 | 0.492 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.490 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.501 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.535 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.616 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.631 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.646 | 614,804 | 1.0000 | 8 | yes |
| zstd | 12 | 0.655 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 2.471 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 2.297 | 612,619 | 0.9965 | 7 | yes |
| zstd | 15 | 2.414 | 612,619 | 0.9965 | 8 | yes |
| zstd | 16 | 14.968 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 14.506 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 21.257 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 25.813 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 25.828 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 25.790 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 25.612 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,543 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.260 | 144,722 | 0.2962 | 5 | yes |
| gzip | 2 | 4.683 | 137,958 | 0.2824 | 5 | yes |
| gzip | 3 | 6.186 | 133,328 | 0.2729 | 5 | yes |
| gzip | 4 | 6.301 | 125,147 | 0.2562 | 5 | yes |
| gzip | 5 | 9.245 | 120,540 | 0.2467 | 5 | yes |
| gzip | 6 | 13.617 | 118,809 | 0.2432 | 5 | yes |
| gzip | 7 | 17.380 | 118,352 | 0.2423 | 5 | yes |
| gzip | 8 | 32.825 | 118,085 | 0.2417 | 5 | yes |
| gzip | 9 | 50.869 | 118,014 | 0.2416 | 5 | yes |
| brotli | 0 | 1.564 | 149,209 | 0.3054 | 5 | yes |
| brotli | 1 | 2.250 | 136,872 | 0.2802 | 5 | yes |
| brotli | 2 | 4.000 | 128,691 | 0.2634 | 5 | yes |
| brotli | 3 | 4.624 | 126,178 | 0.2583 | 5 | yes |
| brotli | 4 | 6.472 | 122,074 | 0.2499 | 5 | yes |
| brotli | 5 | 10.212 | 112,240 | 0.2297 | 5 | yes |
| brotli | 6 | 11.821 | 109,635 | 0.2244 | 5 | yes |
| brotli | 7 | 14.241 | 107,650 | 0.2203 | 5 | yes |
| brotli | 8 | 17.126 | 106,631 | 0.2183 | 5 | yes |
| brotli | 9 | 23.778 | 105,723 | 0.2164 | 5 | yes |
| brotli | 10 | 291.681 | 98,258 | 0.2011 | 5 | yes |
| brotli | 11 | 729.632 | 96,108 | 0.1967 | 5 | yes |
| zstd | 1 | 1.769 | 137,573 | 0.2816 | 5 | yes |
| zstd | 2 | 1.848 | 133,375 | 0.2730 | 5 | yes |
| zstd | 3 | 2.253 | 125,750 | 0.2574 | 5 | yes |
| zstd | 4 | 2.265 | 125,549 | 0.2570 | 5 | yes |
| zstd | 5 | 4.662 | 116,894 | 0.2393 | 5 | yes |
| zstd | 6 | 6.206 | 113,004 | 0.2313 | 5 | yes |
| zstd | 7 | 6.976 | 111,439 | 0.2281 | 5 | yes |
| zstd | 8 | 8.846 | 110,653 | 0.2265 | 5 | yes |
| zstd | 9 | 8.821 | 110,653 | 0.2265 | 5 | yes |
| zstd | 10 | 10.591 | 109,644 | 0.2244 | 5 | yes |
| zstd | 11 | 13.023 | 109,043 | 0.2232 | 5 | yes |
| zstd | 12 | 13.072 | 109,043 | 0.2232 | 5 | yes |
| zstd | 13 | 27.154 | 107,872 | 0.2208 | 5 | yes |
| zstd | 14 | 32.335 | 107,279 | 0.2196 | 5 | yes |
| zstd | 15 | 36.263 | 107,109 | 0.2192 | 5 | yes |
| zstd | 16 | 64.399 | 101,632 | 0.2080 | 5 | yes |
| zstd | 17 | 72.586 | 100,728 | 0.2062 | 5 | yes |
| zstd | 18 | 103.006 | 99,953 | 0.2046 | 5 | yes |
| zstd | 19 | 132.707 | 99,848 | 0.2044 | 5 | yes |
| zstd | 20 | 132.652 | 99,848 | 0.2044 | 5 | yes |
| zstd | 21 | 132.783 | 99,841 | 0.2044 | 5 | yes |
| zstd | 22 | 132.876 | 99,841 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.072 | 4,987 | 0.2897 | 21 | yes |
| gzip | 2 | 0.073 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.086 | 4,806 | 0.2791 | 13 | yes |
| gzip | 4 | 0.109 | 4,530 | 0.2631 | 16 | yes |
| gzip | 5 | 0.141 | 4,441 | 0.2579 | 25 | no |
| gzip | 6 | 0.176 | 4,425 | 0.2570 | 14 | yes |
| gzip | 7 | 0.235 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.426 | 4,419 | 0.2567 | 9 | yes |
| gzip | 9 | 0.426 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.053 | 5,235 | 0.3041 | 10 | yes |
| brotli | 1 | 0.069 | 5,134 | 0.2982 | 11 | yes |
| brotli | 2 | 0.095 | 4,741 | 0.2754 | 16 | yes |
| brotli | 3 | 0.115 | 4,650 | 0.2701 | 19 | yes |
| brotli | 4 | 0.187 | 4,555 | 0.2646 | 24 | yes |
| brotli | 5 | 0.304 | 4,276 | 0.2484 | 25 | no |
| brotli | 6 | 0.364 | 4,275 | 0.2483 | 8 | yes |
| brotli | 7 | 0.438 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.447 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 2.256 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.104 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.081 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.054 | 4,923 | 0.2859 | 14 | yes |
| zstd | 2 | 0.059 | 4,868 | 0.2827 | 9 | yes |
| zstd | 3 | 0.067 | 4,717 | 0.2740 | 10 | yes |
| zstd | 4 | 0.069 | 4,679 | 0.2718 | 8 | yes |
| zstd | 5 | 0.135 | 4,519 | 0.2625 | 10 | yes |
| zstd | 6 | 0.167 | 4,437 | 0.2577 | 9 | yes |
| zstd | 7 | 0.193 | 4,437 | 0.2577 | 21 | yes |
| zstd | 8 | 0.208 | 4,426 | 0.2571 | 9 | yes |
| zstd | 9 | 0.232 | 4,420 | 0.2567 | 22 | yes |
| zstd | 10 | 0.294 | 4,410 | 0.2561 | 15 | yes |
| zstd | 11 | 0.608 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.633 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.920 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.417 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.487 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.196 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.302 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.295 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.500 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.525 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.536 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.541 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.048 | 3,220 | 0.4497 | 15 | yes |
| gzip | 2 | 0.049 | 3,182 | 0.4444 | 17 | yes |
| gzip | 3 | 0.052 | 3,153 | 0.4403 | 10 | yes |
| gzip | 4 | 0.060 | 3,095 | 0.4322 | 13 | yes |
| gzip | 5 | 0.066 | 3,051 | 0.4261 | 16 | yes |
| gzip | 6 | 0.071 | 3,044 | 0.4251 | 11 | yes |
| gzip | 7 | 0.074 | 3,042 | 0.4248 | 15 | yes |
| gzip | 8 | 0.074 | 3,042 | 0.4248 | 5 | yes |
| gzip | 9 | 0.074 | 3,042 | 0.4248 | 5 | yes |
| brotli | 0 | 0.031 | 3,549 | 0.4956 | 9 | yes |
| brotli | 1 | 0.042 | 3,381 | 0.4721 | 8 | yes |
| brotli | 2 | 0.058 | 3,263 | 0.4557 | 9 | yes |
| brotli | 3 | 0.075 | 3,216 | 0.4491 | 13 | yes |
| brotli | 4 | 0.122 | 3,147 | 0.4395 | 16 | yes |
| brotli | 5 | 0.162 | 2,963 | 0.4138 | 13 | yes |
| brotli | 6 | 0.171 | 2,952 | 0.4122 | 14 | yes |
| brotli | 7 | 0.175 | 2,944 | 0.4111 | 16 | yes |
| brotli | 8 | 0.169 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 1.783 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.267 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.043 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.031 | 3,254 | 0.4544 | 24 | yes |
| zstd | 2 | 0.052 | 3,200 | 0.4469 | 5 | yes |
| zstd | 3 | 0.041 | 3,176 | 0.4435 | 25 | no |
| zstd | 4 | 0.060 | 3,102 | 0.4332 | 9 | yes |
| zstd | 5 | 0.069 | 3,079 | 0.4300 | 8 | yes |
| zstd | 6 | 0.081 | 3,060 | 0.4273 | 17 | yes |
| zstd | 7 | 0.095 | 3,053 | 0.4263 | 7 | yes |
| zstd | 8 | 0.096 | 3,053 | 0.4263 | 5 | yes |
| zstd | 9 | 0.116 | 3,055 | 0.4266 | 25 | no |
| zstd | 10 | 0.116 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.226 | 3,044 | 0.4251 | 25 | no |
| zstd | 12 | 0.322 | 3,011 | 0.4205 | 25 | no |
| zstd | 13 | 0.561 | 2,998 | 0.4187 | 11 | yes |
| zstd | 14 | 0.552 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.533 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.064 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.034 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.029 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.075 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.048 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.077 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.041 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,475 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.086 | 67,036 | 0.4076 | 5 | yes |
| gzip | 2 | 2.276 | 65,451 | 0.3979 | 5 | yes |
| gzip | 3 | 2.597 | 64,421 | 0.3917 | 5 | yes |
| gzip | 4 | 2.857 | 62,075 | 0.3774 | 5 | yes |
| gzip | 5 | 3.930 | 60,450 | 0.3675 | 5 | yes |
| gzip | 6 | 4.937 | 60,174 | 0.3659 | 5 | yes |
| gzip | 7 | 5.383 | 60,131 | 0.3656 | 5 | yes |
| gzip | 8 | 5.851 | 60,115 | 0.3655 | 5 | yes |
| gzip | 9 | 5.890 | 60,115 | 0.3655 | 5 | yes |
| brotli | 0 | 0.685 | 71,306 | 0.4335 | 22 | yes |
| brotli | 1 | 0.914 | 68,383 | 0.4158 | 5 | yes |
| brotli | 2 | 1.735 | 63,134 | 0.3839 | 5 | yes |
| brotli | 3 | 2.047 | 62,525 | 0.3801 | 5 | yes |
| brotli | 4 | 2.950 | 61,271 | 0.3725 | 5 | yes |
| brotli | 5 | 4.475 | 58,043 | 0.3529 | 5 | yes |
| brotli | 6 | 5.021 | 57,682 | 0.3507 | 5 | yes |
| brotli | 7 | 6.052 | 57,387 | 0.3489 | 5 | yes |
| brotli | 8 | 6.466 | 57,305 | 0.3484 | 5 | yes |
| brotli | 9 | 9.890 | 57,230 | 0.3480 | 5 | yes |
| brotli | 10 | 103.349 | 54,405 | 0.3308 | 5 | yes |
| brotli | 11 | 255.143 | 53,493 | 0.3252 | 5 | yes |
| zstd | 1 | 0.637 | 66,378 | 0.4036 | 5 | yes |
| zstd | 2 | 0.794 | 63,336 | 0.3851 | 5 | yes |
| zstd | 3 | 1.043 | 62,859 | 0.3822 | 5 | yes |
| zstd | 4 | 1.830 | 60,996 | 0.3709 | 5 | yes |
| zstd | 5 | 2.059 | 60,478 | 0.3677 | 5 | yes |
| zstd | 6 | 2.763 | 59,586 | 0.3623 | 5 | yes |
| zstd | 7 | 3.282 | 58,792 | 0.3575 | 5 | yes |
| zstd | 8 | 3.951 | 58,314 | 0.3545 | 5 | yes |
| zstd | 9 | 4.611 | 58,070 | 0.3531 | 5 | yes |
| zstd | 10 | 5.308 | 57,939 | 0.3523 | 5 | yes |
| zstd | 11 | 8.567 | 57,635 | 0.3504 | 5 | yes |
| zstd | 12 | 8.806 | 57,621 | 0.3503 | 5 | yes |
| zstd | 13 | 15.353 | 56,599 | 0.3441 | 5 | yes |
| zstd | 14 | 17.451 | 56,168 | 0.3415 | 5 | yes |
| zstd | 15 | 17.857 | 56,140 | 0.3413 | 5 | yes |
| zstd | 16 | 22.895 | 55,973 | 0.3403 | 5 | yes |
| zstd | 17 | 22.727 | 55,973 | 0.3403 | 5 | yes |
| zstd | 18 | 39.410 | 55,896 | 0.3398 | 5 | yes |
| zstd | 19 | 40.205 | 55,896 | 0.3398 | 5 | yes |
| zstd | 20 | 39.367 | 55,896 | 0.3398 | 5 | yes |
| zstd | 21 | 39.059 | 55,896 | 0.3398 | 5 | yes |
| zstd | 22 | 39.963 | 55,896 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.871 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.934 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.087 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.183 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.571 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.054 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.467 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.373 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.324 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.203 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.336 | 29,754 | 0.4063 | 19 | yes |
| brotli | 2 | 0.731 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.864 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.354 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.922 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.138 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.556 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.721 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.451 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 41.465 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 99.874 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.198 | 28,919 | 0.3949 | 14 | yes |
| zstd | 2 | 0.233 | 28,008 | 0.3824 | 9 | yes |
| zstd | 3 | 0.264 | 27,463 | 0.3750 | 11 | yes |
| zstd | 4 | 0.339 | 27,100 | 0.3700 | 18 | yes |
| zstd | 5 | 0.806 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.093 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.315 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.461 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.664 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.925 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.237 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.295 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.376 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.498 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.432 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.893 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.780 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.684 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.794 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.484 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.768 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.828 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.658 | 23,605 | 0.3117 | 6 | yes |
| gzip | 2 | 0.767 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.906 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 1.017 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.429 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 2.215 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 3.015 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 9.270 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 9.083 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.190 | 25,901 | 0.3420 | 20 | yes |
| brotli | 1 | 0.403 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.666 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.811 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.215 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.757 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.969 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.365 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.718 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 5.604 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 30.789 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 88.756 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.210 | 22,639 | 0.2989 | 20 | yes |
| zstd | 2 | 0.219 | 22,433 | 0.2962 | 12 | yes |
| zstd | 3 | 0.252 | 22,208 | 0.2932 | 11 | yes |
| zstd | 4 | 0.308 | 22,181 | 0.2929 | 13 | yes |
| zstd | 5 | 0.708 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.006 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.240 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.426 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.809 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.287 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.283 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.340 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.871 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 6.767 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.020 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.548 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 13.977 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.553 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 19.954 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 23.846 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.028 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 44.758 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.187 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.266 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.497 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.787 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.327 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.248 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 4.030 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.464 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.480 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.332 | 43,268 | 0.1864 | 25 | no |
| brotli | 1 | 0.646 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.224 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.460 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.104 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.086 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.399 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.816 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.285 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 7.256 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 100.458 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 302.279 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.459 | 35,549 | 0.1532 | 8 | yes |
| zstd | 2 | 0.537 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.589 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.478 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.709 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.168 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.375 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.870 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.478 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.168 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.187 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.987 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.691 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.423 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.218 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.196 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.281 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 72.562 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.885 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 84.272 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.979 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 83.924 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,946,804 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 104.088 | 3,754,873 | 0.2216 | 5 | yes |
| gzip | 2 | 113.902 | 3,606,731 | 0.2128 | 5 | yes |
| gzip | 3 | 140.612 | 3,488,191 | 0.2058 | 5 | yes |
| gzip | 4 | 155.999 | 3,361,083 | 0.1983 | 5 | yes |
| gzip | 5 | 208.059 | 3,140,651 | 0.1853 | 5 | yes |
| gzip | 6 | 321.174 | 3,073,208 | 0.1813 | 5 | yes |
| gzip | 7 | 444.701 | 3,007,264 | 0.1775 | 5 | yes |
| gzip | 8 | 1283.094 | 2,939,923 | 0.1735 | 5 | yes |
| gzip | 9 | 1323.959 | 2,939,101 | 0.1734 | 5 | yes |
| brotli | 0 | 44.879 | 4,158,391 | 0.2454 | 5 | yes |
| brotli | 1 | 65.919 | 3,696,388 | 0.2181 | 5 | yes |
| brotli | 2 | 113.773 | 3,404,652 | 0.2009 | 5 | yes |
| brotli | 3 | 135.000 | 3,347,644 | 0.1975 | 5 | yes |
| brotli | 4 | 188.597 | 3,276,816 | 0.1934 | 5 | yes |
| brotli | 5 | 314.167 | 2,921,643 | 0.1724 | 5 | yes |
| brotli | 6 | 366.508 | 2,890,343 | 0.1706 | 5 | yes |
| brotli | 7 | 554.457 | 2,863,078 | 0.1689 | 5 | yes |
| brotli | 8 | 706.537 | 2,844,800 | 0.1679 | 5 | yes |
| brotli | 9 | 963.322 | 2,834,664 | 0.1673 | 5 | yes |
| brotli | 10 | 11076.392 | 2,428,562 | 0.1433 | 5 | yes |
| brotli | 11 | 28499.038 | 2,309,167 | 0.1363 | 5 | yes |
| zstd | 1 | 44.540 | 3,504,403 | 0.2068 | 5 | yes |
| zstd | 2 | 54.840 | 3,581,907 | 0.2114 | 5 | yes |
| zstd | 3 | 66.995 | 3,507,920 | 0.2070 | 5 | yes |
| zstd | 4 | 72.165 | 3,502,711 | 0.2067 | 5 | yes |
| zstd | 5 | 141.750 | 3,287,468 | 0.1940 | 5 | yes |
| zstd | 6 | 201.996 | 3,067,272 | 0.1810 | 5 | yes |
| zstd | 7 | 235.228 | 3,028,718 | 0.1787 | 5 | yes |
| zstd | 8 | 305.832 | 2,926,446 | 0.1727 | 5 | yes |
| zstd | 9 | 322.008 | 2,936,848 | 0.1733 | 5 | yes |
| zstd | 10 | 408.122 | 2,900,202 | 0.1711 | 5 | yes |
| zstd | 11 | 570.262 | 2,873,028 | 0.1695 | 5 | yes |
| zstd | 12 | 618.642 | 2,872,898 | 0.1695 | 5 | yes |
| zstd | 13 | 830.796 | 2,850,280 | 0.1682 | 5 | yes |
| zstd | 14 | 1009.662 | 2,835,958 | 0.1673 | 5 | yes |
| zstd | 15 | 1326.158 | 2,832,325 | 0.1671 | 5 | yes |
| zstd | 16 | 2801.361 | 2,645,548 | 0.1561 | 5 | yes |
| zstd | 17 | 3585.402 | 2,553,740 | 0.1507 | 5 | yes |
| zstd | 18 | 5571.774 | 2,535,042 | 0.1496 | 5 | yes |
| zstd | 19 | 6152.217 | 2,528,063 | 0.1492 | 5 | yes |
| zstd | 20 | 6361.301 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 21 | 6385.755 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 22 | 6626.002 | 2,521,575 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.712 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.884 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.586 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.372 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 27.131 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 32.356 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 34.413 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.923 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.452 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.095 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.544 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.572 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.796 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.830 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.681 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.699 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 46.865 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 53.930 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 68.059 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 973.502 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2076.265 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.241 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.077 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.585 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.346 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.916 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.664 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.848 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.521 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.669 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.532 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.858 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.813 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 54.222 | 383,952 | 0.4466 | 6 | yes |
| zstd | 14 | 52.399 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 53.416 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 93.607 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 119.274 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 155.275 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 170.469 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 171.445 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 172.257 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 171.620 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.075 | 5,506 | 0.2826 | 17 | yes |
| gzip | 2 | 0.082 | 5,424 | 0.2784 | 16 | yes |
| gzip | 3 | 0.096 | 5,356 | 0.2749 | 25 | no |
| gzip | 4 | 0.130 | 5,145 | 0.2641 | 25 | no |
| gzip | 5 | 0.173 | 4,896 | 0.2513 | 25 | no |
| gzip | 6 | 0.227 | 4,884 | 0.2507 | 25 | no |
| gzip | 7 | 0.477 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.702 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.680 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.057 | 6,028 | 0.3094 | 19 | yes |
| brotli | 1 | 0.078 | 5,737 | 0.2945 | 10 | yes |
| brotli | 2 | 0.105 | 4,944 | 0.2538 | 21 | yes |
| brotli | 3 | 0.138 | 4,930 | 0.2531 | 16 | yes |
| brotli | 4 | 0.211 | 4,898 | 0.2514 | 24 | yes |
| brotli | 5 | 0.442 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.454 | 4,570 | 0.2346 | 7 | yes |
| brotli | 7 | 0.566 | 4,564 | 0.2343 | 6 | yes |
| brotli | 8 | 0.605 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 2.393 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.511 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.143 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.055 | 5,379 | 0.2761 | 13 | yes |
| zstd | 2 | 0.059 | 5,176 | 0.2657 | 13 | yes |
| zstd | 3 | 0.086 | 5,169 | 0.2653 | 25 | no |
| zstd | 4 | 0.115 | 5,154 | 0.2646 | 25 | no |
| zstd | 5 | 0.158 | 5,074 | 0.2605 | 9 | yes |
| zstd | 6 | 0.208 | 4,797 | 0.2463 | 14 | yes |
| zstd | 7 | 0.249 | 4,702 | 0.2414 | 11 | yes |
| zstd | 8 | 0.281 | 4,696 | 0.2411 | 10 | yes |
| zstd | 9 | 0.376 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.462 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.596 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.615 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.993 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.730 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.829 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.548 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.555 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.557 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.970 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.014 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.091 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.006 | 4,348 | 0.2232 | 5 | yes |
