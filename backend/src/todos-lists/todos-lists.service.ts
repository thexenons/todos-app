import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { UsersService } from 'src/users/users.service';
import { DataSource } from 'typeorm';
import { CreateTodosListDto } from './dto/create-todos-list.dto';
import { UpdateTodosListDto } from './dto/update-todos-list.dto';
import { TodosList } from './entities/todos-list.entity';

@Injectable()
export class TodosListsService {
  constructor(
    private dataSource: DataSource,
    private usersService: UsersService,
  ) {}

  async create(createTodosListDto: CreateTodosListDto, userId: number) {
    const errors = {};
    if (!createTodosListDto.name) {
      errors['name'] = 'Name is required';
    }
    if (!createTodosListDto.archived) {
      createTodosListDto.archived = false;
    }
    if (Object.keys(errors).length > 0) {
      throw new BadRequestException(JSON.stringify(errors));
    }

    const user = await this.usersService.findOne(userId);

    let newTodosList = new TodosList();
    newTodosList.name = createTodosListDto.name;
    newTodosList.archived = createTodosListDto.archived;
    newTodosList.user = user;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      newTodosList = await queryRunner.manager.save(newTodosList);
      await queryRunner.commitTransaction();
    } catch (err) {
      console.error({ err });
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    return newTodosList;
  }

  async findAll(userId: number) {
    const user = await this.usersService.findOne(userId);
    const queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.connect();
    const [todosLists, total] = await queryRunner.manager.findAndCount(
      TodosList,
      {
        where: { user: user },
      },
    );
    await queryRunner.release();

    return {
      data: todosLists,
      total,
    };
  }

  async findOne(id: number, userId: number) {
    const user = await this.usersService.findOne(userId);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    const todoList = await queryRunner.manager.findOneBy(TodosList, {
      user,
      id,
    });
    await queryRunner.release();

    if (!todoList) {
      throw new NotFoundException('TodosList not found');
    }

    return todoList;
  }

  async update(
    id: number,
    updateTodosListDto: UpdateTodosListDto,
    userId: number,
  ) {
    const errors = {};
    if (!updateTodosListDto.id) {
      errors['id'] = 'Id is required';
    }
    if (updateTodosListDto.id !== id) {
      errors['id'] = 'Id does not match';
    }
    if (!updateTodosListDto.archived) {
      updateTodosListDto.archived = false;
    }
    if (Object.keys(errors).length > 0) {
      throw new BadRequestException(JSON.stringify(errors));
    }

    const user = await this.usersService.findOne(userId);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const todoList = await queryRunner.manager.findOneBy(TodosList, {
        user,
        id,
      });
      if (!todoList) {
        throw new NotFoundException('TodosList not found');
      }

      todoList.name = updateTodosListDto.name;
      todoList.archived = updateTodosListDto.archived;

      await queryRunner.manager.save(todoList);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    return this.findOne(id, userId);
  }

  async remove(id: number, userId: number) {
    const user = await this.usersService.findOne(userId);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.manager.delete(TodosList, { id, user });
    await queryRunner.release();
  }
}
