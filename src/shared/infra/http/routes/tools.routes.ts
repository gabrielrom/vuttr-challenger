import { Router } from 'express';

import { CreateToolsController } from '../../../../modules/tools/useCases/createTools/CreateToolsController';
import { ListToolsController } from '../../../../modules/tools/useCases/listTools/ListToolsController';

const toolsRouter = Router();

const createToolsController = new CreateToolsController();
const listToolsController = new ListToolsController();

toolsRouter.post('/', createToolsController.handle);
toolsRouter.get('/', listToolsController.handle);

export { toolsRouter };
