import { ILogger, Message } from '../../domain/ILogger';

export class ConsoleLogger implements ILogger {
  log(message: Message): void {
    console.log(message);
  }

  info(message: Message): void {
    console.info(message);
  }

  error(message: Message): void {
    console.error(message);
  }

  warn(message: Message): void {
    console.warn(message);
  }
}
