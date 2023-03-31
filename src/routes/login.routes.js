const {Router} = require('express');

const router = Router();

const loginCtrl = require('../controllers/loginController');
//Endpoint para registrarse
router.post('/register', loginCtrl.register);
//Endpoint para logear
router.post('/', loginCtrl.login);


module.exports = router;