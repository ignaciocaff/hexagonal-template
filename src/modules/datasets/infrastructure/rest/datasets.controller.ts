import { Request, Response } from 'express';

import { IDatasetsManager } from '../../domain/interfaces/IDatasetsManager';

export class DatasetsController {
  constructor(private readonly datasetsManager: IDatasetsManager) {}

  async getByUserId(req: Request, res: Response) {
    const { id: userId } = req.params;
    await this.datasetsManager.getByUserId(userId);
    res.status(200).send();
  }
}
