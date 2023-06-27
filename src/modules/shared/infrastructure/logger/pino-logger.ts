import pino from 'pino';

import { ILogger, Message } from '../../domain/ILogger';

export class PinoLogger implements ILogger {
  private readonly logger: pino.Logger;
  constructor() {
    this.logger = pino({
      level: 'info',
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
          ignore: 'pid,hostname'
        }
      }
    });
  }

  error(message: Message): void {
    this.logger.error(message);
  }

  info(message: Message): void {
    this.logger.info(message);
  }

  warn(message: Message): void {
    this.logger.warn(message);
  }

  log(message: Message): void {
    this.logger.info(message);
  }
}
