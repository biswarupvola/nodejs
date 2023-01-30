const express = require('express')
const bodyParser = require('body-parser');

//https://www.npmjs.com/package/cors
const cors = require('cors')
const app = express()
const ConfigObj = require('./config/core.config');

const {router}  = require("./router")

app.use(cors());
// Middleware
app.use(bodyParser.json()); //Parsing Application/Json Data
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', router)

app.listen(ConfigObj.port, () => {
  console.log(`Example app listening on port ${ConfigObj.port}`)
})