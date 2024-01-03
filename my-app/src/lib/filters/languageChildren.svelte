<script>
    import GroupOfButtons from "./groupOfButtons.svelte";
    let languages = [
        {
            name: "English",
            text: "English",
            isActive: false,
        },
        {
            name: "Mandarin",
            text: "Mandarin",
            isActive: false,
        },
        {
            name: "French",
            text: "French",
            isActive: false,
        },
        {
            name: "Italian",
            text: "Italian",
            isActive: false,
        },
        {
            name: "Punjabi",
            text: "Punjabi",
            isActive: false,
        },
        {
            name: "Russian",
            text: "Russian",
            isActive: false,
        },
        {
            name: "Spanish",
            text: "Spanish",
            isActive: false,
        },
        {
            name: "German",
            text: "German",
            isActive: false,
        },
    ]
</script>

<GroupOfButtons group="mainLanguage" array={languages} button={true} hover={true}/>