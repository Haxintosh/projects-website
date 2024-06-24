<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import HeroSection from "./HeroSection.vue";
import MissionSection from "./MissionSection.vue";
import ServicesSection from "./ServicesSection.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    HeroSection,
    MissionSection,
    ServicesSection
  },
  data() {
    return {
      navList: [
        {name: "Home", link: "#"},
        {name: "About", link: "#"},
        {name: "Services", link: "#"},
        {name: "Contact", link: "#"}
      ],
      companyName: "XYZ"
    }
  }
}
</script>

<template>
  <Navbar :navList="navList" />

  <HeroSection />

  <MissionSection />

  <ServicesSection />

  <Footer :companyName="companyName" />
</template>

<style scoped>
/*CSS is horseshit*/
@font-face {
  font-family: 'notoSans';
  src: url('../assets/notoSans.ttf') format('truetype');
}

*{
  overflow:hidden;
  margin:0;

}
html{
  margin:0;
  width:100%;
  overflow:hidden;
}
</style>