import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from "./../../modules/users/user.entity"
import { Task } from "./../../modules/tasks/entities/task.entity"

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;

        switch (process.env.NODE_ENV) {
            case PRODUCTION:
                config = databaseConfig.production;
                break;

            case DEVELOPMENT:
                config = databaseConfig.development;
                break;

            case TEST:
                config = databaseConfig.test;
                break;

            default:
                config = databaseConfig.development;
        }

        const sequelize = new Sequelize(config);
        sequelize.addModels([User, Task]);
        await sequelize.sync();
        return sequelize;
    },
}];