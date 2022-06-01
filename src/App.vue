<script setup lang="ts">
import { toRef, watch, ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import { NLayout, NLayoutSider, NH1, NP } from "naive-ui";
import { useMemo } from "vooks";
import { useIsMobile, useIsTablet } from "@/utils/composables";
import { MenuOption_Key_Info } from "./menu";
import AppHeader from "./AppHeader.vue";
import AppMenu from "./AppMenu.vue";

const isMobileRef = useIsMobile();
const isTabletRef = useIsTablet();
const showSiderRef = useMemo(() => {
  return !isMobileRef.value && !isTabletRef.value;
});

const selectedMenuLabelRef = ref<string>();
const selectedMenuDescRef = ref<string>();

watch(toRef(useRoute(), "path"), (path) => {
  [selectedMenuLabelRef.value, selectedMenuDescRef.value] =
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    MenuOption_Key_Info.get(path)!;
});
</script>

<template>
  <n-layout position="absolute" has-sider>
    <app-header :show-menu="!showSiderRef" />
    <n-layout-sider v-if="showSiderRef" bordered :width="240">
      <app-menu />
    </n-layout-sider>
    <n-layout
      content-style="padding: 24px; display: flex; flex-direction: column; height: 100%; min-width: var(--panel-min-w)"
      :native-scrollbar="false"
    >
      <n-h1 v-if="selectedMenuLabelRef">{{ $t(selectedMenuLabelRef) }}</n-h1>
      <n-p v-if="selectedMenuDescRef" style="margin-top: 0">
        {{ $t(selectedMenuDescRef) }}
      </n-p>
      <router-view />
    </n-layout>
  </n-layout>
</template>
