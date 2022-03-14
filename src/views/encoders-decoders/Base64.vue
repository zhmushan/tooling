<script setup lang="ts">
import { ref, onErrorCaptured } from "vue";
import { NInput } from "naive-ui";
import MyLayout from "@/views/components/Layout.vue";

const inputRef = ref<string>();
const outputRef = ref<string>();
const showErrorRef = ref<boolean>();

onErrorCaptured(() => {
  showErrorRef.value = true;
});

function encode(v: string) {
  showErrorRef.value = false;
  inputRef.value = v;
  outputRef.value = btoa(v);
}

function decode(v: string) {
  showErrorRef.value = false;
  outputRef.value = v;
  inputRef.value = atob(v);
}
</script>

<template>
  <my-layout :show-error="showErrorRef">
    <template #input>
      <n-input :value="inputRef" type="textarea" rows="12" @input="encode" />
    </template>
    <template #output>
      <n-input :value="outputRef" type="textarea" rows="12" @input="decode" />
    </template>
  </my-layout>
</template>
