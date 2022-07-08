<script setup lang="ts">
import { ref, watch } from "vue";
import { NH4, NList, NListItem } from "naive-ui";
import MyLayout from "@/views/components/Layout.vue";

const inputValueRef = ref<string>();
const parsedUrlRef = ref<URL>();

const ListKey: Array<keyof URL> = ["protocol", "host", "pathname"];
watch(inputValueRef, async () => {
  parsedUrlRef.value = new URL(inputValueRef.value ?? "");
});
</script>

<template>
  <my-layout v-model:input="inputValueRef">
    <template #output>
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
            <span class="break-all">{{ value }}</span>
          </n-list-item>
        </n-list>
      </section>
    </template>
  </my-layout>
</template>
