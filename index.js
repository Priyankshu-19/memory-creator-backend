const mongoose = require("mongoose")
const express = require('express')
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const postRoute = require("./routes/posts")

dotenv.config()

const MONGO_URL = process.env.MONGO_URL
const port = process.env.PORT || 8080

mongoose.connect(MONGO_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})

app.use(cors())
app.use(express.json())
app.use("/posts",postRoute)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})