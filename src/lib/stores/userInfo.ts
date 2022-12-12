import { writable } from 'svelte/store';

const defaultInfo = {
  about: '',
  fullname: '',
  nickname: '',
  greeting: '',
  avatarUrl: '',
  skills: [],
  experiences: [],
  quote: {
    content: '',
    author: ''
  },
  social: {
    github: '',
    twitter: '',
    linkedin: '',
    whatsapp: ''
  }
};

export const userInfo = writable<UserInfo>({ ...defaultInfo });
