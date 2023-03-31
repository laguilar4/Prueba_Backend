const mongoose = require('mongoose');
//Conecta a la bd Mongo, Test
mongoose.connect('mongodb://127.0.0.1:27017/test',{
    useUnifiedTopology: true, 
    useNewUrlParser: true
})
.then(db => console.log("Db is connected"))
.catch((err) => console.error(err));