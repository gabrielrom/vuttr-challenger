import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { Tool } from '../../infra/typeorm/entities/Tool';
import { IToolsRepository } from '../../repositories/IToolsRepository';

interface IRequest {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

@injectable()
class CreateToolsUseCase {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  async execute({ title, description, link, tags }: IRequest): Promise<Tool> {
    const toolAlreadyExists = await this.toolsRepository.findByTitle(title);

    if (toolAlreadyExists) {
      throw new AppError('This tool is already exits!');
    }

    const tool = await this.toolsRepository.create({
      title,
      description,
      tags,
      link,
    });

    return tool;
  }
}

export { CreateToolsUseCase };
