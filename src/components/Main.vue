<template>
  <div class="main">
    <button class="btn-lang" @click="changeLanguage">
      {{ $i18n.locale === "es" ? "EN" : "ES" }}
    </button>
    <div
      class="container d-flex flex-column justify-content-center align-items-center gap-5"
    >
      <div class="text-center">
        <p>{{ $t("greeting") }}</p>
        <h1 class="barlow-bold text-center">Antonio<br />Ovando</h1>
        <p class="mt-3">{{ $t("position") }} 💻</p>
      </div>

      <a :href="cvDownloadLink" download="" class="btn-cv barlow-bold">{{
        $t("download")
      }}</a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const cvDownloadLink = computed(() => {
  return locale.value === "es"
    ? "/cv-portfolio/Antonio_Ovando_Cauich_-_Desarrollador_Full_Stack (es).pdf"
    : "/cv-portfolio/Antonio_Ovando_Cauich_-_Desarrollador_Full_Stack (en).pdf";
});

const changeLanguage = () => {
  locale.value = locale.value === "es" ? "en" : "es";
};
</script>

<style scoped>
h1 {
  font-size: 6rem;
  line-height: 1;
}

p {
  font-family: "Barlow", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.1rem;

  margin-bottom: 0;
}

.main {
  height: 100vh;

  background: rgb(27, 27, 27);
  background: linear-gradient(
    180deg,
    rgba(97, 99, 255, 1) 0%,
    rgba(126, 0, 114, 1) 50%,
    rgba(27, 27, 27, 1) 99%
  );
}

.container {
  height: 100vh;
}

.container-btn {
  overflow: visible;
}

.btn-cv {
  background-color: rgb(27, 27, 27);
  border: none;
  text-decoration: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);

  transition: all 0.3s ease;
}

.btn-cv:hover {
  transform: scale(1.05);
  font-size: 1.02rem;
}

.btn-lang {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-lang:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
