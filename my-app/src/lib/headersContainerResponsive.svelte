<script>
    import { menuFilter, menuSorter} from "../stores"
   
    const handleFilters = () => {
        menuFilter.update((bool) => bool = true)
    }
    const handleMenuSort = () => {
        menuSorter.update((bool) => bool = true)
    }

</script>

<div class="sm:hidden md:hidden flex bg-background gap-6 xs:gap-4 md:justify-between sm:justify-between xs:flex-col relative">
    <span class="text-xl xs:hidden font-semibold text-primary-dark sm:mr-40 md:mr-12 ">
        Let's discover your next therapist
    </span>
    <span
        class="text-xl sm:hidden md:hidden items-center font-semibold text-primary-dark text-left sticky"
    >
        Discover your next therapist
    </span>
    <div class="flex items-center justify-center gap-6 xs:gap-4">
        <button
            name="order"
            id="order"
            class="rounded-full flex h-10 py-2 px-6 bg-white  gap-4 border border-stroke-medium shadow-[0_4px_4px_0px_rgba(0,0,0,0.03)]"
            on:click={handleMenuSort}
        >
        Sort by
        </button>
        <button
            class="bg-white rounded-full flex h-10 py-2 px-6 gap-4 border border-stroke-medium shadow-[0_4px_4px_0px_rgba(0,0,0,0.03)]" 
            on:click={handleFilters}
        >
            Filter by
    </button>
    </div>
    <button class="xs:hidden">
        Clear All
    </button>
</div>
