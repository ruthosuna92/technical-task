<script>
    export let price;
</script>

<div
    class="flex flex-col p-8 xs:py-4 xs:px-6 gap-8 xs:gap-4 bg-white border border-stroke-cards rounded-2xl shadow-[0_4px_4px_0px_rgba(0,0,0,0.05)]"
>
    <div class="flex gap-2 xs:gap-0 flex-row justify-between">
        <div>
            <p
                class="line-through text-stroke-dark xs:no-underline xs:text-primary-dark xs:text-xl xs:font-semibold"
            >
                £{price} GBP
            </p>
            <p class="text-2.5xl font-semibold xs:hidden flex items-center">
                £{Math.floor(price / 2)}
            </p>
        </div>
        <div
            class=" flex text-right items-center xs:gap-1 gap-[0.625rem] xs:text-smb"
        >
            <p class="xs:text-sm">
                per individual session<br /><span class="xs:hidden"
                    >using Credits</span
                >
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
            >
                <path
                    d="M1 1L7 7L13 1"
                    stroke="#203136"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    </div>
    <div
        class="flex flex-col xs:flex-row justify-center xs:justify-between items-start gap-1"
    >
        <div
            class="flex items-center xs:justify-between xs:items-start gap-2 xs:gap-1"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
            >
                <path
                    d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                    stroke="#8A8987"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M13.334 1.66699V5.00033"
                    stroke="#8A8987"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M6.66602 1.66699V5.00033"
                    stroke="#8A8987"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M2.5 8.33301H17.5"
                    stroke="#8A8987"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <p class="text-stroke-dark xs:text-sm">Next available date</p>
        </div>
        <p class="xs:hidden">Sept 6, 2023 9:00 am</p>
        <p class="sm:hidden md:hidden text-sm">Sept 6, 9:00 am</p>
    </div>
    <div class="flex justify-between md:hidden sm:hidden">
        <div class="flex items-center gap-2 sm:hidden md:hidden">
            <svg class="xs:w-[1.25rem] xs:h-[1.25rem]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                    stroke="#203136"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <p class="text-sm w-min">Ask a question</p>
        </div>
        <button
            class="flex h-[2.5rem] py-[0.625rem] px-[1.5rem] justify-center items-center gap-2 rounded-full bg-primary-dark text-white w-max sm:hidden md:hidden"
        >
            <span class="text-[0.7rem]">Book now</span>
            <svg class="w-[1.25rem] h-[1.25rem]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M5 12L19 12"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M12 5L19 12L12 19"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
    </div>
    <button
        class="flex h-[3.25rem] py-2 px-8 justify-center items-center gap-2 self-stretch rounded-full border border-stroke-medium shadow-[0_4px_4px_0px_rgba(0,0,0,0.03)] xs:hidden"
    >
        <p>Book a free 15-min session</p>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
        >
            <path
                d="M5.5 12L19.5 12"
                stroke="#203136"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M12.5 5L19.5 12L12.5 19"
                stroke="#203136"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </button>
</div>
