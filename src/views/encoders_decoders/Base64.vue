<script setup lang="ts">
import { ref, watch } from "vue";
import { NInput, NP } from "naive-ui";
import MyLayout from "@/views/components/Layout.vue";

const inputRef = ref<string>("");
const outputRef = ref<string>();
watch(inputRef, (value) => (outputRef.value = btoa(value)));
</script>

<template>
  <my-layout>
    <template #input>
      <n-input v-model:value="inputRef" type="textarea" rows="12" />
    </template>
    <template #output>
      <n-p class="break-all">
        {{ outputRef }}
      </n-p>
    </template>
  </my-layout>
</template>
