import { Body, Controller, Get, Post,Param, Put, Delete } from '@nestjs/common';
import { UserDTO } from './DTO/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
constructor(private userService:UsersService){}
    @Get()
    getUsers(){
        return this.userService.getUsers()
    }

    @Get(':id')
    getUser(@Param('id') id:string){
        return this.userService.getUser(id)
    }

    @Post()
    addUser(@Body() body:UserDTO){
       return  this.userService.addUser(body)
    }
    @Put(':id')
    updateUser(@Param('id') id :string, @Body() body:Partial<UserDTO>){
            return this.userService.updateUser(id,body)
    }

    @Delete(':id')
    deleteUser(@Param('id') id:string){
        return this.userService.deleteUser(id)
    }
}
