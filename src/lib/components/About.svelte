<script lang="ts">
  import { marked } from 'marked';
  import { Container, Progress, SociaLinks, IntersectObserver } from '$lib/components';
  import { userInfo as store } from '$lib/stores/userInfo';
</script>

<section id="about" class="text-dark-600 dark:text-light-600 border-t border-neutral-300 dark:border-neutral-500">
  <!-- Header -->
  <div class="bg-light-400 dark:bg-dark-400">
    <Container class="py-16 text-center">
      <h1 class="text-3xl font-bold mb-2">About Me</h1>
      <h2 class="mt-1 text-sm font-mono text-neutral-500 dark:text-neutral-400">Me in nutshell</h2>
    </Container>
  </div>

  <!-- Content -->
  <Container class="md:px-12 py-12 lg:max-w-screen-lg" viewport="md">
    <div class="md:space-x-5 md:flex md:flex-row item-center md:-mx-4 flex flex-col-reverse justify-between text-left">
      <!-- About User -->
      <div class="font-typo max-w-xl mb-1">
        <h1 class="text-xl font-bold font-mono tracking-normal mt-8 md:text-2xl">
          “{$store.quote.content}”
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">- {$store.quote.author}</p>
        <p class="mb-8 font-light">The quote above is my favorite, it give me composure.</p>
        <div class="mb-8">
          {@html marked($store.about)}
        </div>
        <p class="mb-5 font-sans">My technical specialty including but not limited to</p>
        <IntersectObserver let:intersecting once class="space-y-4 mb-8">
          {#each $store.skills as skill}
            <Progress name={skill?.name} value={intersecting ? +skill?.value : 0} />
          {/each}
        </IntersectObserver>
      </div>

      <!-- Profile Picture -->
      <div class="flex-shrink-0 self-center lg:mt-12 lg:px-4 mb-10">
        <img
          src={$store.avatarUrl}
          alt="Profile"
          class="rounded-full object-cover mb-8 h-44 w-44 md:h-64 md:w-64 lg:h-72 lg:w-72"
        />
        <div class="flex justify-center mt-6">
          <div class="flex md:flex lg:flex space-x-4 font-medium sm:block">
            <SociaLinks />
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>
