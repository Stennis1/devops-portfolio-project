export interface User {
    id: string;
    email: string;
    passwordHash?: string;
    provider: 'local' | 'google' | 'github';
} 

const users = new Map<string, User>();

export function findUSerByEmail(email: string) {
    return users.get(email);
}

export function createUser(user: User) {
    users.set(user.email, user);
    return user;
}

