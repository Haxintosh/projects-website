<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import HeroSection from "./HeroSection.vue";
import MissionSection from "./MissionSection.vue";
import ServicesSection from "./ServicesSection.vue";
import ReviewCards from "./ReviewCards.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    HeroSection,
    MissionSection,
    ServicesSection,
    ReviewCards
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

  <ReviewCards img="../assets/review1.jpg" name="John Doe" review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui." rating="4"></ReviewCards>
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