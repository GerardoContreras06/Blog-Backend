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

export const noExistenteCourse = async (nameCourse = "") => {

   const existeCurso = await Course.findOne({ nameCourse })

    if(!existeCurso){
        throw new Error(`El curso ${nameCourse} no existe`)
    }
}

export const nullCourse = async(id = "") =>{

    const course = await Course.findById(id)

    if(!course){
        throw new Error (`El ID ${id} no pertenece a ningun curso`)
    }
}

export const existePublicacionById = async (id = '') => {

    const existePublicacion = await Publication.findById(id);

    if(!existePublicacion){
        throw new Error(`El ID ${id} no existe`);
    }
}

export const noExistentePublication = async (title = "") => {

   const existePublicacion = await Publication.findOne({ title })

    if(!existePublicacion){
        throw new Error(`La publicación ${title} no existe`)
    }
}

export const nullPublication = async (id = "") =>{

    const publication = await Publication.findById(id)

    if(!publication){
        throw new Error (`El ID ${id} no pertenece a ninguna publicación`)
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

export const noExistenteCategory = async (nameCategory = "") => {

   const existeCategoria = await Category.findOne({ nameCategory })

    if(!existeCategoria){
        throw new Error(`La categoria ${nameCategory} no existe`)
    }
}

export const nullCategory = async(id = "") =>{

    const category = await Category.findById(id)

    if(!category){
        throw new Error (`El ID ${id} no pertenece a ninguna categoria`)
    }
}