import { defineStore } from 'pinia'
export const useAppStore = defineStore({
  id: 'workspace',
  state: () => ({
    workspace: null,
  }),
  getters: {
    getWorkspace() {
      return this.workspace
    },
  },
  actions: {
    setWorkspace(payload) {
      this.workspace = payload
    },
  },
})
