import { ILogger } from '../../shared/domain/ILogger';
import { IUserManager } from '../domain/interfaces/IUserManager';
import { IUserRepository } from '../domain/interfaces/IUserRepository';
import { User } from '../domain/models/user';

export class UserManager implements IUserManager {
  constructor(private readonly userRepository: IUserRepository, private readonly logger: ILogger) {}

  async getById(userId: string): Promise<User | null> {
    const user = this.userRepository.getById(userId);

    if (!user) {
      this.logger.error(`User with id ${userId} not found`);
      return null;
    }

    return user;
  }
}
