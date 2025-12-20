import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export function signToken(user: any) {
    return jwt.sign(user, env.jwtSecret, { expiresIn: '1hr' })
}