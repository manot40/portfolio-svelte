<script lang="ts">
  import { Container, Timeline } from '$lib/components';
  import { userInfo as store } from '$lib/stores/userInfo';
</script>

<section id="experience" class="text-dark-600 dark:text-light-600">
  <!-- Header -->
  <div class="bg-light-400 dark:bg-dark-400">
    <Container class="py-16 text-center">
      <h1 class="text-3xl font-bold mb-2">Experience</h1>
      <h2 class="mt-1 text-sm font-mono text-neutral-500 dark:text-neutral-400">How far I have joined society</h2>
    </Container>
  </div>

  <!-- Content -->
  <Container class="py-24 px-4 md:px-8" viewport="full">
    <div class="grid gap-4 xl:grid-cols-3 lg:grid-cols-2">
      <div class="p-12 bg-light-400 dark:bg-dark-400 shadow-sm rounded-xl">
        <h2 class="text-2xl font-bold mb-10 underline underline-offset-8">Careers</h2>
        <Timeline.Wrapper>
          {#each $store.experiences.filter(({ type }) => type === 'job') as exp}
            <Timeline.Content {...exp} />
          {/each}
        </Timeline.Wrapper>
      </div>
      <div class="p-12 bg-light-400 dark:bg-dark-400 shadow-sm rounded-xl">
        <h2 class="text-2xl font-bold mb-10 underline underline-offset-8">Education</h2>
        <Timeline.Wrapper>
          {#each $store.experiences.filter(({ type }) => type === 'education') as exp}
            <Timeline.Content {...exp} />
          {/each}
        </Timeline.Wrapper>
      </div>
      <div class="p-12 bg-light-400 dark:bg-dark-400 shadow-sm rounded-xl lg:col-span-2 xl:col-auto">
        <h2 class="text-2xl font-bold mb-10 underline underline-offset-8">Certification</h2>
        <div class="h-64 xl:h-full flex justify-center items-center">
          <p class="text-sm text-gray-400">I don&apos;t have any certification yet.</p>
        </div>
      </div>
    </div>
  </Container>
</section>
