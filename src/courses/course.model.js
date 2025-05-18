import { Schema, model } from "mongoose";

const CourseSchema = new Schema({
    nameCourse: {
        type: String,
        unique: [true, "El curso ya existe"],
        required: [true, "El nombre del curso es requerido"],
        maxLength: [25, "El maximo permitido son 25 caracteres"]
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

export default model('Course', CourseSchema)