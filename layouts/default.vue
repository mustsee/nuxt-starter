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
  background-color: #efefef;
}

.content-wrapper {
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1280px;
  min-height: 100vh;
}

main {
  margin-top: 100px;
  text-align: center;
  font-size: 2em;
}
</style>
