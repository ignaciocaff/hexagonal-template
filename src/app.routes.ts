import express from 'express';
import { SessionHandler } from 'session-manager-express';

import { datasetsRouter } from './modules/datasets/infrastructure/rest/datasets.router';
import { healthRouter } from './modules/health/infrastructure/rest-api/health.router';
import { authenticationRouter } from './modules/users/infrastructure/rest/authentication/auth.router';
import { userRouter } from './modules/users/infrastructure/rest/user.router';

const router = express.Router();

router.use('/auth', authenticationRouter);

router.use(SessionHandler.validateSession);

router.use('/users', userRouter);
router.use('/health', healthRouter);
router.use('/datasets', datasetsRouter);

export default router;
