import { Router } from "express";
import { getCategories, createCategory, updateCategory, deleteCategory } from "./category.controller.js";
import { validatorCreateCategory, validatorUpdateCategory, validatorDeleteCategory } from "../middlewares/validator-categories.js";

const router = Router();

router.get(
    "/",
    getCategories
)

router.post(
    "/",
    validatorCreateCategory,
    createCategory
)

router.put(
    "/:id",
    validatorUpdateCategory,
    updateCategory
)

router.delete(
    "/:id",
    validatorDeleteCategory,
    deleteCategory
)

export default router;