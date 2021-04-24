import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateToolsUseCase } from './CreateToolsUseCase';

class CreateToolsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, link, tags } = request.body;

    const createToolsUseCase = container.resolve(CreateToolsUseCase);

    const tool = await createToolsUseCase.execute({
      title,
      description,
      link,
      tags,
    });

    return response.status(201).json(tool);
  }
}

export { CreateToolsController };
