<script setup lang="ts">
import type { Converter } from "./data-formats/converter";
import { onErrorCaptured, ref, watch } from "vue";
import { NCode, NConfigProvider, NSelect } from "naive-ui";
import hljs from "highlight.js/lib/core";
import MyLayout from "@/views/components/Layout.vue";
import modules from "./data-formats/modules";

type DataFormat = typeof dataFormats[number];

const dataFormats = ["json", "yaml", "toml"] as const;

const converters = new Map<DataFormat, Converter>();

for (const { name, highlighter, ...converter } of modules) {
  hljs.registerLanguage(name, highlighter);
  converters.set(name, converter);
}

const defaultInputFmt: DataFormat = "json";
const defaultOutputFmt: DataFormat = "yaml";

const showErrorRef = ref<boolean>();
const inputValueRef = ref("");
const inputFmtRef = ref<DataFormat>(defaultInputFmt);
const outputFmtRef = ref<DataFormat>(defaultOutputFmt);
const outputValueRef = ref<string>();
const errRef = ref<Error>();

onErrorCaptured(() => {
  showErrorRef.value = true;
});

function updateInputFmt(v: DataFormat) {
  inputFmtRef.value = v;
  convert(inputValueRef.value);
}

function updateOutputFmt(v: DataFormat) {
  outputFmtRef.value = v;
  convert(inputValueRef.value);
}

function convert(v: string) {
  errRef.value = undefined;
  inputValueRef.value = v;
  const [parse, stringify] = [
    converters.get(inputFmtRef.value)!.parse,
    converters.get(outputFmtRef.value)!.stringify,
  ];
  try {
    outputValueRef.value = stringify(parse(inputValueRef.value));
  } catch (e) {
    errRef.value = e;
  }
}

watch(inputValueRef, convert);
</script>

<template>
  <n-config-provider :hljs="hljs">
    <my-layout :show-error="errRef" v-model:input="inputValueRef">
      <template #input-header-extra>
        <n-select
          :value="inputFmtRef"
          :options="dataFormats.map((i) => ({ label: i, value: i }))"
          :consistent-menu-width="false"
          @update-value="updateInputFmt"
        />
      </template>
      <template #output-header-extra>
        <n-select
          :value="outputFmtRef"
          :options="dataFormats.map((i) => ({ label: i, value: i }))"
          :consistent-menu-width="false"
          @update-value="updateOutputFmt"
        />
      </template>
      <template #output>
        <n-code :code="outputValueRef" :language="outputFmtRef" word-wrap />
      </template>
    </my-layout>
  </n-config-provider>
</template>
