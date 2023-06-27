import { usersAdapter } from '../../adapters/dependencies';
import { logger } from '../../shared/infrastructure/dependencies';
import { DatasetsManager } from '../application/DatasetsManager';
import { DatasetsController } from './rest/datasets.controller';

const datasetsManager = new DatasetsManager(usersAdapter, logger);
export const datasetsController = new DatasetsController(datasetsManager);
