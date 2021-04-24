import { container } from 'tsyringe';

import { ToolsRepository } from '../../modules/tools/infra/typeorm/repositories/ToolsRepository';
import { IToolsRepository } from '../../modules/tools/repositories/IToolsRepository';

container.registerSingleton<IToolsRepository>(
  'ToolsRepository',
  ToolsRepository,
);
