<template>
  <v-app dark class="primary">
    <v-toolbar app class="secondary">
      <v-toolbar-title class="headline text-uppercase">
        <router-link class="white-link" to="/">Mandala Me</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <router-link class="white-link mr-2" to="build"
          >Build a Mandala</router-link
        >
      </v-btn>
    </v-toolbar>

    <v-content class="bg">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="stylus">
@require './stylus/main';
</style>
