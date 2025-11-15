import jwt, { SignOptions, Secret } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as Secret;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined');
}

export const generateToken = (userId: string): string => {
  const payload = { userId };

  const expiresIn = (process.env.JWT_EXPIRES_IN || '7d') as SignOptions['expiresIn'];

  const options: SignOptions = {
    expiresIn,
  };

  return jwt.sign(payload, JWT_SECRET, options);
};
