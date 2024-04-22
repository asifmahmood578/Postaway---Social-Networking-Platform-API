import express from 'express';
import UserController from './user.controller.js';

// 1 . Initialise Express Router

const userRouter = express.Router();

const userControllers =new UserController();

// localhost/api/users

userRouter.post('/signup',userControllers.signUp);
userRouter.post('/signin',userControllers.signIn);

export default userRouter;
