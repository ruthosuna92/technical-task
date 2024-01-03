<script>
    export let name
    export let component
    let isOpen = true;
    const handleSubMenu = () => {
        isOpen = !isOpen;
    }
</script>

<div class="flex flex-col gap-0">
    <button class="flex justify-between" on:click={handleSubMenu}>
        <h1 class="font-semibold text-base">{name}</h1>
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
            ? 'transition-max-h ease-out delay-150 translate-y-0 duration-300 max-h-full mt-4 '
            : 'max-h-0 scale-y-0 translate-y-[-100%] ease-out delay-150 duration-300 '} gap-4 flex flex-col "
    >
    <svelte:component this={component} />
    </div>
</div>
