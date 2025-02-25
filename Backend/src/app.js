const express = require("express");
const app = express();
const cors = require("cors");
const aiRoutes = require("./routes/ai.routes");

app.use(cors());
app.use(express.json());
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("heeiiioo World");
});
// ab jaha jaha se /api ke routes honge waha pe /api lagega
app.use("/ai", aiRoutes);

module.exports = app;

// function App() {
