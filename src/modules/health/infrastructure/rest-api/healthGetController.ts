import { Request, Response } from 'express';

import { HealthChecker } from '../../application/health-checker';

export class HealthGetController {
  constructor(private readonly healthChecker: HealthChecker) {}

  async run(request: Request, response: Response) {
    return this.healthChecker.execute().then((healthStatus) => {
      return response.json(healthStatus).status(200);
    });
  }
}
