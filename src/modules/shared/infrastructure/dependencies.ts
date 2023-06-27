import { CorsMiddleware } from './cors/cors.middleware';
import { PinoLogger } from './logger/pino-logger';

export const logger = new PinoLogger();
export const corsMiddleware = CorsMiddleware.corsMiddleware();
