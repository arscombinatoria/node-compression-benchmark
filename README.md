# Node Compression Benchmark

Last updated: 2026-07-14T21:18:32.253Z

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
| gzip | 1 | 1.066 | 31,033 | 0.3941 | 9 | yes |
| gzip | 2 | 1.075 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.205 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.317 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 2.277 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.098 | 27,584 | 0.3503 | 8 | yes |
| gzip | 7 | 2.341 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.736 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.723 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.360 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.807 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.915 | 29,394 | 0.3733 | 5 | yes |
| brotli | 3 | 1.054 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.553 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.232 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.320 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 4.249 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.953 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.728 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 35.261 | 25,340 | 0.3218 | 8 | yes |
| brotli | 11 | 100.384 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.298 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.253 | 30,069 | 0.3818 | 25 | no |
| zstd | 3 | 0.308 | 29,214 | 0.3710 | 13 | yes |
| zstd | 4 | 0.508 | 29,108 | 0.3696 | 9 | yes |
| zstd | 5 | 0.892 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.255 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.529 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.637 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.849 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.071 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.531 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.612 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.373 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.531 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.598 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 9.979 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.018 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 9.978 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.494 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.533 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.512 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.554 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 94.420 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 100.168 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 102.774 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 117.769 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 133.355 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 150.572 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 161.119 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 181.687 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 194.327 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.637 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 30.240 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.631 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.668 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 92.800 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 126.189 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 147.460 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 422.163 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 579.577 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 740.604 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6633.265 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13941.317 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.865 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.313 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 35.966 | 3,139,155 | 0.5736 | 6 | yes |
| zstd | 4 | 43.062 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 69.852 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 82.017 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 90.309 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 104.871 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 112.061 | 2,901,056 | 0.5301 | 11 | yes |
| zstd | 10 | 149.085 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 213.511 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 221.571 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 485.438 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 554.468 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 640.360 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 863.597 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 1025.671 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1350.869 | 2,713,297 | 0.4958 | 8 | yes |
| zstd | 19 | 1381.664 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1333.771 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1363.542 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1348.733 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.718 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 13.691 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 13.738 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 14.302 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 14.299 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 14.242 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 14.281 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 14.230 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 14.363 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.258 | 613,595 | 0.9981 | 5 | yes |
| brotli | 1 | 0.210 | 614,785 | 1.0000 | 16 | yes |
| brotli | 2 | 0.551 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.740 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 0.902 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.481 | 614,785 | 1.0000 | 21 | yes |
| brotli | 6 | 1.629 | 614,785 | 1.0000 | 25 | no |
| brotli | 7 | 1.984 | 614,785 | 1.0000 | 9 | yes |
| brotli | 8 | 2.042 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 4.792 | 614,785 | 1.0000 | 11 | yes |
| brotli | 10 | 116.724 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 265.704 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.285 | 614,805 | 1.0000 | 19 | yes |
| zstd | 2 | 0.305 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.310 | 614,804 | 1.0000 | 18 | yes |
| zstd | 4 | 0.325 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.481 | 614,804 | 1.0000 | 8 | yes |
| zstd | 6 | 0.492 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.516 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.502 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.597 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 0.602 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.606 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.630 | 614,804 | 1.0000 | 14 | yes |
| zstd | 13 | 2.391 | 612,619 | 0.9965 | 25 | no |
| zstd | 14 | 2.284 | 612,619 | 0.9965 | 9 | yes |
| zstd | 15 | 2.332 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 14.331 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 14.764 | 612,516 | 0.9963 | 7 | yes |
| zstd | 18 | 21.250 | 612,519 | 0.9963 | 8 | yes |
| zstd | 19 | 25.086 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 26.086 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 28.698 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 26.690 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,236 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.264 | 145,182 | 0.2961 | 5 | yes |
| gzip | 2 | 4.676 | 138,423 | 0.2824 | 5 | yes |
| gzip | 3 | 6.190 | 133,882 | 0.2731 | 5 | yes |
| gzip | 4 | 6.242 | 125,608 | 0.2562 | 5 | yes |
| gzip | 5 | 9.053 | 120,963 | 0.2467 | 5 | yes |
| gzip | 6 | 13.421 | 119,255 | 0.2433 | 5 | yes |
| gzip | 7 | 17.143 | 118,789 | 0.2423 | 5 | yes |
| gzip | 8 | 32.394 | 118,515 | 0.2418 | 5 | yes |
| gzip | 9 | 50.093 | 118,446 | 0.2416 | 5 | yes |
| brotli | 0 | 1.581 | 149,404 | 0.3048 | 5 | yes |
| brotli | 1 | 2.310 | 137,364 | 0.2802 | 5 | yes |
| brotli | 2 | 4.027 | 129,155 | 0.2635 | 5 | yes |
| brotli | 3 | 4.657 | 126,568 | 0.2582 | 5 | yes |
| brotli | 4 | 6.487 | 122,453 | 0.2498 | 5 | yes |
| brotli | 5 | 9.974 | 112,692 | 0.2299 | 5 | yes |
| brotli | 6 | 11.715 | 110,011 | 0.2244 | 5 | yes |
| brotli | 7 | 14.541 | 108,041 | 0.2204 | 5 | yes |
| brotli | 8 | 17.144 | 107,001 | 0.2183 | 5 | yes |
| brotli | 9 | 23.355 | 106,112 | 0.2165 | 5 | yes |
| brotli | 10 | 289.735 | 98,636 | 0.2012 | 5 | yes |
| brotli | 11 | 766.826 | 96,403 | 0.1966 | 5 | yes |
| zstd | 1 | 1.771 | 138,123 | 0.2817 | 5 | yes |
| zstd | 2 | 1.851 | 133,890 | 0.2731 | 5 | yes |
| zstd | 3 | 2.072 | 126,208 | 0.2574 | 5 | yes |
| zstd | 4 | 2.301 | 126,023 | 0.2571 | 5 | yes |
| zstd | 5 | 4.519 | 117,405 | 0.2395 | 5 | yes |
| zstd | 6 | 6.271 | 113,440 | 0.2314 | 5 | yes |
| zstd | 7 | 7.105 | 111,894 | 0.2282 | 5 | yes |
| zstd | 8 | 8.828 | 111,138 | 0.2267 | 5 | yes |
| zstd | 9 | 8.824 | 111,138 | 0.2267 | 5 | yes |
| zstd | 10 | 10.729 | 110,160 | 0.2247 | 5 | yes |
| zstd | 11 | 13.533 | 109,468 | 0.2233 | 5 | yes |
| zstd | 12 | 13.536 | 109,468 | 0.2233 | 5 | yes |
| zstd | 13 | 27.110 | 108,280 | 0.2209 | 5 | yes |
| zstd | 14 | 33.010 | 107,640 | 0.2196 | 5 | yes |
| zstd | 15 | 37.621 | 107,626 | 0.2195 | 5 | yes |
| zstd | 16 | 65.356 | 102,010 | 0.2081 | 5 | yes |
| zstd | 17 | 72.069 | 101,107 | 0.2062 | 5 | yes |
| zstd | 18 | 103.212 | 100,287 | 0.2046 | 5 | yes |
| zstd | 19 | 133.733 | 100,211 | 0.2044 | 5 | yes |
| zstd | 20 | 133.424 | 100,211 | 0.2044 | 5 | yes |
| zstd | 21 | 133.280 | 100,213 | 0.2044 | 5 | yes |
| zstd | 22 | 132.965 | 100,213 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.076 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.074 | 4,874 | 0.2831 | 21 | yes |
| gzip | 3 | 0.084 | 4,806 | 0.2791 | 19 | yes |
| gzip | 4 | 0.111 | 4,530 | 0.2631 | 25 | no |
| gzip | 5 | 0.136 | 4,441 | 0.2579 | 25 | yes |
| gzip | 6 | 0.175 | 4,425 | 0.2570 | 20 | yes |
| gzip | 7 | 0.231 | 4,418 | 0.2566 | 25 | no |
| gzip | 8 | 0.392 | 4,419 | 0.2567 | 15 | yes |
| gzip | 9 | 0.453 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.055 | 5,235 | 0.3041 | 9 | yes |
| brotli | 1 | 0.072 | 5,134 | 0.2982 | 11 | yes |
| brotli | 2 | 0.098 | 4,741 | 0.2754 | 18 | yes |
| brotli | 3 | 0.119 | 4,650 | 0.2701 | 25 | yes |
| brotli | 4 | 0.185 | 4,555 | 0.2646 | 20 | yes |
| brotli | 5 | 0.344 | 4,276 | 0.2484 | 6 | yes |
| brotli | 6 | 0.322 | 4,275 | 0.2483 | 17 | yes |
| brotli | 7 | 0.381 | 4,264 | 0.2477 | 12 | yes |
| brotli | 8 | 0.421 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 1.824 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.059 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.229 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.056 | 4,923 | 0.2859 | 13 | yes |
| zstd | 2 | 0.057 | 4,868 | 0.2827 | 25 | yes |
| zstd | 3 | 0.067 | 4,717 | 0.2740 | 15 | yes |
| zstd | 4 | 0.070 | 4,679 | 0.2718 | 13 | yes |
| zstd | 5 | 0.134 | 4,519 | 0.2625 | 9 | yes |
| zstd | 6 | 0.169 | 4,437 | 0.2577 | 15 | yes |
| zstd | 7 | 0.195 | 4,437 | 0.2577 | 12 | yes |
| zstd | 8 | 0.216 | 4,426 | 0.2571 | 9 | yes |
| zstd | 9 | 0.239 | 4,420 | 0.2567 | 20 | yes |
| zstd | 10 | 0.305 | 4,410 | 0.2561 | 21 | yes |
| zstd | 11 | 0.633 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.667 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.926 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.431 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.507 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.195 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.323 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.312 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.571 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.540 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.558 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.547 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.055 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.051 | 3,182 | 0.4444 | 17 | yes |
| gzip | 3 | 0.054 | 3,153 | 0.4403 | 15 | yes |
| gzip | 4 | 0.063 | 3,095 | 0.4322 | 12 | yes |
| gzip | 5 | 0.073 | 3,051 | 0.4261 | 9 | yes |
| gzip | 6 | 0.078 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.087 | 3,042 | 0.4248 | 7 | yes |
| gzip | 8 | 0.078 | 3,042 | 0.4248 | 19 | yes |
| gzip | 9 | 0.079 | 3,042 | 0.4248 | 6 | yes |
| brotli | 0 | 0.032 | 3,549 | 0.4956 | 13 | yes |
| brotli | 1 | 0.044 | 3,381 | 0.4721 | 8 | yes |
| brotli | 2 | 0.061 | 3,263 | 0.4557 | 13 | yes |
| brotli | 3 | 0.076 | 3,216 | 0.4491 | 11 | yes |
| brotli | 4 | 0.128 | 3,147 | 0.4395 | 25 | no |
| brotli | 5 | 0.160 | 2,963 | 0.4138 | 13 | yes |
| brotli | 6 | 0.170 | 2,952 | 0.4122 | 13 | yes |
| brotli | 7 | 0.192 | 2,944 | 0.4111 | 25 | no |
| brotli | 8 | 0.177 | 2,944 | 0.4111 | 7 | yes |
| brotli | 9 | 1.558 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.286 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.143 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.034 | 3,254 | 0.4544 | 8 | yes |
| zstd | 2 | 0.034 | 3,200 | 0.4469 | 10 | yes |
| zstd | 3 | 0.041 | 3,176 | 0.4435 | 5 | yes |
| zstd | 4 | 0.061 | 3,102 | 0.4332 | 9 | yes |
| zstd | 5 | 0.073 | 3,079 | 0.4300 | 11 | yes |
| zstd | 6 | 0.084 | 3,060 | 0.4273 | 12 | yes |
| zstd | 7 | 0.098 | 3,053 | 0.4263 | 8 | yes |
| zstd | 8 | 0.099 | 3,053 | 0.4263 | 11 | yes |
| zstd | 9 | 0.121 | 3,055 | 0.4266 | 20 | yes |
| zstd | 10 | 0.125 | 3,055 | 0.4266 | 25 | no |
| zstd | 11 | 0.227 | 3,044 | 0.4251 | 16 | yes |
| zstd | 12 | 0.441 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.608 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.575 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.603 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.072 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.096 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.063 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.103 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.059 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.083 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.112 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,901 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.068 | 67,260 | 0.4079 | 5 | yes |
| gzip | 2 | 2.242 | 65,641 | 0.3981 | 5 | yes |
| gzip | 3 | 2.581 | 64,609 | 0.3918 | 5 | yes |
| gzip | 4 | 2.868 | 62,246 | 0.3775 | 5 | yes |
| gzip | 5 | 3.932 | 60,620 | 0.3676 | 5 | yes |
| gzip | 6 | 4.890 | 60,347 | 0.3660 | 5 | yes |
| gzip | 7 | 5.337 | 60,306 | 0.3657 | 5 | yes |
| gzip | 8 | 5.780 | 60,288 | 0.3656 | 5 | yes |
| gzip | 9 | 5.800 | 60,288 | 0.3656 | 5 | yes |
| brotli | 0 | 0.590 | 71,542 | 0.4338 | 14 | yes |
| brotli | 1 | 0.970 | 68,608 | 0.4161 | 5 | yes |
| brotli | 2 | 1.774 | 63,268 | 0.3837 | 5 | yes |
| brotli | 3 | 2.088 | 62,714 | 0.3803 | 5 | yes |
| brotli | 4 | 2.952 | 61,492 | 0.3729 | 5 | yes |
| brotli | 5 | 4.592 | 58,210 | 0.3530 | 5 | yes |
| brotli | 6 | 5.115 | 57,839 | 0.3507 | 5 | yes |
| brotli | 7 | 6.088 | 57,540 | 0.3489 | 5 | yes |
| brotli | 8 | 6.565 | 57,465 | 0.3485 | 5 | yes |
| brotli | 9 | 8.997 | 57,391 | 0.3480 | 5 | yes |
| brotli | 10 | 101.296 | 54,557 | 0.3308 | 5 | yes |
| brotli | 11 | 262.980 | 53,655 | 0.3254 | 5 | yes |
| zstd | 1 | 0.627 | 66,585 | 0.4038 | 5 | yes |
| zstd | 2 | 0.820 | 63,595 | 0.3857 | 5 | yes |
| zstd | 3 | 1.035 | 63,025 | 0.3822 | 5 | yes |
| zstd | 4 | 1.851 | 61,203 | 0.3711 | 5 | yes |
| zstd | 5 | 2.054 | 60,668 | 0.3679 | 5 | yes |
| zstd | 6 | 2.522 | 59,769 | 0.3625 | 5 | yes |
| zstd | 7 | 3.000 | 58,956 | 0.3575 | 5 | yes |
| zstd | 8 | 3.725 | 58,460 | 0.3545 | 5 | yes |
| zstd | 9 | 4.206 | 58,213 | 0.3530 | 5 | yes |
| zstd | 10 | 5.104 | 58,073 | 0.3522 | 5 | yes |
| zstd | 11 | 8.830 | 57,781 | 0.3504 | 5 | yes |
| zstd | 12 | 8.919 | 57,769 | 0.3503 | 5 | yes |
| zstd | 13 | 15.353 | 56,782 | 0.3443 | 5 | yes |
| zstd | 14 | 18.451 | 56,326 | 0.3416 | 5 | yes |
| zstd | 15 | 18.509 | 56,318 | 0.3415 | 5 | yes |
| zstd | 16 | 23.083 | 56,132 | 0.3404 | 5 | yes |
| zstd | 17 | 22.906 | 56,132 | 0.3404 | 5 | yes |
| zstd | 18 | 39.006 | 56,049 | 0.3399 | 5 | yes |
| zstd | 19 | 38.895 | 56,049 | 0.3399 | 5 | yes |
| zstd | 20 | 39.102 | 56,049 | 0.3399 | 5 | yes |
| zstd | 21 | 38.807 | 56,049 | 0.3399 | 5 | yes |
| zstd | 22 | 38.839 | 56,049 | 0.3399 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.855 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.933 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.080 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.165 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.560 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.023 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.419 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.336 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.302 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.204 | 30,978 | 0.4230 | 12 | yes |
| brotli | 1 | 0.329 | 29,754 | 0.4063 | 13 | yes |
| brotli | 2 | 0.727 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.857 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.348 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.988 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.114 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.566 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.706 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.684 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 41.316 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 100.435 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.219 | 28,919 | 0.3949 | 25 | no |
| zstd | 2 | 0.228 | 28,008 | 0.3824 | 13 | yes |
| zstd | 3 | 0.277 | 27,463 | 0.3750 | 13 | yes |
| zstd | 4 | 0.449 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.793 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.129 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.321 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.456 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.637 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.939 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.310 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.414 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.332 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.323 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.459 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.671 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.734 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.740 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.498 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.545 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.445 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.378 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,169 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.707 | 25,582 | 0.2837 | 5 | yes |
| gzip | 2 | 0.821 | 25,330 | 0.2809 | 5 | yes |
| gzip | 3 | 0.965 | 25,125 | 0.2786 | 5 | yes |
| gzip | 4 | 1.079 | 23,752 | 0.2634 | 5 | yes |
| gzip | 5 | 1.515 | 22,851 | 0.2534 | 5 | yes |
| gzip | 6 | 2.334 | 22,618 | 0.2508 | 5 | yes |
| gzip | 7 | 3.147 | 22,513 | 0.2497 | 5 | yes |
| gzip | 8 | 9.099 | 22,266 | 0.2469 | 5 | yes |
| gzip | 9 | 9.105 | 22,264 | 0.2469 | 5 | yes |
| brotli | 0 | 0.197 | 27,662 | 0.3068 | 15 | yes |
| brotli | 1 | 0.416 | 25,918 | 0.2874 | 9 | yes |
| brotli | 2 | 0.745 | 23,445 | 0.2600 | 5 | yes |
| brotli | 3 | 0.887 | 23,374 | 0.2592 | 5 | yes |
| brotli | 4 | 1.281 | 22,948 | 0.2545 | 5 | yes |
| brotli | 5 | 1.945 | 21,885 | 0.2427 | 5 | yes |
| brotli | 6 | 2.167 | 21,770 | 0.2414 | 5 | yes |
| brotli | 7 | 2.562 | 21,692 | 0.2406 | 5 | yes |
| brotli | 8 | 2.958 | 21,642 | 0.2400 | 5 | yes |
| brotli | 9 | 5.227 | 21,554 | 0.2390 | 5 | yes |
| brotli | 10 | 37.117 | 18,928 | 0.2099 | 5 | yes |
| brotli | 11 | 107.360 | 18,418 | 0.2043 | 5 | yes |
| zstd | 1 | 0.223 | 24,558 | 0.2724 | 16 | yes |
| zstd | 2 | 0.239 | 24,331 | 0.2698 | 16 | yes |
| zstd | 3 | 0.278 | 24,100 | 0.2673 | 12 | yes |
| zstd | 4 | 0.330 | 24,021 | 0.2664 | 19 | yes |
| zstd | 5 | 0.789 | 23,309 | 0.2585 | 5 | yes |
| zstd | 6 | 1.153 | 22,411 | 0.2485 | 5 | yes |
| zstd | 7 | 1.379 | 21,911 | 0.2430 | 5 | yes |
| zstd | 8 | 1.601 | 21,844 | 0.2423 | 5 | yes |
| zstd | 9 | 1.948 | 21,770 | 0.2414 | 5 | yes |
| zstd | 10 | 2.628 | 21,703 | 0.2407 | 5 | yes |
| zstd | 11 | 3.782 | 21,560 | 0.2391 | 5 | yes |
| zstd | 12 | 5.082 | 21,531 | 0.2388 | 5 | yes |
| zstd | 13 | 5.858 | 21,345 | 0.2367 | 5 | yes |
| zstd | 14 | 8.233 | 20,515 | 0.2275 | 5 | yes |
| zstd | 15 | 9.777 | 20,378 | 0.2260 | 5 | yes |
| zstd | 16 | 13.408 | 20,209 | 0.2241 | 5 | yes |
| zstd | 17 | 17.951 | 20,179 | 0.2238 | 5 | yes |
| zstd | 18 | 27.434 | 20,175 | 0.2237 | 5 | yes |
| zstd | 19 | 27.652 | 20,183 | 0.2238 | 5 | yes |
| zstd | 20 | 32.431 | 20,146 | 0.2234 | 5 | yes |
| zstd | 21 | 47.655 | 20,138 | 0.2233 | 5 | yes |
| zstd | 22 | 54.732 | 20,133 | 0.2233 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.201 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.267 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.477 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.768 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.287 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.175 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.946 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.340 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.411 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.336 | 43,268 | 0.1864 | 25 | no |
| brotli | 1 | 0.674 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.229 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.476 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.170 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.129 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.366 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.840 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.367 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.666 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 101.361 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 305.244 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.387 | 35,549 | 0.1532 | 23 | yes |
| zstd | 2 | 0.509 | 34,301 | 0.1478 | 7 | yes |
| zstd | 3 | 0.553 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.459 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.733 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.972 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.215 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.729 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.281 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.014 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.196 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.146 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.428 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.223 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.082 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 47.842 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 52.905 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 72.446 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.669 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 83.205 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.545 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 83.472 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,045,192 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 103.209 | 3,776,518 | 0.2216 | 5 | yes |
| gzip | 2 | 112.971 | 3,627,753 | 0.2128 | 5 | yes |
| gzip | 3 | 140.636 | 3,507,453 | 0.2058 | 5 | yes |
| gzip | 4 | 154.348 | 3,379,888 | 0.1983 | 5 | yes |
| gzip | 5 | 205.800 | 3,159,182 | 0.1853 | 5 | yes |
| gzip | 6 | 318.239 | 3,090,847 | 0.1813 | 5 | yes |
| gzip | 7 | 439.238 | 3,024,822 | 0.1775 | 5 | yes |
| gzip | 8 | 1307.356 | 2,957,000 | 0.1735 | 5 | yes |
| gzip | 9 | 1344.942 | 2,956,204 | 0.1734 | 5 | yes |
| brotli | 0 | 45.371 | 4,175,487 | 0.2450 | 5 | yes |
| brotli | 1 | 68.962 | 3,718,326 | 0.2181 | 5 | yes |
| brotli | 2 | 114.367 | 3,424,305 | 0.2009 | 5 | yes |
| brotli | 3 | 133.251 | 3,367,979 | 0.1976 | 5 | yes |
| brotli | 4 | 187.026 | 3,295,114 | 0.1933 | 5 | yes |
| brotli | 5 | 308.927 | 2,938,968 | 0.1724 | 5 | yes |
| brotli | 6 | 355.006 | 2,906,886 | 0.1705 | 5 | yes |
| brotli | 7 | 559.674 | 2,880,272 | 0.1690 | 5 | yes |
| brotli | 8 | 751.727 | 2,860,897 | 0.1678 | 5 | yes |
| brotli | 9 | 959.963 | 2,849,681 | 0.1672 | 5 | yes |
| brotli | 10 | 11263.916 | 2,442,746 | 0.1433 | 5 | yes |
| brotli | 11 | 29013.550 | 2,324,312 | 0.1364 | 5 | yes |
| zstd | 1 | 44.974 | 3,525,070 | 0.2068 | 5 | yes |
| zstd | 2 | 55.382 | 3,602,765 | 0.2114 | 7 | yes |
| zstd | 3 | 70.936 | 3,528,707 | 0.2070 | 5 | yes |
| zstd | 4 | 75.551 | 3,523,547 | 0.2067 | 5 | yes |
| zstd | 5 | 141.450 | 3,306,721 | 0.1940 | 5 | yes |
| zstd | 6 | 202.370 | 3,085,317 | 0.1810 | 5 | yes |
| zstd | 7 | 235.163 | 3,046,804 | 0.1787 | 5 | yes |
| zstd | 8 | 310.726 | 2,943,521 | 0.1727 | 5 | yes |
| zstd | 9 | 336.135 | 2,954,143 | 0.1733 | 5 | yes |
| zstd | 10 | 436.750 | 2,917,471 | 0.1712 | 5 | yes |
| zstd | 11 | 642.139 | 2,889,922 | 0.1695 | 5 | yes |
| zstd | 12 | 660.647 | 2,889,906 | 0.1695 | 5 | yes |
| zstd | 13 | 968.182 | 2,866,998 | 0.1682 | 5 | yes |
| zstd | 14 | 1142.062 | 2,852,567 | 0.1674 | 5 | yes |
| zstd | 15 | 1469.056 | 2,848,994 | 0.1671 | 8 | yes |
| zstd | 16 | 2949.598 | 2,661,004 | 0.1561 | 5 | yes |
| zstd | 17 | 3937.153 | 2,568,659 | 0.1507 | 5 | yes |
| zstd | 18 | 6014.325 | 2,549,776 | 0.1496 | 5 | yes |
| zstd | 19 | 6729.816 | 2,542,941 | 0.1492 | 5 | yes |
| zstd | 20 | 7013.240 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 21 | 6927.530 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 22 | 7159.071 | 2,536,119 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.638 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.847 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.672 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.254 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 26.712 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 31.719 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 33.837 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.150 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.176 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.139 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.631 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.485 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.805 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.527 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.527 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 32.571 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 47.641 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 56.356 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 71.136 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 970.534 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2090.487 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.232 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.157 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.804 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.816 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.723 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.579 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 16.041 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.583 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.788 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.676 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 27.605 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 27.722 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 63.750 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 63.678 | 383,886 | 0.4465 | 25 | no |
| zstd | 15 | 66.581 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 113.921 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 137.087 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 176.282 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 190.416 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 182.760 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 192.549 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 194.152 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.082 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.090 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.117 | 5,356 | 0.2749 | 25 | no |
| gzip | 4 | 0.152 | 5,145 | 0.2641 | 25 | no |
| gzip | 5 | 0.165 | 4,896 | 0.2513 | 25 | no |
| gzip | 6 | 0.359 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.502 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.692 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.680 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.058 | 6,028 | 0.3094 | 13 | yes |
| brotli | 1 | 0.081 | 5,737 | 0.2945 | 12 | yes |
| brotli | 2 | 0.105 | 4,944 | 0.2538 | 15 | yes |
| brotli | 3 | 0.131 | 4,930 | 0.2531 | 17 | yes |
| brotli | 4 | 0.214 | 4,898 | 0.2514 | 23 | yes |
| brotli | 5 | 0.388 | 4,581 | 0.2352 | 19 | yes |
| brotli | 6 | 0.490 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.582 | 4,564 | 0.2343 | 6 | yes |
| brotli | 8 | 0.602 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.764 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.424 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.292 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.056 | 5,379 | 0.2761 | 18 | yes |
| zstd | 2 | 0.058 | 5,176 | 0.2657 | 12 | yes |
| zstd | 3 | 0.071 | 5,169 | 0.2653 | 25 | no |
| zstd | 4 | 0.073 | 5,154 | 0.2646 | 19 | yes |
| zstd | 5 | 0.141 | 5,074 | 0.2605 | 11 | yes |
| zstd | 6 | 0.191 | 4,797 | 0.2463 | 21 | yes |
| zstd | 7 | 0.223 | 4,702 | 0.2414 | 15 | yes |
| zstd | 8 | 0.246 | 4,696 | 0.2411 | 18 | yes |
| zstd | 9 | 0.329 | 4,690 | 0.2408 | 14 | yes |
| zstd | 10 | 0.436 | 4,691 | 0.2408 | 7 | yes |
| zstd | 11 | 0.595 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.605 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.972 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.743 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.817 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.529 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.519 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.543 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.138 | 4,348 | 0.2232 | 7 | yes |
| zstd | 20 | 4.989 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.054 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.007 | 4,348 | 0.2232 | 5 | yes |
