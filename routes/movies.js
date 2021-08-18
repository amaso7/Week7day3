const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express')
const Movie = require('../models/movie')
const Genre = require('../models/genre')
const router = express.Router()


global.movies = []
global.deletedMovies = []

const genreNames = ['Action','comedy', 'Drama', 'Horror']
const genre = []
genreNames.forEach(name =>{
    let genreObj = new Genre(name)
    genreNames.push(genreObj)
})

const VIEWS_PATH = path.join (__dirname, 'views')

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')

router.get('/', (req, res) => {
    let filteredMovies = []
    global.movies.forEach(movie => {
        if (deletedMovies.includes(movie.id)){
            filteredMovies.push(movie)
        }
    })
    res.render('movies', {movies: filteredMovies})
})
router.post('/', (req, res) =>{
    let currentTime = Date.now()
    let randomInt = Math.floor((math.random()* 1000000000))
    let id = currentTime.tosting() + randomInt.toString()
    let imgUrl = req.body.imgUrl
    let title = req.body.title
    let genre = req.body.genre
    let description = req.body.description
    let movieObj = new Movie(id, imgUrl, title, genre, description)
    global.movies.push(movieObj)
    res.redirect('/movies') 
})
router.post('/delete-movie', (req, res)=>{
    let id = req.body.id
    global.deletedMovies.push(id)
    res.redirect('/movies')
})
router.get('/genre', (req, res) =>{
    res.render('genres', {genres: genres})
})
router.get('/genre/:genre',(req, res) =>{
    let id = req.params.genre
    let filteredMovies = []
    globlal.movies.forEach(movie =>{
        if (deletedMovies.includes(movie.id) + (genreName == movie.genre)) {
            filteredMovies.push(movie)
        }
    })
    let genreAndMovies = {genre: genreName, movies: filteredMovies}
    res.render('filteredMovies', {movies: genreAndMovies})
})

router.get('/:movieid', (req, res) => {
    let id = req.params.movieid
    let move = global.movies.find(movie =>{
        if (movie.id ==id){
            return movie
        }
    })
    res.render('moviedetails', movie)
})

module.exports = router