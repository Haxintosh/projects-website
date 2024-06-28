<script>
import {onMounted} from "vue";

export default {
  name: 'OpeningHoursSection',
  data() {
    return {
      show: false,
      hours:[
            {day:"Monday", begin:"9am", end:"5pm"},
            {day:"Tuesday", begin:"9am", end:"5pm"},
            {day:"Wednesday", begin:"9am", end:"5pm"},
            {day:"Thursday", begin:"9am", end:"5pm"},
            {day:"Friday", begin:"9am", end:"5pm"},
            {day:"Saturday", begin:"9am", end:"5pm"},
            {day:"Sunday", begin:"9am", end:"5pm"}
          ]
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    }
  },
  setup(){
    console.log("OpeningHoursSection mounted");
    onMounted(() => {
      const list = Array.from(document.querySelectorAll('.hoursEntry'));
      console.log(list);
      const sun  = list[6];
      list.unshift(sun);
      list[new Date().getDay()].style.border = "3px solid #34c759";
    });
  }
}


</script>

<template>
  <div class="mainHoursSectionContainer">
    <h1 class="mainHeader">Opening Hours</h1>
    <p class="subHeaderText">We are open 7 days a week</p>
    <div class="hoursContainer">
      <div class="hoursEntry" v-for="(day, index) in hours" :key="index">
        <p class="dayName">{{day.day}}</p>
        <p class="openEndHeader">OPEN</p>
        <p class="openEndHours">{{day.begin}}</p>
        <p class="openEndHeader">CLOSE</p>
        <p class="openEndHours">{{day.end}}</p>
      </div>
    </div>
  </div>

</template>

<style scoped>
.mainHoursSectionContainer{
  width:100%;
  font: 1em 'notoSans', sans-serif;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:#f4f4f5;
  padding-bottom:30px;
}

.hoursContainer{
  width:100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width:1400px;
}

.hoursEntry{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
  width: calc(100%/7) !important;
  text-align: center;
  border: 3px solid #ffffff;
}

.dayName{
  font-size: 1.5em;
  font-weight: bold;
  color: #000000;
}

.openEndHeader{
  font-size: 1em;
  font-weight: normal;
  color: #71717a;
  margin-bottom: -20px;
}

.openEndHours{
  font-size: 2em;
  font-weight: normal;
  color: #000000;
}

h1{
  font-size: 3em;
  font-weight: bold;
  color: #000000;
}
.subHeaderText{
  font-size: 1.1em;
  margin: 10px;
  color:#71717a;
  margin-bottom: 20px;
}




</style>