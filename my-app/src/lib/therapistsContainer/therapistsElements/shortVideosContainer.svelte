<script>
    import ShortVideo from "./shortVideo.svelte";

    //Array of random avatars and names
    let therapistProfiles = [
        {
            name: "Karl P",
            image: "https://randomuser.me/api/portraits/men/44.jpg",
        },
        {
            name: "Jaclyn E",
            image: "https://randomuser.me/api/portraits/women/33.jpg",
        },
        {
            name: "Viola D",
            image: "https://randomuser.me/api/portraits/women/64.jpg",
        },
        {
            name: "Carter H",
            image: "https://randomuser.me/api/portraits/men/90.jpg",
        },
        {
            name: "Alan S",
            image: "https://randomuser.me/api/portraits/men/84.jpg",
        },
        {
            name: "Dixie B",
            image: "https://randomuser.me/api/portraits/women/8.jpg",
        },
        {
            name: "Boone K",
            image: "https://randomuser.me/api/portraits/men/9.jpg",
        },
        {
            name: "Fred A",
            image: "https://randomuser.me/api/portraits/men/18.jpg",
        },
        {
            name: "Monday A",
            image: "https://randomuser.me/api/portraits/men/86.jpg",
        },
        {
            name: "Brooke B",
            image: "https://randomuser.me/api/portraits/women/42.jpg",
        },
        {
            name: "Regina F",
            image: "https://randomuser.me/api/portraits/women/23.jpg",
        },
        {
            name: "Sherie M",
            image: "https://randomuser.me/api/portraits/women/82.jpg",
        },
        {
            name: "Colleen N",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Brenda B",
            image: "https://randomuser.me/api/portraits/women/81.jpg",
        },
        {
            name: "Conway M",
            image: "https://randomuser.me/api/portraits/men/15.jpg",
        },
        {
            name: "Ariel H",
            image: "https://randomuser.me/api/portraits/men/28.jpg",
        },
    ]

    //for scrolling when is hover or not
    let isHovered = false
    //for render the back button or not
    let back = false

    const handleMouse = (event) => {
        isHovered = true
        back = true
        const container = event.currentTarget.parentNode.parentNode;

        const scrollStep = () => {
            if (!isHovered) {
                return;
            }
            container.scrollLeft += 5;
            requestAnimationFrame(scrollStep);
        }
        requestAnimationFrame(scrollStep);
    }

    const handleMouseBack = (event) => {
        isHovered = true;
        const container = event.currentTarget.parentNode.parentNode;

        const scrollStep = () => {
            if(container.scrollLeft <= 0){
                back = false
            }
            if (!isHovered || container.scrollLeft <= 1) {
                return;
            }
            
            container.scrollLeft -= 5;
            requestAnimationFrame(scrollStep);
        };
        requestAnimationFrame(scrollStep);
    }
    const handleMouseLeave = () => {
        isHovered = false;
    }
</script>

<div
    class="bg-white xs:bg-accent-green-light flex w-full p-8 xs:p-0 flex-col items-start gap-4 rounded-2xl border xs:border-0 xs:shadow-[0_0px_0px_0px_rgba(0,0,0,0)] shadow-[0_4px_4px_0px_rgba(0,0,0,0.05)] border-stroke-cards overflow-hidden xs:overflow-x-auto relative"
>
    <p class="sticky text-base font-semibold">30 second introduction videos</p>
    <div class="flex flex-row xs:gap-4">
        <div class="hidden sticky"></div>
        <button
        on:focus={handleMouseBack}
        on:mouseenter={handleMouseBack}
        on:mouseleave={handleMouseLeave}
        class="{back ? "" : "hidden"}  xs:hidden bg-white bg-opacity-70 rounded-lg p-1 items-center gap-0 sticky z-10 h-min w-min top-0 left-0 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] border-stroke-cards backdrop-blur-sm"
    >
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
>
    <path
        d="M15 6L9 12L15 18"
        stroke="#203136"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>
    </button>
    
        
        <div class=" flex flex-row gap-8 xs:gap-4">
            <div
                class="flex flex-col justify-center
items-center gap-2.5 w-max"
            >
                <button
                    class="relative bg-accent-green rounded-full w-20 xs:w-14 h-20 xs:h-14 flex justify-center items-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M23.0002 3.99997V9.99997H17.0002"
                            stroke="#203136"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M20.4899 15C19.8399 16.8399 18.6095 18.4187 16.9841 19.4985C15.3587 20.5783 13.4264 21.1006 11.4783 20.9866C9.53029 20.8726 7.67206 20.1286 6.18367 18.8667C4.69527 17.6047 3.65733 15.8932 3.22628 13.9901C2.79522 12.0869 2.99439 10.0952 3.79377 8.31508C4.59316 6.53496 5.94945 5.06288 7.65826 4.12065C9.36708 3.17843 11.3358 2.81711 13.2679 3.09116C15.1999 3.3652 16.9905 4.25975 18.3699 5.64001L22.9999 10"
                            stroke="#203136"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
                <p class="text-right text-base">Refresh</p>
            </div>
            {#each therapistProfiles as profile}
                <ShortVideo
                    name={profile.name}
                    image={profile.image}
                    boolean={true}
                    video={true}
                />
            {/each}
        </div>
        <button
            on:focus={handleMouse}
            on:mouseenter={handleMouse}
            on:mouseleave={handleMouseLeave}
            class=" xs:hidden bg-white bg-opacity-70 rounded-lg inline-flex p-1 flex-col justify-end items-center gap-2.5 sticky h-min right-0 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] border-stroke-cards backdrop-blur-sm"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M9 6L15 12L9 18"
                    stroke="#203136"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
        <div class="hidden sticky"></div>
    </div>
</div>
