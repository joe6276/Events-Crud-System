import { UserEntity } from 'src/users/Entities/UserEntity'
import {PrimaryGeneratedColumn, Column , Entity ,DeleteDateColumn, OneToOne, ManyToOne, OneToMany} from 'typeorm'


@Entity()
export class EventsEntity{
@PrimaryGeneratedColumn()
id:string

@Column({type:'varchar', nullable:false})
title:string

@Column()
description:string

@Column()
location:string

@Column()
date:string

@DeleteDateColumn()
deletedAt:Date

@ManyToOne(()=>UserEntity , user =>user.event)
user:UserEntity
}