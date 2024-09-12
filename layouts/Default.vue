<template>
    <div>
        <aside>
            <ul>
                <li>
                    <NuxtLink :to="routes.login">to login</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="routes.dashboard">to dashboard</NuxtLink>
                </li>
            </ul>
        </aside>
        <slot></slot>
    </div>
</template>

<script setup>
const route = useRoute();

// 取得路徑中的 :lang 參數
const lang = route.params.lang;
console.log(route);

const routes = {
    login: `/${lang}/auth/login`,
    dashboard: `/${lang}/home/dashboard`,
}

// 根據 lang 進行語言設置
console.log('Current language:', lang);
</script>

<style scoped>
div {
    background-color: rgba(0,0, 255, 0.1);
}
</style>