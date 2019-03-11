<template>
  <div>
    <div class="message">{{msg}}</div>
    <img src="~/components/icon.png" alt="logo">
  </div>
</template>
<script>
export default {
  name: "Welcome",
  props: {
    msg: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.message {
  color: #42b983;
  display: block;
  margin: auto;
  margin-top: 4em;
  text-align: center;
}

img {
  height: 75px;
  display: block;
  margin: auto;
  margin-top: 4em;
}
</style>
