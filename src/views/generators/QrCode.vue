<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import { NCard } from "naive-ui";
import QRCode from "qrcode";
import { useThemeStore } from "@/stores/theme";
import MyLayout from "@/views/components/Layout.vue";

const themeStore = useThemeStore();
const inputValueRef = ref<string>();
const canvasRef = ref<HTMLCanvasElement>();
const errRef = ref<Error>();

const canvasColor = computed(() => {
  const light = "#fff";
  const dark = "#18181c";
  if (themeStore.theme === "light") {
    return { light, dark };
  }

  return { light: dark, dark: light };
});

watchEffect(() => {
  errRef.value = undefined;
  if (inputValueRef.value) {
    QRCode.toCanvas(canvasRef.value, inputValueRef.value, {
      width: 400,
      color: canvasColor.value,
    }).catch((e) => {
      errRef.value = e;
    });
    canvasRef.value?.removeAttribute("style");
  }
});
</script>

<template>
  <my-layout :show-error="errRef" v-model:input="inputValueRef">
    <template #output>
      <n-card
        v-show="inputValueRef"
        content-style="padding: 0; max-width: 400px;"
      >
        <canvas ref="canvasRef" class="w-full"></canvas>
      </n-card>
    </template>
  </my-layout>
</template>
