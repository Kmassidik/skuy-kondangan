<template>
  <div class="bg-gray-100 dark:bg-gray-800 min-h-screen pt-20">
    <div class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white">
          Coming Soon
        </h1>
        <p class="mt-3 text-lg text-gray-500 dark:text-gray-300">
          Our website is under construction.
        </p>
      </div>
      <div class="mt-10">
        <form @submit.prevent="handleSubmit" class="mx-auto max-w-xs">
          <div
            class="flex items-center border-b border-gray-500 dark:border-gray-300 py-2">
            <input
              v-model="email"
              type="email"
              class="appearance-none bg-transparent border-none w-full text-gray-700 dark:text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder="Enter your email"
              required />
            <button
              class="flex-shrink-0 bg-cyan-500 hover:bg-cyan-700 border-cyan-500 hover:border-cyan-700 text-sm border-4 text-white py-1 px-2 rounded dark:bg-cyan-600 dark:hover:bg-cyan-800 dark:border-cyan-600"
              type="submit">
              Notify me
            </button>
          </div>
        </form>
        <p class="mt-2 text-center text-gray-500 dark:text-gray-300 text-xs">
          We'll notify you when we launch.
        </p>
      </div>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
          Thank You!
        </h2>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          Thank you for subscribing. We'll notify you when we launch.
        </p>
        <button
          @click="showModal = false"
          class="mt-6 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded dark:bg-cyan-600 dark:hover:bg-cyan-800">
          Close
        </button>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black opacity-50 z-40"></div>
  </div>
</template>

<script>
export default {
  name: "ComingSoon",
  data() {
    return {
      email: "",
      showModal: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log(`Email submitted: ${this.email}`);
      this.showModal = true;
      this.email = "";
    },
  },
};
</script>

<style scoped></style>
