# Node Compression Benchmark

Last updated: 2026-06-03T08:57:38.290Z

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
| gzip | 1 | 0.957 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.981 | 30,134 | 0.3827 | 9 | yes |
| gzip | 3 | 1.072 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.226 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.590 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.852 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.031 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.360 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.328 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.382 | 33,111 | 0.4205 | 8 | yes |
| brotli | 1 | 0.760 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.831 | 29,394 | 0.3733 | 10 | yes |
| brotli | 3 | 0.922 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.449 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.021 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.161 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.799 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.550 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.107 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.753 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 95.381 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.331 | 31,062 | 0.3944 | 9 | yes |
| zstd | 2 | 0.350 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.400 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.523 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.917 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.215 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.501 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.577 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.779 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.052 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.363 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.490 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.557 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.973 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.075 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.020 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.110 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.078 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.698 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.743 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.817 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.809 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 87.315 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 90.318 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 95.765 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 106.715 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 120.941 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 134.047 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 142.386 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 159.658 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 172.545 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.827 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.366 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 51.683 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.969 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 90.538 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 131.471 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 150.197 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 463.804 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 624.840 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 788.433 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6774.623 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13439.995 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.914 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.980 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 39.150 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 42.357 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 68.601 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 79.249 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 85.622 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 101.459 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 100.102 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 140.031 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 187.355 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 210.707 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 518.657 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 505.503 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 580.439 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 916.635 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 1037.035 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1388.624 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1494.914 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1434.447 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1416.149 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1435.221 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.035 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.032 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.040 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.614 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.627 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.642 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.645 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.661 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.743 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.286 | 613,595 | 0.9981 | 13 | yes |
| brotli | 1 | 0.233 | 614,785 | 1.0000 | 5 | yes |
| brotli | 2 | 0.657 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.834 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.087 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.667 | 614,785 | 1.0000 | 21 | yes |
| brotli | 6 | 1.676 | 614,785 | 1.0000 | 5 | yes |
| brotli | 7 | 2.023 | 614,785 | 1.0000 | 9 | yes |
| brotli | 8 | 2.485 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 3.435 | 614,785 | 1.0000 | 10 | yes |
| brotli | 10 | 114.218 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 256.070 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.291 | 614,805 | 1.0000 | 10 | yes |
| zstd | 2 | 0.292 | 614,804 | 1.0000 | 7 | yes |
| zstd | 3 | 0.324 | 614,804 | 1.0000 | 25 | no |
| zstd | 4 | 0.367 | 614,804 | 1.0000 | 10 | yes |
| zstd | 5 | 0.503 | 614,804 | 1.0000 | 8 | yes |
| zstd | 6 | 0.506 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.583 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.547 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.717 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.721 | 614,804 | 1.0000 | 21 | yes |
| zstd | 11 | 0.728 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.711 | 614,804 | 1.0000 | 5 | yes |
| zstd | 13 | 3.317 | 612,619 | 0.9965 | 18 | yes |
| zstd | 14 | 3.456 | 612,619 | 0.9965 | 6 | yes |
| zstd | 15 | 2.947 | 612,619 | 0.9965 | 11 | yes |
| zstd | 16 | 19.870 | 612,536 | 0.9963 | 25 | no |
| zstd | 17 | 18.589 | 612,516 | 0.9963 | 16 | yes |
| zstd | 18 | 27.499 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 37.935 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 40.536 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 41.006 | 612,518 | 0.9963 | 7 | yes |
| zstd | 22 | 41.342 | 612,518 | 0.9963 | 22 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,376 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.888 | 144,671 | 0.2962 | 5 | yes |
| gzip | 2 | 4.192 | 137,894 | 0.2824 | 5 | yes |
| gzip | 3 | 5.477 | 133,284 | 0.2729 | 5 | yes |
| gzip | 4 | 5.791 | 125,107 | 0.2562 | 5 | yes |
| gzip | 5 | 8.149 | 120,500 | 0.2467 | 5 | yes |
| gzip | 6 | 11.773 | 118,777 | 0.2432 | 5 | yes |
| gzip | 7 | 14.925 | 118,321 | 0.2423 | 5 | yes |
| gzip | 8 | 27.742 | 118,050 | 0.2417 | 5 | yes |
| gzip | 9 | 43.049 | 117,981 | 0.2416 | 5 | yes |
| brotli | 0 | 1.515 | 149,143 | 0.3054 | 5 | yes |
| brotli | 1 | 2.082 | 136,828 | 0.2802 | 5 | yes |
| brotli | 2 | 3.858 | 128,657 | 0.2634 | 5 | yes |
| brotli | 3 | 4.497 | 125,956 | 0.2579 | 5 | yes |
| brotli | 4 | 6.514 | 122,132 | 0.2501 | 5 | yes |
| brotli | 5 | 10.230 | 112,200 | 0.2297 | 5 | yes |
| brotli | 6 | 11.915 | 109,580 | 0.2244 | 5 | yes |
| brotli | 7 | 14.312 | 107,617 | 0.2204 | 5 | yes |
| brotli | 8 | 17.774 | 106,600 | 0.2183 | 5 | yes |
| brotli | 9 | 22.345 | 105,688 | 0.2164 | 5 | yes |
| brotli | 10 | 282.804 | 98,262 | 0.2012 | 5 | yes |
| brotli | 11 | 720.259 | 96,054 | 0.1967 | 5 | yes |
| zstd | 1 | 1.644 | 137,501 | 0.2815 | 5 | yes |
| zstd | 2 | 1.853 | 133,304 | 0.2730 | 5 | yes |
| zstd | 3 | 2.152 | 125,704 | 0.2574 | 5 | yes |
| zstd | 4 | 2.258 | 125,507 | 0.2570 | 5 | yes |
| zstd | 5 | 4.728 | 116,849 | 0.2393 | 5 | yes |
| zstd | 6 | 6.165 | 112,959 | 0.2313 | 5 | yes |
| zstd | 7 | 6.974 | 111,397 | 0.2281 | 5 | yes |
| zstd | 8 | 8.840 | 110,614 | 0.2265 | 5 | yes |
| zstd | 9 | 8.869 | 110,614 | 0.2265 | 5 | yes |
| zstd | 10 | 10.854 | 109,711 | 0.2246 | 5 | yes |
| zstd | 11 | 13.598 | 109,009 | 0.2232 | 5 | yes |
| zstd | 12 | 13.684 | 109,009 | 0.2232 | 5 | yes |
| zstd | 13 | 28.813 | 107,861 | 0.2209 | 5 | yes |
| zstd | 14 | 36.393 | 107,276 | 0.2197 | 5 | yes |
| zstd | 15 | 37.841 | 107,183 | 0.2195 | 5 | yes |
| zstd | 16 | 73.517 | 101,602 | 0.2080 | 5 | yes |
| zstd | 17 | 77.579 | 100,701 | 0.2062 | 5 | yes |
| zstd | 18 | 117.457 | 99,909 | 0.2046 | 5 | yes |
| zstd | 19 | 154.243 | 99,813 | 0.2044 | 5 | yes |
| zstd | 20 | 154.979 | 99,813 | 0.2044 | 5 | yes |
| zstd | 21 | 154.713 | 99,799 | 0.2043 | 5 | yes |
| zstd | 22 | 157.018 | 99,799 | 0.2043 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.089 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.120 | 4,874 | 0.2831 | 13 | yes |
| gzip | 3 | 0.150 | 4,806 | 0.2791 | 5 | yes |
| gzip | 4 | 0.185 | 4,530 | 0.2631 | 5 | yes |
| gzip | 5 | 0.223 | 4,441 | 0.2579 | 8 | yes |
| gzip | 6 | 0.270 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.309 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.451 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.463 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.057 | 5,235 | 0.3041 | 10 | yes |
| brotli | 1 | 0.064 | 5,134 | 0.2982 | 12 | yes |
| brotli | 2 | 0.111 | 4,741 | 0.2754 | 25 | no |
| brotli | 3 | 0.149 | 4,650 | 0.2701 | 21 | yes |
| brotli | 4 | 0.286 | 4,555 | 0.2646 | 9 | yes |
| brotli | 5 | 0.384 | 4,276 | 0.2484 | 9 | yes |
| brotli | 6 | 0.422 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.459 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.476 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.538 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.870 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.843 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.053 | 4,923 | 0.2859 | 12 | yes |
| zstd | 2 | 0.057 | 4,868 | 0.2827 | 12 | yes |
| zstd | 3 | 0.082 | 4,717 | 0.2740 | 25 | no |
| zstd | 4 | 0.075 | 4,679 | 0.2718 | 19 | yes |
| zstd | 5 | 0.156 | 4,519 | 0.2625 | 10 | yes |
| zstd | 6 | 0.202 | 4,437 | 0.2577 | 23 | yes |
| zstd | 7 | 0.262 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.289 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.335 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.374 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.617 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.636 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.899 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.481 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.536 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.452 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.625 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.627 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.185 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.197 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.167 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.174 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.056 | 3,220 | 0.4497 | 21 | yes |
| gzip | 2 | 0.056 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.058 | 3,153 | 0.4403 | 17 | yes |
| gzip | 4 | 0.079 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.086 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.085 | 3,044 | 0.4251 | 21 | yes |
| gzip | 7 | 0.099 | 3,042 | 0.4248 | 25 | no |
| gzip | 8 | 0.117 | 3,042 | 0.4248 | 5 | yes |
| gzip | 9 | 0.092 | 3,042 | 0.4248 | 22 | yes |
| brotli | 0 | 0.033 | 3,549 | 0.4956 | 20 | yes |
| brotli | 1 | 0.040 | 3,381 | 0.4721 | 17 | yes |
| brotli | 2 | 0.063 | 3,263 | 0.4557 | 25 | no |
| brotli | 3 | 0.078 | 3,216 | 0.4491 | 16 | yes |
| brotli | 4 | 0.157 | 3,147 | 0.4395 | 15 | yes |
| brotli | 5 | 0.250 | 2,963 | 0.4138 | 5 | yes |
| brotli | 6 | 0.243 | 2,952 | 0.4122 | 5 | yes |
| brotli | 7 | 0.260 | 2,944 | 0.4111 | 10 | yes |
| brotli | 8 | 0.269 | 2,944 | 0.4111 | 9 | yes |
| brotli | 9 | 0.315 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.156 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.743 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.033 | 3,254 | 0.4544 | 25 | no |
| zstd | 2 | 0.034 | 3,200 | 0.4469 | 14 | yes |
| zstd | 3 | 0.042 | 3,176 | 0.4435 | 19 | yes |
| zstd | 4 | 0.060 | 3,102 | 0.4332 | 11 | yes |
| zstd | 5 | 0.073 | 3,079 | 0.4300 | 25 | no |
| zstd | 6 | 0.087 | 3,060 | 0.4273 | 24 | yes |
| zstd | 7 | 0.107 | 3,053 | 0.4263 | 9 | yes |
| zstd | 8 | 0.113 | 3,053 | 0.4263 | 12 | yes |
| zstd | 9 | 0.150 | 3,055 | 0.4266 | 25 | no |
| zstd | 10 | 0.176 | 3,055 | 0.4266 | 16 | yes |
| zstd | 11 | 0.346 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.477 | 3,011 | 0.4205 | 6 | yes |
| zstd | 13 | 0.657 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.666 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.679 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.271 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.289 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.270 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.272 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.285 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.286 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.272 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,217 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.875 | 66,928 | 0.4076 | 5 | yes |
| gzip | 2 | 2.038 | 65,338 | 0.3979 | 5 | yes |
| gzip | 3 | 2.292 | 64,317 | 0.3917 | 5 | yes |
| gzip | 4 | 2.593 | 61,980 | 0.3774 | 5 | yes |
| gzip | 5 | 3.439 | 60,339 | 0.3674 | 5 | yes |
| gzip | 6 | 4.268 | 60,067 | 0.3658 | 5 | yes |
| gzip | 7 | 4.651 | 60,024 | 0.3655 | 5 | yes |
| gzip | 8 | 5.010 | 60,007 | 0.3654 | 5 | yes |
| gzip | 9 | 5.011 | 60,007 | 0.3654 | 5 | yes |
| brotli | 0 | 0.679 | 71,251 | 0.4339 | 6 | yes |
| brotli | 1 | 0.933 | 68,275 | 0.4158 | 5 | yes |
| brotli | 2 | 1.690 | 63,015 | 0.3837 | 5 | yes |
| brotli | 3 | 1.911 | 62,457 | 0.3803 | 5 | yes |
| brotli | 4 | 2.993 | 61,234 | 0.3729 | 5 | yes |
| brotli | 5 | 4.478 | 57,931 | 0.3528 | 5 | yes |
| brotli | 6 | 4.957 | 57,572 | 0.3506 | 5 | yes |
| brotli | 7 | 5.858 | 57,281 | 0.3488 | 5 | yes |
| brotli | 8 | 6.395 | 57,200 | 0.3483 | 5 | yes |
| brotli | 9 | 7.413 | 57,125 | 0.3479 | 5 | yes |
| brotli | 10 | 96.938 | 54,364 | 0.3310 | 5 | yes |
| brotli | 11 | 243.522 | 53,487 | 0.3257 | 5 | yes |
| zstd | 1 | 0.619 | 66,282 | 0.4036 | 5 | yes |
| zstd | 2 | 0.801 | 63,237 | 0.3851 | 5 | yes |
| zstd | 3 | 1.052 | 62,745 | 0.3821 | 5 | yes |
| zstd | 4 | 1.774 | 60,886 | 0.3708 | 5 | yes |
| zstd | 5 | 1.978 | 60,366 | 0.3676 | 7 | yes |
| zstd | 6 | 2.420 | 59,468 | 0.3621 | 5 | yes |
| zstd | 7 | 2.843 | 58,678 | 0.3573 | 5 | yes |
| zstd | 8 | 3.619 | 58,201 | 0.3544 | 5 | yes |
| zstd | 9 | 4.163 | 57,953 | 0.3529 | 5 | yes |
| zstd | 10 | 4.991 | 57,830 | 0.3522 | 5 | yes |
| zstd | 11 | 8.955 | 57,527 | 0.3503 | 5 | yes |
| zstd | 12 | 9.322 | 57,514 | 0.3502 | 5 | yes |
| zstd | 13 | 16.582 | 56,499 | 0.3441 | 5 | yes |
| zstd | 14 | 19.635 | 56,072 | 0.3415 | 5 | yes |
| zstd | 15 | 19.468 | 56,052 | 0.3413 | 5 | yes |
| zstd | 16 | 26.471 | 55,868 | 0.3402 | 5 | yes |
| zstd | 17 | 25.563 | 55,868 | 0.3402 | 5 | yes |
| zstd | 18 | 46.016 | 55,790 | 0.3397 | 5 | yes |
| zstd | 19 | 44.898 | 55,790 | 0.3397 | 5 | yes |
| zstd | 20 | 45.168 | 55,790 | 0.3397 | 5 | yes |
| zstd | 21 | 44.141 | 55,790 | 0.3397 | 5 | yes |
| zstd | 22 | 45.017 | 55,790 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.789 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.855 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.982 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.076 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.404 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.791 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.125 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.861 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.851 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.288 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.403 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.695 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.812 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.387 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.986 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.125 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.465 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.688 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.157 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 39.698 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 95.864 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.257 | 28,919 | 0.3949 | 8 | yes |
| zstd | 2 | 0.302 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.347 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.453 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.785 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.066 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.304 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.426 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.635 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.925 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.107 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.288 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.418 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.692 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.814 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.881 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.911 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.884 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.884 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.960 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.970 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.877 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.597 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.675 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.795 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.905 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.257 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.901 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.542 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.611 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.687 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.252 | 25,901 | 0.3420 | 11 | yes |
| brotli | 1 | 0.368 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.634 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.768 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.155 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.748 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 2.000 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.271 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.639 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.441 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 29.628 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 86.696 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.257 | 22,639 | 0.2989 | 10 | yes |
| zstd | 2 | 0.282 | 22,433 | 0.2962 | 7 | yes |
| zstd | 3 | 0.329 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.556 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.718 | 21,579 | 0.2849 | 6 | yes |
| zstd | 6 | 1.002 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.247 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.426 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.796 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.446 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.146 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.111 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 4.921 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.137 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.256 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.553 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 15.053 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.685 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 23.040 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 27.001 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.360 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 43.598 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.093 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.139 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.330 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.720 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.163 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.908 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.559 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.751 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.813 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.466 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.618 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.180 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.402 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.077 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.973 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.333 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.649 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.096 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 4.961 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 97.194 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 297.635 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.483 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.534 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.573 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.427 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 2.207 | 29,744 | 0.1281 | 25 | no |
| zstd | 6 | 1.969 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.192 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.672 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.182 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.542 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.871 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.815 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.468 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.914 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.339 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.639 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 64.563 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 86.160 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 97.593 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 102.158 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 102.020 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 103.981 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 16,946,804 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 94.591 | 3,754,873 | 0.2216 | 5 | yes |
| gzip | 2 | 103.083 | 3,606,731 | 0.2128 | 5 | yes |
| gzip | 3 | 125.177 | 3,488,191 | 0.2058 | 5 | yes |
| gzip | 4 | 149.673 | 3,361,083 | 0.1983 | 5 | yes |
| gzip | 5 | 193.457 | 3,140,651 | 0.1853 | 5 | yes |
| gzip | 6 | 282.589 | 3,073,208 | 0.1813 | 5 | yes |
| gzip | 7 | 383.781 | 3,007,264 | 0.1775 | 5 | yes |
| gzip | 8 | 1075.675 | 2,939,923 | 0.1735 | 5 | yes |
| gzip | 9 | 1122.934 | 2,939,101 | 0.1734 | 5 | yes |
| brotli | 0 | 46.579 | 4,158,391 | 0.2454 | 5 | yes |
| brotli | 1 | 63.233 | 3,696,388 | 0.2181 | 5 | yes |
| brotli | 2 | 113.363 | 3,404,652 | 0.2009 | 5 | yes |
| brotli | 3 | 131.197 | 3,347,644 | 0.1975 | 5 | yes |
| brotli | 4 | 223.742 | 3,276,816 | 0.1934 | 5 | yes |
| brotli | 5 | 325.161 | 2,921,643 | 0.1724 | 5 | yes |
| brotli | 6 | 410.266 | 2,890,343 | 0.1706 | 5 | yes |
| brotli | 7 | 564.838 | 2,863,078 | 0.1689 | 5 | yes |
| brotli | 8 | 759.233 | 2,844,800 | 0.1679 | 5 | yes |
| brotli | 9 | 1001.769 | 2,834,664 | 0.1673 | 5 | yes |
| brotli | 10 | 10798.988 | 2,428,562 | 0.1433 | 5 | yes |
| brotli | 11 | 27780.846 | 2,309,167 | 0.1363 | 5 | yes |
| zstd | 1 | 44.092 | 3,504,403 | 0.2068 | 5 | yes |
| zstd | 2 | 56.350 | 3,581,907 | 0.2114 | 5 | yes |
| zstd | 3 | 66.748 | 3,507,920 | 0.2070 | 5 | yes |
| zstd | 4 | 70.385 | 3,502,711 | 0.2067 | 5 | yes |
| zstd | 5 | 139.063 | 3,287,468 | 0.1940 | 7 | yes |
| zstd | 6 | 197.675 | 3,067,272 | 0.1810 | 5 | yes |
| zstd | 7 | 229.821 | 3,028,718 | 0.1787 | 5 | yes |
| zstd | 8 | 308.246 | 2,926,446 | 0.1727 | 5 | yes |
| zstd | 9 | 328.812 | 2,936,848 | 0.1733 | 5 | yes |
| zstd | 10 | 429.494 | 2,900,202 | 0.1711 | 5 | yes |
| zstd | 11 | 638.707 | 2,873,028 | 0.1695 | 5 | yes |
| zstd | 12 | 675.141 | 2,872,898 | 0.1695 | 5 | yes |
| zstd | 13 | 966.274 | 2,850,280 | 0.1682 | 5 | yes |
| zstd | 14 | 1138.495 | 2,835,958 | 0.1673 | 5 | yes |
| zstd | 15 | 1479.504 | 2,832,325 | 0.1671 | 5 | yes |
| zstd | 16 | 2811.722 | 2,645,548 | 0.1561 | 5 | yes |
| zstd | 17 | 3990.676 | 2,553,740 | 0.1507 | 5 | yes |
| zstd | 18 | 6577.863 | 2,535,042 | 0.1496 | 5 | yes |
| zstd | 19 | 7169.728 | 2,528,063 | 0.1492 | 5 | yes |
| zstd | 20 | 7489.647 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 21 | 7403.606 | 2,526,317 | 0.1491 | 5 | yes |
| zstd | 22 | 7274.330 | 2,521,575 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.318 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.396 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.619 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.503 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.556 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.876 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.389 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.302 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.170 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.051 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.386 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.121 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.248 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.984 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.320 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.673 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 46.106 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 56.837 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 69.929 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 921.527 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1974.490 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.078 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.927 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 6.068 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.535 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.518 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.017 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.078 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.921 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.562 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.392 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 27.395 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 27.519 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 63.418 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 58.163 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 60.551 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 119.468 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 141.113 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 180.908 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 207.069 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 206.091 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 210.958 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 213.172 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.092 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.135 | 5,424 | 0.2784 | 13 | yes |
| gzip | 3 | 0.172 | 5,356 | 0.2749 | 5 | yes |
| gzip | 4 | 0.211 | 5,145 | 0.2641 | 5 | yes |
| gzip | 5 | 0.271 | 4,896 | 0.2513 | 7 | yes |
| gzip | 6 | 0.362 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.498 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.644 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.640 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.062 | 6,028 | 0.3094 | 13 | yes |
| brotli | 1 | 0.073 | 5,737 | 0.2945 | 13 | yes |
| brotli | 2 | 0.136 | 4,944 | 0.2538 | 22 | yes |
| brotli | 3 | 0.191 | 4,930 | 0.2531 | 5 | yes |
| brotli | 4 | 0.295 | 4,898 | 0.2514 | 6 | yes |
| brotli | 5 | 0.462 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.505 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.557 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.609 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.713 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.132 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.614 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.060 | 5,379 | 0.2761 | 16 | yes |
| zstd | 2 | 0.075 | 5,176 | 0.2657 | 8 | yes |
| zstd | 3 | 0.089 | 5,169 | 0.2653 | 25 | no |
| zstd | 4 | 0.099 | 5,154 | 0.2646 | 5 | yes |
| zstd | 5 | 0.163 | 5,074 | 0.2605 | 14 | yes |
| zstd | 6 | 0.252 | 4,797 | 0.2463 | 5 | yes |
| zstd | 7 | 0.291 | 4,702 | 0.2414 | 8 | yes |
| zstd | 8 | 0.344 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.400 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.518 | 4,691 | 0.2408 | 6 | yes |
| zstd | 11 | 0.591 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.646 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.982 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.800 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.898 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.856 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.854 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.855 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.580 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.621 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.634 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.622 | 4,348 | 0.2232 | 5 | yes |
