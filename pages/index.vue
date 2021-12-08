<template>
  <div class="index">
    <section class="about-us">
      <p>
        Located in the heart of the city just off Princes St and around the
        corner from the Apple store you’ll find everything you need to be close
        at hand.
      </p>
      <p>
        With the train, bus and tram station all less than 5 mins walk away
        finding us is easy!
      </p>
      <p>
        Our newly refurbished Hostel has everything you need to make your stay a
        comfortable, safe and fun experience.
      </p>
      <p>Don't wait up, come stay with us !</p>
    </section>
    <aside></aside>
    <section class="photos">
      <NuxtLink to="/" class="color-1 element">
        <div class="element-wrapper">
          <img src="@/static/rowImg2.jpg" alt="placeholder" />
        </div>
      </NuxtLink>
      <div class="color-2">aze</div>
      <div class="color-3">aze</div>
      <div class="color-4">aze</div>
      <div class="color-5">aze</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  header() {},

  /*   async asyncData({ $axios, error }) {
    try {
      const data = await $axios.$get("airtable-api");
      return data;
    } catch (e) {
      error(e); // Show the nuxt error page with the thrown error
    }
  }, */
};
</script>
