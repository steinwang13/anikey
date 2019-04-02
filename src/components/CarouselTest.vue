<template>
  <carousel :data="data" :controls="false" :pauseOnEnter="false"></carousel>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          '<div class="example-slide img1"></div>',
          '<div class="example-slide img2"></div>',
          '<div class="example-slide img3"></div>',
        ],
      };
    },
  };
</script>

<style>
  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 100vh;
  }

  .img1 {
    background-image: url("../assets/kyoushitsu.jpg");
    background-size: cover;
  }

  .img2 {
    background-image: url("../assets/kaori.jpg");
    background-size: cover;
  }

  .img3 {
    background-image: url("../assets/suzumiya.jpg");
    background-size: cover;
  }
</style>