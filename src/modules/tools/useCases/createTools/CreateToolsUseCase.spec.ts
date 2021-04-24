import AppError from '../../../../shared/errors/AppError';
import { ToolsRepositoryInMemory } from '../../repositories/in-memory/ToolsRepositoryInMemory';
import { CreateToolsUseCase } from './CreateToolsUseCase';

let createToolsUseCase: CreateToolsUseCase;
let toolsRepositoryInMemory: ToolsRepositoryInMemory;

describe('Create a new tool', () => {
  beforeEach(() => {
    toolsRepositoryInMemory = new ToolsRepositoryInMemory();
    createToolsUseCase = new CreateToolsUseCase(toolsRepositoryInMemory);
  });

  it('should be able to create a new tool', async () => {
    const tool = await createToolsUseCase.execute({
      title: 'Notion',
      link: 'https://notion.so',
      description:
        'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
      tags: [
        'organization',
        'planning',
        'collaboration',
        'writing',
        'calendar',
      ],
    });

    expect(tool).toHaveProperty('id');
    expect(tool.title).toBe('Notion');
    expect(tool.tags).toHaveLength(5);
  });

  it('should not be able to create a new tool already existent', async () => {
    const tool = await createToolsUseCase.execute({
      title: 'Notion',
      link: 'https://notion.so',
      description:
        'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
      tags: [
        'organization',
        'planning',
        'collaboration',
        'writing',
        'calendar',
      ],
    });

    expect(async () => {
      await createToolsUseCase.execute({
        title: tool.title,
        link: 'another',
        description: 'another description',
        tags: ['organization'],
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
