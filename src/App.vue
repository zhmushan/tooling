<script lang="ts">
import { menuGroups } from "./menu";

const RootMenuItem = { label: "All tools", key: "/all_tools" };
const MenuOption_Key_Label = new Map<string, [string, string?]>([
  [RootMenuItem.key, [RootMenuItem.label]],
]);
const menuOptions: MenuOption[] = [
  RootMenuItem,
  ...menuGroups.map(([label, children]) => {
    const key = getMenuKeyByLabel(label);
    MenuOption_Key_Label.set(key, [label]);
    return {
      type: "group",
      label,
      key,
      children: children.map(([chLabel, chDesp]) => {
        const key = getMenuKeyByLabel(`${label}_${chLabel}`);
        MenuOption_Key_Label.set(key, [chLabel, chDesp]);
        return {
          label: chLabel,
          key,
        };
      }),
    };
  }),
];

function getMenuKeyByLabel(label: string): string {
  return `/${label.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`;
}
</script>

<script setup lang="ts">
import { h, type VNodeChild, toRef, ref, watch } from "vue";
import { RouterView, RouterLink, useRoute } from "vue-router";
import {
  NLayout,
  NLayoutSider,
  NMenu,
  NConfigProvider,
  NMessageProvider,
  darkTheme,
  type MenuOption,
  useOsTheme,
  NH1,
  NDialogProvider,
  NP,
  NAffix,
  NSpace,
  NButton,
  NIcon,
} from "naive-ui";
import { LogoGithub } from "@vicons/ionicons5";
import { DarkModeOutlined, LightModeOutlined } from "@vicons/material";

const enum Theme {
  Light,
  Dark,
}

const themeRef = ref(useOsTheme().value === "dark" ? Theme.Dark : Theme.Light);
const pathRef = ref<string>();
const selectedMenuLabelRef = ref<string>();
const selectedMenuDespRef = ref<string>();

watch(toRef(useRoute(), "path"), (path) => {
  pathRef.value = path;
  [selectedMenuLabelRef.value, selectedMenuDespRef.value] =
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    MenuOption_Key_Label.get(path)!;
});

const renderMenuLabel = (option: MenuOption): VNodeChild => {
  if (option.children?.length) return option.label as string;
  const { label, key } = option;
  return h(
    RouterLink,
    {
      to: String(key ?? "/"),
    },
    { default: () => label }
  );
};

function changeTheme(theme: Theme): Theme {
  if (Theme.Light === theme) {
    return Theme.Dark;
  }

  return Theme.Light;
}
</script>

<template>
  <n-config-provider :theme="themeRef === Theme.Dark ? darkTheme : undefined">
    <n-message-provider>
      <n-dialog-provider>
        <n-layout position="absolute" has-sider>
          <n-affix
            :top="0"
            class="w-full"
            style="z-index: 1; height: var(--header-h); padding: 8px 16px 0"
          >
            <n-space justify="end" item-style="display: inline-flex;">
              <n-button
                text
                style="font-size: 28px"
                @click="themeRef = changeTheme(themeRef)"
              >
                <n-icon>
                  <light-mode-outlined v-if="themeRef === Theme.Light" />
                  <dark-mode-outlined v-else />
                </n-icon>
              </n-button>
              <n-button
                text
                tag="a"
                href="https://github.com/zhmushan/tooling"
                target="_blank"
                style="font-size: 28px"
              >
                <n-icon>
                  <logo-github />
                </n-icon>
              </n-button>
            </n-space>
          </n-affix>
          <n-layout-sider bordered :width="240">
            <n-menu
              :value="pathRef"
              :options="menuOptions"
              :render-label="renderMenuLabel"
              v-on:update-value="
                (_, { label }) => (selectedMenuLabelRef = String(label))
              "
            />
          </n-layout-sider>
          <n-layout
            content-style="padding: 24px; display: flex; flex-direction: column; height: 100%; min-width: var(--panel-min-w)"
            :native-scrollbar="false"
          >
            <n-h1>{{ selectedMenuLabelRef }}</n-h1>
            <n-p v-if="selectedMenuDespRef" style="margin-top: 0">
              {{ selectedMenuDespRef }}
            </n-p>
            <router-view />
          </n-layout>
        </n-layout>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
* {
  box-sizing: border-box;
}

:root {
  --panel-min-w: 300px;
  --header-h: 44px;
}

.break-all {
  word-break: break-all;
}

.w-full {
  width: 100%;
}
</style>
