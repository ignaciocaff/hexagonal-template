import { mongoose } from 'mongo-connect-provider';

import { logger } from '../../shared/infrastructure/dependencies';
import { HealthChecker } from '../application/health-checker';
import { MongooseConnectionChecker } from './checkers/mongoose-connection.checker';
import { HealthGetController } from './rest-api/healthGetController';

const mongooseConnectionChecker = new MongooseConnectionChecker(logger, mongoose.connection);
const healthChecker = new HealthChecker(logger, mongooseConnectionChecker);

export const healthGetController = new HealthGetController(healthChecker);
