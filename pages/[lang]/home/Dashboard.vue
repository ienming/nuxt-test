<template>
    <NuxtLayout name="default">
        <h1>Dashboard</h1>
        <p>{{ sum }}</p>
        <LazyUser />
        <p>{{ counterStore.count }}</p>
        <a-button @click="counterStore.increment">增加</a-button>
        <a-button @click="counterStore.decrement">減少</a-button>
        <div>
            <input type="text" v-model="msg" />
            <p>{{ msg }}</p>
        </div>
    </NuxtLayout>
</template>

<!-- <script>
import add from '../../../composables/helper';
import { useCounterStore } from '@/stores/counter'

export default {
    data() {
        return {
            counterStore: undefined,
        };
    },
    computed: {
        sum() {
            return add(3,4);
        },
        msg: {
            get() {
                return this.counterStore.msg;
            },
            set(payload) {
                this.counterStore.setMsg(payload);
            }
        }
    },
    created() {
        this.counterStore = useCounterStore();
    },
}
</script> -->

<script setup>
import { computed, ref, onMounted } from 'vue';
import add from '../../../composables/helper';
import { useCounterStore } from '@/stores/counter';

// 初始化 Pinia store
const counterStore = useCounterStore();

// 使用 `ref` 創建響應式狀態
const sum = computed(() => add(3, 4));
const msg = computed({
    get() {
        return counterStore.msg;
    },
    set(payload) {
        counterStore.setMsg(payload);
    }
});

// 使用 `onMounted` 來替代 `created` 鉤子（如果有其他初始化需求）
onMounted(() => {
    // 這裡可以放置其他初始化代碼
});
</script>
