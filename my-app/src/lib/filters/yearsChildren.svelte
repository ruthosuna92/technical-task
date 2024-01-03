<script>
    import ExpDoubleRangeSlider from "./expDoubleRangeSlider.svelte";
    import { minExp, maxExp } from "../../stores";
</script>

<div class="flex gap-4 justify-between">
    <div
        class="flex p-[0.75rem] rounded-lg border border-stroke-cards bg-white justify-between "
    >
        <label for="min" class="">min</label>
        <input
            type="text"
            disabled
            inputmode="numeric"
            pattern="[0-9]*"
            name="min"
            class=" appearance-none border-0 bg-transparent focus:outline-none focus:ring-0 focus:border-0 focus:appearance-none hover:appearance-none w-1/2 text-right text-base"
            value={$minExp}
        />
    </div>
    <div
        class="flex p-[0.75rem] rounded-lg border border-stroke-cards bg-white justify-between"
    >
        <label for="max" class="w-max">max</label>
        <input
            type="text"
            disabled
            inputmode="numeric"
            pattern="[0-9]*"
            name="max"
            class="appearance-none border-0 bg-transparent  focus:outline-none focus:ring-0 focus:border-0 focus:appearance-none hover:appearance-none w-1/2 text-right text-base"
            value={$maxExp === 25 ? "+" + 25 : $maxExp}
        />
    </div>
</div>
<div class="p-6">
    <ExpDoubleRangeSlider />
</div>