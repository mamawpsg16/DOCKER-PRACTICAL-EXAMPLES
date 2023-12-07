const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"AYOO BRODIE V2 V2"
    },
    {
      "id":"2",
      "title":"Game Review: Pokemon Brillian Diamond"
    },
    {
      "id":"5",
      "title":"Show Review: Alice in Borderland"
    }
  ])
})

app.listen(5000, () => {
  console.log('listening for requests on port 5000')
})