class ProductsMongo {
    constructor(model) {
        this.model = model;
    }

    async getProducts() {
        try {
            const products = await this.model.find();
            return products;
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getProductById(productId) {
        try {
            const product = await this.model.findOne({productId: productId})
            if(!product) {
                throw new Error('No se encontró el producto');
            } else {
                return product
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async addProduct(product) {
        try {
            const leer = await this.model.find();
            if (leer.length == 0) {
                const id = 1;
                const nuevoProducto = {productId: id, ...product}
                const productAdded = await this.model.create(nuevoProducto)
                return productAdded
            } else {
                const onlyIds = leer.map((producto) => producto.productId)
                const largestId = Math.max.apply(Math, onlyIds);
                const id = largestId + 1;
                const nuevoProducto = {productId: id, ...product}
                const productAdded = await this.model.create(nuevoProducto)
                return productAdded
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async deleteProduct(productId) {
        try {
            const deletedProduct = await this.model.deleteOne({productId: productId});
            if(!deletedProduct) {
                throw new Error('No se puede borrar un producto inexistente')
            }
            return "Producto borrado"
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async updateProduct(productId, product) {
        try {
            await this.model.updateOne({productId: productId}, {$set: product})
            return "Producto modificado en la base de datos"
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export {ProductsMongo}