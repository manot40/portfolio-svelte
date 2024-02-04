<script lang="ts">
  import { MediaIcon } from '$lib/components';
  import { userInfo as store } from '$lib/stores/userInfo';

  const aProps = { target: '_BLANK', rel: 'noopener noreferrer' };
</script>

<div class="text-gray-900 space-x-6 dark:text-white-700 flex justify-center">
  <MediaIcon>
    <a on:click={() => window.umami?.track('Github click')} href={$store.social.github} {...aProps}>
      <ion-icon name="logo-github" style="font-size: 24px" />
    </a>
  </MediaIcon>
  <MediaIcon>
    <a on:click={() => window.umami?.track('WhatsApp click')} href={$store.social.whatsapp} {...aProps}>
      <ion-icon name="logo-whatsapp" style="font-size: 24px" />
    </a>
  </MediaIcon>
  <MediaIcon>
    <a on:click={() => window.umami?.track('LinkedIn click')} href={$store.social.linkedin} {...aProps}>
      <ion-icon name="logo-linkedin" style="font-size: 24px" />
    </a>
  </MediaIcon>
  <MediaIcon>
    <a on:click={() => window.umami?.track('Twitter click')} href={$store.social.twitter} {...aProps}>
      <ion-icon name="logo-twitter" style="font-size: 24px" />
    </a>
  </MediaIcon>
</div>
