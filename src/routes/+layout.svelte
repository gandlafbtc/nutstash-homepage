<script>
	import Header from "../comp/Header.svelte";
    import "../app.css";
	import Footer from "../comp/Footer.svelte";
  import { page } from "$app/stores";
  </script>

    <Header></Header>
  <slot />
    <Footer></Footer>
