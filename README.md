# Node Compression Benchmark

Last updated: 2026-09-06T21:16:38.816Z

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
| gzip | 1 | 1.397 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.512 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.591 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.770 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 2.225 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.548 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.050 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.397 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.338 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.379 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.765 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.823 | 29,394 | 0.3733 | 7 | yes |
| brotli | 3 | 0.971 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.492 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.330 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.489 | 26,844 | 0.3409 | 11 | yes |
| brotli | 7 | 3.830 | 26,773 | 0.3400 | 9 | yes |
| brotli | 8 | 2.773 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.824 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.812 | 25,340 | 0.3218 | 13 | yes |
| brotli | 11 | 95.997 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.324 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.349 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.386 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.489 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.887 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.200 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.454 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.582 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.809 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.016 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.378 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.515 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.595 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.954 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.118 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.176 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.191 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 13.097 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 22.953 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.843 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.905 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.746 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 84.553 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 89.594 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 92.433 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 101.961 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 117.125 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 132.936 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 143.518 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 160.639 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.294 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.546 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.564 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.126 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.505 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 84.950 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 126.557 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 142.488 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 429.453 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 547.504 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 705.010 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5915.769 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12728.703 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.932 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.706 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 39.020 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 43.302 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.262 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.615 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 85.788 | 2,946,701 | 0.5384 | 7 | yes |
| zstd | 8 | 98.592 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 98.586 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 128.895 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 169.870 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 190.766 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 411.985 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 476.929 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 514.717 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 716.797 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 844.120 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1200.889 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1330.744 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1310.946 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1333.790 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1307.484 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 11.812 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 11.780 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 11.702 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 12.456 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 12.455 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 12.421 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 12.397 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 12.135 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 12.146 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.244 | 596,751 | 0.9970 | 12 | yes |
| brotli | 1 | 0.232 | 598,581 | 1.0000 | 5 | yes |
| brotli | 2 | 0.617 | 598,587 | 1.0000 | 6 | yes |
| brotli | 3 | 0.748 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 1.011 | 598,581 | 1.0000 | 5 | yes |
| brotli | 5 | 1.493 | 598,581 | 1.0000 | 5 | yes |
| brotli | 6 | 1.612 | 598,581 | 1.0000 | 10 | yes |
| brotli | 7 | 1.877 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 2.023 | 598,581 | 1.0000 | 5 | yes |
| brotli | 9 | 5.286 | 598,581 | 1.0000 | 5 | yes |
| brotli | 10 | 105.865 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 262.553 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.265 | 598,601 | 1.0000 | 8 | yes |
| zstd | 2 | 0.285 | 598,600 | 1.0000 | 14 | yes |
| zstd | 3 | 0.341 | 598,600 | 1.0000 | 23 | yes |
| zstd | 4 | 0.365 | 598,600 | 1.0000 | 5 | yes |
| zstd | 5 | 0.491 | 598,600 | 1.0000 | 5 | yes |
| zstd | 6 | 0.487 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.564 | 598,600 | 1.0000 | 12 | yes |
| zstd | 8 | 0.557 | 598,600 | 1.0000 | 25 | no |
| zstd | 9 | 0.693 | 598,600 | 1.0000 | 5 | yes |
| zstd | 10 | 0.693 | 598,600 | 1.0000 | 5 | yes |
| zstd | 11 | 0.665 | 598,600 | 1.0000 | 5 | yes |
| zstd | 12 | 0.698 | 598,600 | 1.0000 | 5 | yes |
| zstd | 13 | 2.288 | 595,998 | 0.9957 | 5 | yes |
| zstd | 14 | 2.275 | 595,998 | 0.9957 | 5 | yes |
| zstd | 15 | 2.314 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 13.490 | 595,898 | 0.9955 | 5 | yes |
| zstd | 17 | 13.341 | 595,889 | 0.9955 | 5 | yes |
| zstd | 18 | 20.044 | 595,891 | 0.9955 | 6 | yes |
| zstd | 19 | 24.180 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 25.076 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 25.505 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 24.026 | 595,894 | 0.9955 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 491,133 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.873 | 145,515 | 0.2963 | 5 | yes |
| gzip | 2 | 4.226 | 138,742 | 0.2825 | 5 | yes |
| gzip | 3 | 5.457 | 134,178 | 0.2732 | 5 | yes |
| gzip | 4 | 5.781 | 125,904 | 0.2564 | 5 | yes |
| gzip | 5 | 8.113 | 121,244 | 0.2469 | 5 | yes |
| gzip | 6 | 11.728 | 119,535 | 0.2434 | 5 | yes |
| gzip | 7 | 14.894 | 119,056 | 0.2424 | 5 | yes |
| gzip | 8 | 28.009 | 118,789 | 0.2419 | 5 | yes |
| gzip | 9 | 43.801 | 118,722 | 0.2417 | 5 | yes |
| brotli | 0 | 1.549 | 149,857 | 0.3051 | 5 | yes |
| brotli | 1 | 2.238 | 137,662 | 0.2803 | 5 | yes |
| brotli | 2 | 3.904 | 129,468 | 0.2636 | 5 | yes |
| brotli | 3 | 4.403 | 126,782 | 0.2581 | 5 | yes |
| brotli | 4 | 6.436 | 122,564 | 0.2496 | 5 | yes |
| brotli | 5 | 9.916 | 112,906 | 0.2299 | 5 | yes |
| brotli | 6 | 11.466 | 110,272 | 0.2245 | 5 | yes |
| brotli | 7 | 13.554 | 108,288 | 0.2205 | 5 | yes |
| brotli | 8 | 17.392 | 107,239 | 0.2184 | 6 | yes |
| brotli | 9 | 24.469 | 106,336 | 0.2165 | 5 | yes |
| brotli | 10 | 267.874 | 98,876 | 0.2013 | 5 | yes |
| brotli | 11 | 711.410 | 96,673 | 0.1968 | 5 | yes |
| zstd | 1 | 1.673 | 138,429 | 0.2819 | 5 | yes |
| zstd | 2 | 1.772 | 134,145 | 0.2731 | 5 | yes |
| zstd | 3 | 2.365 | 126,482 | 0.2575 | 5 | yes |
| zstd | 4 | 2.341 | 126,300 | 0.2572 | 5 | yes |
| zstd | 5 | 4.461 | 117,669 | 0.2396 | 5 | yes |
| zstd | 6 | 6.136 | 113,671 | 0.2314 | 5 | yes |
| zstd | 7 | 6.869 | 112,134 | 0.2283 | 5 | yes |
| zstd | 8 | 8.553 | 111,308 | 0.2266 | 5 | yes |
| zstd | 9 | 8.605 | 111,308 | 0.2266 | 5 | yes |
| zstd | 10 | 10.141 | 110,287 | 0.2246 | 5 | yes |
| zstd | 11 | 12.853 | 109,656 | 0.2233 | 5 | yes |
| zstd | 12 | 12.805 | 109,656 | 0.2233 | 5 | yes |
| zstd | 13 | 25.276 | 108,458 | 0.2208 | 5 | yes |
| zstd | 14 | 30.296 | 107,909 | 0.2197 | 5 | yes |
| zstd | 15 | 33.660 | 107,840 | 0.2196 | 5 | yes |
| zstd | 16 | 63.277 | 102,248 | 0.2082 | 5 | yes |
| zstd | 17 | 69.904 | 101,327 | 0.2063 | 5 | yes |
| zstd | 18 | 109.614 | 100,538 | 0.2047 | 5 | yes |
| zstd | 19 | 143.443 | 100,425 | 0.2045 | 5 | yes |
| zstd | 20 | 144.120 | 100,425 | 0.2045 | 5 | yes |
| zstd | 21 | 143.446 | 100,425 | 0.2045 | 5 | yes |
| zstd | 22 | 143.676 | 100,425 | 0.2045 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.089 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.124 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.141 | 4,806 | 0.2791 | 17 | yes |
| gzip | 4 | 0.169 | 4,530 | 0.2631 | 16 | yes |
| gzip | 5 | 0.235 | 4,441 | 0.2579 | 12 | yes |
| gzip | 6 | 0.278 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.316 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.457 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.471 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.057 | 5,235 | 0.3041 | 13 | yes |
| brotli | 1 | 0.065 | 5,134 | 0.2982 | 13 | yes |
| brotli | 2 | 0.122 | 4,741 | 0.2754 | 11 | yes |
| brotli | 3 | 0.144 | 4,650 | 0.2701 | 17 | yes |
| brotli | 4 | 0.277 | 4,555 | 0.2646 | 7 | yes |
| brotli | 5 | 0.379 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.400 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.429 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.447 | 4,257 | 0.2473 | 6 | yes |
| brotli | 9 | 2.397 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.765 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.540 | 3,873 | 0.2250 | 5 | yes |
| zstd | 1 | 0.052 | 4,923 | 0.2859 | 15 | yes |
| zstd | 2 | 0.056 | 4,868 | 0.2827 | 13 | yes |
| zstd | 3 | 0.071 | 4,717 | 0.2740 | 13 | yes |
| zstd | 4 | 0.078 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.156 | 4,519 | 0.2625 | 9 | yes |
| zstd | 6 | 0.226 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.262 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.282 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.333 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.361 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.615 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.633 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.906 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.435 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.540 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.501 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.673 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.650 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.220 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.227 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.224 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.235 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.076 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.067 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.059 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.113 | 3,095 | 0.4322 | 5 | yes |
| gzip | 5 | 0.175 | 3,051 | 0.4261 | 12 | yes |
| gzip | 6 | 0.090 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.096 | 3,042 | 0.4248 | 25 | no |
| gzip | 8 | 0.102 | 3,042 | 0.4248 | 11 | yes |
| gzip | 9 | 0.104 | 3,042 | 0.4248 | 5 | yes |
| brotli | 0 | 0.031 | 3,549 | 0.4956 | 12 | yes |
| brotli | 1 | 0.039 | 3,381 | 0.4721 | 16 | yes |
| brotli | 2 | 0.059 | 3,263 | 0.4557 | 25 | no |
| brotli | 3 | 0.081 | 3,216 | 0.4491 | 25 | no |
| brotli | 4 | 0.154 | 3,147 | 0.4395 | 13 | yes |
| brotli | 5 | 0.225 | 2,963 | 0.4138 | 11 | yes |
| brotli | 6 | 0.225 | 2,952 | 0.4122 | 7 | yes |
| brotli | 7 | 0.262 | 2,944 | 0.4111 | 5 | yes |
| brotli | 8 | 0.271 | 2,944 | 0.4111 | 10 | yes |
| brotli | 9 | 2.088 | 2,945 | 0.4113 | 5 | yes |
| brotli | 10 | 3.081 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.713 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.032 | 3,254 | 0.4544 | 21 | yes |
| zstd | 2 | 0.033 | 3,200 | 0.4469 | 21 | yes |
| zstd | 3 | 0.043 | 3,176 | 0.4435 | 16 | yes |
| zstd | 4 | 0.060 | 3,102 | 0.4332 | 17 | yes |
| zstd | 5 | 0.071 | 3,079 | 0.4300 | 23 | yes |
| zstd | 6 | 0.088 | 3,060 | 0.4273 | 21 | yes |
| zstd | 7 | 0.129 | 3,053 | 0.4263 | 6 | yes |
| zstd | 8 | 0.135 | 3,053 | 0.4263 | 6 | yes |
| zstd | 9 | 0.165 | 3,055 | 0.4266 | 24 | yes |
| zstd | 10 | 0.166 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.345 | 3,044 | 0.4251 | 6 | yes |
| zstd | 12 | 0.483 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.665 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.666 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.664 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.271 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.261 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.282 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.274 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.267 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.276 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.279 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 167,536 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.940 | 68,258 | 0.4074 | 8 | yes |
| gzip | 2 | 2.070 | 66,628 | 0.3977 | 5 | yes |
| gzip | 3 | 2.333 | 65,566 | 0.3914 | 5 | yes |
| gzip | 4 | 2.621 | 63,153 | 0.3770 | 5 | yes |
| gzip | 5 | 3.471 | 61,493 | 0.3670 | 5 | yes |
| gzip | 6 | 4.335 | 61,220 | 0.3654 | 5 | yes |
| gzip | 7 | 4.727 | 61,178 | 0.3652 | 5 | yes |
| gzip | 8 | 5.102 | 61,159 | 0.3650 | 5 | yes |
| gzip | 9 | 5.126 | 61,159 | 0.3650 | 5 | yes |
| brotli | 0 | 0.683 | 72,624 | 0.4335 | 5 | yes |
| brotli | 1 | 0.936 | 69,540 | 0.4151 | 5 | yes |
| brotli | 2 | 1.678 | 64,217 | 0.3833 | 5 | yes |
| brotli | 3 | 1.957 | 63,611 | 0.3797 | 5 | yes |
| brotli | 4 | 3.032 | 62,461 | 0.3728 | 5 | yes |
| brotli | 5 | 4.518 | 59,022 | 0.3523 | 5 | yes |
| brotli | 6 | 5.039 | 58,657 | 0.3501 | 5 | yes |
| brotli | 7 | 5.798 | 58,375 | 0.3484 | 5 | yes |
| brotli | 8 | 6.480 | 58,271 | 0.3478 | 5 | yes |
| brotli | 9 | 10.151 | 58,184 | 0.3473 | 5 | yes |
| brotli | 10 | 98.789 | 55,378 | 0.3305 | 5 | yes |
| brotli | 11 | 246.689 | 54,340 | 0.3243 | 5 | yes |
| zstd | 1 | 0.629 | 67,501 | 0.4029 | 5 | yes |
| zstd | 2 | 0.823 | 64,552 | 0.3853 | 5 | yes |
| zstd | 3 | 1.037 | 64,032 | 0.3822 | 5 | yes |
| zstd | 4 | 1.814 | 62,020 | 0.3702 | 5 | yes |
| zstd | 5 | 2.046 | 61,498 | 0.3671 | 5 | yes |
| zstd | 6 | 2.471 | 60,584 | 0.3616 | 5 | yes |
| zstd | 7 | 2.944 | 59,738 | 0.3566 | 5 | yes |
| zstd | 8 | 3.665 | 59,250 | 0.3537 | 5 | yes |
| zstd | 9 | 4.185 | 58,995 | 0.3521 | 5 | yes |
| zstd | 10 | 5.089 | 58,843 | 0.3512 | 5 | yes |
| zstd | 11 | 8.842 | 58,566 | 0.3496 | 5 | yes |
| zstd | 12 | 8.801 | 58,550 | 0.3495 | 5 | yes |
| zstd | 13 | 16.362 | 57,536 | 0.3434 | 5 | yes |
| zstd | 14 | 17.708 | 57,080 | 0.3407 | 5 | yes |
| zstd | 15 | 18.166 | 57,055 | 0.3406 | 5 | yes |
| zstd | 16 | 24.912 | 56,875 | 0.3395 | 5 | yes |
| zstd | 17 | 24.837 | 56,875 | 0.3395 | 5 | yes |
| zstd | 18 | 42.252 | 56,810 | 0.3391 | 5 | yes |
| zstd | 19 | 42.164 | 56,810 | 0.3391 | 5 | yes |
| zstd | 20 | 42.158 | 56,810 | 0.3391 | 10 | yes |
| zstd | 21 | 42.165 | 56,810 | 0.3391 | 5 | yes |
| zstd | 22 | 42.095 | 56,810 | 0.3391 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.763 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.830 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.958 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.054 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.378 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.763 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.107 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.858 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.848 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.263 | 30,978 | 0.4230 | 8 | yes |
| brotli | 1 | 0.376 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.681 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.793 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.285 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.903 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.060 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.404 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.620 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 5.660 | 24,870 | 0.3396 | 9 | yes |
| brotli | 10 | 38.855 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 95.420 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.244 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.280 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.361 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.456 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.796 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.078 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.292 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.407 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.612 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.904 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.160 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.269 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.333 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.628 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.774 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.739 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.746 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.757 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.458 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.443 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.479 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.467 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.620 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.725 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.844 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 0.994 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.363 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 2.050 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.734 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 8.071 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 8.158 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.264 | 27,781 | 0.3075 | 25 | no |
| brotli | 1 | 0.393 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.694 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.811 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.215 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.902 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 2.074 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.404 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.841 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 6.122 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 34.076 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 104.036 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.295 | 24,608 | 0.2724 | 5 | yes |
| zstd | 2 | 0.295 | 24,387 | 0.2700 | 5 | yes |
| zstd | 3 | 0.347 | 24,157 | 0.2674 | 5 | yes |
| zstd | 4 | 0.415 | 24,076 | 0.2665 | 6 | yes |
| zstd | 5 | 0.784 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 1.116 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.356 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.558 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.942 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.659 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.665 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.853 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 6.142 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 8.405 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 9.954 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 15.002 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 19.822 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 28.367 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 31.988 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 37.086 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 48.700 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 55.179 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.056 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.128 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.311 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.684 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.157 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.884 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.547 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.764 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.831 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.443 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.622 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.179 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.375 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.017 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.975 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.265 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.568 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.080 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 7.412 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 96.213 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 298.764 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.482 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.559 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.569 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.412 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.614 | 29,744 | 0.1281 | 6 | yes |
| zstd | 6 | 1.929 | 29,727 | 0.1281 | 7 | yes |
| zstd | 7 | 2.166 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.680 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.439 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.401 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.825 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.583 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.491 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.553 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.453 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.693 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 63.371 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 85.217 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 95.875 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 100.047 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 100.272 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 100.174 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,088,846 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 93.532 | 3,786,228 | 0.2216 | 5 | yes |
| gzip | 2 | 102.135 | 3,637,199 | 0.2128 | 5 | yes |
| gzip | 3 | 125.409 | 3,517,128 | 0.2058 | 5 | yes |
| gzip | 4 | 149.706 | 3,388,581 | 0.1983 | 5 | yes |
| gzip | 5 | 190.797 | 3,167,259 | 0.1853 | 5 | yes |
| gzip | 6 | 281.631 | 3,098,703 | 0.1813 | 5 | yes |
| gzip | 7 | 384.138 | 3,032,397 | 0.1774 | 5 | yes |
| gzip | 8 | 1085.348 | 2,964,487 | 0.1735 | 5 | yes |
| gzip | 9 | 1127.520 | 2,963,688 | 0.1734 | 5 | yes |
| brotli | 0 | 45.272 | 4,195,167 | 0.2455 | 5 | yes |
| brotli | 1 | 64.122 | 3,728,851 | 0.2182 | 5 | yes |
| brotli | 2 | 110.377 | 3,433,235 | 0.2009 | 5 | yes |
| brotli | 3 | 130.981 | 3,377,124 | 0.1976 | 5 | yes |
| brotli | 4 | 176.721 | 3,303,878 | 0.1933 | 5 | yes |
| brotli | 5 | 291.719 | 2,946,664 | 0.1724 | 5 | yes |
| brotli | 6 | 353.833 | 2,915,320 | 0.1706 | 5 | yes |
| brotli | 7 | 508.023 | 2,887,582 | 0.1690 | 5 | yes |
| brotli | 8 | 684.892 | 2,868,532 | 0.1679 | 5 | yes |
| brotli | 9 | 913.987 | 2,857,411 | 0.1672 | 5 | yes |
| brotli | 10 | 10673.280 | 2,448,858 | 0.1433 | 5 | yes |
| brotli | 11 | 27661.453 | 2,330,104 | 0.1364 | 5 | yes |
| zstd | 1 | 44.504 | 3,534,613 | 0.2068 | 5 | yes |
| zstd | 2 | 56.358 | 3,612,321 | 0.2114 | 5 | yes |
| zstd | 3 | 67.255 | 3,537,742 | 0.2070 | 5 | yes |
| zstd | 4 | 70.405 | 3,532,781 | 0.2067 | 5 | yes |
| zstd | 5 | 135.405 | 3,315,447 | 0.1940 | 5 | yes |
| zstd | 6 | 192.818 | 3,093,505 | 0.1810 | 5 | yes |
| zstd | 7 | 226.124 | 3,054,755 | 0.1788 | 5 | yes |
| zstd | 8 | 285.842 | 2,951,480 | 0.1727 | 5 | yes |
| zstd | 9 | 326.455 | 2,962,142 | 0.1733 | 5 | yes |
| zstd | 10 | 435.549 | 2,925,109 | 0.1712 | 5 | yes |
| zstd | 11 | 627.669 | 2,897,547 | 0.1696 | 5 | yes |
| zstd | 12 | 636.263 | 2,897,453 | 0.1696 | 5 | yes |
| zstd | 13 | 753.345 | 2,874,535 | 0.1682 | 5 | yes |
| zstd | 14 | 1002.572 | 2,860,101 | 0.1674 | 9 | yes |
| zstd | 15 | 1181.618 | 2,856,465 | 0.1672 | 6 | yes |
| zstd | 16 | 2614.307 | 2,667,907 | 0.1561 | 5 | yes |
| zstd | 17 | 3348.881 | 2,576,011 | 0.1507 | 5 | yes |
| zstd | 18 | 5771.568 | 2,556,665 | 0.1496 | 5 | yes |
| zstd | 19 | 6333.039 | 2,549,586 | 0.1492 | 5 | yes |
| zstd | 20 | 6507.359 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 21 | 6441.290 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 22 | 6507.806 | 2,543,154 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.232 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.280 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.448 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.256 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.322 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.518 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.112 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.277 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.219 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.877 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.413 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.953 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 11.949 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.685 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 26.866 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.075 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 43.914 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 51.799 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 66.287 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 893.470 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1916.650 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.015 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.891 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.901 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.497 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.448 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 14.007 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.073 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.615 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.761 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.320 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 25.130 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.010 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 46.000 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 47.098 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 47.492 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 89.529 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 109.179 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 145.875 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 163.266 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 163.613 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 164.855 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 164.858 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.115 | 5,565 | 0.2841 | 25 | no |
| gzip | 2 | 0.183 | 5,486 | 0.2801 | 5 | yes |
| gzip | 3 | 0.201 | 5,419 | 0.2767 | 5 | yes |
| gzip | 4 | 0.218 | 5,202 | 0.2656 | 5 | yes |
| gzip | 5 | 0.330 | 4,958 | 0.2531 | 5 | yes |
| gzip | 6 | 0.378 | 4,947 | 0.2526 | 5 | yes |
| gzip | 7 | 0.491 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.644 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.653 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.056 | 6,082 | 0.3105 | 12 | yes |
| brotli | 1 | 0.071 | 5,794 | 0.2958 | 14 | yes |
| brotli | 2 | 0.146 | 5,002 | 0.2554 | 5 | yes |
| brotli | 3 | 0.174 | 4,986 | 0.2546 | 5 | yes |
| brotli | 4 | 0.282 | 4,954 | 0.2529 | 6 | yes |
| brotli | 5 | 0.460 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.489 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.559 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.623 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.731 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 7.195 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 21.682 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.055 | 5,441 | 0.2778 | 14 | yes |
| zstd | 2 | 0.059 | 5,242 | 0.2676 | 25 | no |
| zstd | 3 | 0.078 | 5,234 | 0.2672 | 7 | yes |
| zstd | 4 | 0.078 | 5,212 | 0.2661 | 18 | yes |
| zstd | 5 | 0.165 | 5,133 | 0.2621 | 9 | yes |
| zstd | 6 | 0.234 | 4,853 | 0.2478 | 7 | yes |
| zstd | 7 | 0.280 | 4,757 | 0.2429 | 6 | yes |
| zstd | 8 | 0.316 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.395 | 4,744 | 0.2422 | 5 | yes |
| zstd | 10 | 0.481 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.582 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.627 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.984 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.808 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.916 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.876 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.877 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.873 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 5.657 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.674 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 5.685 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.681 | 4,415 | 0.2254 | 5 | yes |
