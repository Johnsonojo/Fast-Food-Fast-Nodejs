import '@babel/polyfill';
import express from 'express';
import {
  userRouter, emailRouter, menuRouter, profileRoute
} from './routes';
import registerMiddlewares from './middlewares';

const app = express();
const PORT = process.env.PORT || 3000;

registerMiddlewares(app);

app.get('/', (req, res) => res.status(200).json({
  status: 'success',
  message: 'welcome to fast food fast'
}));

app.use('/api', userRouter);
app.use('/api', emailRouter);
app.use('/api', menuRouter);
app.use('/api', profileRoute);

app.listen(PORT, () => console.log(`fast food fast is listening on ${PORT}`));

export default app;
