import { body, param } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { existeCategoriaById, noExistentePublication, nullPublication } from "../helpers/db-validator.js";

export const validatorCreateCategory = [
    body("nameCategory", "The nameCategory is required").notEmpty(),
    body("publication", "Enter a publication fot the comment").notEmpty(),
    body("publication").custom(noExistentePublication),
    body("publication").custom(nullPublication),
    validarCampos
]

export const validatorUpdateCategory = [
    param("id", "Enter a valid ID").notEmpty(),
    param("id").custom(existeCategoriaById),
    body("nameCategory", "The nameCategory is required").notEmpty(),
    body("publication", "Enter a publication fot the comment").notEmpty(),
    body("publication").custom(noExistentePublication),
    body("publication").custom(nullPublication),
    validarCampos
]

export const validatorDeleteCategory = [
    param("id", "Enter a valid ID").notEmpty(),
    param("id").custom(existeCategoriaById),
    validarCampos
]