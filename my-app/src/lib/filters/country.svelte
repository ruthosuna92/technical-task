<script>
    import SubMenuAccordion from "./subMenuAccordion.svelte";
    import CountryChildren from "./countryChildren.svelte";
    let component = CountryChildren
</script>
<SubMenuAccordion name="Country of residence" component={component} />