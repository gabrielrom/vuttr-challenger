import { inject, injectable } from 'tsyringe';

import AppError from '../../../../shared/errors/AppError';
import { IToolsRepository } from '../../repositories/IToolsRepository';

interface IRequest {
  tool_id: string;
}

@injectable()
class DeleteToolUseCase {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  async execute({ tool_id }: IRequest): Promise<void> {
    const tool = await this.toolsRepository.findById(tool_id);

    if (!tool) {
      throw new AppError('This tool does not exists!', 404);
    }

    await this.toolsRepository.deleteTool(tool_id);
  }
}

export { DeleteToolUseCase };
