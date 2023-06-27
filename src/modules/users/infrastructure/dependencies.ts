import { AuthManager } from '../application/AuthManager';
import { MongoUserRepository } from './repository/MongoUserRepository';
import { AuthController } from './rest/authentication/auth.controller';
import { UserController } from './rest/user.controller';

const userMongoRepository = new MongoUserRepository();

const authManager = new AuthManager(userMongoRepository);

export const authController = new AuthController(authManager);

export const userController = new UserController();
