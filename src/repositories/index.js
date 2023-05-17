import { productDao } from "../daos/factory.js";
import { ProductRepository } from "./product.repository.js";

const rootGraphqlService = new ProductRepository(productDao)

export {rootGraphqlService}