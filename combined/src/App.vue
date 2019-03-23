<template web>
  <v-app dark class="primary">
    <v-toolbar app class="secondary">
      <v-toolbar-title class="headline text-uppercase">
        <router-link class="white-link" to="/">Mandala Me</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <router-link class="white-link mr-2" to="build">Build a Mandala</router-link>
      </v-btn>
    </v-toolbar>
    <v-content class="bg">
      <router-view/>
    </v-content>
  </v-app>
</template>
<template native>
  <Page actionBarHidden="true">
    <Home/>
  </Page>
</template>
<script>
import Home from "~/views/Home";

export default {
  name: "App",
  components: {
    Home
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style web lang="stylus">
@import '~styles/style-one';
</style>
<style native lang="stylus">
@import '~styles/style-two';
</style>
