<script>
import Carousel from "primevue/carousel";
export default {
  name: 'ReviewSection',
  components: {
    Carousel
  },
  data() {
    return {
      reviews: [
        {
          name: "John Doe",
          review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur, commodi corporis distinctio dolor error eveniet fugit iste maxime mollitia, nulla odit pariatur, perspiciatis quam quas voluptas voluptates? Autem, deleniti.",
          image: "../assets/lorempicsum.jpg",
          rating: 5
        },
        {
          name: "Jane Doe",
          review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid delectus, distinctio eos explicabo fugiat illo illum in modi nam numquam odit omnis optio quibusdam reiciendis sed voluptate voluptatibus! Dolor.",
          image: "../assets/lorempicsum.jpg",
          rating: 4
        }
      ]
    }
  }
}

</script>

<template>

</template>

<style scoped>

</style>