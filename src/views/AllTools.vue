<script setup lang="ts">
import { RouterLink } from "vue-router";
import { NCard, NGrid, NGridItem, NP, NH3 } from "naive-ui";
import { menuGroups } from "@/menu";

function getMenuKeyByLabel(label: string): string {
  return `/${label.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`;
}
</script>

<template>
  <template v-for="([label, children], index) of menuGroups" v-bind:key="index">
    <n-h3 :style="{ marginTop: index === 0 ? 0 : undefined }">{{ label }}</n-h3>
    <n-grid
      x-gap="12"
      y-gap="8"
      cols="1 400:2 640:3 1400:6 1900:8 2400:10 2900:12"
    >
      <n-grid-item
        v-for="([chLabel, desc], chIndex) of children"
        v-bind:key="chIndex"
      >
        <router-link
          :to="getMenuKeyByLabel(`${label}_${chLabel}`)"
          style="text-decoration: none"
        >
          <n-card
            :title="chLabel"
            size="large"
            hoverable
            style="cursor: pointer"
          >
            <n-p>{{ desc }}</n-p>
          </n-card>
        </router-link>
      </n-grid-item>
    </n-grid>
  </template>
</template>
