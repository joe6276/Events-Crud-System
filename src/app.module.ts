import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/Entities/UserEntity';
import { EventsModule } from './events/events.module';
import { EventsEntity } from './events/Entities/Events';
import { AuthModule } from './auth/auth.module';
import {ConfigModule , ConfigService} from '@nestjs/config'
import * as dotenv from 'dotenv'
dotenv.config()

@Module({

  imports: [UsersModule, 
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.env'
    }),
    TypeOrmModule.forRoot({
          type:'sqlite',
          database:process.env.DATABASE ,
          entities:[UserEntity,EventsEntity],
          synchronize:true
    })
   , EventsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
