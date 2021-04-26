import 'reflect-metadata';

import 'express-async-errors';
import '../../container';

import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerDoc from '../../../swagger.json';
import createConnection from '../typeorm';
import globalError from './middlewares/globalError';
import { router } from './routes';

createConnection();

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(router);
app.use(globalError);

app.listen(3000, () => console.log('server is runnig!'));
