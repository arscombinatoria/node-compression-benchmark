# Node Compression Benchmark

Last updated: 2026-08-20T21:18:37.314Z

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
| gzip | 1 | 1.038 | 31,033 | 0.3941 | 6 | yes |
| gzip | 2 | 1.074 | 30,134 | 0.3827 | 7 | yes |
| gzip | 3 | 1.192 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.351 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.779 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.132 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.342 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.760 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.723 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.384 | 33,111 | 0.4205 | 13 | yes |
| brotli | 1 | 0.783 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.882 | 29,394 | 0.3733 | 5 | yes |
| brotli | 3 | 1.027 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.584 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.257 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.351 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 5.677 | 26,773 | 0.3400 | 15 | yes |
| brotli | 8 | 4.308 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 6.444 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 35.793 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 100.484 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.241 | 31,062 | 0.3944 | 13 | yes |
| zstd | 2 | 0.285 | 30,069 | 0.3818 | 25 | no |
| zstd | 3 | 0.301 | 29,214 | 0.3710 | 22 | yes |
| zstd | 4 | 0.374 | 29,108 | 0.3696 | 21 | yes |
| zstd | 5 | 0.912 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.212 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.530 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.636 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.823 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.086 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.524 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.615 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.611 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.647 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.720 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 9.969 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 9.889 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 9.933 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 19.475 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.424 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.434 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.391 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 92.885 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 95.913 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 105.331 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 115.388 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 134.456 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 152.610 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 164.252 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 183.099 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 197.189 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.585 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.957 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 51.133 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 65.222 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 91.736 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 125.372 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 147.933 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 434.620 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 578.432 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 745.653 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6872.224 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13944.369 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.598 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.598 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 38.166 | 3,139,155 | 0.5736 | 6 | yes |
| zstd | 4 | 45.221 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 68.289 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 81.237 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 87.487 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 103.299 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 101.736 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 124.805 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 168.969 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 198.419 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 422.304 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 471.770 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 543.700 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 699.185 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 834.344 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1180.341 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1351.294 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1303.921 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1302.857 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1342.080 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.174 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 13.229 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 15.806 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 14.149 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 14.153 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 14.105 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 14.204 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 14.181 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 14.413 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.230 | 596,751 | 0.9970 | 5 | yes |
| brotli | 1 | 0.205 | 598,581 | 1.0000 | 5 | yes |
| brotli | 2 | 0.524 | 598,587 | 1.0000 | 5 | yes |
| brotli | 3 | 0.715 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 0.935 | 598,581 | 1.0000 | 5 | yes |
| brotli | 5 | 1.447 | 598,581 | 1.0000 | 25 | no |
| brotli | 6 | 1.411 | 598,581 | 1.0000 | 25 | no |
| brotli | 7 | 1.899 | 598,581 | 1.0000 | 17 | yes |
| brotli | 8 | 1.887 | 598,581 | 1.0000 | 5 | yes |
| brotli | 9 | 4.102 | 598,581 | 1.0000 | 12 | yes |
| brotli | 10 | 116.638 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 290.455 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.270 | 598,601 | 1.0000 | 8 | yes |
| zstd | 2 | 0.279 | 598,600 | 1.0000 | 9 | yes |
| zstd | 3 | 0.302 | 598,600 | 1.0000 | 17 | yes |
| zstd | 4 | 0.336 | 598,600 | 1.0000 | 7 | yes |
| zstd | 5 | 0.475 | 598,600 | 1.0000 | 25 | no |
| zstd | 6 | 0.452 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.502 | 598,600 | 1.0000 | 5 | yes |
| zstd | 8 | 0.506 | 598,600 | 1.0000 | 7 | yes |
| zstd | 9 | 0.564 | 598,600 | 1.0000 | 5 | yes |
| zstd | 10 | 0.627 | 598,600 | 1.0000 | 17 | yes |
| zstd | 11 | 0.593 | 598,600 | 1.0000 | 5 | yes |
| zstd | 12 | 0.589 | 598,600 | 1.0000 | 5 | yes |
| zstd | 13 | 2.286 | 595,998 | 0.9957 | 12 | yes |
| zstd | 14 | 2.332 | 595,998 | 0.9957 | 14 | yes |
| zstd | 15 | 2.340 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 15.307 | 595,898 | 0.9955 | 5 | yes |
| zstd | 17 | 14.797 | 595,889 | 0.9955 | 5 | yes |
| zstd | 18 | 21.700 | 595,891 | 0.9955 | 5 | yes |
| zstd | 19 | 26.343 | 595,894 | 0.9955 | 6 | yes |
| zstd | 20 | 26.463 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 30.100 | 595,894 | 0.9955 | 8 | yes |
| zstd | 22 | 27.823 | 595,894 | 0.9955 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,941 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.303 | 145,463 | 0.2963 | 5 | yes |
| gzip | 2 | 4.721 | 138,697 | 0.2825 | 5 | yes |
| gzip | 3 | 6.247 | 134,146 | 0.2732 | 5 | yes |
| gzip | 4 | 6.321 | 125,867 | 0.2564 | 5 | yes |
| gzip | 5 | 9.307 | 121,190 | 0.2469 | 5 | yes |
| gzip | 6 | 13.864 | 119,487 | 0.2434 | 5 | yes |
| gzip | 7 | 17.838 | 119,013 | 0.2424 | 5 | yes |
| gzip | 8 | 34.872 | 118,743 | 0.2419 | 5 | yes |
| gzip | 9 | 54.016 | 118,677 | 0.2417 | 5 | yes |
| brotli | 0 | 1.554 | 149,811 | 0.3052 | 5 | yes |
| brotli | 1 | 2.197 | 137,613 | 0.2803 | 5 | yes |
| brotli | 2 | 3.965 | 129,419 | 0.2636 | 5 | yes |
| brotli | 3 | 4.623 | 126,784 | 0.2582 | 5 | yes |
| brotli | 4 | 6.720 | 122,590 | 0.2497 | 5 | yes |
| brotli | 5 | 10.472 | 112,874 | 0.2299 | 5 | yes |
| brotli | 6 | 12.116 | 110,224 | 0.2245 | 5 | yes |
| brotli | 7 | 14.841 | 108,234 | 0.2205 | 12 | yes |
| brotli | 8 | 17.848 | 107,204 | 0.2184 | 5 | yes |
| brotli | 9 | 22.928 | 106,319 | 0.2166 | 5 | yes |
| brotli | 10 | 294.792 | 98,846 | 0.2013 | 5 | yes |
| brotli | 11 | 760.662 | 96,633 | 0.1968 | 5 | yes |
| zstd | 1 | 1.775 | 138,392 | 0.2819 | 5 | yes |
| zstd | 2 | 1.919 | 134,091 | 0.2731 | 5 | yes |
| zstd | 3 | 2.113 | 126,431 | 0.2575 | 5 | yes |
| zstd | 4 | 2.418 | 126,256 | 0.2572 | 5 | yes |
| zstd | 5 | 4.623 | 117,628 | 0.2396 | 5 | yes |
| zstd | 6 | 6.313 | 113,626 | 0.2314 | 5 | yes |
| zstd | 7 | 7.117 | 112,084 | 0.2283 | 5 | yes |
| zstd | 8 | 8.905 | 111,276 | 0.2267 | 5 | yes |
| zstd | 9 | 8.893 | 111,276 | 0.2267 | 5 | yes |
| zstd | 10 | 10.600 | 110,253 | 0.2246 | 5 | yes |
| zstd | 11 | 13.222 | 109,621 | 0.2233 | 5 | yes |
| zstd | 12 | 13.267 | 109,621 | 0.2233 | 5 | yes |
| zstd | 13 | 27.181 | 108,424 | 0.2208 | 5 | yes |
| zstd | 14 | 32.883 | 107,870 | 0.2197 | 5 | yes |
| zstd | 15 | 37.010 | 107,804 | 0.2196 | 5 | yes |
| zstd | 16 | 66.605 | 102,204 | 0.2082 | 5 | yes |
| zstd | 17 | 74.688 | 101,287 | 0.2063 | 5 | yes |
| zstd | 18 | 107.013 | 100,502 | 0.2047 | 5 | yes |
| zstd | 19 | 136.480 | 100,407 | 0.2045 | 5 | yes |
| zstd | 20 | 137.466 | 100,407 | 0.2045 | 5 | yes |
| zstd | 21 | 136.557 | 100,405 | 0.2045 | 5 | yes |
| zstd | 22 | 139.581 | 100,405 | 0.2045 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.070 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.072 | 4,874 | 0.2831 | 25 | yes |
| gzip | 3 | 0.084 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.111 | 4,530 | 0.2631 | 16 | yes |
| gzip | 5 | 0.143 | 4,441 | 0.2579 | 18 | yes |
| gzip | 6 | 0.169 | 4,425 | 0.2570 | 14 | yes |
| gzip | 7 | 0.228 | 4,418 | 0.2566 | 25 | no |
| gzip | 8 | 0.428 | 4,419 | 0.2567 | 7 | yes |
| gzip | 9 | 0.419 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.053 | 5,235 | 0.3041 | 8 | yes |
| brotli | 1 | 0.066 | 5,134 | 0.2982 | 13 | yes |
| brotli | 2 | 0.098 | 4,741 | 0.2754 | 16 | yes |
| brotli | 3 | 0.120 | 4,650 | 0.2701 | 13 | yes |
| brotli | 4 | 0.192 | 4,555 | 0.2646 | 25 | no |
| brotli | 5 | 0.265 | 4,276 | 0.2484 | 25 | no |
| brotli | 6 | 0.292 | 4,275 | 0.2483 | 25 | no |
| brotli | 7 | 0.441 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.406 | 4,257 | 0.2473 | 12 | yes |
| brotli | 9 | 1.826 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.259 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.404 | 3,873 | 0.2250 | 5 | yes |
| zstd | 1 | 0.054 | 4,923 | 0.2859 | 12 | yes |
| zstd | 2 | 0.058 | 4,868 | 0.2827 | 14 | yes |
| zstd | 3 | 0.070 | 4,717 | 0.2740 | 25 | no |
| zstd | 4 | 0.073 | 4,679 | 0.2718 | 13 | yes |
| zstd | 5 | 0.134 | 4,519 | 0.2625 | 9 | yes |
| zstd | 6 | 0.170 | 4,437 | 0.2577 | 11 | yes |
| zstd | 7 | 0.196 | 4,437 | 0.2577 | 9 | yes |
| zstd | 8 | 0.210 | 4,426 | 0.2571 | 25 | no |
| zstd | 9 | 0.234 | 4,420 | 0.2567 | 19 | yes |
| zstd | 10 | 0.309 | 4,410 | 0.2561 | 16 | yes |
| zstd | 11 | 0.606 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.651 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.932 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.401 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.497 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.167 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.283 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.289 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.490 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.494 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.503 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.496 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.053 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.049 | 3,182 | 0.4444 | 17 | yes |
| gzip | 3 | 0.050 | 3,153 | 0.4403 | 12 | yes |
| gzip | 4 | 0.061 | 3,095 | 0.4322 | 20 | yes |
| gzip | 5 | 0.067 | 3,051 | 0.4261 | 19 | yes |
| gzip | 6 | 0.072 | 3,044 | 0.4251 | 10 | yes |
| gzip | 7 | 0.075 | 3,042 | 0.4248 | 25 | no |
| gzip | 8 | 0.076 | 3,042 | 0.4248 | 8 | yes |
| gzip | 9 | 0.072 | 3,042 | 0.4248 | 5 | yes |
| brotli | 0 | 0.030 | 3,549 | 0.4956 | 9 | yes |
| brotli | 1 | 0.040 | 3,381 | 0.4721 | 10 | yes |
| brotli | 2 | 0.055 | 3,263 | 0.4557 | 13 | yes |
| brotli | 3 | 0.074 | 3,216 | 0.4491 | 13 | yes |
| brotli | 4 | 0.121 | 3,147 | 0.4395 | 20 | yes |
| brotli | 5 | 0.156 | 2,963 | 0.4138 | 13 | yes |
| brotli | 6 | 0.161 | 2,952 | 0.4122 | 9 | yes |
| brotli | 7 | 0.174 | 2,944 | 0.4111 | 17 | yes |
| brotli | 8 | 0.169 | 2,944 | 0.4111 | 7 | yes |
| brotli | 9 | 1.539 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.358 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 8.199 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.030 | 3,254 | 0.4544 | 25 | yes |
| zstd | 2 | 0.032 | 3,200 | 0.4469 | 17 | yes |
| zstd | 3 | 0.039 | 3,176 | 0.4435 | 13 | yes |
| zstd | 4 | 0.060 | 3,102 | 0.4332 | 14 | yes |
| zstd | 5 | 0.068 | 3,079 | 0.4300 | 13 | yes |
| zstd | 6 | 0.084 | 3,060 | 0.4273 | 9 | yes |
| zstd | 7 | 0.097 | 3,053 | 0.4263 | 7 | yes |
| zstd | 8 | 0.099 | 3,053 | 0.4263 | 23 | yes |
| zstd | 9 | 0.121 | 3,055 | 0.4266 | 25 | no |
| zstd | 10 | 0.129 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.228 | 3,044 | 0.4251 | 17 | yes |
| zstd | 12 | 0.442 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.592 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.579 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.562 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.069 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.045 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.066 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.048 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.074 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.111 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.047 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 166,624 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.092 | 67,977 | 0.4080 | 5 | yes |
| gzip | 2 | 2.263 | 66,279 | 0.3978 | 5 | yes |
| gzip | 3 | 2.596 | 65,249 | 0.3916 | 5 | yes |
| gzip | 4 | 2.905 | 62,863 | 0.3773 | 5 | yes |
| gzip | 5 | 3.952 | 61,226 | 0.3675 | 5 | yes |
| gzip | 6 | 4.997 | 60,947 | 0.3658 | 5 | yes |
| gzip | 7 | 5.430 | 60,906 | 0.3655 | 5 | yes |
| gzip | 8 | 5.891 | 60,892 | 0.3654 | 5 | yes |
| gzip | 9 | 5.930 | 60,892 | 0.3654 | 5 | yes |
| brotli | 0 | 0.668 | 72,364 | 0.4343 | 5 | yes |
| brotli | 1 | 0.961 | 69,292 | 0.4159 | 5 | yes |
| brotli | 2 | 1.750 | 63,905 | 0.3835 | 5 | yes |
| brotli | 3 | 2.072 | 63,322 | 0.3800 | 5 | yes |
| brotli | 4 | 3.079 | 62,116 | 0.3728 | 5 | yes |
| brotli | 5 | 4.527 | 58,765 | 0.3527 | 5 | yes |
| brotli | 6 | 5.022 | 58,363 | 0.3503 | 5 | yes |
| brotli | 7 | 6.204 | 58,113 | 0.3488 | 5 | yes |
| brotli | 8 | 6.733 | 58,028 | 0.3483 | 5 | yes |
| brotli | 9 | 9.013 | 57,951 | 0.3478 | 5 | yes |
| brotli | 10 | 106.518 | 55,132 | 0.3309 | 5 | yes |
| brotli | 11 | 274.783 | 54,171 | 0.3251 | 5 | yes |
| zstd | 1 | 0.612 | 67,252 | 0.4036 | 8 | yes |
| zstd | 2 | 0.805 | 64,236 | 0.3855 | 5 | yes |
| zstd | 3 | 0.984 | 63,718 | 0.3824 | 5 | yes |
| zstd | 4 | 1.846 | 61,769 | 0.3707 | 5 | yes |
| zstd | 5 | 2.097 | 61,226 | 0.3675 | 5 | yes |
| zstd | 6 | 2.524 | 60,325 | 0.3620 | 5 | yes |
| zstd | 7 | 2.990 | 59,490 | 0.3570 | 5 | yes |
| zstd | 8 | 3.671 | 59,014 | 0.3542 | 5 | yes |
| zstd | 9 | 4.319 | 58,750 | 0.3526 | 5 | yes |
| zstd | 10 | 5.069 | 58,611 | 0.3518 | 5 | yes |
| zstd | 11 | 8.601 | 58,323 | 0.3500 | 5 | yes |
| zstd | 12 | 9.066 | 58,307 | 0.3499 | 5 | yes |
| zstd | 13 | 15.386 | 57,310 | 0.3439 | 5 | yes |
| zstd | 14 | 18.077 | 56,860 | 0.3412 | 5 | yes |
| zstd | 15 | 18.621 | 56,832 | 0.3411 | 5 | yes |
| zstd | 16 | 23.744 | 56,647 | 0.3400 | 5 | yes |
| zstd | 17 | 23.756 | 56,647 | 0.3400 | 5 | yes |
| zstd | 18 | 41.598 | 56,578 | 0.3396 | 5 | yes |
| zstd | 19 | 40.483 | 56,578 | 0.3396 | 5 | yes |
| zstd | 20 | 40.656 | 56,578 | 0.3396 | 5 | yes |
| zstd | 21 | 40.865 | 56,578 | 0.3396 | 5 | yes |
| zstd | 22 | 40.931 | 56,578 | 0.3396 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.857 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.925 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.087 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.189 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.578 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.048 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.449 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.348 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.344 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.202 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.327 | 29,754 | 0.4063 | 12 | yes |
| brotli | 2 | 0.721 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.857 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.357 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.956 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.159 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.652 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.801 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.535 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 41.483 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 100.707 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.200 | 28,919 | 0.3949 | 14 | yes |
| zstd | 2 | 0.229 | 28,008 | 0.3824 | 10 | yes |
| zstd | 3 | 0.271 | 27,463 | 0.3750 | 21 | yes |
| zstd | 4 | 0.313 | 27,100 | 0.3700 | 16 | yes |
| zstd | 5 | 0.796 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.094 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.313 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.429 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.658 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.950 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.182 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.336 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.206 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.464 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.576 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.815 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.808 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.846 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.543 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.801 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.593 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.658 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.717 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.825 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.976 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 1.114 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.557 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 2.395 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 3.203 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 9.316 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 9.419 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.199 | 27,781 | 0.3075 | 12 | yes |
| brotli | 1 | 0.337 | 25,973 | 0.2875 | 23 | yes |
| brotli | 2 | 0.738 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.877 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.268 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.864 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 2.115 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.560 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.978 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 5.104 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 36.121 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 105.646 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.219 | 24,608 | 0.2724 | 12 | yes |
| zstd | 2 | 0.241 | 24,387 | 0.2700 | 11 | yes |
| zstd | 3 | 0.273 | 24,157 | 0.2674 | 12 | yes |
| zstd | 4 | 0.379 | 24,076 | 0.2665 | 5 | yes |
| zstd | 5 | 0.807 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 1.115 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.393 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.601 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.990 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.540 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.807 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.917 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 5.961 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 8.274 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 9.868 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 13.583 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 18.116 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 27.696 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 27.698 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 32.402 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 47.672 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 55.050 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.208 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.261 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.499 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.771 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.309 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.212 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.977 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.395 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.466 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.327 | 43,268 | 0.1864 | 14 | yes |
| brotli | 1 | 0.658 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.240 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.461 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.105 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.006 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.355 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.782 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.357 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.604 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 100.276 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 299.490 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.377 | 35,549 | 0.1532 | 23 | yes |
| zstd | 2 | 0.520 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.541 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.473 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.705 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.960 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.165 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.677 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.312 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.900 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.139 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.950 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.736 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.298 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.152 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.053 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.184 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 72.722 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.750 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 83.922 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.652 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 84.631 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,088,846 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 104.218 | 3,786,228 | 0.2216 | 5 | yes |
| gzip | 2 | 114.505 | 3,637,199 | 0.2128 | 5 | yes |
| gzip | 3 | 144.612 | 3,517,128 | 0.2058 | 5 | yes |
| gzip | 4 | 156.227 | 3,388,581 | 0.1983 | 5 | yes |
| gzip | 5 | 207.298 | 3,167,259 | 0.1853 | 5 | yes |
| gzip | 6 | 323.666 | 3,098,703 | 0.1813 | 5 | yes |
| gzip | 7 | 445.761 | 3,032,397 | 0.1774 | 5 | yes |
| gzip | 8 | 1338.605 | 2,964,487 | 0.1735 | 5 | yes |
| gzip | 9 | 1332.577 | 2,963,688 | 0.1734 | 5 | yes |
| brotli | 0 | 44.904 | 4,195,167 | 0.2455 | 5 | yes |
| brotli | 1 | 68.875 | 3,728,851 | 0.2182 | 5 | yes |
| brotli | 2 | 115.920 | 3,433,235 | 0.2009 | 5 | yes |
| brotli | 3 | 136.580 | 3,377,124 | 0.1976 | 5 | yes |
| brotli | 4 | 192.361 | 3,303,878 | 0.1933 | 5 | yes |
| brotli | 5 | 299.023 | 2,946,664 | 0.1724 | 5 | yes |
| brotli | 6 | 363.023 | 2,915,320 | 0.1706 | 5 | yes |
| brotli | 7 | 538.183 | 2,887,582 | 0.1690 | 5 | yes |
| brotli | 8 | 724.391 | 2,868,532 | 0.1679 | 5 | yes |
| brotli | 9 | 965.058 | 2,857,411 | 0.1672 | 5 | yes |
| brotli | 10 | 11156.370 | 2,448,858 | 0.1433 | 5 | yes |
| brotli | 11 | 28539.655 | 2,330,104 | 0.1364 | 5 | yes |
| zstd | 1 | 45.060 | 3,534,613 | 0.2068 | 5 | yes |
| zstd | 2 | 55.205 | 3,612,321 | 0.2114 | 5 | yes |
| zstd | 3 | 67.836 | 3,537,742 | 0.2070 | 5 | yes |
| zstd | 4 | 73.532 | 3,532,781 | 0.2067 | 5 | yes |
| zstd | 5 | 141.399 | 3,315,447 | 0.1940 | 5 | yes |
| zstd | 6 | 204.500 | 3,093,505 | 0.1810 | 5 | yes |
| zstd | 7 | 238.490 | 3,054,755 | 0.1788 | 5 | yes |
| zstd | 8 | 312.441 | 2,951,480 | 0.1727 | 5 | yes |
| zstd | 9 | 334.739 | 2,962,142 | 0.1733 | 5 | yes |
| zstd | 10 | 435.003 | 2,925,109 | 0.1712 | 5 | yes |
| zstd | 11 | 629.682 | 2,897,547 | 0.1696 | 5 | yes |
| zstd | 12 | 679.688 | 2,897,453 | 0.1696 | 5 | yes |
| zstd | 13 | 981.765 | 2,874,535 | 0.1682 | 5 | yes |
| zstd | 14 | 1225.761 | 2,860,101 | 0.1674 | 5 | yes |
| zstd | 15 | 1439.957 | 2,856,465 | 0.1672 | 5 | yes |
| zstd | 16 | 3030.714 | 2,667,907 | 0.1561 | 5 | yes |
| zstd | 17 | 3991.327 | 2,576,011 | 0.1507 | 5 | yes |
| zstd | 18 | 6082.439 | 2,556,665 | 0.1496 | 5 | yes |
| zstd | 19 | 6866.614 | 2,549,586 | 0.1492 | 5 | yes |
| zstd | 20 | 6772.679 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 21 | 6651.087 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 22 | 7010.503 | 2,543,154 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 13.635 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 14.867 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 17.583 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 18.294 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 26.990 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 32.261 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 34.474 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 37.523 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 37.297 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 4.078 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.688 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 10.412 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.565 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.606 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 28.021 | 380,339 | 0.4424 | 6 | yes |
| brotli | 6 | 31.975 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 48.323 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 57.094 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 67.960 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 1008.126 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 2103.451 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.246 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 4.078 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.628 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.447 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.763 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.516 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.663 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 19.284 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 19.670 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 22.486 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 27.302 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 27.124 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 59.887 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 61.613 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 60.495 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 103.780 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 126.591 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 160.465 | 358,220 | 0.4167 | 8 | yes |
| zstd | 19 | 179.769 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 176.788 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 179.266 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 179.861 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.076 | 5,565 | 0.2841 | 25 | yes |
| gzip | 2 | 0.085 | 5,486 | 0.2801 | 25 | no |
| gzip | 3 | 0.093 | 5,419 | 0.2767 | 23 | yes |
| gzip | 4 | 0.136 | 5,202 | 0.2656 | 25 | no |
| gzip | 5 | 0.154 | 4,958 | 0.2531 | 25 | no |
| gzip | 6 | 0.233 | 4,947 | 0.2526 | 25 | no |
| gzip | 7 | 0.510 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.695 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.672 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.057 | 6,082 | 0.3105 | 9 | yes |
| brotli | 1 | 0.076 | 5,794 | 0.2958 | 11 | yes |
| brotli | 2 | 0.107 | 5,002 | 0.2554 | 15 | yes |
| brotli | 3 | 0.135 | 4,986 | 0.2546 | 16 | yes |
| brotli | 4 | 0.276 | 4,954 | 0.2529 | 6 | yes |
| brotli | 5 | 0.393 | 4,641 | 0.2370 | 21 | yes |
| brotli | 6 | 0.475 | 4,630 | 0.2364 | 21 | yes |
| brotli | 7 | 0.575 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.606 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 2.038 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 7.654 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 22.556 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.055 | 5,441 | 0.2778 | 16 | yes |
| zstd | 2 | 0.059 | 5,242 | 0.2676 | 12 | yes |
| zstd | 3 | 0.070 | 5,234 | 0.2672 | 8 | yes |
| zstd | 4 | 0.073 | 5,212 | 0.2661 | 9 | yes |
| zstd | 5 | 0.141 | 5,133 | 0.2621 | 11 | yes |
| zstd | 6 | 0.190 | 4,853 | 0.2478 | 11 | yes |
| zstd | 7 | 0.224 | 4,757 | 0.2429 | 11 | yes |
| zstd | 8 | 0.245 | 4,750 | 0.2425 | 13 | yes |
| zstd | 9 | 0.335 | 4,744 | 0.2422 | 12 | yes |
| zstd | 10 | 0.441 | 4,746 | 0.2423 | 7 | yes |
| zstd | 11 | 0.601 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.621 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.974 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.737 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.824 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.569 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.550 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.560 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 4.981 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.016 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 5.064 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.022 | 4,415 | 0.2254 | 5 | yes |
