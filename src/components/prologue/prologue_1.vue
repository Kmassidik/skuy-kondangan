<template>
  <div class="flex items-center justify-center overflow-hidden pt-16 pb-20">
    <!-- Check if show is true before rendering the transition -->
    <div :class="{ 'relative w-full h-80': !show, 'relative w-full': show }">
      <img
        src="../../assets/flower-1.png"
        alt=""
        class="absolute animate-wind -top-16 -left-20 w-52" />

      <transition
        v-if="show"
        enter-active-class="animated fadeInUp zoomIn"
        appear
        @after-enter="notifyVisible">
        <div
          class="flex flex-col items-center justify-center h-auto mx-8 rounded-md relative z-10">
          <img
            src="../../assets/profile-2.png"
            class="w-52 h-52 object-cover border-none drop-shadow-xl"
            alt="" />
          <p
            class="p-3 font-sans text-sm"
            style="color: #0000008f; letter-spacing: 1px">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang."
          </p>
          <p class="great-vibes-regular py-4 text-4xl tracking-wider font-bold relative z-20">
            Q.S. Ar-Rum : 21
          </p>
          <img src="../../assets/flower-3.png" class="w-64 absolute -bottom-16" alt="" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isPrologueVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: this.isPrologueVisible, 
    };
  },
  watch: {
    isPrologueVisible(newValue) {
      this.show = newValue; 
    },
  },
  methods: {
    notifyVisible() {
      this.$emit("visibleAbout");
    },
  },
};
</script>

<style>
/* Add your component-specific styles here */
</style>
