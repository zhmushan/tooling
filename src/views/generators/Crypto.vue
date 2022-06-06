<script setup lang="ts">
import { ref, watch } from "vue";
import { NP, NSelect } from "naive-ui";
import CryptoWorker from "@/workers/crypto?worker";
import MyLayout from "@/views/components/Layout.vue";

const cryptoWorker = new CryptoWorker();

cryptoWorker.addEventListener("message", (ev) => {
  const { result, size, time } = ev.data;
  resultRef.value = result;
  sizeRef.value = size;
  timeRef.value = time;
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
const resultRef = ref<string>("");
const sizeRef = ref<number>(0);
const timeRef = ref<number>(0);
const algoRef = ref<typeof digestAlgorithms[number]>("MD5");

watch(
  () => [inputValueRef.value, algoRef.value],
  async ([input, algo]) => {
    cryptoWorker.postMessage([input, algo]);
  }
);
</script>

<template>
  <my-layout v-model:input="inputValueRef">
    <template #input-header-extra>
      <n-select
        v-model:value="algoRef"
        :options="digestAlgorithms.map((i) => ({ label: i, value: i }))"
        :consistent-menu-width="false"
      />
    </template>
    <template #output>
      <n-p class="break-all">{{ algoRef }}: {{ resultRef }}</n-p>
      <n-p class="break-all"
        >{{ $t("Size") }}: {{ sizeRef / 1024 }} {{ $t("KB") }}</n-p
      >
      <n-p class="break-all"
        >{{ $t("Time") }}: {{ timeRef }} {{ $t("ms") }}</n-p
      >
    </template>
  </my-layout>
</template>
