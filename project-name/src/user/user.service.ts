import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly productModel){}

    async addUser(createUserDto){
        const newUser = new this.productModel(createUserDto) 
        const id = await newUser.save()
        console.log(id.id)
        return id.id
    }

    async getUser(userId){
        console.log(userId)
        const user = this.productModel.findOne({_id:userId})
        // console.log('dddddddddddddddddddddddd',user)
        return user
    }
}
