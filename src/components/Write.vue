<template>
  <div id="write">
    <b-navbar fixed toggleable id="navbar">
      <b-navbar-brand id="nav-title" @click="toHome">AniKey</b-navbar-brand>
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
            type="title"
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
            required
            placeholder="Enter Whatever Name You Like"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Image:"
          label-for="input-3">
          <b-form-file
            v-model="form.file"
            :state="Boolean(form.file)"
            placeholder="Choose a file..."
            drop-placeholder="Drop file here..."
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
            placeholder="Enter no more than 1500 characters..."
            rows="8"
            max-rows="16"
            :state="form.text.length <= 1500 & form.text.length > 0"
            required
          ></b-form-textarea>
        </b-form-group>

        <b-button class="reset" type="reset">Reset</b-button>
        <b-button class="submit" type="submit">Submit</b-button>

      </b-form>
    </div>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Write',
  data() {
    return {
      form: {
        title: '',
        author: '',
        file: null,
        text: ''
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.title = '';
      this.form.author = '';
      this.form.file = null;
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
