<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
import LogsContainer from "@/components/LogsContainer.vue";
</script>

<template>
  <HeaderComponent />
  <!-- eslint-disable vue/no-multiple-template-root -->
  <LogsContainer />
  <RouterView />
</template>

<style scoped></style>
