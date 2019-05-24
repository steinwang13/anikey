<template>
  <b-card no-body class="overflow-hidden" id="card">
    <b-row no-gutters>
      <b-col md="6" class="overflow-hidden">
        <img v-bind:src="item.image" class="rounded-0" />
      </b-col>
      <b-col md="6">
        <b-card class="innerbox">
          <b-card-body v-bind:title="item.title">
            <p>{{ item.author }}</p>
            <b-media no-body>
              <b-media-body class="ml-3">
                <p class="text-wrapper">{{ item.text }}</p>
              </b-media-body>
            </b-media>
            <b-col>
              <b-card class="innerbox">
                <a id="delete-button" @click="removeItem(item.id)">
                <svg t="1554561891271" class="delete" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8072" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="35"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32z m-200 0H360v-72h304v72z" p-id="8073"></path></svg>
                </a>
                <span class="like-counter">{{ item.like }}</span>
                <a v-on:click="item.like += 1" id="like-button">
                <svg t="1554561930574" class="like" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8304" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="35"><path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" p-id="8305"></path></svg>
                </a>
              </b-card>
            </b-col>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'Post',
  props: ['item'],
  data() {
    return {
      id: ''
    }
  },
  methods: {
    removeItem(id) {
      this.$parent.removePost(id);
    }
  }
}
</script>

<style scoped>
#card {
  margin: 10px;
}

a {
  text-decoration: none;
  color: #000000;
}

a:hover {
  color: #e02261;
}

.rounded-0 {
  width: 100%;
}

.innerbox {
  border: none;
}

.like {
  fill: #666666;
  float: right;
}

.like:hover {
  fill: #e02261;
}

.delete {
  fill: #666666;
  float: right;
}

.delete:hover {
  fill: #000000;
}

.like-counter {
  float: right;
  font-size: 20px;
  margin-top: 4px;
  color: #666666;
  margin-right: 13px;
}

.text-wrapper {
  white-space: pre-wrap;
}
</style>
