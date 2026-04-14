# Node Compression Benchmark

Last updated: 2026-04-14T12:54:40.863Z

This benchmark measures compression time, output size, and compression ratios for several popular npm packages across all gzip, Brotli, and Zstandard compression levels.

## Table of Contents

- [jquery/dist/jquery.min.js](#jquery-dist-jquery-min-js)
- [@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](#expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf)
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
| gzip | 1 | 0.791 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.839 | 30,134 | 0.3827 | 10 | yes |
| gzip | 3 | 0.913 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.052 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.812 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.122 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.341 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.694 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.700 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.408 | 33,111 | 0.4205 | 6 | yes |
| brotli | 1 | 0.856 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.998 | 29,394 | 0.3733 | 6 | yes |
| brotli | 3 | 1.074 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.368 | 28,392 | 0.3605 | 25 | no |
| brotli | 5 | 2.414 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 1.846 | 26,844 | 0.3409 | 17 | yes |
| brotli | 7 | 2.039 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.138 | 26,725 | 0.3394 | 9 | yes |
| brotli | 9 | 3.835 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 28.277 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 80.092 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.268 | 31,062 | 0.3944 | 5 | yes |
| zstd | 2 | 0.275 | 30,069 | 0.3818 | 25 | no |
| zstd | 3 | 0.311 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.929 | 29,108 | 0.3696 | 19 | yes |
| zstd | 5 | 1.109 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.304 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.513 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.625 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.765 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 1.991 | 27,062 | 0.3437 | 8 | yes |
| zstd | 11 | 3.283 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 3.610 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 5.055 | 26,867 | 0.3412 | 7 | yes |
| zstd | 14 | 6.906 | 26,432 | 0.3357 | 5 | yes |
| zstd | 15 | 7.162 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 8.686 | 26,336 | 0.3344 | 7 | yes |
| zstd | 17 | 8.890 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 8.749 | 26,336 | 0.3344 | 6 | yes |
| zstd | 19 | 16.363 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 16.501 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 16.637 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 16.455 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 72.879 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 75.397 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 80.021 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 90.278 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 104.470 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 118.177 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 126.778 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 142.489 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 153.006 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 16.661 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 23.022 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 40.363 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 50.331 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 72.903 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 98.767 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 113.425 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 372.626 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 497.372 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 690.388 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5485.979 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 11024.884 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 15.433 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 18.750 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 30.659 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 36.473 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 54.127 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 63.371 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 71.860 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 81.751 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 86.994 | 2,901,056 | 0.5301 | 6 | yes |
| zstd | 10 | 109.188 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 157.747 | 2,868,731 | 0.5242 | 11 | yes |
| zstd | 12 | 176.692 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 432.599 | 2,864,062 | 0.5233 | 25 | no |
| zstd | 14 | 502.489 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 678.970 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 861.504 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 1035.114 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1072.604 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1156.153 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1101.943 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1117.746 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1152.392 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.057 | 4,987 | 0.2897 | 15 | yes |
| gzip | 2 | 0.058 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.069 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.086 | 4,530 | 0.2631 | 19 | yes |
| gzip | 5 | 0.108 | 4,441 | 0.2579 | 18 | yes |
| gzip | 6 | 0.138 | 4,425 | 0.2570 | 18 | yes |
| gzip | 7 | 0.166 | 4,418 | 0.2566 | 24 | yes |
| gzip | 8 | 0.301 | 4,419 | 0.2567 | 16 | yes |
| gzip | 9 | 0.382 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.042 | 5,235 | 0.3041 | 8 | yes |
| brotli | 1 | 0.053 | 5,134 | 0.2982 | 9 | yes |
| brotli | 2 | 0.076 | 4,741 | 0.2754 | 18 | yes |
| brotli | 3 | 0.089 | 4,650 | 0.2701 | 22 | yes |
| brotli | 4 | 0.148 | 4,555 | 0.2646 | 20 | yes |
| brotli | 5 | 0.217 | 4,276 | 0.2484 | 25 | no |
| brotli | 6 | 0.306 | 4,275 | 0.2483 | 6 | yes |
| brotli | 7 | 0.325 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.343 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.417 | 4,244 | 0.2465 | 7 | yes |
| brotli | 10 | 5.647 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 15.180 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.043 | 4,923 | 0.2859 | 8 | yes |
| zstd | 2 | 0.062 | 4,868 | 0.2827 | 25 | no |
| zstd | 3 | 0.061 | 4,717 | 0.2740 | 13 | yes |
| zstd | 4 | 0.064 | 4,679 | 0.2718 | 12 | yes |
| zstd | 5 | 0.124 | 4,519 | 0.2625 | 5 | yes |
| zstd | 6 | 0.144 | 4,437 | 0.2577 | 15 | yes |
| zstd | 7 | 0.161 | 4,437 | 0.2577 | 9 | yes |
| zstd | 8 | 0.180 | 4,426 | 0.2571 | 7 | yes |
| zstd | 9 | 0.193 | 4,420 | 0.2567 | 18 | yes |
| zstd | 10 | 0.252 | 4,410 | 0.2561 | 10 | yes |
| zstd | 11 | 0.499 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.504 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.726 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.135 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.189 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 1.731 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 1.803 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 1.844 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 3.544 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 3.515 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 3.526 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 3.524 | 4,264 | 0.2477 | 5 | yes |

<h2 id="moment-min-moment-min-js">moment/min/moment.min.js</h2>

- Original size: 58,890 bytes
- Chart: ![Compression ratio chart for moment/min/moment.min.js](charts/moment-min-moment-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.459 | 21,216 | 0.3603 | 5 | yes |
| gzip | 2 | 0.510 | 20,666 | 0.3509 | 5 | yes |
| gzip | 3 | 0.574 | 20,354 | 0.3456 | 5 | yes |
| gzip | 4 | 0.664 | 19,475 | 0.3307 | 5 | yes |
| gzip | 5 | 0.858 | 18,991 | 0.3225 | 5 | yes |
| gzip | 6 | 1.054 | 18,892 | 0.3208 | 5 | yes |
| gzip | 7 | 1.196 | 18,860 | 0.3203 | 5 | yes |
| gzip | 8 | 1.430 | 18,845 | 0.3200 | 5 | yes |
| gzip | 9 | 1.428 | 18,845 | 0.3200 | 5 | yes |
| brotli | 0 | 0.123 | 22,733 | 0.3860 | 9 | yes |
| brotli | 1 | 0.179 | 22,170 | 0.3765 | 24 | yes |
| brotli | 2 | 0.425 | 20,291 | 0.3446 | 5 | yes |
| brotli | 3 | 0.523 | 20,119 | 0.3416 | 5 | yes |
| brotli | 4 | 0.790 | 19,713 | 0.3347 | 5 | yes |
| brotli | 5 | 1.101 | 18,447 | 0.3132 | 5 | yes |
| brotli | 6 | 1.181 | 18,343 | 0.3115 | 5 | yes |
| brotli | 7 | 1.412 | 18,239 | 0.3097 | 5 | yes |
| brotli | 8 | 1.571 | 18,216 | 0.3093 | 5 | yes |
| brotli | 9 | 1.816 | 18,172 | 0.3086 | 5 | yes |
| brotli | 10 | 20.997 | 17,405 | 0.2956 | 5 | yes |
| brotli | 11 | 54.755 | 17,004 | 0.2887 | 5 | yes |
| zstd | 1 | 0.127 | 21,483 | 0.3648 | 11 | yes |
| zstd | 2 | 0.147 | 20,806 | 0.3533 | 8 | yes |
| zstd | 3 | 0.183 | 20,298 | 0.3447 | 21 | yes |
| zstd | 4 | 0.238 | 19,924 | 0.3383 | 25 | no |
| zstd | 5 | 0.505 | 19,309 | 0.3279 | 5 | yes |
| zstd | 6 | 0.667 | 18,919 | 0.3213 | 5 | yes |
| zstd | 7 | 0.794 | 18,815 | 0.3195 | 5 | yes |
| zstd | 8 | 0.869 | 18,708 | 0.3177 | 5 | yes |
| zstd | 9 | 0.968 | 18,638 | 0.3165 | 5 | yes |
| zstd | 10 | 1.105 | 18,583 | 0.3156 | 5 | yes |
| zstd | 11 | 1.900 | 18,520 | 0.3145 | 5 | yes |
| zstd | 12 | 1.942 | 18,517 | 0.3144 | 5 | yes |
| zstd | 13 | 2.889 | 18,417 | 0.3127 | 5 | yes |
| zstd | 14 | 3.981 | 17,955 | 0.3049 | 5 | yes |
| zstd | 15 | 4.264 | 17,942 | 0.3047 | 5 | yes |
| zstd | 16 | 5.970 | 17,892 | 0.3038 | 20 | yes |
| zstd | 17 | 6.050 | 17,892 | 0.3038 | 5 | yes |
| zstd | 18 | 6.038 | 17,892 | 0.3038 | 5 | yes |
| zstd | 19 | 11.781 | 17,845 | 0.3030 | 5 | yes |
| zstd | 20 | 11.800 | 17,845 | 0.3030 | 5 | yes |
| zstd | 21 | 11.781 | 17,845 | 0.3030 | 5 | yes |
| zstd | 22 | 11.812 | 17,845 | 0.3030 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.587 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 1.732 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 1.979 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.200 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.023 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 3.794 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 4.134 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 4.468 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 4.492 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.424 | 70,918 | 0.4333 | 17 | yes |
| brotli | 1 | 0.717 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.326 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 1.605 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 2.360 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 3.464 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 3.808 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 4.711 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 5.100 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 6.088 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 80.910 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 204.895 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.496 | 65,987 | 0.4032 | 5 | yes |
| zstd | 2 | 0.644 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 0.800 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.445 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 1.637 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 1.993 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 2.369 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 2.929 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 3.320 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 4.022 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 6.750 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 6.804 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 11.532 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 13.858 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 14.566 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 18.514 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 18.654 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 31.233 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 30.584 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 31.216 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 31.329 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 31.309 | 55,612 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.674 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.713 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.831 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 0.923 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.221 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.584 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.893 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.589 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.590 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.157 | 30,978 | 0.4230 | 18 | yes |
| brotli | 1 | 0.250 | 29,754 | 0.4063 | 14 | yes |
| brotli | 2 | 0.555 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.662 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.032 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.501 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 1.631 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 1.981 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.279 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 2.681 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 34.702 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 79.159 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.158 | 28,919 | 0.3949 | 9 | yes |
| zstd | 2 | 0.238 | 28,008 | 0.3824 | 25 | no |
| zstd | 3 | 0.226 | 27,463 | 0.3750 | 10 | yes |
| zstd | 4 | 0.296 | 27,100 | 0.3700 | 13 | yes |
| zstd | 5 | 0.654 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 0.881 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.049 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.149 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.285 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.530 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 2.582 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 2.696 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 4.164 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 5.901 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 5.984 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 7.750 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 7.736 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 7.769 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 14.622 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 14.668 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 14.481 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 14.571 | 24,463 | 0.3340 | 5 | yes |

<h2 id="fortawesome-fontawesome-free-css-all-min-css">@fortawesome/fontawesome-free/css/all.min.css</h2>

- Original size: 75,736 bytes
- Chart: ![Compression ratio chart for @fortawesome/fontawesome-free/css/all.min.css](charts/fortawesome-fontawesome-free-css-all-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.641 | 23,605 | 0.3117 | 5 | yes |
| gzip | 2 | 0.727 | 23,403 | 0.3090 | 5 | yes |
| gzip | 3 | 0.857 | 23,219 | 0.3066 | 5 | yes |
| gzip | 4 | 1.019 | 21,952 | 0.2898 | 5 | yes |
| gzip | 5 | 1.384 | 21,126 | 0.2789 | 5 | yes |
| gzip | 6 | 1.998 | 20,973 | 0.2769 | 5 | yes |
| gzip | 7 | 2.604 | 20,888 | 0.2758 | 5 | yes |
| gzip | 8 | 6.770 | 20,678 | 0.2730 | 5 | yes |
| gzip | 9 | 6.901 | 20,676 | 0.2730 | 5 | yes |
| brotli | 0 | 0.141 | 25,901 | 0.3420 | 25 | no |
| brotli | 1 | 0.243 | 23,906 | 0.3156 | 15 | yes |
| brotli | 2 | 0.524 | 21,594 | 0.2851 | 5 | yes |
| brotli | 3 | 0.626 | 21,570 | 0.2848 | 5 | yes |
| brotli | 4 | 0.914 | 21,297 | 0.2812 | 5 | yes |
| brotli | 5 | 1.353 | 20,309 | 0.2682 | 5 | yes |
| brotli | 6 | 1.548 | 20,220 | 0.2670 | 5 | yes |
| brotli | 7 | 1.868 | 20,137 | 0.2659 | 5 | yes |
| brotli | 8 | 2.142 | 20,088 | 0.2652 | 5 | yes |
| brotli | 9 | 2.822 | 20,013 | 0.2642 | 5 | yes |
| brotli | 10 | 24.488 | 17,574 | 0.2320 | 5 | yes |
| brotli | 11 | 70.324 | 17,022 | 0.2248 | 5 | yes |
| zstd | 1 | 0.161 | 22,639 | 0.2989 | 13 | yes |
| zstd | 2 | 0.184 | 22,433 | 0.2962 | 23 | yes |
| zstd | 3 | 0.216 | 22,208 | 0.2932 | 17 | yes |
| zstd | 4 | 0.275 | 22,181 | 0.2929 | 15 | yes |
| zstd | 5 | 0.585 | 21,579 | 0.2849 | 5 | yes |
| zstd | 6 | 0.812 | 20,795 | 0.2746 | 5 | yes |
| zstd | 7 | 0.987 | 20,334 | 0.2685 | 5 | yes |
| zstd | 8 | 1.154 | 20,295 | 0.2680 | 5 | yes |
| zstd | 9 | 1.404 | 20,230 | 0.2671 | 5 | yes |
| zstd | 10 | 1.867 | 20,178 | 0.2664 | 5 | yes |
| zstd | 11 | 2.639 | 20,032 | 0.2645 | 5 | yes |
| zstd | 12 | 3.468 | 20,012 | 0.2642 | 5 | yes |
| zstd | 13 | 3.862 | 19,719 | 0.2604 | 5 | yes |
| zstd | 14 | 5.544 | 18,964 | 0.2504 | 5 | yes |
| zstd | 15 | 6.439 | 18,878 | 0.2493 | 5 | yes |
| zstd | 16 | 8.463 | 18,772 | 0.2479 | 5 | yes |
| zstd | 17 | 11.093 | 18,740 | 0.2474 | 5 | yes |
| zstd | 18 | 18.188 | 18,740 | 0.2474 | 5 | yes |
| zstd | 19 | 15.748 | 18,755 | 0.2476 | 5 | yes |
| zstd | 20 | 18.693 | 18,717 | 0.2471 | 5 | yes |
| zstd | 21 | 30.266 | 18,701 | 0.2469 | 5 | yes |
| zstd | 22 | 35.874 | 18,702 | 0.2469 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.919 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 0.976 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.142 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.368 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 1.771 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.481 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.062 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.162 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.214 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.255 | 43,268 | 0.1864 | 17 | yes |
| brotli | 1 | 0.525 | 39,941 | 0.1721 | 7 | yes |
| brotli | 2 | 0.967 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.127 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.680 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.451 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 2.731 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.077 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 3.417 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 4.089 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 81.907 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 238.496 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.323 | 35,549 | 0.1532 | 22 | yes |
| zstd | 2 | 0.405 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.421 | 34,393 | 0.1482 | 9 | yes |
| zstd | 4 | 1.153 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.373 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 1.593 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 1.799 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.202 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 2.541 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 3.179 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 6.458 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 7.880 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 14.535 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 17.772 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 22.415 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 37.694 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 42.363 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 57.874 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 64.530 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 65.671 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 65.747 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 65.252 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 77.393 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 77.826 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 94.677 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 110.502 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 136.183 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 179.084 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 279.985 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 812.078 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1089.363 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 35.386 | 4,059,162 | 0.1849 | 10 | yes |
| brotli | 1 | 51.605 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 96.920 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 112.048 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 160.857 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 250.344 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 297.055 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 425.523 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 556.752 | 2,687,842 | 0.1224 | 6 | yes |
| brotli | 9 | 788.369 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 11873.564 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 30408.598 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 35.866 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 43.085 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 53.158 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 58.002 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 116.563 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 163.585 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 186.752 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 240.617 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 259.730 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 351.849 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 501.417 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 534.842 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 790.220 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 944.481 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1264.407 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 2909.411 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3188.835 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 4341.929 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 7318.803 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 7595.935 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 7804.464 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 8562.887 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.058 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.063 | 5,424 | 0.2784 | 20 | yes |
| gzip | 3 | 0.076 | 5,356 | 0.2749 | 25 | no |
| gzip | 4 | 0.094 | 5,145 | 0.2641 | 21 | yes |
| gzip | 5 | 0.119 | 4,896 | 0.2513 | 25 | no |
| gzip | 6 | 0.174 | 4,884 | 0.2507 | 25 | no |
| gzip | 7 | 0.379 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.548 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.529 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.043 | 6,028 | 0.3094 | 9 | yes |
| brotli | 1 | 0.058 | 5,737 | 0.2945 | 9 | yes |
| brotli | 2 | 0.080 | 4,944 | 0.2538 | 16 | yes |
| brotli | 3 | 0.098 | 4,930 | 0.2531 | 17 | yes |
| brotli | 4 | 0.164 | 4,898 | 0.2514 | 25 | yes |
| brotli | 5 | 0.340 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.400 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.446 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.481 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.599 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 5.935 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 17.499 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.045 | 5,379 | 0.2761 | 16 | yes |
| zstd | 2 | 0.050 | 5,176 | 0.2657 | 7 | yes |
| zstd | 3 | 0.066 | 5,169 | 0.2653 | 8 | yes |
| zstd | 4 | 0.067 | 5,154 | 0.2646 | 13 | yes |
| zstd | 5 | 0.118 | 5,074 | 0.2605 | 8 | yes |
| zstd | 6 | 0.154 | 4,797 | 0.2463 | 17 | yes |
| zstd | 7 | 0.185 | 4,702 | 0.2414 | 13 | yes |
| zstd | 8 | 0.204 | 4,696 | 0.2411 | 9 | yes |
| zstd | 9 | 0.297 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.363 | 4,691 | 0.2408 | 6 | yes |
| zstd | 11 | 0.475 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.505 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.772 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.338 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.438 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 1.993 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 1.994 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 1.984 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 3.861 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 3.910 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 3.890 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 3.977 | 4,348 | 0.2232 | 5 | yes |
