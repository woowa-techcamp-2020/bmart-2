import express, { Request, Response } from 'express';
import path from 'path';

import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './routes';
import { startDB } from './models';

const app = express();

startDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

export default app;
