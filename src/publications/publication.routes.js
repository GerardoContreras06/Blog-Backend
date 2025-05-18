import { Router } from "express";
import { getPublicationsByDate, createPublication, updatePublication, deletePublication } from "./publication.controller.js";
import { validatorCreatePublication, validatorUpdatePublication, validatorDeletePublication } from "../middlewares/validator-publications.js";

const router = Router();

router.get(
    "/date",
    getPublicationsByDate
)

router.post(
    "/",
    validatorCreatePublication,
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