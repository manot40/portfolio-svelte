<script lang="ts">
  let className: string;

  export const ssr = false;
  export let name: string;
  export let size: number | string;
  export { className as class };
</script>

<ion-icon {name} class={className} style="font-size: {size}{typeof size == 'number' ? 'px' : ''}" />
