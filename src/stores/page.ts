import { defineStore } from "pinia";
import { ref } from "vue";

export const usePageStore = defineStore("path", () => {
  const labelRef = ref<string>();
  const descRef = ref<string>();

  return {
    label: labelRef,
    desc: descRef,
  };
});
