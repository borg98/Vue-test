<script lang="ts">
import { ref, watch } from "vue";
import { fetchDataFromApi } from "../services/apiCall.ts";
import { EmployeeData } from "../models/EmployeeData.ts";
import EmployeeCard from "./EmployeeCard.vue";

export default {
  components: {
    EmployeeCard,
  },
  name: "EmployeeContainer",
  setup() {
    const data = ref<EmployeeData>();
    const pageNr = ref("1");

    const fetchData = () => {
      fetchDataFromApi(pageNr.value).then((res) => {
        if (res) {
          data.value = res as EmployeeData;
        }
      });
    };

    fetchData();

    watch(pageNr, fetchData);

    return {
      data,
      pageNr,
    };
  },
};
</script>

<template>
  <div class="employees-container">
    <EmployeeCard
      v-if="data"
      v-for="employee in data.data"
      :key="employee.id"
      :employee="employee"
    ></EmployeeCard>
    <ul class="page-container">
      <li
        @click="
          () => {
            pageNr = page.toString();
          }
        "
        v-if="data"
        v-for="page in data.total_pages"
        :key="page"
        :class="
          page.toString() === pageNr ? 'page active-page' : 'page inactive-page'
        "
      >
        {{ page }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.employees-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: clamp(300px, 80%, 1000px);
  padding: 20px;
  gap: 30px;
  padding-top: calc(50px + 21px * 2);
}

.page-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline-start: 0;
}

.page {
  display: flex;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.484);
}
.active-page {
  background-color: rgb(61, 25, 235);
  color: #fff;
}
</style>
