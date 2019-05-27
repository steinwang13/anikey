<template>
  <div id="thread">
    <b-navbar fixed toggleable id="navbar">
      <a href=""><b-navbar-brand id="nav-title" @click="toHome">AniKey</b-navbar-brand></a>
      <b-navbar-nav>
        <b-button variant="outline-light" id="nav-write" @click="toWrite">Write New Review!</b-button>
      </b-navbar-nav>
    </b-navbar>

    <div id="contents">
      <h1 id="thread-title">Reviews</h1>
      <Post
        v-for="item in items"
        v-bind:key="item.id"
        v-bind:item="item"
      ></Post>
    </div>
  </div>
</template>

<script>
import Post from "./Post"

export default {
  name: 'Thread',
  components: {
    Post
  },

  data() {
    return {
      items: []
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$http.get("/thread")
      .then((response) => {
        this.items = response.data;
        console.log(response);
      }, (error) => {
        console.log(error.response.data.message);
      })
    },
    removePost(objId) {
      this.$http.delete("/thread", { data: {id: objId} })
      .then((response) => {
        this.items.splice(this.items.findIndex(item => item.id === objId), 1);
      }, (error) => {
        console.log(error.response.data.message);
      })
    },
    addLike(objId, objLike) {
      this.$http.post("/thread", {
        id: objId,
        like: objLike })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error.response.data.message);
      })
    },
        toHome() {
      this.$router.push('/home/');
    },
    toWrite() {
      this.$router.push('/write/');
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

#nav-write {
  color: #e02261;
  border-color: #e02261;
}

#nav-write:hover {
  color: #68cdcd;
  background-color: #e02261;
}

#thread-title {
  margin: 10px;
}

#contents {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
