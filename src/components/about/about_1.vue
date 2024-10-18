<template>
  <div
    :class="{
      'min-h-screen': !show,
      'flex flex-col text-center min-h-80': show,
    }">
    <transition
      v-show="showMessage1"
      enter-active-class="animated fadeInUp"
      appear>
      <p style="color: black" class="font-semibold text-base font-sans px-2">
        Assalamualaikum warahmatullahi wabarakatuh
      </p>
    </transition>

    <transition
      v-show="showMessage2"
      enter-active-class="animated fadeInUp"
      appear>
      <span
        class="my-3 text-base font-sans tracking-tighter"
        style="color: #0000008f">
        Tanpa mengurangi rasa hormat, Kami mengundang Bapak/Ibu/Saudara/i untuk
        menghadiri acara pernikahan kami:
      </span>
    </transition>

    <transition
      v-show="showProfile1"
      enter-active-class="animated fadeInUp"
      appear>
      <div class="w-full flex flex-col justify-center items-center">
        <img
          src="../../assets/profile-cewek.png"
          class="w-44 h-36 my-4"
          alt="" />
        <p class="text-5xl tracking-wider font-normal great-vibes-regular">
          Yuli Puspitasari
        </p>
        <p class="text-base my-4 font-sans">
          Putri kedua dari <br />
          Bpk. Suyono <span class="font-bold mx-1">&</span> Ibu. Sureni
        </p>
      </div>
    </transition>

    <transition
      v-show="showAmpersand"
      enter-active-class="animated fadeInUp"
      appear>
      <h1 class="font-light great-vibes-regular text-5xl my-6">&</h1>
    </transition>

    <transition
      v-show="showProfile2"
      enter-active-class="animated fadeInUp"
      appear>
      <div class="w-full flex flex-col justify-center items-center mb-3">
        <img
          src="../../assets/profile-cowok.png"
          class="w-40 h-36 my-4"
          alt="" />
        <p class="text-5xl tracking-wider font-normal great-vibes-regular">
          Dicki Endriansyah
        </p>
        <p class="text-base my-4 font-sans">
          Putra kedua dari <br />
          Bpk. Dedi Kusyandi <span class="font-bold mx-1">&</span> Ibu. Sumarni
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isAboutVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: this.isAboutVisible,
      showMessage1: false,
      showMessage2: false,
      showProfile1: false,
      showAmpersand: false,
      showProfile2: false,
    };
  },
  watch: {
    isAboutVisible(newValue) {
      this.show = newValue;
      if (newValue) {
        this.triggerTransitions();
      }
    },
  },
  methods: {
    triggerTransitions() {
      setTimeout(() => {
        this.showMessage1 = true;
        setTimeout(() => {
          this.showMessage2 = true;
          setTimeout(() => {
            this.showProfile1 = true;
            setTimeout(() => {
              this.showAmpersand = true;
              setTimeout(() => {
                this.showProfile2 = true;
                setTimeout(() => {
                  this.$emit("visibleDate");
                }, 200);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 0);
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
