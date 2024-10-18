<template>
  <div v-if="showBox1" class="container mx-auto p-6">
    <h1
      class="great-vibes-regular my-5 text-5xl font-bold text-center tracking-wider">
      Ucapan
    </h1>
    <div class="mb-6">
      <input
        v-model="newComment.name"
        type="text"
        placeholder="Your Name"
        class="w-full p-2 mb-2 border border-gray-300 rounded" />
      <textarea
        v-model="newComment.comment"
        placeholder="Your Comment"
        class="w-full p-2 mb-2 border border-gray-300 rounded h-24 resize-none"></textarea>
      <button
        type="button"
        style="background-color: #a52a2a"
        @click="addComment"
        class="w-full text-white p-2 rounded font-bold tracking-widest">
        Send
      </button>
    </div>
    <div class="card-comment p-4 overflow-y-scroll">
      <div
        v-for="(comment, index) in comments"
        :key="index"
        class="mb-4 p-2 border-b border-gray-300">
        <div
          style="color: #722637"
          class="mb-3 text-lg font-bold text-ellipsis overflow-hidden mr-2">
          @{{ comment.name }}
        </div>
        <p class="font-normal overflow-hidden">{{ comment.comment }}</p>
        <p class="font-extralight text-xs mt-2">{{ comment.date }}</p>
      </div>
    </div>
    <div class="text-center mt-6 px-2">
      <p
        style="color: #722637"
        class="text-center text-sm tracking-wide font-medium">
        menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
        berkenan untuk hadir dalam hari bahagia ini. Terima kasih atas segala
        ucapan, doa, dan perhatian yang diberikan.
      </p>
      <p style="color: #722637" class="my-4 font-semibold">
        See you on our wedding day!
      </p>
      <h1
        class="great-vibes-regular py-5 text-5xl font-bold text-center tracking-wider">
        Dicki & Pitta
      </h1>
    </div>
    <footer
      style="color: #722637"
      class="mt-8 text-base leading-6 text-center text-gray-700">
      <a href="https://www.instagram.com/kdeveloper18/" target="_blank">
        © 2024 K-Developer, Inc. All rights reserved.
      </a>
    </footer>
  </div>
</template>
<script>
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const apiKey = import.meta.env.VITE_APP_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN;
const databaseURL = import.meta.env.VITE_APP_FIREBASE_DATABASE_URL;
const projectId = import.meta.env.VITE_APP_FIREBASE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_FIREBASE_APP_ID;

// Create Firebase config object
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default {
  props: {
    isMessageVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: this.isMessageVisible,
      newComment: {
        name: "",
        comment: "",
      },
      comments: [],
      showBox1: false,
    };
  },
  watch: {
    isMessageVisible(newValue) {
      this.show = newValue;
      if (newValue) {
        this.triggerTransitions();
      }
    },
  },
  methods: {
    getDate() {
      const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];

      const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
      ];

      const currentDate = new Date();
      const dayName = days[currentDate.getDay()];
      const monthName = months[currentDate.getMonth()];
      const formattedDate = `${dayName} ${monthName} ${currentDate.getDate()} ${currentDate.getFullYear()}`;
      return formattedDate;
    },
    addComment() {
      const commentDate = this.getDate();
      if (this.newComment.name && this.newComment.comment) {
        const commentsRef = ref(database, "comments");
        push(commentsRef, {
          ...this.newComment,
          date: commentDate,
        });
        this.newComment.name = "";
        this.newComment.comment = "";
      } else {
        alert("Please enter your name and comment.");
      }
    },
    fetchComments() {
      const commentsRef = ref(database, "comments");
      onValue(commentsRef, (snapshot) => {
        const commentsData = snapshot.val();
        if (commentsData) {
          this.comments = Object.values(commentsData);
        }
      });
    },
    triggerTransitions() {
      setTimeout(() => {
        this.showBox1 = true;
      }, 500);
    },
  },
  created() {
    this.fetchComments();
  },
};
</script>

<style>
.card-comment {
  height: 300px;
  border: 0.2px solid #a52a2a91; /* Example border style */
  border-radius: 10px;
}
</style>
