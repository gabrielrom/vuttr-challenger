import { Router } from 'express';

import { CreateToolsController } from '../../../../modules/tools/useCases/createTools/CreateToolsController';

const toolsRouter = Router();
const createToolsController = new CreateToolsController();

toolsRouter.post('/', createToolsController.handle);

export { toolsRouter };
