import express from 'express';
import signupUser from '../controllers/UserController';

const userRouter = express.Router();
userRouter.post('/users/signup', signupUser);


export default userRouter;
