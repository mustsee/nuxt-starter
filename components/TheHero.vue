<template>
  <div class="hero">
    <div class="hero-wrapper">
      <div class="hero-left">
        <div class="hero-left-wrapper">
          <h1>princes street</h1>
          <h2>backpackers east hostel</h2>
          <div class="action-button">
            <div>BOOK</div>
            <span><font-awesome-icon icon="chevron-right" /></span>
          </div>
        </div>
        <img src="@/assets/svg/balloon.svg" alt="Exploring" />
      </div>
      <div class="hero-right">
        <div class="logo">
          <img
            src="@/assets/img/princes_street_logo.jpg"
            alt="Princes Street Hostel logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  padding: 2em 0;
  height: 360px;
  background-color: #f4f8ff;
  /* background-image: url("@/assets/img/heroImg.jpg"); */
}

.hero-wrapper {
  height: inherit;
  display: flex;
  margin: 0 auto;
  padding: 0 1em;
  max-width: 1280px;
}

.hero-left {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: right;
  font-family: "Bebas Neue";
}

.hero-left img {
  position: absolute;
  bottom: 72%;
  height: 3em;
}

.hero-left h1 {
  font-size: 4.5em;
}

.hero-left h2 {
  font-size: 3em;
}

.hero-left .action-button {
  margin-top: 2em;
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: var(--primary-color);
  padding: 0.75em 1.5em;
  color: #fff;
  box-shadow: 5px 7px 5px 0px #cecece;
  cursor: pointer;
  transition: border-radius 0.2s ease-out;
}

.hero-left .action-button:hover {
  background: linear-gradient(var(--primary-color-light), var(--primary-color));
  box-shadow: 5px 7px 5px 0px #aeaeae;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 1em;
  transition: all 0.2s;
}

.hero-left .action-button div {
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 2em;
}

.hero-left .action-button span {
  padding-left: 1em;
  font-size: 1.5em;
  transition: all 0.2s ease-out;
}

.hero-left .action-button:hover span {
  margin-left: 0.5em;
  transition-delay: 0.2s;
  transition: all 0.2s;
}

.hero-right {
  /* background-color: lightsalmon; */
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.hero-right .logo {
  height: 18em;
  width: 18em;
  border-radius: 50%;
  background-color: var(--primary-color);
}

.hero-right .logo img {
  height: inherit;
  border-radius: 50%;
}
</style>
