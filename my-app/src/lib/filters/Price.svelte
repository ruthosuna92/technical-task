<script>
    import SubMenuAccordion from "./subMenuAccordion.svelte";
    import PriceChildren from "./priceChildren.svelte";
    let component = PriceChildren
</script>

<SubMenuAccordion name="Price (£ GBP)" component={component} />