import { body, param } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { existeCursoById } from "../helpers/db-validator.js";

export const validatorCreateCourse = [
    body("nameCourse", "The nameCourse is required").notEmpty(),
    validarCampos
]

export const validatorUpdateCourse = [
    param("id", "Enter a valid ID").notEmpty(),
    param("id").custom(existeCursoById),
    body("nameCategory", "The nameCategory is required").notEmpty(),
    validarCampos
]

export const validatorDeleteCourse = [
    param("id", "Enter a valid ID").notEmpty(),
    param("id").custom(existeCursoById),
    validarCampos
]