const {
    model,
    Schema
} = require('mongoose');

const UserSchema = new Schema({

   /*  usuario: {
        type: String,
        required: true
    }, */
   

    email: {type: String, required: true, },

    password: {type: String, required: true, },

    activo: {type: Boolean, default: true}

})

UserSchema.methods.toJSON = function () {
    const {
        contrasenia,
        _id,
        ...usuario
    } = this.toObject();
    usuario.uid = _id;

    return usuario;
}

module.exports = model('User', UserSchema);