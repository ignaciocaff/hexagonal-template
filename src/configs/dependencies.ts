import { logger } from '../modules/shared/infrastructure/dependencies';
import { DatabaseConfig } from './database.config';

export const connectDb = () => DatabaseConfig.connectDatabase(logger);
