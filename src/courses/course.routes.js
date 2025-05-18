import { Router } from "express";
import { getCoursesByName, createCourse, updateCourse, deleteCourse } from "./course.controller.js";
import { validatorCreateCourse, validatorUpdateCourse, validatorDeleteCourse } from "../middlewares/validator-course.js";

const router = Router();

router.get(
    "/Name",
    getCoursesByName
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