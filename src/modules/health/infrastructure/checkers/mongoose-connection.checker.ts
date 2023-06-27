import { mongoose } from 'mongo-connect-provider';

import { ILogger } from '../../../shared/domain/ILogger';
import { IChecker } from '../../domain/IChecker';

export class MongooseConnectionChecker implements IChecker {
  constructor(private readonly logger: ILogger, private readonly connection: mongoose.Connection) {}

  check(): Promise<boolean> {
    this.logger.info('Mongoose connection checker executed');
    return Promise.resolve(this.connection.readyState === 1);
  }
}
