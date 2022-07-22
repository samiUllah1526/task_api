
import { TASK_REPOSITORY } from "../../core/constants"
import { Task } from "./entities/task.entity"

export const tasksProviders = [
    {
        provide: TASK_REPOSITORY,
        useValue: Task
    }
]