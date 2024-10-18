<template>
  <div class="container mx-auto p-6">
    <h1
      v-if="showBox1"
      class="great-vibes-regular my-5 text-5xl font-bold text-center">
      Our Moment
    </h1>
    <div class="space-y-2">
      <!-- First row: Two images -->
      <transition v-if="showBox1" enter-active-class="animated fadeInUp" appear>
        <div class="grid grid-cols-2 gap-2">
          <a class="block" href="#!" @click="openModal(image1)">
            <img class="w-full h-40 object-cover" :src="image1" alt="Bridge" />
          </a>
          <a class="block" href="#!" @click="openModal(image2)">
            <img class="w-full h-40 object-cover" :src="image2" alt="Park" />
          </a>
        </div>
      </transition>

      <transition v-if="showBox2" enter-active-class="animated fadeInUp" appear>
        <div class="grid grid-cols-2 gap-2">
          <div class="col-span-1">
            <a class="block h-full bg-black" href="#!" @click="openModal(image3)">
              <img
                class="w-full h-full object-cover"
                :src="image3"
                alt="Tunnel" />
            </a>
          </div>
          <div class="grid grid-rows-2 gap-2">
            <a class="block h-full" href="#!" @click="openModal(image4)">
              <img
                class="w-full h-40 object-cover"
                :src="image4"
                alt="Traffic" />
            </a>
            <a class="block h-full" href="#!" @click="openModal(image5)">
              <img class="w-full h-40 object-cover" :src="image5" alt="Rails" />
            </a>
          </div>
        </div>
      </transition>

      <!-- Third row: Two images -->
      <transition v-if="showBox3" enter-active-class="animated fadeInUp" appear>
        <div class="grid grid-cols-2 gap-2">
          <a class="block" href="#!" @click="openModal(image6)">
            <img class="w-full h-40 object-cover" :src="image6" alt="Coast" />
          </a>
          <a class="block" href="#!" @click="openModal(image7)">
            <img class="w-full h-40 object-cover" :src="image7" alt="Bridge" />
          </a>
        </div>
      </transition>

      <!-- Fourth row: One image -->
      <transition v-if="showBox4" enter-active-class="animated fadeInUp" appear>
        <div class="grid grid-cols-1">
          <a class="block" href="#!" @click="openModal(image8)">
            <img class="w-full h- object-cover" :src="image8" alt="Park" />
          </a>
        </div>
      </transition>
    </div>

    <!-- Modal -->
    <div
      v-if="isModalOpen"
      @click="closeModal"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <img
        v-bind:src="modalImage"
        v-bind:class="{
          'max-h-full max-w-full': modalImage !== image3,
          'min-h-auto max-w-full': modalImage === image3,
        }" />
    </div>
  </div>
</template>

<script>
import image1 from "../../assets/dicki&yuli/1.png";
import image2 from "../../assets/dicki&yuli/2.png";
import image3 from "../../assets/dicki&yuli/3.png";
import image4 from "../../assets/dicki&yuli/4.png";
import image5 from "../../assets/dicki&yuli/5.png";
import image6 from "../../assets/dicki&yuli/6.png";
import image7 from "../../assets/dicki&yuli/7.png";
import image8 from "../../assets/dicki&yuli/8.png";

export default {
  props: {
    isGalleryVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      show: this.isGalleryVisible,
      isModalOpen: false,
      modalImage: "",
      showBox1: false,
      showBox2: false,
      showBox3: false,
      showBox4: false,
    };
  },
  watch: {
    isGalleryVisible(newValue) {
      this.show = newValue;
      if (newValue) {
        this.triggerTransitions();
      }
    },
  },
  methods: {
    openModal(image) {
      this.modalImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    triggerTransitions() {
      setTimeout(() => {
        this.showBox1 = true;
        setTimeout(() => {
          this.showBox2 = true;
          setTimeout(() => {
            this.showBox3 = true;
            setTimeout(() => {
              this.showBox4 = true;
            }, 500);
            setTimeout(() => {
              this.$emit("visibleMessage");
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    },
  },
};
</script>

<style>
.modal.active {
  display: flex;
}
</style>
