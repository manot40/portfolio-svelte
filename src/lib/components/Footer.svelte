<script lang="ts">
  import { Container, SociaLinks } from '$lib/components';
  import { userInfo as store } from '$lib/stores/userInfo';

  const fullName = $store.fullname || '';
  const firstN = fullName.split(' ')[0].toUpperCase() || '';
  const lastN = fullName.split(' ')[fullName.split(' ').length - 1].toUpperCase() || '';
</script>

<div class="border-t border-neutral-300 bg-light-400 dark:border-neutral-600 dark:bg-dark-400">
  <Container class="py-16 space-y-6 text-center text-dark-600 dark:text-light-400">
    <div class="inline-flex text-xl">
      <h1 class="tracking-wide font-extrabold select-none">{firstN}</h1>
      &nbsp;
      <p class="tracking-wider select-none">{lastN}</p>
    </div>
    <SociaLinks />
    <h2 class="text-gray-400 dark:text-gray-400 text-sm">
      Totally <a href="https://github.com/manot40/portfolio-svelte" target="_BLANK" rel="noopener noreferrer"
        >not copyrighted</a
      >
      © Kevin Sandiho {new Date().getFullYear()}
    </h2>
  </Container>
</div>
