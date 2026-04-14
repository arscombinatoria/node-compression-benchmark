# Node Compression Benchmark

Last updated: 2026-04-14T23:10:56.469Z

This benchmark measures compression time, output size, and compression ratios for several popular npm packages across all gzip, Brotli, and Zstandard compression levels.

## Table of Contents

- [jquery/dist/jquery.min.js](#jquery-dist-jquery-min-js)
- [@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](#expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf)
- [@fontsource/m-plus-1p/files/m-plus-1p-1-400-normal.woff2](#fontsource-m-plus-1p-files-m-plus-1p-1-400-normal-woff2)
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
| gzip | 1 | 1.344 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.996 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.065 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.214 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.556 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.834 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.137 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.416 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.362 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.370 | 33,111 | 0.4205 | 11 | yes |
| brotli | 1 | 0.735 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.805 | 29,394 | 0.3733 | 9 | yes |
| brotli | 3 | 0.935 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.493 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.042 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.184 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.619 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.508 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.413 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.937 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.814 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.313 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.388 | 30,069 | 0.3818 | 6 | yes |
| zstd | 3 | 0.423 | 29,214 | 0.3710 | 9 | yes |
| zstd | 4 | 0.541 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 1.291 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.658 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.513 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.684 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.821 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.084 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.384 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.277 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.370 | 26,867 | 0.3412 | 7 | yes |
| zstd | 14 | 8.521 | 26,432 | 0.3357 | 8 | yes |
| zstd | 15 | 8.337 | 26,420 | 0.3355 | 6 | yes |
| zstd | 16 | 11.602 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 12.091 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 12.055 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 22.643 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 22.758 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 22.746 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 22.767 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 84.025 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 89.490 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 95.870 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 104.074 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 120.030 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 134.303 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 143.246 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 161.296 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 173.364 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.274 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.072 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 51.039 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.176 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 84.407 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 125.926 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 140.263 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 406.678 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 520.469 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 689.261 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6085.829 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12616.256 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.739 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.645 | 3,233,695 | 0.5909 | 6 | yes |
| zstd | 3 | 39.712 | 3,139,155 | 0.5736 | 7 | yes |
| zstd | 4 | 42.024 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 66.390 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.550 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 84.452 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 98.074 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 100.109 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 121.855 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 163.262 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 182.697 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 404.098 | 2,864,062 | 0.5233 | 7 | yes |
| zstd | 14 | 438.998 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 509.396 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 721.442 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 846.549 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1182.944 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1292.436 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1290.072 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1294.898 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1315.509 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="fontsource-m-plus-1p-files-m-plus-1p-1-400-normal-woff2">@fontsource/m-plus-1p/files/m-plus-1p-1-400-normal.woff2</h2>

- Original size: 1,604 bytes
- Chart: ![Compression ratio chart for @fontsource/m-plus-1p/files/m-plus-1p-1-400-normal.woff2](charts/fontsource-m-plus-1p-files-m-plus-1p-1-400-normal-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.042 | 1,627 | 1.0143 | 25 | no |
| gzip | 2 | 0.037 | 1,627 | 1.0143 | 7 | yes |
| gzip | 3 | 0.037 | 1,627 | 1.0143 | 25 | no |
| gzip | 4 | 0.038 | 1,627 | 1.0143 | 5 | yes |
| gzip | 5 | 0.037 | 1,627 | 1.0143 | 9 | yes |
| gzip | 6 | 0.036 | 1,627 | 1.0143 | 5 | yes |
| gzip | 7 | 0.037 | 1,627 | 1.0143 | 5 | yes |
| gzip | 8 | 0.068 | 1,627 | 1.0143 | 25 | no |
| gzip | 9 | 0.036 | 1,627 | 1.0143 | 8 | yes |
| brotli | 0 | 0.017 | 1,608 | 1.0025 | 8 | yes |
| brotli | 1 | 0.019 | 1,608 | 1.0025 | 8 | yes |
| brotli | 2 | 0.020 | 1,608 | 1.0025 | 19 | yes |
| brotli | 3 | 0.028 | 1,608 | 1.0025 | 15 | yes |
| brotli | 4 | 0.042 | 1,606 | 1.0012 | 8 | yes |
| brotli | 5 | 0.047 | 1,608 | 1.0025 | 25 | no |
| brotli | 6 | 0.045 | 1,608 | 1.0025 | 5 | yes |
| brotli | 7 | 0.042 | 1,608 | 1.0025 | 8 | yes |
| brotli | 8 | 0.042 | 1,608 | 1.0025 | 11 | yes |
| brotli | 9 | 1.406 | 1,608 | 1.0025 | 16 | yes |
| brotli | 10 | 2.403 | 1,605 | 1.0006 | 5 | yes |
| brotli | 11 | 3.090 | 1,608 | 1.0025 | 5 | yes |
| zstd | 1 | 0.019 | 1,614 | 1.0062 | 25 | yes |
| zstd | 2 | 0.019 | 1,614 | 1.0062 | 15 | yes |
| zstd | 3 | 0.022 | 1,614 | 1.0062 | 25 | no |
| zstd | 4 | 0.026 | 1,614 | 1.0062 | 8 | yes |
| zstd | 5 | 0.027 | 1,614 | 1.0062 | 5 | yes |
| zstd | 6 | 0.027 | 1,614 | 1.0062 | 5 | yes |
| zstd | 7 | 0.026 | 1,614 | 1.0062 | 25 | no |
| zstd | 8 | 0.039 | 1,614 | 1.0062 | 25 | no |
| zstd | 9 | 0.030 | 1,614 | 1.0062 | 25 | yes |
| zstd | 10 | 0.031 | 1,614 | 1.0062 | 25 | yes |
| zstd | 11 | 0.044 | 1,614 | 1.0062 | 21 | yes |
| zstd | 12 | 0.053 | 1,614 | 1.0062 | 9 | yes |
| zstd | 13 | 0.067 | 1,598 | 0.9963 | 25 | no |
| zstd | 14 | 0.060 | 1,598 | 0.9963 | 5 | yes |
| zstd | 15 | 0.059 | 1,598 | 0.9963 | 5 | yes |
| zstd | 16 | 0.093 | 1,598 | 0.9963 | 5 | yes |
| zstd | 17 | 0.092 | 1,598 | 0.9963 | 5 | yes |
| zstd | 18 | 0.092 | 1,598 | 0.9963 | 5 | yes |
| zstd | 19 | 0.091 | 1,598 | 0.9963 | 5 | yes |
| zstd | 20 | 0.093 | 1,598 | 0.9963 | 5 | yes |
| zstd | 21 | 0.091 | 1,598 | 0.9963 | 5 | yes |
| zstd | 22 | 0.093 | 1,598 | 0.9963 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 485,932 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.833 | 143,926 | 0.2962 | 5 | yes |
| gzip | 2 | 4.179 | 137,191 | 0.2823 | 5 | yes |
| gzip | 3 | 5.419 | 132,653 | 0.2730 | 5 | yes |
| gzip | 4 | 5.776 | 124,449 | 0.2561 | 5 | yes |
| gzip | 5 | 8.060 | 119,890 | 0.2467 | 5 | yes |
| gzip | 6 | 11.607 | 118,178 | 0.2432 | 5 | yes |
| gzip | 7 | 14.870 | 117,703 | 0.2422 | 5 | yes |
| gzip | 8 | 27.838 | 117,442 | 0.2417 | 5 | yes |
| gzip | 9 | 42.969 | 117,362 | 0.2415 | 5 | yes |
| brotli | 0 | 1.512 | 148,131 | 0.3048 | 5 | yes |
| brotli | 1 | 2.157 | 136,118 | 0.2801 | 5 | yes |
| brotli | 2 | 3.879 | 127,982 | 0.2634 | 5 | yes |
| brotli | 3 | 4.457 | 125,362 | 0.2580 | 5 | yes |
| brotli | 4 | 6.441 | 121,305 | 0.2496 | 5 | yes |
| brotli | 5 | 10.200 | 111,621 | 0.2297 | 5 | yes |
| brotli | 6 | 11.329 | 108,983 | 0.2243 | 5 | yes |
| brotli | 7 | 13.643 | 107,042 | 0.2203 | 5 | yes |
| brotli | 8 | 16.229 | 106,024 | 0.2182 | 5 | yes |
| brotli | 9 | 23.121 | 105,126 | 0.2163 | 5 | yes |
| brotli | 10 | 270.595 | 97,714 | 0.2011 | 5 | yes |
| brotli | 11 | 707.559 | 95,541 | 0.1966 | 5 | yes |
| zstd | 1 | 1.674 | 136,834 | 0.2816 | 5 | yes |
| zstd | 2 | 1.861 | 132,597 | 0.2729 | 5 | yes |
| zstd | 3 | 2.302 | 125,085 | 0.2574 | 5 | yes |
| zstd | 4 | 2.328 | 124,856 | 0.2569 | 5 | yes |
| zstd | 5 | 4.440 | 116,229 | 0.2392 | 5 | yes |
| zstd | 6 | 6.469 | 112,386 | 0.2313 | 5 | yes |
| zstd | 7 | 7.784 | 110,843 | 0.2281 | 5 | yes |
| zstd | 8 | 9.528 | 110,044 | 0.2265 | 5 | yes |
| zstd | 9 | 9.518 | 110,044 | 0.2265 | 5 | yes |
| zstd | 10 | 11.083 | 109,065 | 0.2244 | 5 | yes |
| zstd | 11 | 13.840 | 108,472 | 0.2232 | 5 | yes |
| zstd | 12 | 14.127 | 108,472 | 0.2232 | 5 | yes |
| zstd | 13 | 25.878 | 107,308 | 0.2208 | 5 | yes |
| zstd | 14 | 31.099 | 106,712 | 0.2196 | 5 | yes |
| zstd | 15 | 34.537 | 106,627 | 0.2194 | 5 | yes |
| zstd | 16 | 64.023 | 101,091 | 0.2080 | 5 | yes |
| zstd | 17 | 70.134 | 100,209 | 0.2062 | 5 | yes |
| zstd | 18 | 108.764 | 99,415 | 0.2046 | 5 | yes |
| zstd | 19 | 142.956 | 99,306 | 0.2044 | 5 | yes |
| zstd | 20 | 143.839 | 99,306 | 0.2044 | 5 | yes |
| zstd | 21 | 143.545 | 99,313 | 0.2044 | 5 | yes |
| zstd | 22 | 142.686 | 99,313 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.081 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.113 | 4,874 | 0.2831 | 19 | yes |
| gzip | 3 | 0.155 | 4,806 | 0.2791 | 5 | yes |
| gzip | 4 | 0.188 | 4,530 | 0.2631 | 5 | yes |
| gzip | 5 | 0.224 | 4,441 | 0.2579 | 9 | yes |
| gzip | 6 | 0.268 | 4,425 | 0.2570 | 6 | yes |
| gzip | 7 | 0.322 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.466 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.469 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.058 | 5,235 | 0.3041 | 17 | yes |
| brotli | 1 | 0.066 | 5,134 | 0.2982 | 9 | yes |
| brotli | 2 | 0.115 | 4,741 | 0.2754 | 14 | yes |
| brotli | 3 | 0.150 | 4,650 | 0.2701 | 9 | yes |
| brotli | 4 | 0.274 | 4,555 | 0.2646 | 7 | yes |
| brotli | 5 | 0.374 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.415 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.457 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.463 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 2.146 | 4,244 | 0.2465 | 7 | yes |
| brotli | 10 | 6.916 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.315 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.056 | 4,923 | 0.2859 | 8 | yes |
| zstd | 2 | 0.063 | 4,868 | 0.2827 | 19 | yes |
| zstd | 3 | 0.088 | 4,717 | 0.2740 | 16 | yes |
| zstd | 4 | 0.093 | 4,679 | 0.2718 | 12 | yes |
| zstd | 5 | 0.179 | 4,519 | 0.2625 | 17 | yes |
| zstd | 6 | 0.236 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.278 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.313 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.335 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.395 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.617 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.655 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.971 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.484 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.571 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.536 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.673 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.702 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.240 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.234 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.237 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.241 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,160 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.055 | 3,217 | 0.4493 | 25 | no |
| gzip | 2 | 0.062 | 3,179 | 0.4440 | 25 | no |
| gzip | 3 | 0.058 | 3,150 | 0.4399 | 25 | no |
| gzip | 4 | 0.069 | 3,092 | 0.4318 | 25 | yes |
| gzip | 5 | 0.080 | 3,047 | 0.4256 | 25 | no |
| gzip | 6 | 0.085 | 3,041 | 0.4247 | 25 | no |
| gzip | 7 | 0.092 | 3,039 | 0.4244 | 25 | no |
| gzip | 8 | 0.086 | 3,039 | 0.4244 | 25 | yes |
| gzip | 9 | 0.111 | 3,039 | 0.4244 | 5 | yes |
| brotli | 0 | 0.031 | 3,544 | 0.4950 | 13 | yes |
| brotli | 1 | 0.039 | 3,378 | 0.4718 | 16 | yes |
| brotli | 2 | 0.059 | 3,258 | 0.4550 | 25 | no |
| brotli | 3 | 0.077 | 3,207 | 0.4479 | 15 | yes |
| brotli | 4 | 0.155 | 3,138 | 0.4383 | 13 | yes |
| brotli | 5 | 0.228 | 2,961 | 0.4135 | 5 | yes |
| brotli | 6 | 0.229 | 2,950 | 0.4120 | 7 | yes |
| brotli | 7 | 0.256 | 2,942 | 0.4109 | 5 | yes |
| brotli | 8 | 0.237 | 2,942 | 0.4109 | 5 | yes |
| brotli | 9 | 2.255 | 2,943 | 0.4110 | 5 | yes |
| brotli | 10 | 3.424 | 2,813 | 0.3929 | 5 | yes |
| brotli | 11 | 7.893 | 2,771 | 0.3870 | 6 | yes |
| zstd | 1 | 0.037 | 3,250 | 0.4539 | 25 | yes |
| zstd | 2 | 0.038 | 3,196 | 0.4464 | 25 | no |
| zstd | 3 | 0.048 | 3,171 | 0.4429 | 12 | yes |
| zstd | 4 | 0.073 | 3,098 | 0.4327 | 25 | no |
| zstd | 5 | 0.078 | 3,077 | 0.4297 | 25 | no |
| zstd | 6 | 0.185 | 3,055 | 0.4267 | 5 | yes |
| zstd | 7 | 0.203 | 3,050 | 0.4260 | 5 | yes |
| zstd | 8 | 0.107 | 3,050 | 0.4260 | 25 | no |
| zstd | 9 | 0.197 | 3,050 | 0.4260 | 5 | yes |
| zstd | 10 | 0.174 | 3,050 | 0.4260 | 8 | yes |
| zstd | 11 | 0.384 | 3,041 | 0.4247 | 5 | yes |
| zstd | 12 | 0.489 | 3,009 | 0.4203 | 5 | yes |
| zstd | 13 | 0.692 | 2,994 | 0.4182 | 5 | yes |
| zstd | 14 | 0.672 | 2,994 | 0.4182 | 5 | yes |
| zstd | 15 | 0.684 | 2,994 | 0.4182 | 5 | yes |
| zstd | 16 | 1.312 | 2,991 | 0.4177 | 5 | yes |
| zstd | 17 | 1.290 | 2,991 | 0.4177 | 5 | yes |
| zstd | 18 | 1.306 | 2,991 | 0.4177 | 5 | yes |
| zstd | 19 | 1.303 | 2,991 | 0.4177 | 5 | yes |
| zstd | 20 | 1.290 | 2,991 | 0.4177 | 5 | yes |
| zstd | 21 | 1.283 | 2,991 | 0.4177 | 5 | yes |
| zstd | 22 | 1.315 | 2,991 | 0.4177 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.838 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 1.988 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.301 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.557 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.431 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.215 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 4.576 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 5.045 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 4.971 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.655 | 70,918 | 0.4333 | 5 | yes |
| brotli | 1 | 0.861 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.640 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 1.944 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 2.992 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.442 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 4.853 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 5.611 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 6.144 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 9.467 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 96.704 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 248.528 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.647 | 65,987 | 0.4032 | 7 | yes |
| zstd | 2 | 0.801 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 1.059 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.789 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.089 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.502 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 2.990 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 4.233 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.723 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 5.564 | 57,617 | 0.3520 | 7 | yes |
| zstd | 11 | 8.945 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 8.941 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 15.757 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 18.505 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 18.773 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 25.197 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 25.258 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 42.433 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 42.538 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 42.498 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 42.685 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 42.533 | 55,612 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.775 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.828 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.952 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.061 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.389 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.807 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.117 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.863 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.859 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.276 | 30,978 | 0.4230 | 5 | yes |
| brotli | 1 | 0.371 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.687 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.800 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.325 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.909 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.043 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.482 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.562 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.224 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 40.048 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 97.518 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.247 | 28,919 | 0.3949 | 8 | yes |
| zstd | 2 | 0.294 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.374 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.474 | 27,100 | 0.3700 | 7 | yes |
| zstd | 5 | 0.836 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.127 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.325 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.480 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.691 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.955 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.173 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.441 | 25,315 | 0.3457 | 7 | yes |
| zstd | 13 | 5.422 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.772 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.705 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.936 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 11.138 | 24,499 | 0.3345 | 6 | yes |
| zstd | 18 | 11.806 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 21.654 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.978 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 21.613 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 21.675 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.572 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.651 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.788 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.899 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.257 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.944 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.545 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 7.584 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 7.836 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.245 | 25,901 | 0.3420 | 12 | yes |
| brotli | 1 | 0.361 | 23,906 | 0.3156 | 5 | yes |
| brotli | 2 | 0.628 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.746 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.127 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.669 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.904 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.197 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.561 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 5.775 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 29.816 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 88.513 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.270 | 22,639 | 0.2989 | 6 | yes |
| zstd | 2 | 0.279 | 22,433 | 0.2962 | 6 | yes |
| zstd | 3 | 0.354 | 22,208 | 0.2932 | 5 | yes |
| zstd | 4 | 0.425 | 22,181 | 0.2929 | 9 | yes |
| zstd | 5 | 0.766 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.063 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.282 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.451 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.814 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.478 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.735 | 20,032 | 0.2645 | 7 | yes |
| zstd | 12 | 4.977 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.782 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 8.073 | 18,964 | 0.2504 | 6 | yes |
| zstd | 15 | 8.577 | 18,878 | 0.2493 | 6 | yes |
| zstd | 16 | 12.603 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 15.177 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 22.787 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 23.441 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 27.166 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.702 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 43.977 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.070 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.115 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.344 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.730 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.178 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.918 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.589 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.890 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.804 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.445 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.609 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.181 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.377 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.043 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.991 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.272 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.574 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.028 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 4.905 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 99.255 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 305.247 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.493 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.546 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.626 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.500 | 30,973 | 0.1334 | 7 | yes |
| zstd | 5 | 2.013 | 29,744 | 0.1281 | 12 | yes |
| zstd | 6 | 2.015 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.663 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 3.023 | 28,645 | 0.1234 | 6 | yes |
| zstd | 9 | 3.355 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.669 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.191 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.115 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.223 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.379 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.548 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.866 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 64.347 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 84.975 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 96.571 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 100.878 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 101.013 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 100.787 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 91.543 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 91.863 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 109.107 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 145.784 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 171.043 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 217.182 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 325.740 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 910.973 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1210.219 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 44.239 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 59.333 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 112.417 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 128.002 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 167.051 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 290.773 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 335.520 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 465.898 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 605.779 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 801.764 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 12935.076 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37329.095 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 44.907 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 60.212 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 69.917 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 69.077 | 3,454,596 | 0.1574 | 6 | yes |
| zstd | 5 | 141.966 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 197.214 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 225.085 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 287.458 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 293.383 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 405.326 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 604.339 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 628.966 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 769.058 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1004.955 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1259.052 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3204.284 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3645.464 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5144.066 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9351.953 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9797.057 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9727.806 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 10169.333 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.209 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.289 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.446 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.463 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.570 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.775 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.481 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.265 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.480 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.911 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.364 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.917 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.996 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.910 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.486 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.621 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 43.826 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 52.080 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 65.200 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 903.565 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1935.746 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.038 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.890 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.938 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.494 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.476 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.561 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 16.610 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 20.042 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 20.246 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 23.040 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 26.714 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 26.814 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 53.279 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 52.511 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 52.263 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 95.183 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 116.235 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 155.341 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 173.193 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 173.132 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 174.869 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 174.045 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.104 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.126 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.155 | 5,356 | 0.2749 | 15 | yes |
| gzip | 4 | 0.210 | 5,145 | 0.2641 | 5 | yes |
| gzip | 5 | 0.262 | 4,896 | 0.2513 | 7 | yes |
| gzip | 6 | 0.352 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.476 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.644 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.629 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.058 | 6,028 | 0.3094 | 12 | yes |
| brotli | 1 | 0.070 | 5,737 | 0.2945 | 23 | yes |
| brotli | 2 | 0.124 | 4,944 | 0.2538 | 20 | yes |
| brotli | 3 | 0.158 | 4,930 | 0.2531 | 13 | yes |
| brotli | 4 | 0.289 | 4,898 | 0.2514 | 5 | yes |
| brotli | 5 | 0.444 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.489 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.547 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.591 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.720 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.294 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.898 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.058 | 5,379 | 0.2761 | 9 | yes |
| zstd | 2 | 0.065 | 5,176 | 0.2657 | 23 | yes |
| zstd | 3 | 0.091 | 5,169 | 0.2653 | 12 | yes |
| zstd | 4 | 0.093 | 5,154 | 0.2646 | 12 | yes |
| zstd | 5 | 0.207 | 5,074 | 0.2605 | 14 | yes |
| zstd | 6 | 0.274 | 4,797 | 0.2463 | 5 | yes |
| zstd | 7 | 0.310 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.358 | 4,696 | 0.2411 | 7 | yes |
| zstd | 9 | 0.406 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.534 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.596 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.653 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.013 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.803 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.915 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.873 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.868 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.871 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.629 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.660 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.646 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.665 | 4,348 | 0.2232 | 5 | yes |
