import { Router } from 'express';
import passport from 'passport';
import { signToken } from '../utils/jwt';
import { sign } from 'jsonwebtoken';

const router = Router();

router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get('/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {
        const token = signToken(req.user);
        res.redirect(`http://localhost:5173/login?token=${token}`);
    }
);

router.get('/github', 
    passport.authenticate('github', {
        scope: ['user:email']
    }));

router.get('/github/callback',
    passport.authenticate('github', { session: false }),
    (req, res) => {
        const token = signToken(req.user);
        res.redirect(`http://localhost:5173/login?token=${token}`);
    }
);

export default router;