# Node Compression Benchmark

Last updated: 2026-07-20T21:19:24.772Z

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
| gzip | 1 | 1.051 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.144 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.201 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.344 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.744 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.080 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.358 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.717 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.733 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.354 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.790 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.876 | 29,394 | 0.3733 | 8 | yes |
| brotli | 3 | 1.007 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.546 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.200 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.297 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 4.008 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.917 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.488 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 35.686 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 100.480 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.244 | 31,062 | 0.3944 | 18 | yes |
| zstd | 2 | 0.256 | 30,069 | 0.3818 | 22 | yes |
| zstd | 3 | 0.309 | 29,214 | 0.3710 | 13 | yes |
| zstd | 4 | 0.435 | 29,108 | 0.3696 | 25 | no |
| zstd | 5 | 0.900 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.244 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.537 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.651 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.825 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.048 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.523 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.652 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.494 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.540 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.594 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 9.946 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 9.917 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 9.932 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.507 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.482 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.607 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.680 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.445 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 98.259 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 105.304 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 115.867 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 134.116 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 151.988 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 163.866 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 181.887 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 194.951 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.629 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.759 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 53.439 | 3,247,965 | 0.5935 | 9 | yes |
| brotli | 3 | 63.108 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 92.616 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 127.288 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 149.735 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 438.871 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 583.896 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 871.345 | 2,793,428 | 0.5104 | 9 | yes |
| brotli | 10 | 6643.521 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13638.747 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.758 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 22.964 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 38.527 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 45.510 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 67.897 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 80.852 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 87.887 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 102.087 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 102.121 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 121.858 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 160.826 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 208.611 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 401.676 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 470.200 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 562.078 | 2,844,247 | 0.5197 | 10 | yes |
| zstd | 16 | 712.242 | 2,803,911 | 0.5123 | 8 | yes |
| zstd | 17 | 855.678 | 2,756,112 | 0.5036 | 6 | yes |
| zstd | 18 | 1225.130 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1313.407 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1284.719 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1298.659 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1285.830 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.821 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.784 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.820 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 14.371 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 14.360 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 14.380 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 14.396 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 14.393 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 14.368 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.250 | 613,595 | 0.9981 | 5 | yes |
| brotli | 1 | 0.213 | 614,785 | 1.0000 | 15 | yes |
| brotli | 2 | 0.592 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.725 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.934 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.426 | 614,785 | 1.0000 | 16 | yes |
| brotli | 6 | 1.380 | 614,785 | 1.0000 | 11 | yes |
| brotli | 7 | 1.901 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 1.968 | 614,785 | 1.0000 | 18 | yes |
| brotli | 9 | 5.042 | 614,785 | 1.0000 | 8 | yes |
| brotli | 10 | 114.302 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 266.534 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.354 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.284 | 614,804 | 1.0000 | 22 | yes |
| zstd | 3 | 0.305 | 614,804 | 1.0000 | 25 | no |
| zstd | 4 | 0.354 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.455 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.448 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.506 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.521 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.616 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.622 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.618 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.626 | 614,804 | 1.0000 | 9 | yes |
| zstd | 13 | 2.452 | 612,619 | 0.9965 | 13 | yes |
| zstd | 14 | 2.281 | 612,619 | 0.9965 | 12 | yes |
| zstd | 15 | 2.350 | 612,619 | 0.9965 | 25 | no |
| zstd | 16 | 14.756 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 14.651 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 24.986 | 612,519 | 0.9963 | 25 | no |
| zstd | 19 | 26.253 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 25.660 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 25.198 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 26.888 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,236 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.262 | 145,182 | 0.2961 | 5 | yes |
| gzip | 2 | 4.679 | 138,423 | 0.2824 | 5 | yes |
| gzip | 3 | 6.164 | 133,882 | 0.2731 | 5 | yes |
| gzip | 4 | 6.260 | 125,608 | 0.2562 | 5 | yes |
| gzip | 5 | 9.076 | 120,963 | 0.2467 | 5 | yes |
| gzip | 6 | 13.462 | 119,255 | 0.2433 | 5 | yes |
| gzip | 7 | 17.204 | 118,789 | 0.2423 | 5 | yes |
| gzip | 8 | 32.708 | 118,515 | 0.2418 | 5 | yes |
| gzip | 9 | 50.782 | 118,446 | 0.2416 | 5 | yes |
| brotli | 0 | 1.585 | 149,404 | 0.3048 | 5 | yes |
| brotli | 1 | 2.353 | 137,364 | 0.2802 | 5 | yes |
| brotli | 2 | 4.015 | 129,155 | 0.2635 | 5 | yes |
| brotli | 3 | 4.643 | 126,568 | 0.2582 | 5 | yes |
| brotli | 4 | 6.525 | 122,453 | 0.2498 | 5 | yes |
| brotli | 5 | 10.146 | 112,692 | 0.2299 | 5 | yes |
| brotli | 6 | 11.649 | 110,011 | 0.2244 | 5 | yes |
| brotli | 7 | 14.319 | 108,041 | 0.2204 | 5 | yes |
| brotli | 8 | 17.005 | 107,001 | 0.2183 | 5 | yes |
| brotli | 9 | 23.764 | 106,112 | 0.2165 | 5 | yes |
| brotli | 10 | 290.018 | 98,636 | 0.2012 | 5 | yes |
| brotli | 11 | 762.532 | 96,403 | 0.1966 | 5 | yes |
| zstd | 1 | 1.777 | 138,123 | 0.2817 | 5 | yes |
| zstd | 2 | 1.953 | 133,890 | 0.2731 | 5 | yes |
| zstd | 3 | 2.087 | 126,208 | 0.2574 | 5 | yes |
| zstd | 4 | 2.267 | 126,023 | 0.2571 | 5 | yes |
| zstd | 5 | 4.597 | 117,405 | 0.2395 | 5 | yes |
| zstd | 6 | 6.269 | 113,440 | 0.2314 | 5 | yes |
| zstd | 7 | 6.990 | 111,894 | 0.2282 | 5 | yes |
| zstd | 8 | 8.801 | 111,138 | 0.2267 | 5 | yes |
| zstd | 9 | 8.822 | 111,138 | 0.2267 | 5 | yes |
| zstd | 10 | 10.658 | 110,160 | 0.2247 | 5 | yes |
| zstd | 11 | 13.376 | 109,468 | 0.2233 | 5 | yes |
| zstd | 12 | 13.443 | 109,468 | 0.2233 | 5 | yes |
| zstd | 13 | 27.281 | 108,280 | 0.2209 | 5 | yes |
| zstd | 14 | 32.661 | 107,640 | 0.2196 | 5 | yes |
| zstd | 15 | 37.683 | 107,626 | 0.2195 | 5 | yes |
| zstd | 16 | 66.429 | 102,010 | 0.2081 | 5 | yes |
| zstd | 17 | 73.453 | 101,107 | 0.2062 | 5 | yes |
| zstd | 18 | 106.392 | 100,287 | 0.2046 | 5 | yes |
| zstd | 19 | 140.183 | 100,211 | 0.2044 | 5 | yes |
| zstd | 20 | 135.670 | 100,211 | 0.2044 | 5 | yes |
| zstd | 21 | 135.046 | 100,213 | 0.2044 | 5 | yes |
| zstd | 22 | 136.887 | 100,213 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.071 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.074 | 4,874 | 0.2831 | 21 | yes |
| gzip | 3 | 0.086 | 4,806 | 0.2791 | 21 | yes |
| gzip | 4 | 0.111 | 4,530 | 0.2631 | 17 | yes |
| gzip | 5 | 0.138 | 4,441 | 0.2579 | 25 | no |
| gzip | 6 | 0.177 | 4,425 | 0.2570 | 12 | yes |
| gzip | 7 | 0.223 | 4,418 | 0.2566 | 10 | yes |
| gzip | 8 | 0.471 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.480 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.054 | 5,235 | 0.3041 | 13 | yes |
| brotli | 1 | 0.072 | 5,134 | 0.2982 | 8 | yes |
| brotli | 2 | 0.095 | 4,741 | 0.2754 | 20 | yes |
| brotli | 3 | 0.116 | 4,650 | 0.2701 | 17 | yes |
| brotli | 4 | 0.209 | 4,555 | 0.2646 | 25 | no |
| brotli | 5 | 0.285 | 4,276 | 0.2484 | 25 | no |
| brotli | 6 | 0.307 | 4,275 | 0.2483 | 25 | yes |
| brotli | 7 | 0.432 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.393 | 4,257 | 0.2473 | 19 | yes |
| brotli | 9 | 2.174 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.173 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.342 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.052 | 4,923 | 0.2859 | 25 | no |
| zstd | 2 | 0.056 | 4,868 | 0.2827 | 9 | yes |
| zstd | 3 | 0.067 | 4,717 | 0.2740 | 9 | yes |
| zstd | 4 | 0.068 | 4,679 | 0.2718 | 12 | yes |
| zstd | 5 | 0.136 | 4,519 | 0.2625 | 16 | yes |
| zstd | 6 | 0.172 | 4,437 | 0.2577 | 12 | yes |
| zstd | 7 | 0.208 | 4,437 | 0.2577 | 9 | yes |
| zstd | 8 | 0.209 | 4,426 | 0.2571 | 21 | yes |
| zstd | 9 | 0.275 | 4,420 | 0.2567 | 9 | yes |
| zstd | 10 | 0.330 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.624 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.661 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.923 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.455 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.546 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.233 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.353 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.343 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.602 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.604 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.564 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.608 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.068 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.052 | 3,182 | 0.4444 | 15 | yes |
| gzip | 3 | 0.052 | 3,153 | 0.4403 | 13 | yes |
| gzip | 4 | 0.064 | 3,095 | 0.4322 | 9 | yes |
| gzip | 5 | 0.068 | 3,051 | 0.4261 | 23 | yes |
| gzip | 6 | 0.074 | 3,044 | 0.4251 | 12 | yes |
| gzip | 7 | 0.077 | 3,042 | 0.4248 | 22 | yes |
| gzip | 8 | 0.077 | 3,042 | 0.4248 | 10 | yes |
| gzip | 9 | 0.080 | 3,042 | 0.4248 | 6 | yes |
| brotli | 0 | 0.033 | 3,549 | 0.4956 | 14 | yes |
| brotli | 1 | 0.043 | 3,381 | 0.4721 | 17 | yes |
| brotli | 2 | 0.061 | 3,263 | 0.4557 | 25 | no |
| brotli | 3 | 0.074 | 3,216 | 0.4491 | 12 | yes |
| brotli | 4 | 0.125 | 3,147 | 0.4395 | 16 | yes |
| brotli | 5 | 0.156 | 2,963 | 0.4138 | 18 | yes |
| brotli | 6 | 0.179 | 2,952 | 0.4122 | 13 | yes |
| brotli | 7 | 0.181 | 2,944 | 0.4111 | 13 | yes |
| brotli | 8 | 0.184 | 2,944 | 0.4111 | 13 | yes |
| brotli | 9 | 1.687 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.274 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.073 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.033 | 3,254 | 0.4544 | 15 | yes |
| zstd | 2 | 0.035 | 3,200 | 0.4469 | 9 | yes |
| zstd | 3 | 0.041 | 3,176 | 0.4435 | 14 | yes |
| zstd | 4 | 0.064 | 3,102 | 0.4332 | 8 | yes |
| zstd | 5 | 0.072 | 3,079 | 0.4300 | 10 | yes |
| zstd | 6 | 0.086 | 3,060 | 0.4273 | 16 | yes |
| zstd | 7 | 0.097 | 3,053 | 0.4263 | 14 | yes |
| zstd | 8 | 0.098 | 3,053 | 0.4263 | 10 | yes |
| zstd | 9 | 0.119 | 3,055 | 0.4266 | 21 | yes |
| zstd | 10 | 0.119 | 3,055 | 0.4266 | 19 | yes |
| zstd | 11 | 0.234 | 3,044 | 0.4251 | 16 | yes |
| zstd | 12 | 0.415 | 3,011 | 0.4205 | 12 | yes |
| zstd | 13 | 0.593 | 2,998 | 0.4187 | 6 | yes |
| zstd | 14 | 0.592 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.574 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.080 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.073 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.108 | 2,992 | 0.4178 | 6 | yes |
| zstd | 19 | 1.070 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.070 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.135 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.067 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 165,599 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.070 | 67,507 | 0.4077 | 5 | yes |
| gzip | 2 | 2.256 | 65,886 | 0.3979 | 5 | yes |
| gzip | 3 | 2.591 | 64,874 | 0.3918 | 5 | yes |
| gzip | 4 | 2.848 | 62,487 | 0.3773 | 5 | yes |
| gzip | 5 | 3.926 | 60,848 | 0.3674 | 5 | yes |
| gzip | 6 | 4.934 | 60,570 | 0.3658 | 5 | yes |
| gzip | 7 | 5.396 | 60,527 | 0.3655 | 5 | yes |
| gzip | 8 | 5.811 | 60,509 | 0.3654 | 5 | yes |
| gzip | 9 | 5.827 | 60,509 | 0.3654 | 5 | yes |
| brotli | 0 | 0.712 | 71,790 | 0.4335 | 5 | yes |
| brotli | 1 | 0.957 | 68,843 | 0.4157 | 5 | yes |
| brotli | 2 | 1.775 | 63,505 | 0.3835 | 5 | yes |
| brotli | 3 | 2.088 | 62,945 | 0.3801 | 5 | yes |
| brotli | 4 | 3.019 | 61,772 | 0.3730 | 5 | yes |
| brotli | 5 | 4.521 | 58,412 | 0.3527 | 5 | yes |
| brotli | 6 | 5.070 | 58,008 | 0.3503 | 5 | yes |
| brotli | 7 | 6.118 | 57,755 | 0.3488 | 5 | yes |
| brotli | 8 | 6.542 | 57,667 | 0.3482 | 5 | yes |
| brotli | 9 | 10.204 | 57,589 | 0.3478 | 5 | yes |
| brotli | 10 | 101.740 | 54,874 | 0.3314 | 5 | yes |
| brotli | 11 | 257.400 | 53,818 | 0.3250 | 5 | yes |
| zstd | 1 | 0.648 | 66,843 | 0.4036 | 5 | yes |
| zstd | 2 | 0.811 | 63,844 | 0.3855 | 5 | yes |
| zstd | 3 | 1.034 | 63,294 | 0.3822 | 5 | yes |
| zstd | 4 | 1.840 | 61,396 | 0.3708 | 5 | yes |
| zstd | 5 | 2.092 | 60,869 | 0.3676 | 5 | yes |
| zstd | 6 | 2.494 | 59,979 | 0.3622 | 5 | yes |
| zstd | 7 | 3.020 | 59,158 | 0.3572 | 5 | yes |
| zstd | 8 | 3.734 | 58,671 | 0.3543 | 5 | yes |
| zstd | 9 | 4.246 | 58,430 | 0.3528 | 5 | yes |
| zstd | 10 | 5.154 | 58,290 | 0.3520 | 5 | yes |
| zstd | 11 | 8.503 | 57,983 | 0.3501 | 5 | yes |
| zstd | 12 | 8.670 | 57,969 | 0.3501 | 5 | yes |
| zstd | 13 | 14.565 | 56,943 | 0.3439 | 5 | yes |
| zstd | 14 | 17.676 | 56,556 | 0.3415 | 5 | yes |
| zstd | 15 | 17.868 | 56,517 | 0.3413 | 5 | yes |
| zstd | 16 | 22.886 | 56,330 | 0.3402 | 5 | yes |
| zstd | 17 | 22.898 | 56,330 | 0.3402 | 5 | yes |
| zstd | 18 | 39.577 | 56,259 | 0.3397 | 5 | yes |
| zstd | 19 | 40.156 | 56,259 | 0.3397 | 5 | yes |
| zstd | 20 | 39.655 | 56,259 | 0.3397 | 5 | yes |
| zstd | 21 | 39.512 | 56,259 | 0.3397 | 5 | yes |
| zstd | 22 | 39.459 | 56,259 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.855 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.934 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.078 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.177 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.565 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.050 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.465 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.373 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.380 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.240 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.329 | 29,754 | 0.4063 | 13 | yes |
| brotli | 2 | 0.751 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.864 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.362 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.947 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.109 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.541 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.699 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.490 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 40.972 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 100.380 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.203 | 28,919 | 0.3949 | 16 | yes |
| zstd | 2 | 0.221 | 28,008 | 0.3824 | 11 | yes |
| zstd | 3 | 0.277 | 27,463 | 0.3750 | 10 | yes |
| zstd | 4 | 0.337 | 27,100 | 0.3700 | 20 | yes |
| zstd | 5 | 0.791 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.124 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.341 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.474 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.659 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.977 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.307 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.378 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.260 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.304 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.402 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.679 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.770 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.691 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.379 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.352 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.438 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.629 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.707 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.820 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.963 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 1.096 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.519 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 2.363 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 3.730 | 22,565 | 0.2498 | 8 | yes |
| gzip | 8 | 9.146 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 9.229 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.200 | 27,781 | 0.3075 | 12 | yes |
| brotli | 1 | 0.363 | 25,973 | 0.2875 | 19 | yes |
| brotli | 2 | 0.744 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.867 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.283 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.864 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 2.119 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.554 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.931 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 5.801 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 36.331 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 106.883 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.217 | 24,608 | 0.2724 | 13 | yes |
| zstd | 2 | 0.253 | 24,387 | 0.2700 | 25 | yes |
| zstd | 3 | 0.276 | 24,157 | 0.2674 | 13 | yes |
| zstd | 4 | 0.334 | 24,076 | 0.2665 | 25 | no |
| zstd | 5 | 0.786 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 1.143 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.403 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.592 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.951 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.602 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.711 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.993 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 5.968 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 8.192 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 9.743 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 13.449 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 18.112 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 27.756 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 27.651 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 32.355 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 47.535 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 55.179 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.183 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.257 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.472 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.752 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.280 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.165 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.919 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.350 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.398 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.414 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.661 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.219 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.462 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.093 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.037 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.396 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.764 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.311 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 7.306 | 26,569 | 0.1145 | 8 | yes |
| brotli | 10 | 101.252 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 304.743 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.439 | 35,549 | 0.1532 | 19 | yes |
| zstd | 2 | 0.409 | 34,301 | 0.1478 | 25 | no |
| zstd | 3 | 0.576 | 34,393 | 0.1482 | 10 | yes |
| zstd | 4 | 1.460 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.740 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.974 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.190 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.720 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.229 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.996 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.155 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.999 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.455 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.215 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.087 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.621 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.398 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 73.375 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 81.849 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 84.684 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 84.802 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 83.896 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,045,192 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 103.257 | 3,776,518 | 0.2216 | 5 | yes |
| gzip | 2 | 113.494 | 3,627,753 | 0.2128 | 5 | yes |
| gzip | 3 | 141.001 | 3,507,453 | 0.2058 | 5 | yes |
| gzip | 4 | 154.779 | 3,379,888 | 0.1983 | 5 | yes |
| gzip | 5 | 206.256 | 3,159,182 | 0.1853 | 5 | yes |
| gzip | 6 | 318.464 | 3,090,847 | 0.1813 | 5 | yes |
| gzip | 7 | 440.522 | 3,024,822 | 0.1775 | 5 | yes |
| gzip | 8 | 1273.293 | 2,957,000 | 0.1735 | 5 | yes |
| gzip | 9 | 1334.569 | 2,956,204 | 0.1734 | 5 | yes |
| brotli | 0 | 45.370 | 4,175,487 | 0.2450 | 5 | yes |
| brotli | 1 | 68.900 | 3,718,326 | 0.2181 | 5 | yes |
| brotli | 2 | 115.370 | 3,424,305 | 0.2009 | 5 | yes |
| brotli | 3 | 134.240 | 3,367,979 | 0.1976 | 5 | yes |
| brotli | 4 | 195.582 | 3,295,114 | 0.1933 | 5 | yes |
| brotli | 5 | 314.422 | 2,938,968 | 0.1724 | 5 | yes |
| brotli | 6 | 373.606 | 2,906,886 | 0.1705 | 5 | yes |
| brotli | 7 | 570.571 | 2,880,272 | 0.1690 | 5 | yes |
| brotli | 8 | 724.886 | 2,860,897 | 0.1678 | 6 | yes |
| brotli | 9 | 1017.993 | 2,849,681 | 0.1672 | 5 | yes |
| brotli | 10 | 11300.529 | 2,442,746 | 0.1433 | 5 | yes |
| brotli | 11 | 28977.460 | 2,324,312 | 0.1364 | 5 | yes |
| zstd | 1 | 44.551 | 3,525,070 | 0.2068 | 5 | yes |
| zstd | 2 | 55.784 | 3,602,765 | 0.2114 | 5 | yes |
| zstd | 3 | 67.140 | 3,528,707 | 0.2070 | 5 | yes |
| zstd | 4 | 73.021 | 3,523,547 | 0.2067 | 5 | yes |
| zstd | 5 | 138.888 | 3,306,721 | 0.1940 | 5 | yes |
| zstd | 6 | 200.870 | 3,085,317 | 0.1810 | 5 | yes |
| zstd | 7 | 231.861 | 3,046,804 | 0.1787 | 5 | yes |
| zstd | 8 | 301.218 | 2,943,521 | 0.1727 | 5 | yes |
| zstd | 9 | 328.568 | 2,954,143 | 0.1733 | 5 | yes |
| zstd | 10 | 412.795 | 2,917,471 | 0.1712 | 5 | yes |
| zstd | 11 | 611.851 | 2,889,922 | 0.1695 | 6 | yes |
| zstd | 12 | 666.358 | 2,889,906 | 0.1695 | 5 | yes |
| zstd | 13 | 879.436 | 2,866,998 | 0.1682 | 7 | yes |
| zstd | 14 | 1066.561 | 2,852,567 | 0.1674 | 5 | yes |
| zstd | 15 | 1406.994 | 2,848,994 | 0.1671 | 5 | yes |
| zstd | 16 | 2915.811 | 2,661,004 | 0.1561 | 5 | yes |
| zstd | 17 | 3892.909 | 2,568,659 | 0.1507 | 5 | yes |
| zstd | 18 | 5788.268 | 2,549,776 | 0.1496 | 5 | yes |
| zstd | 19 | 6369.702 | 2,542,941 | 0.1492 | 5 | yes |
| zstd | 20 | 6460.720 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 21 | 6493.867 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 22 | 6724.568 | 2,536,119 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.621 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.813 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.498 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.262 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 26.726 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 31.762 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 33.755 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.733 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 38.269 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.208 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.698 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.436 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.777 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.473 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.573 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.240 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 46.962 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 54.209 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 70.318 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 971.300 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2082.762 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.217 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.114 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.559 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.505 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.640 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.479 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.635 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.226 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.454 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.246 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.852 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.774 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 53.416 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 54.785 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 55.343 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 100.591 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 124.196 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 154.461 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 171.003 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 171.645 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 170.664 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 173.464 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.101 | 5,565 | 0.2841 | 9 | yes |
| gzip | 2 | 0.092 | 5,486 | 0.2801 | 25 | no |
| gzip | 3 | 0.104 | 5,419 | 0.2767 | 24 | yes |
| gzip | 4 | 0.125 | 5,202 | 0.2656 | 25 | no |
| gzip | 5 | 0.170 | 4,958 | 0.2531 | 25 | no |
| gzip | 6 | 0.230 | 4,947 | 0.2526 | 25 | no |
| gzip | 7 | 0.510 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.703 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.686 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.059 | 6,082 | 0.3105 | 17 | yes |
| brotli | 1 | 0.079 | 5,794 | 0.2958 | 12 | yes |
| brotli | 2 | 0.105 | 5,002 | 0.2554 | 25 | no |
| brotli | 3 | 0.132 | 4,986 | 0.2546 | 25 | no |
| brotli | 4 | 0.209 | 4,954 | 0.2529 | 19 | yes |
| brotli | 5 | 0.452 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.454 | 4,630 | 0.2364 | 20 | yes |
| brotli | 7 | 0.579 | 4,622 | 0.2360 | 6 | yes |
| brotli | 8 | 0.601 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 2.581 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 7.595 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 22.555 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.055 | 5,441 | 0.2778 | 9 | yes |
| zstd | 2 | 0.058 | 5,242 | 0.2676 | 13 | yes |
| zstd | 3 | 0.071 | 5,234 | 0.2672 | 9 | yes |
| zstd | 4 | 0.074 | 5,212 | 0.2661 | 8 | yes |
| zstd | 5 | 0.141 | 5,133 | 0.2621 | 9 | yes |
| zstd | 6 | 0.197 | 4,853 | 0.2478 | 12 | yes |
| zstd | 7 | 0.228 | 4,757 | 0.2429 | 12 | yes |
| zstd | 8 | 0.255 | 4,750 | 0.2425 | 14 | yes |
| zstd | 9 | 0.351 | 4,744 | 0.2422 | 9 | yes |
| zstd | 10 | 0.442 | 4,746 | 0.2423 | 7 | yes |
| zstd | 11 | 0.600 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.612 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.968 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.759 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.833 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.558 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.561 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.543 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 5.009 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.048 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 5.022 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.010 | 4,415 | 0.2254 | 5 | yes |
