<script>
	import Header from "../comp/Header.svelte";
    import "../app.css";
	import Footer from "../comp/Footer.svelte";
  import { page } from "$app/stores";
  </script>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
    <Header></Header>
  <slot />
    <Footer></Footer>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li><a class="font-bold {$page.route.id==='/'?'active':''}" href="/">Home</a></li>
        <div class="divider"></div>
        <li><a class="font-bold {$page.route.id==='/faq'?'active':''}" href="/faq">FAQ</a></li>
        <li><a class="font-bold {$page.route.id==='/risks'?'active':''}" href="/risks">Risks</a></li>
      </ul>
    </div>
  </div>
