import express from 'express';

import { datasetsController } from '../dependencies';

const datasetsRouter = express.Router();

datasetsRouter.get('/:userId', datasetsController.getByUserId.bind(datasetsController));

export { datasetsRouter };
