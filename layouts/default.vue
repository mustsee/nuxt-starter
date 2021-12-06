<template>
  <div id="app">
    <div class="top">
      <div class="top--background">
        <div></div>
      </div>
      <TheHeader />
      <TheHero v-if="isHome" />
    </div>
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  computed: {
    isHome() {
      return this.$route.name.includes("index");
    },
  },
};
</script>
