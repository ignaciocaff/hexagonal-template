import 'session-manager-express';

import { User } from '../../modules/users/domain/models/user';

declare module 'session-manager-express' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface SessionData {
    user: User;
  }
}
