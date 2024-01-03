<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { allTherapists } from "../../../stores";
	import ContainerBio from "../../../lib/therapistBio/containerBio.svelte";
	import { therapistById } from "../../../stores";

	let therapists = $allTherapists
	let therapist = therapists && therapists.find((therapist) => therapist.id === data.content)
	therapistById.update((ther) => ther = therapist)
</script>
<div class="m-0 p-0 gap-0 flex max-w-max">
<ContainerBio />
</div>




