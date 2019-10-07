import express from 'express';
import getCurrentUser from '../controllers/ProfileController';
import { verifyToken } from '../middlewares/authenticator';

const profileRoute = express.Router();

profileRoute.get('/user', verifyToken, getCurrentUser);

export default profileRoute;
