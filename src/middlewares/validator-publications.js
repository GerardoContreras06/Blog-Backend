import { body, param } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { existePublicacionById, noExistenteCategory, nullCategory  } from "../helpers/db-validator.js";

export const validatorCreatePublication = [
    body("title", "The title is required").notEmpty(),
    body("description", "The description is required").notEmpty(),
    body("course", "Enter a course for the publication").notEmpty(),
    body("course").custom(noExistenteCategory),
    body("course").custom(nullCategory),
    body("creationDate", "Invalid creation date").isISO8601(),
    validarCampos
]

export const validatorUpdatePublication = [
    param("id", "Enter a valid ID").notEmpty(),
    param("id").custom(existePublicacionById),
    body("title", "The title is required").notEmpty(),
    body("description", "The description is required").notEmpty(),
    body("course", "Enter a course for the publication").notEmpty(),
    body("course").custom(noExistenteCategory),
    body("course").custom(nullCategory),
    body("creationDate", "Invalid creation date").isISO8601(),
    validarCampos
]

export const validatorDeletePublication = [
    param("id", "Enter a valid ID").notEmpty(),
    param("id").custom(existePublicacionById),
    validarCampos
]