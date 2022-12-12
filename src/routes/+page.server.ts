import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';

export const load = (async () => {
  try {
    const res = await fetch(API_URL, {
      method: 'GET',
      headers: { Accept: 'application/json' }
    });

    if (!res.ok)
      throw error(res.status, {
        message: 'Internal Server Error'
      });

    const userInfo: UserInfo = await res.json();

    return { userInfo };
  } catch (e: unknown) {
    console.error(e);
    throw error(500, {
      message: 'Internal Server Error'
    });
  }
}) satisfies PageServerLoad;
