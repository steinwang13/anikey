<template>
  <div id="threads">
    <b-navbar fixed toggleable id="navbar">
      <b-navbar-brand id="nav-title" @click="toHome">AniKey</b-navbar-brand>
      <b-navbar-nav>
        <b-button variant="outline-light" id="nav-write" @click="toWrite">Write New Review!</b-button>
      </b-navbar-nav>
    </b-navbar>

    <div id="contents">
      <h1 id="threads-title">Reviews</h1>
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
  name: 'Threads',
  components: {
    Post
  },
  data: function() {
    return {
      items: [
        {
          id: 1,
          like: 0,
          image: require("../assets/jingmi.jpg"),
          title: "Title",
          author: "god",
          text: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.\n\nFusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n\nDonec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nDonec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
          id: 2,
          like: 0,
          image: require("../assets/kyoushitsu.jpg"),
          title: "Title",
          author: "god",
          text: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.\n\nFusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n\nDonec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nDonec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }
      ]
    };
  },
  methods: {
    toHome() {
      this.$router.push('/home/');
    },
    toWrite() {
      this.$router.push('/write/');
    },
    removePost(id) {
      this.items.splice(id, 1);
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
</style>
