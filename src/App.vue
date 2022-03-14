<script setup lang="ts">
import { toRef, watch, ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import {
  NLayout,
  NLayoutSider,
  NConfigProvider,
  NMessageProvider,
  darkTheme,
  NH1,
  NDialogProvider,
  NP,
} from "naive-ui";
import { useMemo } from "vooks";
import { useIsMobile, useIsTablet } from "@/utils/composables";
import { useThemeStore } from "@/stores/theme";
import { MenuOption_Key_Info } from "./menu";
import AppHeader from "./AppHeader.vue";
import AppMenu from "./AppMenu.vue";

const isMobileRef = useIsMobile();
const isTabletRef = useIsTablet();
const showSiderRef = useMemo(() => {
  return !isMobileRef.value && !isTabletRef.value;
});

const themeStore = useThemeStore();

const selectedMenuLabelRef = ref<string>();
const selectedMenuDescRef = ref<string>();

watch(toRef(useRoute(), "path"), (path) => {
  [selectedMenuLabelRef.value, selectedMenuDescRef.value] =
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    MenuOption_Key_Info.get(path)!;
});
</script>

<template>
  <n-config-provider
    :theme="themeStore.theme === 'dark' ? darkTheme : undefined"
  >
    <n-message-provider>
      <n-dialog-provider>
        <n-layout position="absolute" has-sider>
          <app-header :show-menu="!showSiderRef" />
          <n-layout-sider v-if="showSiderRef" bordered :width="240">
            <app-menu />
          </n-layout-sider>
          <n-layout
            content-style="padding: 24px; display: flex; flex-direction: column; height: 100%; min-width: var(--panel-min-w)"
            :native-scrollbar="false"
          >
            <n-h1>{{ selectedMenuLabelRef }}</n-h1>
            <n-p v-if="selectedMenuDescRef" style="margin-top: 0">
              {{ selectedMenuDescRef }}
            </n-p>
            <router-view />
          </n-layout>
        </n-layout>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
@import "./utilities.css";

* {
  box-sizing: border-box;
}

:root {
  --panel-min-w: 300px;
  --header-h: 44px;
  --header-icon-size: 28px;
}
</style>
