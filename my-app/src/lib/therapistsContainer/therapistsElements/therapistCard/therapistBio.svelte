<script>
    import ShortVideo from "../shortVideo.svelte";
    export let therapist;
    
</script>


<!-- Container of three div's (1. Avatar, Name, Experience, Location, Like button 2. Bio 3. TopAreas and ViewProfile Link) -->
<div
class="flex flex-col p-8 xs:p-4 xs:pb-0 gap-6 xs:gap-4 rounded-2xl border bg-white border-stroke-cards xs:border-white xs:border-0 w-full sm:shadow-[0_4px_4px_0px_rgba(0,0,0,0.03)] md:sm:shadow-[0_4px_4px_0px_rgba(0,0,0,0.03)] relative"
>
<!-- Container of two elements 1. div(Avatar, Name, Experience, Location, Languages) 2.svg(Like button)-->
<div class="flex justify-between gap-6 xs:gap-2">
    <!-- Container of two div's 1.(Avatar and Name for responsive) 2.(Name, Experience, Location ) -->
    <div
        class="flex flex-wrap justify-start items-start gap-6 sm:gap-4 xs:gap-4"
    >
        <div class="flex flex-row gap-4">
            <ShortVideo
                name={therapist.firstName}
                image={therapist.avatarUrl}
                boolean={false}
                video={true}
            />
            <p
                class="sm:hidden md:hidden text-1.5xl font-semibold text-primary-dark"
            >
                {therapist.firstName}
                {therapist.lastName}
            </p>
        </div>
        <!-- Container of one div (Name, Experience, Location)-->
        <div class="flex items-start gap-6 justify-between">
            <!-- Container of two elements 1.(Name and experience) 2.(Language and Location) -->
            <div
                class="flex flex-col justify-center items-start gap-2 xs:gap-1 relative"
            >
                <div>
                    <p
                        class="xs:hidden text-1.5xl font-semibold text-primary-dark"
                    >
                        {therapist.firstName}
                        {therapist.lastName}
                    </p>
                    <!-- Verifying if yearsOfExperience exists -->
                    {#if therapist.profile.yearsOfExperience !== null}
                        <div
                            class=" flex items-center gap-2 xs:gap-1.5"
                        >
                            <svg
                                class="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_1_809)">
                                    <path
                                        d="M18.3327 9.23336V10C18.3317 11.797 17.7498 13.5456 16.6738 14.9849C15.5978 16.4242 14.0854 17.4771 12.3621 17.9866C10.6389 18.4961 8.79707 18.4349 7.11141 17.8122C5.42575 17.1894 3.98656 16.0384 3.00848 14.5309C2.0304 13.0234 1.56584 11.2401 1.68408 9.44696C1.80232 7.65383 2.49702 5.94697 3.66458 4.58092C4.83214 3.21488 6.41 2.26285 8.16284 1.86682C9.91568 1.47079 11.7496 1.65198 13.391 2.38336"
                                        stroke="#203136"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M18.3333 3.33331L10 11.675L7.5 9.17498"
                                        stroke="#203136"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_809">
                                        <rect
                                            width="20"
                                            height="20"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p class="text-right text-base xs:text-sm">
                                <!-- Verifying if is year or years of experience -->
                                {therapist.profile
                                    .yearsOfExperience > 0
                                    ? `${therapist.profile.yearsOfExperience} years of experience`
                                    : `${therapist.profile.yearsOfExperience} year of experience`}
                            </p>
                        </div>
                    {:else}
                        <span class="hidden"></span>
                    {/if}
                </div>
                <div
                    class="flex items-center gap-4 sm:gap-2.5 xs:gap-2 text-stroke-dark xs:flex-row"
                >
                <div class="flex items-center gap-2 xs:gap-1.5">
                    {#if Object.keys(therapist.demographic).length > 0}
                    <svg
                            class="w-4 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 22"
                            fill="none"
                        >
                            <path
                                d="M17.5 9.33331C17.5 15.1666 10 20.1666 10 20.1666C10 20.1666 2.5 15.1666 2.5 9.33331C2.5 7.34419 3.29018 5.43653 4.6967 4.03001C6.10322 2.62349 8.01088 1.83331 10 1.83331C11.9891 1.83331 13.8968 2.62349 15.3033 4.03001C16.7098 5.43653 17.5 7.34419 17.5 9.33331Z"
                                fill="#8A8987"
                                stroke="#8A8987"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M10 11.8333C11.3807 11.8333 12.5 10.714 12.5 9.33331C12.5 7.9526 11.3807 6.83331 10 6.83331C8.61929 6.83331 7.5 7.9526 7.5 9.33331C7.5 10.714 8.61929 11.8333 10 11.8333Z"
                                fill="white"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <p class="xs:text-sm">
                            {therapist.demographic.location},
                            GMT -7
                        </p>

                        {/if}
                    </div>
                    <!-- Verifying if demographic has keys -->
                    {#if Object.keys(therapist.demographic).length > 0}
                        <div class="flex items-center gap-2">
                            <svg
                                class="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_1_820)">
                                    <path
                                        d="M9.99935 18.3334C14.6017 18.3334 18.3327 14.6024 18.3327 10C18.3327 5.39765 14.6017 1.66669 9.99935 1.66669C5.39698 1.66669 1.66602 5.39765 1.66602 10C1.66602 14.6024 5.39698 18.3334 9.99935 18.3334Z"
                                        stroke="#8A8987"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M1.66602 10H18.3327"
                                        stroke="#8A8987"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M9.99935 1.66669C12.0837 3.94865 13.2683 6.91005 13.3327 10C13.2683 13.09 12.0837 16.0514 9.99935 18.3334C7.91495 16.0514 6.73039 13.09 6.66602 10C6.73039 6.91005 7.91495 3.94865 9.99935 1.66669Z"
                                        stroke="#8A8987"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_820">
                                        <rect
                                            width="20"
                                            height="20"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span class="text-base w-full xs:text-sm">
                                <!-- Verifying if mainLanguage is an array or a String -->
                                {#if Array.isArray(therapist.demographic.mainLanguage)}
                                    {#each therapist.demographic.mainLanguage as lan}
                                        <p>{lan}</p>
                                    {/each}
                                {:else}
                                    {therapist.demographic
                                        .mainLanguage}
                                {/if}
                            </span>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
    <!-- Like button -->
    <svg
        class="flex justify-end w-8 xs:w-10 h-8 xs:h-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        fill="none"
    >
        <path
            d="M23.0978 5.51589C22.5375 4.95533 21.8722 4.51066 21.14 4.20728C20.4078 3.90389 19.6231 3.74774 18.8305 3.74774C18.0379 3.74774 17.2532 3.90389 16.521 4.20728C15.7888 4.51066 15.1235 4.95533 14.5632 5.51589L13.4004 6.67869L12.2376 5.51589C11.1059 4.38414 9.5709 3.74833 7.97037 3.74833C6.36983 3.74833 4.83485 4.38414 3.70311 5.51589C2.57136 6.64764 1.93555 8.18262 1.93555 9.78315C1.93555 11.3837 2.57136 12.9187 3.70311 14.0504L4.86591 15.2132L13.4004 23.7477L21.935 15.2132L23.0978 14.0504C23.6583 13.4901 24.103 12.8249 24.4064 12.0927C24.7098 11.3605 24.8659 10.5757 24.8659 9.78315C24.8659 8.99059 24.7098 8.2058 24.4064 7.47361C24.103 6.74142 23.6583 6.07618 23.0978 5.51589Z"
            stroke="#203136"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</div>
<!-- Bio -->
<div class=" w-74 xs:h-10 overflow-hidden">
    <p class="xs:hidden">{therapist.profile.bio}</p>
    <p class="sm:hidden md:hidden text-smb h-10 font-normal">
        {therapist.profile.bio}
    </p>
</div>
<!-- Container of topAreas and view profile link -->
<div class="flex gap-2 flex-wrap">
    <!-- Container of topAreas -->
    <div class="flex gap-2 flex-wrap">
        {#if therapist.profile.hasOwnProperty("topAreas")}
        <span
            class="flex py-1 px-4 xs:px-[0.75rem] justify-center items-center gap-[0.3125rem] rounded-full bg-accent-green-light xs:bg-stroke-cards font-medium text-align-right h-8 xs:h-[1.625rem] w-max xs:text-sm"
        >
            {therapist.profile.topAreas[0]}
        </span>
        <span
            class="flex py-1 px-4 xs:px-[0.75rem] justify-center items-center gap-[0.3125rem] rounded-full bg-accent-green-light xs:bg-stroke-cards font-medium text-align-right h-8 xs:h-[1.625rem] w-max xs:text-sm"
        >
            +{therapist.profile.topAreas.length}
        </span>
            
        {/if}
    </div>
    <!-- if topAreas exists View Profile link has px else it has no px -->
    <a class="flex py-0 {therapist.profile.hasOwnProperty("topAreas") ? "px-4" : "px-0"} xs:px-0 items-center gap-[0.3125rem] text-accent-dark-blue xs:text-smb" href="/#">
View profile
    </a>
</div>
</div>