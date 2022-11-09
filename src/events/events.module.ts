import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule} from '@nestjs/typeorm'
import { EventsEntity } from './Entities/Events';
@Module({
  imports:[TypeOrmModule.forFeature([EventsEntity])],
  providers: [EventsService],
  controllers: [EventsController]
})
export class EventsModule {}
