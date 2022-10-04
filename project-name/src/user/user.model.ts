import * as mongoose from "mongoose"
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// export type CatDocument = Cat & Document;


export const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    email:{type:String, required:true, unique:true}
})

// export const CatSchema = SchemaFactory.createForClass(Cat);
// var User = db.model('Cat', userSchema);

// module.exports = User; 