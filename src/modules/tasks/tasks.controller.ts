import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, Request } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from '@nestjs/passport';
import { DeleteTaskDto } from './dto/delete-task.dto';


@Controller('tasks')
export class TasksController {

  constructor(private readonly tasksService: TasksService) { }


  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto, @Request() req) {
    return await this.tasksService.create(createTaskDto, req.user.id);
  }


  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Request() req) {
    return await this.tasksService.findAll(req.user.id);
  }



  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.tasksService.findOne(id);
  }



  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateTaskDto: UpdateTaskDto, @Request() req) {
    return await this.tasksService.update(id, req.user.id, updateTaskDto);
  }



  @UseGuards(AuthGuard('jwt'))
  @Post('/bulk-delete')
  async remove(@Body() DeleteTaskDto: DeleteTaskDto, @Request() req) {

    DeleteTaskDto.ids.map((item) => {
      console.log("sami==>", typeof item)
    })
    return await this.tasksService.remove(DeleteTaskDto.ids, req.user.id,);
  }
}
