import { logger } from '../shared/infrastructure/dependencies';
import { UserManager } from '../users/application/UserManager';
import { MongoUserRepository } from '../users/infrastructure/repository/MongoUserRepository';
import { UsersAdapter } from './application/UsersAdapter';

const userRepository = new MongoUserRepository();
const usersManager = new UserManager(userRepository, logger);

export const usersAdapter = new UsersAdapter(usersManager);
