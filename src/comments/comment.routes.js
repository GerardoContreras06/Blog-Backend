import { Router } from "express";
import { getCommentsByDate, createComment, updateComment, deleteComment } from "./comment.controller.js";
import { validatorCreateComment, validatorUpdateComment, validatorDeleteComment } from "../middlewares/validator-comments.js";

const router = Router();

router.get(
    "/date",
    getCommentsByDate
)

router.post(
    "/",
    validatorCreateComment,
    createComment
)

router.put(
    "/:id",
    validatorUpdateComment,
    updateComment
),

router.delete(
    "/:id",
    validatorDeleteComment,
    deleteComment
)

export default router;