<template>
  <button id="theme-status" @click="changeTheme">
    切换Theme
  </button>
</template>

<script setup lang="ts">
const themeTuple = ["dark", "light"];

const changeTheme = () => {
  const theme = themeTuple.at(themeTuple.indexOf(window.theme) - 1);
  document.documentElement.dataset["theme"] = theme;
  localStorage.setItem("theme", theme);

  const themeStatusElement = document.getElementById("theme-status");
  if (themeStatusElement) {
    themeStatusElement.innerText = `当前主题: ${window.theme}`;
  }
  console.log(theme);
};

</script>

<style>
:root[data-theme=dark] {
  color-scheme: dark;
}
</style>
