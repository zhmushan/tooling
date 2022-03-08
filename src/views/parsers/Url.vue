<script setup lang="ts">
import { ref, watch } from "vue";
import {
  NInput,
  NGrid,
  NGridItem,
  NCard,
  NH3,
  NH4,
  NList,
  NListItem,
} from "naive-ui";

const inputValueRef = ref<string>();
const parsedUrlRef = ref<URL>();

const ListKey: Array<keyof URL> = ["protocol", "host", "pathname"];
watch(inputValueRef, async () => {
  parsedUrlRef.value = new URL(inputValueRef.value ?? "");
});
</script>

<template>
  <n-card style="flex-grow: 1">
    <n-grid cols="1 m:2" x-gap="12" y-gap="12" responsive="screen">
      <n-grid-item>
        <n-h3>Input</n-h3>
        <n-input v-model:value="inputValueRef" type="textarea" rows="12" />
      </n-grid-item>
      <n-grid-item>
        <n-h3>Output</n-h3>
        <section v-if="parsedUrlRef">
          <n-h4>URL Parts</n-h4>
          <n-list>
            <n-list-item v-for="i of ListKey" v-bind:key="i">
              <template #prefix>{{ i }}</template>
              {{ parsedUrlRef?.[i] }}
            </n-list-item>
          </n-list>
          <n-h4>Query String Params</n-h4>
          <n-list>
            <n-list-item
              v-for="(value, key) in Object.fromEntries(
                parsedUrlRef.searchParams
              )"
              v-bind:key="key"
            >
              <template #prefix>{{ key }}</template>
              {{ value }}
            </n-list-item>
          </n-list>
        </section>
      </n-grid-item>
    </n-grid>
  </n-card>
</template>
