const express = require("express");

require("dotenv").config();
const PORT = process.env.SERVER_PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mainRoutes = require("./routes");
app.use("/", mainRoutes);

app.listen(PORT, () => [console.log(`Server is running on port ${PORT}`)]);
