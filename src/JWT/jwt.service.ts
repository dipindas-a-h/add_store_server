// jwt.service.ts

import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  private readonly secretKey = 'your_secret_key';

  generateToken(payload: any): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: '1h' });
  }

  verifyToken(token: string): any {
    console.log("Token to verify:", token);

    try {
        const decoded = jwt.verify(token, this.secretKey);
        console.log("Decoded Token:", decoded);
        return decoded;
    } catch (error) {
        console.error("Token verification error:", error);
        throw new Error('Invalid token');
    }
}
}
