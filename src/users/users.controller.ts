import { Body, Controller, Get, Post,Param, Put,Query, Delete, UseGuards, Request, forwardRef, Inject} from '@nestjs/common';
import { UserDTO } from './DTO/user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport/dist';
import { AuthService } from 'src/auth/auth.service';
import * as bcrypt from 'bcrypt'
import{ConfigService} from '@nestjs/config'
@Controller('users')
export class UsersController {
constructor(private userService:UsersService,
    @Inject(forwardRef(() => AuthService))
    private authService:AuthService){}
    @Get()
    getUsers(){       
        return this.userService.getUsers()
    }
 
    @UseGuards(AuthGuard('jwt'))
    @Get('protected')
    getProtected(@Request() req:any){
        return req.user
    }

    @Get(':id')
    getUser(@Param('id') id:string){
        return this.userService.getUser(id)
    }


    @Get('user')
    getUserByUserName(@Query('username') username:string){
        return this.userService.getUserByUsername(username)
    }

    @Post()
    async addUser(@Body() body:UserDTO){
        const {password} =body
        const hashedPassword= await bcrypt.hash(password,8)
       return  this.userService.addUser({...body , password:hashedPassword})
    }
    @Put(':id')
    updateUser(@Param('id') id :string, @Body() body:Partial<UserDTO>){
            return this.userService.updateUser(id,body)
    }

    @Delete(':id')
    deleteUser(@Param('id') id:string){
        return this.userService.deleteUser(id)
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    loginUser(@Request() req){
        return this.authService.login(req.user)
        
    }
 
}
