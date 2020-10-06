<style>
  main {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }
</style>

<script lang="ts">
  import { devices } from '../stores';

  const compareTime = (updateTime) => {
    const d1 = new Date(updateTime);
    const d2 = new Date();
    const timeDiff = d2.getTime() - d1.getTime();
    return timeDiff;
  }
</script>

<main>
  {#await $devices}
    <p>...waiting</p>
  {:then devices}
    {#each devices as { id, mac, status, temp, updatedAt }, i}
      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{mac}</strong>
                <br />
                {#if compareTime(updatedAt) > 10000}
                <span class="tag is-danger">Offline</span>
                {:else if status === 'Online'}
                  <span class="tag is-success">{status}</span>
                {:else}
                <span class="tag is-danger">{status}</span>
                {/if}
              </p>
            </div>
          </div>
          <div class="media-right">
            {#if compareTime(updatedAt) > 10000}
            <h1 class="title is-1">-- °C</h1>
            {:else if status === 'Online'}
                  <h1 class="title is-1">{temp} °C</h1>
                  {:else}
                  <h1 class="title is-1">-- °C</h1>
                {/if}
          </div>
        </article>
      </div>
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</main>
