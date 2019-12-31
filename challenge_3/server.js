const express = require('express');
const app = express();
const port = 3000
app.use(express.static('public'));

app.post('/F2', (req, res) => res.send('Hello world'))
app.post('/F3', (req, res) => res.send(req.body))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

