import { Test, TestingModule } from '@nestjs/testing';
import { TodosListsService } from './todos-lists.service';

describe('TodosListsService', () => {
  let service: TodosListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosListsService],
    }).compile();

    service = module.get<TodosListsService>(TodosListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
