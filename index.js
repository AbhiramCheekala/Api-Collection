const express = require("express");
const requestRoutes = require("./routes/requestRoutes");
const { PORT } = require("./config/serverConfig");

const app = express();
app.use(express.json());

// Routes
app.use("/requests", requestRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
