import { Todo } from 'src/todos/entities/todo.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TodosList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  archived: boolean;

  @ManyToOne(() => User, (user) => user.todosLists)
  user: User;

  @OneToMany(() => Todo, (todo) => todo.todosList, { eager: true })
  todos: Todo[];
}
