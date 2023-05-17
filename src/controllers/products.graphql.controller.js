import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";
import { rootGraphqlService } from "../repositories/index.js";

const schemaGraphql = buildSchema(`
    type Product {
        _id: String
        productId: Int,
        nombre: String,
        precio: Int,
        imagen: String
    }

    input ProductInput{
        nombre: String,
        precio: Int,
        imagen: String
    }

    type Query {
        getProducts: [Product]
        getProductById(productId: Int): Product
    }

    type Mutation {
        addProduct(product: ProductInput): Product
        deleteProduct(productId: Int): String
        updateProduct(productId: Int, product: ProductInput): String
    }
`);

const graphqlController = () => {
    return graphqlHTTP({
        schema: schemaGraphql,
        rootValue: rootGraphqlService,
        graphiql: true
    })
}

export {graphqlController}