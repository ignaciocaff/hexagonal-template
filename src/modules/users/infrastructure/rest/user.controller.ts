import { Request, Response } from 'express';

export class UserController {
  // constructor(private readonly userManager: UserManager) {}

  async postHandler(req: Request, res: Response) {
    // const { id: userId } = req.params;
    // await this.userManager.postHandler(userId);
    res.status(200).send();
  }
}
