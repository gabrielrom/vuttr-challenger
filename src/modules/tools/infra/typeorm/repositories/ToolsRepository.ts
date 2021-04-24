import { ICreateToolDTO } from 'modules/tools/dtos/ICreateToolDTO';
import { Repository, getRepository } from 'typeorm';

import { IToolsRepository } from '../../../repositories/IToolsRepository';
import { Tool } from '../entities/Tool';

class ToolsRepository implements IToolsRepository {
  private repository: Repository<Tool>;

  constructor() {
    this.repository = getRepository(Tool);
  }

  async create({
    title,
    description,
    link,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = this.repository.create({
      title,
      description,
      link,
      tags,
    });

    await this.repository.save(tool);

    return tool;
  }

  async findByTitle(title: string): Promise<Tool> {
    const tool = await this.repository.findOne({ title });

    return tool;
  }
}

export { ToolsRepository };
