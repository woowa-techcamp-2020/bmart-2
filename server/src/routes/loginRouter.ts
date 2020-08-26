import express from 'express';
import passport from 'passport';
import { LoginController } from '../controllers';
import { wrapAsync } from '../utils';

const router = express.Router();

router.get('/logout', wrapAsync(LoginController.logout));
router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
);
router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/auth/login' }),
  wrapAsync(LoginController.githubCallback)
);

export default router;
