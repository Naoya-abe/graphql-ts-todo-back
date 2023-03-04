import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { v4 as uuid } from 'uuid';
import { EditTodoDto } from './dto/edit-todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async createTodo(dto: CreateTodoDto): Promise<Todo> {
    const createdTodo = await this.prisma.todo.create({
      data: { id: uuid(), title: dto.title, detail: dto.detail },
    });
    return createdTodo;
  }

  async getTodos(): Promise<Todo[]> {
    const todos = await this.prisma.todo.findMany();
    return todos;
  }

  async getTodoById(id: string): Promise<Todo> {
    const todo = await this.prisma.todo.findUnique({ where: { id: id } });
    return todo;
  }

  async editTodoById(id: string, dto: EditTodoDto): Promise<Todo> {
    const editedTodo = await this.prisma.todo.update({
      where: { id: id },
      data: { title: dto.title, detail: dto.detail },
    });
    return editedTodo;
  }

  async deleteTodoById(id: string): Promise<Todo> {
    const deletedTodo = await this.prisma.todo.delete({ where: { id: id } });
    return deletedTodo;
  }
}
