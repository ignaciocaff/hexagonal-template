import express from 'express';

import { userController } from '../dependencies';

const userRouter = express.Router();

userRouter.post('/:id/welcome', userController.postHandler.bind(userController));

export { userRouter };
