import type { PageServerLoad } from './$types';

import { error } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';

import fetcher from '$lib/fetcher';
import type { AxiosError } from 'axios';

export const load = (async () => {
  try {
    const userInfo = await fetcher.get<UserInfo>(API_URL);
    return { userInfo };
  } catch (e: unknown) {
    const err = e as AxiosError;
    throw error(err.response?.status || 500, {
      message: err.code || 'Internal Server Error'
    });
  }
}) satisfies PageServerLoad;
