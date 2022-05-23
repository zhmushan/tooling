<script setup lang="ts">
import { NCard, NGrid, NGridItem, NH3, NSpace, NAlert } from "naive-ui";
import { onErrorCaptured, ref, watch } from "vue";

const props = defineProps<{
  showError?: boolean | Error;
}>();

const errMsgRef = ref<string>();
const errTitleRef = ref<string>();

watch(
  () => props.showError,
  (err) => {
    if (err instanceof Error) {
      [errMsgRef.value, errTitleRef.value] = [err.message, err.name];
    }
  }
);

onErrorCaptured((err) => {
  errMsgRef.value = err.message;
  errTitleRef.value = err.name;
});
</script>

<template>
  <n-card style="flex-grow: 1">
    <template v-if="showError" #header>
      <n-alert :title="errTitleRef" type="error" closable>{{
        errMsgRef
      }}</n-alert>
    </template>
    <n-grid cols="1 m:2" x-gap="12" y-gap="12" responsive="screen">
      <n-grid-item>
        <n-space>
          <n-h3>Input</n-h3>
          <slot name="input-header-extra"></slot>
        </n-space>
        <slot name="input"></slot>
      </n-grid-item>
      <n-grid-item>
        <n-space>
          <n-h3>Output</n-h3>
          <slot name="output-header-extra"></slot>
        </n-space>
        <slot name="output"></slot>
      </n-grid-item>
    </n-grid>
  </n-card>
</template>
