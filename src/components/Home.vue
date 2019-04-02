<template>
  <div id="home">
    <b-navbar fixed toggleable id="navbar">
      <b-navbar-brand id="nav-title" href="Home">AniKey</b-navbar-brand>
      <b-nav-text toggleable>INTO ISEKAI!</b-nav-text>
      <b-navbar-nav>
        <b-button variant="outline-light" id="nav-getin" href="">Get In!</b-button>
      </b-navbar-nav>
    </b-navbar>

    <div id="logo-box">
      <img id="logo" src="../assets/anikeylogo.png">
      <p id="sitename">ANIKEY</p>
      <p id="description">a site to share anime reviews</p>
    </div>

    <b-carousel
      id="carousel-fade"
      v-model="slide"
      :interval="4000"
      fade
      indicators
      img-width="1920px"
      img-height="1080px"
    >
      <b-carousel-slide
        img-src="https://i.pximg.net/img-original/img/2018/10/20/05/17/25/71261209_p0.jpg"></b-carousel-slide>
      <b-carousel-slide
        img-src="https://i.pximg.net/img-original/img/2016/01/21/04/22/07/54823531_p0.png"></b-carousel-slide>
      <b-carousel-slide
        img-src="https://i.pximg.net/img-original/img/2012/11/29/00/12/49/31796432_p0.jpg"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
  color: #ffffff;
}

#nav-getin:hover {
  color: #68cdcd;
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

#carousel-fade {
  text-shadow: 0px 0px 2px #000;
  overflow: hidden;
  height: 42rem;
}
</style>
