import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { TaskStatus } from "../entities/task-status.enum";

export class CreateTaskDto {
  @IsNotEmpty() @IsString()
  title: string;

  @IsNotEmpty() @IsString()
  description: string;

  @IsOptional() @IsEnum(TaskStatus)
  status: TaskStatus;
}