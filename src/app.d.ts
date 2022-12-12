// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  interface Platform {
    caches: CacheStorage & { default: Cache };
    context: { waitUntil: (promise: Promise<unknown>) => void };
  }
}

type Experience = {
  date: string;
  type: 'education' | 'job';
  title: string;
  description: string;
};

type Skill = {
  name: string;
  value: number | string;
};

type Repo = {
  name: string;
  url: string;
  language: string;
  description: string;
};

type UserInfo = {
  avatarUrl: string;
  fullname: string;
  nickname: string;
  greeting: string;
  about: string;
  quote: {
    content: string;
    author: string;
  };
  experiences: Experience[];
  skills: Skill[];
  social: {
    github: string;
    twitter: string;
    linkedin: string;
    whatsapp: string;
  };
};
