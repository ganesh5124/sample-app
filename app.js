const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("✅ Node.js App running on Azure App Service!--- production");
});

app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
