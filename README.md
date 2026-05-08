# Node Compression Benchmark

Last updated: 2026-05-08T21:24:42.516Z

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
| gzip | 1 | 0.953 | 31,033 | 0.3941 | 8 | yes |
| gzip | 2 | 0.961 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.081 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.215 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.566 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.844 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.054 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.376 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.364 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.358 | 33,111 | 0.4205 | 5 | yes |
| brotli | 1 | 0.752 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.818 | 29,394 | 0.3733 | 13 | yes |
| brotli | 3 | 0.961 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.464 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.018 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.168 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.649 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.539 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.795 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 34.138 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.638 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.508 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.545 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.451 | 29,214 | 0.3710 | 25 | no |
| zstd | 4 | 0.798 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 1.393 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.574 | 27,592 | 0.3504 | 18 | yes |
| zstd | 7 | 1.835 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.955 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.150 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.410 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.981 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.453 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.376 | 26,867 | 0.3412 | 7 | yes |
| zstd | 14 | 8.832 | 26,432 | 0.3357 | 9 | yes |
| zstd | 15 | 9.015 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.735 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 12.031 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 12.104 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 22.699 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 22.801 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 22.758 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 22.943 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 84.185 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 86.724 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 92.643 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 103.082 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 118.520 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.705 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 141.332 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 159.339 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 173.862 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.435 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 27.915 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.624 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 62.670 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 84.354 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 125.184 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 140.943 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 400.698 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 527.009 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 746.510 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6168.372 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13022.405 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.000 | 3,342,771 | 0.6108 | 8 | yes |
| zstd | 2 | 24.373 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 40.862 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 44.219 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 66.582 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.975 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 86.600 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 100.203 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 106.106 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 133.891 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 185.312 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 192.309 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 466.136 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 486.236 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 590.164 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 758.822 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 949.770 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1285.221 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1347.792 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1314.199 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1345.428 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1322.946 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 614,780 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 11.909 | 612,836 | 0.9968 | 5 | yes |
| gzip | 2 | 11.958 | 612,833 | 0.9968 | 5 | yes |
| gzip | 3 | 12.050 | 612,833 | 0.9968 | 5 | yes |
| gzip | 4 | 12.665 | 612,817 | 0.9968 | 5 | yes |
| gzip | 5 | 12.921 | 612,806 | 0.9968 | 5 | yes |
| gzip | 6 | 12.826 | 612,803 | 0.9968 | 5 | yes |
| gzip | 7 | 12.838 | 612,803 | 0.9968 | 5 | yes |
| gzip | 8 | 12.848 | 612,803 | 0.9968 | 5 | yes |
| gzip | 9 | 12.812 | 612,803 | 0.9968 | 5 | yes |
| brotli | 0 | 0.288 | 613,595 | 0.9981 | 25 | no |
| brotli | 1 | 0.283 | 614,785 | 1.0000 | 5 | yes |
| brotli | 2 | 0.622 | 614,791 | 1.0000 | 5 | yes |
| brotli | 3 | 0.845 | 614,763 | 1.0000 | 5 | yes |
| brotli | 4 | 1.094 | 614,785 | 1.0000 | 5 | yes |
| brotli | 5 | 1.627 | 614,785 | 1.0000 | 5 | yes |
| brotli | 6 | 1.519 | 614,785 | 1.0000 | 5 | yes |
| brotli | 7 | 2.006 | 614,785 | 1.0000 | 5 | yes |
| brotli | 8 | 2.384 | 614,785 | 1.0000 | 5 | yes |
| brotli | 9 | 3.179 | 614,785 | 1.0000 | 6 | yes |
| brotli | 10 | 107.669 | 614,785 | 1.0000 | 5 | yes |
| brotli | 11 | 248.727 | 614,785 | 1.0000 | 5 | yes |
| zstd | 1 | 0.341 | 614,805 | 1.0000 | 5 | yes |
| zstd | 2 | 0.352 | 614,804 | 1.0000 | 5 | yes |
| zstd | 3 | 0.391 | 614,804 | 1.0000 | 5 | yes |
| zstd | 4 | 0.491 | 614,804 | 1.0000 | 5 | yes |
| zstd | 5 | 0.639 | 614,804 | 1.0000 | 8 | yes |
| zstd | 6 | 0.689 | 614,804 | 1.0000 | 9 | yes |
| zstd | 7 | 0.860 | 614,804 | 1.0000 | 8 | yes |
| zstd | 8 | 0.791 | 614,804 | 1.0000 | 5 | yes |
| zstd | 9 | 1.130 | 614,804 | 1.0000 | 5 | yes |
| zstd | 10 | 1.854 | 614,804 | 1.0000 | 25 | no |
| zstd | 11 | 1.182 | 614,804 | 1.0000 | 5 | yes |
| zstd | 12 | 1.078 | 614,804 | 1.0000 | 6 | yes |
| zstd | 13 | 4.583 | 612,619 | 0.9965 | 5 | yes |
| zstd | 14 | 4.539 | 612,619 | 0.9965 | 25 | no |
| zstd | 15 | 4.608 | 612,619 | 0.9965 | 5 | yes |
| zstd | 16 | 17.234 | 612,536 | 0.9963 | 6 | yes |
| zstd | 17 | 18.007 | 612,516 | 0.9963 | 5 | yes |
| zstd | 18 | 23.760 | 612,519 | 0.9963 | 5 | yes |
| zstd | 19 | 26.066 | 612,518 | 0.9963 | 5 | yes |
| zstd | 20 | 28.927 | 612,518 | 0.9963 | 10 | yes |
| zstd | 21 | 28.405 | 612,518 | 0.9963 | 5 | yes |
| zstd | 22 | 28.359 | 612,518 | 0.9963 | 9 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 488,120 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.840 | 144,617 | 0.2963 | 5 | yes |
| gzip | 2 | 4.205 | 137,841 | 0.2824 | 5 | yes |
| gzip | 3 | 5.441 | 133,234 | 0.2730 | 5 | yes |
| gzip | 4 | 5.760 | 125,052 | 0.2562 | 5 | yes |
| gzip | 5 | 8.142 | 120,442 | 0.2467 | 5 | yes |
| gzip | 6 | 11.806 | 118,722 | 0.2432 | 5 | yes |
| gzip | 7 | 14.963 | 118,261 | 0.2423 | 5 | yes |
| gzip | 8 | 28.525 | 117,996 | 0.2417 | 5 | yes |
| gzip | 9 | 44.057 | 117,926 | 0.2416 | 5 | yes |
| brotli | 0 | 1.530 | 148,891 | 0.3050 | 5 | yes |
| brotli | 1 | 2.039 | 136,753 | 0.2802 | 5 | yes |
| brotli | 2 | 3.864 | 128,591 | 0.2634 | 5 | yes |
| brotli | 3 | 4.356 | 125,908 | 0.2579 | 5 | yes |
| brotli | 4 | 6.325 | 122,108 | 0.2502 | 5 | yes |
| brotli | 5 | 10.047 | 112,160 | 0.2298 | 5 | yes |
| brotli | 6 | 11.417 | 109,504 | 0.2243 | 5 | yes |
| brotli | 7 | 13.619 | 107,566 | 0.2204 | 5 | yes |
| brotli | 8 | 16.825 | 106,551 | 0.2183 | 5 | yes |
| brotli | 9 | 21.605 | 105,637 | 0.2164 | 5 | yes |
| brotli | 10 | 272.915 | 98,220 | 0.2012 | 5 | yes |
| brotli | 11 | 713.140 | 96,024 | 0.1967 | 5 | yes |
| zstd | 1 | 1.671 | 137,463 | 0.2816 | 5 | yes |
| zstd | 2 | 1.856 | 133,238 | 0.2730 | 5 | yes |
| zstd | 3 | 2.309 | 125,660 | 0.2574 | 5 | yes |
| zstd | 4 | 2.465 | 125,451 | 0.2570 | 7 | yes |
| zstd | 5 | 4.815 | 116,783 | 0.2393 | 5 | yes |
| zstd | 6 | 6.305 | 112,910 | 0.2313 | 5 | yes |
| zstd | 7 | 7.292 | 111,350 | 0.2281 | 5 | yes |
| zstd | 8 | 8.867 | 110,572 | 0.2265 | 5 | yes |
| zstd | 9 | 8.979 | 110,572 | 0.2265 | 5 | yes |
| zstd | 10 | 10.848 | 109,567 | 0.2245 | 5 | yes |
| zstd | 11 | 13.684 | 108,971 | 0.2232 | 5 | yes |
| zstd | 12 | 13.349 | 108,971 | 0.2232 | 5 | yes |
| zstd | 13 | 26.642 | 107,801 | 0.2208 | 5 | yes |
| zstd | 14 | 31.762 | 107,188 | 0.2196 | 5 | yes |
| zstd | 15 | 35.446 | 107,114 | 0.2194 | 5 | yes |
| zstd | 16 | 64.949 | 101,538 | 0.2080 | 5 | yes |
| zstd | 17 | 70.522 | 100,666 | 0.2062 | 5 | yes |
| zstd | 18 | 110.391 | 99,875 | 0.2046 | 5 | yes |
| zstd | 19 | 145.043 | 99,768 | 0.2044 | 5 | yes |
| zstd | 20 | 142.541 | 99,768 | 0.2044 | 5 | yes |
| zstd | 21 | 144.889 | 99,792 | 0.2044 | 5 | yes |
| zstd | 22 | 142.624 | 99,792 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.105 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.118 | 4,874 | 0.2831 | 20 | yes |
| gzip | 3 | 0.136 | 4,805 | 0.2791 | 13 | yes |
| gzip | 4 | 0.190 | 4,529 | 0.2631 | 5 | yes |
| gzip | 5 | 0.231 | 4,441 | 0.2579 | 8 | yes |
| gzip | 6 | 0.272 | 4,425 | 0.2570 | 13 | yes |
| gzip | 7 | 0.313 | 4,418 | 0.2566 | 6 | yes |
| gzip | 8 | 0.456 | 4,418 | 0.2566 | 5 | yes |
| gzip | 9 | 0.469 | 4,418 | 0.2566 | 5 | yes |
| brotli | 0 | 0.053 | 5,234 | 0.3040 | 9 | yes |
| brotli | 1 | 0.064 | 5,133 | 0.2981 | 12 | yes |
| brotli | 2 | 0.117 | 4,740 | 0.2753 | 18 | yes |
| brotli | 3 | 0.165 | 4,650 | 0.2701 | 7 | yes |
| brotli | 4 | 0.275 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.390 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.402 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.430 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.463 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.547 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.886 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.837 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.056 | 4,924 | 0.2860 | 20 | yes |
| zstd | 2 | 0.066 | 4,868 | 0.2827 | 9 | yes |
| zstd | 3 | 0.095 | 4,718 | 0.2740 | 25 | no |
| zstd | 4 | 0.093 | 4,680 | 0.2718 | 14 | yes |
| zstd | 5 | 0.179 | 4,518 | 0.2624 | 25 | no |
| zstd | 6 | 0.248 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.295 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.317 | 4,425 | 0.2570 | 6 | yes |
| zstd | 9 | 0.348 | 4,419 | 0.2567 | 5 | yes |
| zstd | 10 | 0.405 | 4,409 | 0.2561 | 5 | yes |
| zstd | 11 | 0.625 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.664 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.951 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.491 | 4,305 | 0.2500 | 5 | yes |
| zstd | 15 | 1.565 | 4,302 | 0.2499 | 5 | yes |
| zstd | 16 | 2.525 | 4,281 | 0.2486 | 5 | yes |
| zstd | 17 | 2.719 | 4,280 | 0.2486 | 5 | yes |
| zstd | 18 | 2.692 | 4,280 | 0.2486 | 5 | yes |
| zstd | 19 | 5.279 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.274 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.247 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.248 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.060 | 3,217 | 0.4493 | 25 | no |
| gzip | 2 | 0.061 | 3,179 | 0.4440 | 25 | no |
| gzip | 3 | 0.074 | 3,150 | 0.4399 | 25 | no |
| gzip | 4 | 0.073 | 3,092 | 0.4318 | 25 | no |
| gzip | 5 | 0.087 | 3,047 | 0.4256 | 25 | no |
| gzip | 6 | 0.095 | 3,041 | 0.4247 | 25 | no |
| gzip | 7 | 0.107 | 3,039 | 0.4244 | 25 | yes |
| gzip | 8 | 0.100 | 3,039 | 0.4244 | 25 | no |
| gzip | 9 | 0.086 | 3,039 | 0.4244 | 25 | no |
| brotli | 0 | 0.031 | 3,544 | 0.4950 | 25 | no |
| brotli | 1 | 0.039 | 3,378 | 0.4718 | 9 | yes |
| brotli | 2 | 0.058 | 3,258 | 0.4550 | 13 | yes |
| brotli | 3 | 0.077 | 3,207 | 0.4479 | 16 | yes |
| brotli | 4 | 0.152 | 3,138 | 0.4383 | 11 | yes |
| brotli | 5 | 0.224 | 2,961 | 0.4135 | 5 | yes |
| brotli | 6 | 0.229 | 2,950 | 0.4120 | 7 | yes |
| brotli | 7 | 0.243 | 2,942 | 0.4109 | 19 | yes |
| brotli | 8 | 0.273 | 2,942 | 0.4109 | 5 | yes |
| brotli | 9 | 0.311 | 2,943 | 0.4110 | 7 | yes |
| brotli | 10 | 3.294 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 7.882 | 2,771 | 0.3870 | 5 | yes |
| zstd | 1 | 0.056 | 3,250 | 0.4539 | 5 | yes |
| zstd | 2 | 0.041 | 3,196 | 0.4464 | 25 | no |
| zstd | 3 | 0.048 | 3,171 | 0.4429 | 9 | yes |
| zstd | 4 | 0.066 | 3,098 | 0.4327 | 24 | yes |
| zstd | 5 | 0.077 | 3,077 | 0.4297 | 22 | yes |
| zstd | 6 | 0.102 | 3,055 | 0.4267 | 25 | no |
| zstd | 7 | 0.116 | 3,050 | 0.4260 | 13 | yes |
| zstd | 8 | 0.117 | 3,050 | 0.4260 | 5 | yes |
| zstd | 9 | 0.167 | 3,050 | 0.4260 | 25 | no |
| zstd | 10 | 0.178 | 3,050 | 0.4260 | 5 | yes |
| zstd | 11 | 0.354 | 3,041 | 0.4247 | 6 | yes |
| zstd | 12 | 0.504 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.665 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.674 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.689 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.302 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.292 | 2,991 | 0.4177 | 5 | yes |
| zstd | 18 | 1.287 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.289 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.285 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.294 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.284 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 164,101 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.855 | 66,867 | 0.4075 | 5 | yes |
| gzip | 2 | 1.995 | 65,284 | 0.3978 | 5 | yes |
| gzip | 3 | 2.274 | 64,273 | 0.3917 | 5 | yes |
| gzip | 4 | 2.539 | 61,944 | 0.3775 | 5 | yes |
| gzip | 5 | 3.431 | 60,295 | 0.3674 | 5 | yes |
| gzip | 6 | 4.232 | 60,024 | 0.3658 | 5 | yes |
| gzip | 7 | 4.612 | 59,987 | 0.3655 | 5 | yes |
| gzip | 8 | 4.978 | 59,968 | 0.3654 | 5 | yes |
| gzip | 9 | 5.037 | 59,968 | 0.3654 | 5 | yes |
| brotli | 0 | 0.647 | 71,266 | 0.4343 | 5 | yes |
| brotli | 1 | 0.881 | 68,223 | 0.4157 | 5 | yes |
| brotli | 2 | 1.635 | 62,973 | 0.3837 | 5 | yes |
| brotli | 3 | 1.921 | 62,342 | 0.3799 | 5 | yes |
| brotli | 4 | 2.962 | 61,240 | 0.3732 | 5 | yes |
| brotli | 5 | 4.388 | 57,877 | 0.3527 | 5 | yes |
| brotli | 6 | 4.895 | 57,538 | 0.3506 | 5 | yes |
| brotli | 7 | 5.636 | 57,245 | 0.3488 | 5 | yes |
| brotli | 8 | 6.400 | 57,160 | 0.3483 | 5 | yes |
| brotli | 9 | 7.587 | 57,088 | 0.3479 | 5 | yes |
| brotli | 10 | 100.139 | 54,389 | 0.3314 | 5 | yes |
| brotli | 11 | 245.635 | 53,368 | 0.3252 | 5 | yes |
| zstd | 1 | 0.683 | 66,221 | 0.4035 | 5 | yes |
| zstd | 2 | 0.802 | 63,208 | 0.3852 | 5 | yes |
| zstd | 3 | 1.071 | 62,693 | 0.3820 | 5 | yes |
| zstd | 4 | 1.892 | 60,843 | 0.3708 | 5 | yes |
| zstd | 5 | 2.226 | 60,346 | 0.3677 | 5 | yes |
| zstd | 6 | 2.603 | 59,421 | 0.3621 | 5 | yes |
| zstd | 7 | 3.006 | 58,638 | 0.3573 | 5 | yes |
| zstd | 8 | 3.735 | 58,163 | 0.3544 | 5 | yes |
| zstd | 9 | 4.292 | 57,917 | 0.3529 | 5 | yes |
| zstd | 10 | 5.109 | 57,792 | 0.3522 | 5 | yes |
| zstd | 11 | 8.669 | 57,490 | 0.3503 | 5 | yes |
| zstd | 12 | 9.024 | 57,475 | 0.3502 | 5 | yes |
| zstd | 13 | 16.221 | 56,464 | 0.3441 | 5 | yes |
| zstd | 14 | 19.572 | 56,028 | 0.3414 | 5 | yes |
| zstd | 15 | 20.207 | 56,011 | 0.3413 | 5 | yes |
| zstd | 16 | 27.265 | 55,838 | 0.3403 | 5 | yes |
| zstd | 17 | 27.379 | 55,838 | 0.3403 | 5 | yes |
| zstd | 18 | 45.790 | 55,766 | 0.3398 | 5 | yes |
| zstd | 19 | 46.263 | 55,766 | 0.3398 | 5 | yes |
| zstd | 20 | 46.299 | 55,766 | 0.3398 | 5 | yes |
| zstd | 21 | 44.729 | 55,766 | 0.3398 | 5 | yes |
| zstd | 22 | 47.137 | 55,766 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.808 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.857 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.973 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.085 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.401 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.774 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.119 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.860 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.868 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.264 | 30,978 | 0.4230 | 14 | yes |
| brotli | 1 | 0.385 | 29,754 | 0.4063 | 6 | yes |
| brotli | 2 | 0.696 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.800 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.307 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.894 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.042 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.412 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.798 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.317 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 41.494 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 97.445 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.257 | 28,919 | 0.3949 | 8 | yes |
| zstd | 2 | 0.304 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.365 | 27,463 | 0.3750 | 9 | yes |
| zstd | 4 | 0.500 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.873 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.156 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.348 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.486 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.682 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.988 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.252 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.385 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.545 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.807 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 8.099 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 11.132 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.987 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.972 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.826 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.741 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.755 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.735 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.579 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.682 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.797 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.911 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.265 | 21,126 | 0.2789 | 8 | yes |
| gzip | 6 | 1.893 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.530 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.598 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.849 | 20,676 | 0.2730 | 7 | yes |
| brotli | 0 | 0.254 | 25,901 | 0.3420 | 11 | yes |
| brotli | 1 | 0.385 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.672 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.746 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.135 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.684 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.888 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.277 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.784 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.489 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 30.087 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 87.810 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.273 | 22,639 | 0.2989 | 5 | yes |
| zstd | 2 | 0.280 | 22,433 | 0.2962 | 7 | yes |
| zstd | 3 | 0.359 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.447 | 22,181 | 0.2929 | 5 | yes |
| zstd | 5 | 0.806 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.068 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.309 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.501 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.874 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.445 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.318 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.280 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.159 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.230 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.499 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 11.880 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 15.017 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.035 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 22.886 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 27.007 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.291 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 43.905 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.109 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.129 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.310 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.707 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.167 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.895 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.550 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.744 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.828 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.461 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.612 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.195 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.381 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.024 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.936 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.315 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.605 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.191 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.158 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 99.067 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 303.087 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.496 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.544 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.607 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.658 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 2.038 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.252 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.536 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.989 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.530 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.589 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.196 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.074 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.043 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.100 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.998 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 57.175 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 64.605 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 85.778 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 97.044 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 102.250 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 102.901 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 101.613 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 92.151 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 90.607 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 108.923 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 143.392 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 171.190 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 218.293 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 322.377 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 904.555 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1202.871 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 45.447 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 61.179 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 113.290 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 132.421 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 179.547 | 3,125,451 | 0.1424 | 9 | yes |
| brotli | 5 | 301.249 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 359.072 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 501.465 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 633.822 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 873.516 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 13167.714 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37467.112 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.421 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 56.066 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 67.766 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 70.709 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 147.123 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 200.524 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 224.324 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 287.107 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 299.100 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 415.104 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 613.134 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 641.281 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 844.115 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1074.597 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1323.083 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3307.414 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3797.909 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5333.663 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9580.398 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9795.084 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9908.865 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 10329.323 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.213 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.220 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.364 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.357 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.426 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.594 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.258 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.229 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.402 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.911 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.326 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.948 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.041 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.541 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.732 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.116 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.198 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 52.152 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 63.165 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 905.270 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1923.360 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.049 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.892 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.975 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.533 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.369 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.990 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.131 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.678 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.781 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.648 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.625 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.589 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 49.607 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 49.461 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 49.486 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 90.017 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 111.589 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 148.714 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 165.095 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 165.948 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 167.508 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 170.592 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.136 | 5,506 | 0.2826 | 5 | yes |
| gzip | 2 | 0.141 | 5,424 | 0.2784 | 12 | yes |
| gzip | 3 | 0.169 | 5,356 | 0.2749 | 20 | yes |
| gzip | 4 | 0.209 | 5,145 | 0.2641 | 7 | yes |
| gzip | 5 | 0.269 | 4,896 | 0.2513 | 7 | yes |
| gzip | 6 | 0.376 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.483 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.653 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.637 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.058 | 6,028 | 0.3094 | 14 | yes |
| brotli | 1 | 0.073 | 5,737 | 0.2945 | 21 | yes |
| brotli | 2 | 0.143 | 4,944 | 0.2538 | 8 | yes |
| brotli | 3 | 0.162 | 4,930 | 0.2531 | 13 | yes |
| brotli | 4 | 0.292 | 4,898 | 0.2514 | 5 | yes |
| brotli | 5 | 0.453 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.489 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.573 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.586 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.729 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.227 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.785 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.060 | 5,379 | 0.2761 | 13 | yes |
| zstd | 2 | 0.067 | 5,176 | 0.2657 | 9 | yes |
| zstd | 3 | 0.107 | 5,169 | 0.2653 | 6 | yes |
| zstd | 4 | 0.096 | 5,154 | 0.2646 | 12 | yes |
| zstd | 5 | 0.192 | 5,074 | 0.2605 | 5 | yes |
| zstd | 6 | 0.252 | 4,797 | 0.2463 | 6 | yes |
| zstd | 7 | 0.301 | 4,702 | 0.2414 | 6 | yes |
| zstd | 8 | 0.347 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.426 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.542 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.613 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.652 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.008 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.803 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.916 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.884 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.882 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.890 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.676 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.702 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.696 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.689 | 4,348 | 0.2232 | 5 | yes |
