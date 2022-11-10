import { Body, Controller, 
    Delete, Get, UseGuards, Param, Post, Put, Query } from '@nestjs/common';
import { JWTAUthGuard } from 'src/guards';
import { EventsDTO } from './DTOS/EventDTo';
import { EventsService } from './events.service';


@Controller('events')
export class EventsController {
constructor( private eventSerVice: EventsService){}
    
    @UseGuards(JWTAUthGuard)
    @Get()
    getEvents(){
        return this.eventSerVice.getEvents()
    }
    @UseGuards(JWTAUthGuard)
    @Get()
    getEvent(@Query('location') location:string){
        return this.eventSerVice.getEvent(location)
    }
    @UseGuards(JWTAUthGuard)
    @Post()
    createEvent(@Body() body: EventsDTO){
        return this.eventSerVice.createEvent(body)
    }
    @UseGuards(JWTAUthGuard)
    @Put(':id')
    updateEvent(@Param('id') id:string , @Body() body:Partial<EventsDTO>){
        return this.eventSerVice.updateEvent(id, body)
    }
    @UseGuards(JWTAUthGuard)
    @Delete(':id')
    
    deleteEvent(@Param('id') id:string){
        return this.eventSerVice.deleteEvent(id)
    }
}
