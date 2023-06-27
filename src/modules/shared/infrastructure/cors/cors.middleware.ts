import cors from 'cors';

import { config } from '../../../../configs/app.config';

export class CorsMiddleware {
  static corsMiddleware() {
    const corsOptions = {
      origin: config.cors.origins,
      methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Set-Cookie', 'X-API-Key'],
      exposedHeaders: ['Authorization'],
      credentials: true
    };
    return cors(corsOptions);
  }
}
