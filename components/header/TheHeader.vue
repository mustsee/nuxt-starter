<template>
  <header>
    <div class="background"></div>
    <div class="header-wrapper">
      <div class="header-left">
        <NuxtLink :to="localePath('/')"
          ><div class="logo">
            <img
              src="@/assets/img/princes_street_logo.jpg"
              alt="Princes Street Hostel logo"
            /></div
        ></NuxtLink>
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
            style="font-size: 1.5em; color: #000"
          />
          <div class="dropdown" v-if="openDropdown">
            <div v-for="locale in $i18n.locales" :key="locale.code">
              <NuxtLink :to="switchLocalePath(locale.code)">{{
                locale.name
              }}</NuxtLink>
            </div>
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
  position: relative;
}

header .background {
  position: absolute;
  background: var(--primary-color);
  height: 6em;
  width: 100%;
}

.header-wrapper {
  position: relative;
  display: flex;

  height: 9em;

  margin: 0 auto;
  padding: 0 1em;
  max-width: 1280px;

  background-color: #fff;

  z-index: 100;
}

.header-left,
.header-right,
nav,
ul,
li,
.lang {
  display: flex;
}

li {
  font-family: "Bebas Neue";
  font-size: 1.75em;
}

a {
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}

li a {
  padding: 0 1em;
}

a:visited {
  color: inherit;
}

a:hover {
  text-decoration: underline;
}

a.nuxt-link-exact-active {
  color: var(--primary-color);
  text-decoration: underline;
}

/* STYLING */
.header-right {
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.header-left .logo {
  height: 8em;
  width: 8em;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
}

.header-left .logo img {
  height: 7em;
  width: 7em;
}

.header-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav {
  padding: 0 0.5em;
  height: 5em;
}

.lang {
  font-family: "Montserrat";
  font-weight: 600;
  position: relative;
  padding: 0 2em;
  align-items: center;
  cursor: pointer;
  height: 5em;
}

.dropdown {
  position: absolute;
  top: 6em;
  right: 3em;
  padding: 1em;
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
