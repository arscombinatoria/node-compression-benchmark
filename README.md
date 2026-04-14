# Node Compression Benchmark

Last updated: 2026-04-14T14:43:36.836Z

This benchmark measures compression time, output size, and compression ratios for several popular npm packages across all gzip, Brotli, and Zstandard compression levels.

## Table of Contents

- [jquery/dist/jquery.min.js](#jquery-dist-jquery-min-js)
- [@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](#expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf)
- [@codemirror/view/dist/index.js](#codemirror-view-dist-index-js)
- [react/cjs/react.production.js](#react-cjs-react-production-js)
- [moment/min/moment.min.js](#moment-min-moment-min-js)
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
| gzip | 1 | 1.041 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.107 | 30,134 | 0.3827 | 6 | yes |
| gzip | 3 | 1.202 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.368 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.769 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.134 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.410 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 3.306 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 3.313 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.350 | 33,111 | 0.4205 | 23 | yes |
| brotli | 1 | 0.790 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.904 | 29,394 | 0.3733 | 8 | yes |
| brotli | 3 | 1.009 | 29,072 | 0.3692 | 10 | yes |
| brotli | 4 | 1.557 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.286 | 27,013 | 0.3430 | 12 | yes |
| brotli | 6 | 2.570 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 4.268 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.906 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.178 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 37.993 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 106.975 | 24,992 | 0.3174 | 8 | yes |
| zstd | 1 | 0.264 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.263 | 30,069 | 0.3818 | 25 | no |
| zstd | 3 | 0.606 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 1.163 | 29,108 | 0.3696 | 7 | yes |
| zstd | 5 | 1.423 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.729 | 27,592 | 0.3504 | 8 | yes |
| zstd | 7 | 1.957 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 2.110 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.337 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.512 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.283 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.832 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.719 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.964 | 26,432 | 0.3357 | 17 | yes |
| zstd | 15 | 9.228 | 26,420 | 0.3355 | 25 | no |
| zstd | 16 | 11.676 | 26,336 | 0.3344 | 12 | yes |
| zstd | 17 | 11.414 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.592 | 26,336 | 0.3344 | 7 | yes |
| zstd | 19 | 20.307 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 20.396 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 20.690 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 20.141 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.364 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 97.120 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 103.038 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 116.042 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 135.465 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 152.096 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 163.216 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 182.822 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 196.932 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.717 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 30.044 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.878 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.329 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 100.962 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 133.233 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 177.779 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 569.632 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 816.208 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 923.594 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 7658.878 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 14428.326 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.940 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.135 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 37.839 | 3,139,155 | 0.5736 | 6 | yes |
| zstd | 4 | 46.405 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 69.425 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 84.486 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 93.259 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 106.914 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 124.224 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 157.941 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 223.267 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 240.903 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 587.722 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 618.333 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 729.491 | 2,844,247 | 0.5197 | 6 | yes |
| zstd | 16 | 931.719 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 1199.756 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1464.194 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1571.181 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1489.491 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1443.079 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1377.392 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 485,932 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.250 | 143,926 | 0.2962 | 5 | yes |
| gzip | 2 | 4.651 | 137,191 | 0.2823 | 5 | yes |
| gzip | 3 | 6.096 | 132,653 | 0.2730 | 5 | yes |
| gzip | 4 | 6.257 | 124,449 | 0.2561 | 5 | yes |
| gzip | 5 | 9.039 | 119,890 | 0.2467 | 5 | yes |
| gzip | 6 | 13.418 | 118,178 | 0.2432 | 5 | yes |
| gzip | 7 | 17.176 | 117,703 | 0.2422 | 5 | yes |
| gzip | 8 | 32.450 | 117,442 | 0.2417 | 5 | yes |
| gzip | 9 | 49.920 | 117,362 | 0.2415 | 5 | yes |
| brotli | 0 | 1.537 | 148,131 | 0.3048 | 5 | yes |
| brotli | 1 | 2.227 | 136,118 | 0.2801 | 5 | yes |
| brotli | 2 | 4.007 | 127,982 | 0.2634 | 5 | yes |
| brotli | 3 | 4.584 | 125,362 | 0.2580 | 5 | yes |
| brotli | 4 | 6.564 | 121,305 | 0.2496 | 5 | yes |
| brotli | 5 | 10.191 | 111,621 | 0.2297 | 5 | yes |
| brotli | 6 | 11.857 | 108,983 | 0.2243 | 5 | yes |
| brotli | 7 | 14.520 | 107,042 | 0.2203 | 5 | yes |
| brotli | 8 | 17.321 | 106,024 | 0.2182 | 5 | yes |
| brotli | 9 | 22.086 | 105,126 | 0.2163 | 5 | yes |
| brotli | 10 | 293.160 | 97,714 | 0.2011 | 5 | yes |
| brotli | 11 | 751.041 | 95,541 | 0.1966 | 5 | yes |
| zstd | 1 | 1.793 | 136,834 | 0.2816 | 5 | yes |
| zstd | 2 | 1.961 | 132,597 | 0.2729 | 14 | yes |
| zstd | 3 | 2.385 | 125,085 | 0.2574 | 5 | yes |
| zstd | 4 | 2.436 | 124,856 | 0.2569 | 5 | yes |
| zstd | 5 | 4.581 | 116,229 | 0.2392 | 5 | yes |
| zstd | 6 | 6.334 | 112,386 | 0.2313 | 5 | yes |
| zstd | 7 | 7.227 | 110,843 | 0.2281 | 5 | yes |
| zstd | 8 | 8.900 | 110,044 | 0.2265 | 5 | yes |
| zstd | 9 | 8.952 | 110,044 | 0.2265 | 5 | yes |
| zstd | 10 | 10.767 | 109,065 | 0.2244 | 5 | yes |
| zstd | 11 | 13.819 | 108,472 | 0.2232 | 5 | yes |
| zstd | 12 | 14.784 | 108,472 | 0.2232 | 5 | yes |
| zstd | 13 | 30.722 | 107,308 | 0.2208 | 5 | yes |
| zstd | 14 | 35.036 | 106,712 | 0.2196 | 7 | yes |
| zstd | 15 | 37.907 | 106,627 | 0.2194 | 5 | yes |
| zstd | 16 | 69.902 | 101,091 | 0.2080 | 5 | yes |
| zstd | 17 | 75.239 | 100,209 | 0.2062 | 5 | yes |
| zstd | 18 | 108.702 | 99,415 | 0.2046 | 5 | yes |
| zstd | 19 | 137.991 | 99,306 | 0.2044 | 5 | yes |
| zstd | 20 | 136.969 | 99,306 | 0.2044 | 5 | yes |
| zstd | 21 | 138.183 | 99,313 | 0.2044 | 5 | yes |
| zstd | 22 | 134.204 | 99,313 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.076 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.079 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.086 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.111 | 4,530 | 0.2631 | 25 | no |
| gzip | 5 | 0.158 | 4,441 | 0.2579 | 13 | yes |
| gzip | 6 | 0.182 | 4,425 | 0.2570 | 20 | yes |
| gzip | 7 | 0.219 | 4,418 | 0.2566 | 14 | yes |
| gzip | 8 | 0.484 | 4,419 | 0.2567 | 7 | yes |
| gzip | 9 | 0.478 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.053 | 5,235 | 0.3041 | 25 | no |
| brotli | 1 | 0.067 | 5,134 | 0.2982 | 12 | yes |
| brotli | 2 | 0.093 | 4,741 | 0.2754 | 25 | yes |
| brotli | 3 | 0.114 | 4,650 | 0.2701 | 24 | yes |
| brotli | 4 | 0.189 | 4,555 | 0.2646 | 20 | yes |
| brotli | 5 | 0.339 | 4,276 | 0.2484 | 14 | yes |
| brotli | 6 | 0.398 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.393 | 4,264 | 0.2477 | 10 | yes |
| brotli | 8 | 0.417 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.540 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.310 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.474 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.053 | 4,923 | 0.2859 | 10 | yes |
| zstd | 2 | 0.079 | 4,868 | 0.2827 | 25 | no |
| zstd | 3 | 0.078 | 4,717 | 0.2740 | 5 | yes |
| zstd | 4 | 0.078 | 4,679 | 0.2718 | 11 | yes |
| zstd | 5 | 0.148 | 4,519 | 0.2625 | 12 | yes |
| zstd | 6 | 0.174 | 4,437 | 0.2577 | 14 | yes |
| zstd | 7 | 0.199 | 4,437 | 0.2577 | 13 | yes |
| zstd | 8 | 0.215 | 4,426 | 0.2571 | 9 | yes |
| zstd | 9 | 0.246 | 4,420 | 0.2567 | 17 | yes |
| zstd | 10 | 0.327 | 4,410 | 0.2561 | 13 | yes |
| zstd | 11 | 0.630 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.654 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.934 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.425 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.506 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.201 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.353 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.315 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.561 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.531 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.577 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.531 | 4,264 | 0.2477 | 5 | yes |

<h2 id="moment-min-moment-min-js">moment/min/moment.min.js</h2>

- Original size: 58,890 bytes
- Chart: ![Compression ratio chart for moment/min/moment.min.js](charts/moment-min-moment-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.606 | 21,216 | 0.3603 | 5 | yes |
| gzip | 2 | 0.673 | 20,666 | 0.3509 | 5 | yes |
| gzip | 3 | 0.747 | 20,354 | 0.3456 | 5 | yes |
| gzip | 4 | 0.860 | 19,475 | 0.3307 | 5 | yes |
| gzip | 5 | 1.119 | 18,991 | 0.3225 | 5 | yes |
| gzip | 6 | 1.366 | 18,892 | 0.3208 | 5 | yes |
| gzip | 7 | 1.549 | 18,860 | 0.3203 | 5 | yes |
| gzip | 8 | 1.833 | 18,845 | 0.3200 | 5 | yes |
| gzip | 9 | 1.840 | 18,845 | 0.3200 | 5 | yes |
| brotli | 0 | 0.158 | 22,733 | 0.3860 | 9 | yes |
| brotli | 1 | 0.240 | 22,170 | 0.3765 | 9 | yes |
| brotli | 2 | 0.561 | 20,291 | 0.3446 | 5 | yes |
| brotli | 3 | 0.661 | 20,119 | 0.3416 | 5 | yes |
| brotli | 4 | 1.022 | 19,713 | 0.3347 | 5 | yes |
| brotli | 5 | 1.518 | 18,447 | 0.3132 | 5 | yes |
| brotli | 6 | 1.587 | 18,343 | 0.3115 | 5 | yes |
| brotli | 7 | 1.851 | 18,239 | 0.3097 | 5 | yes |
| brotli | 8 | 1.972 | 18,216 | 0.3093 | 5 | yes |
| brotli | 9 | 2.283 | 18,172 | 0.3086 | 5 | yes |
| brotli | 10 | 27.212 | 17,405 | 0.2956 | 5 | yes |
| brotli | 11 | 71.289 | 17,004 | 0.2887 | 6 | yes |
| zstd | 1 | 0.160 | 21,483 | 0.3648 | 10 | yes |
| zstd | 2 | 0.181 | 20,806 | 0.3533 | 18 | yes |
| zstd | 3 | 0.268 | 20,298 | 0.3447 | 5 | yes |
| zstd | 4 | 0.272 | 19,924 | 0.3383 | 15 | yes |
| zstd | 5 | 0.664 | 19,309 | 0.3279 | 5 | yes |
| zstd | 6 | 0.856 | 18,919 | 0.3213 | 5 | yes |
| zstd | 7 | 1.027 | 18,815 | 0.3195 | 5 | yes |
| zstd | 8 | 1.116 | 18,708 | 0.3177 | 5 | yes |
| zstd | 9 | 1.235 | 18,638 | 0.3165 | 5 | yes |
| zstd | 10 | 1.425 | 18,583 | 0.3156 | 5 | yes |
| zstd | 11 | 2.421 | 18,520 | 0.3145 | 5 | yes |
| zstd | 12 | 2.455 | 18,517 | 0.3144 | 5 | yes |
| zstd | 13 | 3.678 | 18,417 | 0.3127 | 5 | yes |
| zstd | 14 | 5.200 | 17,955 | 0.3049 | 5 | yes |
| zstd | 15 | 5.323 | 17,942 | 0.3047 | 5 | yes |
| zstd | 16 | 7.459 | 17,892 | 0.3038 | 5 | yes |
| zstd | 17 | 7.755 | 17,892 | 0.3038 | 5 | yes |
| zstd | 18 | 7.724 | 17,892 | 0.3038 | 5 | yes |
| zstd | 19 | 15.274 | 17,845 | 0.3030 | 5 | yes |
| zstd | 20 | 15.309 | 17,845 | 0.3030 | 5 | yes |
| zstd | 21 | 15.259 | 17,845 | 0.3030 | 5 | yes |
| zstd | 22 | 15.205 | 17,845 | 0.3030 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.052 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 3.386 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.883 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.826 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.876 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.887 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 5.330 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 5.762 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 5.765 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.599 | 70,918 | 0.4333 | 14 | yes |
| brotli | 1 | 0.921 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.739 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 2.037 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 3.043 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.470 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 5.165 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 6.097 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 7.039 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 7.563 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 103.443 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 263.240 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.649 | 65,987 | 0.4032 | 5 | yes |
| zstd | 2 | 0.815 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 1.028 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.840 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.097 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.541 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 3.000 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 3.730 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.219 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 5.178 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 9.098 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 8.914 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 14.903 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 17.450 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 19.230 | 55,859 | 0.3413 | 7 | yes |
| zstd | 16 | 24.565 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 23.985 | 55,686 | 0.3402 | 6 | yes |
| zstd | 18 | 40.032 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 40.802 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 40.040 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 40.325 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 40.276 | 55,612 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.847 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.926 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.084 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.177 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.566 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.042 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.439 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.333 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.344 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.210 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.321 | 29,754 | 0.4063 | 14 | yes |
| brotli | 2 | 0.724 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.865 | 27,227 | 0.3718 | 9 | yes |
| brotli | 4 | 1.339 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.927 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.154 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.640 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.897 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.338 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 42.499 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 101.483 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.205 | 28,919 | 0.3949 | 16 | yes |
| zstd | 2 | 0.232 | 28,008 | 0.3824 | 9 | yes |
| zstd | 3 | 0.283 | 27,463 | 0.3750 | 10 | yes |
| zstd | 4 | 0.450 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.809 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.117 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.335 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.469 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.656 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.969 | 25,397 | 0.3468 | 9 | yes |
| zstd | 11 | 3.345 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.534 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.383 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.659 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.720 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.081 | 24,499 | 0.3345 | 7 | yes |
| zstd | 17 | 9.862 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.143 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 19.244 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 19.091 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 19.064 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 19.001 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.637 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.745 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.899 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.995 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.424 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 2.184 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.935 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 8.747 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 8.818 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.177 | 25,901 | 0.3420 | 20 | yes |
| brotli | 1 | 0.308 | 23,906 | 0.3156 | 18 | yes |
| brotli | 2 | 0.669 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.778 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.175 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.688 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.921 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.371 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.743 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.653 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 32.480 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 91.441 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.213 | 22,639 | 0.2989 | 10 | yes |
| zstd | 2 | 0.223 | 22,433 | 0.2962 | 13 | yes |
| zstd | 3 | 0.262 | 22,208 | 0.2932 | 9 | yes |
| zstd | 4 | 0.389 | 22,181 | 0.2929 | 9 | yes |
| zstd | 5 | 0.729 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.042 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.270 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.454 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.800 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.430 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.289 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.341 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.007 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.013 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.391 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.836 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.443 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 23.354 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 20.355 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 24.153 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.809 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 45.994 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.184 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.255 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.477 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.765 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.289 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.230 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.956 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.435 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.457 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.327 | 43,268 | 0.1864 | 25 | no |
| brotli | 1 | 0.657 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.215 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.454 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.142 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.108 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.463 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.806 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.421 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.354 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 105.724 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 306.062 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.392 | 35,549 | 0.1532 | 20 | yes |
| zstd | 2 | 0.521 | 34,301 | 0.1478 | 6 | yes |
| zstd | 3 | 0.564 | 34,393 | 0.1482 | 6 | yes |
| zstd | 4 | 1.483 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.772 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.011 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.242 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.785 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.282 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.066 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.227 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.140 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.908 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 23.401 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.882 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 49.211 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 54.041 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 73.333 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 81.426 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 84.959 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 85.311 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 84.961 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 99.505 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 99.977 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 121.714 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 142.127 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 173.765 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 230.717 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 365.179 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 1042.662 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1394.310 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 44.764 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 63.920 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 119.191 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 136.025 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 207.681 | 3,125,451 | 0.1424 | 8 | yes |
| brotli | 5 | 322.483 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 374.624 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 531.011 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 701.482 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 942.120 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 14651.834 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 39669.377 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.826 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 54.666 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 68.401 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 73.053 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 148.461 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 207.290 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 248.781 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 312.215 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 358.289 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 462.494 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 687.732 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 752.028 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 1079.678 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1409.399 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1833.536 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 4059.578 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 4896.592 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 6523.249 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 10294.748 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 10224.133 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 10615.247 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 10471.668 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.653 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.761 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.434 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.369 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 26.958 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 32.078 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 34.211 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.624 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.698 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.113 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.541 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.482 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.758 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.712 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.825 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.479 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 46.158 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 54.365 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 66.635 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 990.000 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2075.471 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.246 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.147 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.585 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.578 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.806 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.460 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.778 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.451 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.886 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 23.972 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 30.567 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 29.959 | 385,152 | 0.4480 | 9 | yes |
| zstd | 13 | 70.684 | 383,952 | 0.4466 | 7 | yes |
| zstd | 14 | 64.651 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 59.670 | 383,877 | 0.4465 | 8 | yes |
| zstd | 16 | 100.507 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 123.096 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 159.058 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 176.290 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 178.564 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 176.106 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 197.509 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.076 | 5,506 | 0.2826 | 24 | yes |
| gzip | 2 | 0.083 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.099 | 5,356 | 0.2749 | 25 | no |
| gzip | 4 | 0.123 | 5,145 | 0.2641 | 20 | yes |
| gzip | 5 | 0.162 | 4,896 | 0.2513 | 25 | no |
| gzip | 6 | 0.222 | 4,884 | 0.2507 | 21 | yes |
| gzip | 7 | 0.506 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.685 | 4,859 | 0.2494 | 8 | yes |
| gzip | 9 | 0.707 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.056 | 6,028 | 0.3094 | 8 | yes |
| brotli | 1 | 0.076 | 5,737 | 0.2945 | 9 | yes |
| brotli | 2 | 0.103 | 4,944 | 0.2538 | 25 | yes |
| brotli | 3 | 0.129 | 4,930 | 0.2531 | 20 | yes |
| brotli | 4 | 0.209 | 4,898 | 0.2514 | 25 | no |
| brotli | 5 | 0.444 | 4,581 | 0.2352 | 6 | yes |
| brotli | 6 | 0.498 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.559 | 4,564 | 0.2343 | 6 | yes |
| brotli | 8 | 0.633 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.739 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.727 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.639 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.058 | 5,379 | 0.2761 | 20 | yes |
| zstd | 2 | 0.062 | 5,176 | 0.2657 | 9 | yes |
| zstd | 3 | 0.081 | 5,169 | 0.2653 | 12 | yes |
| zstd | 4 | 0.083 | 5,154 | 0.2646 | 7 | yes |
| zstd | 5 | 0.149 | 5,074 | 0.2605 | 9 | yes |
| zstd | 6 | 0.201 | 4,797 | 0.2463 | 11 | yes |
| zstd | 7 | 0.233 | 4,702 | 0.2414 | 12 | yes |
| zstd | 8 | 0.274 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.345 | 4,690 | 0.2408 | 11 | yes |
| zstd | 10 | 0.465 | 4,691 | 0.2408 | 6 | yes |
| zstd | 11 | 0.605 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.614 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.990 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.753 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.837 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.556 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.549 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.550 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.974 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.033 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.028 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.017 | 4,348 | 0.2232 | 5 | yes |
