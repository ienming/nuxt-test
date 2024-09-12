<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#00b96b',
      },
    }"
  >
    <p>這裡是最外層</p>
    <NuxtPage>
    </NuxtPage>
  </a-config-provider>
</template>
