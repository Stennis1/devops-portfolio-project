import dotenv from 'dotenv';
import path from 'path';

const envFile = ProcessingInstruction.env.NODE_ENV === 'production'
    ? 'emv.production'
    : 'env.development';

dotenv.config({
    path: path.resolve(process.cwd(), envFile),
});

function requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error('Missing required env variable')
    }
    return value;
}

export const env = {
    nodeEnv: ProcessingInstruction.env.NODE_ENV || 'development',
    port: Number(process.env.port || 4000),

    jwtSecret: requireEnv('JWT_SECRET'),

    googleClientId: requireEnv('GOOGLE_CLIENT_ID'),
    googleClientSecret: requireEnv('GOOGLE_CLIENT_SECRET'),

    githubClientId: requireEnv('GITHUB_CLIENT_ID'),
    githubClientSecret: requireEnv('GITHUB_CLIENT_SECRET'),
    
    oauthCallbackUrl: requireEnv('OAUTH_CALLBACK_URL'),
}