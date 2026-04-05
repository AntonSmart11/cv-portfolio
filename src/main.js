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
    project_javida:
      "A static webpage for Grupo Javida, a company dedicated to industrial equipment maintenance, hydrostatic testing, and bolting services, with a form to send a message to an email address.",
    project_dimaa:
      "A web application designed for CBTIS that promotes student retention through personalized monitoring, early alerts for risk of dropout, accessible educational resources, and an effective communication system between students, teachers, and tutors.",
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
      "Soy Ingeniero en Desarrollo y Gestión de Software 💻 especializado en desarrollo web. Cuento con una sólida experiencia en la creación y despliegue de aplicaciones, manejando tecnologías front-end como HTML, CSS, JavaScript, Vue.js y React.js 🚀, y back-end con PHP, Kotlin y Express.js. Domino la gestión de bases de datos SQL (MySQL, MariaDB, PostgreSQL, SQL Server), lo que me permite diseñar y construir soluciones web robustas de principio a fin.",
    description_second:
      "Me considero una persona proactiva, creativa ✨ y con una fuerte capacidad para el trabajo en equipo, siempre buscando optimizar procesos y colaborar eficazmente en la asignación de tareas para alcanzar los objetivos del proyecto. 💪",
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
    project_javida:
      "Página web estática del Grupo Javida, compañía dedicada al mantenimiento de equipos industriales, pruebas hidroestáticas y torqueo, con formulario para enviar mensaje a un correo electrónico.",
    project_dimaa:
      "Aplicación web diseñada para el CBTIS que promueve la retención estudiantil mediante seguimiento personalizado, alertas tempranas de riesgo de abandono, recursos educativos accesibles y un sistema de comunicación efectiva entre alumnos, docentes y tutores.",
    contact: "Contáctame",
    message_contact:
      "Si quieres contactarme puedes hacerlo a través de las redes sociales o sobre el correo de contacto. Te responderé lo antes posible. ¡Gracias por considerarme!😊",
    thanks: "¡Gracias por visitar mi sitio web! 😁",
  },
};

const i18n = createI18n({
  locale: "es",
  messages,
});

createApp(App).use(i18n).mount("#app");
