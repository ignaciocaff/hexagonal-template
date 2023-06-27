import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { IAuthManager } from '../../../domain/interfaces/IAuthManager';

export class AuthController {
  constructor(private readonly authManager: IAuthManager) {}

  async authenticateUser(req: Request, res: Response): Promise<Response<any>> {
    const { email, password } = req.body;
    const session = req.session;

    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Email and password are required' });
    }

    const loginResult = await this.authManager.authenticateUser(email, password);

    if (!loginResult) {
      return res.status(StatusCodes.UNAUTHORIZED).send({ message: 'Invalid credentials' });
    }

    session.user = loginResult;

    return res.status(StatusCodes.OK).send(loginResult);
  }
}
