const router = require('express').Router()

const {
    rutaPost,
    rutaGet,
    rutaPut,
    rutaDelete
} = require('../controllers/users.controllers');

const {
    validar_jwt
} = require('../middlewares/validarJWT');



const {
    validarCampos
} = require('../helpers/validarCampos');

//VALIDACIONES

const {
    validarUser
} = require('../middlewares/validarUser');

const {
    body,
    check
} = require('express-validator');

//RUTA GET

router.get('/get-user', rutaGet)


//RUTA POST

router.post('/registro',

body('email', 'El email ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

    body('password', 'El email ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

    validarUser,
  

    rutaPost)

//RUTA PUT

router.put('/edit-user/:id',

    validar_jwt,
    validarUser,
    rutaPut)

//RUTA DELETE

router.delete('/delete-user/:id',

    validar_jwt,

    rutaDelete)


module.exports = router