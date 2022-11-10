import { Injectable, NotFoundException } from '@nestjs/common';
import {Repository}  from 'typeorm'
import {InjectRepository} from '@nestjs/typeorm'
import { EventsEntity } from './Entities/Events';
import { EventsDTO } from './DTOS/EventDTo';
@Injectable()
export class EventsService {
constructor( @InjectRepository(EventsEntity) private eventsRepo:Repository<EventsEntity>){}


    getEvents(){
       return this.eventsRepo.find() 
    }
    async getEvent(location:string){
        const event= await this.eventsRepo.findOne({where:{location}})
        if(!event){
            throw new NotFoundException('Event Not Found')
        }
        return event
    }
    createEvent(eventData:EventsDTO){
        const eventInstance= this.eventsRepo.create(eventData)
        
        return this.eventsRepo.save(eventInstance)
    }
    async getEventbyID(id:string){
        const event= await this.eventsRepo.findOne({where:{id}})
        if(!event){
            throw new NotFoundException('Event Not Found')
        }
        return event
    }

    async updateEvent(id:string, updatedEvent:Partial<EventsDTO>){
        await this.getEventbyID(id)
        return this.eventsRepo.update(id, updatedEvent)
    }

    async deleteEvent(id:string){
        await this.getEventbyID(id)
        return this.eventsRepo.softDelete(id)
    }
}
