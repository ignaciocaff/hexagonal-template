import { IUserRepository } from '../../domain/interfaces/IUserRepository';
import { User } from '../../domain/models/user';

export class InMemoryUserRepository implements IUserRepository {
  private user: User = {
    id: '645ba95d313f397cccd5cd7d',
    userName: 'existing-user',
    password: '$2a$10$ZPnpmnV3NeKvyNKjnK9Wmu0ZmOcuQUHOzzhv1ODny4WX/U8Cn56BK',
    email: 'something@something.com',
    firstName: 'John',
    lastName: 'Doe'
  };

  getByUserName(userName: string): Promise<User | null> {
    return userName === this.user.userName ? Promise.resolve(this.user) : Promise.resolve(null);
  }

  getByEmail(email: string): Promise<User | null> {
    return email === this.user.email ? Promise.resolve(this.user) : Promise.resolve(null);
  }

  getById(id: string): Promise<User | null> {
    return id === this.user.id ? Promise.resolve(this.user) : Promise.resolve(null);
  }
}
