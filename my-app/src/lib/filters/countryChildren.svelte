<script>
    import GroupOfButtons from "./groupOfButtons.svelte";
    let countries = [
        {
            name: "UK",
            text: "🇬🇧 UK",
            isActive: false,
        },
        {
            name: "Spain",
            text: "🇪🇸 Spain",
            isActive: false,
        },
        {
            name: "USA",
            text: "🇺🇸 USA",
            isActive: false,
        },
        {
            name: "Australia",
            text: "🇦🇺 Australia",
            isActive: false,
        },
        {
            name: "Canada",
            text: "🇨🇦 Canada",
            isActive: false,
        },
    ];
</script>
<GroupOfButtons group="location" array={countries} hover={true} button={true}/>
