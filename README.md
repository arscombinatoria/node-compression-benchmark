# Node Compression Benchmark

Last updated: 2026-04-12T02:08:19.329Z

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
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.911 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.984 | 30,134 | 0.3827 | 5 | yes |
| gzip | 3 | 1.059 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.174 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.525 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.765 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 1.904 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.137 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.132 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.323 | 33,111 | 0.4205 | 17 | yes |
| brotli | 1 | 0.592 | 31,803 | 0.4039 | 5 | yes |
| brotli | 2 | 0.733 | 29,394 | 0.3733 | 8 | yes |
| brotli | 3 | 0.899 | 29,072 | 0.3692 | 5 | yes |
| brotli | 4 | 1.377 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.010 | 27,013 | 0.3430 | 5 | yes |
| brotli | 6 | 2.203 | 26,844 | 0.3409 | 5 | yes |
| brotli | 7 | 2.428 | 26,773 | 0.3400 | 5 | yes |
| brotli | 8 | 2.528 | 26,725 | 0.3394 | 5 | yes |
| brotli | 9 | 4.713 | 26,711 | 0.3392 | 8 | yes |
| brotli | 10 | 33.123 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 103.578 | 24,992 | 0.3174 | 5 | yes |
| zstd | 1 | 0.291 | 31,062 | 0.3944 | 7 | yes |
| zstd | 2 | 0.348 | 30,069 | 0.3818 | 6 | yes |
| zstd | 3 | 0.444 | 29,214 | 0.3710 | 5 | yes |
| zstd | 4 | 0.972 | 29,108 | 0.3696 | 16 | yes |
| zstd | 5 | 1.362 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.226 | 27,592 | 0.3504 | 5 | yes |
| zstd | 7 | 1.457 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.614 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 1.806 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.045 | 27,062 | 0.3437 | 5 | yes |
| zstd | 11 | 3.988 | 26,969 | 0.3425 | 5 | yes |
| zstd | 12 | 4.369 | 26,970 | 0.3425 | 5 | yes |
| zstd | 13 | 6.100 | 26,867 | 0.3412 | 6 | yes |
| zstd | 14 | 8.084 | 26,432 | 0.3357 | 8 | yes |
| zstd | 15 | 8.556 | 26,420 | 0.3355 | 5 | yes |
| zstd | 16 | 10.798 | 26,336 | 0.3344 | 5 | yes |
| zstd | 17 | 10.863 | 26,336 | 0.3344 | 6 | yes |
| zstd | 18 | 10.959 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 20.343 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 19.541 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 20.254 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 20.276 | 26,282 | 0.3337 | 5 | yes |

<h2 id="expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf">@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf</h2>

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 85.154 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 88.374 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 93.363 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 102.458 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 117.857 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 131.684 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 140.027 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 156.222 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 169.070 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 17.964 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 23.549 | 3,325,102 | 0.6076 | 5 | yes |
| brotli | 2 | 44.628 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 57.151 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 87.533 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 127.285 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 147.228 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 471.453 | 2,841,359 | 0.5192 | 5 | yes |
| brotli | 8 | 570.488 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 747.800 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 5997.888 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12461.792 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.381 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 22.067 | 3,233,695 | 0.5909 | 5 | yes |
| zstd | 3 | 34.325 | 3,139,155 | 0.5736 | 5 | yes |
| zstd | 4 | 44.229 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 64.105 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 76.506 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 83.060 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 97.140 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 94.945 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 116.193 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 158.193 | 2,868,731 | 0.5242 | 5 | yes |
| zstd | 12 | 199.337 | 2,866,083 | 0.5237 | 5 | yes |
| zstd | 13 | 400.272 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 478.523 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 539.421 | 2,844,247 | 0.5197 | 5 | yes |
| zstd | 16 | 711.046 | 2,803,911 | 0.5123 | 6 | yes |
| zstd | 17 | 847.147 | 2,756,112 | 0.5036 | 5 | yes |
| zstd | 18 | 1116.955 | 2,713,297 | 0.4958 | 5 | yes |
| zstd | 19 | 1214.769 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1210.412 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1226.467 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1211.074 | 2,710,761 | 0.4953 | 5 | yes |

