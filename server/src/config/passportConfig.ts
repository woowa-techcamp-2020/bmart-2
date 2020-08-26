import passport from 'passport';
import DotEnv from 'dotenv';
import PassportGithub from 'passport-github2';
import PassportJWT from 'passport-jwt';

DotEnv.config();

const JWTStrategy = PassportJWT.ExtractJwt;
const ExtrackJWT = PassportJWT.ExtractJwt;

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

export default (): void => {
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
};
