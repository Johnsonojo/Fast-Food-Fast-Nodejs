import express from 'express';
import { getAllMenu, addOneMenu, getOneMenu } from '../controllers/MenuController';
import { authenticateAdmin } from '../middlewares/authenticator';
import validateMenuId from '../helpers/menuValidator';

const menuRouter = express.Router();

menuRouter.get('/menu', getAllMenu);
menuRouter.post('/menu', authenticateAdmin, addOneMenu);
menuRouter.get('/menu/:menuId', validateMenuId, getOneMenu);

export default menuRouter;
