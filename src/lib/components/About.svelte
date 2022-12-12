<script lang="ts">
  import { Container } from '$lib/components';
  import { userInfo as store } from '$lib/stores/userInfo';
</script>

<section id="about" class="text-dark-600 dark:text-light-600 border-t border-neutral-300 dark:border-neutral-500">
  <div class="bg-light-400 dark:bg-dark-400">
    <Container class="py-16 text-center">
      <h1 class="text-3xl font-bold mb-2">About Me</h1>
      <h2 class="mt-1 text-sm font-mono text-neutral-500 dark:text-neutral-400">Me in nutshell</h2>
    </Container>
  </div>
  <Container class="md:px-12 py-12 lg:max-w-screen-lg" viewport="md">
    <div class="md:space-x-5 md:flex md:flex-row item-center md:-mx-4 flex flex-col-reverse justify-between text-left">
      <div class="font-typo max-w-xl mb-1">
        <h1 class="text-xl font-bold font-mono tracking-normal mt-8 md:text-2xl">
          “{$store.quote.content}”
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">- {$store.quote.author}</p>
        <p class="mb-8 font-light">The quote above is my favorite, it give me composure.</p>
        <div class="mb-8">
          {@html $store.about}
        </div>
        <p class="mb-5 font-sans">My technical specialty including but not limited to</p>
        <div class="space-y-4 mb-8">
          <!-- <Progress v-for="skill in data.skills" :key="skill?.name" :name="skill?.name" :value="skill?.value" /> -->
        </div>
      </div>
      <div class="flex-shrink-0 self-center lg:mt-12 lg:px-4 mb-10">
        <img
          src={$store.avatarUrl}
          alt="Profile"
          class="rounded-full object-cover mb-8 h-44 w-44 md:h-64 md:w-64 lg:h-72 lg:w-72"
        />
        <div class="flex justify-center mt-6">
          <div class="flex md:flex lg:flex space-x-4 font-medium sm:block">
            <!-- <SociaLink /> -->
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>
