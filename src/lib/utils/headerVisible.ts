import { browser } from '$app/environment';
import { onMount, onDestroy } from 'svelte';

type Mutator = (visible: boolean, lastScrollPos: number) => void;

export function headerVisible(mutator: Mutator, offset = 300) {
	let lastScrollPos = 0;

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;
		const visible = lastScrollPos > currentScrollPos || currentScrollPos < offset;
		lastScrollPos = currentScrollPos;
		mutator(visible, lastScrollPos);
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onDestroy(() => {
		if (browser) window.removeEventListener('scroll', handleScroll);
	});
}
