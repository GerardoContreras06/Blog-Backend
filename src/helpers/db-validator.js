import Course from '../courses/course.model.js';
import Publication from '../publications/publication.model.js';
import Comment from '../comments/comment.model.js';
import Category from '../categories/category.model.js';

export const existeCursoById = async (id = '') => {

    const existeCurso = await Course.findById(id);

    if(!existeCurso){
        throw new Error(`El ID ${id} no existe`);
    }
}

export const existePublicacionById = async (id = '') => {

    const existePublicacion = await Publication.findById(id);

    if(!existePublicacion){
        throw new Error(`El ID ${id} no existe`);
    }
}

export const existeComentarioById = async (id = '') => {

    const existeComentario = await Comment.findById(id);

    if(!existeComentario){
        throw new Error(`El ID ${id} no existe`);
    }
}

export const existeCategoriaById = async (id = '') => {

    const existeCategoria = await Category.findById(id);

    if(!existeCategoria){
        throw new Error(`El ID ${id} no existe`);
    }
}