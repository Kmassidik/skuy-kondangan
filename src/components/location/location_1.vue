<template lang="">
  <div class="flex flex-col items-center justify-center">
    <div class="text-center mb-4">
      <transition
        v-if="showMessage1"
        enter-active-class="animated fadeInUp"
        appear>
        <h1 class="text-5xl mb-8 font-bold great-vibes-regular tracking-widest">
          Lokasi
        </h1>
      </transition>
      <transition
        v-if="showMessage2"
        enter-active-class="animated fadeInUp"
        appear>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3962.0841337094926!2d111.25528547499506!3d-6.75959509323702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDUnMzQuNSJTIDExMcKwMTUnMjguMyJF!5e0!3m2!1sen!2sid!4v1716642593836!5m2!1sen!2sid"
            class="w-72 h-72 mb-8"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="">
            <a
              style="background-color: rgb(159, 0, 36)"
              class="py-2 px-4 text-white rounded-md font-semibold"
              href="https://maps.app.goo.gl/nvQ7pYxQ558MfMQ86"
              target="_blank"
              >Go to maps</a
            >
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isLocationVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: this.isLocationVisible,
      showMessage1: false,
      showMessage2: false,
    };
  },
  watch: {
    isLocationVisible(newValue) {
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
          this.$emit("visibleBank");
        }, 500); 
      }, 0);     },
  },
};
</script>
<style lang=""></style>
