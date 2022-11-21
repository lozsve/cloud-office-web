import { defineStore, User } from 'pinia'

export const useUserStore = defineStore('user', {
  persist: {
    storage: window.sessionStorage
  },
  state: (): User => ({
    info: {}
  }),
  getters: {},
  actions: {}
})
