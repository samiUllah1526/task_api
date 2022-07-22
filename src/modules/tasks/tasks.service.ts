import { Inject, Injectable } from '@nestjs/common';
import { TASK_REPOSITORY } from 'src/core/constants';
import { CreateTaskDto } from './dto/create-task.dto';
import { DeleteTaskDto } from './dto/delete-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {

  constructor(@Inject(TASK_REPOSITORY) private readonly taskRepository: typeof Task) { }


  async create(createTaskDto: CreateTaskDto, userId: number) {
    return await this.taskRepository.create<Task>({ ...createTaskDto, userId })
  }

  async findAll() {
    return await this.taskRepository.findAll<Task>()
  }


  async findOne(id: number) {
    return await this.taskRepository.findOne({
      where: {
        id: id
      }
    })
  }


  async update(id: number, userId: number, updateTaskDto: UpdateTaskDto) {

    console.log("servicesdddasdasd", { id, user: userId, updateTaskDto })


    const updatedTask = await this.taskRepository.update({ ...updateTaskDto }, {
      where: { id, userId },
    })

    const [numberOfAffectedRows] = updatedTask
    return numberOfAffectedRows
  }


  async remove(ids: number[], userId: number) {
    console.log({ "service level ids": ids })
    const deleted = await this.taskRepository.destroy({
      where: { id: ids, userId }
    })


    return deleted
  }
}
