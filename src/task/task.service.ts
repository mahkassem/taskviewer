import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task) public repo: Repository<Task>
  ) { }

  async create(task: CreateTaskDto): Promise<Task> {
    const data = plainToInstance(Task, task);
    return await this.repo.save(data);
  }

  async findAll(): Promise<Task[]> {
    return await this.repo.find();
  }
}
