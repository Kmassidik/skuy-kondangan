<template>
  <div class="flex flex-col items-center justify-center pb-12">
    <transition v-if="showHeader" enter-active-class="animated fadeInUp" appear>
      <div class="text-center mb-4">
        <h1 class="text-3xl mb-2 font-serif" style="color: #722637">Save</h1>
        <p class="great-vibes-regular text-5xl font-bold tracking-widest">
          The Date
        </p>
        <div
          style="background-color: rgb(142 68 83 / 80%)"
          class="grid grid-cols-4 gap-10 w-full mx-auto rounded-md text-white p-5 mt-6">
          <div>
            <p class="text-2xl font-bold">{{ day }}</p>
            <p>Hari</p>
          </div>
          <div>
            <p class="text-2xl font-bold">{{ hour }}</p>
            <p>Jam</p>
          </div>
          <div>
            <p class="text-2xl font-bold">{{ minute }}</p>
            <p>Menit</p>
          </div>
          <div>
            <p class="text-2xl font-bold">{{ second }}</p>
            <p>Detik</p>
          </div>
        </div>
      </div>
    </transition>

    <transition v-if="showBox1" enter-active-class="animated fadeInUp" appear>
      <div class="my-2 w-5/6 mt-8 p-2 text-center relative border shadow-lg">
        <img
          src="../../assets/flower-2.png"
          alt=""
          class="absolute -top-8 -left-10 w-32 z-0 animate-wind" />
        <div class="bg-inherit p-4 relative z-10 tracking-wide">
          <h4
            class="text-5xl py-2 great-vibes-regular font-medium tracking-wide">
            Akad Nikah
          </h4>
          <p class="font-sans text-xs">
            MINGGU, 23 JUNI 2024<br />Pukul 08:00 s/d 10:00 WIB
          </p>
        </div>
      </div>
    </transition>

    <transition v-if="showBox2" enter-active-class="animated fadeInUp" appear>
      <div class="my-2 w-5/6 mt-8 p-2 text-center relative border shadow-lg">
        <img
          src="../../assets/flower-2.png"
          alt=""
          class="absolute -top-8 -left-10 w-32 z-0 animate-wind" />
        <div class="bg-inherit p-4 relative z-10">
          <h4
            class="text-5xl py-2 great-vibes-regular font-medium tracking-widest">
            Resepsi
          </h4>
          <p class="font-sans text-xs">
            MINGGU, 23 JUNI 2024<br />Pukul 10:00 WIB s/d Selesai
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isDateVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: this.isDateVisible,
      showHeader: false,
      showBox1: false,
      showBox2: false,
      countdown: null,
      targetDate: new Date("June 23, 2024 08:00:00").getTime(),
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    };
  },
  mounted() {
    this.countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.targetDate - now;

      this.day = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.second = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.countdown);
      }
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.countdown);
  },
  watch: {
    isDateVisible(newValue) {
      this.show = newValue;
      if (newValue) {
        this.triggerTransitions();
      }
    },
  },
  methods: {
    triggerTransitions() {
      setTimeout(() => {
        this.showHeader = true;
        setTimeout(() => {
          this.showBox1 = true;
          setTimeout(() => {
            this.showBox2 = true;
            this.$emit("visibleLocation");
          }, 500);
        }, 500);
      }, 0);
    },
  },
};
</script>

<style>
/* Add your component-specific styles here */
</style>
