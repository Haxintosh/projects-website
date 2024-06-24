<script setup>

</script>

<template>
<div class="mainMissionComponentContainer">
  <div class="mainMissionContainer">
    <div class="missionContainer">
      <div class="itemTag">Our Mission</div>
      <h1 class="missionHeader">Empowering Engineering</h1>
      <div class="missionText">Here, we are committed to empowering individuals on their journey to holistic well-being. Through our carefully curated range of products and services, we aim to nourish the mind, body, and soul, helping you achieve optimal health and vitality.</div>
    </div>
    <div class="valueContainer">
      <div class="itemTag">Our Values</div>
      <h3 class="valueSubheader">Mindfulness</h3>
      <div class="valueText">We believe in the power of mindfulness and its ability to transform lives.</div>
      <h3 class="valueSubheader">Sustainability</h3>
      <div class="valueText">We are committed to sustainability and strive to minimize our environmental impact.</div>
      <h3 class="valueSubheader">Integrity</h3>
      <div class="valueText">We strive to operate with the highest level of integrity, always putting our customers first.</div>
    </div>
  </div>
</div>

</template>

<style scoped>
.mainMissionComponentContainer{
  padding: 20px;
  z-index:-1;
  font: 1em 'notoSans', sans-serif;
  display:flex;
  justify-content:center;
  align-items:flex-start;
}
.mainMissionContainer{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 3em;
  margin:3em;
  gap: 20px;
}
.missionContainer{
  flex:1;
  padding: 10px;
  display:flex;
  flex-direction:column;
  width: 50%;
  align-items:flex-start;
  max-width: 700px;
}
.valueContainer{
  flex: 1;
  padding: 10px;
  display:flex;
  flex-direction:column;
  gap: 10px;
  width: fit-content;
  align-items:flex-start;
  max-width:700px;
}
.missionHeader{
  font-size: 3em;
  font-weight: bold;
  color: #000000;
}
.valueSubheader{
  font-size: 1.5em;
  font-weight: bold;
  color: #000000;
}
.itemTag{
  font-size: 0.8em;
  font-weight: bold;
  color: #000000;
  background-color: #f4f4f5;
  width:fit-content;
  border:none;
  padding: 3px 8px 3px 8px;
  border-radius: 8px;
}
@media screen and (max-width: 900px) {
  .mainMissionContainer{
    flex-direction: column;
    align-items: center;
  }
  .missionContainer{
    width: 100%;
  }
  .valueContainer{
    width: 100%;
  }
}
</style>