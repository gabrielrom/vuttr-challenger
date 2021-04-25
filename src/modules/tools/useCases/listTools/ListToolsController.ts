import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListToolsUseCase } from './ListToolsUseCase';

class ListToolsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tag } = request.query;

    const listToolsController = container.resolve(ListToolsUseCase);

    const tools = await listToolsController.execute({
      tag: tag as string,
    });

    return response.json(tools);
  }
}

export { ListToolsController };
