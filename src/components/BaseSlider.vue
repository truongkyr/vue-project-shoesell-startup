<template>
  <div class="slider-box">
    <div class="slider-content">
      <Splide :options="options" aria-label="My Favorite Images">
        <SplideSlide>
          <img src="../assets/img/poster1.jpg" alt="Sample 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/img/poster2.jpg" alt="Sample 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/img/poster3.jpg" alt="Sample 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/img/poster4.jpg" alt="Sample 4" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/img/poster5.jpg" alt="Sample 5" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/img/poster6.jpg" alt="Sample 6" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/img/poster7.jpg" alt="Sample 7" />
        </SplideSlide>
        <SplideSlide>
          <img src="../assets/img/poster8.jpg" alt="Sample 8" />
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>


<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';

export default defineComponent( {
    components: {
    Splide,
    SplideSlide,
  },

  setup() {
    const options = {
      rewind: true,
      gap   : '1rem',
    };

    return { options };
  },
});
</script>


<style scoped>
.splide__slide img{
  height: 400px;
  object-fit: cover;
  display: block;
  width: 100%;
}
</style>