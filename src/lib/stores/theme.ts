import { writable, derived } from 'svelte/store';

import { cookies } from '$lib/utils';
import { browser } from '$app/environment';

export type Theme = {
  system?: 'dark' | 'light';
  scheme: 'dark' | 'light' | 'system';
};

export const theme = writable<Theme>({
  system: undefined,
  scheme: 'system'
});

export const toggle = () =>
  theme.update(({ system, scheme }) => {
    if (scheme === 'light') return { system, scheme: 'dark' };
    if (scheme === 'dark') return { system, scheme: 'system' };
    return { system, scheme: 'light' };
  });

theme.subscribe((value) => {
  const chosen = value.scheme === 'system' ? value.system : value.scheme;
  if (browser && chosen) {
    document.querySelector('html')?.classList.remove('dark', 'light');
    document.querySelector('html')?.classList.toggle(chosen);
    localStorage.setItem('theme', value.scheme);
    cookies.set('theme', chosen, 365);
  }
});

export const current = derived(theme, ($theme) => ($theme.scheme === 'system' ? $theme.system : $theme.scheme));
