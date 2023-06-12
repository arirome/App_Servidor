const mongoose = require('mongoose')
const Schema = mongoose.Schema



const TareasSchema = new Schema({
    
    /* user:{type:Schema.Types.ObjectId, ref: 'User'}, */

    

    texto: {
        type: String,
        required: true
    },

    estadoTarea: {

        type: String,
        enum: ["Completado", "Pendiente", "En progreso"]
    },


    date: {
        type: String,
        type: Date,
        default: Date.now()
    },

})

module.exports = Tareas = mongoose.model('tareas', TareasSchema)