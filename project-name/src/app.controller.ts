import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/hh')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/pp')
  add(@Req() req:any){
    return req.body
  }

  @Get('/:id')
getSingleUser(@Param('id') pId:string){
return {pId}
}
}
