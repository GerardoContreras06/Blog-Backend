import { request, response } from "express";
import Publication from './publication.model.js';
import Course from '../courses/course.model.js';

export const getPublicationsByDate = async (req = request, res = response) => {
    try {
        const { date } = req.query;

        const searchDate = new Date(date);
        const nextDay = new Date(searchDate);
        nextDay.setDate(searchDate.getDate() + 1);

        const query = {
            creationDate: {
                $gte: searchDate,
                $lt: nextDay
            }
        };

        const [total, publications] = await Promise.all([
            Publication.countDocuments(query),
            Publication.find(query).sort({ title: 1 })
        ]);

        return res.status(200).json({
            succes: true,
            total,
            publications
        })

    } catch (error) {
        return res.status(500).json({
            succes: false,
            msg: 'Error al obtener las publicaciones',
            error
        });
    }
}

export const createPublication = async (req, res) => {
    try {
        const data = req.body;

        const course = await Course.findOne({ nameCourse: data.course });

        const publication = new Publication({
            ...data,
            course: course._id
        })

        await publication.save();

        res.status(200).json({
            succes: true,
            publication
        });
        
    } catch (error) {
        res.status(500).json({
            succes: false,
            message: 'Error al crear la publicación',
            error
        });
    }
}

export const updatePublication = async (req, res) => {
    try {
        const { id } = req.params;
        const { _id, course, ...data } = req.body;

        if (course && typeof course === 'string') {
            const courseDoc = await Course.findOne({ nameCourse: course });

            data.course = courseDoc._id;
        }

        const updatedPublication = await Publication.findByIdAndUpdate(id, data, { new: true });

        res.status(200).json({
            succes: true,
            msg: "Publicación actualizada correctamente",
            publication: updatedPublication
        });

    } catch (error) {
        return res.status(500).json({
            succes: false,
            msg: 'Error al actualizar la publicación',
            error
        });
    }
}

export const deletePublication = async (req, res) => {

    const { id } = req.params;

    try {
        
        await Publication.findByIdAndUpdate(id, { estado: false });

        return res.status(200).json({
            succes: true,
            message: 'Publicación eliminada exitosamente'
        })

    } catch (error) {
        return res.status(500).json({
            succes: false,
            message: 'Error al eliminar la publicación',
            error
        });
    }
}  