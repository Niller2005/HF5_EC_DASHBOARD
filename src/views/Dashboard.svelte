<style>
  main {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }
</style>

<script lang="ts">
  import { devices } from '../stores';
</script>

<main>
  {#await $devices}
    <p>...waiting</p>
  {:then devices}
    {#each devices as { id, mac, status, temp }, i}
      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{mac}</strong>
                <br />
                {#if status === 'Online'}
                  <span class="tag is-success">{status}</span>
                {:else}<span class="tag is-danger">{status}</span>{/if}
              </p>
            </div>
          </div>
          <div class="media-right">
            <h1 class="title is-1">{temp} °C</h1>
          </div>
        </article>
      </div>
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</main>
