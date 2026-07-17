# Node Compression Benchmark

Last updated: 2026-07-17T07:00:40.685Z

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
| gzip | 1 | 0.972 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.036 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.090 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.212 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.591 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.885 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.031 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.357 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.342 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.389 | 33,111 | 0.4205 | 13 | yes |
| brotli | 1 | 0.765 | 31,803 | 0.4039 | 7 | yes |
| brotli | 2 | 0.843 | 29,394 | 0.3733 | 7 | yes |
| brotli | 3 | 0.968 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.460 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.126 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.243 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.768 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.672 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.891 | 26,711 | 0.3392 | 6 | yes |
| brotli | 10 | 33.584 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 95.934 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.297 | 31,062 | 0.3944 | 14 | yes |
| zstd | 2 | 0.333 | 30,069 | 0.3818 | 8 | yes |
| zstd | 3 | 0.417 | 29,214 | 0.3710 | 7 | yes |
| zstd | 4 | 0.496 | 29,108 | 0.3696 | 6 | yes |
| zstd | 5 | 0.908 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.195 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.457 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.607 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.793 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.006 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.463 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.648 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.763 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.025 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.091 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.227 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.179 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.144 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.832 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.797 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.800 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.746 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 84.226 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 89.284 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 91.754 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.695 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 117.950 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.352 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 140.731 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 158.271 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 170.407 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.838 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.332 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.802 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 65.050 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 92.350 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 127.495 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 159.987 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 485.518 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 636.464 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 789.035 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6267.480 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12681.876 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.879 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.647 | 3,233,695 | 0.5909 | 6 | yes |
| zstd | 3 | 38.142 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 40.684 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 66.442 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.372 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 84.265 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 96.640 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 104.641 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 133.769 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 190.323 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 202.448 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 426.698 | 2,864,062 | 0.5233 | 19 | yes |
| zstd | 14 | 444.404 | 2,852,038 | 0.5211 | 6 | yes |
| zstd | 15 | 510.859 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 792.592 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 983.922 | 2,756,112 | 0.5036 | 8 | yes |
| zstd | 18 | 1286.649 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1431.402 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1436.862 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1417.608 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1437.488 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.284 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 12.214 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.178 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.772 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.723 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.767 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.686 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.679 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.750 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.282 | 613,595 | 0.9981 | 5 | yes |
| brotli | 1 | 0.262 | 614,785 | 1.0000 | 11 | yes |
| brotli | 2 | 0.623 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 1.035 | 614,763 | 1.0000 | 8 | yes |
| brotli | 4 | 1.112 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.550 | 614,785 | 1.0000 | 17 | yes |
| brotli | 6 | 1.604 | 614,785 | 1.0000 | 5 | yes |
| brotli | 7 | 2.239 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.764 | 614,785 | 1.0000 | 24 | yes |
| brotli | 9 | 5.416 | 614,785 | 1.0000 | 5 | yes |
| brotli | 10 | 116.753 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 254.212 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.282 | 614,805 | 1.0000 | 7 | yes |
| zstd | 2 | 0.305 | 614,804 | 1.0000 | 17 | yes |
| zstd | 3 | 0.323 | 614,804 | 1.0000 | 25 | no |
| zstd | 4 | 0.522 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.509 | 614,804 | 1.0000 | 5 | yes |
| zstd | 6 | 0.519 | 614,804 | 1.0000 | 5 | yes |
| zstd | 7 | 0.567 | 614,804 | 1.0000 | 5 | yes |
| zstd | 8 | 0.568 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 0.687 | 614,804 | 1.0000 | 25 | yes |
| zstd | 10 | 0.719 | 614,804 | 1.0000 | 5 | yes |
| zstd | 11 | 0.724 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 0.706 | 614,804 | 1.0000 | 9 | yes |
| zstd | 13 | 2.923 | 612,619 | 0.9965 | 7 | yes |
| zstd | 14 | 2.734 | 612,619 | 0.9965 | 15 | yes |
| zstd | 15 | 2.715 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 22.745 | 612,536 | 0.9963 | 5 | yes |
| zstd | 17 | 26.749 | 612,516 | 0.9963 | 14 | yes |
| zstd | 18 | 36.023 | 612,519 | 0.9963 | 12 | yes |
| zstd | 19 | 40.892 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 39.942 | 612,518 | 0.9963 | 5 | yes |
| zstd | 21 | 39.635 | 612,518 | 0.9963 | 10 | yes |
| zstd | 22 | 37.515 | 612,518 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,236 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.853 | 145,182 | 0.2961 | 5 | yes |
| gzip | 2 | 4.180 | 138,423 | 0.2824 | 5 | yes |
| gzip | 3 | 5.431 | 133,882 | 0.2731 | 5 | yes |
| gzip | 4 | 5.740 | 125,608 | 0.2562 | 5 | yes |
| gzip | 5 | 8.074 | 120,963 | 0.2467 | 5 | yes |
| gzip | 6 | 11.659 | 119,255 | 0.2433 | 5 | yes |
| gzip | 7 | 14.748 | 118,789 | 0.2423 | 5 | yes |
| gzip | 8 | 27.651 | 118,515 | 0.2418 | 5 | yes |
| gzip | 9 | 42.678 | 118,446 | 0.2416 | 5 | yes |
| brotli | 0 | 1.536 | 149,404 | 0.3048 | 5 | yes |
| brotli | 1 | 2.136 | 137,364 | 0.2802 | 5 | yes |
| brotli | 2 | 3.945 | 129,155 | 0.2635 | 5 | yes |
| brotli | 3 | 4.573 | 126,568 | 0.2582 | 5 | yes |
| brotli | 4 | 6.501 | 122,453 | 0.2498 | 5 | yes |
| brotli | 5 | 10.227 | 112,692 | 0.2299 | 5 | yes |
| brotli | 6 | 11.983 | 110,011 | 0.2244 | 5 | yes |
| brotli | 7 | 14.409 | 108,041 | 0.2204 | 5 | yes |
| brotli | 8 | 17.860 | 107,001 | 0.2183 | 5 | yes |
| brotli | 9 | 23.644 | 106,112 | 0.2165 | 5 | yes |
| brotli | 10 | 277.908 | 98,636 | 0.2012 | 5 | yes |
| brotli | 11 | 733.028 | 96,403 | 0.1966 | 5 | yes |
| zstd | 1 | 1.668 | 138,123 | 0.2817 | 5 | yes |
| zstd | 2 | 1.807 | 133,890 | 0.2731 | 5 | yes |
| zstd | 3 | 2.312 | 126,208 | 0.2574 | 5 | yes |
| zstd | 4 | 2.287 | 126,023 | 0.2571 | 5 | yes |
| zstd | 5 | 4.470 | 117,405 | 0.2395 | 5 | yes |
| zstd | 6 | 6.116 | 113,440 | 0.2314 | 5 | yes |
| zstd | 7 | 7.011 | 111,894 | 0.2282 | 5 | yes |
| zstd | 8 | 8.660 | 111,138 | 0.2267 | 5 | yes |
| zstd | 9 | 8.626 | 111,138 | 0.2267 | 5 | yes |
| zstd | 10 | 11.417 | 110,160 | 0.2247 | 5 | yes |
| zstd | 11 | 13.906 | 109,468 | 0.2233 | 5 | yes |
| zstd | 12 | 14.077 | 109,468 | 0.2233 | 5 | yes |
| zstd | 13 | 28.699 | 108,280 | 0.2209 | 9 | yes |
| zstd | 14 | 33.835 | 107,640 | 0.2196 | 5 | yes |
| zstd | 15 | 37.506 | 107,626 | 0.2195 | 5 | yes |
| zstd | 16 | 71.761 | 102,010 | 0.2081 | 5 | yes |
| zstd | 17 | 77.717 | 101,107 | 0.2062 | 5 | yes |
| zstd | 18 | 120.429 | 100,287 | 0.2046 | 5 | yes |
| zstd | 19 | 153.155 | 100,211 | 0.2044 | 5 | yes |
| zstd | 20 | 160.590 | 100,211 | 0.2044 | 5 | yes |
| zstd | 21 | 152.402 | 100,213 | 0.2044 | 5 | yes |
| zstd | 22 | 146.899 | 100,213 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.121 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.120 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.152 | 4,806 | 0.2791 | 9 | yes |
| gzip | 4 | 0.187 | 4,530 | 0.2631 | 9 | yes |
| gzip | 5 | 0.227 | 4,441 | 0.2579 | 8 | yes |
| gzip | 6 | 0.278 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.317 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.466 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.467 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.059 | 5,235 | 0.3041 | 9 | yes |
| brotli | 1 | 0.066 | 5,134 | 0.2982 | 12 | yes |
| brotli | 2 | 0.122 | 4,741 | 0.2754 | 16 | yes |
| brotli | 3 | 0.146 | 4,650 | 0.2701 | 18 | yes |
| brotli | 4 | 0.279 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.393 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.403 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.451 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.471 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 2.350 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.888 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.731 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.056 | 4,923 | 0.2859 | 11 | yes |
| zstd | 2 | 0.060 | 4,868 | 0.2827 | 15 | yes |
| zstd | 3 | 0.078 | 4,717 | 0.2740 | 13 | yes |
| zstd | 4 | 0.083 | 4,679 | 0.2718 | 6 | yes |
| zstd | 5 | 0.166 | 4,519 | 0.2625 | 5 | yes |
| zstd | 6 | 0.223 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.276 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.292 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.321 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.364 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.617 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.636 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.918 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.472 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.569 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.517 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.683 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.671 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.255 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.289 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.281 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.245 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.063 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.069 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.066 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.078 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.091 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.098 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.113 | 3,042 | 0.4248 | 12 | yes |
| gzip | 8 | 0.108 | 3,042 | 0.4248 | 25 | no |
| gzip | 9 | 0.162 | 3,042 | 0.4248 | 5 | yes |
| brotli | 0 | 0.058 | 3,549 | 0.4956 | 25 | no |
| brotli | 1 | 0.042 | 3,381 | 0.4721 | 18 | yes |
| brotli | 2 | 0.064 | 3,263 | 0.4557 | 15 | yes |
| brotli | 3 | 0.083 | 3,216 | 0.4491 | 25 | no |
| brotli | 4 | 0.164 | 3,147 | 0.4395 | 14 | yes |
| brotli | 5 | 0.236 | 2,963 | 0.4138 | 7 | yes |
| brotli | 6 | 0.242 | 2,952 | 0.4122 | 7 | yes |
| brotli | 7 | 0.261 | 2,944 | 0.4111 | 7 | yes |
| brotli | 8 | 0.267 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 2.081 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.222 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.785 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.037 | 3,254 | 0.4544 | 17 | yes |
| zstd | 2 | 0.037 | 3,200 | 0.4469 | 24 | yes |
| zstd | 3 | 0.046 | 3,176 | 0.4435 | 18 | yes |
| zstd | 4 | 0.066 | 3,102 | 0.4332 | 19 | yes |
| zstd | 5 | 0.076 | 3,079 | 0.4300 | 23 | yes |
| zstd | 6 | 0.112 | 3,060 | 0.4273 | 25 | no |
| zstd | 7 | 0.129 | 3,053 | 0.4263 | 6 | yes |
| zstd | 8 | 0.129 | 3,053 | 0.4263 | 5 | yes |
| zstd | 9 | 0.194 | 3,055 | 0.4266 | 5 | yes |
| zstd | 10 | 0.198 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.352 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.474 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.679 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.694 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.667 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.308 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.296 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.290 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.298 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.287 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.310 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.308 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 165,599 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.902 | 67,507 | 0.4077 | 5 | yes |
| gzip | 2 | 2.022 | 65,886 | 0.3979 | 5 | yes |
| gzip | 3 | 2.308 | 64,874 | 0.3918 | 5 | yes |
| gzip | 4 | 2.569 | 62,487 | 0.3773 | 5 | yes |
| gzip | 5 | 3.466 | 60,848 | 0.3674 | 5 | yes |
| gzip | 6 | 4.280 | 60,570 | 0.3658 | 5 | yes |
| gzip | 7 | 4.670 | 60,527 | 0.3655 | 5 | yes |
| gzip | 8 | 4.995 | 60,509 | 0.3654 | 5 | yes |
| gzip | 9 | 5.079 | 60,509 | 0.3654 | 5 | yes |
| brotli | 0 | 0.678 | 71,790 | 0.4335 | 5 | yes |
| brotli | 1 | 0.901 | 68,843 | 0.4157 | 5 | yes |
| brotli | 2 | 1.672 | 63,505 | 0.3835 | 5 | yes |
| brotli | 3 | 1.952 | 62,945 | 0.3801 | 13 | yes |
| brotli | 4 | 3.036 | 61,772 | 0.3730 | 5 | yes |
| brotli | 5 | 4.542 | 58,412 | 0.3527 | 5 | yes |
| brotli | 6 | 5.049 | 58,008 | 0.3503 | 5 | yes |
| brotli | 7 | 5.959 | 57,755 | 0.3488 | 5 | yes |
| brotli | 8 | 6.588 | 57,667 | 0.3482 | 5 | yes |
| brotli | 9 | 9.417 | 57,589 | 0.3478 | 5 | yes |
| brotli | 10 | 96.680 | 54,874 | 0.3314 | 5 | yes |
| brotli | 11 | 243.426 | 53,818 | 0.3250 | 5 | yes |
| zstd | 1 | 0.650 | 66,843 | 0.4036 | 5 | yes |
| zstd | 2 | 0.806 | 63,844 | 0.3855 | 5 | yes |
| zstd | 3 | 1.056 | 63,294 | 0.3822 | 5 | yes |
| zstd | 4 | 1.795 | 61,396 | 0.3708 | 5 | yes |
| zstd | 5 | 1.978 | 60,869 | 0.3676 | 5 | yes |
| zstd | 6 | 2.440 | 59,979 | 0.3622 | 5 | yes |
| zstd | 7 | 2.897 | 59,158 | 0.3572 | 5 | yes |
| zstd | 8 | 3.611 | 58,671 | 0.3543 | 5 | yes |
| zstd | 9 | 4.143 | 58,430 | 0.3528 | 5 | yes |
| zstd | 10 | 5.074 | 58,290 | 0.3520 | 5 | yes |
| zstd | 11 | 8.561 | 57,983 | 0.3501 | 5 | yes |
| zstd | 12 | 8.678 | 57,969 | 0.3501 | 5 | yes |
| zstd | 13 | 15.245 | 56,943 | 0.3439 | 5 | yes |
| zstd | 14 | 18.145 | 56,556 | 0.3415 | 5 | yes |
| zstd | 15 | 18.523 | 56,517 | 0.3413 | 5 | yes |
| zstd | 16 | 25.432 | 56,330 | 0.3402 | 5 | yes |
| zstd | 17 | 26.115 | 56,330 | 0.3402 | 5 | yes |
| zstd | 18 | 45.560 | 56,259 | 0.3397 | 5 | yes |
| zstd | 19 | 45.543 | 56,259 | 0.3397 | 5 | yes |
| zstd | 20 | 44.769 | 56,259 | 0.3397 | 5 | yes |
| zstd | 21 | 44.706 | 56,259 | 0.3397 | 5 | yes |
| zstd | 22 | 44.653 | 56,259 | 0.3397 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.788 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.841 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.960 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.062 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.378 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.764 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.112 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.847 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.842 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.286 | 30,978 | 0.4230 | 7 | yes |
| brotli | 1 | 0.382 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.709 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.820 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.282 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.902 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.104 | 25,093 | 0.3426 | 8 | yes |
| brotli | 7 | 2.498 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.678 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.078 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 39.352 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 96.700 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.262 | 28,919 | 0.3949 | 5 | yes |
| zstd | 2 | 0.279 | 28,008 | 0.3824 | 7 | yes |
| zstd | 3 | 0.352 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.460 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.798 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.083 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.297 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.430 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.622 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.975 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.120 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.305 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.367 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.630 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.736 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.833 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.842 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.764 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.752 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.597 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.759 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.528 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,169 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.640 | 25,582 | 0.2837 | 5 | yes |
| gzip | 2 | 0.736 | 25,330 | 0.2809 | 5 | yes |
| gzip | 3 | 0.844 | 25,125 | 0.2786 | 5 | yes |
| gzip | 4 | 0.985 | 23,752 | 0.2634 | 5 | yes |
| gzip | 5 | 1.357 | 22,851 | 0.2534 | 5 | yes |
| gzip | 6 | 2.069 | 22,618 | 0.2508 | 5 | yes |
| gzip | 7 | 2.699 | 22,513 | 0.2497 | 5 | yes |
| gzip | 8 | 7.913 | 22,266 | 0.2469 | 5 | yes |
| gzip | 9 | 8.097 | 22,264 | 0.2469 | 5 | yes |
| brotli | 0 | 0.290 | 27,662 | 0.3068 | 5 | yes |
| brotli | 1 | 0.418 | 25,918 | 0.2874 | 5 | yes |
| brotli | 2 | 0.701 | 23,445 | 0.2600 | 5 | yes |
| brotli | 3 | 0.821 | 23,374 | 0.2592 | 5 | yes |
| brotli | 4 | 1.234 | 22,948 | 0.2545 | 5 | yes |
| brotli | 5 | 1.908 | 21,885 | 0.2427 | 5 | yes |
| brotli | 6 | 2.091 | 21,770 | 0.2414 | 5 | yes |
| brotli | 7 | 2.439 | 21,692 | 0.2406 | 5 | yes |
| brotli | 8 | 2.846 | 21,642 | 0.2400 | 5 | yes |
| brotli | 9 | 5.502 | 21,554 | 0.2390 | 5 | yes |
| brotli | 10 | 35.949 | 18,928 | 0.2099 | 5 | yes |
| brotli | 11 | 104.761 | 18,418 | 0.2043 | 5 | yes |
| zstd | 1 | 0.290 | 24,558 | 0.2724 | 7 | yes |
| zstd | 2 | 0.300 | 24,331 | 0.2698 | 5 | yes |
| zstd | 3 | 0.362 | 24,100 | 0.2673 | 5 | yes |
| zstd | 4 | 0.423 | 24,021 | 0.2664 | 5 | yes |
| zstd | 5 | 0.791 | 23,309 | 0.2585 | 5 | yes |
| zstd | 6 | 1.140 | 22,411 | 0.2485 | 5 | yes |
| zstd | 7 | 1.361 | 21,911 | 0.2430 | 5 | yes |
| zstd | 8 | 1.565 | 21,844 | 0.2423 | 5 | yes |
| zstd | 9 | 1.938 | 21,770 | 0.2414 | 5 | yes |
| zstd | 10 | 2.626 | 21,703 | 0.2407 | 5 | yes |
| zstd | 11 | 3.669 | 21,560 | 0.2391 | 5 | yes |
| zstd | 12 | 4.764 | 21,531 | 0.2388 | 5 | yes |
| zstd | 13 | 5.865 | 21,345 | 0.2367 | 5 | yes |
| zstd | 14 | 8.397 | 20,515 | 0.2275 | 5 | yes |
| zstd | 15 | 9.974 | 20,378 | 0.2260 | 5 | yes |
| zstd | 16 | 14.943 | 20,209 | 0.2241 | 5 | yes |
| zstd | 17 | 19.886 | 20,179 | 0.2238 | 5 | yes |
| zstd | 18 | 27.537 | 20,175 | 0.2237 | 5 | yes |
| zstd | 19 | 31.860 | 20,183 | 0.2238 | 5 | yes |
| zstd | 20 | 37.314 | 20,146 | 0.2234 | 5 | yes |
| zstd | 21 | 48.599 | 20,138 | 0.2233 | 5 | yes |
| zstd | 22 | 54.910 | 20,133 | 0.2233 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.066 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.130 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.318 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.703 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.162 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.888 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.544 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.710 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.809 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.461 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.647 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.228 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.395 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.056 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.948 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.251 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.623 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.124 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 7.044 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 98.357 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 299.240 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.494 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.536 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.598 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.430 | 30,973 | 0.1334 | 10 | yes |
| zstd | 5 | 1.621 | 29,744 | 0.1281 | 7 | yes |
| zstd | 6 | 2.041 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.184 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.730 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.155 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.374 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.873 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.726 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.883 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.670 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.209 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.193 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 63.276 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 84.901 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 96.410 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 101.292 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 102.944 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 102.527 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,045,192 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 92.656 | 3,776,518 | 0.2216 | 5 | yes |
| gzip | 2 | 101.574 | 3,627,753 | 0.2128 | 5 | yes |
| gzip | 3 | 124.517 | 3,507,453 | 0.2058 | 5 | yes |
| gzip | 4 | 148.859 | 3,379,888 | 0.1983 | 5 | yes |
| gzip | 5 | 190.371 | 3,159,182 | 0.1853 | 5 | yes |
| gzip | 6 | 279.653 | 3,090,847 | 0.1813 | 5 | yes |
| gzip | 7 | 380.555 | 3,024,822 | 0.1775 | 5 | yes |
| gzip | 8 | 1070.419 | 2,957,000 | 0.1735 | 5 | yes |
| gzip | 9 | 1132.730 | 2,956,204 | 0.1734 | 5 | yes |
| brotli | 0 | 46.094 | 4,175,487 | 0.2450 | 5 | yes |
| brotli | 1 | 62.463 | 3,718,326 | 0.2181 | 5 | yes |
| brotli | 2 | 112.206 | 3,424,305 | 0.2009 | 5 | yes |
| brotli | 3 | 131.095 | 3,367,979 | 0.1976 | 5 | yes |
| brotli | 4 | 190.602 | 3,295,114 | 0.1933 | 5 | yes |
| brotli | 5 | 294.336 | 2,938,968 | 0.1724 | 5 | yes |
| brotli | 6 | 359.427 | 2,906,886 | 0.1705 | 5 | yes |
| brotli | 7 | 520.248 | 2,880,272 | 0.1690 | 5 | yes |
| brotli | 8 | 695.753 | 2,860,897 | 0.1678 | 5 | yes |
| brotli | 9 | 977.097 | 2,849,681 | 0.1672 | 5 | yes |
| brotli | 10 | 10251.708 | 2,442,746 | 0.1433 | 5 | yes |
| brotli | 11 | 27416.772 | 2,324,312 | 0.1364 | 5 | yes |
| zstd | 1 | 43.669 | 3,525,070 | 0.2068 | 5 | yes |
| zstd | 2 | 56.003 | 3,602,765 | 0.2114 | 9 | yes |
| zstd | 3 | 70.676 | 3,528,707 | 0.2070 | 5 | yes |
| zstd | 4 | 69.746 | 3,523,547 | 0.2067 | 6 | yes |
| zstd | 5 | 135.383 | 3,306,721 | 0.1940 | 5 | yes |
| zstd | 6 | 193.609 | 3,085,317 | 0.1810 | 5 | yes |
| zstd | 7 | 218.015 | 3,046,804 | 0.1787 | 5 | yes |
| zstd | 8 | 294.407 | 2,943,521 | 0.1727 | 5 | yes |
| zstd | 9 | 295.755 | 2,954,143 | 0.1733 | 5 | yes |
| zstd | 10 | 406.246 | 2,917,471 | 0.1712 | 5 | yes |
| zstd | 11 | 618.666 | 2,889,922 | 0.1695 | 5 | yes |
| zstd | 12 | 623.361 | 2,889,906 | 0.1695 | 5 | yes |
| zstd | 13 | 778.785 | 2,866,998 | 0.1682 | 5 | yes |
| zstd | 14 | 966.931 | 2,852,567 | 0.1674 | 5 | yes |
| zstd | 15 | 1344.030 | 2,848,994 | 0.1671 | 5 | yes |
| zstd | 16 | 2586.597 | 2,661,004 | 0.1561 | 5 | yes |
| zstd | 17 | 3324.740 | 2,568,659 | 0.1507 | 5 | yes |
| zstd | 18 | 5789.678 | 2,549,776 | 0.1496 | 5 | yes |
| zstd | 19 | 6397.546 | 2,542,941 | 0.1492 | 5 | yes |
| zstd | 20 | 6502.962 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 21 | 6449.243 | 2,541,440 | 0.1491 | 5 | yes |
| zstd | 22 | 6851.986 | 2,536,119 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.239 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.178 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.335 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.272 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.238 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.330 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.031 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 31.931 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.293 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.873 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.513 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.303 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.364 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.838 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.013 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 30.857 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.611 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 55.426 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 65.759 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 896.333 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1926.315 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.067 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.920 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 6.374 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.477 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.175 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.982 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 14.949 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.447 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.726 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.351 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 25.186 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.098 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 46.978 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 53.341 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 50.852 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 96.231 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 120.286 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 158.687 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 178.616 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 181.615 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 175.559 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 176.435 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.113 | 5,565 | 0.2841 | 25 | yes |
| gzip | 2 | 0.137 | 5,486 | 0.2801 | 23 | yes |
| gzip | 3 | 0.169 | 5,419 | 0.2767 | 10 | yes |
| gzip | 4 | 0.195 | 5,202 | 0.2656 | 16 | yes |
| gzip | 5 | 0.270 | 4,958 | 0.2531 | 10 | yes |
| gzip | 6 | 0.356 | 4,947 | 0.2526 | 7 | yes |
| gzip | 7 | 0.479 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.639 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.642 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.060 | 6,082 | 0.3105 | 11 | yes |
| brotli | 1 | 0.075 | 5,794 | 0.2958 | 9 | yes |
| brotli | 2 | 0.144 | 5,002 | 0.2554 | 8 | yes |
| brotli | 3 | 0.175 | 4,986 | 0.2546 | 20 | yes |
| brotli | 4 | 0.300 | 4,954 | 0.2529 | 5 | yes |
| brotli | 5 | 0.461 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.494 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.575 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.620 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.767 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 7.202 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 21.819 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.058 | 5,441 | 0.2778 | 13 | yes |
| zstd | 2 | 0.063 | 5,242 | 0.2676 | 21 | yes |
| zstd | 3 | 0.082 | 5,234 | 0.2672 | 13 | yes |
| zstd | 4 | 0.082 | 5,212 | 0.2661 | 16 | yes |
| zstd | 5 | 0.167 | 5,133 | 0.2621 | 11 | yes |
| zstd | 6 | 0.246 | 4,853 | 0.2478 | 7 | yes |
| zstd | 7 | 0.294 | 4,757 | 0.2429 | 6 | yes |
| zstd | 8 | 0.329 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.402 | 4,744 | 0.2422 | 5 | yes |
| zstd | 10 | 0.493 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.586 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.628 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 1.000 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.821 | 4,497 | 0.2296 | 21 | yes |
| zstd | 15 | 1.942 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.885 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.880 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.879 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 5.637 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.679 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 5.689 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.665 | 4,415 | 0.2254 | 5 | yes |
