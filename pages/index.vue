<template>
  <div class="index">
    <!--  <TheHero /> -->
    <!-- <TheGap />
    <TheCarousel /> -->
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

    <section class="our-services">
      <h1>our services</h1>
      <div class="wrapper">
        <div class="service">
          <div class="icon">
            <img src="@/assets/svg/reception.svg" alt="" srcset="" />
          </div>
          <div class="text">24hr Reception</div>
        </div>
        <div class="service">
          <div class="icon">
            <img src="@/assets/svg/reception.svg" alt="" srcset="" />
          </div>
          <div class="text">24hr Reception</div>
        </div>
        <div class="service">
          <div class="icon">
            <img src="@/assets/svg/reception.svg" alt="" srcset="" />
          </div>
          <div class="text">24hr Reception</div>
        </div>
        <div class="service">
          <div class="icon">
            <img src="@/assets/svg/reception.svg" alt="" srcset="" />
          </div>
          <div class="text">24hr Reception</div>
        </div>
        <div class="service">
          <div class="icon">
            <img src="@/assets/svg/reception.svg" alt="" srcset="" />
          </div>
          <div class="text">24hr Reception</div>
        </div>
        <div class="service">
          <div class="icon">
            <img src="@/assets/svg/reception.svg" alt="" srcset="" />
          </div>
          <div class="text">24hr Reception</div>
        </div>
        <div class="service">
          <div class="icon">
            <img src="@/assets/svg/reception.svg" alt="" srcset="" />
          </div>
          <div class="text">24hr Reception</div>
        </div>
        <div class="service">
          <div class="icon">
            <img src="@/assets/svg/reception.svg" alt="" srcset="" />
          </div>
          <div class="text">24hr Reception</div>
        </div>
        <div class="service">
          <div class="icon">
            <img src="@/assets/svg/reception.svg" alt="" srcset="" />
          </div>
          <div class="text">24hr Reception</div>
        </div>
        <div class="service">
          <div class="icon">
            <img src="@/assets/svg/reception.svg" alt="" srcset="" />
          </div>
          <div class="text">24hr Reception</div>
        </div>
        <div class="service">
          <div class="icon">
            <img src="@/assets/svg/reception.svg" alt="" srcset="" />
          </div>
          <div class="text">24hr Reception</div>
        </div>
        <div class="service">
          <div class="icon">
            <img src="@/assets/svg/reception.svg" alt="" srcset="" />
          </div>
          <div class="text">24hr Reception</div>
        </div>
      </div>
    </section>
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
.index {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 1.5em;
  max-width: 1140px;
  margin: 0 auto;
}

.index section.about-us {
  /* height: 200px; */
  background-color: #fff;
  margin-top: -2em;
}

section.about-us {
  font-family: "Montserrat";
  font-weight: 500;
  padding: 2.5em 3em 2em 3em;
}

section.about-us p {
  margin-bottom: 1em;
}

section.about-us p:last-child {
  font-weight: 600;
}

aside {
  margin-top: 1em;
  width: 100%;
  /*  background-image: url("@/assets/img/jumping-girl.jpg");
  background-size: cover;
  background-repeat: no-repeat; */
}

.our-services {
  padding: 2.5em 0 2em;
}

.our-services h1 {
  background-color: #fff;
  text-transform: uppercase;
  color: #000;
  font-size: 1.5em;
  width: fit-content;
  font-family: "Montserrat";
  font-weight: 600;
  padding: 0.5em 1em;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
}

.service {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
  color: #fff;
  width: 25%;
}

.icon img {
  width: 3em;
  height: 3em;
  padding: 1em;
}

.service .text {
  background-color: white;
  color: black;
  padding: 0.15em 0.75em;
}

/***********************
***** HERO SECTION *****
***********************/
/* 
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
} */

/***********************
***** DESC SECTION *****
***********************/
/* 
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
} */
</style>
