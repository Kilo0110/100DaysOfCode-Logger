<template>
  <main class="main">
    <div class="logger-container">
      <LogComponent />
    </div>
  </main>
</template>

<script setup>
import LogComponent from "@/components/LogComponent.vue";
</script>

<style lang="scss" scoped>
.main {
  padding: 2em 3em;
}

.logger-container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.75)
  );
  border-radius: 3em;
  border: 1px solid rgba(255, 255, 255, 0.9);
  max-width: 800px;
  padding: 2em;

  @supports (backdrop-filter: blur(50px)) {
    & {
      backdrop-filter: blur(50px);
    }
  }
}
</style>
