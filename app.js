const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express')

const PORT = 3000
const moviesRouter = require('./routes/movies.js')

app.use(express.urlencoded())
app.use(express.static('public'))
app.use('./movies', moviesRouter)

const VIEWS_PATH = path.join(__dirname, 'views')
app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views',VIEWS_PATH)
app.set('view engie', 'mustache')

app.listen(PORT, () => {
    console.log('server has started...')
})