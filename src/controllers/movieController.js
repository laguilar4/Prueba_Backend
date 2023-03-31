const movieCtrl = {};
const Movie = require('../models/movie');
//Guarda el titulo, descripcion y path de imagen de la pelicula como favorito
movieCtrl.save = async (req, res) => 
{
    console.log(req.body);
    const movie = await Movie.create({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path            
    });
    return res.status(200).json(movie);

}
//Consulta todas las peliculas guardadas como favoritos
movieCtrl.getAll = async (req, res) => 
{
    const getMovie = await Movie.find();
    return res.status(200).json(getMovie);
}


module.exports = movieCtrl;