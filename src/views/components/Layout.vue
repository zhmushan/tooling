<script setup lang="ts">
import { NCard, NGrid, NGridItem, NH3, NSpace } from "naive-ui";
</script>

<template>
  <n-card style="flex-grow: 1">
    <n-grid cols="1 m:2" x-gap="12" y-gap="12" responsive="screen">
      <n-grid-item>
        <n-space>
          <n-h3>Input</n-h3>
          <slot name="input-header-extra"></slot>
        </n-space>
        <slot name="input"></slot>
      </n-grid-item>
      <n-grid-item>
        <n-h3>Output</n-h3>
        <slot name="output"></slot>
      </n-grid-item>
    </n-grid>
  </n-card>
</template>
