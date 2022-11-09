import {Entity, PrimaryGeneratedColumn, Column , DeleteDateColumn} from 'typeorm'

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    password:string

    @DeleteDateColumn()
    deletedAt:Date
}