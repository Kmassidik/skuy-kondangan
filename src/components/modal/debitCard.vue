<template>
  <transition name="modal">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center mx-2"
      v-if="visible">
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div
        style="background-color: rgb(0 0 0 / 46%)"
        class="rounded-lg shadow-lg p-6 max-w-lg w-full z-50">
        <button @click="close" class="text-white text-4xl font-extrabold mb-4">
          &times;
        </button>
        <div class="flex justify-center items-center">
          <div class="space-y-8">
            <!-- Card 1 -->
            <div
              class="w-auto h-48 bg-red-100 rounded-xl relative text-white shadow-2xl">
              <img
                class="relative object-cover w-full h-full rounded-xl"
                src="https://i.imgur.com/kGkSg1v.png" />
              <div class="w-full px-8 absolute top-8">
                <div class="flex justify-between">
                  <div>
                    <p class="font-light">Name</p>
                    <p class="font-medium tracking-normal">Dicki Endriansyah</p>
                  </div>
                </div>
                <div class="pt-1">
                  <p class="font-light">Card Number</p>
                  <p class="font-medium tracking-more-wider">
                    164 000 161 2920 - Mandiri
                  </p>
                </div>
                <div
                  class="pt-1 flex items-center cursor-pointer"
                  @click="copyCardNumber('1640001612920')">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                  </svg>
                  <p class="font-light">Copy</p>
                </div>
              </div>
            </div>
            <!-- Card 2 -->
            <div
              class="w-auto h-48 bg-red-100 rounded-xl relative text-white shadow-2xl">
              <img
                class="relative object-cover w-full h-full rounded-xl"
                src="https://th.bing.com/th/id/OIP.U-ScgZ7L5kv_-qX3pD9ebgHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain" />
              <div class="w-full px-8 absolute top-8">
                <div class="flex justify-between">
                  <div>
                    <p class="font-light">Name</p>
                    <p class="font-medium tracking-normal">Yuli Puspitasari</p>
                  </div>
                </div>
                <div class="pt-1">
                  <p class="font-light">Card Number</p>
                  <p class="font-medium tracking-more-wider">
                    6037 0102 8713 535 - BRI
                  </p>
                </div>
                <div
                  class="pt-1 flex items-center cursor-pointer"
                  @click="copyCardNumber('603701028713535')">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                  </svg>
                  <p class="font-light">Copy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    copyCardNumber(cardNumber) {
      navigator.clipboard.writeText(cardNumber).then(() => {
        console.log("Succes copy");
      });
    },
  },
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
