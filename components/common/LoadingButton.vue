<script lang="ts" setup>
const handleMessage = () => {
  message.info("This is a normal message");
  count.value ++;
}
const count = ref(0);
</script>
<template>
  <a-button @click="handleMessage">
    button {{ count }}
  </a-button>
</template>