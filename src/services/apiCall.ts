import axios from "axios";
import { EmployeeData } from "../models/EmployeeData.ts";

export async function fetchDataFromApi(pageNr: string) {
  try {
    const response = await axios.get<EmployeeData>(
      `https://reqres.in/api/users?page=${pageNr}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
}
