<script>
    import { menuFilter } from "../../stores";

    const handleMenu = () => {
        menuFilter.update((bool) => bool = false)
    }
</script>

<div
    class="sm:hidden md:hidden w-full bg-accent-green flex py-[0.875rem] px-4 justify-between"
>
    <button class="flex justify-center items-center gap-[0.62rem]" on:click={handleMenu}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                d="M15.8346 9.99988L4.16797 9.99988"
                stroke="#203136"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10.0013 15.8332L4.16797 9.9999L10.0013 4.16656"
                stroke="#203136"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
        <p class="text-base">Filters</p>
    </button>
    <button class="text-smb"> Reset all </button>
</div>
