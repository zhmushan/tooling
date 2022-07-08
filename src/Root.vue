<script setup lang="ts">
import {
  NConfigProvider,
  NMessageProvider,
  darkTheme,
  NDialogProvider,
  zhCN,
  enUS,
  NGlobalStyle,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { useThemeStore } from "@/stores/theme";
import MyApp from "./App.vue";
const themeStore = useThemeStore();
const { locale } = useI18n();
</script>

<template>
  <n-config-provider
    :theme="themeStore.theme === 'dark' ? darkTheme : undefined"
    :locale="locale === 'zh' ? zhCN : enUS"
  >
    <n-message-provider>
      <n-dialog-provider>
        <my-app />
      </n-dialog-provider>
    </n-message-provider>
    <n-global-style />
  </n-config-provider>
</template>

<style>
@import "./utilities.css";

* {
  box-sizing: border-box;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}

:root {
  --panel-min-w: 300px;
  --header-h: 44px;
  --header-icon-size: 28px;
}
</style>
