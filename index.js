const connectDB = require("./config/db");
const express = require("express");

require("dotenv").config();

const app = express();

// Connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Define routes
app.use("/login", require("./routes/login"));
app.use("/user", require("./routes/user"));
// app.use("/category", require("./routes/category"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
