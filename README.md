# Node Compression Benchmark

Last updated: 2026-05-07T21:26:51.033Z

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
| gzip | 1 | 0.961 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.979 | 30,134 | 0.3827 | 8 | yes |
| gzip | 3 | 1.079 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.214 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.580 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.845 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.057 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.418 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.400 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.365 | 33,111 | 0.4205 | 15 | yes |
| brotli | 1 | 0.765 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.812 | 29,394 | 0.3733 | 8 | yes |
| brotli | 3 | 0.958 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.465 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.112 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.259 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.611 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.559 | 26,725 | 0.3394 | 8 | yes |
| brotli | 9 | 4.786 | 26,711 | 0.3392 | 6 | yes |
| brotli | 10 | 34.004 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 97.721 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.337 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.344 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.415 | 29,214 | 0.3710 | 10 | yes |
| zstd | 4 | 0.543 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 1.265 | 28,349 | 0.3600 | 15 | yes |
| zstd | 6 | 1.593 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.838 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.988 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.178 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.412 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.002 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.406 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.360 | 26,867 | 0.3412 | 6 | yes |
| zstd | 14 | 8.572 | 26,432 | 0.3357 | 8 | yes |
| zstd | 15 | 9.004 | 26,420 | 0.3355 | 7 | yes |
| zstd | 16 | 12.123 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 12.097 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.631 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 22.131 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 22.314 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 22.124 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 22.190 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 83.872 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 86.486 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 92.144 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.653 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 119.120 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.682 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 141.643 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 159.389 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.337 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.683 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.834 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.825 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.504 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 87.264 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 123.504 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 140.480 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 412.834 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 529.413 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 753.499 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6121.669 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12666.252 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.730 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 25.257 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 40.181 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 43.522 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.420 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 79.219 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 85.179 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 99.111 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 102.933 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 129.087 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 174.736 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 204.505 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 423.405 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 497.867 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 551.363 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 702.428 | 2,803,911 | 0.5123 | 12 | yes |
| zstd | 17 | 912.337 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1283.277 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1392.372 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1405.674 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1407.391 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1383.121 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 11.973 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 11.912 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 11.932 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.409 | 612,817 | 0.9968 | 7 | yes |
| gzip | 5 | 12.436 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.397 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.472 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.426 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.438 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.264 | 613,595 | 0.9981 | 5 | yes |
| brotli | 1 | 0.250 | 614,785 | 1.0000 | 25 | yes |
| brotli | 2 | 0.636 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.812 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.095 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.659 | 614,785 | 1.0000 | 13 | yes |
| brotli | 6 | 1.496 | 614,785 | 1.0000 | 5 | yes |
| brotli | 7 | 1.947 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.458 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 3.207 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 108.383 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 250.477 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.324 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.341 | 614,804 | 1.0000 | 13 | yes |
| zstd | 3 | 0.426 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.498 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.666 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.646 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.861 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.862 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 1.135 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 1.172 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 1.997 | 614,804 | 1.0000 | 25 | no |
| zstd | 12 | 1.243 | 614,804 | 1.0000 | 7 | yes |
| zstd | 13 | 5.303 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 4.859 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 5.051 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 16.693 | 612,536 | 0.9963 | 14 | yes |
| zstd | 17 | 16.410 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 27.881 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 31.313 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 29.533 | 612,518 | 0.9963 | 7 | yes |
| zstd | 21 | 30.661 | 612,518 | 0.9963 | 15 | yes |
| zstd | 22 | 29.972 | 612,518 | 0.9963 | 11 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,120 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.835 | 144,617 | 0.2963 | 5 | yes |
| gzip | 2 | 4.216 | 137,841 | 0.2824 | 5 | yes |
| gzip | 3 | 5.408 | 133,234 | 0.2730 | 5 | yes |
| gzip | 4 | 5.772 | 125,052 | 0.2562 | 5 | yes |
| gzip | 5 | 8.095 | 120,442 | 0.2467 | 5 | yes |
| gzip | 6 | 11.709 | 118,722 | 0.2432 | 5 | yes |
| gzip | 7 | 14.777 | 118,261 | 0.2423 | 5 | yes |
| gzip | 8 | 27.659 | 117,996 | 0.2417 | 5 | yes |
| gzip | 9 | 42.821 | 117,926 | 0.2416 | 5 | yes |
| brotli | 0 | 1.524 | 148,891 | 0.3050 | 5 | yes |
| brotli | 1 | 2.051 | 136,753 | 0.2802 | 5 | yes |
| brotli | 2 | 3.852 | 128,591 | 0.2634 | 5 | yes |
| brotli | 3 | 4.377 | 125,908 | 0.2579 | 5 | yes |
| brotli | 4 | 6.583 | 122,108 | 0.2502 | 5 | yes |
| brotli | 5 | 9.905 | 112,160 | 0.2298 | 5 | yes |
| brotli | 6 | 11.422 | 109,504 | 0.2243 | 5 | yes |
| brotli | 7 | 13.957 | 107,566 | 0.2204 | 5 | yes |
| brotli | 8 | 16.918 | 106,551 | 0.2183 | 5 | yes |
| brotli | 9 | 22.226 | 105,637 | 0.2164 | 5 | yes |
| brotli | 10 | 280.439 | 98,220 | 0.2012 | 5 | yes |
| brotli | 11 | 715.779 | 96,024 | 0.1967 | 5 | yes |
| zstd | 1 | 1.663 | 137,463 | 0.2816 | 5 | yes |
| zstd | 2 | 1.806 | 133,238 | 0.2730 | 5 | yes |
| zstd | 3 | 2.289 | 125,660 | 0.2574 | 5 | yes |
| zstd | 4 | 2.473 | 125,451 | 0.2570 | 5 | yes |
| zstd | 5 | 4.940 | 116,783 | 0.2393 | 5 | yes |
| zstd | 6 | 6.314 | 112,910 | 0.2313 | 5 | yes |
| zstd | 7 | 7.273 | 111,350 | 0.2281 | 5 | yes |
| zstd | 8 | 9.145 | 110,572 | 0.2265 | 5 | yes |
| zstd | 9 | 9.139 | 110,572 | 0.2265 | 5 | yes |
| zstd | 10 | 10.477 | 109,567 | 0.2245 | 5 | yes |
| zstd | 11 | 14.258 | 108,971 | 0.2232 | 5 | yes |
| zstd | 12 | 14.481 | 108,971 | 0.2232 | 5 | yes |
| zstd | 13 | 27.807 | 107,801 | 0.2208 | 5 | yes |
| zstd | 14 | 32.497 | 107,188 | 0.2196 | 5 | yes |
| zstd | 15 | 35.493 | 107,114 | 0.2194 | 5 | yes |
| zstd | 16 | 65.708 | 101,538 | 0.2080 | 5 | yes |
| zstd | 17 | 71.731 | 100,666 | 0.2062 | 5 | yes |
| zstd | 18 | 112.413 | 99,875 | 0.2046 | 5 | yes |
| zstd | 19 | 148.159 | 99,768 | 0.2044 | 5 | yes |
| zstd | 20 | 146.438 | 99,768 | 0.2044 | 5 | yes |
| zstd | 21 | 147.659 | 99,792 | 0.2044 | 5 | yes |
| zstd | 22 | 146.917 | 99,792 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.099 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.127 | 4,874 | 0.2831 | 13 | yes |
| gzip | 3 | 0.132 | 4,805 | 0.2791 | 22 | yes |
| gzip | 4 | 0.176 | 4,529 | 0.2631 | 9 | yes |
| gzip | 5 | 0.230 | 4,441 | 0.2579 | 6 | yes |
| gzip | 6 | 0.267 | 4,425 | 0.2570 | 8 | yes |
| gzip | 7 | 0.312 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.456 | 4,418 | 0.2566 | 5 | yes |
| gzip | 9 | 0.466 | 4,418 | 0.2566 | 5 | yes |
| brotli | 0 | 0.057 | 5,234 | 0.3040 | 25 | no |
| brotli | 1 | 0.063 | 5,133 | 0.2981 | 10 | yes |
| brotli | 2 | 0.108 | 4,740 | 0.2753 | 22 | yes |
| brotli | 3 | 0.162 | 4,650 | 0.2701 | 7 | yes |
| brotli | 4 | 0.268 | 4,555 | 0.2646 | 7 | yes |
| brotli | 5 | 0.381 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.403 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.441 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.448 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.530 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.944 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.885 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.058 | 4,924 | 0.2860 | 25 | no |
| zstd | 2 | 0.081 | 4,868 | 0.2827 | 25 | no |
| zstd | 3 | 0.093 | 4,718 | 0.2740 | 15 | yes |
| zstd | 4 | 0.097 | 4,680 | 0.2718 | 17 | yes |
| zstd | 5 | 0.186 | 4,518 | 0.2624 | 25 | no |
| zstd | 6 | 0.236 | 4,437 | 0.2577 | 13 | yes |
| zstd | 7 | 0.302 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.318 | 4,425 | 0.2570 | 5 | yes |
| zstd | 9 | 0.369 | 4,419 | 0.2567 | 8 | yes |
| zstd | 10 | 0.391 | 4,409 | 0.2561 | 5 | yes |
| zstd | 11 | 0.641 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.661 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.953 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.514 | 4,305 | 0.2500 | 5 | yes |
| zstd | 15 | 1.631 | 4,302 | 0.2499 | 5 | yes |
| zstd | 16 | 2.568 | 4,281 | 0.2486 | 5 | yes |
| zstd | 17 | 2.765 | 4,280 | 0.2486 | 5 | yes |
| zstd | 18 | 2.755 | 4,280 | 0.2486 | 5 | yes |
| zstd | 19 | 5.393 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.267 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.272 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.264 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.057 | 3,217 | 0.4493 | 25 | no |
| gzip | 2 | 0.057 | 3,179 | 0.4440 | 25 | no |
| gzip | 3 | 0.066 | 3,150 | 0.4399 | 25 | no |
| gzip | 4 | 0.068 | 3,092 | 0.4318 | 25 | no |
| gzip | 5 | 0.076 | 3,047 | 0.4256 | 25 | no |
| gzip | 6 | 0.091 | 3,041 | 0.4247 | 25 | no |
| gzip | 7 | 0.115 | 3,039 | 0.4244 | 5 | yes |
| gzip | 8 | 0.120 | 3,039 | 0.4244 | 5 | yes |
| gzip | 9 | 0.101 | 3,039 | 0.4244 | 25 | no |
| brotli | 0 | 0.032 | 3,544 | 0.4950 | 25 | no |
| brotli | 1 | 0.038 | 3,378 | 0.4718 | 13 | yes |
| brotli | 2 | 0.059 | 3,258 | 0.4550 | 12 | yes |
| brotli | 3 | 0.080 | 3,207 | 0.4479 | 25 | no |
| brotli | 4 | 0.147 | 3,138 | 0.4383 | 18 | yes |
| brotli | 5 | 0.227 | 2,961 | 0.4135 | 8 | yes |
| brotli | 6 | 0.230 | 2,950 | 0.4120 | 5 | yes |
| brotli | 7 | 0.263 | 2,942 | 0.4109 | 7 | yes |
| brotli | 8 | 0.245 | 2,942 | 0.4109 | 5 | yes |
| brotli | 9 | 0.313 | 2,943 | 0.4110 | 7 | yes |
| brotli | 10 | 3.311 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 7.838 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.039 | 3,250 | 0.4539 | 11 | yes |
| zstd | 2 | 0.041 | 3,196 | 0.4464 | 16 | yes |
| zstd | 3 | 0.047 | 3,171 | 0.4429 | 12 | yes |
| zstd | 4 | 0.067 | 3,098 | 0.4327 | 17 | yes |
| zstd | 5 | 0.077 | 3,077 | 0.4297 | 23 | yes |
| zstd | 6 | 0.092 | 3,055 | 0.4267 | 22 | yes |
| zstd | 7 | 0.123 | 3,050 | 0.4260 | 25 | no |
| zstd | 8 | 0.111 | 3,050 | 0.4260 | 13 | yes |
| zstd | 9 | 0.183 | 3,050 | 0.4260 | 8 | yes |
| zstd | 10 | 0.173 | 3,050 | 0.4260 | 9 | yes |
| zstd | 11 | 0.361 | 3,041 | 0.4247 | 5 | yes |
| zstd | 12 | 0.494 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.672 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.713 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.676 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.306 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.312 | 2,991 | 0.4177 | 5 | yes |
| zstd | 18 | 1.291 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.307 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.283 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.288 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.287 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,101 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.870 | 66,867 | 0.4075 | 5 | yes |
| gzip | 2 | 1.998 | 65,284 | 0.3978 | 5 | yes |
| gzip | 3 | 2.274 | 64,273 | 0.3917 | 5 | yes |
| gzip | 4 | 2.544 | 61,944 | 0.3775 | 5 | yes |
| gzip | 5 | 3.427 | 60,295 | 0.3674 | 5 | yes |
| gzip | 6 | 4.222 | 60,024 | 0.3658 | 5 | yes |
| gzip | 7 | 4.620 | 59,987 | 0.3655 | 5 | yes |
| gzip | 8 | 4.969 | 59,968 | 0.3654 | 5 | yes |
| gzip | 9 | 4.999 | 59,968 | 0.3654 | 5 | yes |
| brotli | 0 | 0.651 | 71,266 | 0.4343 | 5 | yes |
| brotli | 1 | 0.873 | 68,223 | 0.4157 | 5 | yes |
| brotli | 2 | 1.642 | 62,973 | 0.3837 | 5 | yes |
| brotli | 3 | 1.914 | 62,342 | 0.3799 | 5 | yes |
| brotli | 4 | 3.035 | 61,240 | 0.3732 | 5 | yes |
| brotli | 5 | 4.376 | 57,877 | 0.3527 | 5 | yes |
| brotli | 6 | 4.874 | 57,538 | 0.3506 | 5 | yes |
| brotli | 7 | 5.768 | 57,245 | 0.3488 | 5 | yes |
| brotli | 8 | 6.403 | 57,160 | 0.3483 | 5 | yes |
| brotli | 9 | 7.335 | 57,088 | 0.3479 | 5 | yes |
| brotli | 10 | 99.820 | 54,389 | 0.3314 | 5 | yes |
| brotli | 11 | 244.315 | 53,368 | 0.3252 | 5 | yes |
| zstd | 1 | 0.622 | 66,221 | 0.4035 | 7 | yes |
| zstd | 2 | 0.815 | 63,208 | 0.3852 | 6 | yes |
| zstd | 3 | 1.016 | 62,693 | 0.3820 | 5 | yes |
| zstd | 4 | 1.897 | 60,843 | 0.3708 | 5 | yes |
| zstd | 5 | 2.242 | 60,346 | 0.3677 | 5 | yes |
| zstd | 6 | 2.622 | 59,421 | 0.3621 | 5 | yes |
| zstd | 7 | 3.101 | 58,638 | 0.3573 | 5 | yes |
| zstd | 8 | 3.749 | 58,163 | 0.3544 | 5 | yes |
| zstd | 9 | 4.293 | 57,917 | 0.3529 | 5 | yes |
| zstd | 10 | 5.139 | 57,792 | 0.3522 | 5 | yes |
| zstd | 11 | 8.448 | 57,490 | 0.3503 | 5 | yes |
| zstd | 12 | 8.851 | 57,475 | 0.3502 | 5 | yes |
| zstd | 13 | 15.277 | 56,464 | 0.3441 | 5 | yes |
| zstd | 14 | 18.333 | 56,028 | 0.3414 | 5 | yes |
| zstd | 15 | 18.567 | 56,011 | 0.3413 | 5 | yes |
| zstd | 16 | 25.830 | 55,838 | 0.3403 | 5 | yes |
| zstd | 17 | 25.459 | 55,838 | 0.3403 | 5 | yes |
| zstd | 18 | 43.797 | 55,766 | 0.3398 | 5 | yes |
| zstd | 19 | 43.593 | 55,766 | 0.3398 | 5 | yes |
| zstd | 20 | 43.671 | 55,766 | 0.3398 | 5 | yes |
| zstd | 21 | 43.687 | 55,766 | 0.3398 | 5 | yes |
| zstd | 22 | 43.455 | 55,766 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.788 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.851 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.964 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.068 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.392 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.771 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.099 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.846 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.862 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.267 | 30,978 | 0.4230 | 7 | yes |
| brotli | 1 | 0.383 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.712 | 27,438 | 0.3747 | 6 | yes |
| brotli | 3 | 0.801 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.334 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.949 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.099 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.410 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.720 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.245 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 41.236 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 98.195 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.256 | 28,919 | 0.3949 | 8 | yes |
| zstd | 2 | 0.292 | 28,008 | 0.3824 | 7 | yes |
| zstd | 3 | 0.387 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.489 | 27,100 | 0.3700 | 6 | yes |
| zstd | 5 | 0.845 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.178 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.345 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.509 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.698 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 2.019 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.307 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.505 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.467 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.803 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.909 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 11.011 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 11.001 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 11.053 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.912 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.938 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.817 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.834 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.581 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.667 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.797 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.905 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.245 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.891 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.533 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.572 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.694 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.249 | 25,901 | 0.3420 | 9 | yes |
| brotli | 1 | 0.378 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.643 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.759 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.139 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.678 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.904 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.231 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.692 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.482 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 30.139 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 87.856 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.267 | 22,639 | 0.2989 | 8 | yes |
| zstd | 2 | 0.290 | 22,433 | 0.2962 | 5 | yes |
| zstd | 3 | 0.355 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.413 | 22,181 | 0.2929 | 8 | yes |
| zstd | 5 | 0.753 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.085 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.300 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.512 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.884 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.447 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.325 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.270 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.122 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.431 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.276 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.697 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 15.029 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 21.844 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 22.637 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 26.586 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 37.672 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 43.519 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.063 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.137 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.331 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.710 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.173 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.891 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.540 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.709 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.859 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.451 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.606 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.181 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.381 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.008 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.990 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.225 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.662 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.215 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.028 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 99.403 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 303.906 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.485 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.555 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.597 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.742 | 30,973 | 0.1334 | 6 | yes |
| zstd | 5 | 2.286 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.277 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.633 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.856 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.512 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.634 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.168 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.827 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.121 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.033 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.543 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.948 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 64.350 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 85.164 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 97.243 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 102.080 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 101.761 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 101.795 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 90.797 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 91.119 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 109.182 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 144.088 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 169.563 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 214.138 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 321.259 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 903.454 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1202.214 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 44.827 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 59.489 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 111.827 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 131.403 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 182.195 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 302.590 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 375.413 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 533.685 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 673.961 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 899.594 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 13270.719 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37411.626 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.015 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 55.467 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 67.245 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 69.725 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 141.621 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 199.048 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 221.915 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 284.247 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 290.178 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 376.850 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 543.533 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 624.314 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 818.774 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 997.682 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1219.972 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3206.449 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3689.302 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5395.563 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9586.046 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9933.531 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9755.750 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 10325.571 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.271 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.218 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.375 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.381 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.429 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.687 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.348 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.161 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.451 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.929 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.342 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.925 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.975 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.540 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.655 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.188 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 43.712 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 53.502 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 64.350 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 909.294 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1934.474 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.099 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.912 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.949 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.521 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.325 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.986 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.277 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.748 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.442 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 23.024 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.077 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.595 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 53.151 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 54.846 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 54.083 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 103.646 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 121.302 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 169.545 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 181.212 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 186.143 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 183.536 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 186.583 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.108 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.121 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.158 | 5,356 | 0.2749 | 16 | yes |
| gzip | 4 | 0.204 | 5,145 | 0.2641 | 6 | yes |
| gzip | 5 | 0.279 | 4,896 | 0.2513 | 5 | yes |
| gzip | 6 | 0.367 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.509 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.640 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.641 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.059 | 6,028 | 0.3094 | 9 | yes |
| brotli | 1 | 0.072 | 5,737 | 0.2945 | 12 | yes |
| brotli | 2 | 0.148 | 4,944 | 0.2538 | 5 | yes |
| brotli | 3 | 0.166 | 4,930 | 0.2531 | 13 | yes |
| brotli | 4 | 0.294 | 4,898 | 0.2514 | 5 | yes |
| brotli | 5 | 0.452 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.498 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.560 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.591 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.729 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.242 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.925 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.062 | 5,379 | 0.2761 | 20 | yes |
| zstd | 2 | 0.070 | 5,176 | 0.2657 | 13 | yes |
| zstd | 3 | 0.095 | 5,169 | 0.2653 | 17 | yes |
| zstd | 4 | 0.104 | 5,154 | 0.2646 | 16 | yes |
| zstd | 5 | 0.196 | 5,074 | 0.2605 | 5 | yes |
| zstd | 6 | 0.262 | 4,797 | 0.2463 | 5 | yes |
| zstd | 7 | 0.306 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.339 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.426 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.499 | 4,691 | 0.2408 | 7 | yes |
| zstd | 11 | 0.623 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.663 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.024 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.812 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.926 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.894 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.890 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.889 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.658 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.685 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.682 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.696 | 4,348 | 0.2232 | 5 | yes |
