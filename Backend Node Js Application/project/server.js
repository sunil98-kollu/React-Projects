const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose");
var cors = require('cors')
const userRoutes = require("./Routes/UserRoutes");
const app = express();
app.use(express.json())
app.use(cors())
dotenv.config();
const connectDB=async()=>{
  await mongoose.connect(process.env.mongoDBConnectionString)
  console.log('Mongo DB Connected')
}

app.use('/api/users', userRoutes)

app.listen(5050, ()=>{
  console.log('Server is running')
  connectDB()
})