<h2 id="react-cjs-react-production-js">react/cjs/react.production.js</h2>

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.116 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.144 | 4,874 | 0.2831 | 5 | yes |
| gzip | 3 | 0.155 | 4,806 | 0.2791 | 5 | yes |
| gzip | 4 | 0.169 | 4,530 | 0.2631 | 13 | yes |
| gzip | 5 | 0.240 | 4,441 | 0.2579 | 5 | yes |
| gzip | 6 | 0.283 | 4,425 | 0.2570 | 5 | yes |
| gzip | 7 | 0.318 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.448 | 4,419 | 0.2567 | 5 | yes |
| gzip | 9 | 0.454 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.050 | 5,235 | 0.3041 | 25 | no |
| brotli | 1 | 0.060 | 5,134 | 0.2982 | 21 | yes |
| brotli | 2 | 0.114 | 4,741 | 0.2754 | 19 | yes |
| brotli | 3 | 0.162 | 4,650 | 0.2701 | 5 | yes |
| brotli | 4 | 0.253 | 4,555 | 0.2646 | 9 | yes |
| brotli | 5 | 0.363 | 4,276 | 0.2484 | 7 | yes |
| brotli | 6 | 0.393 | 4,275 | 0.2483 | 5 | yes |
| brotli | 7 | 0.434 | 4,264 | 0.2477 | 5 | yes |
| brotli | 8 | 0.478 | 4,257 | 0.2473 | 5 | yes |
| brotli | 9 | 0.547 | 4,244 | 0.2465 | 5 | yes |
| brotli | 10 | 6.922 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.286 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.053 | 4,923 | 0.2859 | 18 | yes |
| zstd | 2 | 0.068 | 4,868 | 0.2827 | 6 | yes |
| zstd | 3 | 0.096 | 4,717 | 0.2740 | 16 | yes |
| zstd | 4 | 0.097 | 4,679 | 0.2718 | 21 | yes |
| zstd | 5 | 0.189 | 4,519 | 0.2625 | 6 | yes |
| zstd | 6 | 0.230 | 4,437 | 0.2577 | 5 | yes |
| zstd | 7 | 0.271 | 4,437 | 0.2577 | 7 | yes |
| zstd | 8 | 0.303 | 4,426 | 0.2571 | 5 | yes |
| zstd | 9 | 0.336 | 4,420 | 0.2567 | 5 | yes |
| zstd | 10 | 0.366 | 4,410 | 0.2561 | 5 | yes |
| zstd | 11 | 0.676 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.759 | 4,391 | 0.2550 | 5 | yes |
| zstd | 13 | 0.980 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.443 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.521 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.258 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.324 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.334 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.513 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.487 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.509 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.503 | 4,264 | 0.2477 | 5 | yes |

<h2 id="moment-min-moment-min-js">moment/min/moment.min.js</h2>

