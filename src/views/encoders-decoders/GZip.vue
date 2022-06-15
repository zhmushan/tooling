<script setup lang="ts">
import { ref } from "vue";
import { NInput } from "naive-ui";
import MyLayout from "@/views/components/Layout.vue";
import { compress, decompress } from "./gzip";

const inputRef = ref<string>("");
const outputRef = ref<string>("");
const errRef = ref<Error>();

function encode(v: string) {
  errRef.value = undefined;
  inputRef.value = v;
  if (v) {
    compress(v)
      .then((v) => (outputRef.value = v))
      .catch((e) => (errRef.value = e));
  } else {
    outputRef.value = "";
  }
}

function decode(v: string) {
  errRef.value = undefined;
  outputRef.value = v;
  if (v) {
    decompress(v)
      .then((v) => (inputRef.value = v))
      .catch((e) => (errRef.value = e));
  } else {
    inputRef.value = "";
  }
}
</script>

<template>
  <my-layout :show-error="errRef" :input="inputRef" @update:input="encode">
    <template #output>
      <n-input :value="outputRef" type="textarea" rows="12" @input="decode" />
    </template>
  </my-layout>
</template>
