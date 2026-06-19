require("dotenv").config()
const express = require("express")
const connectDB =require("./src/db/connectdb")
const app = express();
const contactRouter= require("./src/router/contact")
const cors = require("cors")




app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json())
app.use("/contact", contactRouter)

app.get("/", (req, res) => {
  res.send("Hello TypeScript + Express!");
});

connectDB()

app.listen(3000, () => {
  console.log("Server running on port 3000");
});