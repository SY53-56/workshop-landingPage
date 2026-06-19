require("dotenv").config();
const express = require("express");
const connectDB = require("./src/db/connectdb");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://workshop-landing-page-s2uw.vercel.app"
    ],
    credentials: true
  })
);
app.use(express.json());

const contactRouter = require("./src/router/contact");
app.use("/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("Hello TypeScript + Express!");
});

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});