import { writable, derived } from 'svelte/store';

import { cookies } from '$lib/utils';
import { browser } from '$app/environment';

type Theme = {
	system?: 'dark' | 'light';
	scheme: 'dark' | 'light' | 'system';
};

export const theme = writable<Theme>({
	system: undefined,
	scheme: 'system'
});

export const toggle = () =>
	theme.update(({ system, scheme }) => {
		switch (scheme) {
			case 'light':
				cookies.set('theme', 'dark', 365);
				return { system, scheme: 'dark' };
			case 'dark':
				cookies.set('theme', 'system', 365);
				return { system, scheme: 'system' };
			default:
				cookies.set('theme', 'light', 365);
				return { system, scheme: 'light' };
		}
	});

theme.subscribe((value) => {
	const chosen = value.scheme === 'system' ? value.system : value.scheme;
	if (browser && chosen) {
		document.querySelector('html')?.classList.remove('dark', 'light');
		document.querySelector('html')?.classList.toggle(chosen);
	}
});

export const current = derived(theme, ($theme) => ($theme.scheme === 'system' ? $theme.system : $theme.scheme));
