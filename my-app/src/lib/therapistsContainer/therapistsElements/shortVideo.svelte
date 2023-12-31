<script>
    export let image;
    export let name;
    //boolean is for inluding the name or not
    export let boolean;
    //video is also a boolean, if we want include the play button or not
    export let video;
</script>

<div class="flex flex-col justify-center 
items-center gap-2.5 xs:gap-2 w-max">
<div class="relative">
    <img src={image} alt={name} class="rounded-full w-20 xs:w-14 h-20 xs:h-14"/>
    {#if video}
	
    <button class="flex w-8 xs:w-4 h-8 xs:h-4 p-2 xs:p-1 justify-center  items-center gap-2 xs:gap-1 shrink-0 bg-accent-green rounded-full border-4 xs:border-2 border-white absolute left-14 xs:left-10 top-14 xs:top-10">
        <svg class="w-12 xs:w-6 h-12 xs:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 12" fill="none">
            <path d="M10 6L0 12V0L10 6Z" fill="white"/>
          </svg>
        </button>
{:else}
	<span class="hidden"></span>
{/if}
</div>
{#if boolean}
    <p class="text-right text-base ">
        {name}
    </p>
{:else}
	<span class="hidden"></span>
{/if}
</div>