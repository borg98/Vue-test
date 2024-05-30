<script setup lang="ts">
import EmployeeContainer from "./components/EmployeeContainer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <main class="main">
    <Navbar></Navbar>
    <section class="hero-container">
      <h3 class="hero-title">Vi på <span class="last-word">Vendre</span></h3>
      <p class="hero-description">Här är vårt fantastiska team</p>
      <a href="#employeeWrapper" class="arrow-link">
        <i class="arrow-down fa-solid fa-arrow-down"></i>
      </a>
    </section>
    <section class="wrapper" id="employeeWrapper">
      <EmployeeContainer></EmployeeContainer>
    </section>
  </main>
</template>

<style>
:root {
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
}
body {
  margin: 0;
}

.no-scroll {
  overflow: hidden;
}

main {
  padding-top: 0%;
}

.hero-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    180deg,
    rgb(239, 236, 253),
    rgb(255, 255, 255)
  );
}

.hero-title {
  font-size: 4rem;
  color: #333;
  text-align: center;
}

.last-word {
  background-image: linear-gradient(
    68deg,
    #5333ed 2%,
    #ffa2ff 51%,
    #ff5a20 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 1.5rem;
  color: #333;
  text-align: center;
}

.arrow-link {
  font-size: 2rem;
  background-color: rgb(61, 25, 235);
  margin-top: 20px;
  padding: 5px 30px;
  border-radius: 10px;
}

.arrow-down {
  color: white;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
</style>
