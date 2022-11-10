import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserDTO } from './DTO/user.dto';
import {InjectRepository} from '@nestjs/typeorm'
import { UserEntity } from './Entities/UserEntity';
@Injectable()
export class UsersService {
    
constructor(@InjectRepository(UserEntity) private userRepo:Repository<UserEntity> ){}
    getUsers(){
        return this.userRepo.find()
    }
    async getUser(id:string){
        const user= await this.userRepo.findOne({where:{id}})   
        if(!user){
            throw new NotFoundException('User Not Found')
        } 
        return user
    }
    getUserByUsername(email:string){
        return this.userRepo.findOne({where:{email}})
    }
    addUser(body:UserDTO){
        const userInstance = this.userRepo.create(body)
        return this.userRepo.save(userInstance)
    }
  
    async updateUser(id:string, user:Partial<UserDTO>){
        await this.getUser(id) 
        return this.userRepo.update(id, user)
    }

    async deleteUser(id:string){
        await this.getUser(id) 
        return this.userRepo.softDelete(id) 
    }
}
