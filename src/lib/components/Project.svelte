<script lang="ts">
  import { Container, ProjectCard } from '$lib/components';

  export let repos: Repo[];

  let showAll = false;

  $: data = repos.slice(0, showAll ? repos.length : 9);
</script>

<section id="project" class="text-dark-600 dark:text-light-600">
  <!-- Header -->
  <div class="bg-light-400 dark:bg-dark-400">
    <Container class="py-16 text-center">
      <h1 class="text-3xl font-bold mb-2">Project</h1>
      <h2 class="mt-1 text-sm font-mono text-neutral-500 dark:text-neutral-400">
        It ain`t much, but it is honest work
      </h2>
    </Container>
  </div>

  <!-- Content -->
  <Container class="md:px-8 py-12 lg:max-w-screen-lg" viewport="md">
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {#each data as repo}
        <ProjectCard {...repo} />
      {/each}
    </div>
  </Container>

  {#if repos.length > 9}
    <Container
      class="mb-12 text-center font-mono text-gray-400 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
    >
      <button on:click={() => (showAll = !showAll)}>
        {showAll ? 'Show less' : 'Show more'}
      </button>
    </Container>
  {/if}
</section>
