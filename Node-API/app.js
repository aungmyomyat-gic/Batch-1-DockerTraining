const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/books', (req, res) => {
  res.json([
    {
      "id":"1",
      "Pone Nya Khin":"Lat Kyan La Yaung"
    },
    {
      "id":"2",
      "Khat Zaw":"The guys from yangon..."
    },
    {
      "id":"3",
      "Khat Zaw":"The guys from mandalay"
    },
    {
      "id":"4",
      "Tha ka tho Bhone Naing":"Thu Ngal Chin loh bl sat ywae call mye Khaing"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})