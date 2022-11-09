import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/Entities/UserEntity';
@Module({

  imports: [UsersModule, TypeOrmModule.forRoot({
    type:'sqlite',
    database:'users.sqlite',
    entities:[UserEntity],
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
