import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './routes';
import { startDB } from './models';

const app = express();
interface Error {
  status?: number;
  message?: string;
}
startDB();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../../client/build')));
app.set('views', path.join(__dirname, '../../client/build'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.get('/', (req: Request, res: Response) => res.render('index'));

app.use('/api', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(err.message);
});

export default app;
