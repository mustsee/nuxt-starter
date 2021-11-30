<template>
  <section class="carousel">
    <!-- <silent-box :gallery="gallery"></silent-box> -->
  </section>
</template>

<script>
export default {
  name: "CarouselComponent",
  data() {
    return {
      gallery: [
        {
          src: "heroImg.jpg",
          description: "Star Night Sky Ravine by Mark Basarab, from Unsplash.",
          alt: "Blue starry night photo.",
          thumbnailWidth: "220px",
        },
        {
          src: "heroImg2.jpg",
          description: "Corno Nero, Italy by Luca Zanon, from Unsplash.",
          alt: "Landscape photo of mountain with fog.",
          thumbnailWidth: "220px",
        },
      ],
    };
  },
};
</script>

<style scoped>
section.carousel {
  height: 40em;
  background-color: #f4f8ff;
}
</style>
