import bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { findUSerByEmail, createUser } from './user.store';
import { signToken } from '../utils/jwt';

export async function signup(email: string, password: string) {

}

export async function login(email: string, password: string) {

}