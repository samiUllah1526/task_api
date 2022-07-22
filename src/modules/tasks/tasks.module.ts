import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { tasksProviders } from './tasks.providers';

@Module({
  controllers: [TasksController],
  providers: [TasksService, ...tasksProviders]
})
export class TasksModule { }
