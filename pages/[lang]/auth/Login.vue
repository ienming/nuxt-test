<script setup>
const route = useRoute();

// 取得路徑中的 :lang 參數
const lang = route.params.lang;

// 根據 lang 進行語言設置
console.log('Current language:', lang);
</script>

<template>
  <NuxtLayout name="default">
    <div>
      <h1>Login Page - Language: {{ lang }}</h1>
    </div>
  </NuxtLayout>
</template>