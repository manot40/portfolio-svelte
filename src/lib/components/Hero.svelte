<script lang="ts">
	import { Container } from '$lib/components';
	import { userInfo as store } from '$lib/stores/userInfo';
</script>

<section id="hero" class="bg-[#FFF] dark:bg-dark-600 relative">
	<div
		class="absolute w-full h-full bg-[url('/hero.png')] bg-no-repeat bg-contain lg:bg-auto bg-[right_-6rem_bottom_-2rem] lg:bg-right xl:bg-right-bottom saturate-150 contrast-[85%] dark:contrast-100"
	/>
	<Container class="md:px-12 relative pt-36 sm:pt-48 lg:pt-40 h-[40rem] lg:max-w-screen-lg" viewport="md">
		<div class="md:space-x-5 md:flex md:flex-row item-center md:-mx-4 flex flex-col-reverse justify-between text-left">
			<div class="lg:mt-12 text-black-900 dark:text-light-500 max-w-xl">
				<h1 class="text-5xl md:text-6xl font-bold">I&apos;m</h1>
				<h1
					class="text-5xl md:text-6xl font-bold mt-2 text-transparent dark:text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-700"
				>
					{$store.fullname}
				</h1>
				<h2 class="mt-1 text-sm text-neutral-500 dark:text-neutral-500">({$store.nickname} for short)</h2>
				<p class="text-xl font-bold tracking-normal mt-8 md:text-2xl text-black-500 dark:text-light-500">
					{$store.greeting}
				</p>
			</div>
		</div>
	</Container>
</section>
