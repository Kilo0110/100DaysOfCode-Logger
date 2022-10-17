<template>
  <header class="header">
    <h1 class="header__heading">#100DaysOfCode Daily Logger</h1>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  margin: 2em auto 0;
  text-align: center;
  padding: 2em 4em;
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.75)
  );
  width: 80%;
  border-radius: 2em;
  border: 1px solid rgba(255, 255, 255, 0.9);
  font-size: calc(0.625rem + 1vw);

  @supports (backdrop-filter: blur(50px)) {
    & {
      backdrop-filter: blur(50px);
    }
  }
}
</style>
