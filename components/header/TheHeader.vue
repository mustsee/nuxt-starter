<template>
  <header>
    <div class="header-left">
      <div class="header-left">
        <NuxtLink :to="localePath('/')"
          ><div class="logo">
            <img
              src="@/static/princes_street_logo.jpg"
              alt="Princes Street Hostel logo"
            /></div
        ></NuxtLink>
      </div>
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
      <div class="lang" @click="openDropdown = !openDropdown">
        <font-awesome-icon icon="globe" style="font-size: 1.5em; color: #333" />
        <div class="dropdown" v-if="openDropdown">
          <div v-for="locale in $i18n.locales" :key="locale.code">
            <NuxtLink :to="switchLocalePath(locale.code)">{{
              locale.name
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
    };
  },
};
</script>
