import { Router } from "express";
import { deleteFileOnError } from "../middlewares/delete-file-on-error.js"
import { getCommentsByDate, getComments , getCommentsByPublication ,createComment, updateComment, deleteComment } from "./comment.controller.js";
import { validatorCreateComment, validatorUpdateComment, validatorDeleteComment } from "../middlewares/validator-comments.js";

const router = Router();

router.get(
    "/date",
    getCommentsByDate
)

router.get(
    "/",
    getComments
)

router.get(
    "/publication/:id",
    getCommentsByPublication
)

router.post(
    "/",
    validatorCreateComment,
    createComment,
    deleteFileOnError
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