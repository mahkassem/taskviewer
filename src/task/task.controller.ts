import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly service: TaskService) { }

  @Post()
  async create(@Body() dto: CreateTaskDto): Promise<void> {
    await this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<CreateTaskDto[]> {
    return await this.service.findAll();
  }
}
