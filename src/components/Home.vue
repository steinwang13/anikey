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
</style>
