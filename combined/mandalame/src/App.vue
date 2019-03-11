<template web>
  <!--<div class="w-page">
    <nav>
      <ul class="w-navbar">
        <li class="w-title" :text="navbarTitle">{{navbarTitle}}</li>
      </ul>
    </nav>
    <div class="w-container">
      <router-link tag="button" class="w-button" id="homeButton" to="/">Home</router-link>
      <router-link tag="button" class="w-button" id="aboutButton" to="/about">About</router-link>
      <router-view/>
    </div>
  </div>-->
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
  <Page>
    <ActionBar :title="navbarTitle"/>
    <GridLayout rows="auto, auto">
      <Button text="Home" @tap="goToHomePage" row="0"/>
      <Button text="About" @tap="goToAboutPage" row="1"/>
    </GridLayout>
  </Page>
</template>
<script>
//import Home from "~/views/Home";
import About from "~/views/About";

export default {
  name: "App"
  /*data() {
      return {
        navbarTitle: `App.vue`,
      };
    },
    methods: {
      goToHomePage() {
        this.$navigateTo(Home);
      },
      goToAboutPage() {
        this.$navigateTo(About);
      }
    }*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style web lang="stylus">
@import '~styles/style-one';
</style>
<style native lang="stylus">
@import '~styles/style-one';
</style>
