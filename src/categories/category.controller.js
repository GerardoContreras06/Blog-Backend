import { request, response } from "express";
import Category from './category.model.js';
import Publication from '../publications/publication.model.js';

export const getCategories = async (req = request, res = response) => {
    try {
        const { limite = 10, desde = 0} = req.query;
        const query = { estado: true};

        const [total, categories] = await Promise.all([
            Category.countDocuments(query),
            Category.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        res.status(200).json({
            success: true,
            total,
            categories
        })
    } catch (error) {
        res.status(500).json({
            succes: false,
            msg: 'Error al obtener las categorias',
            error
        })
    }
}

export const createCategory = async (req, res) => {
    try {
        const data = req.body;

        const publication = await Publication.findOne({ title: data.publication });

        const category = new Category({
            ...data,
            publication: publication._id
        })

        await category.save();

        res.status(200).json({
            succes: true,
            category
        });

    } catch (error) {
        res.status(500).json({
            succes: false,
            message: 'Error al crear la categoría',
            error
        })
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { _id, publication, ...data } = req.body;

        if (publication && typeof publication === 'string') {
            const publicationtDoc = await Publication.findOne({ title: publication });
        
            data.publication = publicationtDoc._id;
        }

        const updatedCategory = await Category.findByIdAndUpdate(id, data, { new: true });

        res.status(200).json({
            succes: true,
            msg: "Categoría actualizada exitosamente",
            category: updatedCategory
        });

    } catch (error) {
        res.status(500).json({
            succes: false,
            message: 'Error al actualizar la categoría',
            error
        })
    }
}

export const deleteCategory = async (req, res) => {

    const { id } = req.params;

    try {
        
        await Category.findByIdAndUpdate(id, { estado: false })

        return res.status(200).json({
            succes: true,
            message: 'Categoría eliminada exitosamente'
        })

    } catch (error) {
        return res.status(500).json({
            succes: false,
            message: 'Error al eliminar la categoría',
            error
        })
    }
}