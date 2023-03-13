import { TodosList } from 'src/todos-lists/entities/todos-list.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  completed: boolean;

  @ManyToOne(() => TodosList, (todosList) => todosList.todos)
  todosList: TodosList;
}
