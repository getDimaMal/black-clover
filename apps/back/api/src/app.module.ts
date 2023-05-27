import { User } from '@black-clover/back/users/entities/user.entity';
import { UsersModule } from '@black-clover/back/users/users.module';
import { Workspace } from '@black-clover/back/workspaces/entities/workspace.entity';
import { WorkspacesModule } from '@black-clover/back/workspaces/workspaces.module';
import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'process';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.STAGE}`],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'sqlite',
        database: configService.get('NX_DB_NAME'),
        synchronize: true,
        autoLoadEntities: true,
        entities: [User, Workspace],
      }),
    }),
    UsersModule,
    WorkspacesModule,
  ],
  providers: [{ provide: APP_PIPE, useValue: new ValidationPipe({ whitelist: true }) }],
})
export class AppModule {}
