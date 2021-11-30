<template>
  <div class="index">
    <TheHero />
    <TheGap />
    <TheCarousel />
  </div>
</template>

<script>
/* import Airtable from "airtable";

export default {
  name: "PageIndex",
  data() {
    return {
      images: {
        heroImg: "",
        row1Img: "",
        row2Img: "",
      },
      texts: {
        row1Img: "",
        row2Img: "",
      },
    };
  },
  async asyncData({ env }) {
    try {
      const { apiKey, stepsDB } = env;
      const base = new Airtable({ apiKey }).base(stepsDB);
      const records = await base("main").select().firstPage();
      const images = {};
      const texts = {};
      records.forEach((record) => {
        const { name, img, text } = record.fields;
        const { url } = img[0].thumbnails.large;
        images[name] = url;
        if (text) texts[name] = JSON.parse(text);
      });
      return { images, texts };
    } catch (e) {
      console.log("Error", e);
    }
  },
}; */
</script>

<style scoped>
/***********************
***** HERO SECTION *****
***********************/

.hero .content {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.hero h1 {
  color: var(--primary-color);
  font-size: 3em;
  font-family: "Racing Sans One";
}

.hero .book {
  display: flex;
  height: 4em;
}

.hero .book .picker {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 1em 0 0 1em;
  padding: 0 1em 0 2em;
  width: 305px;
  box-sizing: border-box;
}

.hero .book-action {
  padding: 0 3.25em;
  display: flex;
  align-items: center;
  border-left: 1px solid #eaeaea;
  color: #fff;
  background-color: var(--primary-color);
  border-radius: 0 1em 1em 0;
  font-size: 1.25em;
  font-weight: 600;
}

/***********************
***** DESC SECTION *****
***********************/

.description .row {
  display: flex;
  height: 640px;
}

.description .row div {
  flex: 1;
}

.description .row .row-img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.description .row-text {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 2em;
  background-color: #efefef;
}

.description .row-text .lines {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}
</style>
