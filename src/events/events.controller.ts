import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EventsDTO } from './DTOS/EventDTo';
import { EventsService } from './events.service';


@Controller('events')
export class EventsController {
constructor( private eventSerVice: EventsService){}
    @Get()
    getEvents(){
        return this.eventSerVice.getEvents()
    }

    @Get()
    getEvent(@Query('location') location:string){
        return this.eventSerVice.getEvent(location)
    }

    @Post()
    createEvent(@Body() body: EventsDTO){
        return this.eventSerVice.createEvent(body)
    }
    @Put(':id')
    updateEvent(@Param('id') id:string , @Body() body:Partial<EventsDTO>){
        return this.eventSerVice.updateEvent(id, body)
    }

    @Delete(':id')
    deleteEvent(@Param('id') id:string){
        return this.eventSerVice.deleteEvent(id)
    }
}
