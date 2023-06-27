import { IUserRepository } from '../../domain/interfaces/IUserRepository';
import { User } from '../../domain/models/user';
import UserModel from './users';

export class MongoUserRepository implements IUserRepository {
  async getById(id: string): Promise<User | null> {
    const foundUser = (await UserModel.findOne({ _id: id }).lean()) as User;

    if (!foundUser) {
      return null;
    }
    return foundUser;
  }

  async getByUserName(userName: string): Promise<User | null> {
    const foundUser = (await UserModel.findOne({ userName }).lean()) as User;

    if (!foundUser) {
      return null;
    }
    return foundUser;
  }

  async getByEmail(email: string): Promise<User | null> {
    const foundUser = await UserModel.findOne({ email }).lean();

    if (!foundUser) {
      return null;
    }
    return foundUser as User;
  }
}
