import { ICreateToolDTO } from '../../dtos/ICreateToolDTO';
import { Tool } from '../../infra/typeorm/entities/Tool';
import { IToolsRepository } from '../IToolsRepository';

class ToolsRepositoryInMemory implements IToolsRepository {
  tools: Tool[] = [];

  async create({
    title,
    description,
    link,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = new Tool();

    Object.assign(tool, {
      title,
      description,
      link,
      tags,
    });

    this.tools.push(tool);

    return tool;
  }

  async findByTitle(title: string): Promise<Tool> {
    const tool = this.tools.find(tool => tool.title === title);

    return tool;
  }

  async getTools(): Promise<Tool[]> {
    return this.tools;
  }
}

export { ToolsRepositoryInMemory };
