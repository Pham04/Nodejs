
const handlebars = require('express-handlebars')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const path = require('path')
const methodOverride = require('method-override')

const route = require('./routes')

const db = require('./config/db')

//Connect to DB

db.connect();



app.use(express.static(path.join(__dirname,'public')))
// this is an attribute help you read req.body object(form data)
app.use(express.urlencoded({
  extended: true,
}))
app.use(express.json())

//HTTP logger
// app.use(morgan('combined'));
app.use(methodOverride('_method'))
//Template engine

app.engine('.hbs', 
  handlebars.engine(
    {
      extname: '.hbs',
      helpers: {
        sum(a, b) { return a+b },
      }
    }
))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '\\resources\\views'))

//routes init
route(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})