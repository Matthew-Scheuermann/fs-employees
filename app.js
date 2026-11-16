import express from "express";
import {
  getEmployees,
  getEmployee,
  createEmployee,
  deleteEmployee,
} from "#db/queries/employees";

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

app.post("/employees", async (req, res) => {
  const { name, birthday, salary } = req.body ?? {};
  if (!name || !birthday || salary === undefined) {
    return res.status(400).send("Missing required field.");
  }
  const employee = await createEmployee({ name, birthday, salary });
  res.status(201).send(employee);
});

app.delete("/employees/:id", async (req, res) => {
  const employee = await deleteEmployee(req.params.id);
  if (!employee) return res.status(404).send("Employee not found.");
  res.sendStatus(204);
});
