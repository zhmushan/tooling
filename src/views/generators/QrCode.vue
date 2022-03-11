<script setup lang="ts">
import { ref, watch } from "vue";
import { NInput, NImage } from "naive-ui";
import QRCode from "qrcode";
import MyLayout from "@/views/components/Layout.vue";

const inputValueRef = ref<string>();
const qrcodeDataUrlRef = ref<string>();
watch(inputValueRef, async (v) => {
  if (v) {
    qrcodeDataUrlRef.value = await QRCode.toDataURL(v, { width: 400 });
  } else {
    qrcodeDataUrlRef.value = undefined;
  }
});
</script>

<template>
  <my-layout>
    <template #input>
      <n-input v-model:value="inputValueRef" type="textarea" rows="12" />
    </template>
    <template #output>
      <n-image
        v-if="qrcodeDataUrlRef"
        :src="qrcodeDataUrlRef"
        :img-props="{ class: ['w-full'] }"
        alt="QR Code"
      />
    </template>
  </my-layout>
</template>
