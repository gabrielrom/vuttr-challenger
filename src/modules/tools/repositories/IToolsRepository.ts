import { ICreateToolDTO } from '../dtos/ICreateToolDTO';
import { Tool } from '../infra/typeorm/entities/Tool';

interface IToolsRepository {
  create(data: ICreateToolDTO): Promise<Tool>;
  findByTitle(title: string): Promise<Tool>;
  getTools(): Promise<Tool[]>;
}

export { IToolsRepository };
