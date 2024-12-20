<template>
  <div class="main">
    <div
      class="container d-flex flex-column justify-content-center align-items-center gap-5"
    >
      <div class="text-center">
        <p>Hola 👋, soy</p>
        <h1 class="barlow-bold text-center">Antonio<br />Ovando</h1>
        <p class="mt-3">Desarrollador Full Stack 💻</p>
      </div>

      <a href="/cv.pdf" download="" class="btn-cv barlow-bold">Descargar CV</a>
    </div>
  </div>
</template>

<script setup></script>

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
</style>
