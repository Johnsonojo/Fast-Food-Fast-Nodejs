import express from 'express';
import { signupUser, loginUser } from '../controllers/UserController';

const userRouter = express.Router();
userRouter.post('/auth/signup', signupUser);
userRouter.post('/auth/login', loginUser);


export default userRouter;
