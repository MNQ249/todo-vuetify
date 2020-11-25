<template>
  <div class="home">
    <h1 class="subtitle grey--text">Dashboard</h1>

    <v-container  class="my-5">

    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-btn outlined block color="primary">1</v-btn>
      </v-flex>

      <v-flex xs4 md2>
        <v-btn outlined block color="primary">2</v-btn>
      </v-flex>

       <v-flex xs4 md2>
        <v-btn outlined block color="primary">2</v-btn>
      </v-flex>


      <v-flex xs4 md2>
        <v-btn outlined block color="primary">2</v-btn>
      </v-flex>

    </v-layout>

    <v-layout row wrap justify-space-around>
      <v-flex xs4 md3>
        <v-btn outlined block color="success">1</v-btn>
      </v-flex>

      <v-flex xs4 md3>
        <v-btn outlined block color="success">2</v-btn>
      </v-flex>
    </v-layout>

   </v-container>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  
  }
}
</script>
