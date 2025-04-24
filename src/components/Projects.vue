<template>
  <div class="container text-center">
    <h1 class="mt-4 barlow-bold line-down">{{ $t("projects") }}</h1>

    <div v-for="(project, index) in projects" :key="index" class="my-5">
      <div class="row">
        <div
          :class="{
            'order-md-2 col-12 col-md-6': index % 2 === 0,
            'order-md-1 col-12 col-md-6': index % 2 !== 0,
          }"
        >
          <div
            :id="project.code"
            class="carousel slide carousel-fade custom-carousel"
          >
            <div class="carousel-indicators">
              <button
                v-for="(indicator, index) in project.images"
                type="button"
                :data-bs-target="`#${project.code}`"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                :aria-current="index === 0 ? 'true' : null"
              ></button>
            </div>
            <div class="carousel-inner">
              <div
                v-for="(image, index) in project.images"
                :key="index"
                class="carousel-item"
                :class="{ active: index === 0 }"
              >
                <img
                  :src="`/cv-portfolio/projects/${project.code}/${image}.webp`"
                  :alt="image"
                  class="d-block w-100 img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              :data-bs-target="`#${project.code}`"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Atrás</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              :data-bs-target="`#${project.code}`"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>

        <div
          :class="{
            'order-md-1 col-12 col-md-6': index % 2 === 0,
            'order-md-2 col-12 col-md-6': index % 2 !== 0,
          }"
        >
          <p
            class="barlow-bold title-project"
            :class="{
              'text-start': index % 2 !== 0,
              'text-end': index % 2 === 0,
            }"
          >
            {{ project.name }}
          </p>
          <p class="barlow-bold project-description text-start p-4">
            {{ project.description }}
          </p>
          <span
            v-if="project.github != 'no'"
            class="d-flex"
            :class="{
              'justify-content-start': index % 2 !== 0,
              'justify-content-end': index % 2 === 0,
            }"
          >
            <a :href="project.github" target="_blank" class="github-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path
                  fill="#ffffff"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
          </span>

          <p
            class="barlow-bold mt-2"
            :class="{
              'text-start': index % 2 !== 0,
              'text-end': index % 2 === 0,
            }"
          >
            {{ project.technologies }}
          </p>
        </div>
      </div>

      <hr v-if="index !== projects.length - 1" />
    </div>
  </div>
</template>

<script setup>
import { Carousel } from "bootstrap";
import { onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const projects = computed(() => [
  {
    name: "DIMAA",
    code: "dimaa",
    description: t("project_dimaa"),
    github: "no",
    technologies: "AngularJS, ExpressJS, MySQL, PrimeNG, Bootstrap",
    images: [
      "login",
      "dashboard",
      "profile",
      "students_table",
      "students_update",
      "incidences_table",
      "incidences_update",
      "failed_table",
      "failed_update",
      "specialties_table",
      "specialties_update",
      "users_table",
      "users_update",
    ],
  },
  {
    name: "Pikachu DBMS",
    code: "pikachudbms",
    description: t("project_pikachu"),
    github: "https://github.com/AntonSmart11/pikachuDBMS",
    technologies: "PHP, JavaScript",
    images: [
      "index",
      "main",
      "create_db",
      "db",
      "create_table_1",
      "create_table_2",
      "table",
      "drop_table",
      "data",
      "insert",
      "sql",
    ],
  },
  {
    name: "Javida",
    code: "javida",
    description: t("project_javida"),
    github: "no",
    technologies: "VueJS, PHP",
    images: [
      "main_portrait",
      "main_services",
      "main_about",
      "main_clients",
      "about_description",
      "about_values",
      "services_maintenance",
      "services_tests",
      "services_torque",
      "clients",
      "contact",
    ],
  },
  {
    name: "Quiper",
    code: "quiper",
    description: t("project_quiper"),
    github: "https://github.com/AntonSmart11/quiper",
    technologies: "HTML, CSS, JavaScript",
    images: ["index", "footer", "image_left", "image_right"],
  },
  {
    name: "Doppia",
    code: "doppia",
    description: t("project_doppia"),
    github: "no",
    technologies: "Vue 3",
    images: ["dashboard"],
  },
  {
    name: "OP Tabasco",
    code: "optabasco",
    description: t("project_optabasco"),
    github: "https://github.com/AntonSmart11/OPTabasco",
    technologies: "Kotlin, Jetpack Compose, SQLite, Firebase",
    images: [
      "login",
      "register",
      "main_user",
      "create_application",
      "application",
      "index_admin",
      "applications_admin",
      "application_admin",
      "users_admin",
      "profile",
      "password",
      "delete_account",
      "report",
    ],
  },
  {
    name: "ProTrack",
    code: "protrack",
    description: t("project_protrack"),
    github: "https://github.com/AntonSmart11/ProTrack",
    technologies: "Kotlin, Jetpack Compose, SQLite, Firebase",
    images: ["dashboard", "projects", "project", "homework", "profile"],
  },
]);

onMounted(() => {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    new Carousel(carousel);
  });
});
</script>

<style scoped>
.project-description {
  background-color: #674cde;
  padding: 10px;
}

.custom-carousel {
  max-width: 700px;
  height: auto;
  margin: auto;
}

.custom-carousel img {
  border: 5px solid #674cde;
  border-radius: 10px;
}

.carousel-indicators button {
  background-color: #674cde;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  opacity: 0.7;
}

.carousel-indicators .active {
  background-color: #9c7ffb;
  opacity: 1;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(34%) sepia(98%) saturate(700%) hue-rotate(230deg)
    brightness(110%) contrast(95%);
}

.title-project {
  font-size: 2rem;
}

.github-icon svg {
  max-width: 50px;
  height: 50px;

  transition: all 0.3s ease;
}

.github-icon svg:hover {
  transform: scale(1.1);
}

hr {
  border: none;
  border-top: 3px solid rgba(103, 76, 222, 0.5); /* Morado con opacidad */
  margin: 3rem auto;
  opacity: 0.7;
}
</style>
