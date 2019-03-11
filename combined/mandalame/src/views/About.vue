<template web>
  <div class="w-page">
    <div class="w-container">
      <span>This is an about page</span>
    </div>
  </div>
</template>
<template native>
  <Page>
    <ActionBar :title="navbarTitle"/>
    <GridLayout>
      <Label text="This is an about page" textWrap="true" horizontalAlignment="center" verticalAlignment="center"/>
    </GridLayout>
  </Page>
</template>
<script>

  export default {
    data() {
      return {
        //navbarTitle: `About.vue`
      };
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import '~styles/style-two';
  @import '~styles/style-one';
</style>
