import options from "../config/options.js";
import { ConnectDB } from '../config/mongoSingleton.js';



let userDao;
let productDao;
let carritosDao;

switch (options.server.persistencia) {
    case "mongo":
        const firtsConnection = ConnectDB.getInstance();
        const secondConnection = ConnectDB.getInstance();
        const thirdConnection = ConnectDB.getInstance();

        const { UserManagerMongo } = await import("./manager/user/userManagerMongo.js");
        const { UserModel } = await import("./dbModels/user.model.js");

        const { ProductsMongo } = await import('./manager/productos/productsManagerMongo.js');
        const { productsModel } = await import('./dbModels/product.model.js');

        const { CarritosManagerMongo } = await import('./manager/carritos/carritosManagerMongo.js');
        const { CarritoModel } = await import('./dbModels/carts.model.js');

        userDao = new UserManagerMongo(UserModel);
        productDao = new ProductsMongo(productsModel);
        carritosDao = new CarritosManagerMongo(CarritoModel);
        break;

    case "memory":
        const { UserManagerMemory } = await import("./manager/user/userManagerMemory.js");
        const { CarritosManagerMemory } = await import("./manager/carritos/carritosManagerMemory.js");
        const { ProductsManagerMemory } = await import("./manager/productos/productsManagerMemory.js")

        userDao = new UserManagerMemory();
        productDao = new ProductsManagerMemory();
        carritosDao = new CarritosManagerMemory();
        break;

    default:
        break;

}

export { userDao, productDao, carritosDao };
