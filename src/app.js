const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/html', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })

app.get('/css', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})