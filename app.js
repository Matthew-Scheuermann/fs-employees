import express from "express";
import { getEmployees, getEmployee } from "#db/queries/employees";

const app = express();

export default app;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});

app.get("/employees", async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});

app.get("/employees/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(404).send("ID must be a positive whole number.");
  }
  const employee = await getEmployee(id);
  if (!employee) return res.status(404).send("Employee not found.");
  res.send(employee);
});
