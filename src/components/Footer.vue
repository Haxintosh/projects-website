<script>
export default {
  name: 'Footer',
  props:['companyName'],
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    }
  },
}
</script>

<template>
  <div class="footerComponentContainer">
    <div class="footerContainer">
      <p class="copyright">
        &copy;{{new Date().getFullYear()}} {{companyName}} All Rights Reserved.
      </p>

      <div class="socialMediaIconsContainer">
        <i class="fa-brands fa-facebook-f socialMediaIcons"></i>
        <i class="fa-brands fa-twitter socialMediaIcons"></i>
        <i class="fa-brands fa-instagram socialMediaIcons"></i>
        <i class="fa-brands fa-google socialMediaIcons"></i>
      </div>

      <div class="noticesContainer">
        <a href="privacy" class="notice">Privacy policy</a>
        <a href="tos" class="notice">Terms of service</a>
      </div>
    </div>
  </div>

</template>

<style scoped>
*{
  overflow-x:hidden;
}
.footerComponentContainer{
  overflow-x:hidden;
  width:100%;
}
.footerContainer {
  font: 1em 'notoSans', sans-serif;
  background-color: #FFFFFF;
  padding: 2px;
  padding-left: 8px;
  left: 0;
  width: 100%;
  position: relative; /*absolute crab*/
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e4e4e7;
  font-size: 0.9em;
}

.copyright{
  color:#75757e;
}

.noticesContainer{
  display: flex;
  flex-direction: row;
  gap:15px;
  padding-right:40px;
}

.socialMediaIconsContainer{
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding-left: 40px;

}

.notice {
  color: #000000;
  text-decoration: none;
}

</style>