import { User } from '../models/user';

export interface IUserRepository {
  getById(id: string): Promise<User | null>;
  getByUserName(userName: string): Promise<User | null>;
  getByEmail(email: string): Promise<User | null>;
}
