<script>
    let isOpen = false;
    const handleSubMenu = () => {
        isOpen = !isOpen
    }

    let checked = false
    let checked1 = false
</script>

<div class="flex flex-col">
    
        <button class="flex justify-between" on:click={handleSubMenu}>
            <h1 class="font-semibold text-base">Appointment type</h1>
            <svg
                class="{isOpen
                    ? ''
                    : 'rotate-90'} transition delay-150 duration-300 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M18 9L12 15L6 9"
                    stroke="#8A8987"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
    
    <div
        class={isOpen
            ? "transition-max-h ease-out delay-150 translate-y-0 duration-300 max-h-[100px] mt-4"
            : "max-h-0 scale-y-0 translate-y-[-100%] ease-out delay-150 duration-300"}
    >
        <div class="flex h-10 py-0 px-2 items-center gap-4">
            <input
                type="checkbox"
                id="customCheckbox15"
                class="hidden"
                on:click={() => checked = !checked}
            />
            <label
                for="customCheckbox15"
                class="cursor-pointer flex items-start"
            >
                <div
                    class="w-[1.25rem] h-[1.25rem] border border-gray-300-c rounded-md transition duration-300 ease-in-out {checked
                        ? 'bg-accent-green border-blue-500'
                        : 'bg-white'}"
                >
                    <svg
                        class="w-4 h-4 m-auto text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
                </div>
                <span class="ml-2">15-min free consultation<br>(comming soon)</span>
            </label>
        </div>
        <div class="flex h-10 py-0 px-2 items-center gap-4">
            <input
                type="checkbox"
                id="customCheckbox50"
                class="hidden"
                on:click={() => checked1 = !checked1}
            />
            <label
                for="customCheckbox50"
                class="cursor-pointer flex items-center"
            >
                <div
                    class="w-[1.25rem] h-[1.25rem] border border-gray-300-c rounded-md transition duration-300 ease-in-out {checked1
                        ? 'bg-accent-green border-blue-500'
                        : 'bg-white'}"
                >
                    <svg
                        class="w-4 h-4 m-auto text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
                </div>
                <span class="ml-2">Individual 50-min session</span>
            </label>
        </div>
    </div>
</div>
