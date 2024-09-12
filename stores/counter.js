import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    msg: '',
  }),
  actions: {
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    },
    setMsg(payload) {
      this.msg = payload;
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
})