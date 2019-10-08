import express from 'express';
import {
  getAllMenu, addOneMenu, getOneMenu, deleteOneMenu, editMenu
} from '../controllers/MenuController';
import { authenticateAdmin } from '../middlewares/authenticator';
import validateMenuId from '../helpers/menuValidator';

const menuRouter = express.Router();

menuRouter.get('/menu', getAllMenu);
menuRouter.post('/menu', authenticateAdmin, addOneMenu);
menuRouter.get('/menu/:menuId', validateMenuId, getOneMenu);
menuRouter.put('/menu/:menuId', validateMenuId, editMenu);
menuRouter.delete('/menu/:menuId', authenticateAdmin, validateMenuId, deleteOneMenu);

export default menuRouter;
