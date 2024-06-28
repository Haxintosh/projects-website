<script>
import {onMounted} from "vue";

import 'buefy/dist/buefy.css'
import {Loading} from "buefy";
import {ToastProgrammatic as Toast} from "buefy";
import toast from "buefy/src/components/toast/index.js";

export default {
  name: 'ContactSection',
  data() {
    return {
      show: false,
      originAddress: '',
      isLoading:true,
    }
  },
  components: {
    Loading,
    Toast
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
    getDirections() {
      if (!this.originAddress) {
        this.errorToast();
        return;
      }
      directionsEmbedParams.origin = this.originAddress.replace(' ', '+');
      const url = `${directionsEmbedEndpoint}?${encodeQueryData(directionsEmbedParams)}`;
      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.width = 600;
      iframe.height = 450;
      iframe.style.width="100%";
      iframe.onerror = this.errorToast;
      document.querySelector('.GMAPS').innerHTML = '';
      document.querySelector('.GMAPS').appendChild(iframe);
    },
    errorToast(){
      this.$buefy.toast.open({
        message: 'Invalid address',
        type: 'is-danger'
      });
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
  document.querySelector('.GMAPS').innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.src=`${locationEmbedEndpoint}?${encodeQueryData(locationEmbedParams)}`;
  iframe.width = 600;
  iframe.height = 450;
  iframe.style.width="100%";
  iframe.onerror = this.errorToast;
  document.querySelector('.GMAPS').appendChild(iframe);
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
      <div class="embedMap">
        <h1 class="subMainHeader">Find us</h1>
        <p class="subSubMainHeaderHeaderText">Visit us or get directions to our location</p>
        <div class="embedIframe">
          <div class="loading">
            <b-loading v-model="isLoading" :can-cancel="false" :is-full-page="false" class="loadingOverlay"></b-loading>
          </div>
          <div class="GMAPS"></div>
        </div>
        <div class="addressInputHeader">Enter your address</div>
        <div class="addressInput">
          <input type="text" v-model="originAddress" placeholder="333 Rue de la Commune" class="addressInputBox">
          <button :class="{ buttonBlue: originAddress }" @click="getDirections">Get Directions</button>
        </div>
      </div>
      <div class="contactText">
        <h1 class="subMainHeader">Get in touch</h1>
        <p class="subSubMainHeaderHeaderText">Contact us for any questions or inquiries</p>
        <p class="subSubHeaderText">Our address:</p>
        <p class="contactInfo">PLACEHOLDER</p>
        <p class="subSubHeaderText">Phone:</p>
        <p class="contactInfo">PLACEHOLDER</p>
        <p class="subSubHeaderText">Email:</p>
        <p class="contactInfo">PLACEHOLDER</p>
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
  gap: 30px;
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
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  width:50%;
  position: relative;
}
.embedIframe{
  width: 100%;
  height: 450px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.addressInput{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  margin-bottom:-20px;
}
.addressInputBox{
  width: 65%;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #e4e4e7;
  padding: 5px;
  transition: all 0.3s;
}
.addressInputBox:focus{
  outline: none;
  border: 2px solid #007aff;
}
.addressInputBox:hover{
  border: 2px solid #007aff;
}
button{
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 40px 10px 40px;
  font-size: 1em;
  width: 35%;
  cursor: pointer;
  transition: all 0.3s;
}
.buttonBlue {
  background-color: #007aff;
}

.subSubMainHeaderHeaderText{
  font-size: 1.1em;
  color: #71717a;
}
.subMainHeader{
  font-size: 2em;
  font-weight: bold;
  color: #000000;
  margin-bottom:-20px;
}
.addressInputHeader{
  font-size: 0.9em;
  font-weight: normal;
  color: #000000;
}
.loadingOverlay{
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading{
  width: 100%;
  height: 450px;
  z-index: -1;
  position:absolute;
  top:0;
  left:0;
}
.GMAPS{
  width: 100%;
  height: 450px;
  z-index: 2;
  position: relative;
  border-radius: 10px;
}
</style>