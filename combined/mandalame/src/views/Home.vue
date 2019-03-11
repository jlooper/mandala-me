<template web>
  <!--<div class="w-page">
    <div class="w-container">
      <img src="~/assets/logo.png" alt="logo">
      <Welcome :msg="msg"/>
    </div>
  </div>-->
  <v-container align-center justify-center row fill-height>
    <v-card>
      <v-card-text>
        <h1 align="center">Build your personal mandala</h1>
      </v-card-text>
      <img src="../assets/logo_lg.png" class="my-3" contain height="500">
      <v-card-text title style="text-align: center">
        <v-btn href="#/build" color="primary" dark large>Get Started</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<template native>
  <Page>
    <ActionBar :title="navbarTitle"/>
    <GridLayout rows="auto, auto">
      <!-- copy-webpack-plugin copies asset from src/assets to project output/build directory /assets -->
      <Image src="~/assets/logo.png" row="0" class="m-20"/>
      <Welcome :msg="msg" row="1"/>
    </GridLayout>
  </Page>
</template>
<script>
import Welcome from "components/Welcome";

const { VUE_APP_MODE, VUE_APP_PLATFORM } = process.env;

export default {
  name: "home",
  components: {
    Welcome
  },
  data() {
    return {
      navbarTitle: `Home.vue`,
      msg: `Mode=${VUE_APP_MODE} and Platform=${VUE_APP_PLATFORM}`
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~styles/style-one';
@import '~styles/style-two';
</style>
