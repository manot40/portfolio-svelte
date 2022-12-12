<script lang="ts">
  import { marked } from 'marked';

  export let type: string;
  export let date: string;
  export let title: string;
  export let description: string;
</script>

<li class="mb-10 ml-6">
  <div
    class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-4 dark:bg-blue-800"
  >
    <div class="text-blue-500 dark:text-blue-200">
      <ion-icon name={type === 'education' ? 'book' : 'briefcase'} style="font-size: 12px" />
    </div>
  </div>
  <h3 class="mb-1 text-lg font-semibold text-dark-600 dark:text-[#d1e0ed]">
    {title}
  </h3>
  <time class="block mb-2 text-sm font-normal leading-none text-neutral-400">
    {date}
  </time>
  <div class="text-base font-normal text-gray-600 dark:text-gray-300">
    {@html marked(description)}
  </div>
</li>
