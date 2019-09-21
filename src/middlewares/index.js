import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import validation from 'express-validator';
import expressSession from 'express-session';
import dotenv from 'dotenv';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../docs/swagger';


dotenv.config();

module.exports = (app) => {
  app.use(cors());
  app.use(validation());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));
  app.use(morgan('dev'));

  app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
};
