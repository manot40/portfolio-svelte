import type { AxiosError } from 'axios';
import type { PageServerLoad } from './$types';

import fetcher from '$lib/fetcher';
import { error } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';
import { PUBLIC_GITHUB_USERNAME as github } from '$env/static/public';

export const load = (async () => {
  try {
    const userInfo = await fetcher.get<UserInfo>(API_URL);

    const reposRes = await fetcher.get<Record<string, string>[]>(`https://api.github.com/users/${github}/repos`);
    const repos = reposRes
      .sort((a, b) => {
        return new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf();
      })
      .map((repo) => ({
        name: repo.name,
        url: repo.html_url,
        language: repo.language,
        description: repo.description
      })) as Repo[];

    return { userInfo, repos };
  } catch (e: unknown) {
    const err = e as AxiosError;
    throw error(err.response?.status || 500, {
      message: err.code || 'Internal Server Error'
    });
  }
}) satisfies PageServerLoad;
