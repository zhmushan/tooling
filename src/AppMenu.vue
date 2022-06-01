<script setup lang="ts">
import { h, type VNodeChild, toRef } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { NMenu, type MenuOption } from "naive-ui";
import { useI18n } from "vue-i18n";
import { MenuRoot, MenuGroups } from "./menu";

defineEmits(["update:value"]);

const { t } = useI18n();
const pathRef = toRef(useRoute(), "path");

const menuOptions: MenuOption[] = [
  { label: MenuRoot.label, key: MenuRoot.path },
  ...MenuGroups.map(([label, path, children]) => {
    return {
      type: "group",
      label: () => t(label),
      key: path,
      children: children.map((ch) => ({
        label: ch.label,
        key: `${path}${ch.path}`,
      })),
    };
  }),
];

const renderMenuLabel = (option: MenuOption): VNodeChild => {
  const { label, key } = option;
  return h(
    RouterLink,
    {
      to: key,
    },
    { default: () => t(label) }
  );
};
</script>

<template>
  <n-menu
    :value="pathRef"
    :options="menuOptions"
    :render-label="renderMenuLabel"
    @update-value="$emit('update:value')"
  />
</template>
