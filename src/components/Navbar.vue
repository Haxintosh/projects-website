<script>
export default {
  name: 'Navbar',
  props:['navList'], // [{name: "xyz", link: "refs" }]
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
  <nav class="Navbar">
    <div class="mainNavContainer">
      <div class="logo">
        <img src="../assets/logoPL.svg" alt="logo" />
      </div>
      <div class="navLinks">
        <div class="navLinksContainer">
          <a class="navEntry" v-for="entry in navList" :href="entry.link">{{ entry.name }}</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.Navbar {
  background-color: #ffffff;
  color: #000000;
  padding: 10px;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  height: 50px;
  font: 1em 'notoSans', sans-serif;
  z-index:10;
}

.mainNavContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  flex-grow: 1;
  height: 50px;
}

.logo img {
  height: 50px;
}

.navLinks {
  display: flex;
  justify-content: flex-end;
  flex-grow: 2;
  gap: 20px;
  padding-right: 40px
}

.navLinksContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

.navEntry {
  text-decoration: none;
  color: #000000;
  font-size: 1em;
  font-weight: 400;
}

.navEntry:hover {
  text-decoration: underline 1px ;
  text-underline-offset: 4px;
}
</style>