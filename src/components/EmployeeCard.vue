<template>
  <div class="employee-card">
    <div
      class="avatar"
      :style="`background-image: url(${employee.avatar})`"
    ></div>

    <h2>{{ employee.first_name + " " + employee.last_name }}</h2>
    <a class="mail-link" :href="'mailto:' + employee.email">Kontakta Mig</a>
  </div>
</template>

<script lang="ts">
export default {
  name: "EmployeeCard",
  props: {
    employee: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.employee-card {
  padding: 20px;
  margin: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.484);
  width: clamp(80px, 80%, 250px);
}
.avatar {
  aspect-ratio: 1/1;
  height: 80%;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  margin: 0 auto;
}

.mail-link {
  margin-top: 10px;
  color: black;
  transition: all 0.1s ease-in;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;
}

.mail-link:hover {
  color: rgb(47, 47, 171);
}
</style>
