import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from '@prisma/client';
import { CreateTodoDto } from './dto/create-todo.dto';
import { EditTodoDto } from './dto/edit-todo.dto';
import { TodoModel } from './models/todo.model';
import { TodoService } from './todo.service';

@Resolver((of) => TodoModel)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation((returns) => TodoModel)
  async createTodo(
    @Args('createTodoDto') createTodoDto: CreateTodoDto,
  ): Promise<Todo> {
    const createdTodo = await this.todoService.createTodo(createTodoDto);
    return createdTodo;
  }

  @Query((returns) => [TodoModel])
  async getTodos(): Promise<Todo[]> {
    const todos = await this.todoService.getTodos();
    return todos;
  }

  @Query((returns) => TodoModel)
  async getTodoById(@Args('id') id: string): Promise<Todo> {
    const todo = await this.todoService.getTodoById(id);
    return todo;
  }

  @Mutation((results) => TodoModel)
  async editTodoById(
    @Args('id') id: string,
    @Args('editTodoDto') editTodoDto: EditTodoDto,
  ) {
    const editedTodo = await this.todoService.editTodoById(id, editTodoDto);
    return editedTodo;
  }

  @Mutation((results) => TodoModel)
  async deleteTodoById(@Args('id') id: string): Promise<Todo> {
    const deletedTodo = await this.todoService.deleteTodoById(id);
    return deletedTodo;
  }
}
