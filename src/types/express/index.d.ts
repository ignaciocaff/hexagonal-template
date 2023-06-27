import { Session } from 'session-manager-express';

declare global {
  declare namespace Express {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    export interface Request {
      session: Session;
    }
  }
}
