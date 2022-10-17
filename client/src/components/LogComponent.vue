<template>
  <div class="daily-log">
    <aside class="daily-log__sidebar">
      <div class="daily-log__sidebar__content">
        <i class="daily-log__side-bar__icon"></i>
        <p class="daily-log__side-bar__day-count">Day 3</p>
        <p class="daily-log__side-bar__day-date">Sat Oct 15 2022</p>
      </div>
    </aside>
    <div class="daily-log__main-content">
      <h2 class="daily-log__main-content__header">What I did on this day</h2>
      <ul class="daily-log__main-content__commit-log-container">
        <li class="daily-log__main-content__commit">Commit #1</li>
        <li class="daily-log__main-content__commit">Commit #2</li>
        <li class="daily-log__main-content__commit">Commit #3</li>
        <li class="daily-log__main-content__commit">Commit #4</li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.daily-log {
  display: flex;
  font-size: clamp(1rem, 1rem + 1vw, 30px);
  border-bottom: 1px dashed black;
  padding-bottom: 1em;
  margin-bottom: 1em;

  &__sidebar__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;

    &::before,
    &::after {
      content: "";
      position: absolute;
      background-color: grey;
      width: 8px;
      height: 30%;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }
}
</style>
