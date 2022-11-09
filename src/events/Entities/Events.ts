import {PrimaryGeneratedColumn, Column , Entity ,DeleteDateColumn} from 'typeorm'


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
}