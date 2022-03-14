<script setup lang="ts">
import { h, type VNodeChild, toRef, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { NMenu, type MenuOption } from "naive-ui";
import { usePageStore } from "@/stores/page";
import { MenuGroups, MenuRoot } from "./menu";

const emits = defineEmits(["update:value"]);

const pathRef = toRef(useRoute(), "path");
const pageStore = usePageStore();
const RootMenuItem = { label: MenuRoot.label, key: MenuRoot.path };
const MenuOption_Key_Label = new Map<string, [string, string?]>([
  [RootMenuItem.key, [RootMenuItem.label]],
]);

const menuOptions: MenuOption[] = [
  RootMenuItem,
  ...MenuGroups.map(([label, path, children]) => {
    return {
      type: "group",
      label,
      key: path,
      children: children.map((ch) => {
        const key = `${path}${ch.path}`;
        MenuOption_Key_Label.set(key, [ch.label, ch.desc]);
        return { label: ch.label, key };
      }),
    };
  }),
];

const renderMenuLabel = (option: MenuOption): VNodeChild => {
  if (option.children?.length) return option.label;
  const { label, key } = option;
  return h(
    RouterLink,
    {
      to: key,
    },
    { default: () => label }
  );
};

watch(pathRef, (path) => {
  emits("update:value");
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  [pageStore.label, pageStore.desc] = MenuOption_Key_Label.get(path)!;
});
</script>

<template>
  <n-menu
    :value="pathRef"
    :options="menuOptions"
    :render-label="renderMenuLabel"
  />
</template>
