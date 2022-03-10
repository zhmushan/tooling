<script setup lang="ts">
import { ref, watch } from "vue";
import { NInput, NP } from "naive-ui";
import MyLayout from "@/views/components/Layout.vue";

const encoder = new TextEncoder();
const decoder = new TextDecoder();
const inputRef = ref<string>("");
const outputRef = ref<string>();
watch(inputRef, async (value) => {
  const buf = await compress(value);
  outputRef.value = arrayBufferToBase64(buf);
});

async function compress(s: string) {
  const byteArray = encoder.encode(s);
  // eslint-disable-next-line no-undef
  const cs = new CompressionStream("gzip");
  const writer = cs.writable.getWriter();
  writer.write(byteArray);
  writer.close();
  return new Response(cs.readable).arrayBuffer();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function decompress(byteArray: ArrayBuffer) {
  // eslint-disable-next-line no-undef
  const cs = new DecompressionStream("gzip");
  const writer = cs.writable.getWriter();
  writer.write(byteArray);
  writer.close();
  return new Response(cs.readable).arrayBuffer().then(function (arrayBuffer) {
    return decoder.decode(arrayBuffer);
  });
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
</script>

<template>
  <my-layout>
    <template #input>
      <n-input v-model:value="inputRef" type="textarea" rows="12" />
    </template>
    <template #output>
      <n-p class="break-all">{{ outputRef }}</n-p>
    </template>
  </my-layout>
</template>
