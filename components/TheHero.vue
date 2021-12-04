<template>
  <div class="hero">
    <div class="text">
      <h1>princes street</h1>
      <h2>backpackers</h2>
    </div>
    <div class="action-button">
      <div>BOOK NOW</div>
      <span><font-awesome-icon icon="chevron-right" /></span>
    </div>
  </div>
</template>

<style scoped>
.hero {
  padding: 2em 0;
  height: 570px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  margin: 0 auto;
  padding: 0 1em;
  max-width: 1280px;
  /* background-color: #f4f8ff; */
}

.hero .text {
  color: #fff;
  font-family: "Bebas Neue";
  text-align: center;
}

.hero h1 {
  font-size: 5.5em;
}

.hero h2 {
  font-size: 3em;
}

.hero .action-button {
  margin-top: 2em;
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: var(--primary-color);
  padding: 2em 2.5em;
  color: #fff;
  /* box-shadow: 5px 7px 5px 0px var(--primary-color-light); */
  cursor: pointer;
  transition: border-radius 0.2s ease-out;
}

.hero .action-button:hover {
  background: linear-gradient(var(--primary-color-light), var(--primary-color));
  /* box-shadow: 5px 7px 5px 0px var(--primary-color-light); */
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1.5em;
  transition: all 0.2s;
}

.hero .action-button div {
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 2em;
}

.hero .action-button span {
  padding-left: 1em;
  font-size: 1.5em;
  transition: all 0.2s ease-out;
}

.hero .action-button:hover span {
  margin-left: 1em;
  transition-delay: 0.3s;
  transition: all 0.3s;
}
</style>
