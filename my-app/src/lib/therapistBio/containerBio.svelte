<script>
    
    import LayoutBioLeft from "./layoutBioLeft.svelte";
    import LayoutBioRight from "./layoutBioRight.svelte";


</script>
<div class="bg-accent-green absolute z-20 md:hidden sm:hidden w-full h-[3.3125rem] items-center flex">
    <a href="/">
<div class="flex p-4 gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path d="M15.8307 10.5L4.16406 10.5" stroke="#203136" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.9974 16.3327L4.16406 10.4993L9.9974 4.66602" stroke="#203136" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    <h1>Go back</h1>
</div>
</a>
</div>
<div class="flex py-10 sm:px-[6.25rem] md:px-[13.75rem] xs:p-4 xs:gap-4 bg-background w-full sm:w-full md:w-screen overflow-x-hidden">
    <div class="flex flex-row justify-between xs:flex-col sm:flex-row md:flex-row gap-6 xs:gap-0 xs:gap-4 sm:w-max md:w-max">
        <LayoutBioLeft />
        <LayoutBioRight />
    </div>
    
</div>