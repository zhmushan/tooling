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
  outputRef.value = btoa(unescape(encodeURIComponent(v)));
}

function decode(v: string) {
  showErrorRef.value = false;
  outputRef.value = v;
  inputRef.value = decodeURIComponent(escape(atob(v)));
}
</script>

<template>
  <my-layout
    :show-error="showErrorRef"
    :input="inputRef"
    @update:input="encode"
  >
    <template #output>
      <n-input :value="outputRef" type="textarea" rows="12" @input="decode" />
    </template>
  </my-layout>
</template>
