<template>
  <div id="app">
    <div class="content-wrapper">
      <div class="background">
        <TheHeader />
        <TheHero v-if="isHome" />
      </div>
      <main>
        <Nuxt />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isHome() {
      return this.$route.name.includes("index");
    },
  },
  mounted() {
    this.isHome;
  },
};
</script>

<style scoped>
#app {
  position: relative;
  background-color: var(--primary-color);
  font-family: Outfit, "sans-serif";
  box-sizing: border-box;
  color: #000;
}

.background {
  background-image: url("@/assets/img/heroImg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.content-wrapper {
  /* margin: 0 auto; */
  /* padding: 0 1rem; */
  /* max-width: 1280px; */
  min-height: 100vh;
}

main {
  /*  position: absolute;
  width: 100%;
  top: 42em; */
}
</style>
