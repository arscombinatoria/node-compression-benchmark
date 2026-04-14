# Node Compression Benchmark

Last updated: 2026-04-14T13:34:32.736Z

This benchmark measures compression time, output size, and compression ratios for several popular npm packages across all gzip, Brotli, and Zstandard compression levels.

## Table of Contents

- [jquery/dist/jquery.min.js](#jquery-dist-jquery-min-js)
- [@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](#expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf)
- [@codemirror/view/dist/index.js](#codemirror-view-dist-index-js)
- [react/cjs/react.production.js](#react-cjs-react-production-js)
- [moment/min/moment.min.js](#moment-min-moment-min-js)
- [vue/dist/vue.global.prod.js](#vue-dist-vue-global-prod-js)
- [lodash/lodash.min.js](#lodash-lodash-min-js)
- [@fortawesome/fontawesome-free/css/all.min.css](#fortawesome-fontawesome-free-css-all-min-css)
- [bootstrap/dist/css/bootstrap.min.css](#bootstrap-dist-css-bootstrap-min-css)
- [cities.json/cities.json](#cities-json-cities-json)
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
| gzip | 1 | 1.014 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.081 | 30,134 | 0.3827 | 6 | yes |
| gzip | 3 | 1.213 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.343 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.769 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.118 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.367 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.740 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.740 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.389 | 33,111 | 0.4205 | 9 | yes |
| brotli | 1 | 0.823 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.864 | 29,394 | 0.3733 | 13 | yes |
| brotli | 3 | 0.992 | 29,072 | 0.3692 | 14 | yes |
| brotli | 4 | 1.477 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.761 | 27,013 | 0.3430 | 16 | yes |
| brotli | 6 | 3.008 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 5.702 | 26,773 | 0.3400 | 10 | yes |
| brotli | 8 | 2.914 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.961 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 37.764 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 101.455 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.279 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.390 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.382 | 29,214 | 0.3710 | 25 | no |
| zstd | 4 | 1.537 | 29,108 | 0.3696 | 14 | yes |
| zstd | 5 | 1.973 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 2.444 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.981 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 2.115 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.255 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.515 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.266 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.668 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.517 | 26,867 | 0.3412 | 7 | yes |
| zstd | 14 | 8.980 | 26,432 | 0.3357 | 11 | yes |
| zstd | 15 | 9.109 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 11.384 | 26,336 | 0.3344 | 6 | yes |
| zstd | 17 | 11.464 | 26,336 | 0.3344 | 6 | yes |
| zstd | 18 | 11.398 | 26,336 | 0.3344 | 7 | yes |
| zstd | 19 | 21.164 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 22.359 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 22.097 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 22.638 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 95.759 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 98.323 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 103.330 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 115.541 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 134.683 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 152.057 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 163.065 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 183.377 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 196.657 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.629 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.237 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 51.087 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.964 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 92.963 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 129.066 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 152.989 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 480.620 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 637.372 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 850.815 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6777.820 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13814.514 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.747 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.550 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 37.128 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 44.685 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 68.077 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 80.949 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 89.185 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 102.365 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 105.683 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 129.758 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 167.565 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 204.732 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 421.458 | 2,864,062 | 0.5233 | 8 | yes |
| zstd | 14 | 490.627 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 571.500 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 738.634 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 976.348 | 2,756,112 | 0.5036 | 7 | yes |
| zstd | 18 | 1422.732 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1473.020 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1438.219 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1507.527 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1402.624 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="codemirror-view-dist-index-js">@codemirror/view/dist/index.js</h2>

- Original size: 485,932 bytes
- Chart: ![Compression ratio chart for @codemirror/view/dist/index.js](charts/codemirror-view-dist-index-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 4.304 | 143,926 | 0.2962 | 5 | yes |
| gzip | 2 | 4.693 | 137,191 | 0.2823 | 5 | yes |
| gzip | 3 | 6.132 | 132,653 | 0.2730 | 5 | yes |
| gzip | 4 | 6.267 | 124,449 | 0.2561 | 5 | yes |
| gzip | 5 | 9.066 | 119,890 | 0.2467 | 5 | yes |
| gzip | 6 | 13.482 | 118,178 | 0.2432 | 5 | yes |
| gzip | 7 | 17.197 | 117,703 | 0.2422 | 5 | yes |
| gzip | 8 | 32.297 | 117,442 | 0.2417 | 5 | yes |
| gzip | 9 | 49.877 | 117,362 | 0.2415 | 5 | yes |
| brotli | 0 | 1.571 | 148,131 | 0.3048 | 5 | yes |
| brotli | 1 | 2.275 | 136,118 | 0.2801 | 5 | yes |
| brotli | 2 | 4.007 | 127,982 | 0.2634 | 5 | yes |
| brotli | 3 | 4.664 | 125,362 | 0.2580 | 5 | yes |
| brotli | 4 | 6.471 | 121,305 | 0.2496 | 5 | yes |
| brotli | 5 | 9.954 | 111,621 | 0.2297 | 5 | yes |
| brotli | 6 | 11.579 | 108,983 | 0.2243 | 5 | yes |
| brotli | 7 | 14.508 | 107,042 | 0.2203 | 5 | yes |
| brotli | 8 | 17.371 | 106,024 | 0.2182 | 5 | yes |
| brotli | 9 | 21.943 | 105,126 | 0.2163 | 5 | yes |
| brotli | 10 | 291.695 | 97,714 | 0.2011 | 5 | yes |
| brotli | 11 | 743.538 | 95,541 | 0.1966 | 5 | yes |
| zstd | 1 | 1.778 | 136,834 | 0.2816 | 5 | yes |
| zstd | 2 | 1.910 | 132,597 | 0.2729 | 5 | yes |
| zstd | 3 | 2.197 | 125,085 | 0.2574 | 5 | yes |
| zstd | 4 | 2.402 | 124,856 | 0.2569 | 5 | yes |
| zstd | 5 | 4.612 | 116,229 | 0.2392 | 5 | yes |
| zstd | 6 | 6.347 | 112,386 | 0.2313 | 5 | yes |
| zstd | 7 | 7.211 | 110,843 | 0.2281 | 5 | yes |
| zstd | 8 | 8.997 | 110,044 | 0.2265 | 5 | yes |
| zstd | 9 | 8.823 | 110,044 | 0.2265 | 5 | yes |
| zstd | 10 | 10.735 | 109,065 | 0.2244 | 5 | yes |
| zstd | 11 | 13.881 | 108,472 | 0.2232 | 5 | yes |
| zstd | 12 | 14.561 | 108,472 | 0.2232 | 5 | yes |
| zstd | 13 | 30.347 | 107,308 | 0.2208 | 5 | yes |
| zstd | 14 | 34.814 | 106,712 | 0.2196 | 5 | yes |
| zstd | 15 | 38.072 | 106,627 | 0.2194 | 5 | yes |
| zstd | 16 | 73.375 | 101,091 | 0.2080 | 5 | yes |
| zstd | 17 | 75.818 | 100,209 | 0.2062 | 5 | yes |
| zstd | 18 | 108.711 | 99,415 | 0.2046 | 5 | yes |
| zstd | 19 | 136.420 | 99,306 | 0.2044 | 5 | yes |
| zstd | 20 | 135.263 | 99,306 | 0.2044 | 5 | yes |
| zstd | 21 | 140.824 | 99,313 | 0.2044 | 5 | yes |
| zstd | 22 | 138.994 | 99,313 | 0.2044 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.070 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.074 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.086 | 4,806 | 0.2791 | 21 | yes |
| gzip | 4 | 0.112 | 4,530 | 0.2631 | 25 | no |
| gzip | 5 | 0.139 | 4,441 | 0.2579 | 20 | yes |
| gzip | 6 | 0.177 | 4,425 | 0.2570 | 17 | yes |
| gzip | 7 | 0.211 | 4,418 | 0.2566 | 14 | yes |
| gzip | 8 | 0.495 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.492 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.055 | 5,235 | 0.3041 | 9 | yes |
| brotli | 1 | 0.069 | 5,134 | 0.2982 | 9 | yes |
| brotli | 2 | 0.098 | 4,741 | 0.2754 | 16 | yes |
| brotli | 3 | 0.125 | 4,650 | 0.2701 | 23 | yes |
| brotli | 4 | 0.203 | 4,555 | 0.2646 | 25 | no |
| brotli | 5 | 0.321 | 4,276 | 0.2484 | 19 | yes |
| brotli | 6 | 0.340 | 4,275 | 0.2483 | 13 | yes |
| brotli | 7 | 0.443 | 4,264 | 0.2477 | 25 | no |
| brotli | 8 | 0.435 | 4,257 | 0.2473 | 15 | yes |
| brotli | 9 | 0.560 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.452 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.675 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.056 | 4,923 | 0.2859 | 16 | yes |
| zstd | 2 | 0.060 | 4,868 | 0.2827 | 12 | yes |
| zstd | 3 | 0.077 | 4,717 | 0.2740 | 14 | yes |
| zstd | 4 | 0.087 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.145 | 4,519 | 0.2625 | 10 | yes |
| zstd | 6 | 0.179 | 4,437 | 0.2577 | 13 | yes |
| zstd | 7 | 0.201 | 4,437 | 0.2577 | 13 | yes |
| zstd | 8 | 0.218 | 4,426 | 0.2571 | 12 | yes |
| zstd | 9 | 0.242 | 4,420 | 0.2567 | 21 | yes |
| zstd | 10 | 0.341 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.641 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.664 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.954 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.455 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.539 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.221 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.352 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.360 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.604 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.558 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.551 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.625 | 4,264 | 0.2477 | 5 | yes |

<h2 id="moment-min-moment-min-js">moment/min/moment.min.js</h2>

- Original size: 58,890 bytes
- Chart: ![Compression ratio chart for moment/min/moment.min.js](charts/moment-min-moment-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.604 | 21,216 | 0.3603 | 5 | yes |
| gzip | 2 | 0.670 | 20,666 | 0.3509 | 5 | yes |
| gzip | 3 | 0.748 | 20,354 | 0.3456 | 5 | yes |
| gzip | 4 | 0.863 | 19,475 | 0.3307 | 5 | yes |
| gzip | 5 | 1.124 | 18,991 | 0.3225 | 5 | yes |
| gzip | 6 | 1.372 | 18,892 | 0.3208 | 5 | yes |
| gzip | 7 | 1.560 | 18,860 | 0.3203 | 5 | yes |
| gzip | 8 | 1.854 | 18,845 | 0.3200 | 5 | yes |
| gzip | 9 | 1.837 | 18,845 | 0.3200 | 5 | yes |
| brotli | 0 | 0.156 | 22,733 | 0.3860 | 11 | yes |
| brotli | 1 | 0.275 | 22,170 | 0.3765 | 8 | yes |
| brotli | 2 | 0.554 | 20,291 | 0.3446 | 5 | yes |
| brotli | 3 | 0.663 | 20,119 | 0.3416 | 5 | yes |
| brotli | 4 | 1.029 | 19,713 | 0.3347 | 5 | yes |
| brotli | 5 | 1.583 | 18,447 | 0.3132 | 5 | yes |
| brotli | 6 | 1.772 | 18,343 | 0.3115 | 5 | yes |
| brotli | 7 | 1.932 | 18,239 | 0.3097 | 5 | yes |
| brotli | 8 | 2.054 | 18,216 | 0.3093 | 5 | yes |
| brotli | 9 | 2.342 | 18,172 | 0.3086 | 5 | yes |
| brotli | 10 | 28.340 | 17,405 | 0.2956 | 5 | yes |
| brotli | 11 | 71.520 | 17,004 | 0.2887 | 5 | yes |
| zstd | 1 | 0.160 | 21,483 | 0.3648 | 24 | yes |
| zstd | 2 | 0.181 | 20,806 | 0.3533 | 16 | yes |
| zstd | 3 | 0.272 | 20,298 | 0.3447 | 5 | yes |
| zstd | 4 | 0.268 | 19,924 | 0.3383 | 9 | yes |
| zstd | 5 | 0.643 | 19,309 | 0.3279 | 5 | yes |
| zstd | 6 | 0.837 | 18,919 | 0.3213 | 5 | yes |
| zstd | 7 | 1.007 | 18,815 | 0.3195 | 5 | yes |
| zstd | 8 | 1.109 | 18,708 | 0.3177 | 5 | yes |
| zstd | 9 | 1.226 | 18,638 | 0.3165 | 5 | yes |
| zstd | 10 | 1.402 | 18,583 | 0.3156 | 5 | yes |
| zstd | 11 | 2.476 | 18,520 | 0.3145 | 5 | yes |
| zstd | 12 | 2.425 | 18,517 | 0.3144 | 5 | yes |
| zstd | 13 | 3.618 | 18,417 | 0.3127 | 5 | yes |
| zstd | 14 | 5.188 | 17,955 | 0.3049 | 5 | yes |
| zstd | 15 | 5.459 | 17,942 | 0.3047 | 5 | yes |
| zstd | 16 | 7.561 | 17,892 | 0.3038 | 5 | yes |
| zstd | 17 | 7.729 | 17,892 | 0.3038 | 5 | yes |
| zstd | 18 | 7.737 | 17,892 | 0.3038 | 5 | yes |
| zstd | 19 | 15.366 | 17,845 | 0.3030 | 5 | yes |
| zstd | 20 | 15.448 | 17,845 | 0.3030 | 5 | yes |
| zstd | 21 | 15.175 | 17,845 | 0.3030 | 5 | yes |
| zstd | 22 | 15.201 | 17,845 | 0.3030 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 2.061 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 2.233 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.564 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.846 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.891 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.883 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 5.338 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 5.773 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 5.799 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.621 | 70,918 | 0.4333 | 9 | yes |
| brotli | 1 | 0.948 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.744 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 2.063 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 3.039 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.606 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 5.218 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 6.405 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 6.866 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 8.112 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 105.641 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 263.267 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.640 | 65,987 | 0.4032 | 5 | yes |
| zstd | 2 | 0.808 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 1.018 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.878 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.079 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.548 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 3.036 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 3.766 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.264 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 5.163 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 9.445 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 9.886 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 16.735 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 19.028 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 18.927 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 24.167 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 25.428 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 43.035 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 40.848 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 45.507 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 42.578 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 40.194 | 55,612 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.842 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.930 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.065 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.164 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.571 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.033 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.448 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.344 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.338 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.206 | 30,978 | 0.4230 | 16 | yes |
| brotli | 1 | 0.320 | 29,754 | 0.4063 | 19 | yes |
| brotli | 2 | 0.728 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.850 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.352 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.919 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.174 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.617 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.908 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.428 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 43.764 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 102.266 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.208 | 28,919 | 0.3949 | 19 | yes |
| zstd | 2 | 0.233 | 28,008 | 0.3824 | 12 | yes |
| zstd | 3 | 0.287 | 27,463 | 0.3750 | 19 | yes |
| zstd | 4 | 0.371 | 27,100 | 0.3700 | 14 | yes |
| zstd | 5 | 0.805 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.113 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.368 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.479 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.657 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.972 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.305 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.445 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.535 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.783 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.858 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.208 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.225 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.200 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.936 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.911 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.849 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.893 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.629 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.734 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.883 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 0.989 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.408 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 2.171 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.931 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 8.827 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 8.849 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.177 | 25,901 | 0.3420 | 16 | yes |
| brotli | 1 | 0.305 | 23,906 | 0.3156 | 21 | yes |
| brotli | 2 | 0.663 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.792 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 1.201 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.842 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.950 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 2.402 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.871 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 3.644 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 32.337 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 90.281 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.205 | 22,639 | 0.2989 | 9 | yes |
| zstd | 2 | 0.223 | 22,433 | 0.2962 | 17 | yes |
| zstd | 3 | 0.271 | 22,208 | 0.2932 | 14 | yes |
| zstd | 4 | 0.353 | 22,181 | 0.2929 | 25 | no |
| zstd | 5 | 0.730 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 1.022 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 1.257 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.479 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.809 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 2.403 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 3.345 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 4.377 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 5.004 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 7.065 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 8.232 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 10.743 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 14.374 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 23.006 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 20.346 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 23.967 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 38.700 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 45.738 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.191 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.264 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.476 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.759 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.290 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.217 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.944 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.354 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.432 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.428 | 43,268 | 0.1864 | 25 | no |
| brotli | 1 | 0.774 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.528 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.471 | 34,781 | 0.1498 | 9 | yes |
| brotli | 4 | 2.147 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.070 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.386 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.839 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.417 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.311 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 104.975 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 305.981 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.509 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.533 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.565 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.477 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.753 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.991 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.261 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.806 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.273 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.110 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.291 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.153 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 19.061 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.643 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.325 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.493 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 54.322 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 73.133 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 82.114 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 84.705 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 85.233 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 85.398 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 98.944 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 99.767 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 121.642 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 142.086 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 173.417 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 230.359 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 360.511 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 1040.909 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1393.359 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 43.967 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 65.749 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 115.815 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 134.573 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 200.547 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 331.482 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 401.621 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 547.422 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 721.026 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 969.010 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 14585.073 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 38906.530 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.939 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 54.617 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 68.324 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 74.600 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 152.309 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 216.525 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 260.894 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 328.006 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 364.809 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 464.795 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 689.774 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 699.321 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 1152.745 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1472.402 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1849.568 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 4185.066 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 4922.386 | 2,466,410 | 0.1123 | 7 | yes |
| zstd | 18 | 6394.169 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 10004.173 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9322.580 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9243.742 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9592.545 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.074 | 5,506 | 0.2826 | 13 | yes |
| gzip | 2 | 0.088 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.092 | 5,356 | 0.2749 | 16 | yes |
| gzip | 4 | 0.125 | 5,145 | 0.2641 | 25 | no |
| gzip | 5 | 0.153 | 4,896 | 0.2513 | 25 | no |
| gzip | 6 | 0.221 | 4,884 | 0.2507 | 24 | yes |
| gzip | 7 | 0.510 | 4,857 | 0.2493 | 9 | yes |
| gzip | 8 | 0.709 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.708 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.055 | 6,028 | 0.3094 | 8 | yes |
| brotli | 1 | 0.075 | 5,737 | 0.2945 | 8 | yes |
| brotli | 2 | 0.104 | 4,944 | 0.2538 | 19 | yes |
| brotli | 3 | 0.190 | 4,930 | 0.2531 | 5 | yes |
| brotli | 4 | 0.209 | 4,898 | 0.2514 | 25 | no |
| brotli | 5 | 0.398 | 4,581 | 0.2352 | 16 | yes |
| brotli | 6 | 0.487 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.561 | 4,564 | 0.2343 | 7 | yes |
| brotli | 8 | 0.601 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.727 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.716 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.435 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.057 | 5,379 | 0.2761 | 16 | yes |
| zstd | 2 | 0.060 | 5,176 | 0.2657 | 23 | yes |
| zstd | 3 | 0.079 | 5,169 | 0.2653 | 11 | yes |
| zstd | 4 | 0.082 | 5,154 | 0.2646 | 18 | yes |
| zstd | 5 | 0.157 | 5,074 | 0.2605 | 8 | yes |
| zstd | 6 | 0.199 | 4,797 | 0.2463 | 9 | yes |
| zstd | 7 | 0.229 | 4,702 | 0.2414 | 16 | yes |
| zstd | 8 | 0.258 | 4,696 | 0.2411 | 12 | yes |
| zstd | 9 | 0.344 | 4,690 | 0.2408 | 10 | yes |
| zstd | 10 | 0.456 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.616 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.635 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.992 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.737 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.822 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.553 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.583 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.577 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.997 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.026 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.027 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.012 | 4,348 | 0.2232 | 5 | yes |
