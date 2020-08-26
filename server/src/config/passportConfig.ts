import passport from 'passport';
import DotEnv from 'dotenv';
import PassportGithub from 'passport-github2';
import PassportJWT from 'passport-jwt';
import {} from '../controllers';
import userService from '../services/userService';
import { IUser } from '../../../types/modelTypes';
import { Done } from '../../../types/passportTypes';

DotEnv.config();

const JWTStrategy = PassportJWT.Strategy;
const ExtrackJWT = PassportJWT.ExtractJwt;

interface IProfile {
  _json: { id: number; login: string; email: string };
}

passport.serializeUser((user: IUser, done: Done) => {
  done(null, user.id);
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
passport.deserializeUser(async (id: number, done: Done) => {
  const user = await userService.find(id);
  if (user) {
    return done(null, user);
  }
  return done(null, false);
});

export default (): void => {
  passport.use(
    new PassportGithub.Strategy(
      {
        clientID: process.env.CLIENT_ID as string,
        clientSecret: process.env.CLIENT_SECRET as string,
        callbackURL: process.env.CALLBACK_URL as string,
      },
      (
        accessToken: string,
        refreshToken: string,
        profile: IProfile,
        done: Done
      ) => {
        // eslint-disable-next-line no-underscore-dangle
        const userJson = profile._json;
        // 유저 찾기
        userService
          .find(userJson.id)
          .then((user) => {
            if (user) {
              return done(null, user);
            }
            const socialUserDTO: IUser = {
              id: userJson.id,
              name: userJson.login,
              email: userJson.email,
            };
            // 유저 생성
            userService
              .create(socialUserDTO)
              .then((newUser) => {
                // 로그인 이동
                done(null, newUser);
              })
              .catch((e) => {
                console.log(e);
              });
          })
          .catch((e) => {
            console.log(e);
          });
      }
    )
  );

  // passport.use(
  //   new JWTStrategy(
  //     {
  //       jwtFromRequest: ExtrackJWT.fromAuthHeaderAsBearerToken(),
  //       secretOrKey: process.env.JWT_SECRET,
  //     },
  //     (jwtPayload, done) => {
  //       return UserModel.findOneById(jwtPayload.id)
  //         .then((user) => {
  //           return done(null, user);
  //         })
  //         .catch((err) => {
  //           return done(err);
  //         });
  //     }
  //   )
  // );
};
