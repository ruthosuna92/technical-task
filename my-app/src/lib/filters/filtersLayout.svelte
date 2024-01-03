<script>
    import HeaderFilter from "./headerFilter.svelte";
    import AppointmentType from "./appointmentType.svelte";
    import Price from "./Price.svelte";
    import Years from "./years.svelte";
    import Sex from "./sex.svelte";
    import Help from "./help.svelte";
    import TherapistType from "./therapistType.svelte";
    import Country from "./country.svelte";
    import Language from "./language.svelte";
    import {menuFilter} from "../../stores"
    import HeaderFilterResponsive from "./headerFilterResponsive.svelte";
</script>

<div
    class="{ $menuFilter ? "" : "xs:hidden"} xs:fixed xs:h-screen xs:w-full xs:top-0 xs:left-0 flex flex-col gap-6 xs:gap-0 overflow-hidden w-full"
>
<!-- This is the Header of Filters component when is not responsive -->
    <HeaderFilter />
    <HeaderFilterResponsive/>
    <div
        class="bg-white flex p-6 flex-col gap-8 rounded-2xl border xs:border-0 xs:rounded-none sm:border-stroke-cards md:border-stroke-cards w-auto xs:h-full overflow-auto"
    >
        <AppointmentType />
        <Price />
        <Years />
        <Sex />
        <Help />
        <TherapistType />
        <Country />
        <Language />
    </div>
</div>
