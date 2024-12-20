<template>
  <div>
    <Main />
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script setup>
import { ref } from "vue";

import Main from "./components/Main.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
</script>

<style scoped></style>
