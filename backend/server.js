const express = require("express");
const cors = require("cors");

const roomRoutes = require("./routes/roomRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/rooms", roomRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});