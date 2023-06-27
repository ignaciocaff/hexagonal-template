import { ManagerDb, Provider } from 'mongo-connect-provider';
import { logger as providerLogger } from 'mongo-connect-provider';

import { ILogger } from '../modules/shared/domain/ILogger';
import { config } from './app.config';

export class DatabaseConfig {
  static async connectDatabase(logger: ILogger) {
    providerLogger.setLogger(logger);
    await ManagerDb.connect(
      false,
      config.database.dbName,
      config.database.dbHost,
      '',
      config.isDevEnvironment,
      Provider.None,
      config.database.dbUser,
      config.database.dbPassword
    );
  }
}
