const express = require('express')
const port = 3000
const app = express()
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  const password = generatePassword(option)
  res.render('index', {password, option})
})

app.listen(port, () => {
  console.log(`app is listening on http://localhost:${port}`)
})
