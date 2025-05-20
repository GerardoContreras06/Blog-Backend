import { Router } from "express";
import { getPublicationsByDate, getPublications ,createPublication, updatePublication, deletePublication } from "./publication.controller.js";
import { deleteFileOnError } from '../middlewares/delete-file-on-error.js'
import { validatorCreatePublication, validatorUpdatePublication, validatorDeletePublication } from "../middlewares/validator-publications.js";

const router = Router();

router.get(
    "/date",
    getPublicationsByDate
)

router.get(
    "/",
    getPublications
)

router.post(
    "/",
    validatorCreatePublication,
    deleteFileOnError,
    createPublication
)

router.put(
    "/:id",
    validatorUpdatePublication,
    updatePublication
)

router.delete(
    "/:id",
    validatorDeletePublication,
    deletePublication
)

export default router;