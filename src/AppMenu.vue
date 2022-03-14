<script setup lang="ts">
import { h, type VNodeChild, toRef } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { NMenu, type MenuOption } from "naive-ui";
import { menuOptions } from "./menu";

defineEmits(["update:value"]);

const pathRef = toRef(useRoute(), "path");

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
</script>

<template>
  <n-menu
    :value="pathRef"
    :options="menuOptions"
    :render-label="renderMenuLabel"
    @update-value="$emit('update:value')"
  />
</template>
