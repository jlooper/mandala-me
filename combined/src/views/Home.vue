<template web>
  <v-container align-center justify-center row fill-height>
    <Welcome/>
  </v-container>
</template>
<template native>  
    <Welcome/>
</template>
<script>
import Welcome from "components/Welcome";

export default {
  name: "home",
  components: {
    Welcome
  },
  data() {
    return {
      navbarTitle: `Home.vue`
      //msg: `Mode=${VUE_APP_MODE} and Platform=${VUE_APP_PLATFORM}`
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="stylus">
@import '~styles/style-one';
@import '~styles/style-two';
</style>
