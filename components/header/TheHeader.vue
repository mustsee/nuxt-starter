<template>
  <header>
    <div class="header-left">
      <NuxtLink :to="localePath('/')"
        ><font-awesome-icon
          icon="hotel"
          style="font-size: 1.2em; color: #47494e"
      /></NuxtLink>
      <NuxtLink :to="localePath('/')"><span class="name">steps</span></NuxtLink>
    </div>
    <div class="header-right">
      <nav>
        <ul>
          <li v-for="route in routes" :key="route.name">
            <NuxtLink :to="localePath(route.path)">{{
              $t(route.text)
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="lang" @click="openDropdown = !openDropdown">
        <font-awesome-icon
          icon="globe"
          style="font-size: 1.2em; color: #47494e"
        />
        <div class="dropdown" v-if="openDropdown">
          <div v-for="locale in $i18n.locales" :key="locale.code">
            <NuxtLink :to="switchLocalePath(locale.code)">{{
              locale.name.toUpperCase()
            }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      openDropdown: false,
      routes: [
        { text: "header.nav.home", path: "/" },
        { text: "header.nav.reviews", path: "/reviews" },
        { text: "header.nav.gallery", path: "/gallery" },
        { text: "header.nav.contact", path: "/contact" },
      ],
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  height: 4em;
}

.header-left,
.header-right,
nav,
ul,
li,
.lang {
  display: flex;
}

a {
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0 1.25em;
}

li a {
  padding: 0 2.25em;
}

a:visited {
  color: inherit;
}

a:hover {
  color: var(--primary-color);
}

a.nuxt-link-exact-active {
  color: var(--primary-color);
}

/* STYLING */
.header-left,
.header-right {
  display: flex;
  justify-content: space-between;
}

.header-left .name {
  font-size: 2em;
  font-family: "Racing Sans One";
  color: var(--primary-color);
}

.header-right {
  display: flex;
  justify-content: space-between;
}

nav {
  background: #fff;
  padding: 0 0.5em;
  border-radius: 0 0 1em 1em;
  box-shadow: 0 0 1.11111vw rgb(50 50 93 / 25%),
    0 0 0.34722vw rgb(77 77 77 / 10%);
}

.lang {
  position: relative;
  padding: 0 2em 0 3em;
  align-items: center;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  top: 5em;
  right: 2em;
  padding: 0.75em;
  border-radius: 1em 0 1em 1em;
  box-shadow: 0 0 1.11111vw rgb(50 50 93 / 25%),
    0 0 0.34722vw rgb(77 77 77 / 10%);
  background-color: #fff;
  z-index: 100;
}

.dropdown div {
  padding: 0.2em;
  text-align: right;
}
</style>
