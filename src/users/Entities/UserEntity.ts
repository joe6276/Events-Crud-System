import { EventsEntity } from 'src/events/Entities/Events'
import {Entity, PrimaryGeneratedColumn, Column , DeleteDateColumn, ManyToOne} from 'typeorm'

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    username:string

    @Column()
    email:string

    @Column()
    password:string

    @DeleteDateColumn()
    deletedAt:Date

    @ManyToOne(()=>EventsEntity , event=> event.user)
    event:EventsEntity
}