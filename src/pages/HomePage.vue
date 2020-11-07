<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img src="../assets/img/cw-circle.png" alt="CodeWorks Logo">
    <h1>Welcome {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  img{
    height: 250px;
    width: 250px;
  }
}
</style>
