const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("✅ Node.js App running on Azure App Service!--- staging");
});

app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});

app.get("/getEnv", (req, res) => {
  res.send(`Got environment variables ${process.env.project}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
