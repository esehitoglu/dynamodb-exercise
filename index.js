const express = require('express')
const app = express()
const endpoint = require('./routes/api')

app.use(express.json())
app.use('/api',endpoint)


app.listen(3000,(req,res)=>{
    console.log("çalıştı")
}) 