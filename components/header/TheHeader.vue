<template>
  <header>
    <div class="header-left">
      <NuxtLink :to="localePath('/')"
        ><font-awesome-icon icon="hotel" style="font-size: 1.2em"
      /></NuxtLink>
      <NuxtLink :to="localePath('/')">Steps</NuxtLink>
    </div>
    <div class="header-right">
      <nav>
        <ul>
          <li>
            <NuxtLink :to="localePath('/')">{{
              $t("header.nav.home")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/reviews')">{{
              $t("header.nav.reviews")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/gallery')">{{
              $t("header.nav.gallery")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/contact')">{{
              $t("header.nav.contact")
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <span class="delimiter">//</span>
      <div class="lang">
        <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
        <NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink>
        <NuxtLink :to="switchLocalePath('es')">Español</NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  height: 3em;
}

.header-left,
.header-right,
nav,
ul,
li,
.lang {
  display: flex;
}

.delimiter {
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0 1.25em;
}

a:visited {
  color: inherit;
}

a:hover {
  color: blue;
}

a.nuxt-link-exact-active {
  color: blue;
}
</style>
