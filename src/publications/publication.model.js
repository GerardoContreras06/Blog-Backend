import { Schema, model } from "mongoose";

const PublicationSchema = new Schema({
    title: {
        type: String,
        required: [true, "El titulo de la publicación es requerida"],
        maxLength: [50, "El maximo permitido son 50 caracteres"]
    },
    description: {
        type: String,
        required: [true, "La descripción de la publicación es requerida"],
        maxLength: [200, "El maximo permitido son 200 caracteres"]
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'course',
        required: true
    },
    creationDate: {
        type: Date,
        required: true
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

export default model('Publication', PublicationSchema)