import type { AxiosError } from 'axios';
import type { PageServerLoad } from './$types';

import YAML from 'yaml';
import fetcher from '$lib/fetcher';
import { error } from '@sveltejs/kit';
import { API_URL, NODE_ENV } from '$env/static/private';
import { PUBLIC_GITHUB_USERNAME as username } from '$env/static/public';

const cache = {
  userInfo: {} as UserInfo,
  repos: [] as Repo[],
  timestamp: 0,
  isStale() {
    return (
      (!Object.keys(this.userInfo).length && !this.repos.length) ||
      Date.now() - this.timestamp > (NODE_ENV === 'production' ? 1000 * 60 * 15 : 0)
    );
  }
};

export const load = (async () => {
  try {
    if (cache.isStale()) {
      const userInfoRes = await fetcher.get<string>(API_URL);
      cache.userInfo = YAML.parse(userInfoRes) as UserInfo;

      const reposRes = await fetcher.get<Record<string, string>[]>(`https://api.github.com/users/${username}/repos`);
      cache.repos = reposRes
        .sort((a, b) => {
          return new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf();
        })
        .map((repo) => ({
          name: repo.name,
          url: repo.html_url,
          language: repo.language,
          description: repo.description
        })) as Repo[];

      cache.timestamp = Date.now();
    }
    return { userInfo: cache.userInfo, repos: cache.repos };
  } catch (e: unknown) {
    const err = e as AxiosError;
    console.error(err.message);
    throw error(err.response?.status || 500, {
      message: err.code || 'Internal Server Error'
    });
  }
}) satisfies PageServerLoad;
