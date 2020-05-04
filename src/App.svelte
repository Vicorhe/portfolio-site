<script>
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
  import Header from "./components/Header.svelte";
</script>

<div>
  <Header />
  <div><Router {routes} /></div>
  
</div>
