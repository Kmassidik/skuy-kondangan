<template>
  <div>
    <audio ref="audioPlayer" :src="musicSrc" loop></audio>
    <main class="flex">
      <div class="hidden sm:block sm:w-3/4 h-screen bg-cover">
        <div
          class="text-center min-h-screen flex flex-col items-center justify-center w-auto">
          <p class="my-3 playfair-display text-xl">The Wedding of</p>
          <p
            class="great-vibes-regular my-4 text-7xl font-extrabold tracking-widest"
            style="letter-spacing: 5px">
            Dicki & Pitta
          </p>
          <p class="playfair-display text-2xl">23.06.2023</p>
        </div>
      </div>
      <div
        class="w-full sm:w-1/4 h-screen overflow-y-auto"
        :style="{ backgroundImage: `url(${backgroundImage2})` }"
        @scroll="handleScroll">
        <Hero :changeAccepted="changeAccepted" />
        <div v-if="isAccepted">
          <button
            @click="muteAudio"
            class="absolute bottom-4 right-2 btn bg-pink-200 rounded-xl p-1">
            <svg
              v-if="!isMuted"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 19V5l12 7-12 7z" />
            </svg>
            <svg
              v-if="isMuted"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 19V5l12 7-12 7z" />
              <line
                x1="1"
                y1="1"
                x2="23"
                y2="23"
                stroke="currentColor"
                stroke-width="2" />
            </svg>
          </button>
          <Prologue
            :isPrologueVisible="isPrologueVisible"
            @visibleAbout="showAbout" />
          <About :isAboutVisible="isAboutVisible" @visibleDate="showDate" />
          <Date
            :isDateVisible="isDateVisible"
            @visibleLocation="showLocation" />
          <Location
            :isLocationVisible="isLocationVisible"
            @visibleBank="showBank" />
          <Bank :isBankVisible="isBankVisible" @visibleGallery="showGallery" />
          <Gallery
            :isGalleryVisible="isGalleryVisible"
            @visibleMessage="showMessage" />
          <Message :isMessageVisible="isMessageVisible" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import backgroundImage2 from "../../assets/background-2.png";
import Hero from "../../components/hero/hero_1.vue";
import Prologue from "../../components/prologue/prologue_1.vue";
import About from "../../components/about/about_1.vue";
import Date from "../../components/date/date_1.vue";
import Location from "../../components/location/location_1.vue";
import Bank from "../../components/bank/bank_1.vue";
import Gallery from "../../components/gallery/gallery_1.vue";
import Message from "../../components/message/message_1.vue";
import Music from "../../assets/music.mp3";

export default {
  data() {
    return {
      backgroundImage2,
      musicSrc: Music,
      audioPlayer: null,
      isAccepted: false,
      isPrologueVisible: false,
      isAboutVisible: false,
      isDateVisible: false,
      isLocationVisible: false,
      isBankVisible: false,
      isGalleryVisible: false,
      isMessageVisible: false,
      isFooterVisible: false,
      isMuted: false, // Define isMuted property
    };
  },
  components: {
    Hero,
    Prologue,
    About,
    Date,
    Location,
    Bank,
    Gallery,
    Message,
  },
  mounted() {
    this.audioPlayer = this.$refs.audioPlayer;
  },
  methods: {
    playAudio() {
      if (this.audioPlayer) {
        this.audioPlayer.play();
      }
    },
    muteAudio() {
      if (this.audioPlayer) {
        this.audioPlayer.muted = !this.audioPlayer.muted;
      }
    },
    changeAccepted() {
      this.isAccepted = true;
    },
    handleScroll(event) {
      const scrollPosition = event.target.scrollTop;
      const windowHeight = window.innerHeight;

      if (scrollPosition / windowHeight >= 0.45) {
        this.isPrologueVisible = true;
      }
    },
    showAbout() {
      this.isAboutVisible = true;
    },
    showDate() {
      this.isDateVisible = true;
    },
    showLocation() {
      this.isLocationVisible = true;
    },
    showBank() {
      this.isBankVisible = true;
    },
    showGallery() {
      this.isGalleryVisible = true;
    },
    showMessage() {
      this.isMessageVisible = true;
      this.isFooterVisible = true;
    },
  },
  watch: {
    isAccepted(newValue) {
      if (newValue) {
        setTimeout(() => {
          this.playAudio();
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
/* Component-specific styles */
</style>
