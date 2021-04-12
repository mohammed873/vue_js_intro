<template>
  <div class="home">
    <form class="container">
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
      </div>
      <div class="form-group">
        <label for="name">name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="name">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
      </div>

      <button type="button" class="btn btn-primary" @click="addDataOne">add data</button>

      <div class="form-group">
        <label for="school">School</label>
        <input type="text" class="form-control" id="school" placeholder="Enter school" v-model="school">
      </div>
      <div class="form-group">
        <label for="branch">Branch</label>
        <input type="text" class="form-control" id="branch" placeholder="Enter branch" v-model="branch">
      </div>

      <button type="button" class="btn btn-primary" @click="addDataTwo">add data</button>

      <button type="button" class="btn btn-primary" @click="submitForm">Submit form</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      DataOneArray: [],
      DataTwoArray: [],
        email: "",
        name: "",
        password: "",
        school: "",
        branch: ""
    }
  },
  methods: {
    addDataOne: function() {
      this.DataOneArray.push({
        email: this.email,
        name: this.name,
        password: this.password,
        school: this.school,
        branch: this.branch
      })
      // this.$store.dispatch("setDataOne", this.DataOne);
    },
    addDataTwo: function() {
      this.DataTwoArray.push({
        email: this.email,
        name: this.name,
        password: this.password,
        school: this.school,
        branch: this.branch
      })
      // this.$store.dispatch("setDataOne", this.DataOne);
    },
    submitForm: function() {
      this.$store.dispatch("setDataOne", this.DataOneArray)
      this.$store.dispatch("setDataTwo", this.DataTwoArray)

      this.$router.push({ path: "result" });
      // this.$store.dispatch("setDataTwo", this.DataTwo);
    }
  },
};
</script>

