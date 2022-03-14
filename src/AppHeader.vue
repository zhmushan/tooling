<script setup lang="ts">
import { ref } from "vue";
import {
  NAffix,
  NSpace,
  NButton,
  NIcon,
  NPopover,
  type PopoverInst,
} from "naive-ui";
import { MenuOutline, LogoGithub } from "@vicons/ionicons5";
import { LightModeOutlined, DarkModeOutlined } from "@vicons/material";
import { Theme, useThemeStore } from "@/stores/theme";
import AppMenu from "./AppMenu.vue";

defineProps<{
  showMenu: boolean;
}>();

const themeStore = useThemeStore();
const mobilePopoverRef = ref<PopoverInst>();
</script>

<template>
  <n-affix
    :top="0"
    class="w-full"
    style="z-index: 1; height: var(--header-h); padding: 8px 16px 0"
  >
    <n-space justify="end" item-style="display: inline-flex;">
      <n-button
        text
        style="font-size: var(--header-icon-size)"
        @click="themeStore.changedFrom(themeStore.theme)"
      >
        <n-icon>
          <light-mode-outlined v-if="Theme.Light === themeStore.theme" />
          <dark-mode-outlined v-else />
        </n-icon>
      </n-button>
      <n-button
        text
        tag="a"
        href="https://github.com/zhmushan/tooling"
        target="_blank"
        style="font-size: var(--header-icon-size)"
      >
        <n-icon>
          <logo-github />
        </n-icon>
      </n-button>
      <n-popover
        v-if="showMenu"
        ref="mobilePopoverRef"
        style="padding: 0; width: 288px"
        placement="bottom-end"
        display-directive="show"
        trigger="click"
      >
        <template #trigger>
          <n-button
            v-if="showMenu"
            text
            style="font-size: var(--header-icon-size)"
          >
            <n-icon>
              <menu-outline />
            </n-icon>
          </n-button>
        </template>
        <section style="max-height: 79vh">
          <app-menu @update:value="mobilePopoverRef!.setShow(false)" />
        </section>
      </n-popover>
    </n-space>
  </n-affix>
</template>
