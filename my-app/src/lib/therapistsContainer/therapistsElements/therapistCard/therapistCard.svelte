<script>
    import TherapistBio from "./therapistBio.svelte";
    import PriceAvailableBook from "./priceAvailableBook.svelte"
    export let therapist;
    let price = Math.floor(Math.random() * 200)
</script>

<!-- Card container with two div's 1.(Avatar, Name, Experience, Location, Like button, Bio, TopAreas and ViewProfile Link) and 2.(Price, Next Availble, Book now button) -->
<div
    class="flex xs:flex-col gap-[-0.0625rem] self-stretch xs:bg-white xs:rounded-2xl xs:border xs:border-stroke-cards"
>
    <TherapistBio therapist={therapist}/>
    <PriceAvailableBook price={therapist.price}/>
    
</div>
