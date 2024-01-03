<script>
    import RatingCircle from "./ratingCircle.svelte";
let circles = [
    {
        quantity: "500+",
        name: "Heartfelt Harmony",
        color: "accent-green",

    },
    {
        quantity: "10",
        name: "Empathy Explorer",
        color: "accent-blue-brand"

    },
    {
        quantity: "100",
        name: "Soulful Connection",
        color: "accent-orange-brand"
    },
    {
        quantity: "250",
        name: "Inspiration Instigator",
        color: "accent-dark-blue"
    },
    {
        quantity: "500+",
        name: "Caring Catalyst",
        color: "accent-green"
    },
    {
        quantity: "10",
        name: "Mindful Maestro",
        color: "accent-blue-brand"
    },
    {
        quantity: "100",
        name: "Healing Artisan",
        color: "accent-orange-brand"
    },
    {
        quantity: "250",
        name: "Joyful Guidepost",
        color: "accent-dark-blue"
    },
    {
        quantity: "500+",
        name: "Gratitude Guru",
        color: "accent-green"
    },
    {
        quantity: "10",
        name: "Resilience Maestro",
        color: "accent-blue-brand"
    },
    {
        quantity: "100",
        name: "Mindful Muse",
        color: "accent-orange-brand"
    },
    {
        quantity: "250",
        name: "Soulful Symphony",
        color: "accent-dark-blue"
    },
    {
        quantity: "500+",
        name: "Vulnerability Virtuoso",
        color: "accent-green"
    },
    {
        quantity: "10",
        name: "Mind-Map Maestro",
        color: "accent-blue-brand"
    },
    {
        quantity: "100",
        name: "Energetic Empath",
        color: "accent-orange-brand"
    },
    {
        quantity: "250",
        name: "Authenticity Architect",
        color: "accent-dark-blue"
    },
    
]
</script>

<!-- <div class=" p-8 gap-6 items-start bg-white border border-stroke-cards rounded-2xl shadow-[0_4px_4px_0px_rgba(0,0,0,0.05)]">
    <div>
        Ratings
    </div> -->
    <div class="grid justify-start gap-4 bg-white border border-stroke-cards rounded-2xl shadow-[0_4px_4px_0px_rgba(0,0,0,0.05)] xs:h-[12rem] xs:overflow-y-auto ">
        
        <div class="px-6 mt-6">
        Ratings
    </div>
<div class="grid grid-cols-4 justify-center">
    {#each circles as {quantity, name, color}}
        
    <RatingCircle quantity={quantity} name={name} color={color} />
    {/each}
</div>
</div>
<!-- </div> -->