<script>
    export let price;
    let stringClass =
        "xs:hidden flex w-[4.375rem] bg-primary-dark text-white py-1 justify-center items-center gap-[0.268rem] rounded-full";
    let stringClassContainer =
        "flex items-center gap-6 self-stretch justify-between";
        let stringClassPTag = "xs:text-smb font-semibold"
</script>

<div
    class="flex p-8 xs:p-4 flex-col gap-6 xs:gap-4 self-stretch rounded-2xl border border-stroke-cards bg-white shadow-[0_4px_4px_0px_rgba(0,0,0,0.05)]"
>
    <div class="flex justify-between gap-6 self-stretch">
        <p class="font-semibold md:text-md">Rates</p>
        <p class="text-stroke-dark xs:text-smb">GBP £</p>
    </div>
    <div class="flex flex-col gap-6">
        <div class={stringClassContainer}>
            <div class="flex gap-6 items-center">
                <div class={stringClass}>FREE</div>
                <p>15-min consultation</p>
            </div>
            <p class={stringClassPTag}>£0</p>
        </div>
        <div class={stringClassContainer}>
            <div class="flex gap-6 items-center">
                <div class={stringClass}>18+</div>
                <p class="xs:hidden">Adults/18+ Individual 50-min session</p>
                <p class="md:hidden sm:hidden">Adults (18+ Individual 50-min session)</p>
            </div>
            <p class={stringClassPTag}>{price}</p>
        </div>
        <div class={stringClassContainer} >
            <div class="flex gap-6 xs:gap-1 xs:justify-start items-center xs:items-start xs:flex-col">
                <div class={stringClass}>16-18</div>
                <p>Young adults (16-18)</p>
                <div class="flex gap-2">
                    <svg class=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <g clip-path="url(#clip0_770_234)">
                            <path
                                d="M10 17.8125C13.797 17.8125 16.875 14.7345 16.875 10.9375C16.875 7.14054 13.797 4.0625 10 4.0625M2.03125 7.65625H5.78125M0.9375 11.6406H5.78125M2.03125 15.3516H5.78125"
                                stroke="#8A8987"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M10 10.9378L12.6516 8.28613"
                                stroke="#8A8987"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M8.125 0.9375H11.875"
                                stroke="#8A8987"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_770_234">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="text-stroke-dark xs:text-sm">Coming soon</p>
                </div>
            </div>
            <p class={stringClassPTag}>£80</p>
        </div>
    </div>
</div>
