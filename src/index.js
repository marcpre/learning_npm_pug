require("dotenv").config()
const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
//const index = require("./routes/index")
const app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use(logger("dev"))
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false, }))
app.use(express.static(path.join(__dirname, "public")))

/*
* Routes
*/
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/test', (req, res) => {
  res.render('test')
})

/*
* Server
*/
//Start Server
var port = process.env.APP_PORT || 8080
var host = process.env.APP_URL || "localhost"

app.listen(port, host, function() {
    console.log("Listening on " + host + ":" + port)
})

module.exports = app