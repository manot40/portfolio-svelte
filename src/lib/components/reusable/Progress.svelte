<script lang="ts">
  import { tweened } from 'svelte/motion';

  export let name: string;
  export let value: number;

  const width = tweened(0, {
    duration: 1000,
    easing: (t) => t * (2 - t)
  });

  $: {
    width.set(value);
  }
</script>

<div class="font-sans">
  <div class="flex justify-between mb-1">
    <span class="font-semibold text-sm">{name}</span>
    <span />
  </div>
  <div class="w-full bg-gray-300 rounded-full h-0.5 dark:bg-gray-700">
    <div class="bg-dark-400 dark:bg-blue-500 h-0.5 rounded-full" style="width: {$width}%" />
  </div>
</div>
