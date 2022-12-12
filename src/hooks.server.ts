import type { Handle } from '@sveltejs/kit';

export const handle: Handle = (async ({ event, resolve }) => {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => {
      const isDark = event.cookies.get('theme') === 'dark';
      return isDark ? html.replace('class="light"', 'class="dark"') : html;
    }
  });

  // Cache Control
  response.headers.set('cache-control', 'max-age=0, s-maxage=86400, stale-while-revalidate');

  return response;
}) satisfies Handle;
