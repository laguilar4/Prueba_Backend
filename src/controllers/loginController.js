const loginCtrl = {};
const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
//Guarda los datos del usuario
loginCtrl.register = async (req, res) => 
{
   const user = await User.create({
        user: req.body.user,
        password: req.body.password,
        name: req.body.name,
        lastname: req.body.lastname
      });
    return res.status(200).json(user);
}
//Consulta el usuario y si los datos coinciden retorna el token
loginCtrl.login = async (req, res) => 
{
    const findUser = await User.findOne({
        user: req.body.user,
        password: req.body.password
    });
    if(findUser)
    {
        const token = jwt.sign(
            { 
                name: req.body.name,
                lastname: req.body.lastname
            },
            process.env.SEED_TOKEN,
            {
                expiresIn: "2h",
            }
            );
            return res.status(200).json({status: "success",token});

    }else
    {
        return res.status(400).json({message: "Usuario o Contraseña Incorrecto"})

    }
    
}

module.exports = loginCtrl;