<script>
    import PriceSection from "./therapistBioRight/priceSection.svelte";
    import { therapistById } from "../../stores";
    let { price} = $therapistById
</script>
<div class="w-full self-stretch">
    <PriceSection price={price} />
</div>