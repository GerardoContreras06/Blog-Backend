import { body, param } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { existeComentarioById } from "../helpers/db-validator.js";

export const validatorCreateComment = [
    body("nameUser", "The nameUser is required").notEmpty(),
    body("content", "The content is required").notEmpty(),
    validarCampos
]

export const validatorUpdateComment = [
    param("id", "Enter a valid ID").notEmpty(),
    param("id").custom(existeComentarioById),
    body("nameUser", "The nameUser is required").notEmpty(),
    body("content", "The content is required").notEmpty(),
    body("publication", "Enter a publication fot the comment").notEmpty(),
    body("publicationDate", "Invalid publication date").isISO8601(),
    validarCampos
]

export const validatorDeleteComment = [
    param("id", "Enter a valid ID").notEmpty(),
    param("id").custom(existeComentarioById),
    validarCampos
]