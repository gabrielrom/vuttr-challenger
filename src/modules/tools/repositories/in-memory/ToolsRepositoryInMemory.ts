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

  async deleteTool(id: string): Promise<void> {
    const toolIndex = this.tools.findIndex(tool => tool.id === id);

    this.tools.splice(toolIndex, 1);
  }

  async getTools(tag?: string): Promise<Tool[]> {
    if (tag) {
      return this.tools.filter(tool => tool.tags.includes(tag));
    }

    return this.tools;
  }

  async findByTitle(title: string): Promise<Tool> {
    const tool = this.tools.find(tool => tool.title === title);

    return tool;
  }

  async findById(id: string): Promise<Tool> {
    const tool = this.tools.find(tool => tool.id === id);

    return tool;
  }
}

export { ToolsRepositoryInMemory };
