import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { TodosList } from './entities/todos-list.entity';
import { TodosListsController } from './todos-lists.controller';
import { TodosListsService } from './todos-lists.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodosList]), UsersModule],
  controllers: [TodosListsController],
  providers: [TodosListsService],
  exports: [TodosListsService],
})
export class TodosListsModule {}
