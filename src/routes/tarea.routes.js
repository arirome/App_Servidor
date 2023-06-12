const routerTareas = require('express').Router()

const {
    rutaPostTareas,
    rutaGetTareas,
    rutaPutTareas,
    rutaDeleteTareas
} = require('../controllers/tareas.controllers');



//RUTA GET

routerTareas.get('/get-tarea', rutaGetTareas)



//RUTA POST

routerTareas.post('/tarea' , rutaPostTareas)

//RUTA PUT

routerTareas.put('/edit-tarea/:id', rutaPutTareas)

//RUTA DELETE

routerTareas.delete('/delete-tarea/:id', rutaDeleteTareas)


module.exports=routerTareas