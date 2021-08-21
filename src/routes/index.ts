import { Router } from 'express';
import itemGroupRouter from './itemGroup.routes';
import itemsRouter from './items.routes';

import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/items', itemsRouter);
routes.use('/itemGroup', itemGroupRouter);

export default routes;
