import {ConnectionOptions} from 'typeorm';

export const db: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: "123456",
  database: 'order_test',
  logging: true,
  // synchronize: true, // 运行应用程序时实体都将与数据库同步
  timezone: '+08:00',
  dateStrings: true,
  entities: ['src/**/*.entity.ts']
};
