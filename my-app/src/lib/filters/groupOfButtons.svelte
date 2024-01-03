<script>
    //Component for groups of buttons
    import { allTherapists, allTherapistsBackUp } from "../../stores";
    export let array;
    export let button;
    export let hover;
    export let background;
    export let decoration;
    export let group;

    let therapists = $allTherapists;
    let backUp = $allTherapistsBackUp;
    const filters = {
    mainLanguage: [],
    location: [],
};

const handleActive = (event) => {
    const { id, name } = event.target;

    array = array.map((element) => {
        if (element.name === id) {
            return { ...element, isActive: !element.isActive };
        }
        return element;
    });

    if (name === "mainLanguage" || name === "location") {
        toggleFilter(id, name);

        therapists = backUp.filter((ther) => {
            const mainLanguageFilter = checkFilter("mainLanguage", ther.demographic.mainLanguage);
            const locationFilter = checkFilter("location", ther.demographic.location);

            return mainLanguageFilter && locationFilter;
        });

        allTherapists.set(therapists);
    }
};

const toggleFilter = (value, type) => {
    const filterIndex = filters[type].indexOf(value);
    if (filterIndex === -1) {
        filters[type].push(value);
    } else {
        filters[type].splice(filterIndex, 1);
    }
};

const checkFilter = (type, therapistProperty) => {
    return filters[type].length === 0 || (therapistProperty && filters[type].some(filter => therapistProperty.includes(filter)));
};
</script>

<div
    class="flex flex-wrap flex-start gap-y-4 {!button
        ? 'gap-x-4 xs:gap-x-2'
        : 'gap-x-2'} "
>
    {#if button}
        {#each array as { text, name, isActive } (name)}
            <button
                id={name}
                name={group}
                on:click={handleActive}
                class="flex py-1 xs:py-[0.125rem] px-[1.25rem] xs:py-4 justify-center items-center rounded-2xl border border-stroke-cards {isActive
                    ? 'bg-accent-green text-black'
                    : ''}
                {hover ? 'hover:bg-accent-green hover:text-black' : ''}
                "
            >
                {text}
            </button>
        {/each}
    {:else}
        {#each array as { text, name } (name)}
            <div
                class="flex py-1 xs:py-[0.125rem] px-[1.25rem] xs:py-4 justify-center items-center rounded-2xl {background
                    ? 'bg-stroke-cards border border-stroke-cards'
                    : ''} {decoration ? 'underline' : ''} xs:text-sm
            {hover ? 'hover:bg-accent-green hover:text-black' : ''}
            "
            >
                {text}
            </div>
        {/each}
    {/if}
</div>
