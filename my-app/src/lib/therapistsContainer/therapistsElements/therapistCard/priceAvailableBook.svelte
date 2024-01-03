<script>
    export let price;
</script>

<!-- This container has 2 div's 1(Price, next available and date) 2.(Book now button) -->
<div
    class="flex flex-col w-96 xs:w-full p-8 xs:p-4 xs:pt-0 justify-center items-center gap-6 xs:gap-4 self-stretch rounded-2xl border xs:border-0 bg-white border-stroke-cards shadow-[0_4px_4px_0px_rgba(0,0,0,0.03)]"
>
    <!-- This is the container of Price per session and Next available date -->
    <div class="flex flex-col xs:flex-row  items-center gap-2 w-full">
        <div class="flex flex-col justify-center xs:justify-start items-center">
            <p class="text-1.5xl xs:hidden">£{price} GBP</p>
            <p class="text-xl sm:hidden md:hidden font-semibold">£{price}.00</p>
            <p class="text-base xs:text-sm xs:text-stroke-dark">per session</p>
        </div>
        <div class="sm:hidden md:hidden gap-4 p-4">
        <svg width="1" height="36" viewBox="0 0 1 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="35" x2="0.499998" y2="1" stroke="#DDDAD0" stroke-linecap="round"/>
            </svg>
        </div>
        <div class="flex flex-col items-center">
            <p class="text-stroke-dark text-base xs:text-sm">Next available date</p>
            <span class="flex items-center gap-2">
                <svg class="xs:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path
                        d="M15.8333 3.33331H4.16667C3.24619 3.33331 2.5 4.07951 2.5 4.99998V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99998C17.5 4.07951 16.7538 3.33331 15.8333 3.33331Z"
                        stroke="#203136"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M13.334 1.66669V5.00002"
                        stroke="#203136"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M6.66602 1.66669V5.00002"
                        stroke="#203136"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M2.5 8.33331H17.5"
                        stroke="#203136"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <p class="text-primary-dark text-base xs:hidden">Sept 4, 2023 11:00 am</p>
                <p class="text-primary-dark text-smb sm:hidden md:hidden">Sept 4, 11:00 am</p>
            </span>
        </div>
    </div>
    <button class="flex h-[2.75rem] py-[0.625rem] px-[1.5rem] justify-center items-center gap-2 rounded-full bg-primary-dark text-white w-full">
        <span>Book now</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12L19 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
    </button>
</div>
