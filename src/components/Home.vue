<template>
  <div id="home">
    <b-navbar fixed toggleable id="navbar">
      <a href=""><b-navbar-brand id="nav-title" @click="toHome">AniKey</b-navbar-brand></a>
      <b-nav-text toggleable>INTO ISEKAI!</b-nav-text>
      <b-navbar-nav>
        <b-button variant="outline-light" id="nav-getin" @click="toThread">Get In!</b-button>
      </b-navbar-nav>
    </b-navbar>

    <div id="logo-box">
      <img id="logo" src="../../static/anikeylogo.png">
      <p id="sitename">ANIKEY</p>
      <p id="description">a site to share anime reviews</p>
    </div>

    <div id="carousel">
      <CarouselTest></CarouselTest>
    </div>
  </div>
</template>

<script>
import CarouselTest from './CarouselTest'

export default {
  name: 'Home',
  components: {
    CarouselTest
  },
  methods: {
    toHome() {
      this.$router.push('/home/')
    },
    toThread() {
      this.$router.push('/thread/')
    }
  }
}
</script>

<style scoped>
#navbar {
  background-color: #68cdcd;
  padding-top: 5px;
  height: 50px;
  z-index: 3;
}

#nav-title {
  color: #e02261;
}

#nav-getin {
  color: #e02261;
  border-color: #e02261;
}

#nav-getin:hover {
  color: #68cdcd;
  background-color: #e02261;
}

#logo-box {
  top: 25%;
  width: 100%;
  position: absolute;
  z-index: 2;
  text-align: center;
}

#logo {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

#sitename {
  z-index: 3;
  font-size: 50px;
  font-weight: bold;
  color: azure;
}

#description {
  z-index: 3;
  font-size: 30px;
  font-weight: bold;
  color: azure;
}
</style>
