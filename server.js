const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const plants = ["rose", "hydreangia", "bitches", "cookout"];

app.get("/api/plants", (req, res) => {
  res.json(plants);
//   res.json({success: "true"})
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
