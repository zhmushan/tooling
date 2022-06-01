<script setup lang="ts">
import { RouterLink } from "vue-router";
import { NCard, NGrid, NGridItem, NP, NH3 } from "naive-ui";
import { MenuGroups } from "@/menu";
</script>

<template>
  <template
    v-for="([label, path, children], index) of MenuGroups"
    v-bind:key="index"
  >
    <n-h3 :style="{ marginTop: index === 0 ? 0 : undefined }">{{
      $t(label)
    }}</n-h3>
    <n-grid
      x-gap="12"
      y-gap="8"
      cols="1 400:2 640:3 1400:6 1900:8 2400:10 2900:12"
    >
      <n-grid-item v-for="(ch, chIndex) of children" v-bind:key="chIndex">
        <router-link :to="`${path}${ch.path}`" style="text-decoration: none">
          <n-card
            :title="$t(ch.label)"
            size="large"
            hoverable
            style="cursor: pointer"
          >
            <n-p>{{ $t(ch.desc) }}</n-p>
          </n-card>
        </router-link>
      </n-grid-item>
    </n-grid>
  </template>
</template>
