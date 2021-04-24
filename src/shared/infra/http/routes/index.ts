import { Router } from 'express';

import { toolsRouter } from './tools.routes';

const router = Router();

router.use('/tools', toolsRouter);

export { router };
