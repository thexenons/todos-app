import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosListsModule } from 'src/todos-lists/todos-lists.module';
import { Todo } from './entities/todo.entity';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), TodosListsModule],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
