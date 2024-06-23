<script>
export default {
  name: 'LoadBlocker'
}

</script>

<template>
  <div class="loadBlockerContainer">
    <div class="loadBlocker">
      <p>Loading...</p>
    </div>
  </div>
</template>

<style scoped>
.loadBlockerContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>