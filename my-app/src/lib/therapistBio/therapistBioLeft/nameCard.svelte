<script>
    export let firstName;
    export let lastName;
    export let yearsOfExperience;
    export let location;
    export let mainLanguage;
    export let avatarUrl;
</script>

<!-- flex flex-col p-8 gap-8 bg-white border border-stroke-cards rounded-2xl shadow-[0_4px_4px_0px_rgba(0,0,0,0.05)] -->
<div
    class="flex self-stretch p-8 xs:p-0 flex-col gap-8 xs:gap-2 rounded-2xl border xs:border-0 border-stroke-cards bg-white xs:bg-background sm:shadow-[0_4px_4px_0px_rgba(0,0,0,0.05)] md:shadow-[0_4px_4px_0px_rgba(0,0,0,0.05)] md:w-max md:justify-between"
>
    <div
        class="flex flex-wrap  md:flex-row {!yearsOfExperience
            ? 'flex-col'
            : ''} justify-center sm:justify-between md:justify-between items-center gap-6 md:gap-56  xs:gap-2 self-stretch"
    >
        <div
            class="flex flex-row xs:flex-col items-center justify-start gap-6 xs:gap-2"
        >
            <img
                class="w-20 h-20 rounded-full xs:z-30 xs:border xs:border-4 xs:border-background mt-[-0.3rem]"
                src={avatarUrl}
                alt={firstName + " " + lastName}
            />
            <h1 class="text-2xl font-semibold xs:text-md items-center">
                {firstName}
                {lastName}
            </h1>
            {#if yearsOfExperience}
                <div class="flex gap-2 sm:hidden md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                    >
                        <path
                            d="M14.6654 7.88674V8.50007C14.6645 9.93769 14.199 11.3365 13.3383 12.488C12.4775 13.6394 11.2676 14.4817 9.88894 14.8893C8.51032 15.297 7.03687 15.248 5.68835 14.7498C4.33982 14.2516 3.18847 13.3308 2.406 12.1248C1.62354 10.9188 1.25189 9.49212 1.34648 8.05762C1.44107 6.62312 1.99684 5.25762 2.93088 4.16479C3.86493 3.07195 5.12722 2.31033 6.52949 1.9935C7.93176 1.67668 9.39888 1.82163 10.712 2.40674"
                            stroke="#203136"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M14.6667 3.16667L8 9.84001L6 7.84001"
                            stroke="#203136"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <h1 class="sm:hidden md:hidden text-smb">
                        {yearsOfExperience} year of experience
                    </h1>
                </div>
            {/if}
        </div>
        <div class="flex gap-6 items-center justify-center">
            <div
                class="flex h-[2.625rem] xs:h-min md:gap-2 sm:gap-2 items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M20 6L9 17L4 12"
                        stroke="#425DB6"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <p class="text-accent-dark-blue xs:text-sm xs:items-start">
                    verified by emote Care
                </p>
            </div>
            <button
                class="xs:hidden flex p-4 justify-center items-center gap-[0.48075rem] rounded-full border border-stroke-medium shadow-[0_3.077px_3.077px_0px_rgba(0,0,0,0.05)]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                >
                    <path
                        d="M18.7577 2.41452C18.3094 1.96607 17.7772 1.61034 17.1915 1.36763C16.6057 1.12492 15.9779 1 15.3438 1C14.7098 1 14.082 1.12492 13.4962 1.36763C12.9105 1.61034 12.3783 1.96607 11.93 2.41452L10.9998 3.34476L10.0695 2.41452C9.16415 1.50912 7.93617 1.00047 6.65574 1.00047C5.37531 1.00047 4.14733 1.50912 3.24193 2.41452C2.33653 3.31992 1.82788 4.5479 1.82788 5.82833C1.82788 7.10875 2.33653 8.33674 3.24193 9.24214L4.17217 10.1724L10.9998 17L17.8274 10.1724L18.7577 9.24214C19.2061 8.79391 19.5618 8.26171 19.8045 7.67596C20.0472 7.0902 20.1722 6.46237 20.1722 5.82833C20.1722 5.19428 20.0472 4.56645 19.8045 3.9807C19.5618 3.39494 19.2061 2.86275 18.7577 2.41452Z"
                        stroke="#203136"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
    </div>
    
    <div
        class="flex items-center gap-16 xs:justify-center sm:justify-between md:justify-between xs:gap-0"
    >
        <div class="flex flex-col justify-center items-start gap-2 xs:gap-0">
            {#if yearsOfExperience}
                <div class="flex gap-2 xs:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                    >
                        <path
                            d="M14.6654 7.88674V8.50007C14.6645 9.93769 14.199 11.3365 13.3383 12.488C12.4775 13.6394 11.2676 14.4817 9.88894 14.8893C8.51032 15.297 7.03687 15.248 5.68835 14.7498C4.33982 14.2516 3.18847 13.3308 2.406 12.1248C1.62354 10.9188 1.25189 9.49212 1.34648 8.05762C1.44107 6.62312 1.99684 5.25762 2.93088 4.16479C3.86493 3.07195 5.12722 2.31033 6.52949 1.9935C7.93176 1.67668 9.39888 1.82163 10.712 2.40674"
                            stroke="#203136"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M14.6667 3.16667L8 9.84001L6 7.84001"
                            stroke="#203136"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <h1 class="xs:hidden text-smb">
                        {yearsOfExperience} year of experience
                    </h1>
                </div>
            {/if}
            {#if location || mainLanguage}
                <div
                    class="flex items-center gap-4 xs:text-sm text-stroke-dark text-base"
                >
                    {#if location}
                        <div class="flex flex-row text-base items-center gap-2">
                            <svg
                                class=""
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="16"
                                viewBox="0 0 15 16"
                                fill="none"
                            >
                                <path
                                    d="M13.125 6.75C13.125 11.125 7.5 14.875 7.5 14.875C7.5 14.875 1.875 11.125 1.875 6.75C1.875 5.25816 2.46763 3.82742 3.52252 2.77252C4.57742 1.71763 6.00816 1.125 7.5 1.125C8.99184 1.125 10.4226 1.71763 11.4775 2.77252C12.5324 3.82742 13.125 5.25816 13.125 6.75Z"
                                    fill="#8A8987"
                                    stroke="#8A8987"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7.5 8.625C8.53553 8.625 9.375 7.78553 9.375 6.75C9.375 5.71447 8.53553 4.875 7.5 4.875C6.46447 4.875 5.625 5.71447 5.625 6.75C5.625 7.78553 6.46447 8.625 7.5 8.625Z"
                                    fill="white"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            <h1 class="flex items-center xs:text-sm">
                                {location}, GMT -7
                            </h1>
                        </div>
                    {/if}
                    {#if mainLanguage}
                        <div class="flex items-center flex-row gap-2 text-base">
                            <svg
                                class="items-center"
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="16"
                                viewBox="0 0 15 16"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_1_1404)">
                                    <path
                                        d="M7.5 14.25C10.9518 14.25 13.75 11.4518 13.75 8C13.75 4.54822 10.9518 1.75 7.5 1.75C4.04822 1.75 1.25 4.54822 1.25 8C1.25 11.4518 4.04822 14.25 7.5 14.25Z"
                                        stroke="#8A8987"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M1.25 8H13.75"
                                        stroke="#8A8987"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M7.5 1.75C9.0633 3.46147 9.95172 5.68252 10 8C9.95172 10.3175 9.0633 12.5385 7.5 14.25C5.9367 12.5385 5.04828 10.3175 5 8C5.04828 5.68252 5.9367 3.46147 7.5 1.75Z"
                                        stroke="#8A8987"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1404">
                                        <rect
                                            width="15"
                                            height="15"
                                            fill="white"
                                            transform="translate(0 0.5)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            {#if Array.isArray(mainLanguage)}
                                <h1 class="flex xs:text-sm">
                                    {#each mainLanguage as language}
                                        {language}
                                    {/each}
                                </h1>
                            {:else}
                                <h1>{mainLanguage}</h1>
                            {/if}
                        </div>
                    {/if}
                </div>
            {/if}
        </div>
        <div class="flex items-center gap-2 xs:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                    stroke="#203136"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <p>Ask a question</p>
        </div>
    </div>
    <div
        class="sm:hidden md:hidden flex justify-center items-center gap-4 text-smb"
    >
        <button
            class="flex h-10 py-2 px-4 justify-between items-center gap-1 rounded-full border border-stroke-medium bg-white shadow-[0_4px_4px_0px_rgba(0,0,0,0.03)]"
        >
            <p class="text-[0.8rem]">Book a free 15-min session</p>
            <svg
                class="w-[1.25rem] h-[1.25rem]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
            >
                <path
                    d="M4.16536 10.0002L15.832 10.0002"
                    stroke="#203136"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M9.9987 4.16692L15.832 10.0003L9.9987 15.8336"
                    stroke="#203136"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
        <button
            class=" sm:hidden md:hidden bg-white flex p-[0.83331rem] justify-center items-center gap-[0.4rem] rounded-full border border-stroke-medium shadow-[0_2.564px_2.564px_0px_rgba(0,0,0,0.05)]"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
            >
                <path
                    d="M18.7577 2.41452C18.3094 1.96607 17.7772 1.61034 17.1915 1.36763C16.6057 1.12492 15.9779 1 15.3438 1C14.7098 1 14.082 1.12492 13.4962 1.36763C12.9105 1.61034 12.3783 1.96607 11.93 2.41452L10.9998 3.34476L10.0695 2.41452C9.16415 1.50912 7.93617 1.00047 6.65574 1.00047C5.37531 1.00047 4.14733 1.50912 3.24193 2.41452C2.33653 3.31992 1.82788 4.5479 1.82788 5.82833C1.82788 7.10875 2.33653 8.33674 3.24193 9.24214L4.17217 10.1724L10.9998 17L17.8274 10.1724L18.7577 9.24214C19.2061 8.79391 19.5618 8.26171 19.8045 7.67596C20.0472 7.0902 20.1722 6.46237 20.1722 5.82833C20.1722 5.19428 20.0472 4.56645 19.8045 3.9807C19.5618 3.39494 19.2061 2.86275 18.7577 2.41452Z"
                    stroke="#203136"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
    </div>
</div>
