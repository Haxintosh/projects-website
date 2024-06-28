<script>
export default {
  name: 'ServicesSection',
  props:['servicesList'],
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
  <div class="servicesContainer">
    <h1 class="mainHeader">Our Products</h1>
    <p class="subHeaderText">PLACEHOLDER</p>
    <div class="products">
      <div class="product">
        <div class="productTextContainer">
          <h3 class="productHeader">PLACEHOLDER</h3>
          <p class="productText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur, commodi corporis distinctio dolor error eveniet fugit iste maxime mollitia, nulla odit pariatur, perspiciatis quam quas voluptas voluptates? Autem, deleniti.</p>
          <button class="productButton">Learn More</button>
        </div>
        <img src="../assets/lorempicsum.jpg" alt="meditation" class="productImage" />
      </div>
      <div class="product">
        <img src="../assets/lorempicsum.jpg" alt="meditation" class="productImage" />
        <div class="productTextContainer">
          <h3 class="productHeader">PLACEHOLDER</h3>
          <p class="productText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid delectus, distinctio eos explicabo fugiat illo illum in modi nam numquam odit omnis optio quibusdam reiciendis sed voluptate voluptatibus! Dolor.</p>
          <button class="productButton">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.servicesContainer {
  font: 1em 'notoSans', sans-serif;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:#f4f4f5;
}

.mainHeader{
  font-size: 3em;
  font-weight: bold;
  margin:0;
}

.subHeaderText{
  font-size: 1.1em;
  margin: 10px;
  color:#71717a;
}

.products{
  display:flex;
  flex-direction:column;
  justify-content: center;
}

.product{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.25em 3em 0.25em 3em;
  margin:3em;
  gap: 50px;
  max-width:1400px;
}

.productTextContainer{
  display:flex;
  flex-direction:column;
  flex:1;
  max-width:700px;
  width:50%;
  margin:4px;
}
.productImage{
  width:50%;
  flex:1;
  max-width:700px;
  border-radius: 10px;
}
.productHeader{
  font-size: 1.8em;
  font-weight: bold;
  color: #000000;
  margin:0;
}
.productText{
  font-size: 1em;
  color: #71717a;
  margin:0;
}
.productButton{
  font-size: 1em;
  font-weight: normal;
  color: #ffffff;
  background-color: #000000;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
}
.allProductsButton{
  font-size: 1em;
  font-weight: normal;
  color: #ffffff;
  background-color: #000000;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  width:100%;
}
</style>