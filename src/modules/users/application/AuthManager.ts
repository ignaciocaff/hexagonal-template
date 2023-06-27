import bcrypt from 'bcryptjs';

import { IAuthManager } from '../domain/interfaces/IAuthManager';
import { IUserRepository } from '../domain/interfaces/IUserRepository';
import { User } from '../domain/models/user';

export class AuthManager implements IAuthManager {
  constructor(private readonly userRepository: IUserRepository) {}

  async authenticateUser(email: string, password: string): Promise<User | null> {
    const authenticatedUser = await this.userRepository.getByEmail(email);

    if (!authenticatedUser) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, authenticatedUser.password);

    if (!isPasswordValid) {
      return null;
    }

    return authenticatedUser;
  }
}
