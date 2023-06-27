import { IUserManager } from '../../users/domain/interfaces/IUserManager';
import { User } from '../../users/domain/models/user';
import { IUserPort } from '../domain/ports/IUserPort';

export class UsersAdapter implements IUserPort {
  constructor(private userManager: IUserManager) {}

  async getById(id: string): Promise<User | null> {
    return this.userManager.getById(id);
  }
}
