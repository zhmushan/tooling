import { defineStore } from "pinia";
import { ref } from "vue";
import { useOsTheme } from "naive-ui";

type Theme = "dark" | "light";

export const useThemeStore = defineStore("theme", () => {
  const localStore = localStorage.getItem("theme") as Theme | null;
  const themeRef = ref<Theme>(localStore ?? useOsTheme().value ?? "light");

  function changedFrom(theme: Theme) {
    themeRef.value = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", themeRef.value);
  }

  return {
    theme: themeRef,
    changedFrom,
  };
});
