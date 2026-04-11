# Node Compression Benchmark

Last updated: 2026-04-10T12:39:27.281Z

This benchmark measures compression time, output size, and compression ratios for several popular npm packages across all gzip, Brotli, and Zstandard compression levels.

## Table of Contents

- [jquery/dist/jquery.min.js](#jquerydistjqueryminjs)
- [@expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](#expo-google-fontsnoto-sans-jp400regularnotosansjp_400regularttf)
- [react/cjs/react.production.js](#reactcjsreactproductionjs)
- [moment/min/moment.min.js](#momentminmomentminjs)
- [vue/dist/vue.global.prod.js](#vuedistvueglobalprodjs)
- [lodash/lodash.min.js](#lodashlodashminjs)
- [normalize.css/normalize.css](#normalizecssnormalizecss)
- [bootstrap/dist/css/bootstrap.min.css](#bootstrapdistcssbootstrapmincss)
- [cities.json/cities.json](#citiesjsoncitiesjson)
- [tailwindcss/theme.css](#tailwindcssthemecss)

Benchmark settings:

- Warmup runs per level: 1
- Minimum samples per level: 5
- Maximum samples per level: 25
- Target relative half-width (95% CI): 0.0500

## jquery/dist/jquery.min.js

- Original size: 78,748 bytes
- Chart: ![Compression ratio chart for jquery/dist/jquery.min.js](charts/jquery-dist-jquery-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.922 | 31,033 | 0.3941 | 5 | yes |
| gzip | 2 | 0.969 | 30,134 | 0.3827 | 8 | yes |
| gzip | 3 | 1.052 | 29,671 | 0.3768 | 5 | yes |
| gzip | 4 | 1.183 | 28,457 | 0.3614 | 5 | yes |
| gzip | 5 | 1.520 | 27,721 | 0.3520 | 5 | yes |
| gzip | 6 | 1.763 | 27,584 | 0.3503 | 5 | yes |
| gzip | 7 | 1.918 | 27,547 | 0.3498 | 5 | yes |
| gzip | 8 | 2.125 | 27,530 | 0.3496 | 5 | yes |
| gzip | 9 | 2.127 | 27,530 | 0.3496 | 5 | yes |
| brotli | 0 | 0.313 | 33,111 | 0.4205 | 19 | yes |
| brotli | 1 | 0.577 | 31,803 | 0.4039 | 7 | yes |
| brotli | 2 | 0.744 | 29,394 | 0.3733 | 11 | yes |
| brotli | 3 | 0.961 | 29,072 | 0.3692 | 25 | no |
| brotli | 4 | 1.324 | 28,392 | 0.3605 | 5 | yes |
| brotli | 5 | 2.029 | 27,013 | 0.3430 | 7 | yes |
| brotli | 6 | 2.193 | 26,844 | 0.3409 | 12 | yes |
| brotli | 7 | 3.479 | 26,773 | 0.3400 | 12 | yes |
| brotli | 8 | 2.539 | 26,725 | 0.3394 | 25 | no |
| brotli | 9 | 6.760 | 26,711 | 0.3392 | 5 | yes |
| brotli | 10 | 34.243 | 25,340 | 0.3218 | 5 | yes |
| brotli | 11 | 101.437 | 24,992 | 0.3174 | 8 | yes |
| zstd | 1 | 0.285 | 31,062 | 0.3944 | 25 | no |
| zstd | 2 | 0.348 | 30,069 | 0.3818 | 25 | no |
| zstd | 3 | 0.648 | 29,214 | 0.3710 | 6 | yes |
| zstd | 4 | 0.995 | 29,108 | 0.3696 | 25 | no |
| zstd | 5 | 1.859 | 28,349 | 0.3600 | 5 | yes |
| zstd | 6 | 1.509 | 27,592 | 0.3504 | 25 | no |
| zstd | 7 | 1.733 | 27,383 | 0.3477 | 5 | yes |
| zstd | 8 | 1.949 | 27,237 | 0.3459 | 5 | yes |
| zstd | 9 | 2.052 | 27,118 | 0.3444 | 5 | yes |
| zstd | 10 | 2.284 | 27,062 | 0.3437 | 25 | no |
| zstd | 11 | 4.131 | 26,969 | 0.3425 | 16 | yes |
| zstd | 12 | 4.548 | 26,970 | 0.3425 | 7 | yes |
| zstd | 13 | 6.229 | 26,867 | 0.3412 | 8 | yes |
| zstd | 14 | 8.498 | 26,432 | 0.3357 | 7 | yes |
| zstd | 15 | 8.706 | 26,420 | 0.3355 | 7 | yes |
| zstd | 16 | 11.158 | 26,336 | 0.3344 | 12 | yes |
| zstd | 17 | 11.033 | 26,336 | 0.3344 | 5 | yes |
| zstd | 18 | 10.981 | 26,336 | 0.3344 | 5 | yes |
| zstd | 19 | 20.487 | 26,282 | 0.3337 | 5 | yes |
| zstd | 20 | 20.697 | 26,282 | 0.3337 | 5 | yes |
| zstd | 21 | 20.140 | 26,282 | 0.3337 | 5 | yes |
| zstd | 22 | 20.119 | 26,282 | 0.3337 | 5 | yes |

## @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf

- Original size: 5,472,784 bytes
- Chart: ![Compression ratio chart for @expo-google-fonts/noto-sans-jp/400Regular/NotoSansJP_400Regular.ttf](charts/expo-google-fonts-noto-sans-jp-400regular-notosansjp-400regular-ttf.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 85.354 | 3,332,519 | 0.6089 | 5 | yes |
| gzip | 2 | 91.693 | 3,287,937 | 0.6008 | 5 | yes |
| gzip | 3 | 93.074 | 3,262,028 | 0.5960 | 5 | yes |
| gzip | 4 | 101.973 | 3,213,095 | 0.5871 | 5 | yes |
| gzip | 5 | 117.829 | 3,166,204 | 0.5785 | 5 | yes |
| gzip | 6 | 131.408 | 3,156,147 | 0.5767 | 5 | yes |
| gzip | 7 | 140.301 | 3,154,131 | 0.5763 | 5 | yes |
| gzip | 8 | 156.472 | 3,153,066 | 0.5761 | 5 | yes |
| gzip | 9 | 169.252 | 3,153,021 | 0.5761 | 5 | yes |
| brotli | 0 | 18.594 | 3,488,111 | 0.6374 | 5 | yes |
| brotli | 1 | 24.524 | 3,325,102 | 0.6076 | 6 | yes |
| brotli | 2 | 44.958 | 3,247,965 | 0.5935 | 5 | yes |
| brotli | 3 | 56.035 | 3,210,322 | 0.5866 | 5 | yes |
| brotli | 4 | 95.713 | 3,052,068 | 0.5577 | 5 | yes |
| brotli | 5 | 132.290 | 2,942,981 | 0.5377 | 5 | yes |
| brotli | 6 | 157.782 | 2,886,204 | 0.5274 | 5 | yes |
| brotli | 7 | 565.573 | 2,841,359 | 0.5192 | 6 | yes |
| brotli | 8 | 718.501 | 2,823,303 | 0.5159 | 5 | yes |
| brotli | 9 | 926.364 | 2,793,428 | 0.5104 | 5 | yes |
| brotli | 10 | 6565.182 | 2,728,891 | 0.4986 | 5 | yes |
| brotli | 11 | 12878.300 | 2,651,692 | 0.4845 | 5 | yes |
| zstd | 1 | 18.625 | 3,342,771 | 0.6108 | 5 | yes |
| zstd | 2 | 22.500 | 3,233,695 | 0.5909 | 8 | yes |
| zstd | 3 | 36.218 | 3,139,155 | 0.5736 | 6 | yes |
| zstd | 4 | 47.661 | 3,084,237 | 0.5636 | 5 | yes |
| zstd | 5 | 65.305 | 3,021,906 | 0.5522 | 5 | yes |
| zstd | 6 | 77.496 | 2,994,480 | 0.5472 | 5 | yes |
| zstd | 7 | 88.967 | 2,946,701 | 0.5384 | 5 | yes |
| zstd | 8 | 103.609 | 2,941,269 | 0.5374 | 5 | yes |
| zstd | 9 | 104.235 | 2,901,056 | 0.5301 | 5 | yes |
| zstd | 10 | 139.271 | 2,879,072 | 0.5261 | 5 | yes |
| zstd | 11 | 212.959 | 2,868,731 | 0.5242 | 8 | yes |
| zstd | 12 | 258.463 | 2,866,083 | 0.5237 | 6 | yes |
| zstd | 13 | 538.167 | 2,864,062 | 0.5233 | 5 | yes |
| zstd | 14 | 590.303 | 2,852,038 | 0.5211 | 5 | yes |
| zstd | 15 | 642.535 | 2,844,247 | 0.5197 | 6 | yes |
| zstd | 16 | 893.597 | 2,803,911 | 0.5123 | 5 | yes |
| zstd | 17 | 994.361 | 2,756,112 | 0.5036 | 7 | yes |
| zstd | 18 | 1341.900 | 2,713,297 | 0.4958 | 7 | yes |
| zstd | 19 | 1406.651 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 20 | 1395.609 | 2,710,797 | 0.4953 | 5 | yes |
| zstd | 21 | 1403.284 | 2,710,761 | 0.4953 | 5 | yes |
| zstd | 22 | 1414.937 | 2,710,761 | 0.4953 | 5 | yes |

## react/cjs/react.production.js

- Original size: 17,217 bytes
- Chart: ![Compression ratio chart for react/cjs/react.production.js](charts/react-cjs-react-production-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.105 | 4,987 | 0.2897 | 25 | no |
| gzip | 2 | 0.114 | 4,874 | 0.2831 | 25 | no |
| gzip | 3 | 0.134 | 4,806 | 0.2791 | 25 | no |
| gzip | 4 | 0.158 | 4,530 | 0.2631 | 15 | yes |
| gzip | 5 | 0.222 | 4,441 | 0.2579 | 7 | yes |
| gzip | 6 | 0.274 | 4,425 | 0.2570 | 8 | yes |
| gzip | 7 | 0.319 | 4,418 | 0.2566 | 5 | yes |
| gzip | 8 | 0.443 | 4,419 | 0.2567 | 6 | yes |
| gzip | 9 | 0.449 | 4,419 | 0.2567 | 5 | yes |
| brotli | 0 | 0.050 | 5,235 | 0.3041 | 25 | no |
| brotli | 1 | 0.058 | 5,134 | 0.2982 | 25 | no |
| brotli | 2 | 0.115 | 4,741 | 0.2754 | 25 | no |
| brotli | 3 | 0.149 | 4,650 | 0.2701 | 16 | yes |
| brotli | 4 | 0.255 | 4,555 | 0.2646 | 10 | yes |
| brotli | 5 | 0.363 | 4,276 | 0.2484 | 24 | yes |
| brotli | 6 | 0.390 | 4,275 | 0.2483 | 10 | yes |
| brotli | 7 | 0.431 | 4,264 | 0.2477 | 7 | yes |
| brotli | 8 | 0.447 | 4,257 | 0.2473 | 7 | yes |
| brotli | 9 | 0.524 | 4,244 | 0.2465 | 8 | yes |
| brotli | 10 | 7.038 | 3,968 | 0.2305 | 5 | yes |
| brotli | 11 | 19.584 | 3,872 | 0.2249 | 5 | yes |
| zstd | 1 | 0.057 | 4,923 | 0.2859 | 25 | no |
| zstd | 2 | 0.066 | 4,868 | 0.2827 | 25 | no |
| zstd | 3 | 0.096 | 4,717 | 0.2740 | 25 | yes |
| zstd | 4 | 0.102 | 4,679 | 0.2718 | 25 | no |
| zstd | 5 | 0.167 | 4,519 | 0.2625 | 25 | no |
| zstd | 6 | 0.224 | 4,437 | 0.2577 | 13 | yes |
| zstd | 7 | 0.274 | 4,437 | 0.2577 | 10 | yes |
| zstd | 8 | 0.305 | 4,426 | 0.2571 | 7 | yes |
| zstd | 9 | 0.326 | 4,420 | 0.2567 | 9 | yes |
| zstd | 10 | 0.377 | 4,410 | 0.2561 | 6 | yes |
| zstd | 11 | 0.681 | 4,393 | 0.2552 | 5 | yes |
| zstd | 12 | 0.733 | 4,391 | 0.2550 | 6 | yes |
| zstd | 13 | 0.979 | 4,383 | 0.2546 | 5 | yes |
| zstd | 14 | 1.442 | 4,307 | 0.2502 | 5 | yes |
| zstd | 15 | 1.522 | 4,303 | 0.2499 | 5 | yes |
| zstd | 16 | 2.224 | 4,282 | 0.2487 | 5 | yes |
| zstd | 17 | 2.334 | 4,281 | 0.2486 | 5 | yes |
| zstd | 18 | 2.330 | 4,281 | 0.2486 | 5 | yes |
| zstd | 19 | 4.528 | 4,264 | 0.2477 | 5 | yes |
| zstd | 20 | 4.537 | 4,264 | 0.2477 | 5 | yes |
| zstd | 21 | 4.548 | 4,264 | 0.2477 | 5 | yes |
| zstd | 22 | 4.543 | 4,264 | 0.2477 | 5 | yes |

## moment/min/moment.min.js

- Original size: 58,890 bytes
- Chart: ![Compression ratio chart for moment/min/moment.min.js](charts/moment-min-moment-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.555 | 21,216 | 0.3603 | 5 | yes |
| gzip | 2 | 0.600 | 20,666 | 0.3509 | 5 | yes |
| gzip | 3 | 0.676 | 20,354 | 0.3456 | 5 | yes |
| gzip | 4 | 0.758 | 19,475 | 0.3307 | 5 | yes |
| gzip | 5 | 0.971 | 18,991 | 0.3225 | 5 | yes |
| gzip | 6 | 1.153 | 18,892 | 0.3208 | 5 | yes |
| gzip | 7 | 1.275 | 18,860 | 0.3203 | 5 | yes |
| gzip | 8 | 1.447 | 18,845 | 0.3200 | 5 | yes |
| gzip | 9 | 1.452 | 18,845 | 0.3200 | 5 | yes |
| brotli | 0 | 0.175 | 22,733 | 0.3860 | 17 | yes |
| brotli | 1 | 0.240 | 22,170 | 0.3765 | 9 | yes |
| brotli | 2 | 0.504 | 20,291 | 0.3446 | 5 | yes |
| brotli | 3 | 0.594 | 20,119 | 0.3416 | 5 | yes |
| brotli | 4 | 0.903 | 19,713 | 0.3347 | 5 | yes |
| brotli | 5 | 1.398 | 18,447 | 0.3132 | 9 | yes |
| brotli | 6 | 1.557 | 18,343 | 0.3115 | 5 | yes |
| brotli | 7 | 1.753 | 18,239 | 0.3097 | 7 | yes |
| brotli | 8 | 1.848 | 18,216 | 0.3093 | 5 | yes |
| brotli | 9 | 2.125 | 18,172 | 0.3086 | 5 | yes |
| brotli | 10 | 26.049 | 17,405 | 0.2956 | 5 | yes |
| brotli | 11 | 71.241 | 17,004 | 0.2887 | 5 | yes |
| zstd | 1 | 0.172 | 21,483 | 0.3648 | 22 | yes |
| zstd | 2 | 0.209 | 20,806 | 0.3533 | 11 | yes |
| zstd | 3 | 0.290 | 20,298 | 0.3447 | 9 | yes |
| zstd | 4 | 0.368 | 19,924 | 0.3383 | 7 | yes |
| zstd | 5 | 0.645 | 19,309 | 0.3279 | 5 | yes |
| zstd | 6 | 0.828 | 18,919 | 0.3213 | 5 | yes |
| zstd | 7 | 1.014 | 18,815 | 0.3195 | 5 | yes |
| zstd | 8 | 1.108 | 18,708 | 0.3177 | 5 | yes |
| zstd | 9 | 1.225 | 18,638 | 0.3165 | 5 | yes |
| zstd | 10 | 1.369 | 18,583 | 0.3156 | 5 | yes |
| zstd | 11 | 2.529 | 18,520 | 0.3145 | 5 | yes |
| zstd | 12 | 2.581 | 18,517 | 0.3144 | 5 | yes |
| zstd | 13 | 3.726 | 18,417 | 0.3127 | 5 | yes |
| zstd | 14 | 5.191 | 17,955 | 0.3049 | 5 | yes |
| zstd | 15 | 5.521 | 17,942 | 0.3047 | 11 | yes |
| zstd | 16 | 7.622 | 17,892 | 0.3038 | 5 | yes |
| zstd | 17 | 7.854 | 17,892 | 0.3038 | 5 | yes |
| zstd | 18 | 7.799 | 17,892 | 0.3038 | 5 | yes |
| zstd | 19 | 15.213 | 17,845 | 0.3030 | 5 | yes |
| zstd | 20 | 15.207 | 17,845 | 0.3030 | 5 | yes |
| zstd | 21 | 15.270 | 17,845 | 0.3030 | 5 | yes |
| zstd | 22 | 15.186 | 17,845 | 0.3030 | 5 | yes |

## vue/dist/vue.global.prod.js

- Original size: 163,668 bytes
- Chart: ![Compression ratio chart for vue/dist/vue.global.prod.js](charts/vue-dist-vue-global-prod-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 1.901 | 66,705 | 0.4076 | 5 | yes |
| gzip | 2 | 2.042 | 65,090 | 0.3977 | 5 | yes |
| gzip | 3 | 2.269 | 64,098 | 0.3916 | 5 | yes |
| gzip | 4 | 2.514 | 61,763 | 0.3774 | 5 | yes |
| gzip | 5 | 3.382 | 60,115 | 0.3673 | 5 | yes |
| gzip | 6 | 4.104 | 59,851 | 0.3657 | 5 | yes |
| gzip | 7 | 4.461 | 59,811 | 0.3654 | 5 | yes |
| gzip | 8 | 4.772 | 59,795 | 0.3653 | 5 | yes |
| gzip | 9 | 4.832 | 59,795 | 0.3653 | 5 | yes |
| brotli | 0 | 0.601 | 70,918 | 0.4333 | 5 | yes |
| brotli | 1 | 0.781 | 68,052 | 0.4158 | 19 | yes |
| brotli | 2 | 1.601 | 62,794 | 0.3837 | 5 | yes |
| brotli | 3 | 1.856 | 62,228 | 0.3802 | 5 | yes |
| brotli | 4 | 2.826 | 61,075 | 0.3732 | 5 | yes |
| brotli | 5 | 4.503 | 57,725 | 0.3527 | 5 | yes |
| brotli | 6 | 5.210 | 57,374 | 0.3506 | 5 | yes |
| brotli | 7 | 5.962 | 57,109 | 0.3489 | 5 | yes |
| brotli | 8 | 6.662 | 57,015 | 0.3484 | 5 | yes |
| brotli | 9 | 7.520 | 56,928 | 0.3478 | 5 | yes |
| brotli | 10 | 97.076 | 54,189 | 0.3311 | 5 | yes |
| brotli | 11 | 248.871 | 53,226 | 0.3252 | 5 | yes |
| zstd | 1 | 0.593 | 65,987 | 0.4032 | 5 | yes |
| zstd | 2 | 0.805 | 63,119 | 0.3857 | 5 | yes |
| zstd | 3 | 0.991 | 62,505 | 0.3819 | 5 | yes |
| zstd | 4 | 1.706 | 60,689 | 0.3708 | 5 | yes |
| zstd | 5 | 2.176 | 60,183 | 0.3677 | 5 | yes |
| zstd | 6 | 2.721 | 59,274 | 0.3622 | 5 | yes |
| zstd | 7 | 3.178 | 58,475 | 0.3573 | 5 | yes |
| zstd | 8 | 3.932 | 57,997 | 0.3544 | 5 | yes |
| zstd | 9 | 4.336 | 57,744 | 0.3528 | 5 | yes |
| zstd | 10 | 5.254 | 57,617 | 0.3520 | 5 | yes |
| zstd | 11 | 9.785 | 57,324 | 0.3502 | 5 | yes |
| zstd | 12 | 9.902 | 57,311 | 0.3502 | 5 | yes |
| zstd | 13 | 16.240 | 56,313 | 0.3441 | 5 | yes |
| zstd | 14 | 19.268 | 55,866 | 0.3413 | 5 | yes |
| zstd | 15 | 19.472 | 55,859 | 0.3413 | 5 | yes |
| zstd | 16 | 26.218 | 55,686 | 0.3402 | 5 | yes |
| zstd | 17 | 25.642 | 55,686 | 0.3402 | 5 | yes |
| zstd | 18 | 43.203 | 55,612 | 0.3398 | 5 | yes |
| zstd | 19 | 43.354 | 55,612 | 0.3398 | 5 | yes |
| zstd | 20 | 43.461 | 55,612 | 0.3398 | 5 | yes |
| zstd | 21 | 43.520 | 55,612 | 0.3398 | 5 | yes |
| zstd | 22 | 42.823 | 55,612 | 0.3398 | 5 | yes |

## lodash/lodash.min.js

- Original size: 73,234 bytes
- Chart: ![Compression ratio chart for lodash/lodash.min.js](charts/lodash-lodash-min-js.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.806 | 28,819 | 0.3935 | 5 | yes |
| gzip | 2 | 0.850 | 28,191 | 0.3849 | 5 | yes |
| gzip | 3 | 0.947 | 27,724 | 0.3786 | 5 | yes |
| gzip | 4 | 1.058 | 26,950 | 0.3680 | 5 | yes |
| gzip | 5 | 1.361 | 26,101 | 0.3564 | 5 | yes |
| gzip | 6 | 1.692 | 25,938 | 0.3542 | 5 | yes |
| gzip | 7 | 1.985 | 25,913 | 0.3538 | 5 | yes |
| gzip | 8 | 2.591 | 25,894 | 0.3536 | 5 | yes |
| gzip | 9 | 2.582 | 25,894 | 0.3536 | 5 | yes |
| brotli | 0 | 0.252 | 30,978 | 0.4230 | 8 | yes |
| brotli | 1 | 0.318 | 29,754 | 0.4063 | 8 | yes |
| brotli | 2 | 0.659 | 27,438 | 0.3747 | 5 | yes |
| brotli | 3 | 0.779 | 27,227 | 0.3718 | 5 | yes |
| brotli | 4 | 1.257 | 26,678 | 0.3643 | 5 | yes |
| brotli | 5 | 1.877 | 25,217 | 0.3443 | 10 | yes |
| brotli | 6 | 2.071 | 25,093 | 0.3426 | 5 | yes |
| brotli | 7 | 2.514 | 24,950 | 0.3407 | 5 | yes |
| brotli | 8 | 2.737 | 24,912 | 0.3402 | 5 | yes |
| brotli | 9 | 3.207 | 24,870 | 0.3396 | 5 | yes |
| brotli | 10 | 40.525 | 23,472 | 0.3205 | 5 | yes |
| brotli | 11 | 99.625 | 23,030 | 0.3145 | 5 | yes |
| zstd | 1 | 0.228 | 28,919 | 0.3949 | 21 | yes |
| zstd | 2 | 0.285 | 28,008 | 0.3824 | 7 | yes |
| zstd | 3 | 0.390 | 27,463 | 0.3750 | 25 | no |
| zstd | 4 | 0.474 | 27,100 | 0.3700 | 13 | yes |
| zstd | 5 | 0.820 | 26,525 | 0.3622 | 5 | yes |
| zstd | 6 | 1.081 | 25,834 | 0.3528 | 5 | yes |
| zstd | 7 | 1.314 | 25,663 | 0.3504 | 5 | yes |
| zstd | 8 | 1.459 | 25,557 | 0.3490 | 5 | yes |
| zstd | 9 | 1.615 | 25,466 | 0.3477 | 5 | yes |
| zstd | 10 | 1.892 | 25,397 | 0.3468 | 5 | yes |
| zstd | 11 | 3.368 | 25,317 | 0.3457 | 5 | yes |
| zstd | 12 | 3.755 | 25,315 | 0.3457 | 5 | yes |
| zstd | 13 | 5.588 | 25,185 | 0.3439 | 5 | yes |
| zstd | 14 | 7.926 | 24,642 | 0.3365 | 5 | yes |
| zstd | 15 | 7.954 | 24,606 | 0.3360 | 5 | yes |
| zstd | 16 | 10.263 | 24,499 | 0.3345 | 5 | yes |
| zstd | 17 | 10.326 | 24,499 | 0.3345 | 5 | yes |
| zstd | 18 | 10.316 | 24,499 | 0.3345 | 5 | yes |
| zstd | 19 | 19.301 | 24,463 | 0.3340 | 5 | yes |
| zstd | 20 | 19.409 | 24,463 | 0.3340 | 5 | yes |
| zstd | 21 | 19.492 | 24,463 | 0.3340 | 5 | yes |
| zstd | 22 | 19.541 | 24,463 | 0.3340 | 5 | yes |

## normalize.css/normalize.css

- Original size: 6,138 bytes
- Chart: ![Compression ratio chart for normalize.css/normalize.css](charts/normalize-css-normalize-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.032 | 1,915 | 0.3120 | 25 | no |
| gzip | 2 | 0.037 | 1,866 | 0.3040 | 25 | no |
| gzip | 3 | 0.034 | 1,845 | 0.3006 | 25 | no |
| gzip | 4 | 0.040 | 1,758 | 0.2864 | 25 | no |
| gzip | 5 | 0.050 | 1,722 | 0.2805 | 25 | no |
| gzip | 6 | 0.047 | 1,722 | 0.2805 | 25 | no |
| gzip | 7 | 0.048 | 1,722 | 0.2805 | 23 | yes |
| gzip | 8 | 0.050 | 1,720 | 0.2802 | 25 | no |
| gzip | 9 | 0.046 | 1,720 | 0.2802 | 25 | no |
| brotli | 0 | 0.022 | 2,089 | 0.3403 | 20 | yes |
| brotli | 1 | 0.028 | 2,056 | 0.3350 | 25 | no |
| brotli | 2 | 0.039 | 1,909 | 0.3110 | 25 | no |
| brotli | 3 | 0.047 | 1,834 | 0.2988 | 25 | no |
| brotli | 4 | 0.084 | 1,694 | 0.2760 | 25 | no |
| brotli | 5 | 0.119 | 1,557 | 0.2537 | 24 | yes |
| brotli | 6 | 0.123 | 1,559 | 0.2540 | 15 | yes |
| brotli | 7 | 0.130 | 1,555 | 0.2533 | 21 | yes |
| brotli | 8 | 0.134 | 1,555 | 0.2533 | 12 | yes |
| brotli | 9 | 0.153 | 1,557 | 0.2537 | 17 | yes |
| brotli | 10 | 2.922 | 1,431 | 0.2331 | 5 | yes |
| brotli | 11 | 7.392 | 1,398 | 0.2278 | 5 | yes |
| zstd | 1 | 0.031 | 1,906 | 0.3105 | 25 | no |
| zstd | 2 | 0.035 | 1,941 | 0.3162 | 25 | no |
| zstd | 3 | 0.037 | 1,853 | 0.3019 | 25 | no |
| zstd | 4 | 0.049 | 1,752 | 0.2854 | 25 | no |
| zstd | 5 | 0.056 | 1,743 | 0.2840 | 25 | no |
| zstd | 6 | 0.061 | 1,730 | 0.2819 | 25 | no |
| zstd | 7 | 0.065 | 1,729 | 0.2817 | 25 | no |
| zstd | 8 | 0.062 | 1,729 | 0.2817 | 25 | no |
| zstd | 9 | 0.150 | 1,728 | 0.2815 | 16 | yes |
| zstd | 10 | 0.140 | 1,728 | 0.2815 | 11 | yes |
| zstd | 11 | 0.282 | 1,722 | 0.2805 | 8 | yes |
| zstd | 12 | 0.365 | 1,718 | 0.2799 | 6 | yes |
| zstd | 13 | 0.549 | 1,703 | 0.2775 | 5 | yes |
| zstd | 14 | 0.580 | 1,700 | 0.2770 | 5 | yes |
| zstd | 15 | 0.713 | 1,700 | 0.2770 | 5 | yes |
| zstd | 16 | 1.096 | 1,696 | 0.2763 | 5 | yes |
| zstd | 17 | 1.282 | 1,697 | 0.2765 | 5 | yes |
| zstd | 18 | 1.365 | 1,697 | 0.2765 | 5 | yes |
| zstd | 19 | 1.361 | 1,697 | 0.2765 | 5 | yes |
| zstd | 20 | 1.363 | 1,697 | 0.2765 | 5 | yes |
| zstd | 21 | 1.356 | 1,697 | 0.2765 | 5 | yes |
| zstd | 22 | 1.360 | 1,697 | 0.2765 | 25 | no |

## bootstrap/dist/css/bootstrap.min.css

- Original size: 232,111 bytes
- Chart: ![Compression ratio chart for bootstrap/dist/css/bootstrap.min.css](charts/bootstrap-dist-css-bootstrap-min-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 1.085 | 41,452 | 0.1786 | 5 | yes |
| gzip | 2 | 1.167 | 38,418 | 0.1655 | 5 | yes |
| gzip | 3 | 1.316 | 36,152 | 0.1558 | 5 | yes |
| gzip | 4 | 1.598 | 33,830 | 0.1457 | 5 | yes |
| gzip | 5 | 2.011 | 31,408 | 0.1353 | 5 | yes |
| gzip | 6 | 2.685 | 30,823 | 0.1328 | 5 | yes |
| gzip | 7 | 3.260 | 30,680 | 0.1322 | 5 | yes |
| gzip | 8 | 4.330 | 30,670 | 0.1321 | 5 | yes |
| gzip | 9 | 4.394 | 30,669 | 0.1321 | 5 | yes |
| brotli | 0 | 0.398 | 43,268 | 0.1864 | 7 | yes |
| brotli | 1 | 0.548 | 39,941 | 0.1721 | 5 | yes |
| brotli | 2 | 1.145 | 36,514 | 0.1573 | 5 | yes |
| brotli | 3 | 1.359 | 34,781 | 0.1498 | 5 | yes |
| brotli | 4 | 1.953 | 33,048 | 0.1424 | 5 | yes |
| brotli | 5 | 2.989 | 28,253 | 0.1217 | 5 | yes |
| brotli | 6 | 3.320 | 27,431 | 0.1182 | 5 | yes |
| brotli | 7 | 3.744 | 26,971 | 0.1162 | 5 | yes |
| brotli | 8 | 4.185 | 26,813 | 0.1155 | 5 | yes |
| brotli | 9 | 5.120 | 26,569 | 0.1145 | 5 | yes |
| brotli | 10 | 99.738 | 23,482 | 0.1012 | 5 | yes |
| brotli | 11 | 302.208 | 22,970 | 0.0990 | 5 | yes |
| zstd | 1 | 0.469 | 35,549 | 0.1532 | 7 | yes |
| zstd | 2 | 0.544 | 34,301 | 0.1478 | 5 | yes |
| zstd | 3 | 0.591 | 34,393 | 0.1482 | 5 | yes |
| zstd | 4 | 1.399 | 30,973 | 0.1334 | 5 | yes |
| zstd | 5 | 1.741 | 29,744 | 0.1281 | 5 | yes |
| zstd | 6 | 2.161 | 29,727 | 0.1281 | 5 | yes |
| zstd | 7 | 2.333 | 29,710 | 0.1280 | 5 | yes |
| zstd | 8 | 2.910 | 28,645 | 0.1234 | 6 | yes |
| zstd | 9 | 3.354 | 28,235 | 0.1216 | 5 | yes |
| zstd | 10 | 4.182 | 28,044 | 0.1208 | 5 | yes |
| zstd | 11 | 9.066 | 27,895 | 0.1202 | 5 | yes |
| zstd | 12 | 11.428 | 27,805 | 0.1198 | 5 | yes |
| zstd | 13 | 19.578 | 27,283 | 0.1175 | 5 | yes |
| zstd | 14 | 23.108 | 26,828 | 0.1156 | 5 | yes |
| zstd | 15 | 29.176 | 26,465 | 0.1140 | 5 | yes |
| zstd | 16 | 48.965 | 26,071 | 0.1123 | 5 | yes |
| zstd | 17 | 54.551 | 26,041 | 0.1122 | 5 | yes |
| zstd | 18 | 73.785 | 26,008 | 0.1120 | 5 | yes |
| zstd | 19 | 81.099 | 26,015 | 0.1121 | 5 | yes |
| zstd | 20 | 83.943 | 26,014 | 0.1121 | 5 | yes |
| zstd | 21 | 83.955 | 26,014 | 0.1121 | 5 | yes |
| zstd | 22 | 84.314 | 26,014 | 0.1121 | 5 | yes |

## cities.json/cities.json

- Original size: 21,953,388 bytes
- Chart: ![Compression ratio chart for cities.json/cities.json](charts/cities-json-cities-json.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 94.697 | 3,751,261 | 0.1709 | 5 | yes |
| gzip | 2 | 94.570 | 3,528,967 | 0.1607 | 5 | yes |
| gzip | 3 | 110.137 | 3,370,979 | 0.1536 | 5 | yes |
| gzip | 4 | 130.645 | 3,328,999 | 0.1516 | 5 | yes |
| gzip | 5 | 155.044 | 3,081,077 | 0.1403 | 5 | yes |
| gzip | 6 | 197.682 | 3,020,114 | 0.1376 | 5 | yes |
| gzip | 7 | 301.579 | 2,903,542 | 0.1323 | 5 | yes |
| gzip | 8 | 1155.408 | 2,794,554 | 0.1273 | 5 | yes |
| gzip | 9 | 1693.913 | 2,783,224 | 0.1268 | 5 | yes |
| brotli | 0 | 44.136 | 4,059,162 | 0.1849 | 5 | yes |
| brotli | 1 | 58.015 | 3,701,732 | 0.1686 | 5 | yes |
| brotli | 2 | 113.164 | 3,357,390 | 0.1529 | 5 | yes |
| brotli | 3 | 129.448 | 3,265,779 | 0.1488 | 5 | yes |
| brotli | 4 | 205.582 | 3,125,451 | 0.1424 | 5 | yes |
| brotli | 5 | 359.819 | 2,774,227 | 0.1264 | 7 | yes |
| brotli | 6 | 401.001 | 2,738,409 | 0.1247 | 5 | yes |
| brotli | 7 | 579.352 | 2,707,850 | 0.1233 | 5 | yes |
| brotli | 8 | 712.514 | 2,687,842 | 0.1224 | 5 | yes |
| brotli | 9 | 965.104 | 2,673,141 | 0.1218 | 5 | yes |
| brotli | 10 | 13935.208 | 2,315,778 | 0.1055 | 5 | yes |
| brotli | 11 | 37670.613 | 2,180,828 | 0.0993 | 5 | yes |
| zstd | 1 | 44.007 | 3,380,894 | 0.1540 | 5 | yes |
| zstd | 2 | 53.720 | 3,402,497 | 0.1550 | 5 | yes |
| zstd | 3 | 72.045 | 3,449,952 | 0.1571 | 5 | yes |
| zstd | 4 | 79.486 | 3,454,596 | 0.1574 | 5 | yes |
| zstd | 5 | 139.002 | 3,140,901 | 0.1431 | 5 | yes |
| zstd | 6 | 195.105 | 2,932,855 | 0.1336 | 5 | yes |
| zstd | 7 | 229.548 | 2,887,559 | 0.1315 | 5 | yes |
| zstd | 8 | 290.202 | 2,785,481 | 0.1269 | 5 | yes |
| zstd | 9 | 316.165 | 2,795,218 | 0.1273 | 5 | yes |
| zstd | 10 | 403.455 | 2,753,222 | 0.1254 | 6 | yes |
| zstd | 11 | 585.495 | 2,720,543 | 0.1239 | 5 | yes |
| zstd | 12 | 622.790 | 2,720,412 | 0.1239 | 5 | yes |
| zstd | 13 | 994.224 | 2,680,256 | 0.1221 | 5 | yes |
| zstd | 14 | 1263.936 | 2,654,484 | 0.1209 | 6 | yes |
| zstd | 15 | 1593.020 | 2,651,235 | 0.1208 | 5 | yes |
| zstd | 16 | 3729.112 | 2,535,036 | 0.1155 | 5 | yes |
| zstd | 17 | 4539.472 | 2,466,410 | 0.1123 | 5 | yes |
| zstd | 18 | 5835.810 | 2,453,943 | 0.1118 | 5 | yes |
| zstd | 19 | 9279.326 | 2,384,554 | 0.1086 | 5 | yes |
| zstd | 20 | 9327.086 | 2,382,448 | 0.1085 | 5 | yes |
| zstd | 21 | 9532.485 | 2,382,300 | 0.1085 | 5 | yes |
| zstd | 22 | 9822.894 | 2,378,818 | 0.1084 | 5 | yes |

## tailwindcss/theme.css

- Original size: 19,480 bytes
- Chart: ![Compression ratio chart for tailwindcss/theme.css](charts/tailwindcss-theme-css.svg)

| Algorithm | Level | Time (ms) | Size (bytes) | Compression Ratio | Samples | Converged |
| --- | --- | --- | --- | --- | --- | --- |
| gzip | 1 | 0.113 | 5,506 | 0.2826 | 25 | no |
| gzip | 2 | 0.140 | 5,424 | 0.2784 | 25 | no |
| gzip | 3 | 0.163 | 5,356 | 0.2749 | 13 | yes |
| gzip | 4 | 0.200 | 5,145 | 0.2641 | 8 | yes |
| gzip | 5 | 0.261 | 4,896 | 0.2513 | 8 | yes |
| gzip | 6 | 0.361 | 4,884 | 0.2507 | 6 | yes |
| gzip | 7 | 0.474 | 4,857 | 0.2493 | 5 | yes |
| gzip | 8 | 0.601 | 4,859 | 0.2494 | 5 | yes |
| gzip | 9 | 0.611 | 4,859 | 0.2494 | 5 | yes |
| brotli | 0 | 0.051 | 6,028 | 0.3094 | 25 | no |
| brotli | 1 | 0.067 | 5,737 | 0.2945 | 25 | no |
| brotli | 2 | 0.124 | 4,944 | 0.2538 | 20 | yes |
| brotli | 3 | 0.167 | 4,930 | 0.2531 | 12 | yes |
| brotli | 4 | 0.271 | 4,898 | 0.2514 | 10 | yes |
| brotli | 5 | 0.432 | 4,581 | 0.2352 | 14 | yes |
| brotli | 6 | 0.480 | 4,570 | 0.2346 | 9 | yes |
| brotli | 7 | 0.547 | 4,564 | 0.2343 | 5 | yes |
| brotli | 8 | 0.590 | 4,561 | 0.2341 | 8 | yes |
| brotli | 9 | 0.716 | 4,553 | 0.2337 | 5 | yes |
| brotli | 10 | 7.308 | 3,934 | 0.2020 | 5 | yes |
| brotli | 11 | 22.851 | 3,824 | 0.1963 | 5 | yes |
| zstd | 1 | 0.057 | 5,379 | 0.2761 | 25 | no |
| zstd | 2 | 0.069 | 5,176 | 0.2657 | 25 | no |
| zstd | 3 | 0.103 | 5,169 | 0.2653 | 18 | yes |
| zstd | 4 | 0.102 | 5,154 | 0.2646 | 25 | no |
| zstd | 5 | 0.190 | 5,074 | 0.2605 | 7 | yes |
| zstd | 6 | 0.236 | 4,797 | 0.2463 | 12 | yes |
| zstd | 7 | 0.280 | 4,702 | 0.2414 | 10 | yes |
| zstd | 8 | 0.341 | 4,696 | 0.2411 | 6 | yes |
| zstd | 9 | 0.384 | 4,690 | 0.2408 | 25 | no |
| zstd | 10 | 0.483 | 4,691 | 0.2408 | 5 | yes |
| zstd | 11 | 0.678 | 4,689 | 0.2407 | 5 | yes |
| zstd | 12 | 0.732 | 4,687 | 0.2406 | 5 | yes |
| zstd | 13 | 1.057 | 4,806 | 0.2467 | 5 | yes |
| zstd | 14 | 1.776 | 4,447 | 0.2283 | 5 | yes |
| zstd | 15 | 1.895 | 4,446 | 0.2282 | 5 | yes |
| zstd | 16 | 2.622 | 4,367 | 0.2242 | 5 | yes |
| zstd | 17 | 2.611 | 4,367 | 0.2242 | 5 | yes |
| zstd | 18 | 2.626 | 4,367 | 0.2242 | 5 | yes |
| zstd | 19 | 5.063 | 4,348 | 0.2232 | 5 | yes |
| zstd | 20 | 5.122 | 4,348 | 0.2232 | 5 | yes |
| zstd | 21 | 5.120 | 4,348 | 0.2232 | 5 | yes |
| zstd | 22 | 5.110 | 4,348 | 0.2232 | 5 | yes |
