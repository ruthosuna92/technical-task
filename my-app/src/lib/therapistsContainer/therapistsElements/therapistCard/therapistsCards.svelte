<script>
    import therapistsJSON from "../../../../data/therapists.json"
    import TherapistCard from "../therapistCard/therapistCard.svelte";

    let therapists = therapistsJSON
</script>

{#each therapists as therapist}
<TherapistCard therapist={therapist}/>
{/each}
