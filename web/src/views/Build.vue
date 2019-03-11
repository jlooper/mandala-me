<template>
  <v-content style="padding:10px">
    <v-container grid-list-md fluid row wrap class="wrapper">
      <h1>Pick five images</h1>
      <v-layout row wrap>
        <v-flex v-for="image in images" :key="image.id" xs6 sm4 md2>
          <v-card class="card">
            <img
              :src="image.image"
              class="image"
              alt="image"
              width="200px"
              height="200px"
            />
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                v-if="favoriteImages.length <= 4"
                icon
                @click="addToFavorites(image)"
              >
                <v-icon color="white">check_circle_outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!--favorited-->
    <v-container
      v-if="favoriteImages.length > 0"
      grid-list-md
      fluid
      row
      wrap
      class="wrapper"
    >
      <h1>My choice</h1>
      <v-layout row wrap>
        <v-flex
          xs6
          sm4
          md2
          v-for="(image, index) in favoriteImages"
          :key="image.id"
        >
          <v-card class="chosen-card">
            <img alt="image" width="200px" height="200px" :src="image.image" />
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="removeFromFavorites(index)">
                <v-icon>delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-container
        style="text-align: center"
        v-if="favoriteImages.length > 0 && favoriteImages.length <= 4"
        fluid
        row
        wrap
      >
        <v-btn large color="accent" @click="buildMandala">
          <span class="white-link mr-2">Build My Mandala</span>
        </v-btn>
      </v-container>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      favoriteImages: []
    };
  },
  computed: {
    ...mapState(["images"]),
    isNotInFavorites() {
      return false;
    }
  },
  methods: {
    addToFavorites(image) {
      this.favoriteImages.push(image);
    },
    removeFromFavorites(index) {
      this.favoriteImages.splice(index, 1);
    },
    buildMandala() {
      this.$store.dispatch("buildMandala", this.favoriteImages);
      this.$router.push("/mandala");
    }
  },
  created() {
    this.$store.dispatch("fetchImages");
  }
};
</script>

<style scoped>
.wrapper {
  background-color: #141b5b;
  border-radius: 10px;
  margin-bottom: 5px;
}
</style>
