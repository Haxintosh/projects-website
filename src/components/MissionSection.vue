<script setup>

</script>

<template>
<div class="mainMissionComponentContainer">
  <h1 class="sectionHeader">About us</h1>
  <p class="subHeaderText">Discover who we are</p>
  <div class="mainMissionContainer">
    <div class="missionContainer">
      <div class="itemTag">Our Mission</div>
      <h1 class="missionHeader">Empowering Engineering</h1>
      <div class="missionText">Here, we are committed to empowering individuals on their journey to holistic well-being. Through our carefully curated range of products and services, we aim to nourish the mind, body, and soul, helping you achieve optimal health and vitality.</div>
    </div>
    <div class="valueContainer">
      <div class="itemTag">Our Values</div>
      <h3 class="valueSubheader">Holistic Approach</h3>
      <div class="valueText">We believe in nourishing the mind, body, and spirit for lasting well-being.</div>
      <h3 class="valueSubheader">Natural Ingredients</h3>
      <div class="valueText">Our products are crafted with the finest organic and sustainable materials.</div>
      <h3 class="valueSubheader">Mindful Living</h3>
      <div class="valueText">We inspire and empower our community to embrace a balanced, intentional lifestyle.</div>
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
  align-items:center;
  flex-direction:column;
}
.mainMissionContainer{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 30px;
  margin:20px;
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
.sectionHeader{
  font-size: 3em;
  font-weight: bold;
  color: #000000;
  margin-bottom:-5px;
}
.subHeaderText{
  font-size: 1.1em;
  margin: 10px;
  color:#71717a;
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