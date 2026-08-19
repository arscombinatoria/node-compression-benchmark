# Node Compression Benchmark

Last updated: 2026-08-19T21:17:49.861Z

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
| gzip | 1 | 0.987 | 31,033 | 0.3941 | 6 | yes |
| gzip | 2 | 0.976 | 30,134 | 0.3827 | 6 | yes |
| gzip | 3 | 1.075 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.221 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.564 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.850 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.052 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.367 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.363 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.373 | 33,111 | 0.4205 | 18 | yes |
| brotli | 1 | 0.733 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.807 | 29,394 | 0.3733 | 7 | yes |
| brotli | 3 | 0.974 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.494 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.151 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.330 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.757 | 26,773 | 0.3400 | 6 | yes |
| brotli | 8 | 2.682 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.663 | 26,711 | 0.3392 | 6 | yes |
| brotli | 10 | 33.299 | 25,340 | 0.3218 | 8 | yes |
| brotli | 11 | 95.143 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.307 | 31,062 | 0.3944 | 6 | yes |
| zstd | 2 | 0.340 | 30,069 | 0.3818 | 8 | yes |
| zstd | 3 | 0.411 | 29,214 | 0.3710 | 7 | yes |
| zstd | 4 | 0.538 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.900 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.180 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.467 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.579 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.763 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.023 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.338 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.540 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.553 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 7.948 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.089 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.072 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 11.028 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.042 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 21.669 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.638 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.501 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.523 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 84.066 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 89.252 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 92.007 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 103.414 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 119.447 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 133.749 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 142.411 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 160.024 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.317 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.547 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.403 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 48.877 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 65.058 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 87.963 | 3,052,068 | 0.5577 | 6 | yes |
| brotli | 5 | 126.256 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 143.139 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 414.577 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 580.591 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 718.851 | 2,793,428 | 0.5104 | 8 | yes |
| brotli | 10 | 6470.708 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12913.804 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.859 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 25.052 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 37.916 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 44.240 | 3,084,237 | 0.5636 | 7 | yes |
| zstd | 5 | 65.779 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 78.559 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 83.118 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 98.474 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 102.930 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 127.346 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 172.744 | 2,868,731 | 0.5242 | 12 | yes |
| zstd | 12 | 185.596 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 375.007 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 447.378 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 546.521 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 771.162 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 839.279 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1163.103 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1253.819 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1267.391 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1317.224 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1262.638 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2">@openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2</h2>

