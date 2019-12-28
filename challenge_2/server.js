const express = require('express')
const app = express()
const port = 3000

app.use(express.static('client'))

app.post('/something', express.json(), (req, res) => {
  console.log(req.body)
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
