import { productDao } from "../daos/factory.js";

const getProductos = async () => {
    return await productDao.getAll();
}

const addProducto = async (producto) => {
    await productDao.guardar(producto)
    return producto;
}

const getProductById = async (id) => {
    const producto = await productDao.getById(id)
    return producto;
}

const updateProduct = async (id, data) => {
    const productoActualizado = await productDao.actualizar(id, data);
    return productoActualizado
}

const deleteProductById = async (id) => {
    const productoBorrado = await productDao.deleteById(id);
    return productoBorrado
}

const deleteAllProducts = async () => {
    const borrarTodo = await productDao.deleteAll();
    return borrarTodo
}

export {getProductos, addProducto, getProductById, updateProduct, deleteProductById, deleteAllProducts}
