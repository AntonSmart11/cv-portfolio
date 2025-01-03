import { createApp } from "vue";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    greeting: "Hi there 👋, I'm",
    position: "Full Stack Developer",
    download: "Download CV",
    about: "About me",
    description_first:
      "I am passionate about the technology industry and enjoy creating web applications or websites that provide a great user experience.",
    description_second:
      "I am a creative, committed, self-taught, and responsible person when it comes to projects.",
    services: "Services",
    tools: "Tools",
    projects: "Projects",
    project_pikachu:
      "A database manager with a Pikachu theme for local MySQL features basic functions and allows the creation of databases, tables, columns, primary keys, and foreign keys.",
    project_quiper:
      "A static website promoting a computer store. It includes effects implemented with JavaScript.",
    project_doppia:
      "A web application for accounting procedures migrated from Vue 2 to Vue 3. (Only the initial screen is shown for discretion.)",
    project_optabasco:
      "A mobile application for government reports for the state of Tabasco, developed for Android devices using Kotlin.",
    project_movieplus:
      "A website that queries a movie API, collecting the most recent information, including title, description, and YouTube trailers.",
    project_protrack:
      "A web application that allows project tracking by registering tasks and notes monitors the completion percentage and assigns a link between individuals and tasks.",
    contact: "Contact me",
    message_contact:
      "If you wish to contact me, you can do so through social media or via the contact email. I will respond as soon as possible. Thank you for considering me! 😊",
    thanks: "Thank you for visiting my website! 😁",
  },
  es: {
    greeting: "Hola 👋, soy",
    position: "Desarrollador Full Stack",
    download: "Descargar CV",
    about: "Sobre mí",
    description_first:
      "Soy un apasionado de la industria tecnológica, me gusta crear aplicaciones web o páginas web que brinden una experiencia buena para el usuario.",
    description_second:
      "Soy una persona creativa, comprometida, autodidacta y responsable dentro de los proyectos.",
    services: "Servicios",
    tools: "Herramientas",
    projects: "Proyectos",
    project_pikachu:
      "Manejador de base de datos con temática de Pikachu para MySQL local con funciones básicas. Permite crear bases de datos, tablas, columnas, llaves primarias y foráneas.",
    project_quiper:
      "Página web estática promocionando una tienda de computadoras. Contiene efectos realizados con JavaScript.",
    project_doppia:
      "Applicación web para procedimientos contables, se migró de la versión de Vue 2 a Vue 3. (Solo se muestra la pantalla inicial por discreción.)",
    project_optabasco:
      "Aplicación móvil para reportes gubernamentales para el estado de Tabasco para dispositivos Android, realizado con Kotlin.",
    project_movieplus:
      "Página web que consulta un API de películas, recolecta la información más recientes de estas, trayendo su título, descripción y trailers de YouTube.",
    project_protrack:
      "Aplicación web que permite dar el siguimiento a un proyecto, registrando tareas y notas, lleva el control del porcentaje realizado y asigna un vinculo entre persona-tarea.",
    contact: "Contáctame",
    message_contact:
      "Si quieres contactarme puedes hacerlo a través de las redes sociales o sobre el correo de contacto. Te responderé lo antes posible. ¡Gracias por considerarme!😊",
    thanks: "¡Gracias por visitar mi sitio web! 😁",
  },
};

const i18n = createI18n({
  locale: "en",
  messages,
});

createApp(App).use(i18n).mount("#app");
