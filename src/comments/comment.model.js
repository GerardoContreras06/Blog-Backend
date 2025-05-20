import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
    nameUser: {
        type: String,
        required: [true, "El nombre de usuario es requerido"],
        maxLength: [25, "El maximo permitido son 25 caracteres"]
    },
    content: {
        type: String,
        required: [true, "El contenido del comentario es requerido"],
        maxLength: [200, "el maximo permitido son 200 caracteres"]
    },
    publication: {
        type: Schema.Types.ObjectId,
        ref: 'publication'
    },
    publicationDate: {
        type: Date,
    },
    estado: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true,
    versionKey: false
});

export default model('Comment', CommentSchema)