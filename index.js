require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./db/db");
db();

app.use(express.json());
app.use(cors({ origin: "https://freelancenow.netlify.app" }));

const usersRoute = require("./routes/usersRoute");
const projectRoute = require("./routes/projectRoute");
const applyingRoute = require("./routes/applyingRoute");

app.use("/api/users", usersRoute);
app.use("/api/projects", projectRoute);
app.use("/api/applying", applyingRoute);

app.get("/", (req, res) => {
  res.send("Welcome to our Freelance Web Application!");
});

const PORT = process.env.PORT || 31001;

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
