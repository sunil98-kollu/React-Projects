const express = require("express");
const { getUser, postUser } = require("../controllers/UserController");
const userRoutes = express.Router()

userRoutes.get('/', getUser)
userRoutes.post('/', postUser)


userRoutes.post('/api/users', postUser);
//userRoutes.post('/api/users', loginUser);


module.exports=userRoutes;

/*

*/