import { PartialType } from '@nestjs/mapped-types';
import { CreateTodosListDto } from './create-todos-list.dto';

export class UpdateTodosListDto extends PartialType(CreateTodosListDto) {
  id: number;
}