- Original size: 598,576 bytes
- Chart: ![Compression ratio chart for @openfonts/m-plus-1p_japanese/m-plus-1p-japanese-400.woff2](charts/openfonts-m-plus-1p-japanese-m-plus-1p-japanese-400-woff2.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 11.860 | 596,192 | 0.9960 | 5 | yes |
| gzip | 2 | 11.795 | 596,183 | 0.9960 | 5 | yes |
| gzip | 3 | 11.792 | 596,173 | 0.9960 | 5 | yes |
| gzip | 4 | 12.258 | 596,171 | 0.9960 | 5 | yes |
| gzip | 5 | 12.262 | 596,154 | 0.9960 | 5 | yes |
| gzip | 6 | 12.341 | 596,154 | 0.9960 | 5 | yes |
| gzip | 7 | 12.321 | 596,154 | 0.9960 | 5 | yes |
| gzip | 8 | 12.255 | 596,154 | 0.9960 | 5 | yes |
| gzip | 9 | 12.349 | 596,154 | 0.9960 | 5 | yes |
| brotli | 0 | 0.236 | 596,751 | 0.9970 | 14 | yes |
| brotli | 1 | 0.245 | 598,581 | 1.0000 | 5 | yes |
| brotli | 2 | 0.591 | 598,587 | 1.0000 | 5 | yes |
| brotli | 3 | 0.740 | 598,559 | 1.0000 | 5 | yes |
| brotli | 4 | 1.084 | 598,581 | 1.0000 | 5 | yes |
| brotli | 5 | 1.548 | 598,581 | 1.0000 | 5 | yes |
| brotli | 6 | 1.565 | 598,581 | 1.0000 | 25 | no |
| brotli | 7 | 1.831 | 598,581 | 1.0000 | 5 | yes |
| brotli | 8 | 2.245 | 598,581 | 1.0000 | 15 | yes |
| brotli | 9 | 4.525 | 598,581 | 1.0000 | 5 | yes |
| brotli | 10 | 105.507 | 598,581 | 1.0000 | 5 | yes |
| brotli | 11 | 261.448 | 598,581 | 1.0000 | 5 | yes |
| zstd | 1 | 0.281 | 598,601 | 1.0000 | 5 | yes |
| zstd | 2 | 0.257 | 598,600 | 1.0000 | 19 | yes |
| zstd | 3 | 0.328 | 598,600 | 1.0000 | 25 | no |
| zstd | 4 | 0.343 | 598,600 | 1.0000 | 10 | yes |
| zstd | 5 | 0.457 | 598,600 | 1.0000 | 5 | yes |
| zstd | 6 | 0.472 | 598,600 | 1.0000 | 5 | yes |
| zstd | 7 | 0.528 | 598,600 | 1.0000 | 5 | yes |
| zstd | 8 | 0.524 | 598,600 | 1.0000 | 5 | yes |
| zstd | 9 | 0.631 | 598,600 | 1.0000 | 5 | yes |
| zstd | 10 | 0.670 | 598,600 | 1.0000 | 12 | yes |
| zstd | 11 | 0.647 | 598,600 | 1.0000 | 5 | yes |
| zstd | 12 | 0.646 | 598,600 | 1.0000 | 5 | yes |
| zstd | 13 | 2.488 | 595,998 | 0.9957 | 5 | yes |
| zstd | 14 | 2.311 | 595,998 | 0.9957 | 5 | yes |
| zstd | 15 | 2.371 | 595,998 | 0.9957 | 5 | yes |
| zstd | 16 | 14.752 | 595,898 | 0.9955 | 5 | yes |
| zstd | 17 | 15.055 | 595,889 | 0.9955 | 8 | yes |
| zstd | 18 | 21.008 | 595,891 | 0.9955 | 5 | yes |
| zstd | 19 | 25.009 | 595,894 | 0.9955 | 5 | yes |
| zstd | 20 | 26.022 | 595,894 | 0.9955 | 6 | yes |
| zstd | 21 | 24.938 | 595,894 | 0.9955 | 5 | yes |
| zstd | 22 | 25.937 | 595,894 | 0.9955 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 490,802 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 3.885 | 145,459 | 0.2964 | 5 | yes |
| gzip | 2 | 4.249 | 138,655 | 0.2825 | 5 | yes |
| gzip | 3 | 5.487 | 134,120 | 0.2733 | 5 | yes |
| gzip | 4 | 5.810 | 125,846 | 0.2564 | 5 | yes |
| gzip | 5 | 8.164 | 121,168 | 0.2469 | 5 | yes |
| gzip | 6 | 11.746 | 119,464 | 0.2434 | 5 | yes |
| gzip | 7 | 14.877 | 118,991 | 0.2424 | 5 | yes |
| gzip | 8 | 28.286 | 118,721 | 0.2419 | 5 | yes |
| gzip | 9 | 43.074 | 118,656 | 0.2418 | 5 | yes |
| brotli | 0 | 1.503 | 149,780 | 0.3052 | 5 | yes |
| brotli | 1 | 2.111 | 137,594 | 0.2803 | 5 | yes |
| brotli | 2 | 3.903 | 129,396 | 0.2636 | 5 | yes |
| brotli | 3 | 4.460 | 126,773 | 0.2583 | 5 | yes |
| brotli | 4 | 6.797 | 122,637 | 0.2499 | 5 | yes |
| brotli | 5 | 10.324 | 112,852 | 0.2299 | 5 | yes |
| brotli | 6 | 11.926 | 110,205 | 0.2245 | 5 | yes |
| brotli | 7 | 14.150 | 108,216 | 0.2205 | 5 | yes |
| brotli | 8 | 17.172 | 107,187 | 0.2184 | 5 | yes |
| brotli | 9 | 22.692 | 106,299 | 0.2166 | 5 | yes |
| brotli | 10 | 270.772 | 98,781 | 0.2013 | 5 | yes |
| brotli | 11 | 711.966 | 96,661 | 0.1969 | 5 | yes |
| zstd | 1 | 1.649 | 138,381 | 0.2819 | 5 | yes |
| zstd | 2 | 1.860 | 134,062 | 0.2731 | 5 | yes |
| zstd | 3 | 2.195 | 126,400 | 0.2575 | 5 | yes |
| zstd | 4 | 2.325 | 126,225 | 0.2572 | 5 | yes |
| zstd | 5 | 4.436 | 117,610 | 0.2396 | 5 | yes |
| zstd | 6 | 6.046 | 113,616 | 0.2315 | 5 | yes |
| zstd | 7 | 6.788 | 112,064 | 0.2283 | 5 | yes |
| zstd | 8 | 8.687 | 111,256 | 0.2267 | 5 | yes |
| zstd | 9 | 8.670 | 111,256 | 0.2267 | 5 | yes |
| zstd | 10 | 10.326 | 110,241 | 0.2246 | 5 | yes |
| zstd | 11 | 12.927 | 109,605 | 0.2233 | 5 | yes |
| zstd | 12 | 12.996 | 109,605 | 0.2233 | 5 | yes |
| zstd | 13 | 25.012 | 108,404 | 0.2209 | 5 | yes |
| zstd | 14 | 30.066 | 107,840 | 0.2197 | 5 | yes |
| zstd | 15 | 33.375 | 107,780 | 0.2196 | 5 | yes |
| zstd | 16 | 62.251 | 102,193 | 0.2082 | 5 | yes |
| zstd | 17 | 68.844 | 101,271 | 0.2063 | 5 | yes |
| zstd | 18 | 107.643 | 100,490 | 0.2047 | 5 | yes |
| zstd | 19 | 141.892 | 100,397 | 0.2046 | 5 | yes |
| zstd | 20 | 141.138 | 100,397 | 0.2046 | 5 | yes |
| zstd | 21 | 141.183 | 100,396 | 0.2046 | 5 | yes |
| zstd | 22 | 141.452 | 100,396 | 0.2046 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.104 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.122 | 4,874 | 0.2831 | 13 | yes |
| gzip | 3 | 0.143 | 4,806 | 0.2791 | 7 | yes |
| gzip | 4 | 0.166 | 4,530 | 0.2631 | 16 | yes |
| gzip | 5 | 0.237 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.275 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.310 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.455 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.474 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.054 | 5,235 | 0.3041 | 25 | no |
| brotli | 1 | 0.064 | 5,134 | 0.2982 | 17 | yes |
| brotli | 2 | 0.111 | 4,741 | 0.2754 | 22 | yes |
| brotli | 3 | 0.152 | 4,650 | 0.2701 | 22 | yes |
| brotli | 4 | 0.286 | 4,555 | 0.2646 | 5 | yes |
| brotli | 5 | 0.399 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.431 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.438 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.452 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 2.229 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.816 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.467 | 3,873 | 0.2250 | 5 | yes |
| zstd | 1 | 0.053 | 4,923 | 0.2859 | 17 | yes |
| zstd | 2 | 0.060 | 4,868 | 0.2827 | 19 | yes |
| zstd | 3 | 0.077 | 4,717 | 0.2740 | 25 | yes |
| zstd | 4 | 0.077 | 4,679 | 0.2718 | 18 | yes |
| zstd | 5 | 0.159 | 4,519 | 0.2625 | 5 | yes |
| zstd | 6 | 0.216 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.261 | 4,437 | 0.2577 | 6 | yes |
| zstd | 8 | 0.283 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.339 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.393 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.626 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.664 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.928 | 4,382 | 0.2545 | 5 | yes |
| zstd | 14 | 1.447 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.538 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.469 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.651 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.643 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.170 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.171 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.178 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.209 | 4,264 | 0.2477 | 5 | yes |

<h2 id="dayjs-dayjs-min-js">dayjs/dayjs.min.js</h2>

- Original size: 7,161 bytes
- Chart: ![Compression ratio chart for dayjs/dayjs.min.js](charts/dayjs-dayjs-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.071 | 3,220 | 0.4497 | 25 | no |
| gzip | 2 | 0.055 | 3,182 | 0.4444 | 25 | no |
| gzip | 3 | 0.059 | 3,153 | 0.4403 | 25 | no |
| gzip | 4 | 0.069 | 3,095 | 0.4322 | 25 | no |
| gzip | 5 | 0.078 | 3,051 | 0.4261 | 25 | no |
| gzip | 6 | 0.081 | 3,044 | 0.4251 | 25 | no |
| gzip | 7 | 0.096 | 3,042 | 0.4248 | 17 | yes |
| gzip | 8 | 0.089 | 3,042 | 0.4248 | 17 | yes |
| gzip | 9 | 0.111 | 3,042 | 0.4248 | 7 | yes |
| brotli | 0 | 0.031 | 3,549 | 0.4956 | 19 | yes |
| brotli | 1 | 0.038 | 3,381 | 0.4721 | 25 | no |
| brotli | 2 | 0.057 | 3,263 | 0.4557 | 21 | yes |
| brotli | 3 | 0.078 | 3,216 | 0.4491 | 11 | yes |
| brotli | 4 | 0.155 | 3,147 | 0.4395 | 18 | yes |
| brotli | 5 | 0.225 | 2,963 | 0.4138 | 17 | yes |
| brotli | 6 | 0.252 | 2,952 | 0.4122 | 5 | yes |
| brotli | 7 | 0.260 | 2,944 | 0.4111 | 5 | yes |
| brotli | 8 | 0.250 | 2,944 | 0.4111 | 9 | yes |
| brotli | 9 | 1.669 | 2,945 | 0.4113 | 8 | yes |
| brotli | 10 | 3.147 | 2,814 | 0.3930 | 5 | yes |
| brotli | 11 | 7.732 | 2,772 | 0.3871 | 5 | yes |
| zstd | 1 | 0.033 | 3,254 | 0.4544 | 13 | yes |
| zstd | 2 | 0.034 | 3,200 | 0.4469 | 18 | yes |
| zstd | 3 | 0.043 | 3,176 | 0.4435 | 13 | yes |
| zstd | 4 | 0.060 | 3,102 | 0.4332 | 19 | yes |
| zstd | 5 | 0.075 | 3,079 | 0.4300 | 22 | yes |
| zstd | 6 | 0.099 | 3,060 | 0.4273 | 12 | yes |
| zstd | 7 | 0.121 | 3,053 | 0.4263 | 9 | yes |
| zstd | 8 | 0.141 | 3,053 | 0.4263 | 5 | yes |
| zstd | 9 | 0.178 | 3,055 | 0.4266 | 16 | yes |
| zstd | 10 | 0.154 | 3,055 | 0.4266 | 25 | no |
| zstd | 11 | 0.344 | 3,044 | 0.4251 | 5 | yes |
| zstd | 12 | 0.472 | 3,011 | 0.4205 | 5 | yes |
| zstd | 13 | 0.653 | 2,998 | 0.4187 | 5 | yes |
| zstd | 14 | 0.655 | 2,998 | 0.4187 | 5 | yes |
| zstd | 15 | 0.667 | 2,998 | 0.4187 | 5 | yes |
| zstd | 16 | 1.274 | 2,992 | 0.4178 | 5 | yes |
| zstd | 17 | 1.276 | 2,992 | 0.4178 | 5 | yes |
| zstd | 18 | 1.270 | 2,992 | 0.4178 | 5 | yes |
| zstd | 19 | 1.255 | 2,992 | 0.4178 | 5 | yes |
| zstd | 20 | 1.254 | 2,992 | 0.4178 | 5 | yes |
| zstd | 21 | 1.276 | 2,992 | 0.4178 | 5 | yes |
| zstd | 22 | 1.282 | 2,992 | 0.4178 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 166,624 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.887 | 67,977 | 0.4080 | 5 | yes |
| gzip | 2 | 2.047 | 66,279 | 0.3978 | 5 | yes |
| gzip | 3 | 2.338 | 65,249 | 0.3916 | 5 | yes |
| gzip | 4 | 2.606 | 62,863 | 0.3773 | 5 | yes |
| gzip | 5 | 3.499 | 61,226 | 0.3675 | 5 | yes |
| gzip | 6 | 4.324 | 60,947 | 0.3658 | 5 | yes |
| gzip | 7 | 4.705 | 60,906 | 0.3655 | 5 | yes |
| gzip | 8 | 5.072 | 60,892 | 0.3654 | 5 | yes |
| gzip | 9 | 5.089 | 60,892 | 0.3654 | 5 | yes |
| brotli | 0 | 0.685 | 72,364 | 0.4343 | 5 | yes |
| brotli | 1 | 0.890 | 69,292 | 0.4159 | 5 | yes |
| brotli | 2 | 1.672 | 63,905 | 0.3835 | 5 | yes |
| brotli | 3 | 1.959 | 63,322 | 0.3800 | 5 | yes |
| brotli | 4 | 2.951 | 62,116 | 0.3728 | 5 | yes |
| brotli | 5 | 4.546 | 58,765 | 0.3527 | 5 | yes |
| brotli | 6 | 4.982 | 58,363 | 0.3503 | 5 | yes |
| brotli | 7 | 5.771 | 58,113 | 0.3488 | 5 | yes |
| brotli | 8 | 6.194 | 58,028 | 0.3483 | 5 | yes |
| brotli | 9 | 8.905 | 57,951 | 0.3478 | 5 | yes |
| brotli | 10 | 98.448 | 55,132 | 0.3309 | 5 | yes |
| brotli | 11 | 257.562 | 54,171 | 0.3251 | 5 | yes |
| zstd | 1 | 0.629 | 67,252 | 0.4036 | 5 | yes |
| zstd | 2 | 0.799 | 64,236 | 0.3855 | 5 | yes |
| zstd | 3 | 1.054 | 63,718 | 0.3824 | 5 | yes |
| zstd | 4 | 1.821 | 61,769 | 0.3707 | 5 | yes |
| zstd | 5 | 2.037 | 61,226 | 0.3675 | 5 | yes |
| zstd | 6 | 2.474 | 60,325 | 0.3620 | 5 | yes |
| zstd | 7 | 2.880 | 59,490 | 0.3570 | 5 | yes |
| zstd | 8 | 3.600 | 59,014 | 0.3542 | 5 | yes |
| zstd | 9 | 4.204 | 58,750 | 0.3526 | 5 | yes |
| zstd | 10 | 5.030 | 58,611 | 0.3518 | 5 | yes |
| zstd | 11 | 8.257 | 58,323 | 0.3500 | 5 | yes |
| zstd | 12 | 8.472 | 58,307 | 0.3499 | 5 | yes |
| zstd | 13 | 15.104 | 57,310 | 0.3439 | 5 | yes |
| zstd | 14 | 17.835 | 56,860 | 0.3412 | 5 | yes |
| zstd | 15 | 18.163 | 56,832 | 0.3411 | 5 | yes |
| zstd | 16 | 24.640 | 56,647 | 0.3400 | 5 | yes |
| zstd | 17 | 24.800 | 56,647 | 0.3400 | 5 | yes |
| zstd | 18 | 42.183 | 56,578 | 0.3396 | 5 | yes |
| zstd | 19 | 42.094 | 56,578 | 0.3396 | 5 | yes |
| zstd | 20 | 42.266 | 56,578 | 0.3396 | 5 | yes |
| zstd | 21 | 42.153 | 56,578 | 0.3396 | 5 | yes |
| zstd | 22 | 42.065 | 56,578 | 0.3396 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.777 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.839 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.959 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.065 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.392 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.768 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.100 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.845 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.843 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.262 | 30,978 | 0.4230 | 8 | yes |
| brotli | 1 | 0.373 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.674 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.785 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.310 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.948 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.027 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.349 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.482 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 4.722 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 38.985 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 95.235 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.245 | 28,919 | 0.3949 | 8 | yes |
| zstd | 2 | 0.280 | 28,008 | 0.3824 | 7 | yes |
| zstd | 3 | 0.359 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.448 | 27,100 | 0.3700 | 5 | yes |
| zstd | 5 | 0.801 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.068 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.287 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.426 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.636 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.965 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.175 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.299 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.369 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.630 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.723 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.691 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.680 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.677 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.427 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 20.330 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 20.245 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.253 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 90,336 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.647 | 25,642 | 0.2839 | 5 | yes |
| gzip | 2 | 0.729 | 25,381 | 0.2810 | 5 | yes |
| gzip | 3 | 0.860 | 25,183 | 0.2788 | 5 | yes |
| gzip | 4 | 1.010 | 23,806 | 0.2635 | 5 | yes |
| gzip | 5 | 1.364 | 22,906 | 0.2536 | 5 | yes |
| gzip | 6 | 2.067 | 22,672 | 0.2510 | 5 | yes |
| gzip | 7 | 2.724 | 22,565 | 0.2498 | 5 | yes |
| gzip | 8 | 7.976 | 22,320 | 0.2471 | 5 | yes |
| gzip | 9 | 8.031 | 22,318 | 0.2471 | 5 | yes |
| brotli | 0 | 0.268 | 27,781 | 0.3075 | 7 | yes |
| brotli | 1 | 0.389 | 25,973 | 0.2875 | 5 | yes |
| brotli | 2 | 0.697 | 23,497 | 0.2601 | 5 | yes |
| brotli | 3 | 0.816 | 23,445 | 0.2595 | 5 | yes |
| brotli | 4 | 1.251 | 23,003 | 0.2546 | 5 | yes |
| brotli | 5 | 1.870 | 21,939 | 0.2429 | 5 | yes |
| brotli | 6 | 2.117 | 21,822 | 0.2416 | 5 | yes |
| brotli | 7 | 2.412 | 21,742 | 0.2407 | 5 | yes |
| brotli | 8 | 2.802 | 21,693 | 0.2401 | 5 | yes |
| brotli | 9 | 5.286 | 21,604 | 0.2392 | 5 | yes |
| brotli | 10 | 34.328 | 18,961 | 0.2099 | 5 | yes |
| brotli | 11 | 103.077 | 18,432 | 0.2040 | 5 | yes |
| zstd | 1 | 0.283 | 24,608 | 0.2724 | 19 | yes |
| zstd | 2 | 0.302 | 24,387 | 0.2700 | 5 | yes |
| zstd | 3 | 0.346 | 24,157 | 0.2674 | 6 | yes |
| zstd | 4 | 0.406 | 24,076 | 0.2665 | 5 | yes |
| zstd | 5 | 0.767 | 23,365 | 0.2586 | 5 | yes |
| zstd | 6 | 1.107 | 22,468 | 0.2487 | 5 | yes |
| zstd | 7 | 1.359 | 21,961 | 0.2431 | 5 | yes |
| zstd | 8 | 1.544 | 21,892 | 0.2423 | 5 | yes |
| zstd | 9 | 1.949 | 21,821 | 0.2416 | 5 | yes |
| zstd | 10 | 2.618 | 21,755 | 0.2408 | 5 | yes |
| zstd | 11 | 3.595 | 21,610 | 0.2392 | 5 | yes |
| zstd | 12 | 4.851 | 21,581 | 0.2389 | 5 | yes |
| zstd | 13 | 6.026 | 21,357 | 0.2364 | 5 | yes |
| zstd | 14 | 8.302 | 20,565 | 0.2277 | 5 | yes |
| zstd | 15 | 9.836 | 20,426 | 0.2261 | 5 | yes |
| zstd | 16 | 14.758 | 20,254 | 0.2242 | 5 | yes |
| zstd | 17 | 19.553 | 20,220 | 0.2238 | 5 | yes |
| zstd | 18 | 27.491 | 20,218 | 0.2238 | 5 | yes |
| zstd | 19 | 31.694 | 20,225 | 0.2239 | 5 | yes |
| zstd | 20 | 36.897 | 20,194 | 0.2235 | 5 | yes |
| zstd | 21 | 48.226 | 20,185 | 0.2234 | 5 | yes |
| zstd | 22 | 55.086 | 20,186 | 0.2235 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.061 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.143 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.314 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.731 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.176 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.910 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.568 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.752 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.801 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.450 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.621 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.167 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.395 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.068 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.016 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.314 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.606 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.114 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 6.884 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 95.645 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 295.634 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.488 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.539 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.568 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.433 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.644 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.952 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.228 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.759 | 28,645 | 0.1234 | 6 | yes |
| zstd | 9 | 3.180 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.389 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 7.897 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.667 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 17.524 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 21.479 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 27.792 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 55.290 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 62.467 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 83.618 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 94.980 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 99.558 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 99.406 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 99.489 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 17,088,846 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 94.458 | 3,786,228 | 0.2216 | 5 | yes |
| gzip | 2 | 102.503 | 3,637,199 | 0.2128 | 5 | yes |
| gzip | 3 | 125.326 | 3,517,128 | 0.2058 | 5 | yes |
| gzip | 4 | 150.862 | 3,388,581 | 0.1983 | 5 | yes |
| gzip | 5 | 193.679 | 3,167,259 | 0.1853 | 5 | yes |
| gzip | 6 | 285.836 | 3,098,703 | 0.1813 | 5 | yes |
| gzip | 7 | 385.338 | 3,032,397 | 0.1774 | 5 | yes |
| gzip | 8 | 1083.350 | 2,964,487 | 0.1735 | 5 | yes |
| gzip | 9 | 1132.498 | 2,963,688 | 0.1734 | 5 | yes |
| brotli | 0 | 45.740 | 4,195,167 | 0.2455 | 5 | yes |
| brotli | 1 | 63.472 | 3,728,851 | 0.2182 | 5 | yes |
| brotli | 2 | 111.696 | 3,433,235 | 0.2009 | 5 | yes |
| brotli | 3 | 130.532 | 3,377,124 | 0.1976 | 5 | yes |
| brotli | 4 | 182.576 | 3,303,878 | 0.1933 | 5 | yes |
| brotli | 5 | 298.948 | 2,946,664 | 0.1724 | 5 | yes |
| brotli | 6 | 364.249 | 2,915,320 | 0.1706 | 5 | yes |
| brotli | 7 | 535.718 | 2,887,582 | 0.1690 | 5 | yes |
| brotli | 8 | 698.482 | 2,868,532 | 0.1679 | 5 | yes |
| brotli | 9 | 951.295 | 2,857,411 | 0.1672 | 5 | yes |
| brotli | 10 | 10404.398 | 2,448,858 | 0.1433 | 5 | yes |
| brotli | 11 | 27296.412 | 2,330,104 | 0.1364 | 5 | yes |
| zstd | 1 | 44.103 | 3,534,613 | 0.2068 | 5 | yes |
| zstd | 2 | 58.575 | 3,612,321 | 0.2114 | 5 | yes |
| zstd | 3 | 70.033 | 3,537,742 | 0.2070 | 5 | yes |
| zstd | 4 | 69.360 | 3,532,781 | 0.2067 | 5 | yes |
| zstd | 5 | 134.510 | 3,315,447 | 0.1940 | 5 | yes |
| zstd | 6 | 194.786 | 3,093,505 | 0.1810 | 5 | yes |
| zstd | 7 | 225.194 | 3,054,755 | 0.1788 | 5 | yes |
| zstd | 8 | 298.925 | 2,951,480 | 0.1727 | 5 | yes |
| zstd | 9 | 313.198 | 2,962,142 | 0.1733 | 5 | yes |
| zstd | 10 | 434.242 | 2,925,109 | 0.1712 | 5 | yes |
| zstd | 11 | 619.630 | 2,897,547 | 0.1696 | 5 | yes |
| zstd | 12 | 661.762 | 2,897,453 | 0.1696 | 5 | yes |
| zstd | 13 | 877.095 | 2,874,535 | 0.1682 | 5 | yes |
| zstd | 14 | 970.120 | 2,860,101 | 0.1674 | 5 | yes |
| zstd | 15 | 1271.469 | 2,856,465 | 0.1672 | 5 | yes |
| zstd | 16 | 2628.238 | 2,667,907 | 0.1561 | 5 | yes |
| zstd | 17 | 3390.316 | 2,576,011 | 0.1507 | 5 | yes |
| zstd | 18 | 5859.079 | 2,556,665 | 0.1496 | 5 | yes |
| zstd | 19 | 6384.988 | 2,549,586 | 0.1492 | 5 | yes |
| zstd | 20 | 6507.909 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 21 | 6527.309 | 2,547,611 | 0.1491 | 5 | yes |
| zstd | 22 | 6689.938 | 2,543,154 | 0.1488 | 5 | yes |

<h2 id="sqlite-org-sqlite-wasm-dist-sqlite3-wasm">@sqlite.org/sqlite-wasm/dist/sqlite3.wasm</h2>

- Original size: 859,730 bytes
- Chart: ![Compression ratio chart for @sqlite.org/sqlite-wasm/dist/sqlite3.wasm](charts/sqlite-org-sqlite-wasm-dist-sqlite3-wasm.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 12.330 | 429,925 | 0.5001 | 5 | yes |
| gzip | 2 | 13.368 | 419,493 | 0.4879 | 5 | yes |
| gzip | 3 | 15.588 | 414,493 | 0.4821 | 5 | yes |
| gzip | 4 | 16.402 | 407,503 | 0.4740 | 5 | yes |
| gzip | 5 | 23.528 | 399,866 | 0.4651 | 5 | yes |
| gzip | 6 | 27.867 | 399,154 | 0.4643 | 5 | yes |
| gzip | 7 | 29.476 | 399,020 | 0.4641 | 5 | yes |
| gzip | 8 | 32.260 | 398,974 | 0.4641 | 5 | yes |
| gzip | 9 | 32.530 | 398,973 | 0.4641 | 5 | yes |
| brotli | 0 | 3.903 | 460,125 | 0.5352 | 5 | yes |
| brotli | 1 | 5.335 | 442,506 | 0.5147 | 5 | yes |
| brotli | 2 | 9.947 | 409,638 | 0.4765 | 5 | yes |
| brotli | 3 | 12.034 | 408,960 | 0.4757 | 5 | yes |
| brotli | 4 | 17.789 | 400,331 | 0.4656 | 5 | yes |
| brotli | 5 | 27.026 | 380,339 | 0.4424 | 5 | yes |
| brotli | 6 | 31.531 | 377,100 | 0.4386 | 5 | yes |
| brotli | 7 | 44.531 | 375,149 | 0.4364 | 5 | yes |
| brotli | 8 | 52.677 | 374,164 | 0.4352 | 5 | yes |
| brotli | 9 | 64.768 | 373,347 | 0.4343 | 5 | yes |
| brotli | 10 | 912.392 | 353,246 | 0.4109 | 5 | yes |
| brotli | 11 | 1947.526 | 344,353 | 0.4005 | 5 | yes |
| zstd | 1 | 3.142 | 457,015 | 0.5316 | 5 | yes |
| zstd | 2 | 3.951 | 426,694 | 0.4963 | 5 | yes |
| zstd | 3 | 5.940 | 411,278 | 0.4784 | 5 | yes |
| zstd | 4 | 6.501 | 408,051 | 0.4746 | 5 | yes |
| zstd | 5 | 10.056 | 397,246 | 0.4621 | 5 | yes |
| zstd | 6 | 13.803 | 390,015 | 0.4536 | 5 | yes |
| zstd | 7 | 15.001 | 388,562 | 0.4520 | 5 | yes |
| zstd | 8 | 18.679 | 386,566 | 0.4496 | 5 | yes |
| zstd | 9 | 18.648 | 386,404 | 0.4494 | 5 | yes |
| zstd | 10 | 21.219 | 385,609 | 0.4485 | 5 | yes |
| zstd | 11 | 25.488 | 385,152 | 0.4480 | 5 | yes |
| zstd | 12 | 25.038 | 385,152 | 0.4480 | 5 | yes |
| zstd | 13 | 48.193 | 383,952 | 0.4466 | 7 | yes |
| zstd | 14 | 48.312 | 383,886 | 0.4465 | 5 | yes |
| zstd | 15 | 47.611 | 383,877 | 0.4465 | 5 | yes |
| zstd | 16 | 90.561 | 369,550 | 0.4298 | 5 | yes |
| zstd | 17 | 113.967 | 362,382 | 0.4215 | 5 | yes |
| zstd | 18 | 154.349 | 358,220 | 0.4167 | 5 | yes |
| zstd | 19 | 170.132 | 358,047 | 0.4165 | 5 | yes |
| zstd | 20 | 170.441 | 358,047 | 0.4165 | 5 | yes |
| zstd | 21 | 172.123 | 358,041 | 0.4165 | 5 | yes |
| zstd | 22 | 172.527 | 358,041 | 0.4165 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,586 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.110 | 5,565 | 0.2841 | 25 | no |
| gzip | 2 | 0.142 | 5,486 | 0.2801 | 9 | yes |
| gzip | 3 | 0.164 | 5,419 | 0.2767 | 10 | yes |
| gzip | 4 | 0.211 | 5,202 | 0.2656 | 5 | yes |
| gzip | 5 | 0.274 | 4,958 | 0.2531 | 5 | yes |
| gzip | 6 | 0.370 | 4,947 | 0.2526 | 5 | yes |
| gzip | 7 | 0.489 | 4,921 | 0.2513 | 5 | yes |
| gzip | 8 | 0.651 | 4,923 | 0.2514 | 5 | yes |
| gzip | 9 | 0.645 | 4,923 | 0.2514 | 5 | yes |
| brotli | 0 | 0.059 | 6,082 | 0.3105 | 9 | yes |
| brotli | 1 | 0.072 | 5,794 | 0.2958 | 20 | yes |
| brotli | 2 | 0.140 | 5,002 | 0.2554 | 10 | yes |
| brotli | 3 | 0.165 | 4,986 | 0.2546 | 12 | yes |
| brotli | 4 | 0.303 | 4,954 | 0.2529 | 5 | yes |
| brotli | 5 | 0.468 | 4,641 | 0.2370 | 5 | yes |
| brotli | 6 | 0.494 | 4,630 | 0.2364 | 5 | yes |
| brotli | 7 | 0.565 | 4,622 | 0.2360 | 5 | yes |
| brotli | 8 | 0.613 | 4,623 | 0.2360 | 5 | yes |
| brotli | 9 | 0.735 | 4,612 | 0.2355 | 5 | yes |
| brotli | 10 | 7.327 | 3,996 | 0.2040 | 5 | yes |
| brotli | 11 | 21.693 | 3,863 | 0.1972 | 5 | yes |
| zstd | 1 | 0.073 | 5,441 | 0.2778 | 5 | yes |
| zstd | 2 | 0.062 | 5,242 | 0.2676 | 17 | yes |
| zstd | 3 | 0.083 | 5,234 | 0.2672 | 25 | no |
| zstd | 4 | 0.082 | 5,212 | 0.2661 | 23 | yes |
| zstd | 5 | 0.168 | 5,133 | 0.2621 | 5 | yes |
| zstd | 6 | 0.239 | 4,853 | 0.2478 | 7 | yes |
| zstd | 7 | 0.287 | 4,757 | 0.2429 | 7 | yes |
| zstd | 8 | 0.324 | 4,750 | 0.2425 | 5 | yes |
| zstd | 9 | 0.397 | 4,744 | 0.2422 | 6 | yes |
| zstd | 10 | 0.534 | 4,746 | 0.2423 | 5 | yes |
| zstd | 11 | 0.596 | 4,745 | 0.2423 | 5 | yes |
| zstd | 12 | 0.639 | 4,745 | 0.2423 | 5 | yes |
| zstd | 13 | 0.986 | 4,865 | 0.2484 | 5 | yes |
| zstd | 14 | 1.823 | 4,497 | 0.2296 | 5 | yes |
| zstd | 15 | 1.926 | 4,490 | 0.2292 | 5 | yes |
| zstd | 16 | 2.878 | 4,430 | 0.2262 | 5 | yes |
| zstd | 17 | 2.866 | 4,430 | 0.2262 | 5 | yes |
| zstd | 18 | 2.874 | 4,430 | 0.2262 | 5 | yes |
| zstd | 19 | 5.656 | 4,414 | 0.2254 | 5 | yes |
| zstd | 20 | 5.682 | 4,415 | 0.2254 | 5 | yes |
| zstd | 21 | 5.670 | 4,415 | 0.2254 | 5 | yes |
| zstd | 22 | 5.666 | 4,415 | 0.2254 | 5 | yes |
