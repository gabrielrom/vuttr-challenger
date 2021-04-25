import { ICreateToolDTO } from '../dtos/ICreateToolDTO';
import { Tool } from '../infra/typeorm/entities/Tool';

interface IToolsRepository {
  create(data: ICreateToolDTO): Promise<Tool>;
  getTools(tag?: string): Promise<Tool[]>;
  findByTitle(title: string): Promise<Tool>;
}

export { IToolsRepository };
