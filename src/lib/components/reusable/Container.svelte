<script lang="ts">
	type ViewportSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

	let className = '';

	export { className as class };
	export let viewport: ViewportSize = 'md';

	$: size =
		{
			sm: 'max-w-screen-sm',
			md: 'max-w-screen-md',
			lg: 'max-w-screen-lg',
			xl: 'max-w-screen-xl',
			'2xl': 'max-w-screen-2xl',
			full: 'max-w-full'
		}[viewport] || 'max-w-screen-md';
</script>

<div class="px-4 mx-auto {size} {className}">
	<slot />
</div>
