const ctrlTareas = {};
const { query } = require('express');
const Tareas = require('../models/Tareas');


//mostrar publicacioness
ctrlTareas.rutaGetTareas = async (req, res) => {

    const tareas = await Tareas.find()
    //res.send(publicaciones)
    
    res.json(tareas);
};


//agrega el publicaciones

ctrlTareas.rutaPostTareas = async (req, res) => {

    console.log(req.body)
    const {
        ...resto
    } = req.body;

    try {
        const tareas = new Tareas(resto);

        //Guardar publicaciones en db
        await tareas.save();

        res.json({
            msg: 'publicaciones agregado exitosamente',
            tareas
        });
    } catch (error) {
        console.log('Error al guardar los datos del publicaciones: ', error);
    };
};



//actualizar publicaciones

ctrlTareas.rutaPutTareas = async (req, res) => {

    const {
        id
    } = req.params;
    const {
        _id,
        ...resto
    } = req.body;

    try {

        /* const removeIndex = publicaciones
            .map(publicacion => publicacion.user.toString() === req.user.id) */


        const tareas = await Tareas.findByIdAndUpdate(id, resto, {
            new: true
        });

        res.json({
            msg: 'Datos del tareas actualizados exitosamente',
            tareas
        });

    } catch (error) {
        console.log('Error al actualizar los datos del tareas: ', error);
    }

};

ctrlTareas.rutaDeleteTareas = async (req, res) => {

    const {
        id
    } = req.params;

    try {

        await Tareas.findByIdAndDelete(id)
        res.json({
            msg: 'publicaciones eliminado correctamente'
        })
    } catch (error) {
        console.log('Error al eliminar publicaciones: ', error)
    }
}

module.exports = ctrlTareas;