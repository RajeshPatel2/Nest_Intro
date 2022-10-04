import { Controller,Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from "./auth.service";
@Controller('auth')
export class AuthController {

constructor(private authService:AuthService){}

    @UseGuards(AuthGuard('local'))

    @Post('/login')
    async login(@Body('email') email:string, @Body('password') password:string){
        return this.authService.login(email, password)
    }
}
