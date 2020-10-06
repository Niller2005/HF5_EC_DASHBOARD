<script lang="ts">
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";

  import "bulma/css/bulma.css";
  import "@fortawesome/fontawesome-free/css/all.css";
</script>

<style>
</style>

<Router {routes} />
