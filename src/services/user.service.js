import {userDao} from "../daos/factory.js";

const getUsers = async()=>{
    const users = await userDao.getAll();
    const newUsersDto = users.map(user=>new (user));
    // console.log("newUsersDto", newUsersDto);
    return newUsersDto;
};

const saveUser = async(user)=>{
    return await userDao.create(user);
};



export {getUsers, saveUser};
