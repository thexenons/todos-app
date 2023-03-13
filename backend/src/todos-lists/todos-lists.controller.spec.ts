import { Test, TestingModule } from '@nestjs/testing';
import { TodosListsController } from './todos-lists.controller';
import { TodosListsService } from './todos-lists.service';

describe('TodosListsController', () => {
  let controller: TodosListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosListsController],
      providers: [TodosListsService],
    }).compile();

    controller = module.get<TodosListsController>(TodosListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
