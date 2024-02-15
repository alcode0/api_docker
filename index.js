const express = require("express")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{

    res.status(200).json({Batman_Message:"Batman extraña a su Gatubela"})
})

app.listen(3000,(req,res)=>{
    console.log("listem in port 3000")
})