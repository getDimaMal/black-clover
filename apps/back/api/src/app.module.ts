import { User, UsersModule } from '@black-clover/back';
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
        database: `./sqlite/${configService.get('NX_DB_NAME')}`,
        synchronize: true,
        entities: [User],
      }),
    }),
    UsersModule,
  ],
  providers: [{ provide: APP_PIPE, useValue: new ValidationPipe({ whitelist: true }) }],
})
export class AppModule {}
