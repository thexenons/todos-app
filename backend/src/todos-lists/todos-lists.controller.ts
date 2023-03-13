import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { CreateTodosListDto } from './dto/create-todos-list.dto';
import { UpdateTodosListDto } from './dto/update-todos-list.dto';
import { TodosListsService } from './todos-lists.service';

@Controller('todos-lists')
export class TodosListsController {
  constructor(private readonly todosListsService: TodosListsService) {}

  @Post()
  create(@Body() createTodosListDto: CreateTodosListDto, @Request() req) {
    return this.todosListsService.create(createTodosListDto, req.user.userId);
  }

  @Get()
  findAll(@Request() req) {
    return this.todosListsService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.todosListsService.findOne(+id, req.user.userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodosListDto: UpdateTodosListDto,
    @Request() req,
  ) {
    return this.todosListsService.update(
      +id,
      updateTodosListDto,
      req.user.userId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.todosListsService.remove(+id, req.user.userId);
  }
}
