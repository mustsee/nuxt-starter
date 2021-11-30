<template>
  <section class="gap">
    <div class="gap-wrapper">
      <p>
        Located in the heart of the city just off Princes St and around the
        corner from the Apple store you’ll find everything you need to be close
        at hand.
      </p>
      <hr />
      <p>
        With the train, bus and tram station all less than 5 mins walk away
        finding us is easy!
      </p>
      <hr />
      <p>
        Our newly refurbished Hostel has everything you need to make your stay a
        comfortable, safe and fun experience.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "GapComponent",
};
</script>

<style scoped>
section.gap {
  font-weight: 500;
  background-image: url("@/assets/img/tiles/circle-blues.png");
}

section .gap-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 12em;
  margin: 0 auto;
  padding: 2em 1em;
  max-width: 1280px;
}

section.gap p {
  width: 60%;
  margin: 0 auto;
  font-family: "Montserrat";
  font-size: 1.25em;
  text-align: center;
  color: #fff;
}

section.gap hr {
  border: none;
  border-top: 2px solid var(--primary-color);
  color: #fff;
  background-color: var(--primary-color);
  height: 1px;
  width: 20%;
}
</style>