- Original size: 58,890 bytes
- Chart: ![Compression ratio chart for moment/min/moment.min.js](charts/moment-min-moment-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.591 | 21,216 | 0.3603 | 5 | yes |
| gzip | 2 | 0.621 | 20,666 | 0.3509 | 5 | yes |
| gzip | 3 | 0.679 | 20,354 | 0.3456 | 5 | yes |
| gzip | 4 | 0.755 | 19,475 | 0.3307 | 5 | yes |
| gzip | 5 | 0.975 | 18,991 | 0.3225 | 5 | yes |
| gzip | 6 | 1.146 | 18,892 | 0.3208 | 5 | yes |
| gzip | 7 | 1.260 | 18,860 | 0.3203 | 5 | yes |
| gzip | 8 | 1.452 | 18,845 | 0.3200 | 5 | yes |
| gzip | 9 | 1.451 | 18,845 | 0.3200 | 5 | yes |
| brotli | 0 | 0.182 | 22,733 | 0.3860 | 25 | no |
| brotli | 1 | 0.251 | 22,170 | 0.3765 | 5 | yes |
| brotli | 2 | 0.498 | 20,291 | 0.3446 | 5 | yes |
| brotli | 3 | 0.600 | 20,119 | 0.3416 | 5 | yes |
| brotli | 4 | 0.934 | 19,713 | 0.3347 | 5 | yes |
| brotli | 5 | 1.380 | 18,447 | 0.3132 | 5 | yes |
| brotli | 6 | 1.513 | 18,343 | 0.3115 | 5 | yes |
| brotli | 7 | 1.708 | 18,239 | 0.3097 | 5 | yes |
| brotli | 8 | 1.899 | 18,216 | 0.3093 | 5 | yes |
| brotli | 9 | 2.169 | 18,172 | 0.3086 | 5 | yes |
| brotli | 10 | 25.208 | 17,405 | 0.2956 | 5 | yes |
| brotli | 11 | 70.642 | 17,004 | 0.2887 | 5 | yes |
| zstd | 1 | 0.174 | 21,483 | 0.3648 | 10 | yes |
| zstd | 2 | 0.211 | 20,806 | 0.3533 | 10 | yes |
| zstd | 3 | 0.304 | 20,298 | 0.3447 | 6 | yes |
| zstd | 4 | 0.363 | 19,924 | 0.3383 | 5 | yes |
| zstd | 5 | 0.645 | 19,309 | 0.3279 | 5 | yes |
| zstd | 6 | 0.829 | 18,919 | 0.3213 | 5 | yes |
| zstd | 7 | 1.011 | 18,815 | 0.3195 | 5 | yes |
| zstd | 8 | 1.099 | 18,708 | 0.3177 | 5 | yes |
| zstd | 9 | 1.211 | 18,638 | 0.3165 | 5 | yes |
| zstd | 10 | 1.361 | 18,583 | 0.3156 | 5 | yes |
| zstd | 11 | 2.489 | 18,520 | 0.3145 | 5 | yes |
| zstd | 12 | 2.566 | 18,517 | 0.3144 | 5 | yes |
| zstd | 13 | 3.674 | 18,417 | 0.3127 | 5 | yes |
| zstd | 14 | 5.121 | 17,955 | 0.3049 | 5 | yes |
| zstd | 15 | 5.411 | 17,942 | 0.3047 | 5 | yes |
| zstd | 16 | 7.437 | 17,892 | 0.3038 | 5 | yes |
| zstd | 17 | 7.655 | 17,892 | 0.3038 | 5 | yes |
| zstd | 18 | 7.606 | 17,892 | 0.3038 | 5 | yes |
| zstd | 19 | 15.017 | 17,845 | 0.3030 | 5 | yes |
| zstd | 20 | 14.918 | 17,845 | 0.3030 | 5 | yes |
| zstd | 21 | 14.922 | 17,845 | 0.3030 | 5 | yes |
| zstd | 22 | 14.810 | 17,845 | 0.3030 | 5 | yes |

<h2 id="vue-dist-vue-global-prod-js">vue/dist/vue.global.prod.js</h2>

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.885 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 2.056 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.268 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.535 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.370 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.132 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 4.478 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 4.790 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 4.807 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.604 | 70,918 | 0.4333 | 5 | yes |
| brotli | 1 | 0.779 | 68,052 | 0.4158 | 5 | yes |
| brotli | 2 | 1.584 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 1.843 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 2.800 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.363 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 4.803 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 5.598 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 6.035 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 7.083 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 93.647 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 246.764 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.592 | 65,987 | 0.4032 | 5 | yes |
| zstd | 2 | 0.809 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 0.993 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.691 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.138 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.664 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 3.134 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 3.883 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.338 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 5.217 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 9.053 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 9.568 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 15.715 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 17.668 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 17.851 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 23.280 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 22.945 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 38.671 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 38.846 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 38.955 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 38.293 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 38.614 | 55,612 | 0.3398 | 5 | yes |

<h2 id="lodash-lodash-min-js">lodash/lodash.min.js</h2>

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.788 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.857 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.945 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.074 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.346 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.696 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.941 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.580 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.580 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.252 | 30,978 | 0.4230 | 10 | yes |
| brotli | 1 | 0.316 | 29,754 | 0.4063 | 6 | yes |
| brotli | 2 | 0.656 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.788 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.250 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.893 | 25,217 | 0.3443 | 5 | yes |
| brotli | 6 | 2.053 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.414 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.574 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.019 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 39.572 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 99.281 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.252 | 28,919 | 0.3949 | 7 | yes |
| zstd | 2 | 0.425 | 28,008 | 0.3824 | 5 | yes |
| zstd | 3 | 0.370 | 27,463 | 0.3750 | 6 | yes |
| zstd | 4 | 0.517 | 27,100 | 0.3700 | 12 | yes |
| zstd | 5 | 0.826 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.083 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.290 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.450 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.637 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.878 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.334 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.646 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.436 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.608 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.751 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.001 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 9.992 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 9.960 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 18.628 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 18.782 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 19.479 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 19.486 | 24,463 | 0.3340 | 5 | yes |

<h2 id="normalize-css-normalize-css">normalize.css/normalize.css</h2>

- Original size: 6,138 bytes
- Chart: ![Compression ratio chart for normalize.css/normalize.css](charts/normalize-css-normalize-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.034 | 1,915 | 0.3120 | 25 | no |
| gzip | 2 | 0.033 | 1,866 | 0.3040 | 25 | no |
| gzip | 3 | 0.034 | 1,845 | 0.3006 | 25 | no |
| gzip | 4 | 0.042 | 1,758 | 0.2864 | 13 | yes |
| gzip | 5 | 0.050 | 1,722 | 0.2805 | 22 | yes |
| gzip | 6 | 0.051 | 1,722 | 0.2805 | 17 | yes |
| gzip | 7 | 0.050 | 1,722 | 0.2805 | 22 | yes |
| gzip | 8 | 0.053 | 1,720 | 0.2802 | 25 | no |
| gzip | 9 | 0.048 | 1,720 | 0.2802 | 22 | yes |
| brotli | 0 | 0.022 | 2,089 | 0.3403 | 20 | yes |
| brotli | 1 | 0.027 | 2,056 | 0.3350 | 17 | yes |
| brotli | 2 | 0.039 | 1,909 | 0.3110 | 25 | no |
| brotli | 3 | 0.049 | 1,834 | 0.2988 | 25 | no |
| brotli | 4 | 0.096 | 1,694 | 0.2760 | 25 | no |
| brotli | 5 | 0.125 | 1,557 | 0.2537 | 8 | yes |
| brotli | 6 | 0.125 | 1,559 | 0.2540 | 15 | yes |
| brotli | 7 | 0.132 | 1,555 | 0.2533 | 16 | yes |
| brotli | 8 | 0.141 | 1,555 | 0.2533 | 8 | yes |
| brotli | 9 | 0.155 | 1,557 | 0.2537 | 13 | yes |
| brotli | 10 | 2.943 | 1,431 | 0.2331 | 5 | yes |
| brotli | 11 | 7.484 | 1,398 | 0.2278 | 5 | yes |
| zstd | 1 | 0.030 | 1,906 | 0.3105 | 25 | yes |
| zstd | 2 | 0.030 | 1,941 | 0.3162 | 19 | yes |
| zstd | 3 | 0.036 | 1,853 | 0.3019 | 16 | yes |
| zstd | 4 | 0.048 | 1,752 | 0.2854 | 15 | yes |
| zstd | 5 | 0.062 | 1,743 | 0.2840 | 11 | yes |
| zstd | 6 | 0.062 | 1,730 | 0.2819 | 25 | no |
| zstd | 7 | 0.067 | 1,729 | 0.2817 | 8 | yes |
| zstd | 8 | 0.060 | 1,729 | 0.2817 | 14 | yes |
| zstd | 9 | 0.147 | 1,728 | 0.2815 | 11 | yes |
| zstd | 10 | 0.142 | 1,728 | 0.2815 | 11 | yes |
| zstd | 11 | 0.284 | 1,722 | 0.2805 | 5 | yes |
| zstd | 12 | 0.375 | 1,718 | 0.2799 | 5 | yes |
| zstd | 13 | 0.544 | 1,703 | 0.2775 | 5 | yes |
| zstd | 14 | 0.577 | 1,700 | 0.2770 | 5 | yes |
| zstd | 15 | 0.703 | 1,700 | 0.2770 | 5 | yes |
| zstd | 16 | 1.093 | 1,696 | 0.2763 | 5 | yes |
| zstd | 17 | 1.281 | 1,697 | 0.2765 | 5 | yes |
| zstd | 18 | 1.340 | 1,697 | 0.2765 | 5 | yes |
| zstd | 19 | 1.346 | 1,697 | 0.2765 | 5 | yes |
| zstd | 20 | 1.348 | 1,697 | 0.2765 | 5 | yes |
| zstd | 21 | 1.389 | 1,697 | 0.2765 | 5 | yes |
| zstd | 22 | 1.371 | 1,697 | 0.2765 | 5 | yes |

<h2 id="bootstrap-dist-css-bootstrap-min-css">bootstrap/dist/css/bootstrap.min.css</h2>

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 1.116 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.144 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.301 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.588 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.013 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.692 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.264 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.341 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.388 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.406 | 43,268 | 0.1864 | 5 | yes |
| brotli | 1 | 0.561 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.138 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.352 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.975 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.952 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.241 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.642 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.083 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 4.912 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 97.459 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 301.630 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.469 | 35,549 | 0.1532 | 5 | yes |
| zstd | 2 | 0.532 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.581 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.378 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.696 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.092 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.340 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.849 | 28,645 | 0.1234 | 5 | yes |
| zstd | 9 | 3.281 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.110 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 8.869 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 11.026 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 19.051 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 22.888 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 28.552 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.289 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 53.043 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 72.124 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 79.727 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 82.666 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.299 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 82.887 | 26,014 | 0.1121 | 5 | yes |

<h2 id="cities-json-cities-json">cities.json/cities.json</h2>

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 94.638 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 93.989 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 109.859 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 130.199 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 154.908 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 197.118 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 301.932 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 1156.204 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1693.678 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 42.306 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 55.460 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 107.699 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 125.048 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 172.936 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 295.471 | 2,774,227 | 0.1264 | 5 | yes |
| brotli | 6 | 348.177 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 484.330 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 610.096 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 836.653 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 13173.316 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37246.295 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 43.649 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 52.622 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 68.594 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 75.301 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 132.442 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 190.114 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 217.761 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 277.927 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 284.603 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 365.971 | 2,753,222 | 0.1254 | 5 | yes |
| zstd | 11 | 525.260 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 557.239 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 845.001 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1076.159 | 2,654,484 | 0.1209 | 5 | yes |
| zstd | 15 | 1356.345 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3444.401 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 3858.007 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5149.501 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 8456.643 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9035.944 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 8723.147 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9216.735 | 2,378,818 | 0.1084 | 5 | yes |

<h2 id="tailwindcss-theme-css">tailwindcss/theme.css</h2>

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| gzip | 1 | 0.117 | 5,506 | 0.2826 | 17 | yes |
| gzip | 2 | 0.159 | 5,424 | 0.2784 | 6 | yes |
| gzip | 3 | 0.170 | 5,356 | 0.2749 | 5 | yes |
| gzip | 4 | 0.193 | 5,145 | 0.2641 | 6 | yes |
| gzip | 5 | 0.265 | 4,896 | 0.2513 | 6 | yes |
| gzip | 6 | 0.357 | 4,884 | 0.2507 | 5 | yes |
| gzip | 7 | 0.458 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.611 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.603 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.052 | 6,028 | 0.3094 | 12 | yes |
| brotli | 1 | 0.069 | 5,737 | 0.2945 | 17 | yes |
| brotli | 2 | 0.147 | 4,944 | 0.2538 | 5 | yes |
| brotli | 3 | 0.187 | 4,930 | 0.2531 | 5 | yes |
| brotli | 4 | 0.267 | 4,898 | 0.2514 | 9 | yes |
| brotli | 5 | 0.432 | 4,581 | 0.2352 | 5 | yes |
| brotli | 6 | 0.473 | 4,570 | 0.2346 | 5 | yes |
| brotli | 7 | 0.552 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.590 | 4,561 | 0.2341 | 5 | yes |
| brotli | 9 | 0.707 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.314 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.725 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.056 | 5,379 | 0.2761 | 20 | yes |
| zstd | 2 | 0.069 | 5,176 | 0.2657 | 11 | yes |
| zstd | 3 | 0.101 | 5,169 | 0.2653 | 9 | yes |
| zstd | 4 | 0.102 | 5,154 | 0.2646 | 9 | yes |
| zstd | 5 | 0.192 | 5,074 | 0.2605 | 5 | yes |
| zstd | 6 | 0.237 | 4,797 | 0.2463 | 8 | yes |
| zstd | 7 | 0.290 | 4,702 | 0.2414 | 5 | yes |
| zstd | 8 | 0.336 | 4,696 | 0.2411 | 5 | yes |
| zstd | 9 | 0.395 | 4,690 | 0.2408 | 5 | yes |
| zstd | 10 | 0.469 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.658 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.727 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.043 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.763 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.881 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.615 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.605 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.610 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.049 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.089 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.099 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.104 | 4,348 | 0.2232 | 5 | yes |
