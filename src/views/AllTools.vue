<script setup lang="ts">
import { RouterLink } from "vue-router";
import { NCard, NGrid, NGridItem, NP, NH3 } from "naive-ui";
import { menuGroups } from "@/menu";

function getMenuKeyByLabel(label: string): string {
  return `/${label.toLowerCase().replace(/\s+/g, "_")}`;
}
</script>

<template>
  <template v-for="([label, children], index) of menuGroups" v-bind:key="index">
    <n-h3>{{ label }}</n-h3>
    <n-grid x-gap="12" y-gap="8" cols="4 xs:2 s:3" responsive="screen">
      <n-grid-item
        v-for="([chLabel, desc], chIndex) of children"
        v-bind:key="chIndex"
      >
        <router-link
          :to="getMenuKeyByLabel(`${label}_${chLabel}`)"
          style="text-decoration: none"
        >
          <n-card :title="chLabel" size="large" hoverable style="cursor: pointer">
            <n-p>{{ desc }}</n-p>
          </n-card>
        </router-link>
      </n-grid-item>
    </n-grid>
  </template>
</template>

<style>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
