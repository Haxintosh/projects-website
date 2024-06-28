<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import HeroSection from "./HeroSection.vue";
import MissionSection from "./MissionSection.vue";
import ServicesSection from "./ServicesSection.vue";
import ReviewCards from "./ReviewCards.vue";
import ReviewSection from "./ReviewSection.vue";
import OpeningHoursSection from "./OpeningHoursSection.vue";
import ContactSection from "./ContactSection.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    HeroSection,
    MissionSection,
    ServicesSection,
    ReviewCards,
    ReviewSection,
    OpeningHoursSection,
    ContactSection
  },
  data() {
    return {
      navList: [
        {name: "Home", link: "#"},
        {name: "About", link: "#"},
        {name: "Services", link: "#"},
        {name: "Contact", link: "#"}
      ],
      companyName: "XYZ",
      reviews: [
        {
          name: "John Doe",
          review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur, commodi corporis distinctio dolor error eveniet fugit iste maxime mollitia, nulla odit pariatur, perspiciatis quam quas voluptas voluptates? Autem, deleniti.",
          image: "src/assets/loremSQUARE.jpg",
          rates: 5
        },
        {
          name: "Jane Doe",
          review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid delectus, distinctio eos explicabo fugiat illo illum in modi nam numquam odit omnis optio quibusdam reiciendis sed voluptate voluptatibus! Dolor.",
          image: "src/assets/loremSQUARE.jpg",
          rates: 4
        },
        {
          name: "Hank Doe",
          review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid delectus, distinctio eos explicabo fugiat illo illum in modi nam numquam odit omnis optio quibusdam reiciendis sed voluptate voluptatibus! Dolor.",
          image: "src/assets/loremSQUARE.jpg",
          rates: 4
        },
        {
          name: "Mary Smith",
          review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cumque ducimus earum eos excepturi facilis hic illo impedit inventore iure laborum minus natus necessitatibus nobis non optio perspiciatis quia, sunt.",
          image: "src/assets/loremSQUARE.jpg",
          rates: 5
        },
        {
          name: "James Johnson",
          review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam atque commodi culpa deserunt dicta distinctio ducimus ea eius exercitationem, harum ipsum iste maiores necessitatibus, obcaecati odit provident qui?",
          image: "src/assets/loremSQUARE.jpg",
          rates: 3
        },
        {
          name: "Patricia Brown",
          review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet atque consectetur corporis distinctio dolor earum fugiat id ipsa iure laboriosam laborum maiores minus natus necessitatibus, nihil odit officiis quis?",
          image: "src/assets/loremSQUARE.jpg",
          rates: 4
        },
        {
          name: "Robert Garcia",
          review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at beatae culpa cumque debitis deserunt distinctio eaque eveniet, explicabo illo laudantium, magnam maxime necessitatibus nisi officiis quidem quod, suscipit voluptatem.",
          image: "src/assets/loremSQUARE.jpg",
          rates: 5
        },
        {
          name: "Linda Martinez",
          review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur cum cumque cupiditate dolor dolorum eos esse est fuga ipsam iure laborum magnam, minus nisi perferendis placeat possimus, sed voluptatibus.",
          image: "src/assets/loremSQUARE.jpg",
          rates: 4
        },
        {
          name: "Michael Lee",
          review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aliquam aspernatur, atque consequatur cumque dicta, eius enim error est fugit laborum molestiae nesciunt nobis non odio, pariatur quam vero.",
          image: "src/assets/loremSQUARE.jpg",
          rates: 5
        },
        {
          name: "Barbara Wilson",
          review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquam beatae consectetur cupiditate deleniti distinctio doloremque ea earum eum, facere harum hic illum itaque iure magnam molestiae officia officiis.",
          image: "src/assets/loremSQUARE.jpg",
          rates: 4
        }
      ]
    }
  }
}
</script>

<template>
  <Navbar :navList="navList" />

  <HeroSection />

  <MissionSection />

  <ServicesSection />

  <ReviewSection :reviews="reviews"/>

  <OpeningHoursSection />

  <ContactSection />

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