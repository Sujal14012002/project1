require('dotenv').config()
const express = require('express')
const app = express()
const port = 1234


app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("sujal.com")
})

app.get('/login',(req,res)=>{
res.send('<h1>please login button shivam</h1>')

})


app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
    
    })


app.listen(process.env.PORT,() => {
   console.log(`Example app listening on port ${port}`)
}) 