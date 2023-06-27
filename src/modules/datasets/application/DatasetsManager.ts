import { IUserPort } from '../../adapters/domain/ports/IUserPort';
import { ILogger } from '../../shared/domain/ILogger';
import { IDatasetsManager } from '../domain/interfaces/IDatasetsManager';

export class DatasetsManager implements IDatasetsManager {
  constructor(private readonly usersAdapter: IUserPort, private readonly logger: ILogger) {}

  async getByUserId(userId: string): Promise<null> {
    const datasetUser = await this.usersAdapter.getById(userId);

    this.logger.info(JSON.stringify(datasetUser));
    return null;
  }
}
