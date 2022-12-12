import type { Handle } from '@sveltejs/kit';

export const handle: Handle = (async ({ event, resolve }) => {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => {
      const isDark = event.cookies.get('theme') === 'dark';
      return isDark ? html.replace('class="light"', 'class="dark"') : html;
    }
  });

  return response;
}) satisfies Handle;
