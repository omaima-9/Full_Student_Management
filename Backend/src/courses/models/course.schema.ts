import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type courseDocument = HydratedDocument<course> // to _id property to the class

@Schema()
export class course {
  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  name: string;
 
}
export const CourseSchema = SchemaFactory.createForClass(course);


//=======================================
//import * as mongoose from 'mongoose';
//const schemaOptions = {
    //   strict: false,
    //   timestamps: true,
    // };
    // export const courseSchema= new mongoose.Schema(
    
    //  {
    //     name: {
    //       type: String,
    //       minLength: 3,
    //       maxLength: 30,
    //     },
    //     id: {
    //       type: Number,
    //       min: 1,
    //       required: true,
    //     },
    //   },
    // );
    
    // module.exports = mongoose.model('CourseModel', courseSchema);
    