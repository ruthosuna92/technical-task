<script>
    import "../app.css";
    import Navbar from "$lib/navbar.svelte";
    import Footer from "../lib/footer.svelte";
  </script>
  <div class="font-custom bg-white">

    <Navbar/>
      <slot />
    
   <Footer/>
  </div>