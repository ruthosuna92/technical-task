<script>
    import SubMenuAccordion from "./subMenuAccordion.svelte";
    import YearsChildren from "./yearsChildren.svelte";
    let isOpen = false;

    let component = YearsChildren

</script>


<SubMenuAccordion name="Year of experience" component={component} />