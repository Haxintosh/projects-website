<script>
import {onMounted} from "vue";

export default {
  name: 'ContactSection',
  data() {
    return {
      show: false,
      originAddress: ''
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
    getDirections() {
      directionsEmbedParams.origin = this.originAddress.replace(' ', '+');
      const url = `${directionsEmbedEndpoint}?${encodeQueryData(directionsEmbedParams)}`;
      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.width = 600;
      iframe.height = 450;
      iframe.style.width="100%";
      document.querySelector('.embedIframe').innerHTML = '';
      document.querySelector('.embedIframe').appendChild(iframe);
    }
  },
  setup(){
    onMounted(()=>{
      init();
    })
  }
}
const MAPS_EMBED_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const locationEmbedEndpoint = 'https://www.google.com/maps/embed/v1/place';
const directionsEmbedEndpoint = 'https://www.google.com/maps/embed/v1/directions';
const locationEmbedParams = {
  key: MAPS_EMBED_API_KEY,
  q: 'La+Ronde',
  maptype: 'roadmap',
  zoom: 14
};

const directionsEmbedParams = {
  key: MAPS_EMBED_API_KEY,
  origin: '',
  destination: 'La+Ronde',
};

function init(){
  document.querySelector('.embedIframe').innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.src=`${locationEmbedEndpoint}?${encodeQueryData(locationEmbedParams)}`;
  iframe.width = 600;
  iframe.height = 450;
  iframe.style.width="100%";
  document.querySelector('.embedIframe').appendChild(iframe);
}

function encodeQueryData(data) {
  const ret = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  return ret.join('&');
}
</script>

<template>
  <div class="mainContactSectionContainer">
      <h1 class="mainHeader">Contact Us</h1>
      <p class="subHeaderText">We are here to help</p>
    <div class="centerContainer">
      <div class="contactText">
        <p class="subSubHeaderText">Our address:</p>
        <p class="contactInfo">PLACEHOLDER</p>
        <p class="subSubHeaderText">Phone:</p>
        <p class="contactInfo">PLACEHOLDER</p>
        <p class="subSubHeaderText">Email:</p>
        <p class="contactInfo">PLACEHOLDER</p>
      </div>
      <div class="embedMap">
        <div class="addressInput">
          <input type="text" v-model="originAddress" placeholder="Enter your address" class="addressInputBox">
          <button @click="getDirections">Get Directions</button>
        </div>
        <div class="embedIframe">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainContactSectionContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font: 1em 'notoSans', sans-serif;
  width:100%;
}
.centerContainer{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  max-width: 1400px;
  width: 100%;
}
.contactText{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  width:50%;
}
.embedMap{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width:50%;
}
.embedIframe{
  width: 100%;
  height: 450px;
  border-radius: 10px;
  overflow: hidden;
}
.addressInput{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  width:100%;
}
.mainHeader{
  font-size: 3em;
  font-weight: bold;
  color: #000000;
  margin-bottom:0;
}
.subHeaderText{
  font-size: 1.1em;
  margin: 10px;
  margin-top:0;
  color:#71717a;
}
.subSubHeaderText{
  font-size: 1.5em;
  font-weight: bold;
  color: #000000;
}
.addressInputBox{
  width: 60%;
  height: 40px;
  border-radius: 5px;
  border: 4px solid #71717a;
  padding: 5px;
  transition: all 0.3s;
}
.addressInputBox:focus{
  outline: none;
  border: 4px solid #007aff;
}
.addressInputBox:hover{
  border: 4px solid #007aff;
}
button{
  background-color: #007aff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.3s;
}
</style>