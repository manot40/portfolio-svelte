# Svelte Portfolio

My personal site for portfolio. Made with ❤️ using SvelteKit 1.x
![showcase-light.png](https://i.ibb.co/Dz0KP22/Cuplikan-layar-20230108-161741.png)

## Setup ⚙️

Serve your site content using [Github Gist](https://gist.github.com). Content data type can be found in `app.d.ts` at `src` folder.

The gist template are as follow (in YAML format):

```yaml
nickname: Your nickname
fullname: Your fullname
avatarUrl: Avatar image url

greeting: |
  Your greeting message placed in super section of site

quote: # Quote content definition
  content: Lorem ipsum
  author: John Doe

about: |
  About yourself

social:
  github: https://github.com/your-username
  twitter: https://twitter.com/your-username
  linkedin: https://linkedin.com/in/your-username
  whatsapp: https://wa.me/your-phone-number

skills:
  - name: Skill name
    value: 0-100 # Range of how adequte you are in this skill

experiences:
  - title: Job title
    type: education # or "job"
    date: January 2021
    description: |
      Job description
```

## Set environment variables 📝

```bash
# Required
API_URL=https://gist.githubusercontent.com/[username]/[hash]/raw  # Your gist URL
PUBLIC_GITHUB_USERNAME=your-username  # Your Github username

# Optional
GITHUB_TOKEN=your-github-token  # Used for bypass limit rate
PUBLIC_UMAMI_ID=your-umami-id  # For umami site visitor analytics
PUBLIC_UMAMI_URL=your-umami-url  # For umami site visitor analytics

```

## Run and Deploy 🚀

Lastly, make sure to install the dependencies and you are ready to rock

```bash
# yarn
yarn install
yarn dev

# npm
npm install
npm run dev
```

This app using node adapter as default, if you're planning to deploy to Vercel, CloudFlare, Netlify, etc. Make sure to install `@sveltejs/adapter-auto` and change [sveltekit config](https://kit.svelte.dev/docs/adapters) to use this adapter.
