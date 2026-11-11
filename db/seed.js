import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const employees = [
    { name: "Michael Scott", birthday: "1964-03-15", salary: 68000 },
    { name: "Dwight Schrute", birthday: "1966-01-20", salary: 62000 },
    { name: "Jim Halpert", birthday: "1978-10-01", salary: 58000 },
    { name: "Pam Beesly", birthday: "1979-03-25", salary: 45000 },
    { name: "Ryan Howard", birthday: "1979-05-05", salary: 40000 },
    { name: "Andy Bernard", birthday: "1973-07-14", salary: 55000 },
    { name: "Angela Martin", birthday: "1971-06-25", salary: 52000 },
    { name: "Kevin Malone", birthday: "1968-06-01", salary: 48000 },
    { name: "Oscar Martinez", birthday: "1976-07-02", salary: 56000 },
    { name: "Stanley Hudson", birthday: "1958-02-19", salary: 60000 },
    { name: "Phyllis Vance", birthday: "1951-07-12", salary: 54000 },
    { name: "Toby Flenderson", birthday: "1970-02-22", salary: 50000 },
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }
}
