<script>
   import AppointmentChildren from "./appointmentChildren.svelte";
   import SubMenuAccordion from "./subMenuAccordion.svelte";

   let component = AppointmentChildren

</script>

<SubMenuAccordion name="Appointment type" component={component}/>
