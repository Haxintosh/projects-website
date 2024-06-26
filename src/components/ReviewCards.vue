<script>
import 'buefy/dist/buefy.css'
import { Rate } from 'buefy'
export default {
  name: 'ReviewCards',
  props: ['img', 'name', 'review', 'rates'],
  components: {
    Rate,
  },
  data() {
    return {
      rating: parseInt(this.rates),
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
        <h2>{{name}}</h2>
        <b-rate v-model="rating" :disabled="true"></b-rate>
      </div>
    </div>
    <div class="reviewCardBody">
      <p>{{review}}</p>
    </div>
  </div>
</template>

<style scoped>
.mainReviewCardContainer{
  background-color: #FFFFFF;
  padding: 1em;
  margin: 1em;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

}

.reviewCardHeader{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap:20px;
}

.reviewCardImage{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.reviewCardHeaderText h2{
  font-size: 1em;
  color: #000000;
  font-weight: bold;
}

.reviewCardBody{
  width: 100%;
  color:#71717a;
  text-align: left;
}
</style>