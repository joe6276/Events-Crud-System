import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
    constructor( @Inject(forwardRef(() => UsersService)) private userService:UsersService,
         private  jwtService:JwtService){}
    async validateuser(email:string, password:string){
        const user= await this.userService.getUserByUsername(email)
        const valid = bcrypt.compare(password ,user.password)
        if(user && valid){
            const {password, ...result}=user
            return result
        }
        return null
    }
      async login (user:any){
    const payload={username:user.username, id:user.id, email:user.email}
    return{
        access_token :this.jwtService.sign(payload)
    }
  }
}
