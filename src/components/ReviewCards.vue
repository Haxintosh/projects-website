<script>
import 'buefy/dist/buefy.css'

export default {
  name: 'ReviewCards',
  props: ['img', 'name', 'review', 'rating'],
  components: {
  },
  data() {
    return {
      rating: this.rating
    }
  }
}
</script>

<template>
  <div class="mainReviewCardContainer">
    <div class="reviewCardHeader">
      <div class="reviewCardImage">
        <img :src="img" :alt="name"/>
      </div>
      <div class="reviewCardHeaderText">
        <p>{{name}}</p>
        <b-rate v-model="rating" :disabled="false"></b-rate>
      </div>
    </div>
    <div class="reviewCardBody">
      <p>{{review}}</p>
    </div>
  </div>
</template>

<style scoped>
</style>