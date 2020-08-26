import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import passport from 'passport';
import flash from 'connect-flash';
import session from 'express-session';
import DotEnv from 'dotenv';
import sessionFileStore from 'session-file-store';
import PassportGithub from 'passport-github2';
import router from './routes';
import loginRouter from './routes/loginRouter';
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

/** ************************************
 *            Passport setup
 *************************************** */
const FileStore = sessionFileStore(session);
app.use(
  session({
    secret: '비밀코드',
    resave: true,
    saveUninitialized: false,
    store: new FileStore(),
  })
); // 세션 활성화
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

interface IUser {
  id: number;
  email?: string;
  password?: string;
  name?: string;
  socialID?: number;
  type?: string;
}

passport.serializeUser((user: IUser, done: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  done(null, user.id);
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
passport.deserializeUser(async (id: number, done) => {
  // const res = await userService.getUserById(id);
  // if (res.status === 'ok') {
  //   const user = res.data[0] as IUser;
  //   return done(null, user);
  // }
  return done(null, false);
});

DotEnv.config();
passport.use(
  new PassportGithub.Strategy(
    {
      clientID: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
      callbackURL: process.env.CALLBACK_URL as string,
    },
    (
      accessToken: any,
      refreshToken: any,
      profile: { _json: { id: number } },
      done: any
    ) => {
      // eslint-disable-next-line no-underscore-dangle
      console.log('wow');
      const userJson = profile._json;
      done(null, false);
      // 유저 찾기
      // userService.getUserBySocialId(userJson.id).then((res) => {
      //   if (res.status === 'ok') {
      //     const user = res.data[0] as IUser;
      //     done(null, user);
      //   } else {
      //     const socialUserDTO = new SocialUserDTO({
      //       social_id: userJson.id,
      //       name: userJson.login,
      //       created_at: userJson.created_at,
      //       updated_at: userJson.updated_at,
      //     });
      //     // 유저 생성
      //     userService.createSocialUser(socialUserDTO).then((createRes) => {
      //       const { insertId } = createRes[0];
      //       const user: IUser = {
      //         id: insertId,
      //         socialID: userJson.id,
      //         name: userJson.login,
      //       };
      //       // 로그인 이동
      //       done(null, user);
      //     });
      //   }
      // });
    }
  )
);

app.use(express.static(path.join(__dirname, '../../client/build')));
app.set('views', path.join(__dirname, '../../client/build'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.get('/', (req: Request, res: Response) => res.render('index'));

app.use('/api', router);
app.use('/auth', loginRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(err.message);
});

export default app;
