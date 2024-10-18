<template>
  <div
    v-if="!accepted"
    class="text-center min-h-screen flex items-center justify-center w-auto">
    <transition
      enter-active-class="animated fadeIn zoomIn"
      leave-active-class="animated fadeOut zoomOut"
      appear>
      <div key="invitation" class="transition-wrapper">
        <p class="great-vibes-regular mt-20 text-6xl font-extralight">
          Dicki & Pitta
        </p>
        <p class="tracking-wider text-base mt-5 font-serif">Dear</p>
        <p class="font-medium tracking-wide text-xl mb-10">{{ name }}</p>
        <button
          style="background-color: brown"
          @click="triggerTransition"
          class="mt-5 py-2 px-4 font-bold text-white rounded tracking-wide flex flex-row animate-bounce mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 mr-3">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
          </svg>
          Open Invitation
        </button>
      </div>
    </transition>
  </div>
  <div
    v-if="accepted"
    class="text-center flex justify-center w-auto overflow-hidden">
    <transition
      enter-active-class="animated fadeIn zoomIn"
      leave-active-class="animated fadeOut zoomOut"
      appear>
      <div class="flex flex-col items-center">
        <div class="w-full px-8 mt-5 flex flex-col items-center">
          <img
            src="../../assets/flower-top.png"
            alt="Flower Decoration"
            class="flower-image" />
          <img
            src="../../assets/profile-1.png"
            alt="Profile Picture"
            class="rounded-full w-52 border-none shadow-md mx-auto" />
          <img
            src="../../assets/flower-top.png"
            alt="Flower Decoration"
            class="flower-image" />
        </div>
        <p style="color: black" class="my-3 playfair-display text-xl">
          The Wedding of
        </p>
        <p
          class="great-vibes-regular my-4 text-5xl font-medium"
          style="letter-spacing: 5px">
          Dicki & Pitta
        </p>
        <p style="color: black" class="playfair-display text-2xl">23.06.2024</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    changeAccepted: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      accepted: false,
      name: this.$route.params.name,
      itsTrue: true,
    };
  },
  methods: {
    triggerTransition() {
      this.accepted = true;
      this.changeAccepted();
    },
  },
};
</script>

<style scoped>
.flower-image {
  width: 80%;
  margin: 0 auto;
  display: block;
}
</style>
