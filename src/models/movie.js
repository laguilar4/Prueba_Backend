const {Schema, model} = require ('mongoose');
//Schema de pelicula
const moviesSchema= new Schema(
    {
    poster_path: {type: String, required:true},
    title: {type: String, required:true},
    overview: {type: String, required:true},
},{
    timestamps:true,
    versionKey:false
})

module.exports = model("Movies", moviesSchema);