<script lang="ts">
  import { PUBLIC_GITHUB_USERNAME as github } from '$env/static/public';

  const openGraph =
    'https://opengraph.githubassets.com/686cb582595c1a3ada3049d1938bc78e19636e08f75fc2ab30500e5af29ea012';

  export let url: string;
  export let name: string;
  export let image = '';
  export let language: string;
  export let description: string;
</script>

<div class="shadow-md rounded-lg dark:border border-neutral-800">
  <div class="relative">
    <a href={url} target="_BLANK" rel="noreferrer noopener">
      <div class="absolute top-0 h-full w-full" />
      <img class="rounded-t-lg" src={image || `${openGraph}/${github}/${name}`} alt={name} />
    </a>
  </div>
  <div
    class="p-4 text-sm font-mono min-h-[8rem] rounded-b-lg bg-light-400 text-gray-600 dark:bg-dark-400 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
  >
    <div class="flex items-center justify-between space-x-2 mb-4">
      <a
        href={url}
        target="_BLANK"
        rel="noreferrer noopener"
        class="font-bold hover:underline whitespace-nowrap text-ellipsis overflow-hidden"
        >{name}
      </a>
      <span class="cursor-default">{language}</span>
    </div>
    <div class="cursor-default">
      {description || 'No description available :('}
    </div>
  </div>
</div>
