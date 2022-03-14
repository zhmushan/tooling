import { defineStore } from "pinia";
import { ref } from "vue";
import { useOsTheme } from "naive-ui";

export const enum Theme {
  Light,
  Dark,
}

export const useThemeStore = defineStore("theme", () => {
  const themeRef = ref(
    useOsTheme().value === "dark" ? Theme.Dark : Theme.Light
  );

  function changedFrom(theme: Theme) {
    themeRef.value = Theme.Light === theme ? Theme.Dark : Theme.Light;
  }

  return {
    theme: themeRef,
    changedFrom,
  };
});
