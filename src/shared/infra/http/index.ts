import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';
import '../../container';

import createConnection from '../typeorm';
import globalError from './middlewares/globalError';
import { router } from './routes';

createConnection('localhost');
const app = express();

app.use(express.json());
app.use(router);
app.use(globalError);

app.listen(3000, () => console.log('server is runnig!'));
