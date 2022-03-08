<script setup lang="ts">
import { ref, watch } from "vue";
import { NInput, NGrid, NGridItem, NCard, NH3, NImage } from "naive-ui";
import QRCode from "qrcode";

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
  <n-card style="flex-grow: 1">
    <n-grid cols="1 m:2" x-gap="12" y-gap="12" responsive="screen">
      <n-grid-item>
        <n-h3>Input</n-h3>
        <n-input v-model:value="inputValueRef" type="textarea" rows="12" />
      </n-grid-item>
      <n-grid-item>
        <n-h3>Output</n-h3>
        <n-image
          v-if="qrcodeDataUrlRef"
          :src="qrcodeDataUrlRef"
          :img-props="{ style: 'width: 100%' }"
          alt="QR Code"
        />
      </n-grid-item>
    </n-grid>
  </n-card>
</template>
