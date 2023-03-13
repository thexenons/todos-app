import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { TodosListsService } from 'src/todos-lists/todos-lists.service';
import { DataSource } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    private dataSource: DataSource,
    private todosListService: TodosListsService,
  ) {}

  async create(createTodoDto: CreateTodoDto, userId: number) {
    const errors = {};
    if (!createTodoDto.name) {
      errors['name'] = 'Name is required';
    }
    if (!createTodoDto.completed) {
      createTodoDto.completed = false;
    }
    if (!createTodoDto.todosListId) {
      errors['todosListId'] = 'TodosListId is required';
    }
    if (Object.keys(errors).length > 0) {
      throw new BadRequestException(JSON.stringify(errors));
    }
    const todosList = await this.todosListService.findOne(
      createTodoDto.todosListId,
      userId,
    );

    let newTodo = new Todo();
    newTodo.name = createTodoDto.name;
    newTodo.completed = createTodoDto.completed;
    newTodo.todosList = todosList;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      newTodo = await queryRunner.manager.save(newTodo);
      await queryRunner.commitTransaction();
    } catch (err) {
      console.error({ err });
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    return this.findOne(newTodo.id, userId);
  }

  async findAll(userId: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    const [todos, total] = await queryRunner.manager.findAndCount(Todo, {
      where: { todosList: { user: { id: userId } } },
    });
    await queryRunner.release();

    return { data: todos, total };
  }

  async findAllByTodosListId(todosListId: number, userId: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    const [todos, total] = await queryRunner.manager.findAndCount(Todo, {
      where: { todosList: { id: todosListId, user: { id: userId } } },
    });
    await queryRunner.release();

    return { data: todos, total };
  }

  async findOne(id: number, userId: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    const todo = await queryRunner.manager.findOneBy(Todo, {
      id,
      todosList: { user: { id: userId } },
    });
    if (!todo) {
      throw new NotFoundException('Todo not found');
    }
    await queryRunner.release();

    return todo;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto, userId: number) {
    const errors = {};
    if (!updateTodoDto.id) {
      errors['id'] = 'Id is required';
    }
    if (updateTodoDto.id !== id) {
      errors['id'] = 'Id is not the same';
    }
    if (Object.keys(errors).length > 0) {
      throw new BadRequestException(JSON.stringify(errors));
    }

    const todo = await this.findOne(id, userId);
    todo.completed = updateTodoDto.completed;
    todo.name = updateTodoDto.name;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(todo);
      await queryRunner.commitTransaction();
    } catch (err) {
      console.error({ err });
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    return this.findOne(id, userId);
  }

  async remove(id: number, userId: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.manager.delete(Todo, {
      id,
      todosList: { user: { id: userId } },
    });
    await queryRunner.release();
  }
}
