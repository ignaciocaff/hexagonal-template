import express from 'express';

import { authController } from '../../dependencies';

const authRouter = express.Router();

authRouter.post('', authController.authenticateUser.bind(authController));

export { authRouter as authenticationRouter };
