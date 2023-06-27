import express from 'express';

import { healthGetController } from '../dependencies';

const healthRouter = express.Router();

healthRouter.get('/', healthGetController.run.bind(healthGetController));

export { healthRouter };
