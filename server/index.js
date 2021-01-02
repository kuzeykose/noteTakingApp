const express = require('express')
const cors = require('cors');
var bodyParser = require('body-parser')
const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000

app.use('/api/note', require('./routes/api/notes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})