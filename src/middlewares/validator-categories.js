import { body, param } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { existeCategoriaById } from "../helpers/db-validator.js";

export const validatorCreateCategory = [
    body("nameCategory", "The nameCategory is required").notEmpty(),
    body("publication", "Enter a publication fot the comment").notEmpty(),
    validarCampos
]

export const validatorUpdateCategory = [
    param("id", "Enter a valid ID").notEmpty(),
    param("id").custom(existeCategoriaById),
    body("nameCategory", "The nameCategory is required").notEmpty(),
    body("publication", "Enter a publication fot the comment").notEmpty(),
    validarCampos
]

export const validatorDeleteCategory = [
    param("id", "Enter a valid ID").notEmpty(),
    param("id").custom(existeCategoriaById),
    validarCampos
]