import { ToolsRepositoryInMemory } from '../../repositories/in-memory/ToolsRepositoryInMemory';
import { ListToolsUseCase } from './ListToolsUseCase';

let toolsRepositoryInMemory: ToolsRepositoryInMemory;
let listToolsUseCase: ListToolsUseCase;

describe('List all tools', () => {
  beforeEach(() => {
    toolsRepositoryInMemory = new ToolsRepositoryInMemory();
    listToolsUseCase = new ListToolsUseCase(toolsRepositoryInMemory);
  });

  it('should be able to list all tools', async () => {
    await toolsRepositoryInMemory.create({
      title: 'Notion',
      link: 'https://notion.so',
      description:
        'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
      tags: ['organization', 'planning'],
    });

    await toolsRepositoryInMemory.create({
      title: 'json-server',
      link: 'https://github.com/typicode/json-server',
      description:
        'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
    });

    const tools = await listToolsUseCase.execute();

    expect(tools).toHaveLength(2);
    expect(tools[0]).toHaveProperty('title', 'Notion');
  });
});
