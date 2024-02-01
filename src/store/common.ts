import { defineStore } from "pinia";
export const useCommonStore = defineStore("common", {
  persist: true,
  state: () => {
    return {
      loading: false as boolean,
    };
  },
  actions: {
    setLoading(status: boolean = false) {
      this.loading = status;
    },
  },
});
