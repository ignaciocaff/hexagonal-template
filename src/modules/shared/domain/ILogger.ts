interface IMessageWithContext {
  message: string;
  context: Record<string, unknown>;
}

type SimpleMessage = string;

export type Message = SimpleMessage | IMessageWithContext;

export interface ILogger {
  info(message: Message): void;
  error(message: Message): void;
  warn(message: Message): void;
  log(message: Message): void;
}
