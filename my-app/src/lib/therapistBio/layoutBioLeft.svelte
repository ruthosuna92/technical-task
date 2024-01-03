<script>
    import { therapistById } from "../../stores";
    import BioCard from "./therapistBioLeft/bioCard.svelte";
    import ClientFocus from "./therapistBioLeft/clientFocus.svelte";
    import MetricsGroup from "./therapistBioLeft/metricsGroup.svelte";
    import NameCard from "./therapistBioLeft/nameCard.svelte";
    import Photos from "./therapistBioLeft/photos.svelte";
    import Rates from "./therapistBioLeft/rates.svelte";
    import Ratings from "./therapistBioLeft/ratings.svelte";


    let { firstName, lastName, avatarUrl, profile, demographic, price } =
        $therapistById;

    let {yearsOfExperience, bio, therapyAreas} = profile;
    let { location, mainLanguage } = demographic;
</script>

<div class="flex flex-col sm:w-full md:w-full sm:items-center md:items-center gap-6 xs:gap-4">
<NameCard firstName={firstName}
lastName={lastName}
yearsOfExperience={yearsOfExperience}
location={location}
mainLanguage={mainLanguage}
avatarUrl={avatarUrl} />
<BioCard therapyAreas={therapyAreas} bio={bio} />
<MetricsGroup />
<Rates price={price} />
<ClientFocus />
<Photos />
<Ratings />
</div>

