import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/Entities/UserEntity';
import { EventsModule } from './events/events.module';
import { EventsEntity } from './events/Entities/Events';
@Module({

  imports: [UsersModule, TypeOrmModule.forRoot({
    type:'sqlite',
    database:'events.sqlite',
    entities:[UserEntity,EventsEntity],
    synchronize:true
  }), EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
