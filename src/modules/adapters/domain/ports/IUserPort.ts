import { User } from '../../../users/domain/models/user';

export interface IUserPort {
  getById(id: string): Promise<User | null>;
}
