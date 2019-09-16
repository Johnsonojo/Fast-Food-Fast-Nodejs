import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import expressSession from 'express-session';
import dotenv from 'dotenv';

dotenv.config();

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));
  app.use(morgan('dev'));
};
