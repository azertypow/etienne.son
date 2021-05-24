<template>
  <div class="home">
<!--    <router-link to="/02" class="home__next"></router-link>-->

    <div class="v-sound-1" @click="soundClick_1()"></div>
    <div class="v-sound-2" @click="soundClick_2()"></div>
    <div class="v-sound-3" @click="soundClick_3()"></div>

    <img class="e-img-bg" alt="" src="../assets/plan/APPS2_SOUND@2x.png">
  </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent, PropType} from "vue"

export default defineComponent({

  mounted() {
    this.audio_3.addEventListener("load", console.log("loaded"))
  },

  name: 'Home',

  data() {
    return {
      // audio_1: new Audio("1Minencial_Gym_Mix.wav"),
      // audio_2: new Audio("2Minencial_Blade_Mix.wav"),
      // audio_3: new Audio("3Minencial_Mijaba_Mix.wav"),
    }
  },

  methods: {
    soundClick_1() {
      this.pauseAudio2()
      this.pauseAudio3()

      if( this.audio_1.paused ) {

        this.audio_1.play()

      } else {

        this.pauseAudio1()

      }
    },

    soundClick_2() {
      this.pauseAudio1()
      this.pauseAudio3()

      if( this.audio_2.paused ) {

        this.audio_2.play()

      } else {

        this.pauseAudio2()

      }
    },

    soundClick_3() {
      this.pauseAudio1()
      this.pauseAudio2()

      if( this.audio_3.paused ) {

        this.audio_3.play()

      } else {

        this.pauseAudio3()

      }
    },

    pauseAudio1() {
      this.audio_1.pause()
      this.audio_1.currentTime = 0
    },
    pauseAudio2() {
      this.audio_2.pause()
      this.audio_2.currentTime = 0
    },
    pauseAudio3() {
      this.audio_3.pause()
      this.audio_3.currentTime = 0
    },
  }

});

</script>

<style lang="scss" scoped>
.v-sound-1,
.v-sound-2,
.v-sound-3 {
  z-index: 1000;
  position: fixed;
  width: 640px;
  height: 85px;
  //background-color: red;
}

.v-sound-1 {
  top: 190px;
  left: 198px;
}

.v-sound-2 {
  top:  344px;
  left: 198px;
}

.v-sound-3 {
  top: 495px;
  left: 198px;
}
</style>ts
