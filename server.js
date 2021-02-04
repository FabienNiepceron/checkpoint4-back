const express = require("express");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.SERVER_PORT;

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mainRoutes = require("./routes");
app.use("/", mainRoutes);
app.use("/images", express.static("public/Images"));

app.listen(PORT, () => [console.log(`Server is running on port ${PORT}`)]);
