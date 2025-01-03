<template>
  <div class="container text-center">
    <h1 class="mt-4 barlow-bold line-down">{{ $t("about") }}</h1>

    <div class="row mt-4 d-flex justify-content-center align-items-center">
      <img
        class="col-12 col-md-6 img-fluid profile-image"
        src="/src/assets/me.png"
        alt="Antonio Ovando"
      />

      <div class="col-12 col-md-6 text-start mx-5 mt-3 mt-md-0">
        <p>
          {{ $t("description_first") }}
        </p>

        <p>
          {{ $t("description_second") }}
        </p>
      </div>
    </div>

    <div class="row">
      <div
        v-for="(icon, index) in icons"
        :key="index"
        class="col-12 col-md-6 d-flex flex-column align-items-center p-5"
      >
        <span class="material-symbols-outlined icon">{{ icon.name }}</span>

        <p class="barlow-bold area">{{ icon.area }}</p>

        <div class="w-100 mt-2 d-flex flex-wrap justify-content-center gap-2">
          <span
            v-for="(technology, index) in icon.technologies"
            :key="index"
            class="badge technology-pill barlow-bold"
          >
            {{ technology }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const icons = computed(() => [
  {
    name: "code",
    area: "Fronted",
    technologies: ["HTML5", "CSS", "JavaScript", "VueJS"],
  },
  {
    name: "database",
    area: "Backed",
    technologies: ["PHP", "Laravel", "MySQL", "SQL Server", "Kotlin"],
  },
  { name: "handyman", area: t("services"), technologies: ["Firebase"] },
  {
    name: "settings",
    area: t("tools"),
    technologies: ["Github", "Postman", "Figma"],
  },
]);
</script>

<style scoped>
.profile-image {
  max-width: 350px;
  height: auto;
  object-fit: cover;
}

.icon {
  font-size: 14rem;
}

.area {
  font-size: 1.4rem;
}

.technology-pill {
  cursor: pointer;
  background-color: #674cde;
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 1.1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
}

.technology-pill:hover {
  transform: scale(1.1);
}
</style>
