import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import passport from 'passport';
import loginRouter from './routes/loginRouter';
import router from './routes';
import passportConfig from './config/passportConfig';
import { startDB } from './models';

const app = express();
interface Error {
  status?: number;
  message?: string;
}
startDB();
const whitelist = [
  'https://github.com',
  'http://localhost:3000',
  'http://localhost:4000',
];

app.use(cors({ origin: true, credentials: true }));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
passportConfig();

app.use(express.static(path.join(__dirname, '../../client/build')));
app.set('views', path.join(__dirname, '../../client/build'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use('/api', router);
app.use('/auth', loginRouter);
app.get('*', (req: Request, res: Response) => res.render('index'));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(err.message);
});
app.get('*', cors(), (req: Request, res: Response) => res.render('index'));

export default app;
