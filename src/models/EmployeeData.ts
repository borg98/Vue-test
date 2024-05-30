import { Employee } from "./Employee.ts";

export type EmployeeData = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Employee[];
  support: {};
};
