import express from "express";
import basicAuth from "express-basic-auth";

const app = express();
const port = 3000;

const users = {};
if (process.env?.USERNAME && process.env?.PASSWORD)
  users[process.env.USERNAME] = process.env.PASSWORD;
else users["test-user"] = "1234";

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get(
  "/secret",
  basicAuth({
    challenge: true,
    users: users,
  }),
  (req, res) => {
    res.send("This is the secret message :>");
  }
);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
