<template>
  <div id="app">
    <div class="top">
      <div class="top--background">
        <div></div>
      </div>
      <TheHeader />
      <TheHero v-if="isHome" />
    </div>
    <div v-if="$nuxt.isOffline">You are offline.</div>
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
      if (!this.$route.name) return;
      return this.$route.name.includes("index");
    },
  },
};
</script>
