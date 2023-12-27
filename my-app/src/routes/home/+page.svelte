
<script>
    import therapists from "../../data/therapists.json"
    let therapistsData = therapists



</script>



<div>
    {#each therapistsData as therapist (therapist.id) }
    <div>
        <p>ID: {therapist.id}</p>
      <p>Name: {therapist.firstName}</p>
    </div>
  {/each}
</div>

