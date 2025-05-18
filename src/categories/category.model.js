import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
    nameCategory: {
        type: String,
        unique: [true, "La categoría ya existe"],
        required: [true, "El nombre de la categoría es requerida"],
        maxLength: [25, "El maximo permitido son 25 caracteres"]
    },
    publication: {
        type: Schema.Types.ObjectId,
        ref: 'publication',
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

export default model('Category', CategorySchema)