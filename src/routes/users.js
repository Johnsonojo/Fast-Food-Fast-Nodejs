import express from 'express';
import { signupUser, loginUser } from '../controllers/UserController';

const userRouter = express.Router();
userRouter.post('/users/signup', signupUser);
userRouter.post('/users/login', loginUser);


export default userRouter;
