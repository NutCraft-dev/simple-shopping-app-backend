const express = require("express")
const mongoose = require("mongoose")
const productRoute = require("./routes/product.route.js")
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use("/api/products", productRoute)

app.listen(3001, () => {
  console.log("Server running on port 3001")
})

app.get("/", (req, res) => {
  res.send("hello form Node API Server")
})

mongoose
  .connect("<Connection String here>")
  .then(() => {
    console.log("connected to database!")
  })
  .catch(() => {
    console.log("connection failed!")
  })
