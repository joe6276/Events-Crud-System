import { EventsEntity } from 'src/events/Entities/Events'
import {Entity, PrimaryGeneratedColumn, Unique ,Column , DeleteDateColumn, ManyToOne, OneToMany} from 'typeorm'

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

    @OneToMany(()=>EventsEntity , event=> event.user)
    event:EventsEntity[]
}