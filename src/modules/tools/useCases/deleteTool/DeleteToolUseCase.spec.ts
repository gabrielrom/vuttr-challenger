import AppError from '../../../../shared/errors/AppError';
import { ToolsRepositoryInMemory } from '../../repositories/in-memory/ToolsRepositoryInMemory';
import { DeleteToolUseCase } from './DeleteToolUseCase';

let toolsRepositoryInMemory: ToolsRepositoryInMemory;
let deleteToolUseCase: DeleteToolUseCase;

describe('Delete a tool', () => {
  beforeEach(() => {
    toolsRepositoryInMemory = new ToolsRepositoryInMemory();
    deleteToolUseCase = new DeleteToolUseCase(toolsRepositoryInMemory);
  });

  it('should be able to delete a tool by tool_id', async () => {
    const tool = await toolsRepositoryInMemory.create({
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

    await deleteToolUseCase.execute({
      tool_id: tool.id,
    });

    const tools = await toolsRepositoryInMemory.getTools();

    expect(tools).toHaveLength(1);
    expect(tools[0]).not.toEqual(tool);
  });

  it('should not be able to delete a non-existent tool', async () => {
    await toolsRepositoryInMemory.create({
      title: 'Notion',
      link: 'https://notion.so',
      description:
        'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
      tags: ['organization', 'planning'],
    });

    expect(async () => {
      await deleteToolUseCase.execute({
        tool_id: 'non-existent',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
