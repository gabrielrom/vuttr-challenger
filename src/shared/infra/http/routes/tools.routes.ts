import { Router } from 'express';

import { CreateToolsController } from '../../../../modules/tools/useCases/createTools/CreateToolsController';
import { DeleteToolController } from '../../../../modules/tools/useCases/deleteTool/DeleteToolUseController';
import { ListToolsController } from '../../../../modules/tools/useCases/listTools/ListToolsController';

const toolsRouter = Router();

const createToolsController = new CreateToolsController();
const listToolsController = new ListToolsController();
const deleteToolController = new DeleteToolController();

toolsRouter.post('/', createToolsController.handle);
toolsRouter.get('/', listToolsController.handle);
toolsRouter.delete('/:id', deleteToolController.handle);

export { toolsRouter };
