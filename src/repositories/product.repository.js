class ProductRepository {
    constructor(dao) {
        this.dao = dao
    }

    async getProducts() {
        return await this.dao.getProducts();
    };

    async getProductById({productId}) {
        return await this.dao.getProductById(productId);
    }

    async addProduct({product}) {
        return await this.dao.addProduct(product);
    }

    async deleteProduct({productId}) {
        return await this.dao.deleteProduct(productId);
    }

    async updateProduct({productId, product}) {
        return await this.dao.updateProduct(productId, product)
    }
}

export {ProductRepository}