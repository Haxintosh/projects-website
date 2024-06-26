<script>
import ReviewCards from "./ReviewCards.vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'ReviewSection',
  components: {
    ReviewCards,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: ['reviews'],
  data() {
    return {
    }
  }
}

</script>

<template>
  <div class="mainReviewSectionContainer">
    <h1 class="mainHeader">Reviews</h1>
    <p class="subHeaderText">PLACEHOLDER</p>
    <div class="mainCarouselContainer">
      <carousel :wrap-around="true" :autoplay="2000" :items-to-show="3" :transition="500">
        <slide v-for="(review, index) in reviews" :key="index" class="reviewSlides">
          <review-cards :img="review.image" :name="review.name" :review="review.review" :rates="review.rates"/>
        </slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<style scoped>
.mainReviewSectionContainer{
  font: 1em 'notoSans', sans-serif;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:#ffffff;
}

.mainHeader{
  font-size: 3em;
  font-weight: bold;
  color: #000000;
  margin-bottom:10px;
}

.subHeaderText{
  font-size: 1.1em;
  margin: 10px;
  color:#71717a;
}

.mainCarouselContainer{
  max-width:1400px;
  width:100%;
}

@media screen and (max-width: 768px){
  .mainCarouselContainer{
    width:100%
  }

  .reviewSlides{
    width:100%
  }
}

/*Carousel*/
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>