require("dotenv").config()
const express = require("express")
const connectDB =require("./src/db/connectdb")
const app = express();
const contactRouter= require("./src/router/contact")
const cors = require("cors")




app.use(cors({
  origin: "https://workshop-landing-page-s2uw.vercel.app/"
}));

app.use(express.json())
app.use("/contact", contactRouter)

app.get("/", (req, res) => {
  res.send("Hello TypeScript + Express!");
});

connectDB()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port 3000");
});