<template>
  <div id="write">
    <b-navbar fixed toggleable id="navbar">
      <a href=""><b-navbar-brand id="nav-title" @click="toHome">AniKey</b-navbar-brand></a>
      <b-navbar-nav>
        <b-button variant="outline-light" id="nav-write" @click="toThread">Go Back</b-button>
      </b-navbar-nav>
    </b-navbar>

    <div id="contents">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Title:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            required
            placeholder="Title of the Review"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Author:"
          label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.author"
            type="text"
            required
            placeholder="Enter Whatever Name You Like"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Image:"
          label-for="input-3">
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Choose a file..."
            accept="image/*"
            required
          ></b-form-file>
        </b-form-group>

        <b-form-group
        id="input-group-4"
        label="Text:">
          <b-form-textarea
            id="textarea"
            v-model="form.text"
            type="textarea"
            placeholder="Enter no more than 1500 characters..."
            rows="8"
            max-rows="16"
            :state="(form.text.length <= 1500) && (form.text.length > 0)"
            required
          ></b-form-textarea>
        </b-form-group>

        <b-button class="reset" type="reset">Reset</b-button>
        <b-button class="submit" type="submit">Submit</b-button>

      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Write',
  data() {
    return {
      file: null,
      form: {
        title: '',
        author: '',
        text: ''
      },
      show: true
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      const formData = new FormData();
      const headerConfig = { headers: {'Content-Type': 'multipart/form-data'}};
      formData.append('file', this.file);
      formData.set('title', this.form.title);
      formData.set('author', this.form.author);
      formData.set('text', this.form.text);
      await this.$http.put("/write", formData, headerConfig)
      .then((response) => {
        console.log(response.data);
        this.toThread();
      });
    },
    onReset(evt) {
      evt.preventDefault();
      this.file = null;
      this.form.title = '';
      this.form.author = '';
      this.form.text = '';
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      })
    },
    toHome() {
      this.$router.push('/home/');
    },
    toThread() {
      this.$router.push('/thread/');
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

#contents {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  padding-bottom: 50px;
}

.submit {
  background-color: #68cdcd;
  border-color: #68cdcd;
  float: right;
  margin-right: 5px;
}

.reset {
  background-color: #e02261;
  border-color: #e02261;
  float: right;
}
</style>
