import express from 'express';
import { getAllMenu, addOneMenu } from '../controllers/MenuController';
import { authenticateAdmin } from '../middlewares/authenticator';

const menuRouter = express.Router();

menuRouter.get('/menu', getAllMenu);
menuRouter.post('/menu', authenticateAdmin, addOneMenu);

export default menuRouter;
