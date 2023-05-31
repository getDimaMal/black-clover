import { CategoriesModule } from '@black-clover/back/categories/categories.module';
import { Category } from '@black-clover/back/categories/entities/category.entity';
import { Group } from '@black-clover/back/groups/entities/group.entity';
import { GroupsModule } from '@black-clover/back/groups/groups.module';
import { Property } from '@black-clover/back/properties/entities/property.entity';
import { PropertiesModule } from '@black-clover/back/properties/properties.module';
import { Transaction } from '@black-clover/back/transactions/entities/transaction.entity';
import { TransactionsModule } from '@black-clover/back/transactions/transactions.module';
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
        entities: [User, Group, Category, Property, Workspace, Transaction],
      }),
    }),
    UsersModule,
    GroupsModule,
    CategoriesModule,
    PropertiesModule,
    WorkspacesModule,
    TransactionsModule,
  ],
  providers: [{ provide: APP_PIPE, useValue: new ValidationPipe({ whitelist: true }) }],
})
export class AppModule {}
