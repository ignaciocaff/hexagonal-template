import { User } from '../models/user';

export interface IUserManager {
  getById(id: string): Promise<User | null>;
}
