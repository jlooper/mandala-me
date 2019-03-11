<template web>
  <v-layout align-start justify-center row fill-height>
    <v-flex xs12 offset-md4>
      <v-slider
        v-model="duration"
        height="100"
        label="Spin speed"
        thumb-color="purple"
        color="blue"
        thumb-label="always"
      ></v-slider>
    </v-flex>

    <div class="container">
      <span class="center" :style="{ 'animation-duration': duration +'s' }">
        <div
          class="center-element circle one"
          :style="{ 'background-image': 'url(' + mandala[0].image + ')' }"
        ></div>
        <div
          class="center-element circle two"
          :style="{ 'background-image': 'url(' + mandala[0].image + ')' }"
        ></div>
        <div
          class="center-element circle three"
          :style="{ 'background-image': 'url(' + mandala[0].image + ')' }"
        ></div>
        <div
          class="center-element circle four"
          :style="{ 'background-image': 'url(' + mandala[0].image + ')' }"
        ></div>
      </span>
      
      <span class="ring-one" :style="{ 'animation-duration': duration + 10 +'s' }">
        <div class="circle one" :style="{ 'background-image': 'url(' + mandala[1].image + ')' }"></div>
        <div class="circle two" :style="{ 'background-image': 'url(' + mandala[1].image + ')' }"></div>
        <div class="circle three" :style="{ 'background-image': 'url(' + mandala[1].image + ')' }"></div>
        <div class="circle four" :style="{ 'background-image': 'url(' + mandala[1].image + ')' }"></div>
      </span>
      
      <span class="ring-two" :style="{ 'animation-duration': duration + 20 +'s' }">
        <div
          class="second-element circle one"
          :style="{ 'background-image': 'url(' + mandala[2].image + ')' }"
        ></div>
        <div
          class="second-element circle two"
          :style="{ 'background-image': 'url(' + mandala[2].image + ')' }"
        ></div>
        <div
          class="second-element circle three"
          :style="{ 'background-image': 'url(' + mandala[2].image + ')' }"
        ></div>
        <div
          class="second-element circle four"
          :style="{ 'background-image': 'url(' + mandala[2].image + ')' }"
        ></div>
        <div
          class="second-element circle five"
          :style="{ 'background-image': 'url(' + mandala[2].image + ')' }"
        ></div>
        <div
          class="second-element circle six"
          :style="{ 'background-image': 'url(' + mandala[2].image + ')' }"
        ></div>
        <div
          class="second-element circle seven"
          :style="{ 'background-image': 'url(' + mandala[2].image + ')' }"
        ></div>
        <div
          class="second-element circle eight"
          :style="{ 'background-image': 'url(' + mandala[2].image + ')' }"
        ></div>
      </span>
      
      <span class="ring-three" :style="{ 'animation-duration': duration + 30 +'s' }">
        <div
          class="third-element circle one"
          :style="{ 'background-image': 'url(' + mandala[3].image + ')' }"
        ></div>
        <div
          class="third-element circle two"
          :style="{ 'background-image': 'url(' + mandala[3].image + ')' }"
        ></div>
        <div
          class="third-element circle three"
          :style="{ 'background-image': 'url(' + mandala[3].image + ')' }"
        ></div>
        <div
          class="third-element circle four"
          :style="{ 'background-image': 'url(' + mandala[3].image + ')' }"
        ></div>
        <div
          class="third-element circle five"
          :style="{ 'background-image': 'url(' + mandala[3].image + ')' }"
        ></div>
        <div
          class="third-element circle six"
          :style="{ 'background-image': 'url(' + mandala[3].image + ')' }"
        ></div>
        <div
          class="third-element circle seven"
          :style="{ 'background-image': 'url(' + mandala[3].image + ')' }"
        ></div>
        <div
          class="third-element circle eight"
          :style="{ 'background-image': 'url(' + mandala[3].image + ')' }"
        ></div>
      </span>
    </div>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["mandala"])
  },
  data() {
    return {
      duration: 60
    };
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

span {
  display: block;
  height: 30em;
  left: calc(50% - 15em);
  position: absolute;
  top: calc(50% - 15em);
  width: 30em;
}

.center {
  animation: spin linear infinite;
}

.ring-one {
  animation: spin linear infinite;
  z-index: 1;
}

.ring-two {
  animation: spin-counterclockwise linear infinite;
}

.ring-three {
  animation: spin linear infinite;
}

@keyframes spin {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

@-moz-keyframes spin {
  0% {
    -moz-transform: rotateZ(0);
  }
  100% {
    -moz-transform: rotateZ(360deg);
  }
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotateZ(0);
  }
  100% {
    -webkit-transform: rotateZ(360deg);
  }
}

@keyframes spin-counterclockwise {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}

@-moz-keyframes spin-counterclockwise {
  0% {
    -moz-transform: rotateZ(0);
  }
  100% {
    -moz-transform: rotateZ(-360deg);
  }
}

@-webkit-keyframes spin-counterclockwise {
  0% {
    -webkit-transform: rotateZ(0);
  }
  100% {
    -webkit-transform: rotateZ(-360deg);
  }
}

.circle {
  height: 20em;
  position: absolute;
  width: 20em;
  left: calc(50% - 10em);
  top: calc(50% - 20em);
  transform-origin: 50% 20em;
  background-size: cover;
  background-repeat: no-repeat;
}

.second-element {
  width: 16em;
  height: 16em;
  left: calc(50% - 8em);
  top: calc(50% - 30em);
  transform-origin: 50% 30em;
  background-size: cover;
  background-repeat: no-repeat;
}

.third-element {
  width: 16em;
  height: 16em;
  left: calc(50% - 8em);
  top: calc(50% - 40em);
  transform-origin: 50% 40em;
  background-size: cover;
  background-repeat: no-repeat;
}

.center-element {
  width: 10em;
  height: 10em;
  left: calc(50% - 5em);
  top: calc(50% - 10em);
  transform-origin: 50% 10em;
  background-repeat: no-repeat;
  background-size: cover;
}

.one {
  transform: rotateZ(360deg);
}

.two {
  transform: rotateZ(270deg);
}

.three {
  transform: rotateZ(180deg);
}

.four {
  transform: rotateZ(90deg);
}

.five {
  transform: rotateZ(315deg);
}

.six {
  transform: rotateZ(225deg);
}

.seven {
  transform: rotateZ(135deg);
}

.eight {
  transform: rotateZ(45deg);
}
</style>
