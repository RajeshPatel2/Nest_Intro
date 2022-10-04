import { Body, Controller,Get,Post,Param, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

    @Post()
    async addNewUser(@Body() createUserDto:CreateUserDto){
        const newUser = await this.userService.addUser(createUserDto)
        console.log({newUser})
        return {newUser}        
    }

    @Get()
    async getSingleUser(@Query('id') userId:String,@Query('email') email:String){
        console.log({userId,email})
        const user = this.userService.getUser(userId)
        return user
    }
}