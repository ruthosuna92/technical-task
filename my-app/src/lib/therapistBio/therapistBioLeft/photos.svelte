<script>
    import photo1 from "../../images/photo1.png"
    import photo2 from "../../images/photo2.png"
    import photo3 from "../../images/photo3.png"
    import photo4 from "../../images/photo4.png"

    let stringClassImg = "rounded-2xl w-full"
</script>

<div class="flex flex-col sm:flex-wrap xs:h-[12.5rem] p-8 xs:p-0 gap-6 xs:gap-4 w-max md:w-full  sm:bg-white md:bg-white rounded-2xl sm:border md:border sm:border-stroke-cards md:border-stroke-cards sm:shadow-[0_4px_4px_0px_rgba(0,0,0,0.05)] md:shadow-[0_4px_4px_0px_rgba(0,0,0,0.05)] xs:w-full">
    <p class="font-semibold sm:text-md md:text-md">Photos</p>
    <div class="flex gap-4 xs:gap-[0.60606rem] md:justify-between xs:overflow-x-auto">
<!-- svelte-ignore a11y-img-redundant-alt -->
<img class={stringClassImg} src={photo1} alt="photo 1"/>
<!-- svelte-ignore a11y-img-redundant-alt -->
<img class={stringClassImg} src={photo2} alt="photo 2"/>
<!-- svelte-ignore a11y-img-redundant-alt -->
<img class={stringClassImg} src={photo3} alt="photo 3"/>
<!-- svelte-ignore a11y-img-redundant-alt -->
<img class={stringClassImg} src={photo4} alt="photo 4"/>
</div>
</div>