<template>
  <div id="app">
    <div class="content-wrapper">
      <TheHeader />
      <main>
        <Nuxt />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<style scoped>
#app {
  background-color: #fefefe;
  font-family: Outfit, "sans-serif";
  box-sizing: border-box;
  color: #000;
}

.content-wrapper {
  /* margin: 0 auto; */
  /* padding: 0 1rem; */
  /* max-width: 1280px; */
  min-height: 100vh;
}

main {
  margin-top: 1em;
}
</style>
