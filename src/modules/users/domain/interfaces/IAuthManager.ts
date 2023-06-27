import { User } from '../models/user';

export interface IAuthManager {
  authenticateUser(userName: string, password: string): Promise<User | null>;
}
