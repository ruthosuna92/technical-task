<script>
    import { allTherapists } from "../../../../stores";
    import TherapistCard from "../therapistCard/therapistCard.svelte";
    
    
    
</script>

{#each $allTherapists as therapist}
<TherapistCard therapist={therapist}/>
{/each}
