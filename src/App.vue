<script lang="ts">
import { menuGroups } from "./menu";

const RootMenuItem = { label: "All tools", key: "/all_tools" };
const MenuOption_Key_Label = new Map<string, string>([
  [RootMenuItem.key, RootMenuItem.label],
]);
const menuOptions: MenuOption[] = [
  RootMenuItem,
  ...menuGroups.map(([label, children]) => {
    const key = getMenuKeyByLabel(label);
    MenuOption_Key_Label.set(key, label);
    return {
      type: "group",
      label,
      key,
      children: children.map(([label]) => {
        const key = getMenuKeyByLabel(label);
        MenuOption_Key_Label.set(key, label);
        return {
          label,
          key,
        };
      }),
    };
  }),
];

function getMenuKeyByLabel(label: string): string {
  return `/${label.toLowerCase().replace(/\s+/g, "_")}`;
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
} from "naive-ui";

const theme = useOsTheme().value === "dark" ? darkTheme : undefined;
const pathRef = ref<string>();
const selectedMenuLabelRef = ref<string>();

watch(toRef(useRoute(), "path"), (path) => {
  pathRef.value = path;
  selectedMenuLabelRef.value = MenuOption_Key_Label.get(path);
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
</script>

<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <n-dialog-provider>
        <reload-prompt />
        <n-layout position="absolute" has-sider>
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
            content-style="padding: 24px; display: flex; flex-direction: column; height: 100%;"
            :native-scrollbar="false"
          >
            <n-h1>{{ selectedMenuLabelRef }}</n-h1>
            <router-view />
          </n-layout>
        </n-layout>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>
