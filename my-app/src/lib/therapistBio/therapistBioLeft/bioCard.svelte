<script>
    import GroupOfButtons from "../../filters/groupOfButtons.svelte";
    export let bio;
    export let therapyAreas;

    let therapyAreasArray = therapyAreas.map((therapyArea) => {
        return {
            name: therapyArea,
            text: therapyArea,
            isActive: false,
        };
    });
    let profile = [
        {
            name: "Female",
            text: "Female",
            isActive: false,
        },
        {
            name: "Cisgender",
            text: "Cisgender",
            isActive: false,
        },
        {
            name: "Atheist",
            text: "Atheist",
            isActive: false,
        },
        {
            name: "White",
            text: "White",
            isActive: false,
        },
    ];
    let typesOfTherapy = [
        {
            name: "Evidence-based therapy",
            text: "Evidence-based therapy",
            isActive: false,
        },
        {
            name: "Client-centered Therapy",
            text: "Client-centered Therapy",
            isActive: false,
        },
    ];
</script>

<div
    class="flex p-8 xs:p-4 flex-col items-start gap-8 xs:gap-4 rounded-2xl bg-white w-full border border-stroke-cards shadow-[0_4px_4px_0px_rgba(0,0,0,0.05)]"
>
    <div class="flex flex-col items-start gap-4">
        <p class="text-md font-semibold xs:text-base">Mi bio</p>
        <div class="flex flex-col items-start gap-6">
            <div class="">
                <p>Welcome to my therapy profile <br /> {bio}</p>
            </div>
            <div class="flex gap-2 text-accent-dark-blue">
                <a href="/#">Read more</a>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M18 9L12 15L6 9"
                        stroke="#425DB6"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
            <GroupOfButtons array={profile} button={false} hover={false} background={true}/>
        </div>
        <div class="w-full h-[0.0625rem] bg-stroke-cards"></div>
    </div>
    <div class="flex flex-col gap-8">
        <p class="font-semibold md:text-md sm:text-md">
            Specialities and expertise
        </p>
        <GroupOfButtons
            array={therapyAreasArray}
            button={false}
            hover={false}
            background={true}
        />
    </div>
    <div class="w-full h-[0.0625rem] bg-stroke-cards"></div>
    <div class="flex flex-col gap-8 w-full">
        <div class="flex xs:flex-col xs:items-start items-center gap-[0.625rem] justify-between">
            <p class="font-semibold md:text-md sm:text-md">Types of therapy</p>
            <div class="flex items-center gap-[0.625rem]">
                <svg class="xs:w-4 xs:h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                >
                    <path
                        d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
                        stroke="#8A8987"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M10 8.5L16 12.5L10 16.5V8.5Z"
                        fill="#8A8987"
                        stroke="#8A8987"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <p class="text-stroke-dark xs:text-sm">What is types of therapy?</p>
            </div>
        </div>
        <div class="xs:hidden">
            <GroupOfButtons array={typesOfTherapy} decoration={true} background={true}/>

        </div>
        <div class="sm:hidden md:hidden">
            <GroupOfButtons array={typesOfTherapy} decoration={true} />

        </div>
    </div>
</div>
