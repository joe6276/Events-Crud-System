import { EventsEntity } from 'src/events/Entities/Events'
import {Entity, PrimaryGeneratedColumn, Unique ,Column , DeleteDateColumn, ManyToOne} from 'typeorm'

@Entity()
@Unique(['username', 'email'])
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