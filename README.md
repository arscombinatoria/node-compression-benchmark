# Node Compression Benchmark

Last updated: 2026-04-11T13:17:32.337Z

This benchmark measures compression time, output size, and compression ratios for several popular npm packages across all gzip, Brotli, and Zstandard compression levels.

## Table of Contents

- [jquery/dist/jquery.min.js](#jquery)
- [@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](#noto-sans-jp)
- [react/cjs/react.production.js](#react)
- [moment/min/moment.min.js](#moment)
- [vue/dist/vue.global.prod.js](#vue)
- [lodash/lodash.min.js](#lodash)
- [normalize.css/normalize.css](#normalize-css)
- [bootstrap/dist/css/bootstrap.min.css](#bootstrap)
- [cities.json/cities.json](#cities-json)
- [tailwindcss/theme.css](#tailwind-config)

Benchmark settings:

- Warmup runs per level: 1
- Minimum samples per level: 5
- Maximum samples per level: 25
- Target relative half-width (95% CI): 0.0500

<a id="jquery"></a>

## jquery/dist/jquery.min.js

- Original size: 78,748 bytes
- Chart: ![Compression ratio chart for jquery/dist/jquery.min.js](charts/jquery-dist-jquery-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 1.017 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.056 | 30,134 | 0.3827 | 9 | yes |
| gzip | 3 | 1.173 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.338 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.742 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.109 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.333 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.732 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.735 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.292 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 0.800 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.846 | 29,394 | 0.3733 | 16 | yes |
| brotli | 3 | 0.959 | 29,072 | 0.3692 | 13 | yes |
| brotli | 4 | 1.431 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.063 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.282 | 26,844 | 0.3409 | 12 | yes |
| brotli | 7 | 4.134 | 26,773 | 0.3400 | 6 | yes |
| brotli | 8 | 2.757 | 26,725 | 0.3394 | 25 | no |
| brotli | 9 | 4.764 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 36.332 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 101.524 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.254 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.309 | 30,069 | 0.3818 | 25 | no |
| zstd | 3 | 0.630 | 29,214 | 0.3710 | 25 | no |
| zstd | 4 | 1.172 | 29,108 | 0.3696 | 5 | yes |
| zstd | 5 | 1.366 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.702 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.942 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 2.092 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.260 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.490 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.177 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.655 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.626 | 26,867 | 0.3412 | 5 | yes |
| zstd | 14 | 9.125 | 26,432 | 0.3357 | 9 | yes |
| zstd | 15 | 9.280 | 26,420 | 0.3355 | 10 | yes |
| zstd | 16 | 11.743 | 26,336 | 0.3344 | 9 | yes |
| zstd | 17 | 11.547 | 26,336 | 0.3344 | 6 | yes |
| zstd | 18 | 11.619 | 26,336 | 0.3344 | 7 | yes |
| zstd | 19 | 21.089 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 21.259 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 21.379 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 21.265 | 26,282 | 0.3337 | 5 | yes |

<a id="noto-sans-jp"></a>

## @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 94.097 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 97.248 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 103.817 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 116.011 | 3,213,095 | 0.5871 | 7 | yes |
| gzip | 5 | 136.820 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 153.859 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 163.279 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 183.115 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 196.810 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.724 | 3,488,111 | 0.6374 | 8 | yes |
| brotli | 1 | 29.902 | 3,325,102 | 0.6076 | 6 | yes |
| brotli | 2 | 50.782 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 66.867 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 95.141 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 129.230 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 155.042 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 453.683 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 648.017 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 801.771 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 7067.962 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 14035.528 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.931 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.258 | 3,233,695 | 0.5909 | 8 | yes |
| zstd | 3 | 38.436 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 46.184 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 68.099 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 80.989 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 90.156 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 106.821 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 110.587 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 143.239 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 205.546 | 2,868,731 | 0.5242 | 13 | yes |
| zstd | 12 | 234.654 | 2,866,083 | 0.5237 | 12 | yes |
| zstd | 13 | 580.433 | 2,864,062 | 0.5233 | 14 | yes |
| zstd | 14 | 614.702 | 2,852,038 | 0.5211 | 9 | yes |
| zstd | 15 | 690.424 | 2,844,247 | 0.5197 | 9 | yes |
| zstd | 16 | 860.259 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 1010.386 | 2,756,112 | 0.5036 | 11 | yes |
| zstd | 18 | 1311.841 | 2,713,297 | 0.4958 | 7 | yes |
| zstd | 19 | 1469.620 | 2,710,797 | 0.4953 | 7 | yes |
| zstd | 20 | 1369.445 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1406.347 | 2,710,761 | 0.4953 | 6 | yes |
| zstd | 22 | 1494.151 | 2,710,761 | 0.4953 | 5 | yes |

<a id="react"></a>

## react/cjs/react.production.js

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.071 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.074 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.083 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.110 | 4,530 | 0.2631 | 25 | no |
| gzip | 5 | 0.141 | 4,441 | 0.2579 | 25 | no |
| gzip | 6 | 0.173 | 4,425 | 0.2570 | 25 | no |
| gzip | 7 | 0.212 | 4,418 | 0.2566 | 25 | no |
| gzip | 8 | 0.371 | 4,419 | 0.2567 | 25 | no |
| gzip | 9 | 0.416 | 4,419 | 0.2567 | 8 | yes |
| brotli | 0 | 0.054 | 5,235 | 0.3041 | 25 | no |
| brotli | 1 | 0.068 | 5,134 | 0.2982 | 25 | no |
| brotli | 2 | 0.096 | 4,741 | 0.2754 | 25 | no |
| brotli | 3 | 0.115 | 4,650 | 0.2701 | 25 | no |
| brotli | 4 | 0.187 | 4,555 | 0.2646 | 25 | no |
| brotli | 5 | 0.322 | 4,276 | 0.2484 | 25 | yes |
| brotli | 6 | 0.369 | 4,275 | 0.2483 | 17 | yes |
| brotli | 7 | 0.387 | 4,264 | 0.2477 | 25 | no |
| brotli | 8 | 0.416 | 4,257 | 0.2473 | 7 | yes |
| brotli | 9 | 0.519 | 4,244 | 0.2465 | 9 | yes |
| brotli | 10 | 7.292 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.613 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.056 | 4,923 | 0.2859 | 25 | no |
| zstd | 2 | 0.062 | 4,868 | 0.2827 | 25 | no |
| zstd | 3 | 0.078 | 4,717 | 0.2740 | 25 | no |
| zstd | 4 | 0.081 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.146 | 4,519 | 0.2625 | 25 | no |
| zstd | 6 | 0.174 | 4,437 | 0.2577 | 18 | yes |
| zstd | 7 | 0.202 | 4,437 | 0.2577 | 21 | yes |
| zstd | 8 | 0.213 | 4,426 | 0.2571 | 17 | yes |
| zstd | 9 | 0.242 | 4,420 | 0.2567 | 25 | no |
| zstd | 10 | 0.299 | 4,410 | 0.2561 | 21 | yes |
| zstd | 11 | 0.631 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.646 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.953 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.458 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.524 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.228 | 4,282 | 0.2487 | 10 | yes |
| zstd | 17 | 2.322 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.324 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.520 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.557 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.535 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.509 | 4,264 | 0.2477 | 5 | yes |

<a id="moment"></a>

## moment/min/moment.min.js

- Original size: 58,890 bytes
- Chart: ![Compression ratio chart for moment/min/moment.min.js](charts/moment-min-moment-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.609 | 21,216 | 0.3603 | 5 | yes |
| gzip | 2 | 0.641 | 20,666 | 0.3509 | 5 | yes |
| gzip | 3 | 0.734 | 20,354 | 0.3456 | 5 | yes |
| gzip | 4 | 0.848 | 19,475 | 0.3307 | 5 | yes |
| gzip | 5 | 1.119 | 18,991 | 0.3225 | 5 | yes |
| gzip | 6 | 1.367 | 18,892 | 0.3208 | 5 | yes |
| gzip | 7 | 1.551 | 18,860 | 0.3203 | 5 | yes |
| gzip | 8 | 1.840 | 18,845 | 0.3200 | 5 | yes |
| gzip | 9 | 1.838 | 18,845 | 0.3200 | 5 | yes |
| brotli | 0 | 0.153 | 22,733 | 0.3860 | 25 | no |
| brotli | 1 | 0.230 | 22,170 | 0.3765 | 21 | yes |
| brotli | 2 | 0.553 | 20,291 | 0.3446 | 5 | yes |
| brotli | 3 | 0.663 | 20,119 | 0.3416 | 5 | yes |
| brotli | 4 | 1.011 | 19,713 | 0.3347 | 16 | yes |
| brotli | 5 | 1.488 | 18,447 | 0.3132 | 11 | yes |
| brotli | 6 | 1.564 | 18,343 | 0.3115 | 22 | yes |
| brotli | 7 | 1.831 | 18,239 | 0.3097 | 5 | yes |
| brotli | 8 | 1.964 | 18,216 | 0.3093 | 5 | yes |
| brotli | 9 | 2.305 | 18,172 | 0.3086 | 5 | yes |
| brotli | 10 | 27.468 | 17,405 | 0.2956 | 5 | yes |
| brotli | 11 | 71.214 | 17,004 | 0.2887 | 5 | yes |
| zstd | 1 | 0.159 | 21,483 | 0.3648 | 25 | no |
| zstd | 2 | 0.179 | 20,806 | 0.3533 | 25 | no |
| zstd | 3 | 0.215 | 20,298 | 0.3447 | 22 | yes |
| zstd | 4 | 0.261 | 19,924 | 0.3383 | 21 | yes |
| zstd | 5 | 0.618 | 19,309 | 0.3279 | 7 | yes |
| zstd | 6 | 0.838 | 18,919 | 0.3213 | 5 | yes |
| zstd | 7 | 1.027 | 18,815 | 0.3195 | 5 | yes |
| zstd | 8 | 1.107 | 18,708 | 0.3177 | 5 | yes |
| zstd | 9 | 1.232 | 18,638 | 0.3165 | 5 | yes |
| zstd | 10 | 1.395 | 18,583 | 0.3156 | 5 | yes |
| zstd | 11 | 2.452 | 18,520 | 0.3145 | 5 | yes |
| zstd | 12 | 2.494 | 18,517 | 0.3144 | 5 | yes |
| zstd | 13 | 3.874 | 18,417 | 0.3127 | 5 | yes |
| zstd | 14 | 5.219 | 17,955 | 0.3049 | 5 | yes |
| zstd | 15 | 5.469 | 17,942 | 0.3047 | 5 | yes |
| zstd | 16 | 7.532 | 17,892 | 0.3038 | 5 | yes |
| zstd | 17 | 7.705 | 17,892 | 0.3038 | 5 | yes |
| zstd | 18 | 7.720 | 17,892 | 0.3038 | 5 | yes |
| zstd | 19 | 15.203 | 17,845 | 0.3030 | 5 | yes |
| zstd | 20 | 15.289 | 17,845 | 0.3030 | 5 | yes |
| zstd | 21 | 15.215 | 17,845 | 0.3030 | 5 | yes |
| zstd | 22 | 15.226 | 17,845 | 0.3030 | 5 | yes |

<a id="vue"></a>

## vue/dist/vue.global.prod.js

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 2.071 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 2.226 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.546 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.821 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.898 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.880 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 5.326 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 5.754 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 5.807 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.557 | 70,918 | 0.4333 | 17 | yes |
| brotli | 1 | 0.938 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.707 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 2.023 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 2.977 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.458 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 4.895 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 6.120 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 6.593 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 8.016 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 106.765 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 263.798 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.599 | 65,987 | 0.4032 | 10 | yes |
| zstd | 2 | 0.800 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 1.042 | 62,505 | 0.3819 | 7 | yes |
| zstd | 4 | 1.848 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.062 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.516 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 3.017 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 3.732 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.220 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 5.103 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 8.639 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 9.132 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 15.702 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 18.222 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 18.336 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 23.559 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 23.476 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 40.223 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 40.075 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 40.664 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 40.498 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 41.033 | 55,612 | 0.3398 | 5 | yes |

<a id="lodash"></a>

## lodash/lodash.min.js

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.904 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.979 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.121 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.241 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.638 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.083 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.481 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.396 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.380 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.200 | 30,978 | 0.4230 | 25 | yes |
| brotli | 1 | 0.387 | 29,754 | 0.4063 | 8 | yes |
| brotli | 2 | 0.715 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.869 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.367 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.946 | 25,217 | 0.3443 | 9 | yes |
| brotli | 6 | 2.129 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.537 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.790 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.309 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 43.653 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 101.585 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.271 | 28,919 | 0.3949 | 25 | no |
| zstd | 2 | 0.228 | 28,008 | 0.3824 | 24 | yes |
| zstd | 3 | 0.288 | 27,463 | 0.3750 | 19 | yes |
| zstd | 4 | 0.350 | 27,100 | 0.3700 | 25 | no |
| zstd | 5 | 0.834 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.121 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.335 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.476 | 25,557 | 0.3490 | 6 | yes |
| zstd | 9 | 1.649 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.962 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.209 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.431 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.378 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.610 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.665 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.932 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.907 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.856 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.673 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.677 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.685 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.531 | 24,463 | 0.3340 | 5 | yes |

<a id="normalize-css"></a>

## normalize.css/normalize.css

- Original size: 6,138 bytes
- Chart: ![Compression ratio chart for normalize.css/normalize.css](charts/normalize-css-normalize-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.034 | 1,915 | 0.3120 | 25 | no |
| gzip | 2 | 0.034 | 1,866 | 0.3040 | 25 | no |
| gzip | 3 | 0.034 | 1,845 | 0.3006 | 25 | no |
| gzip | 4 | 0.045 | 1,758 | 0.2864 | 25 | no |
| gzip | 5 | 0.049 | 1,722 | 0.2805 | 25 | no |
| gzip | 6 | 0.049 | 1,722 | 0.2805 | 25 | no |
| gzip | 7 | 0.049 | 1,722 | 0.2805 | 25 | no |
| gzip | 8 | 0.050 | 1,720 | 0.2802 | 25 | no |
| gzip | 9 | 0.049 | 1,720 | 0.2802 | 25 | no |
| brotli | 0 | 0.023 | 2,089 | 0.3403 | 25 | no |
| brotli | 1 | 0.030 | 2,056 | 0.3350 | 25 | no |
| brotli | 2 | 0.041 | 1,909 | 0.3110 | 25 | no |
| brotli | 3 | 0.052 | 1,834 | 0.2988 | 25 | no |
| brotli | 4 | 0.083 | 1,694 | 0.2760 | 25 | no |
| brotli | 5 | 0.096 | 1,557 | 0.2537 | 25 | no |
| brotli | 6 | 0.103 | 1,559 | 0.2540 | 22 | yes |
| brotli | 7 | 0.101 | 1,555 | 0.2533 | 25 | no |
| brotli | 8 | 0.103 | 1,555 | 0.2533 | 9 | yes |
| brotli | 9 | 0.115 | 1,557 | 0.2537 | 24 | yes |
| brotli | 10 | 3.113 | 1,431 | 0.2331 | 5 | yes |
| brotli | 11 | 7.526 | 1,398 | 0.2278 | 5 | yes |
| zstd | 1 | 0.028 | 1,906 | 0.3105 | 25 | no |
| zstd | 2 | 0.029 | 1,941 | 0.3162 | 25 | no |
| zstd | 3 | 0.032 | 1,853 | 0.3019 | 25 | no |
| zstd | 4 | 0.046 | 1,752 | 0.2854 | 25 | no |
| zstd | 5 | 0.053 | 1,743 | 0.2840 | 25 | no |
| zstd | 6 | 0.059 | 1,730 | 0.2819 | 25 | no |
| zstd | 7 | 0.062 | 1,729 | 0.2817 | 25 | no |
| zstd | 8 | 0.062 | 1,729 | 0.2817 | 25 | no |
| zstd | 9 | 0.092 | 1,728 | 0.2815 | 25 | no |
| zstd | 10 | 0.091 | 1,728 | 0.2815 | 18 | yes |
| zstd | 11 | 0.169 | 1,722 | 0.2805 | 25 | no |
| zstd | 12 | 0.231 | 1,718 | 0.2799 | 25 | no |
| zstd | 13 | 0.494 | 1,703 | 0.2775 | 9 | yes |
| zstd | 14 | 0.537 | 1,700 | 0.2770 | 5 | yes |
| zstd | 15 | 0.683 | 1,700 | 0.2770 | 6 | yes |
| zstd | 16 | 0.977 | 1,696 | 0.2763 | 5 | yes |
| zstd | 17 | 1.217 | 1,697 | 0.2765 | 5 | yes |
| zstd | 18 | 1.279 | 1,697 | 0.2765 | 5 | yes |
| zstd | 19 | 1.282 | 1,697 | 0.2765 | 5 | yes |
| zstd | 20 | 1.283 | 1,697 | 0.2765 | 5 | yes |
| zstd | 21 | 1.285 | 1,697 | 0.2765 | 5 | yes |
| zstd | 22 | 1.310 | 1,697 | 0.2765 | 5 | yes |

<a id="bootstrap"></a>

## bootstrap/dist/css/bootstrap.min.css

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 1.197 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.257 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.481 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.775 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.284 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.173 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.954 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.396 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.462 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.317 | 43,268 | 0.1864 | 25 | no |
| brotli | 1 | 0.630 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.208 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.453 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.147 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.053 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.389 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.822 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.347 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.254 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 104.223 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 307.036 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.392 | 35,549 | 0.1532 | 25 | no |
| zstd | 2 | 0.517 | 34,301 | 0.1478 | 10 | yes |
| zstd | 3 | 0.506 | 34,393 | 0.1482 | 20 | yes |
| zstd | 4 | 1.485 | 30,973 | 0.1334 | 25 | no |
| zstd | 5 | 1.797 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.026 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.241 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.791 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.276 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.093 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.342 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.238 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.887 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.483 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.382 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.982 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 54.513 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 73.677 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 82.061 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 85.991 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 84.535 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 84.240 | 26,014 | 0.1121 | 5 | yes |

<a id="cities-json"></a>

## cities.json/cities.json

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 106.141 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 105.700 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 126.035 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 142.108 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 173.313 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 230.388 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 361.851 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 1044.589 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1392.864 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 44.480 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 65.273 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 121.110 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 137.642 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 217.164 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 324.350 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 422.498 | 2,738,409 | 0.1247 | 7 | yes |
| brotli | 7 | 541.695 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 733.430 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 942.971 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 14432.270 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 38766.834 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.647 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 54.801 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 68.206 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 73.159 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 149.310 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 206.483 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 237.840 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 300.076 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 319.833 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 440.326 | 2,753,222 | 0.1254 | 6 | yes |
| zstd | 11 | 600.646 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 636.198 | 2,720,412 | 0.1239 | 7 | yes |
| zstd | 13 | 900.340 | 2,680,256 | 0.1221 | 9 | yes |
| zstd | 14 | 1252.443 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1579.206 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3721.763 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 4429.333 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5742.506 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9453.106 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9676.026 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9401.923 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9869.748 | 2,378,818 | 0.1084 | 5 | yes |

<a id="tailwind-config"></a>

## tailwindcss/theme.css

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.106 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.102 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.112 | 5,356 | 0.2749 | 25 | no |
| gzip | 4 | 0.144 | 5,145 | 0.2641 | 25 | no |
| gzip | 5 | 0.173 | 4,896 | 0.2513 | 25 | no |
| gzip | 6 | 0.248 | 4,884 | 0.2507 | 25 | no |
| gzip | 7 | 0.537 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.703 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.698 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.055 | 6,028 | 0.3094 | 25 | no |
| brotli | 1 | 0.074 | 5,737 | 0.2945 | 25 | no |
| brotli | 2 | 0.101 | 4,944 | 0.2538 | 25 | no |
| brotli | 3 | 0.129 | 4,930 | 0.2531 | 25 | no |
| brotli | 4 | 0.205 | 4,898 | 0.2514 | 25 | no |
| brotli | 5 | 0.366 | 4,581 | 0.2352 | 25 | no |
| brotli | 6 | 0.438 | 4,570 | 0.2346 | 17 | yes |
| brotli | 7 | 0.568 | 4,564 | 0.2343 | 9 | yes |
| brotli | 8 | 0.610 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.745 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.701 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.519 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.056 | 5,379 | 0.2761 | 25 | no |
| zstd | 2 | 0.062 | 5,176 | 0.2657 | 25 | no |
| zstd | 3 | 0.079 | 5,169 | 0.2653 | 25 | no |
| zstd | 4 | 0.082 | 5,154 | 0.2646 | 25 | no |
| zstd | 5 | 0.156 | 5,074 | 0.2605 | 14 | yes |
| zstd | 6 | 0.198 | 4,797 | 0.2463 | 25 | no |
| zstd | 7 | 0.227 | 4,702 | 0.2414 | 20 | yes |
| zstd | 8 | 0.253 | 4,696 | 0.2411 | 24 | yes |
| zstd | 9 | 0.338 | 4,690 | 0.2408 | 17 | yes |
| zstd | 10 | 0.481 | 4,691 | 0.2408 | 6 | yes |
| zstd | 11 | 0.583 | 4,689 | 0.2407 | 10 | yes |
| zstd | 12 | 0.636 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.996 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.738 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.815 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.539 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.550 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.562 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.969 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.012 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 4.985 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.030 | 4,348 | 0.2232 | 5 | yes |
