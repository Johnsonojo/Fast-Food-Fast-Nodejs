import express from 'express';
import emailController from '../controllers/EmailController';

const emailRouter = express.Router();

emailRouter.get('/verification', emailController);

export default emailRouter;
