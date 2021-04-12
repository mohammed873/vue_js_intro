<template>
  <div>
    <h1>result</h1>

    {{ allData }}

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>

          <th scope="col">School</th>
          <th scope="col">Branch</th>
        </tr>
      </thead>
      <tbody v-for="(alldata, index) in allData" :key="index">
        <tr>
          <th scope="row"> {{ index + 1 }} </th>
          <td> {{alldata.name}} </td>
          <td> {{alldata.email}} </td>
          <td> {{alldata.password}} </td>
          
          <td> {{alldata.school}} </td>
          <td> {{alldata.branch}} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {
      // dataOne: this.$store.state.DataOne[0],
      // dataTwo: this.$store.state.DataTwo[0],
      allData: this.$store.state.DataOne[0].concat(this.$store.state.DataTwo[0])
    }
  },
  created() {
    console.log(this.$store.state.DataOne[0].concat(this.$store.state.DataTwo[0]));
  }
}
</script>

<style>

</style>

