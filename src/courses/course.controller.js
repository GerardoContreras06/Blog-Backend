import { request , response } from "express";
import Course from './course.model.js';

export const getCoursesByName = async (req = request, res = response) => {
    try {
        const { name } = req.query;
        const query = {
            nameCourse: { $regex: name, $options: 'i' }
        };

        const [total, courses] = await Promise.all([
            Course.countDocuments(query),
            Course.find(query).sort({ nameCourse: 1 })
        ]);

        return res.status(200).json({
            succes: true,
            total,
            courses
        });

    } catch (error) {
        return res.status(500).json({
            succes: false,
            msg: 'Error al obtener los cursos',
            error
        });
    }
}

export const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const course = await Course.findById(id);
        
        if (!course) {
            return res.status(404).json({
                success: false,
                message: 'Curso no encontrado'
            });
        }
        
        res.status(200).json({
            success: true,
            course
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener el curso',
            error: error.message
        });
    }
}

export const createCourse = async (req, res) => {
    try {
        const data = req.body;

        const course = await Course.create({
            ...data
        })

        return res.status(200).json({
            succes: true,
            course
        })

    } catch (error) {
        return res.status(500).json({
            succes: false,
            message: 'Error al crear el curso',
            error: error.message
        });
    }
}

export const updateCourse = async (req, res = response) => {
    try {
        const { id } = req.params;
        const { _id, ...data } = req.body;

        const course = await Course.findByIdAndUpdate(id, data, {new: true});

        return res.status(200).json({
            succes: true,
            msg: 'Curso Actualizado',
            course
        })

    } catch (error) {
        return res.status(500).json({
            succes: false,
            msg: 'Error al actualizar el curso',
            error: error.message
        });
    }
}

export const deleteCourse = async (req, res) => {

    const { id } = req.params;

    try {
        
        await Course.findByIdAndUpdate(id, { estado: false })

        return res.status(200).json({
            succes: true,
            message: 'Curso eliminado exitosamente'
        })

    } catch (error) {
        return res.status(500).json({
            succes: false,
            msg: 'Error al eliminar el curso',
            error: error.message
        })
    }
}