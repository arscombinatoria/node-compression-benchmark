# Node Compression Benchmark

Last updated: 2026-05-06T22:48:12.243Z

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
| gzip | 1 | 1.009 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.091 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.179 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.329 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.761 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.100 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.336 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.756 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.753 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.372 | 33,111 | 0.4205 | 6 | yes |
| brotli | 1 | 0.793 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.839 | 29,394 | 0.3733 | 17 | yes |
| brotli | 3 | 0.976 | 29,072 | 0.3692 | 12 | yes |
| brotli | 4 | 1.455 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.042 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.263 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.816 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.696 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 5.271 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 36.634 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 101.006 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.302 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.358 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.347 | 29,214 | 0.3710 | 25 | no |
| zstd | 4 | 1.164 | 29,108 | 0.3696 | 9 | yes |
| zstd | 5 | 1.363 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.690 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.948 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 2.113 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.255 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.533 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.266 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.590 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.448 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.783 | 26,432 | 0.3357 | 10 | yes |
| zstd | 15 | 9.006 | 26,420 | 0.3355 | 6 | yes |
| zstd | 16 | 10.454 | 26,336 | 0.3344 | 6 | yes |
| zstd | 17 | 11.278 | 26,336 | 0.3344 | 6 | yes |
| zstd | 18 | 11.241 | 26,336 | 0.3344 | 6 | yes |
| zstd | 19 | 20.927 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 20.803 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 20.751 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 20.972 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.351 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 97.751 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 103.926 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 116.962 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 136.680 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 154.000 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 163.361 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 182.814 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 197.062 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.592 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.560 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 52.250 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 65.001 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 96.366 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 130.102 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 147.025 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 411.758 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 586.005 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 754.405 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6775.999 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13937.043 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.838 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.217 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 38.752 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 46.409 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 69.084 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 81.495 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 89.861 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 104.849 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 107.365 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 140.701 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 182.767 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 219.087 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 481.672 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 529.355 | 2,852,038 | 0.5211 | 6 | yes |
| zstd | 15 | 636.973 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 820.145 | 2,803,911 | 0.5123 | 6 | yes |
| zstd | 17 | 996.313 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1187.761 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1317.015 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1367.407 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1406.555 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1332.947 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.660 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.693 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.681 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 14.626 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 14.645 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 14.482 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 14.478 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 14.471 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 14.449 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.254 | 613,595 | 0.9981 | 25 | no |
| brotli | 1 | 0.225 | 614,785 | 1.0000 | 23 | yes |
| brotli | 2 | 0.575 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.787 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.043 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.558 | 614,785 | 1.0000 | 13 | yes |
| brotli | 6 | 1.405 | 614,785 | 1.0000 | 5 | yes |
| brotli | 7 | 2.018 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.367 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 3.165 | 614,785 | 1.0000 | 7 | yes |
| brotli | 10 | 116.817 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 267.358 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.354 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.346 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.372 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.432 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.596 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.576 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.681 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.644 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.839 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.891 | 614,804 | 1.0000 | 25 | no |
| zstd | 11 | 1.331 | 614,804 | 1.0000 | 9 | yes |
| zstd | 12 | 1.721 | 614,804 | 1.0000 | 25 | no |
| zstd | 13 | 5.279 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 5.103 | 612,619 | 0.9965 | 5 | yes |
| zstd | 15 | 4.602 | 612,619 | 0.9965 | 25 | no |
| zstd | 16 | 18.154 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 19.105 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 24.156 | 612,519 | 0.9963 | 11 | yes |
| zstd | 19 | 27.425 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 26.373 | 612,518 | 0.9963 | 6 | yes |
| zstd | 21 | 28.493 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 26.566 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,136 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.262 | 144,622 | 0.2963 | 5 | yes |
| gzip | 2 | 4.714 | 137,864 | 0.2824 | 5 | yes |
| gzip | 3 | 6.136 | 133,234 | 0.2729 | 5 | yes |
| gzip | 4 | 6.319 | 125,058 | 0.2562 | 5 | yes |
| gzip | 5 | 9.098 | 120,452 | 0.2468 | 5 | yes |
| gzip | 6 | 13.490 | 118,735 | 0.2432 | 5 | yes |
| gzip | 7 | 17.229 | 118,276 | 0.2423 | 5 | yes |
| gzip | 8 | 32.387 | 118,010 | 0.2418 | 5 | yes |
| gzip | 9 | 50.073 | 117,938 | 0.2416 | 5 | yes |
| brotli | 0 | 1.546 | 148,884 | 0.3050 | 5 | yes |
| brotli | 1 | 2.254 | 136,768 | 0.2802 | 5 | yes |
| brotli | 2 | 4.019 | 128,603 | 0.2635 | 5 | yes |
| brotli | 3 | 4.659 | 125,978 | 0.2581 | 5 | yes |
| brotli | 4 | 6.670 | 122,064 | 0.2501 | 5 | yes |
| brotli | 5 | 10.153 | 112,164 | 0.2298 | 5 | yes |
| brotli | 6 | 11.729 | 109,514 | 0.2244 | 5 | yes |
| brotli | 7 | 14.399 | 107,575 | 0.2204 | 5 | yes |
| brotli | 8 | 17.066 | 106,560 | 0.2183 | 5 | yes |
| brotli | 9 | 21.758 | 105,642 | 0.2164 | 5 | yes |
| brotli | 10 | 291.881 | 98,169 | 0.2011 | 5 | yes |
| brotli | 11 | 741.089 | 96,068 | 0.1968 | 5 | yes |
| zstd | 1 | 1.787 | 137,483 | 0.2816 | 5 | yes |
| zstd | 2 | 1.937 | 133,245 | 0.2730 | 5 | yes |
| zstd | 3 | 2.251 | 125,682 | 0.2575 | 5 | yes |
| zstd | 4 | 2.439 | 125,469 | 0.2570 | 5 | yes |
| zstd | 5 | 4.640 | 116,807 | 0.2393 | 5 | yes |
| zstd | 6 | 6.280 | 112,937 | 0.2314 | 5 | yes |
| zstd | 7 | 7.050 | 111,368 | 0.2281 | 5 | yes |
| zstd | 8 | 8.850 | 110,586 | 0.2265 | 5 | yes |
| zstd | 9 | 8.931 | 110,586 | 0.2265 | 5 | yes |
| zstd | 10 | 10.800 | 109,587 | 0.2245 | 5 | yes |
| zstd | 11 | 13.811 | 108,983 | 0.2233 | 5 | yes |
| zstd | 12 | 13.979 | 108,983 | 0.2233 | 5 | yes |
| zstd | 13 | 27.668 | 107,822 | 0.2209 | 5 | yes |
| zstd | 14 | 34.111 | 107,218 | 0.2196 | 5 | yes |
| zstd | 15 | 37.289 | 107,140 | 0.2195 | 5 | yes |
| zstd | 16 | 64.838 | 101,551 | 0.2080 | 5 | yes |
| zstd | 17 | 71.976 | 100,673 | 0.2062 | 5 | yes |
| zstd | 18 | 102.392 | 99,877 | 0.2046 | 5 | yes |
| zstd | 19 | 132.775 | 99,786 | 0.2044 | 5 | yes |
| zstd | 20 | 131.595 | 99,786 | 0.2044 | 5 | yes |
| zstd | 21 | 133.285 | 99,782 | 0.2044 | 5 | yes |
| zstd | 22 | 133.048 | 99,782 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.070 | 4,987 | 0.2897 | 22 | yes |
| gzip | 2 | 0.072 | 4,874 | 0.2831 | 25 | yes |
| gzip | 3 | 0.087 | 4,806 | 0.2791 | 14 | yes |
| gzip | 4 | 0.112 | 4,530 | 0.2631 | 23 | yes |
| gzip | 5 | 0.141 | 4,441 | 0.2579 | 25 | no |
| gzip | 6 | 0.170 | 4,425 | 0.2570 | 19 | yes |
| gzip | 7 | 0.204 | 4,418 | 0.2566 | 17 | yes |
| gzip | 8 | 0.393 | 4,419 | 0.2567 | 16 | yes |
| gzip | 9 | 0.432 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.053 | 5,235 | 0.3041 | 14 | yes |
| brotli | 1 | 0.068 | 5,134 | 0.2982 | 12 | yes |
| brotli | 2 | 0.097 | 4,741 | 0.2754 | 18 | yes |
| brotli | 3 | 0.116 | 4,650 | 0.2701 | 14 | yes |
| brotli | 4 | 0.191 | 4,555 | 0.2646 | 25 | no |
| brotli | 5 | 0.344 | 4,276 | 0.2484 | 8 | yes |
| brotli | 6 | 0.376 | 4,275 | 0.2483 | 7 | yes |
| brotli | 7 | 0.407 | 4,264 | 0.2477 | 7 | yes |
| brotli | 8 | 0.375 | 4,257 | 0.2473 | 10 | yes |
| brotli | 9 | 0.495 | 4,244 | 0.2465 | 8 | yes |
| brotli | 10 | 7.276 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.419 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.058 | 4,923 | 0.2859 | 5 | yes |
| zstd | 2 | 0.076 | 4,868 | 0.2827 | 5 | yes |
| zstd | 3 | 0.076 | 4,717 | 0.2740 | 8 | yes |
| zstd | 4 | 0.078 | 4,679 | 0.2718 | 21 | yes |
| zstd | 5 | 0.143 | 4,519 | 0.2625 | 9 | yes |
| zstd | 6 | 0.173 | 4,437 | 0.2577 | 16 | yes |
| zstd | 7 | 0.208 | 4,437 | 0.2577 | 9 | yes |
| zstd | 8 | 0.215 | 4,426 | 0.2571 | 12 | yes |
| zstd | 9 | 0.246 | 4,420 | 0.2567 | 21 | yes |
| zstd | 10 | 0.345 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.644 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.657 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.934 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.440 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.494 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.202 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.323 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.321 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.539 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.580 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.535 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.520 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.049 | 3,217 | 0.4493 | 25 | no |
| gzip | 2 | 0.049 | 3,179 | 0.4440 | 24 | yes |
| gzip | 3 | 0.051 | 3,150 | 0.4399 | 13 | yes |
| gzip | 4 | 0.060 | 3,092 | 0.4318 | 11 | yes |
| gzip | 5 | 0.117 | 3,047 | 0.4256 | 5 | yes |
| gzip | 6 | 0.119 | 3,041 | 0.4247 | 9 | yes |
| gzip | 7 | 0.120 | 3,039 | 0.4244 | 5 | yes |
| gzip | 8 | 0.078 | 3,039 | 0.4244 | 25 | no |
| gzip | 9 | 0.074 | 3,039 | 0.4244 | 12 | yes |
| brotli | 0 | 0.031 | 3,544 | 0.4950 | 25 | no |
| brotli | 1 | 0.040 | 3,378 | 0.4718 | 8 | yes |
| brotli | 2 | 0.055 | 3,258 | 0.4550 | 16 | yes |
| brotli | 3 | 0.072 | 3,207 | 0.4479 | 12 | yes |
| brotli | 4 | 0.125 | 3,138 | 0.4383 | 20 | yes |
| brotli | 5 | 0.180 | 2,961 | 0.4135 | 25 | no |
| brotli | 6 | 0.171 | 2,950 | 0.4120 | 19 | yes |
| brotli | 7 | 0.181 | 2,942 | 0.4109 | 16 | yes |
| brotli | 8 | 0.200 | 2,942 | 0.4109 | 9 | yes |
| brotli | 9 | 0.207 | 2,943 | 0.4110 | 25 | no |
| brotli | 10 | 3.444 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 8.247 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.035 | 3,250 | 0.4539 | 13 | yes |
| zstd | 2 | 0.035 | 3,196 | 0.4464 | 16 | yes |
| zstd | 3 | 0.044 | 3,171 | 0.4429 | 6 | yes |
| zstd | 4 | 0.064 | 3,098 | 0.4327 | 13 | yes |
| zstd | 5 | 0.074 | 3,077 | 0.4297 | 19 | yes |
| zstd | 6 | 0.088 | 3,055 | 0.4267 | 18 | yes |
| zstd | 7 | 0.100 | 3,050 | 0.4260 | 7 | yes |
| zstd | 8 | 0.100 | 3,050 | 0.4260 | 5 | yes |
| zstd | 9 | 0.122 | 3,050 | 0.4260 | 20 | yes |
| zstd | 10 | 0.121 | 3,050 | 0.4260 | 5 | yes |
| zstd | 11 | 0.226 | 3,041 | 0.4247 | 21 | yes |
| zstd | 12 | 0.400 | 3,009 | 0.4203 | 13 | yes |
| zstd | 13 | 0.584 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.587 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.557 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.049 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.068 | 2,991 | 0.4177 | 9 | yes |
| zstd | 18 | 1.119 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.089 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.059 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.076 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.038 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,101 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.053 | 66,867 | 0.4075 | 5 | yes |
| gzip | 2 | 2.248 | 65,284 | 0.3978 | 5 | yes |
| gzip | 3 | 2.553 | 64,273 | 0.3917 | 5 | yes |
| gzip | 4 | 2.848 | 61,944 | 0.3775 | 5 | yes |
| gzip | 5 | 3.907 | 60,295 | 0.3674 | 5 | yes |
| gzip | 6 | 4.914 | 60,024 | 0.3658 | 5 | yes |
| gzip | 7 | 5.368 | 59,987 | 0.3655 | 5 | yes |
| gzip | 8 | 5.801 | 59,968 | 0.3654 | 5 | yes |
| gzip | 9 | 5.867 | 59,968 | 0.3654 | 5 | yes |
| brotli | 0 | 0.572 | 71,266 | 0.4343 | 13 | yes |
| brotli | 1 | 0.938 | 68,223 | 0.4157 | 5 | yes |
| brotli | 2 | 1.747 | 62,973 | 0.3837 | 5 | yes |
| brotli | 3 | 2.057 | 62,342 | 0.3799 | 5 | yes |
| brotli | 4 | 3.130 | 61,240 | 0.3732 | 5 | yes |
| brotli | 5 | 4.520 | 57,877 | 0.3527 | 5 | yes |
| brotli | 6 | 5.122 | 57,538 | 0.3506 | 5 | yes |
| brotli | 7 | 6.144 | 57,245 | 0.3488 | 5 | yes |
| brotli | 8 | 6.500 | 57,160 | 0.3483 | 5 | yes |
| brotli | 9 | 7.445 | 57,088 | 0.3479 | 5 | yes |
| brotli | 10 | 107.578 | 54,389 | 0.3314 | 5 | yes |
| brotli | 11 | 261.441 | 53,368 | 0.3252 | 5 | yes |
| zstd | 1 | 0.659 | 66,221 | 0.4035 | 9 | yes |
| zstd | 2 | 0.805 | 63,208 | 0.3852 | 5 | yes |
| zstd | 3 | 1.026 | 62,693 | 0.3820 | 5 | yes |
| zstd | 4 | 1.870 | 60,843 | 0.3708 | 5 | yes |
| zstd | 5 | 2.066 | 60,346 | 0.3677 | 5 | yes |
| zstd | 6 | 2.523 | 59,421 | 0.3621 | 5 | yes |
| zstd | 7 | 3.028 | 58,638 | 0.3573 | 5 | yes |
| zstd | 8 | 3.739 | 58,163 | 0.3544 | 5 | yes |
| zstd | 9 | 4.220 | 57,917 | 0.3529 | 5 | yes |
| zstd | 10 | 5.078 | 57,792 | 0.3522 | 5 | yes |
| zstd | 11 | 8.673 | 57,490 | 0.3503 | 5 | yes |
| zstd | 12 | 9.035 | 57,475 | 0.3502 | 5 | yes |
| zstd | 13 | 15.024 | 56,464 | 0.3441 | 5 | yes |
| zstd | 14 | 17.707 | 56,028 | 0.3414 | 5 | yes |
| zstd | 15 | 17.904 | 56,011 | 0.3413 | 5 | yes |
| zstd | 16 | 23.148 | 55,838 | 0.3403 | 5 | yes |
| zstd | 17 | 23.266 | 55,838 | 0.3403 | 5 | yes |
| zstd | 18 | 39.562 | 55,766 | 0.3398 | 5 | yes |
| zstd | 19 | 39.371 | 55,766 | 0.3398 | 5 | yes |
| zstd | 20 | 39.576 | 55,766 | 0.3398 | 5 | yes |
| zstd | 21 | 39.609 | 55,766 | 0.3398 | 5 | yes |
| zstd | 22 | 39.212 | 55,766 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.848 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.920 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.076 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.192 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.579 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.051 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.430 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.323 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.348 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.201 | 30,978 | 0.4230 | 12 | yes |
| brotli | 1 | 0.395 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.723 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.863 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.362 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.957 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.123 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.500 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.690 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.172 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 42.608 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 101.319 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.203 | 28,919 | 0.3949 | 12 | yes |
| zstd | 2 | 0.229 | 28,008 | 0.3824 | 9 | yes |
| zstd | 3 | 0.289 | 27,463 | 0.3750 | 12 | yes |
| zstd | 4 | 0.453 | 27,100 | 0.3700 | 23 | yes |
| zstd | 5 | 0.815 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.117 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.340 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.470 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.662 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.949 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.228 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.425 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.277 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.414 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.704 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.971 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.941 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.902 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.941 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.723 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.708 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.688 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.644 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.730 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.883 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.992 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.397 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 2.175 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.941 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 8.727 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 8.816 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.179 | 25,901 | 0.3420 | 17 | yes |
| brotli | 1 | 0.310 | 23,906 | 0.3156 | 21 | yes |
| brotli | 2 | 0.652 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.821 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.196 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.728 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.966 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.321 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.697 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.502 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 31.156 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 90.070 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.268 | 22,639 | 0.2989 | 5 | yes |
| zstd | 2 | 0.230 | 22,433 | 0.2962 | 20 | yes |
| zstd | 3 | 0.270 | 22,208 | 0.2932 | 11 | yes |
| zstd | 4 | 0.399 | 22,181 | 0.2929 | 21 | yes |
| zstd | 5 | 0.731 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.047 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.274 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.473 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.750 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.360 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.339 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.376 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.069 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.005 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.016 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.673 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.062 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.743 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 20.056 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 23.938 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.614 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 45.636 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.195 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.265 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.485 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.760 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.284 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.188 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.942 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.367 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.406 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.325 | 43,268 | 0.1864 | 15 | yes |
| brotli | 1 | 0.636 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.217 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.450 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.157 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.074 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.402 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.773 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.333 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.147 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 103.919 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 305.760 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.392 | 35,549 | 0.1532 | 19 | yes |
| zstd | 2 | 0.516 | 34,301 | 0.1478 | 10 | yes |
| zstd | 3 | 0.588 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.502 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.741 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.000 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.239 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.775 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.322 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.037 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.278 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.069 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.727 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.256 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.197 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.134 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 52.964 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 72.922 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 81.327 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 84.051 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 84.098 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 84.282 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 99.346 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 100.235 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 121.907 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 142.718 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 174.094 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 230.207 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 361.592 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 1040.945 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1400.022 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 44.721 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 64.333 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 119.785 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 136.358 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 182.062 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 301.245 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 372.742 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 526.623 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 668.425 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 913.854 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 14062.841 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 38516.260 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.950 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 55.119 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 68.633 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 73.116 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 148.448 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 206.944 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 239.847 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 302.146 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 316.937 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 432.601 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 619.298 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 642.811 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 912.962 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1175.477 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1492.373 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3628.006 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 4328.810 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5783.415 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9345.126 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9503.268 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9550.320 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9853.537 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.645 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.814 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.478 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.381 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 26.964 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 32.064 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 34.133 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.582 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.704 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.097 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.567 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.408 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.707 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.667 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.455 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.659 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 46.242 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 55.199 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 69.119 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 978.954 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2065.993 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.264 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.104 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.566 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.678 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.804 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.637 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.774 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.241 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.739 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.459 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 27.701 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 27.180 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 54.318 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 56.206 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 57.092 | 383,877 | 0.4465 | 8 | yes |
| zstd | 16 | 96.475 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 124.134 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 158.402 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 177.162 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 180.869 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 181.535 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 171.459 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.091 | 5,506 | 0.2826 | 9 | yes |
| gzip | 2 | 0.092 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.094 | 5,356 | 0.2749 | 25 | yes |
| gzip | 4 | 0.120 | 5,145 | 0.2641 | 25 | yes |
| gzip | 5 | 0.168 | 4,896 | 0.2513 | 25 | no |
| gzip | 6 | 0.245 | 4,884 | 0.2507 | 22 | yes |
| gzip | 7 | 0.475 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.699 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.692 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.056 | 6,028 | 0.3094 | 9 | yes |
| brotli | 1 | 0.078 | 5,737 | 0.2945 | 9 | yes |
| brotli | 2 | 0.104 | 4,944 | 0.2538 | 25 | no |
| brotli | 3 | 0.126 | 4,930 | 0.2531 | 23 | yes |
| brotli | 4 | 0.210 | 4,898 | 0.2514 | 25 | no |
| brotli | 5 | 0.426 | 4,581 | 0.2352 | 7 | yes |
| brotli | 6 | 0.453 | 4,570 | 0.2346 | 8 | yes |
| brotli | 7 | 0.582 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.609 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.751 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.627 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.493 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.056 | 5,379 | 0.2761 | 20 | yes |
| zstd | 2 | 0.061 | 5,176 | 0.2657 | 12 | yes |
| zstd | 3 | 0.079 | 5,169 | 0.2653 | 11 | yes |
| zstd | 4 | 0.095 | 5,154 | 0.2646 | 5 | yes |
| zstd | 5 | 0.148 | 5,074 | 0.2605 | 9 | yes |
| zstd | 6 | 0.191 | 4,797 | 0.2463 | 14 | yes |
| zstd | 7 | 0.231 | 4,702 | 0.2414 | 12 | yes |
| zstd | 8 | 0.285 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.343 | 4,690 | 0.2408 | 12 | yes |
| zstd | 10 | 0.479 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.605 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.623 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.994 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.742 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.844 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.543 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.559 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.573 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.974 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 4.980 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.025 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.029 | 4,348 | 0.2232 | 5 | yes |
