# Node Compression Benchmark

Last updated: 2026-04-12T00:29:55.926Z

This benchmark measures compression time, output size, and compression ratios for several popular npm packages across all gzip, Brotli, and Zstandard compression levels.

## Table of Contents

- [jquery/dist/jquery.min.js](#jquery-dist-jquery-min-js)
- [@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](#expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf)
- [react/cjs/react.production.js](#react-cjs-react-production-js)
- [moment/min/moment.min.js](#moment-min-moment-min-js)
- [vue/dist/vue.global.prod.js](#vue-dist-vue-global-prod-js)
- [lodash/lodash.min.js](#lodash-lodash-min-js)
- [normalize.css/normalize.css](#normalize-css-normalize-css)
- [bootstrap/dist/css/bootstrap.min.css](#bootstrap-dist-css-bootstrap-min-css)
- [cities.json/cities.json](#cities-json-cities-json)
- [tailwindcss/theme.css](#tailwindcss-theme-css)

Benchmark settings:

- Warmup runs per level: 1
- Minimum samples per level: 5
- Maximum samples per level: 25
- Target relative half-width (median-based robust estimate): 0.0500

## jquery/dist/jquery.min.js

- Original size: 78,748 bytes
- Chart: ![Compression ratio chart for jquery/dist/jquery.min.js](charts/jquery-dist-jquery-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.934 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.012 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.082 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.231 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.592 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.872 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.044 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.354 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.412 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.381 | 33,111 | 0.4205 | 5 | yes |
| brotli | 1 | 0.740 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.801 | 29,394 | 0.3733 | 9 | yes |
| brotli | 3 | 0.910 | 29,072 | 0.3692 | 7 | yes |
| brotli | 4 | 1.460 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.095 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.288 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 2.454 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.540 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.647 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 33.930 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 96.442 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.326 | 31,062 | 0.3944 | 24 | yes |
| zstd | 2 | 0.359 | 30,069 | 0.3818 | 5 | yes |
| zstd | 3 | 0.692 | 29,214 | 0.3710 | 13 | yes |
| zstd | 4 | 0.687 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 0.925 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.320 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.542 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.959 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.160 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.411 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.031 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.365 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.410 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 8.910 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 8.769 | 26,420 | 0.3355 | 6 | yes |
| zstd | 16 | 12.229 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 12.138 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.629 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 22.951 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 22.891 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 22.341 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 22.846 | 26,282 | 0.3337 | 5 | yes |

## @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 83.528 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 86.500 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 91.733 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 107.746 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 119.472 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 134.655 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 141.681 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 159.320 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 171.881 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 20.250 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 28.609 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 49.058 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 64.180 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 87.557 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 126.230 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 143.481 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 422.981 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 531.704 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 706.731 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6007.283 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12522.106 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.657 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 24.930 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 40.015 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 44.169 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 66.031 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 79.329 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 85.154 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 98.298 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 98.429 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 114.956 | 2,879,072 | 0.5261 | 11 | yes |
| zstd | 11 | 160.906 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 180.578 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 361.528 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 413.099 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 484.304 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 663.094 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 779.589 | 2,756,112 | 0.5036 | 6 | yes |
| zstd | 18 | 1120.830 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1262.825 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1235.925 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1258.697 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1258.568 | 2,710,761 | 0.4953 | 5 | yes |

## react/cjs/react.production.js

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.108 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.118 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.131 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.174 | 4,530 | 0.2631 | 18 | yes |
| gzip | 5 | 0.237 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.277 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.324 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.460 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.466 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.059 | 5,235 | 0.3041 | 25 | no |
| brotli | 1 | 0.068 | 5,134 | 0.2982 | 15 | yes |
| brotli | 2 | 0.118 | 4,741 | 0.2754 | 20 | yes |
| brotli | 3 | 0.146 | 4,650 | 0.2701 | 20 | yes |
| brotli | 4 | 0.281 | 4,555 | 0.2646 | 8 | yes |
| brotli | 5 | 0.392 | 4,276 | 0.2484 | 7 | yes |
| brotli | 6 | 0.420 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.453 | 4,264 | 0.2477 | 6 | yes |
| brotli | 8 | 0.461 | 4,257 | 0.2473 | 6 | yes |
| brotli | 9 | 0.549 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.985 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 18.818 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.058 | 4,923 | 0.2859 | 13 | yes |
| zstd | 2 | 0.073 | 4,868 | 0.2827 | 13 | yes |
| zstd | 3 | 0.089 | 4,717 | 0.2740 | 25 | yes |
| zstd | 4 | 0.103 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.189 | 4,519 | 0.2625 | 15 | yes |
| zstd | 6 | 0.244 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.298 | 4,437 | 0.2577 | 5 | yes |
| zstd | 8 | 0.329 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.377 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.410 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.641 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.680 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.950 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.469 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.591 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.528 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.700 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.686 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 5.301 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 5.280 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 5.279 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 5.300 | 4,264 | 0.2477 | 5 | yes |

## moment/min/moment.min.js

- Original size: 58,890 bytes
- Chart: ![Compression ratio chart for moment/min/moment.min.js](charts/moment-min-moment-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.554 | 21,216 | 0.3603 | 5 | yes |
| gzip | 2 | 0.600 | 20,666 | 0.3509 | 5 | yes |
| gzip | 3 | 0.670 | 20,354 | 0.3456 | 5 | yes |
| gzip | 4 | 0.780 | 19,475 | 0.3307 | 5 | yes |
| gzip | 5 | 0.990 | 18,991 | 0.3225 | 5 | yes |
| gzip | 6 | 1.194 | 18,892 | 0.3208 | 5 | yes |
| gzip | 7 | 1.344 | 18,860 | 0.3203 | 5 | yes |
| gzip | 8 | 1.593 | 18,845 | 0.3200 | 5 | yes |
| gzip | 9 | 1.609 | 18,845 | 0.3200 | 5 | yes |
| brotli | 0 | 0.186 | 22,733 | 0.3860 | 15 | yes |
| brotli | 1 | 0.292 | 22,170 | 0.3765 | 5 | yes |
| brotli | 2 | 0.528 | 20,291 | 0.3446 | 5 | yes |
| brotli | 3 | 0.611 | 20,119 | 0.3416 | 5 | yes |
| brotli | 4 | 0.970 | 19,713 | 0.3347 | 5 | yes |
| brotli | 5 | 1.419 | 18,447 | 0.3132 | 5 | yes |
| brotli | 6 | 1.571 | 18,343 | 0.3115 | 7 | yes |
| brotli | 7 | 1.727 | 18,239 | 0.3097 | 5 | yes |
| brotli | 8 | 1.857 | 18,216 | 0.3093 | 5 | yes |
| brotli | 9 | 2.193 | 18,172 | 0.3086 | 5 | yes |
| brotli | 10 | 25.554 | 17,405 | 0.2956 | 5 | yes |
| brotli | 11 | 68.954 | 17,004 | 0.2887 | 5 | yes |
| zstd | 1 | 0.216 | 21,483 | 0.3648 | 5 | yes |
| zstd | 2 | 0.232 | 20,806 | 0.3533 | 6 | yes |
| zstd | 3 | 0.292 | 20,298 | 0.3447 | 24 | yes |
| zstd | 4 | 0.362 | 19,924 | 0.3383 | 5 | yes |
| zstd | 5 | 0.646 | 19,309 | 0.3279 | 5 | yes |
| zstd | 6 | 0.859 | 18,919 | 0.3213 | 5 | yes |
| zstd | 7 | 1.026 | 18,815 | 0.3195 | 5 | yes |
| zstd | 8 | 1.118 | 18,708 | 0.3177 | 5 | yes |
| zstd | 9 | 1.322 | 18,638 | 0.3165 | 5 | yes |
| zstd | 10 | 1.390 | 18,583 | 0.3156 | 5 | yes |
| zstd | 11 | 2.360 | 18,520 | 0.3145 | 5 | yes |
| zstd | 12 | 2.436 | 18,517 | 0.3144 | 5 | yes |
| zstd | 13 | 3.761 | 18,417 | 0.3127 | 5 | yes |
| zstd | 14 | 5.306 | 17,955 | 0.3049 | 5 | yes |
| zstd | 15 | 5.606 | 17,942 | 0.3047 | 5 | yes |
| zstd | 16 | 8.476 | 17,892 | 0.3038 | 5 | yes |
| zstd | 17 | 8.729 | 17,892 | 0.3038 | 5 | yes |
| zstd | 18 | 8.744 | 17,892 | 0.3038 | 5 | yes |
| zstd | 19 | 17.248 | 17,845 | 0.3030 | 5 | yes |
| zstd | 20 | 17.273 | 17,845 | 0.3030 | 5 | yes |
| zstd | 21 | 17.187 | 17,845 | 0.3030 | 5 | yes |
| zstd | 22 | 17.207 | 17,845 | 0.3030 | 5 | yes |

## vue/dist/vue.global.prod.js

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 1.862 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 2.002 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.273 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.536 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.405 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.229 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 4.613 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 4.954 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 4.977 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.678 | 70,918 | 0.4333 | 5 | yes |
| brotli | 1 | 0.956 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.755 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 2.055 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 3.165 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.684 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 4.834 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 5.641 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 6.317 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 7.253 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 96.207 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 247.414 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.613 | 65,987 | 0.4032 | 5 | yes |
| zstd | 2 | 0.811 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 1.042 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.913 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.293 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.579 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 3.004 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 3.701 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.258 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 5.186 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 8.494 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 8.534 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 15.485 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 18.035 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 18.226 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 24.766 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 24.730 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 42.356 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 42.240 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 42.306 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 42.583 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 42.622 | 55,612 | 0.3398 | 5 | yes |

## lodash/lodash.min.js

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.769 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.831 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.954 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.057 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.372 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.787 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.093 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.837 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.838 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.278 | 30,978 | 0.4230 | 6 | yes |
| brotli | 1 | 0.378 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.680 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.792 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.316 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.904 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.088 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.416 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.662 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.129 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 40.118 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 97.442 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.257 | 28,919 | 0.3949 | 6 | yes |
| zstd | 2 | 0.403 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.374 | 27,463 | 0.3750 | 5 | yes |
| zstd | 4 | 0.502 | 27,100 | 0.3700 | 24 | yes |
| zstd | 5 | 0.862 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.117 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.327 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.464 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.761 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.949 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.248 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.393 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.452 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.689 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.729 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.837 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.852 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.888 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 20.629 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 21.070 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 21.607 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 20.941 | 24,463 | 0.3340 | 5 | yes |

## normalize.css/normalize.css

- Original size: 6,138 bytes
- Chart: ![Compression ratio chart for normalize.css/normalize.css](charts/normalize-css-normalize-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.039 | 1,915 | 0.3120 | 25 | no |
| gzip | 2 | 0.038 | 1,866 | 0.3040 | 14 | yes |
| gzip | 3 | 0.039 | 1,845 | 0.3006 | 17 | yes |
| gzip | 4 | 0.056 | 1,758 | 0.2864 | 25 | yes |
| gzip | 5 | 0.058 | 1,722 | 0.2805 | 19 | yes |
| gzip | 6 | 0.062 | 1,722 | 0.2805 | 25 | no |
| gzip | 7 | 0.056 | 1,722 | 0.2805 | 13 | yes |
| gzip | 8 | 0.057 | 1,720 | 0.2802 | 23 | yes |
| gzip | 9 | 0.054 | 1,720 | 0.2802 | 5 | yes |
| brotli | 0 | 0.023 | 2,089 | 0.3403 | 13 | yes |
| brotli | 1 | 0.029 | 2,056 | 0.3350 | 11 | yes |
| brotli | 2 | 0.043 | 1,909 | 0.3110 | 20 | yes |
| brotli | 3 | 0.053 | 1,834 | 0.2988 | 12 | yes |
| brotli | 4 | 0.105 | 1,694 | 0.2760 | 16 | yes |
| brotli | 5 | 0.138 | 1,557 | 0.2537 | 14 | yes |
| brotli | 6 | 0.129 | 1,559 | 0.2540 | 13 | yes |
| brotli | 7 | 0.151 | 1,555 | 0.2533 | 15 | yes |
| brotli | 8 | 0.145 | 1,555 | 0.2533 | 10 | yes |
| brotli | 9 | 0.171 | 1,557 | 0.2537 | 16 | yes |
| brotli | 10 | 2.977 | 1,431 | 0.2331 | 5 | yes |
| brotli | 11 | 7.209 | 1,398 | 0.2278 | 5 | yes |
| zstd | 1 | 0.028 | 1,906 | 0.3105 | 23 | yes |
| zstd | 2 | 0.032 | 1,941 | 0.3162 | 22 | yes |
| zstd | 3 | 0.035 | 1,853 | 0.3019 | 17 | yes |
| zstd | 4 | 0.048 | 1,752 | 0.2854 | 21 | yes |
| zstd | 5 | 0.056 | 1,743 | 0.2840 | 15 | yes |
| zstd | 6 | 0.062 | 1,730 | 0.2819 | 16 | yes |
| zstd | 7 | 0.067 | 1,729 | 0.2817 | 6 | yes |
| zstd | 8 | 0.067 | 1,729 | 0.2817 | 25 | no |
| zstd | 9 | 0.114 | 1,728 | 0.2815 | 25 | no |
| zstd | 10 | 0.101 | 1,728 | 0.2815 | 9 | yes |
| zstd | 11 | 0.267 | 1,722 | 0.2805 | 7 | yes |
| zstd | 12 | 0.394 | 1,718 | 0.2799 | 5 | yes |
| zstd | 13 | 0.622 | 1,703 | 0.2775 | 5 | yes |
| zstd | 14 | 0.640 | 1,700 | 0.2770 | 5 | yes |
| zstd | 15 | 0.832 | 1,700 | 0.2770 | 5 | yes |
| zstd | 16 | 1.227 | 1,696 | 0.2763 | 5 | yes |
| zstd | 17 | 1.494 | 1,697 | 0.2765 | 5 | yes |
| zstd | 18 | 1.605 | 1,697 | 0.2765 | 5 | yes |
| zstd | 19 | 1.628 | 1,697 | 0.2765 | 5 | yes |
| zstd | 20 | 1.616 | 1,697 | 0.2765 | 5 | yes |
| zstd | 21 | 1.634 | 1,697 | 0.2765 | 5 | yes |
| zstd | 22 | 1.642 | 1,697 | 0.2765 | 5 | yes |

## bootstrap/dist/css/bootstrap.min.css

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 1.060 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.120 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.301 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.741 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.145 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.890 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.558 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.701 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.786 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.440 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.604 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.176 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.379 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.992 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.959 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.252 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.621 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.192 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.064 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 97.434 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 301.807 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.495 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.542 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.596 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.720 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 2.441 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.097 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.528 | 29,710 | 0.1280 | 6 | yes |
| zstd | 8 | 2.945 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.564 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.451 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.029 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 9.977 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.105 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.115 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.051 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 56.560 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 63.986 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 85.012 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 96.866 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 101.166 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 101.113 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 101.514 | 26,014 | 0.1121 | 5 | yes |

## cities.json/cities.json

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 90.679 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 91.151 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 109.113 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 145.461 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 171.262 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 216.109 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 322.236 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 905.105 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1205.029 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 45.174 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 60.932 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 112.229 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 131.164 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 168.627 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 287.662 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 341.484 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 470.484 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 603.957 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 843.850 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 12791.007 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37446.261 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.201 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 55.782 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 68.428 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 70.278 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 143.918 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 197.404 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 222.562 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 285.669 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 293.442 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 401.863 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 573.127 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 621.068 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 768.339 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 992.846 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1252.228 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3188.391 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3549.405 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5116.928 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9304.702 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9538.859 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9512.247 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9982.792 | 2,378,818 | 0.1084 | 5 | yes |

## tailwindcss/theme.css

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.099 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.120 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.152 | 5,356 | 0.2749 | 19 | yes |
| gzip | 4 | 0.206 | 5,145 | 0.2641 | 8 | yes |
| gzip | 5 | 0.277 | 4,896 | 0.2513 | 6 | yes |
| gzip | 6 | 0.359 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.488 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.643 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.632 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.058 | 6,028 | 0.3094 | 13 | yes |
| brotli | 1 | 0.070 | 5,737 | 0.2945 | 13 | yes |
| brotli | 2 | 0.134 | 4,944 | 0.2538 | 9 | yes |
| brotli | 3 | 0.180 | 4,930 | 0.2531 | 5 | yes |
| brotli | 4 | 0.282 | 4,898 | 0.2514 | 7 | yes |
| brotli | 5 | 0.455 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.490 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.565 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.613 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.727 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.268 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 21.911 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.059 | 5,379 | 0.2761 | 15 | yes |
| zstd | 2 | 0.066 | 5,176 | 0.2657 | 25 | no |
| zstd | 3 | 0.097 | 5,169 | 0.2653 | 6 | yes |
| zstd | 4 | 0.101 | 5,154 | 0.2646 | 8 | yes |
| zstd | 5 | 0.199 | 5,074 | 0.2605 | 22 | yes |
| zstd | 6 | 0.262 | 4,797 | 0.2463 | 9 | yes |
| zstd | 7 | 0.314 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.340 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.430 | 4,690 | 0.2408 | 9 | yes |
| zstd | 10 | 0.532 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.604 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.661 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.021 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.814 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.915 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.903 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.876 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.878 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.650 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.674 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.683 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.679 | 4,348 | 0.2232 | 5 | yes |
