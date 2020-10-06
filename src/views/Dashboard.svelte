<script lang="ts">
  import { devices } from '../stores';
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  {#await $devices}
    <p>...waiting</p>
  {:then devices}
    <p>{JSON.stringify(devices)}</p>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</main>
