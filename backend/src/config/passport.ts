import passport, { Profile } from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { env } from './env';
import { signToken } from '../utils/jwt';
import { VerifyCallback } from 'passport-oauth2';

passport.use(new GoogleStrategy(
    {
        clientID: env.googleClientId,
        clientSecret: env.googleClientSecret,
        callbackURL: `${env.oauthCallbackUrl}/google/callback`,
    },
    async (
        _accessToken: string, 
        _refreshToken: string, 
        profile: Profile, 
        done: VerifyCallback
    ) => {
        const user = {
            id: profile.id,
            email: profile.emails?.[0].value,
            provider: 'google',
        };
        return done(null, user);
    }
));

passport.use(new GitHubStrategy(
    {
        clientID: env.githubClientId,
        clientSecret: env.githubClientSecret,
        callbackURL: `${env.oauthCallbackUrl}/github/callback`,
    },
    async (
        _accessToken: string, 
        _refreshToken: string, 
        profile: Profile, 
        done: VerifyCallback
    ) => {
        const user = {
            id: profile.id,
            email: profile.emails?.[0].value,
            provider: 'github',
        };
        return done(null, user);
    }
));
