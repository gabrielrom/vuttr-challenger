import { inject, injectable } from 'tsyringe';

import { Tool } from '../../infra/typeorm/entities/Tool';
import { IToolsRepository } from '../../repositories/IToolsRepository';

@injectable()
class ListToolsUseCase {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  async execute(): Promise<Tool[]> {
    const tools = await this.toolsRepository.getTools();

    return tools;
  }
}

export { ListToolsUseCase };
