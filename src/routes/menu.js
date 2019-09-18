import express from 'express';
import getAllMenu from '../controllers/MenuController';

const menuRouter = express.Router();

menuRouter.get('/menu', getAllMenu);

export default menuRouter;
