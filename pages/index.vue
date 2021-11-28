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
          <div class="picker">
            <client-only>
              <VueDatePicker
                v-model="date"
                :min-date="new Date()"
                placeholder=" From arrival To departure"
                range
                range-header-text="From %d To %d"
                :range-input-text="rangeInputText"
                fullscreen-mobile
                :visible-years-number="1"
                :max-date="maxDate"
                color="#fa6400"
                validate
              >
                <template #input-icon>
                  <font-awesome-icon icon="calendar-week" style="color: #333" />
                </template>
              </VueDatePicker>
            </client-only>
          </div>

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
import "@mathieustan/vue-datepicker/dist/vue-datepicker.min.css";
import { VueDatePicker } from "@mathieustan/vue-datepicker";

const date = new Date();

export default {
  name: "PageIndex",
  components: { VueDatePicker },
  data() {
    return {
      date: {},
      maxDate: `${date.getFullYear() + 1}-12-31`,
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
  computed: {
    rangeInputText() {
      return ` ${this.date.start}  To  ${this.date.end}`;
    },
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
