require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req, res) => {
res.send('https://github.com/')
}) 

app.get('/login', (req, res) => {
res.send('<h1> please login code with abhina</h1>')
})

app.get('/youtub', (req, res) => {
res.send('https://www.youtube.com/')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})