<script setup lang="ts">
  import { spring } from 'svelte/motion';

  let className = '';
  export { className as class };

  const opt = { stiffness: 0.15, damping: 0.25 };
  const scale = spring(1, opt);
  const rotate = spring(0, opt);
</script>

<div
  class="cursor-pointer {className}"
  on:mouseleave={() => (scale.set(1), rotate.set(0))}
  on:mouseenter={() => (scale.set(1.2), rotate.set(10))}
  style="transform: scale({$scale}) rotate({$rotate}deg)"
>
  <slot />
</div>
