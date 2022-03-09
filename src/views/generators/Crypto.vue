<script setup lang="ts">
import { ref, watch } from "vue";
import {
  NInput,
  NGrid,
  NGridItem,
  NCard,
  NH3,
  NP,
  NSpace,
  NSelect,
} from "naive-ui";
import CryptoWorker from "@/workers/crypto?worker";

const cryptoWorker = new CryptoWorker();

cryptoWorker.addEventListener("message", (ev) => {
  if (typeof ev.data === "string") {
    outputValueRef.value = ev.data;
  }
});

const digestAlgorithms = [
  "BLAKE2B-256",
  "BLAKE2B-384",
  "BLAKE2B",
  "BLAKE2S",
  "BLAKE3",
  "KECCAK-224",
  "KECCAK-256",
  "KECCAK-384",
  "KECCAK-512",
  "SHA-384",
  "SHA3-224",
  "SHA3-256",
  "SHA3-384",
  "SHA3-512",
  "SHAKE128",
  "SHAKE256",
  "TIGER",
  // insecure (length-extendable):
  "RIPEMD-160",
  "SHA-224",
  "SHA-256",
  "SHA-512",
  // insecure (collidable and length-extendable):
  "MD5",
  "SHA-1",
] as const;

const inputValueRef = ref<string>();
const outputValueRef = ref<string>();
const algoRef = ref<typeof digestAlgorithms[number]>("MD5");

watch(
  () => [inputValueRef.value, algoRef.value],
  async ([input, algo]) => {
    cryptoWorker.postMessage([input, algo]);
  }
);
</script>

<template>
  <n-card style="flex-grow: 1">
    <n-grid cols="1 m:2" x-gap="12" y-gap="12" responsive="screen">
      <n-grid-item>
        <n-space>
          <n-h3>Input</n-h3>
          <n-select
            v-model:value="algoRef"
            :options="digestAlgorithms.map((i) => ({ label: i, value: i }))"
            :consistent-menu-width="false"
          />
        </n-space>
        <n-input v-model:value="inputValueRef" type="textarea" rows="12" />
      </n-grid-item>
      <n-grid-item>
        <n-h3>Output</n-h3>
        <n-p>{{ outputValueRef }}</n-p>
      </n-grid-item>
    </n-grid>
  </n-card>
</template>
