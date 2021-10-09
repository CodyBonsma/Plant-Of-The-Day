const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));
app.use(express.static(path.join(__dirname, "public")));

console.log(__dirname)

// app.get("/api/plants", (req, res) => {
//   const plants = ["rose", "hydreangia", "bitches", "cookout"];

//   res.json(plants);
//   //   res.json({success: "true"})
// });

const plantsTwo = ["another", "list", "ofPlants"]

app.get("/api/plants", (req, res) => {
  res.json(plantsTwo);
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
