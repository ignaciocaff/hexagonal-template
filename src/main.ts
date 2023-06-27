import './configs/load-env-vars';

import express from 'express';
import { SessionHandler } from 'session-manager-express';

import appRoutes from './app.routes';
import { config } from './configs/app.config';
import { connectDb } from './configs/dependencies';
import { corsMiddleware, logger } from './modules/shared/infrastructure/dependencies';
import { authorizers } from './modules/shared/infrastructure/session-authorizers/authorizers';

function startServer() {
  const app = express();

  app.use(corsMiddleware);
  app.use(express.json()); // for parsing application/json
  app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  app.use(SessionHandler.create());
  app.use('/api', appRoutes);

  const { port } = config.server;

  app.listen(port, async () => {
    await connectDb();
    logger.info(`App started on port: ${port}`);
    logger.info(`App is running in ${config.isDevEnvironment ? 'development' : 'production'} mode`);

    // Configure session handler
    SessionHandler.registerAuthorizers(authorizers);
    SessionHandler.setLogger(logger);
  });
}

startServer();
