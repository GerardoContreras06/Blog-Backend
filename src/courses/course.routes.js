import { Router } from "express";
import { getCoursesByName, getCourseById ,createCourse, updateCourse, deleteCourse } from "./course.controller.js";
import { validatorCreateCourse, validatorUpdateCourse, validatorDeleteCourse } from "../middlewares/validator-course.js";

const router = Router();

router.get(
    "/Name",
    getCoursesByName
)

router.get(
    "/:id",
    getCourseById
)

router.post(
    "/",
    validatorCreateCourse,
    createCourse
)

router.put(
    "/:id",
    validatorUpdateCourse,
    updateCourse
)

router.delete(
    "/:id",
    validatorDeleteCourse,
    deleteCourse
)

export default router;