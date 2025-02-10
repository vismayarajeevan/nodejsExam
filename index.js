const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()


const router = require('./router/router')
require('./database/db')


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT,(req,res)=>{
    console.log(`server is running at port ${PORT}`);
    
})