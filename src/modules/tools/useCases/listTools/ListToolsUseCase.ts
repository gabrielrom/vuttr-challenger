import { inject, injectable } from 'tsyringe';

import { Tool } from '../../infra/typeorm/entities/Tool';
import { IToolsRepository } from '../../repositories/IToolsRepository';

interface IRequest {
  tag?: string;
}

@injectable()
class ListToolsUseCase {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  async execute({ tag }: IRequest): Promise<Tool[]> {
    const tools = await this.toolsRepository.getTools(tag);

    return tools;
  }
}

export { ListToolsUseCase };
