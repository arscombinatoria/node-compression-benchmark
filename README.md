# Node Compression Benchmark

Last updated: 2026-04-12T01:22:28.935Z

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

<h2 id="jquery-dist-jquery-min-js">jquery/dist/jquery.min.js</h2>

- Original size: 78,748 bytes
- Chart: ![Compression ratio chart for jquery/dist/jquery.min.js](charts/jquery-dist-jquery-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 1.382 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 1.059 | 30,134 | 0.3827 | 7 | yes |
| gzip | 3 | 1.197 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.348 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.770 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 2.133 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 2.348 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.750 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.741 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.397 | 33,111 | 0.4205 | 25 | no |
| brotli | 1 | 1.077 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 1.230 | 29,394 | 0.3733 | 7 | yes |
| brotli | 3 | 1.424 | 29,072 | 0.3692 | 6 | yes |
| brotli | 4 | 2.219 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 3.105 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 3.278 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 3.826 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 4.071 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 6.504 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 36.300 | 25,340 | 0.3218 | 10 | yes |
| brotli | 11 | 101.576 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.295 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.268 | 30,069 | 0.3818 | 17 | yes |
| zstd | 3 | 0.676 | 29,214 | 0.3710 | 25 | no |
| zstd | 4 | 1.172 | 29,108 | 0.3696 | 6 | yes |
| zstd | 5 | 1.378 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.724 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.971 | 27,383 | 0.3477 | 25 | no |
| zstd | 8 | 2.119 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.227 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.490 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 4.167 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.591 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.588 | 26,867 | 0.3412 | 8 | yes |
| zstd | 14 | 8.774 | 26,432 | 0.3357 | 15 | yes |
| zstd | 15 | 8.952 | 26,420 | 0.3355 | 6 | yes |
| zstd | 16 | 11.251 | 26,336 | 0.3344 | 9 | yes |
| zstd | 17 | 11.282 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 11.322 | 26,336 | 0.3344 | 6 | yes |
| zstd | 19 | 20.868 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.700 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 19.743 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 19.794 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 94.154 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 96.818 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 103.466 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 115.517 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 134.710 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 152.481 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 162.705 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 183.304 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 196.318 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 21.534 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 29.702 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 50.584 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 63.889 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 91.259 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 125.770 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 144.117 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 428.455 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 545.441 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 728.223 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6509.739 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 13680.725 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 19.826 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 23.671 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 36.575 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 45.431 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 68.119 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 81.190 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 88.053 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 103.168 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 106.425 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 128.086 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 162.068 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 198.223 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 385.575 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 474.733 | 2,852,038 | 0.5211 | 7 | yes |
| zstd | 15 | 591.817 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 700.926 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 869.493 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1157.578 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1256.991 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1274.023 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1324.085 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1304.668 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.079 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.077 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.082 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.112 | 4,530 | 0.2631 | 18 | yes |
| gzip | 5 | 0.146 | 4,441 | 0.2579 | 21 | yes |
| gzip | 6 | 0.265 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.210 | 4,418 | 0.2566 | 25 | no |
| gzip | 8 | 0.473 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.420 | 4,419 | 0.2567 | 10 | yes |
| brotli | 0 | 0.053 | 5,235 | 0.3041 | 9 | yes |
| brotli | 1 | 0.069 | 5,134 | 0.2982 | 23 | yes |
| brotli | 2 | 0.098 | 4,741 | 0.2754 | 17 | yes |
| brotli | 3 | 0.114 | 4,650 | 0.2701 | 17 | yes |
| brotli | 4 | 0.184 | 4,555 | 0.2646 | 17 | yes |
| brotli | 5 | 0.373 | 4,276 | 0.2484 | 5 | yes |
| brotli | 6 | 0.378 | 4,275 | 0.2483 | 8 | yes |
| brotli | 7 | 0.424 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.395 | 4,257 | 0.2473 | 11 | yes |
| brotli | 9 | 0.518 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 7.306 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.423 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.054 | 4,923 | 0.2859 | 13 | yes |
| zstd | 2 | 0.062 | 4,868 | 0.2827 | 13 | yes |
| zstd | 3 | 0.074 | 4,717 | 0.2740 | 25 | no |
| zstd | 4 | 0.078 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.145 | 4,519 | 0.2625 | 9 | yes |
| zstd | 6 | 0.183 | 4,437 | 0.2577 | 23 | yes |
| zstd | 7 | 0.205 | 4,437 | 0.2577 | 9 | yes |
| zstd | 8 | 0.227 | 4,426 | 0.2571 | 9 | yes |
| zstd | 9 | 0.263 | 4,420 | 0.2567 | 20 | yes |
| zstd | 10 | 0.323 | 4,410 | 0.2561 | 9 | yes |
| zstd | 11 | 0.629 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.665 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.938 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.427 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.510 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.209 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.318 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.308 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.558 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.555 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.519 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.500 | 4,264 | 0.2477 | 5 | yes |

<h2 id="moment-min-moment-min-js">moment/min/moment.min.js</h2>

- Original size: 58,890 bytes
- Chart: ![Compression ratio chart for moment/min/moment.min.js](charts/moment-min-moment-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.587 | 21,216 | 0.3603 | 5 | yes |
| gzip | 2 | 0.655 | 20,666 | 0.3509 | 5 | yes |
| gzip | 3 | 0.743 | 20,354 | 0.3456 | 5 | yes |
| gzip | 4 | 0.873 | 19,475 | 0.3307 | 5 | yes |
| gzip | 5 | 1.132 | 18,991 | 0.3225 | 5 | yes |
| gzip | 6 | 1.355 | 18,892 | 0.3208 | 5 | yes |
| gzip | 7 | 1.537 | 18,860 | 0.3203 | 5 | yes |
| gzip | 8 | 1.835 | 18,845 | 0.3200 | 5 | yes |
| gzip | 9 | 1.838 | 18,845 | 0.3200 | 5 | yes |
| brotli | 0 | 0.155 | 22,733 | 0.3860 | 14 | yes |
| brotli | 1 | 0.282 | 22,170 | 0.3765 | 5 | yes |
| brotli | 2 | 0.540 | 20,291 | 0.3446 | 5 | yes |
| brotli | 3 | 0.659 | 20,119 | 0.3416 | 5 | yes |
| brotli | 4 | 1.004 | 19,713 | 0.3347 | 5 | yes |
| brotli | 5 | 1.449 | 18,447 | 0.3132 | 5 | yes |
| brotli | 6 | 1.610 | 18,343 | 0.3115 | 5 | yes |
| brotli | 7 | 1.834 | 18,239 | 0.3097 | 5 | yes |
| brotli | 8 | 1.896 | 18,216 | 0.3093 | 5 | yes |
| brotli | 9 | 2.249 | 18,172 | 0.3086 | 5 | yes |
| brotli | 10 | 27.021 | 17,405 | 0.2956 | 5 | yes |
| brotli | 11 | 70.838 | 17,004 | 0.2887 | 5 | yes |
| zstd | 1 | 0.160 | 21,483 | 0.3648 | 12 | yes |
| zstd | 2 | 0.180 | 20,806 | 0.3533 | 12 | yes |
| zstd | 3 | 0.214 | 20,298 | 0.3447 | 15 | yes |
| zstd | 4 | 0.261 | 19,924 | 0.3383 | 16 | yes |
| zstd | 5 | 0.630 | 19,309 | 0.3279 | 5 | yes |
| zstd | 6 | 0.842 | 18,919 | 0.3213 | 5 | yes |
| zstd | 7 | 1.008 | 18,815 | 0.3195 | 5 | yes |
| zstd | 8 | 1.102 | 18,708 | 0.3177 | 5 | yes |
| zstd | 9 | 1.241 | 18,638 | 0.3165 | 5 | yes |
| zstd | 10 | 1.420 | 18,583 | 0.3156 | 5 | yes |
| zstd | 11 | 2.459 | 18,520 | 0.3145 | 5 | yes |
| zstd | 12 | 2.515 | 18,517 | 0.3144 | 5 | yes |
| zstd | 13 | 3.675 | 18,417 | 0.3127 | 5 | yes |
| zstd | 14 | 5.113 | 17,955 | 0.3049 | 5 | yes |
| zstd | 15 | 5.419 | 17,942 | 0.3047 | 5 | yes |
| zstd | 16 | 7.532 | 17,892 | 0.3038 | 5 | yes |
| zstd | 17 | 7.712 | 17,892 | 0.3038 | 5 | yes |
| zstd | 18 | 7.735 | 17,892 | 0.3038 | 5 | yes |
| zstd | 19 | 15.169 | 17,845 | 0.3030 | 5 | yes |
| zstd | 20 | 15.181 | 17,845 | 0.3030 | 5 | yes |
| zstd | 21 | 15.192 | 17,845 | 0.3030 | 5 | yes |
| zstd | 22 | 15.169 | 17,845 | 0.3030 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 2.067 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 2.244 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.555 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.852 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.913 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.888 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 5.324 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 5.799 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 5.766 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.557 | 70,918 | 0.4333 | 17 | yes |
| brotli | 1 | 0.935 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.743 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 2.033 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 2.984 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.441 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 4.913 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 6.026 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 6.433 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 7.576 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 103.176 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 262.459 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.629 | 65,987 | 0.4032 | 5 | yes |
| zstd | 2 | 0.819 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 1.027 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.893 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.114 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.680 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 3.070 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 3.737 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.233 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 5.129 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 8.516 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 9.017 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 15.161 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 17.805 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 18.078 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 23.202 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 22.732 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 39.496 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 39.694 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 39.864 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 39.765 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 39.719 | 55,612 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.866 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.924 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 1.075 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.192 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.569 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 2.042 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 2.439 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 3.345 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 3.341 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.204 | 30,978 | 0.4230 | 9 | yes |
| brotli | 1 | 0.366 | 29,754 | 0.4063 | 5 | yes |
| brotli | 2 | 0.723 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.875 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.348 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.904 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.121 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.557 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.760 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.323 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 42.245 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 101.480 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.207 | 28,919 | 0.3949 | 14 | yes |
| zstd | 2 | 0.230 | 28,008 | 0.3824 | 13 | yes |
| zstd | 3 | 0.280 | 27,463 | 0.3750 | 20 | yes |
| zstd | 4 | 0.461 | 27,100 | 0.3700 | 11 | yes |
| zstd | 5 | 0.827 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.128 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.342 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.493 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.656 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.946 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.311 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.469 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.439 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.491 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.664 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 9.846 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.796 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.881 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.762 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.775 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 18.696 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 18.661 | 24,463 | 0.3340 | 5 | yes |

<h2 id="normalize-css-normalize-css">normalize.css/normalize.css</h2>

- Original size: 6,138 bytes
- Chart: ![Compression ratio chart for normalize.css/normalize.css](charts/normalize-css-normalize-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.034 | 1,915 | 0.3120 | 17 | yes |
| gzip | 2 | 0.035 | 1,866 | 0.3040 | 17 | yes |
| gzip | 3 | 0.036 | 1,845 | 0.3006 | 13 | yes |
| gzip | 4 | 0.046 | 1,758 | 0.2864 | 9 | yes |
| gzip | 5 | 0.052 | 1,722 | 0.2805 | 25 | no |
| gzip | 6 | 0.049 | 1,722 | 0.2805 | 11 | yes |
| gzip | 7 | 0.053 | 1,722 | 0.2805 | 9 | yes |
| gzip | 8 | 0.051 | 1,720 | 0.2802 | 18 | yes |
| gzip | 9 | 0.051 | 1,720 | 0.2802 | 9 | yes |
| brotli | 0 | 0.023 | 2,089 | 0.3403 | 17 | yes |
| brotli | 1 | 0.030 | 2,056 | 0.3350 | 16 | yes |
| brotli | 2 | 0.041 | 1,909 | 0.3110 | 15 | yes |
| brotli | 3 | 0.053 | 1,834 | 0.2988 | 14 | yes |
| brotli | 4 | 0.082 | 1,694 | 0.2760 | 13 | yes |
| brotli | 5 | 0.097 | 1,557 | 0.2537 | 24 | yes |
| brotli | 6 | 0.102 | 1,559 | 0.2540 | 8 | yes |
| brotli | 7 | 0.102 | 1,555 | 0.2533 | 12 | yes |
| brotli | 8 | 0.103 | 1,555 | 0.2533 | 13 | yes |
| brotli | 9 | 0.118 | 1,557 | 0.2537 | 14 | yes |
| brotli | 10 | 3.076 | 1,431 | 0.2331 | 5 | yes |
| brotli | 11 | 7.490 | 1,398 | 0.2278 | 5 | yes |
| zstd | 1 | 0.029 | 1,906 | 0.3105 | 20 | yes |
| zstd | 2 | 0.030 | 1,941 | 0.3162 | 20 | yes |
| zstd | 3 | 0.034 | 1,853 | 0.3019 | 17 | yes |
| zstd | 4 | 0.049 | 1,752 | 0.2854 | 14 | yes |
| zstd | 5 | 0.056 | 1,743 | 0.2840 | 8 | yes |
| zstd | 6 | 0.064 | 1,730 | 0.2819 | 25 | no |
| zstd | 7 | 0.068 | 1,729 | 0.2817 | 5 | yes |
| zstd | 8 | 0.067 | 1,729 | 0.2817 | 15 | yes |
| zstd | 9 | 0.098 | 1,728 | 0.2815 | 24 | yes |
| zstd | 10 | 0.098 | 1,728 | 0.2815 | 5 | yes |
| zstd | 11 | 0.178 | 1,722 | 0.2805 | 13 | yes |
| zstd | 12 | 0.341 | 1,718 | 0.2799 | 5 | yes |
| zstd | 13 | 0.529 | 1,703 | 0.2775 | 5 | yes |
| zstd | 14 | 0.544 | 1,700 | 0.2770 | 20 | yes |
| zstd | 15 | 0.691 | 1,700 | 0.2770 | 5 | yes |
| zstd | 16 | 1.026 | 1,696 | 0.2763 | 6 | yes |
| zstd | 17 | 1.230 | 1,697 | 0.2765 | 5 | yes |
| zstd | 18 | 1.309 | 1,697 | 0.2765 | 5 | yes |
| zstd | 19 | 1.305 | 1,697 | 0.2765 | 5 | yes |
| zstd | 20 | 1.310 | 1,697 | 0.2765 | 5 | yes |
| zstd | 21 | 1.317 | 1,697 | 0.2765 | 5 | yes |
| zstd | 22 | 1.313 | 1,697 | 0.2765 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 1.200 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.266 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.475 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.766 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.314 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 3.187 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.947 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 5.359 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 5.470 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.319 | 43,268 | 0.1864 | 18 | yes |
| brotli | 1 | 0.649 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.234 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.456 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 2.172 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 3.043 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.377 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.814 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.286 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.166 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 102.550 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 305.176 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.403 | 35,549 | 0.1532 | 19 | yes |
| zstd | 2 | 0.532 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.611 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.468 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.768 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.125 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.349 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.786 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.287 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.073 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.150 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 10.118 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 18.710 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.407 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.046 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.782 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.545 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 72.919 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 80.621 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 83.604 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.730 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 83.864 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 99.279 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 99.806 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 121.767 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 142.000 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 175.300 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 231.815 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 361.948 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 1041.761 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1393.579 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 44.137 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 64.944 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 115.104 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 136.001 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 181.925 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 306.474 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 351.683 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 512.056 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 665.756 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 909.479 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 14111.050 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 38704.171 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 45.747 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 55.036 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 68.596 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 73.672 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 148.825 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 207.468 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 236.044 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 300.042 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 313.575 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 412.300 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 568.927 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 608.687 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 867.250 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1103.424 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1417.524 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3518.208 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 4004.439 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5334.980 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 8847.731 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9382.179 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9307.550 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9721.058 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.078 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.085 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.101 | 5,356 | 0.2749 | 25 | no |
| gzip | 4 | 0.130 | 5,145 | 0.2641 | 23 | yes |
| gzip | 5 | 0.153 | 4,896 | 0.2513 | 21 | yes |
| gzip | 6 | 0.339 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.508 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.712 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.688 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.056 | 6,028 | 0.3094 | 9 | yes |
| brotli | 1 | 0.074 | 5,737 | 0.2945 | 12 | yes |
| brotli | 2 | 0.110 | 4,944 | 0.2538 | 10 | yes |
| brotli | 3 | 0.130 | 4,930 | 0.2531 | 25 | no |
| brotli | 4 | 0.203 | 4,898 | 0.2514 | 21 | yes |
| brotli | 5 | 0.398 | 4,581 | 0.2352 | 9 | yes |
| brotli | 6 | 0.462 | 4,570 | 0.2346 | 7 | yes |
| brotli | 7 | 0.568 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.608 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.733 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.617 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.454 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.057 | 5,379 | 0.2761 | 16 | yes |
| zstd | 2 | 0.062 | 5,176 | 0.2657 | 13 | yes |
| zstd | 3 | 0.080 | 5,169 | 0.2653 | 9 | yes |
| zstd | 4 | 0.083 | 5,154 | 0.2646 | 8 | yes |
| zstd | 5 | 0.149 | 5,074 | 0.2605 | 25 | yes |
| zstd | 6 | 0.194 | 4,797 | 0.2463 | 11 | yes |
| zstd | 7 | 0.231 | 4,702 | 0.2414 | 16 | yes |
| zstd | 8 | 0.261 | 4,696 | 0.2411 | 9 | yes |
| zstd | 9 | 0.344 | 4,690 | 0.2408 | 10 | yes |
| zstd | 10 | 0.462 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.604 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.642 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 0.975 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.726 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.823 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.551 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.550 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.577 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 4.961 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.034 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.018 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.097 | 4,348 | 0.2232 | 5 | yes |
