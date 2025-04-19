const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, './css')))
app.use(express.static(path.join(__dirname, './visit-south-africa')))
app.use(express.static(path.join(__dirname, './js')))
app.use(express.urlencoded({extended:false}))


app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname, './index.html'))
})

app.post('/booking',(req,res)=>{
    //const {fname,lname,email,date} = req.bod    console.log(req.body)
    console.log(req.body)
    res.end()
})

app.listen(8888,()=>{
    console.log('started listening on port 8888')
})