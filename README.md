# Node Compression Benchmark

Last updated: 2026-09-18T21:15:33.665Z

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
| gzip | 1 | 0.906 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.944 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.010 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.108 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.446 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.699 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 1.861 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.099 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.648 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.453 | 33,111 | 0.4205 | 7 | yes |
| brotli | 1 | 0.731 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 1.023 | 29,394 | 0.3733 | 5 | yes |
| brotli | 3 | 1.174 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.740 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 1.770 | 27,013 | 0.3430 | 8 | yes |
| brotli | 6 | 1.888 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.123 | 26,773 | 0.3400 | 9 | yes |
| brotli | 8 | 2.346 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.488 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 29.106 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 84.994 | 24,992 | 0.3174 | 7 | yes |
| zstd | 1 | 0.226 | 31,062 | 0.3944 | 17 | yes |
| zstd | 2 | 0.279 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.333 | 29,214 | 0.3710 | 14 | yes |
| zstd | 4 | 0.375 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.737 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 0.986 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.192 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.345 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.460 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.664 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.154 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.319 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 4.893 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 6.630 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 6.684 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 8.544 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 8.489 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 8.445 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 16.486 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 16.541 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 16.541 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 16.491 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 78.927 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 81.298 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 88.396 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 94.218 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 111.061 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 123.405 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 131.276 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 147.100 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 160.090 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 17.651 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 22.498 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 40.144 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 48.486 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 79.190 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 105.957 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 126.278 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 418.608 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 540.746 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 679.981 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5117.783 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 10648.067 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 15.568 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 17.791 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 28.084 | 3,139,155 | 0.5736 | 6 | yes |
| zstd | 4 | 40.385 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 53.314 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 63.602 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 71.424 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 82.537 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 81.354 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 95.311 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 128.644 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 132.849 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 282.376 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 326.213 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 396.931 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 533.032 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 654.086 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 868.888 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 953.847 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 956.330 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1009.857 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1006.698 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 10.837 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 10.805 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 10.824 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 11.078 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 11.071 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 11.088 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 11.117 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 11.067 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 11.070 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.250 | 596,751 | 0.9970 | 25 | no |
| brotli | 1 | 0.279 | 598,581 | 1.0000 | 10 | yes |
| brotli | 2 | 0.584 | 598,587 | 1.0000 | 5 | yes |
| brotli | 3 | 0.611 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 0.689 | 598,581 | 1.0000 | 7 | yes |
| brotli | 5 | 1.283 | 598,581 | 1.0000 | 25 | no |
| brotli | 6 | 1.652 | 598,581 | 1.0000 | 6 | yes |
| brotli | 7 | 1.859 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 1.932 | 598,581 | 1.0000 | 9 | yes |
| brotli | 9 | 4.179 | 598,581 | 1.0000 | 5 | yes |
| brotli | 10 | 91.987 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 213.528 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.327 | 598,601 | 1.0000 | 6 | yes |
| zstd | 2 | 0.318 | 598,600 | 1.0000 | 18 | yes |
| zstd | 3 | 0.369 | 598,600 | 1.0000 | 25 | no |
| zstd | 4 | 0.372 | 598,600 | 1.0000 | 13 | yes |
| zstd | 5 | 0.479 | 598,600 | 1.0000 | 5 | yes |
| zstd | 6 | 0.468 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.560 | 598,600 | 1.0000 | 10 | yes |
| zstd | 8 | 0.565 | 598,600 | 1.0000 | 5 | yes |
| zstd | 9 | 0.742 | 598,600 | 1.0000 | 6 | yes |
| zstd | 10 | 0.761 | 598,600 | 1.0000 | 5 | yes |
| zstd | 11 | 0.856 | 598,600 | 1.0000 | 6 | yes |
| zstd | 12 | 0.838 | 598,600 | 1.0000 | 5 | yes |
| zstd | 13 | 2.657 | 595,998 | 0.9957 | 5 | yes |
| zstd | 14 | 2.588 | 595,998 | 0.9957 | 5 | yes |
| zstd | 15 | 2.637 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 13.483 | 595,898 | 0.9955 | 5 | yes |
| zstd | 17 | 13.602 | 595,889 | 0.9955 | 5 | yes |
| zstd | 18 | 17.493 | 595,891 | 0.9955 | 5 | yes |
| zstd | 19 | 21.100 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 21.057 | 595,894 | 0.9955 | 5 | yes |
| zstd | 21 | 21.026 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 21.076 | 595,894 | 0.9955 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 492,050 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.808 | 145,723 | 0.2962 | 5 | yes |
| gzip | 2 | 4.137 | 138,992 | 0.2825 | 5 | yes |
| gzip | 3 | 5.136 | 134,384 | 0.2731 | 5 | yes |
| gzip | 4 | 5.271 | 126,097 | 0.2563 | 5 | yes |
| gzip | 5 | 7.386 | 121,433 | 0.2468 | 5 | yes |
| gzip | 6 | 10.559 | 119,722 | 0.2433 | 5 | yes |
| gzip | 7 | 13.290 | 119,242 | 0.2423 | 5 | yes |
| gzip | 8 | 27.341 | 118,976 | 0.2418 | 5 | yes |
| gzip | 9 | 41.864 | 118,909 | 0.2417 | 5 | yes |
| brotli | 0 | 1.346 | 150,014 | 0.3049 | 5 | yes |
| brotli | 1 | 1.769 | 137,890 | 0.2802 | 5 | yes |
| brotli | 2 | 3.423 | 129,673 | 0.2635 | 5 | yes |
| brotli | 3 | 3.784 | 127,084 | 0.2583 | 5 | yes |
| brotli | 4 | 5.066 | 123,034 | 0.2500 | 5 | yes |
| brotli | 5 | 8.065 | 113,099 | 0.2299 | 5 | yes |
| brotli | 6 | 9.259 | 110,434 | 0.2244 | 5 | yes |
| brotli | 7 | 11.423 | 108,448 | 0.2204 | 6 | yes |
| brotli | 8 | 13.181 | 107,427 | 0.2183 | 5 | yes |
| brotli | 9 | 18.350 | 106,489 | 0.2164 | 5 | yes |
| brotli | 10 | 242.273 | 98,992 | 0.2012 | 5 | yes |
| brotli | 11 | 622.331 | 96,855 | 0.1968 | 5 | yes |
| zstd | 1 | 1.464 | 138,646 | 0.2818 | 5 | yes |
| zstd | 2 | 1.570 | 134,428 | 0.2732 | 5 | yes |
| zstd | 3 | 1.616 | 126,707 | 0.2575 | 5 | yes |
| zstd | 4 | 1.859 | 126,533 | 0.2572 | 5 | yes |
| zstd | 5 | 3.630 | 117,808 | 0.2394 | 5 | yes |
| zstd | 6 | 5.003 | 113,815 | 0.2313 | 5 | yes |
| zstd | 7 | 5.667 | 112,260 | 0.2281 | 5 | yes |
| zstd | 8 | 7.113 | 111,499 | 0.2266 | 5 | yes |
| zstd | 9 | 7.109 | 111,499 | 0.2266 | 5 | yes |
| zstd | 10 | 8.625 | 110,576 | 0.2247 | 5 | yes |
| zstd | 11 | 10.691 | 109,858 | 0.2233 | 5 | yes |
| zstd | 12 | 10.744 | 109,858 | 0.2233 | 5 | yes |
| zstd | 13 | 25.074 | 108,663 | 0.2208 | 5 | yes |
| zstd | 14 | 30.455 | 108,097 | 0.2197 | 5 | yes |
| zstd | 15 | 34.348 | 108,016 | 0.2195 | 5 | yes |
| zstd | 16 | 57.316 | 102,415 | 0.2081 | 5 | yes |
| zstd | 17 | 64.342 | 101,525 | 0.2063 | 5 | yes |
| zstd | 18 | 88.998 | 100,706 | 0.2047 | 5 | yes |
| zstd | 19 | 113.951 | 100,613 | 0.2045 | 5 | yes |
| zstd | 20 | 113.853 | 100,613 | 0.2045 | 5 | yes |
| zstd | 21 | 113.987 | 100,587 | 0.2044 | 5 | yes |
| zstd | 22 | 113.700 | 100,587 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 18,040 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.112 | 5,189 | 0.2876 | 17 | yes |
| gzip | 2 | 0.121 | 5,069 | 0.2810 | 20 | yes |
| gzip | 3 | 0.142 | 5,002 | 0.2773 | 5 | yes |
| gzip | 4 | 0.173 | 4,715 | 0.2614 | 5 | yes |
| gzip | 5 | 0.225 | 4,618 | 0.2560 | 8 | yes |
| gzip | 6 | 0.261 | 4,607 | 0.2554 | 5 | yes |
| gzip | 7 | 0.298 | 4,600 | 0.2550 | 5 | yes |
| gzip | 8 | 0.411 | 4,598 | 0.2549 | 5 | yes |
| gzip | 9 | 0.438 | 4,598 | 0.2549 | 5 | yes |
| brotli | 0 | 0.045 | 5,483 | 0.3039 | 25 | no |
| brotli | 1 | 0.069 | 5,356 | 0.2969 | 5 | yes |
| brotli | 2 | 0.099 | 4,956 | 0.2747 | 25 | no |
| brotli | 3 | 0.136 | 4,866 | 0.2697 | 14 | yes |
| brotli | 4 | 0.226 | 4,752 | 0.2634 | 5 | yes |
| brotli | 5 | 0.313 | 4,451 | 0.2467 | 6 | yes |
| brotli | 6 | 0.343 | 4,446 | 0.2465 | 5 | yes |
| brotli | 7 | 0.380 | 4,432 | 0.2457 | 5 | yes |
| brotli | 8 | 0.400 | 4,424 | 0.2452 | 5 | yes |
| brotli | 9 | 2.007 | 4,416 | 0.2448 | 10 | yes |
| brotli | 10 | 6.874 | 4,142 | 0.2296 | 5 | yes |
| brotli | 11 | 17.184 | 4,027 | 0.2232 | 5 | yes |
| zstd | 1 | 0.042 | 5,115 | 0.2835 | 15 | yes |
| zstd | 2 | 0.047 | 5,057 | 0.2803 | 20 | yes |
| zstd | 3 | 0.061 | 4,922 | 0.2728 | 14 | yes |
| zstd | 4 | 0.057 | 4,885 | 0.2708 | 13 | yes |
| zstd | 5 | 0.121 | 4,708 | 0.2610 | 15 | yes |
| zstd | 6 | 0.177 | 4,620 | 0.2561 | 6 | yes |
| zstd | 7 | 0.227 | 4,618 | 0.2560 | 5 | yes |
| zstd | 8 | 0.244 | 4,600 | 0.2550 | 6 | yes |
| zstd | 9 | 0.276 | 4,592 | 0.2545 | 6 | yes |
| zstd | 10 | 0.305 | 4,584 | 0.2541 | 5 | yes |
| zstd | 11 | 0.622 | 4,562 | 0.2529 | 5 | yes |
| zstd | 12 | 0.680 | 4,561 | 0.2528 | 5 | yes |
| zstd | 13 | 0.920 | 4,554 | 0.2524 | 5 | yes |
| zstd | 14 | 1.342 | 4,473 | 0.2479 | 5 | yes |
| zstd | 15 | 1.419 | 4,468 | 0.2477 | 5 | yes |
| zstd | 16 | 1.999 | 4,450 | 0.2467 | 5 | yes |
| zstd | 17 | 2.083 | 4,450 | 0.2467 | 5 | yes |
| zstd | 18 | 2.090 | 4,450 | 0.2467 | 5 | yes |
| zstd | 19 | 4.093 | 4,435 | 0.2458 | 5 | yes |
| zstd | 20 | 4.100 | 4,435 | 0.2458 | 5 | yes |
| zstd | 21 | 4.094 | 4,435 | 0.2458 | 5 | yes |
| zstd | 22 | 4.088 | 4,435 | 0.2458 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.072 | 3,220 | 0.4497 | 5 | yes |
| gzip | 2 | 0.045 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.045 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.068 | 3,095 | 0.4322 | 18 | yes |
| gzip | 5 | 0.077 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.083 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.093 | 3,042 | 0.4248 | 12 | yes |
| gzip | 8 | 0.085 | 3,042 | 0.4248 | 25 | no |
| gzip | 9 | 0.085 | 3,042 | 0.4248 | 16 | yes |
| brotli | 0 | 0.037 | 3,549 | 0.4956 | 16 | yes |
| brotli | 1 | 0.051 | 3,381 | 0.4721 | 7 | yes |
| brotli | 2 | 0.091 | 3,263 | 0.4557 | 13 | yes |
| brotli | 3 | 0.078 | 3,216 | 0.4491 | 25 | no |
| brotli | 4 | 0.130 | 3,147 | 0.4395 | 5 | yes |
| brotli | 5 | 0.175 | 2,963 | 0.4138 | 5 | yes |
| brotli | 6 | 0.171 | 2,952 | 0.4122 | 11 | yes |
| brotli | 7 | 0.214 | 2,944 | 0.4111 | 5 | yes |
| brotli | 8 | 0.217 | 2,944 | 0.4111 | 5 | yes |
| brotli | 9 | 1.696 | 2,945 | 0.4113 | 8 | yes |
| brotli | 10 | 2.732 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 6.856 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.026 | 3,254 | 0.4544 | 15 | yes |
| zstd | 2 | 0.027 | 3,200 | 0.4469 | 16 | yes |
| zstd | 3 | 0.032 | 3,176 | 0.4435 | 9 | yes |
| zstd | 4 | 0.056 | 3,102 | 0.4332 | 5 | yes |
| zstd | 5 | 0.058 | 3,079 | 0.4300 | 19 | yes |
| zstd | 6 | 0.073 | 3,060 | 0.4273 | 13 | yes |
| zstd | 7 | 0.082 | 3,053 | 0.4263 | 15 | yes |
| zstd | 8 | 0.076 | 3,053 | 0.4263 | 12 | yes |
| zstd | 9 | 0.160 | 3,055 | 0.4266 | 13 | yes |
| zstd | 10 | 0.141 | 3,055 | 0.4266 | 5 | yes |
| zstd | 11 | 0.302 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.407 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.500 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.515 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.503 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 0.993 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 0.997 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 0.989 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 0.986 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 0.976 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 0.983 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 0.992 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 167,536 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.800 | 68,258 | 0.4074 | 5 | yes |
| gzip | 2 | 1.980 | 66,628 | 0.3977 | 5 | yes |
| gzip | 3 | 2.234 | 65,566 | 0.3914 | 5 | yes |
| gzip | 4 | 2.437 | 63,153 | 0.3770 | 5 | yes |
| gzip | 5 | 3.273 | 61,493 | 0.3670 | 5 | yes |
| gzip | 6 | 4.035 | 61,220 | 0.3654 | 5 | yes |
| gzip | 7 | 4.374 | 61,178 | 0.3652 | 5 | yes |
| gzip | 8 | 4.717 | 61,159 | 0.3650 | 5 | yes |
| gzip | 9 | 4.740 | 61,159 | 0.3650 | 5 | yes |
| brotli | 0 | 0.570 | 72,624 | 0.4335 | 5 | yes |
| brotli | 1 | 0.739 | 69,540 | 0.4151 | 5 | yes |
| brotli | 2 | 1.458 | 64,217 | 0.3833 | 5 | yes |
| brotli | 3 | 1.653 | 63,611 | 0.3797 | 5 | yes |
| brotli | 4 | 2.436 | 62,461 | 0.3728 | 5 | yes |
| brotli | 5 | 3.698 | 59,022 | 0.3523 | 5 | yes |
| brotli | 6 | 4.092 | 58,657 | 0.3501 | 5 | yes |
| brotli | 7 | 5.076 | 58,375 | 0.3484 | 5 | yes |
| brotli | 8 | 5.459 | 58,271 | 0.3478 | 5 | yes |
| brotli | 9 | 8.004 | 58,184 | 0.3473 | 5 | yes |
| brotli | 10 | 84.062 | 55,378 | 0.3305 | 5 | yes |
| brotli | 11 | 212.929 | 54,340 | 0.3243 | 5 | yes |
| zstd | 1 | 0.525 | 67,501 | 0.4029 | 5 | yes |
| zstd | 2 | 0.668 | 64,552 | 0.3853 | 5 | yes |
| zstd | 3 | 0.820 | 64,032 | 0.3822 | 5 | yes |
| zstd | 4 | 1.449 | 62,020 | 0.3702 | 5 | yes |
| zstd | 5 | 1.655 | 61,498 | 0.3671 | 5 | yes |
| zstd | 6 | 2.054 | 60,584 | 0.3616 | 5 | yes |
| zstd | 7 | 2.538 | 59,738 | 0.3566 | 5 | yes |
| zstd | 8 | 3.163 | 59,250 | 0.3537 | 5 | yes |
| zstd | 9 | 3.549 | 58,995 | 0.3521 | 5 | yes |
| zstd | 10 | 4.219 | 58,843 | 0.3512 | 5 | yes |
| zstd | 11 | 7.989 | 58,566 | 0.3496 | 5 | yes |
| zstd | 12 | 8.214 | 58,550 | 0.3495 | 5 | yes |
| zstd | 13 | 13.444 | 57,536 | 0.3434 | 5 | yes |
| zstd | 14 | 15.590 | 57,080 | 0.3407 | 5 | yes |
| zstd | 15 | 15.816 | 57,055 | 0.3406 | 5 | yes |
| zstd | 16 | 19.902 | 56,875 | 0.3395 | 5 | yes |
| zstd | 17 | 19.862 | 56,875 | 0.3395 | 5 | yes |
| zstd | 18 | 33.437 | 56,810 | 0.3391 | 5 | yes |
| zstd | 19 | 33.478 | 56,810 | 0.3391 | 5 | yes |
| zstd | 20 | 33.440 | 56,810 | 0.3391 | 5 | yes |
| zstd | 21 | 33.551 | 56,810 | 0.3391 | 5 | yes |
| zstd | 22 | 33.488 | 56,810 | 0.3391 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.753 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.803 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.910 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.013 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.308 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.597 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.885 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.526 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.560 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.245 | 30,978 | 0.4230 | 7 | yes |
| brotli | 1 | 0.314 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.603 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.697 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.087 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.591 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 1.803 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.187 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.285 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.443 | 24,870 | 0.3396 | 7 | yes |
| brotli | 10 | 34.102 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 84.261 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.203 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.233 | 28,008 | 0.3824 | 6 | yes |
| zstd | 3 | 0.282 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.324 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.637 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 0.879 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.053 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.184 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.330 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.565 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 2.962 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.133 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 4.739 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 6.493 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 6.548 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 8.447 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 8.512 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 8.496 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 16.036 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 16.039 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 16.120 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 16.058 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.623 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.703 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.823 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 0.908 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.227 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 1.853 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.524 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 10.008 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 10.087 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.259 | 27,781 | 0.3075 | 5 | yes |
| brotli | 1 | 0.338 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.609 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.710 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.007 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.514 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 1.715 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.131 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.414 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 4.840 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 30.195 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 91.054 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.230 | 24,608 | 0.2724 | 5 | yes |
| zstd | 2 | 0.247 | 24,387 | 0.2700 | 6 | yes |
| zstd | 3 | 0.283 | 24,157 | 0.2674 | 5 | yes |
| zstd | 4 | 0.311 | 24,076 | 0.2665 | 7 | yes |
| zstd | 5 | 0.619 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 0.874 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.082 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.285 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.541 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.047 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.395 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.738 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 5.320 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 7.173 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 8.692 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 11.657 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 15.839 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 24.523 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 23.449 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 27.923 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 40.628 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 48.849 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.060 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.122 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.273 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.472 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 1.868 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.519 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.090 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.118 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.160 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.375 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.551 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.040 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.193 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.650 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.471 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 2.759 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.089 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 3.445 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.061 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 85.809 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 256.650 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.388 | 35,549 | 0.1532 | 8 | yes |
| zstd | 2 | 0.446 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.446 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.114 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.344 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.565 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 1.795 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.256 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 2.565 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.203 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.823 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.596 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.599 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 20.685 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 25.793 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 41.400 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 45.071 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 62.239 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 68.477 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 70.569 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 70.488 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 70.554 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,088,846 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 92.250 | 3,786,228 | 0.2216 | 5 | yes |
| gzip | 2 | 100.266 | 3,637,199 | 0.2128 | 5 | yes |
| gzip | 3 | 120.379 | 3,517,128 | 0.2058 | 5 | yes |
| gzip | 4 | 131.273 | 3,388,581 | 0.1983 | 5 | yes |
| gzip | 5 | 171.222 | 3,167,259 | 0.1853 | 5 | yes |
| gzip | 6 | 253.786 | 3,098,703 | 0.1813 | 5 | yes |
| gzip | 7 | 345.793 | 3,032,397 | 0.1774 | 5 | yes |
| gzip | 8 | 1039.733 | 2,964,487 | 0.1735 | 5 | yes |
| gzip | 9 | 1085.300 | 2,963,688 | 0.1734 | 5 | yes |
| brotli | 0 | 39.745 | 4,195,167 | 0.2455 | 5 | yes |
| brotli | 1 | 53.800 | 3,728,851 | 0.2182 | 5 | yes |
| brotli | 2 | 93.798 | 3,433,235 | 0.2009 | 5 | yes |
| brotli | 3 | 107.318 | 3,377,124 | 0.1976 | 5 | yes |
| brotli | 4 | 161.069 | 3,303,878 | 0.1933 | 5 | yes |
| brotli | 5 | 252.477 | 2,946,664 | 0.1724 | 5 | yes |
| brotli | 6 | 297.062 | 2,915,320 | 0.1706 | 5 | yes |
| brotli | 7 | 465.151 | 2,887,582 | 0.1690 | 5 | yes |
| brotli | 8 | 580.506 | 2,868,532 | 0.1679 | 5 | yes |
| brotli | 9 | 785.243 | 2,857,411 | 0.1672 | 5 | yes |
| brotli | 10 | 8991.234 | 2,448,858 | 0.1433 | 5 | yes |
| brotli | 11 | 23949.054 | 2,330,104 | 0.1364 | 5 | yes |
| zstd | 1 | 36.107 | 3,534,613 | 0.2068 | 5 | yes |
| zstd | 2 | 44.581 | 3,612,321 | 0.2114 | 5 | yes |
| zstd | 3 | 57.201 | 3,537,742 | 0.2070 | 5 | yes |
| zstd | 4 | 69.469 | 3,532,781 | 0.2067 | 5 | yes |
| zstd | 5 | 111.646 | 3,315,447 | 0.1940 | 5 | yes |
| zstd | 6 | 162.585 | 3,093,505 | 0.1810 | 5 | yes |
| zstd | 7 | 188.244 | 3,054,755 | 0.1788 | 5 | yes |
| zstd | 8 | 247.055 | 2,951,480 | 0.1727 | 5 | yes |
| zstd | 9 | 249.471 | 2,962,142 | 0.1733 | 5 | yes |
| zstd | 10 | 322.046 | 2,925,109 | 0.1712 | 5 | yes |
| zstd | 11 | 453.656 | 2,897,547 | 0.1696 | 5 | yes |
| zstd | 12 | 468.816 | 2,897,453 | 0.1696 | 5 | yes |
| zstd | 13 | 706.187 | 2,874,535 | 0.1682 | 5 | yes |
| zstd | 14 | 864.628 | 2,860,101 | 0.1674 | 5 | yes |
| zstd | 15 | 1082.864 | 2,856,465 | 0.1672 | 5 | yes |
| zstd | 16 | 2376.493 | 2,667,907 | 0.1561 | 5 | yes |
| zstd | 17 | 3068.579 | 2,576,011 | 0.1507 | 5 | yes |
| zstd | 18 | 4691.642 | 2,556,665 | 0.1496 | 5 | yes |
| zstd | 19 | 5117.218 | 2,549,586 | 0.1492 | 5 | yes |
| zstd | 20 | 5145.223 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 21 | 5186.390 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 22 | 5324.932 | 2,543,154 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 11.759 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 12.740 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 14.687 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 15.250 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 22.168 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 26.218 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 27.662 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 30.340 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 30.385 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.312 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 4.351 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 8.721 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 10.196 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 14.217 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 22.195 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 26.340 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 36.867 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 42.142 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 50.104 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 766.132 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1652.367 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 2.557 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.251 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 4.224 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 5.172 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 8.282 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 11.271 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 12.545 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 15.391 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 15.488 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 17.933 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 22.052 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 21.969 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 46.241 | 383,952 | 0.4466 | 5 | yes |
| zstd | 14 | 47.524 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 47.853 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 80.096 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 100.980 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 127.181 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 140.257 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 140.327 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 141.027 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 141.522 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.117 | 5,565 | 0.2841 | 25 | no |
| gzip | 2 | 0.133 | 5,486 | 0.2801 | 10 | yes |
| gzip | 3 | 0.171 | 5,419 | 0.2767 | 5 | yes |
| gzip | 4 | 0.183 | 5,202 | 0.2656 | 5 | yes |
| gzip | 5 | 0.248 | 4,958 | 0.2531 | 6 | yes |
| gzip | 6 | 0.336 | 4,947 | 0.2526 | 5 | yes |
| gzip | 7 | 0.431 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.608 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.581 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.056 | 6,082 | 0.3105 | 5 | yes |
| brotli | 1 | 0.069 | 5,794 | 0.2958 | 7 | yes |
| brotli | 2 | 0.121 | 5,002 | 0.2554 | 8 | yes |
| brotli | 3 | 0.151 | 4,986 | 0.2546 | 5 | yes |
| brotli | 4 | 0.240 | 4,954 | 0.2529 | 21 | yes |
| brotli | 5 | 0.368 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.397 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.475 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.519 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.619 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 6.452 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 19.490 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.041 | 5,441 | 0.2778 | 21 | yes |
| zstd | 2 | 0.048 | 5,242 | 0.2676 | 11 | yes |
| zstd | 3 | 0.061 | 5,234 | 0.2672 | 6 | yes |
| zstd | 4 | 0.057 | 5,212 | 0.2661 | 8 | yes |
| zstd | 5 | 0.130 | 5,133 | 0.2621 | 5 | yes |
| zstd | 6 | 0.188 | 4,853 | 0.2478 | 5 | yes |
| zstd | 7 | 0.217 | 4,757 | 0.2429 | 5 | yes |
| zstd | 8 | 0.257 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.307 | 4,744 | 0.2422 | 5 | yes |
| zstd | 10 | 0.380 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.554 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.616 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.906 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.563 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.675 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.266 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.268 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.274 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 4.430 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 4.474 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 4.477 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 4.501 | 4,415 | 0.2254 | 5 | yes |
