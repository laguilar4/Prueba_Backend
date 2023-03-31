const {Router} = require('express');

const router = Router();

const movieCtrl = require('../controllers/movieController');

const jwt = require('../middleware/jwt');
//Endpoint con verificacion de jwt para guardar
router.post('/save', jwt.verifyToken, movieCtrl.save);
//Endpoint con verificacion de jwt para consultar
router.get('/', jwt.verifyToken, movieCtrl.getAll);


module.exports = router;