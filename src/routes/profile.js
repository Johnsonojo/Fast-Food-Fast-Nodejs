import express from 'express';
import { getCurrentUser, editUserProfile } from '../controllers/ProfileController';
import { verifyToken } from '../middlewares/authenticator';
import {
  checkImageUrl, checkUndefined, checkEmpty, checkLength
} from '../middlewares/profileInputValidator';

const profileRoute = express.Router();

profileRoute.get('/user', verifyToken, getCurrentUser);
profileRoute.put('/user',
  verifyToken, checkUndefined,
  checkEmpty, checkLength,
  checkImageUrl, editUserProfile);

export default profileRoute;
