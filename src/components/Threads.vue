<template>
  <div id="threads">
    <b-navbar fixed toggleable id="navbar">
      <b-navbar-brand id="nav-title" href="Home">AniKey</b-navbar-brand>
      <b-navbar-nav>
        <b-button variant="outline-light" id="nav-write" href="">Write New Review!</b-button>
      </b-navbar-nav>
    </b-navbar>

    <div id="contents">
      <h1 id="threads-title">Your Reviews</h1>
      <b-card no-body class="overflow-hidden" id="card">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="https://i.pximg.net/img-original/img/2018/10/20/05/17/25/71261209_p0.jpg" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Horizontal Card">
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <b-card no-body class="overflow-hidden" id="card">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="https://i.pximg.net/img-original/img/2016/01/21/04/22/07/54823531_p0.png" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Horizontal Card">
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <b-card no-body class="overflow-hidden" id="card">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="https://i.pximg.net/img-original/img/2012/11/29/00/12/49/31796432_p0.jpg" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Horizontal Card">
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Threads'
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

#nav-write:hover {
  color: #68cdcd;
}

#threads-title {
  margin: 10px;
}

#contents {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  padding-bottom: 50px;
}

#card {
  margin: 10px;
}
</style>
