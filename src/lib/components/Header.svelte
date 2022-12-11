<script lang="ts">
	import { browser } from '$app/environment';
	import { headerVisible } from '$lib/utils';
	import { toggle, theme } from '$lib/stores/theme';
	import { IonIcon, Container } from '$lib/components';

	let visible = true,
		scrollPos = browser ? window.scrollY : 0;
	headerVisible((v, s) => {
		visible = v;
		scrollPos = s;
	});

	let menu = false;

	$: headerClass = `${visible ? 'top-0' : '-top-24'} ${scrollPos < 100 ? 'backdrop-blur-none' : 'backdrop-blur-lg'}`;
	$: wrapperClass = scrollPos < 100 ? 'bg-transparent ' : 'bg-light-500 dark:bg-dark-500';
	$: mobileNavClass = menu ? 'translate-x-0 w-full' : 'translate-x-full w-0';
	$: themeIcon = (() => {
		if ($theme.scheme === 'dark') return 'moon';
		if ($theme.scheme === 'light') return 'sunny';
		return 'contrast';
	})();
</script>

<header class="fixed z-20 w-full transition-top duration-300 {headerClass}">
	<div class="absolute flex -z-10 w-screen h-full opacity-80 transition-colors duration-500 {wrapperClass}" />
	<Container viewport="lg" class="flex items-center justify-between w-auto py-5 md:py-8">
		<a href="/">
			<div class="inline-flex text-xl">
				<h1 class="tracking-wide font-extrabold select-none">KEVIN</h1>
				&nbsp;
				<p class="tracking-wider select-none">SANDIHO</p>
			</div>
		</a>

		<div class="flex items-center">
			<!-- Desktop Navigation -->
			<div class="font-medium font-head sm:block md:flex lg:flex space-x-8 hidden">
				<a href="#about" class="transition-colors hover:text-blue-500 umami--click--aboutMenu">About</a>
				<a href="#experience" class="transition-colors hover:text-blue-500 umami--click--experienceMenu">Experience</a>
				<a href="#project" class="transition-colors hover:text-blue-500 umami--click--projectMenu">Project</a>
			</div>

			<!-- Theme Toggler -->
			<button type="button" on:click={toggle} class="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4 umami--change--siteTheme">
				<IonIcon size={24} class="text-black-500 dark:text-light-500" name={themeIcon} />
			</button>

			<!-- Mobile Navigation -->
			<div class="sm:hidden flex item-center">
				<button on:click={() => (menu = !menu)} class="w-8 h-8 ml-2 mr-1 rounded">
					<IonIcon class="text-black-500 dark:text-light-500" name={menu ? 'close' : 'menu'} size={32} />
				</button>
				<div
					class="absolute overflow-hidden z-20 h-screen top-[4.5rem] right-0 transform ease-in-out duration-300 dark:opacity-100 opacity-95 bg-light-500 dark:bg-dark-500 {mobileNavClass}"
				>
					<nav
						on:click={() => (menu = !menu)}
						on:keypress={() => (menu = !menu)}
						class="flex flex-col space-y-4 items-center font-head text-xl font-semibold h-full mt-8"
					>
						<div class="px-12 py-4">
							<a href="#about" class="transition-colors hover:text-blue-500 umami--click--aboutMenu">About</a>
						</div>
						<div class="px-12 py-4">
							<a href="#experience" class="transition-colors hover:text-blue-500 umami--click--experienceMenu"
								>Experience</a
							>
						</div>
						<div class="px-12 py-4">
							<a href="#project" class="transition-colors hover:text-blue-500 umami--click--projectMenu">Project</a>
						</div>
					</nav>
				</div>
			</div>
		</div>
	</Container>
</header>
