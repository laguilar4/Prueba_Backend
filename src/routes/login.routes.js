const {Router} = require('express');

const router = Router();

const loginCtrl = require('../controllers/loginController');

router.post('/register', loginCtrl.register);

router.post('/', loginCtrl.login);


module.exports = router;