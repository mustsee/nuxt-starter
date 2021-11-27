<template>
  <div class="index">
    <div
      class="hero"
      :style="{
        backgroundImage: `url(${images.heroImg})`,
      }"
    >
      <div class="content">
        <h1>Welcome to STEPS !!</h1>
        <div class="book">
          <div class="from">From</div>
          <div class="to">To</div>
          <div class="book-action">BOOK</div>
        </div>
      </div>
    </div>
    <div class="description">
      <div class="row row-1">
        <div
          class="row-img"
          :style="{ backgroundImage: `url(${images.row1Img})` }"
        ></div>
        <div class="row-text">
          <div class="lines" v-for="line in texts.row1Img.lines" :key="line">
            <div v-html="line"></div>
          </div>
        </div>
      </div>
      <div class="row row-2">
        <div class="row-text">
          <div class="lines" v-for="line in texts.row2Img.lines" :key="line">
            <div v-html="line"></div>
          </div>
        </div>
        <div
          class="row-img"
          :style="{ backgroundImage: `url(${images.row2Img})` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Airtable from "airtable";

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
};
</script>

<style scoped>
/***********************
***** HERO SECTION *****
***********************/

.hero {
  height: 660px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 2em 2em 0 0;

  margin-bottom: 3em;
}

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
  background-color: #fff;
  border-radius: 2em;
  font-size: 1em;
  font-weight: 600;
}

.hero .book div {
  padding: 1.5em 3em;
}

.hero .book div:not(:last-child) {
  border-right: 2px solid #efefef;
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
