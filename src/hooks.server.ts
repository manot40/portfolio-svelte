import type { Handle } from '@sveltejs/kit';

export const handle: Handle = (async ({ event, resolve }) => {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => {
      const isDark = event.cookies.get('theme') === 'dark';
      return html.replace('%theme%', isDark ? 'dark' : 'light');
    }
  });

  response.headers.set('cache-control', 'max-age=0, s-maxage=86400');

  return response;
}) satisfies Handle;
