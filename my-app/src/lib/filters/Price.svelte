<script>
    import DoubleRangeSlider from "./doubleRangeSlider.svelte";
    import { minPrice, maxPrice } from "../../stores";
    let isOpen = false;

    const handleSubMenu = () => {
        isOpen = !isOpen;
    };

    function validateInput(event) {
        let input = event.target;
        console.log(input.value);
        input.value = input.value.replace(/[^0-9]/g, "");
        input.value = input.value.slice(0, 3);
        if (Number(input.value[0]) > 2) {
            input.value = input.value.slice(0, 2);
        }
        if (Number(input.value[0]) > 1 && Number(input.value[1]) > 0) {
            input.value = input.value.slice(0, 2);
        }
        if (
            Number(input.value[0]) > 1 &&
            Number(input.value[1]) === 0 &&
            Number(input.value[2]) > 0
        ) {
            input.value = input.value.slice(0, 2);
        }
        if(input.name === "max"){
            maxPrice.update((n) => n = Number(input.value))
            console.log($maxPrice)
        }
    }
</script>

<div class="flex flex-col gap-4">
    <button class="flex justify-between" on:click={handleSubMenu}>
        <h1 class="font-semibold text-base">Price (£ GBP)</h1>
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
        class="{isOpen
            ? 'transition-max-h ease-out delay-150 translate-y-0 duration-300 max-h-[100px] mt-4 '
            : 'max-h-0 scale-y-0 translate-y-[-100%] ease-out delay-150 duration-300 '} gap-4 flex flex-col "
    >
        <div class="flex gap-4 justify-between">
            <div
                class="flex p-[0.75rem] rounded-lg border border-stroke-cards bg-white justify-between "
            >
                <label for="min" class="">min</label>
                <input
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    on:input={validateInput}
                    name="min"
                    class=" appearance-none border-0 bg-transparent focus:outline-none focus:ring-0 focus:border-0 focus:appearance-none hover:appearance-none w-1/2 text-right"
                    value={$minPrice}
                />
            </div>
            <div
                class="flex p-[0.75rem] rounded-lg border border-stroke-cards bg-white justify-between"
            >
                <label for="max" class="w-max">max</label>
                <input
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    on:input={validateInput}
                    name="max"
                    class="appearance-none border-0 bg-transparent  focus:outline-none focus:ring-0 focus:border-0 focus:appearance-none hover:appearance-none w-1/2 text-right"
                    value={$maxPrice}
                />
            </div>
        </div>
        <div class="p-6">
            <DoubleRangeSlider />
        </div>
    </div>
</div>
