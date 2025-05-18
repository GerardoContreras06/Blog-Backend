import { request, response } from "express";
import Comment from './comment.model.js';
import Publication from '../publications/publication.model.js';

export const getCommentsByDate = async (req = request, res = response) => {
    try {
        const { date } = req.query;

        const searchDate = new Date(date);
        const nextDay = new Date(searchDate);
        nextDay.setDate(searchDate.getDate() + 1 );

        const query = {
            publicationDate: {
                $gte: searchDate,
                $lt: nextDay
            }
        };

        const [total, comments] = await Promise.all([
            Comment.countDocuments(query),
            Comment.find(query).sort({ content: 1 })
        ]);

        return res.status(200).json({
            succes: true,
            total,
            comments
        })

    } catch (error) {
        return res.status(500).json({
            succes: false,
            msg: 'Error al obtener los comentarios',
            error
        });
    }
}

export const createComment = async (req, res) => {
    try {
        const data = req.body;

        const publication = await Publication.findOne({ title: data.publication });

        const comment = new Comment({
            ...data,
            publication: publication._id
        })

        await comment.save();

        res.status(200).json({
            succes: true,
            comment
        });

    } catch (error) {
        res.status(500).json({
            succes: false,
            message: 'Error al crear el comentario',
            error
        });
    }
}

export const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { _id, publication, ...data } = req.body;

        if (publication && typeof publication === 'string') {
            const publicationtDoc = await Publication.findOne({ title: publication });

            data.publication = publicationtDoc._id;
        }

        const updatedComment = await Comment.findByIdAndUpdate(id, data, { new: true });

        res.status(200).json({
            succes: true,
            msg: "Comentario actualizado exitosamente",
            comment: updatedComment
        });

    } catch (error) {
        return res.status(500).json({
            succes: false,
            msg: 'Error al actualizar el comentario',
            error
        });
    }
}

export const deleteComment = async (req, res) => {

    const { id } = req.params;

    try {
        
        await Comment.findByIdAndUpdate(id, { estado: false });

        return res.status(200).json({
            succes: true,
            message: 'Comentario eliminado exitosamente'
        })

    } catch (error) {
        return res.status(500).json({
            succes: false,
            message: 'Error al eliminar el comentario',
            error
        });
    }
}