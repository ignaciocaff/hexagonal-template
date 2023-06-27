import { ILogger } from '../../shared/domain/ILogger';
import { HealthStatus } from '../domain/health-status';
import { IChecker } from '../domain/IChecker';

export class HealthChecker {
  constructor(private readonly logger: ILogger, private readonly databaseChecker: IChecker) {}

  public async execute(): Promise<HealthStatus> {
    const databaseCheckResult: string = (await this.databaseChecker.check()) ? 'OK' : 'FAIL';

    this.logger.info('Health check executed');

    return Promise.resolve(new HealthStatus('OK', databaseCheckResult));
  }
}
