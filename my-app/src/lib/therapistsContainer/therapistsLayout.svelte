<script>
    import TherapistsSorter from "./therapistsElements/therapistsSorter.svelte";
    import ShortVideosContainer from "./therapistsElements/shortVideosContainer.svelte";
    import TherapistsCards from "./therapistsElements/therapistCard/therapistsCards.svelte";
    
</script>

<div class="flex flex-col gap-6 xs:gap-4 w-8/12 xs:w-full ">
    <TherapistsSorter/>
    <ShortVideosContainer/>
    <TherapistsCards />  
</div>