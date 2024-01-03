<script>
import TherapistsLayout from "./therapistsContainer/therapistsLayout.svelte";
import HeadersContainerResponsive from "./headersContainerResponsive.svelte";
    import FiltersLayout from "./filters/filtersLayout.svelte";
    import SorterLayout from "./sorter/sorterLayout.svelte";
    
</script>

<div class="flex py-10 xs:py-2 px-[6.25rem] md:px-40 xs:p-4 bg-background xs:gap-2 flex-col">
 <HeadersContainerResponsive/>
 <div class="flex flex-row gap-6">
        <TherapistsLayout />
        <FiltersLayout/>
        <SorterLayout/>
    </div>
</div>