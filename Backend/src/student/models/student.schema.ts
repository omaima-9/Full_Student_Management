
import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { course, courseDocument } from '../../courses/models/course.schema';

export type studentDocument = HydratedDocument<student>

@Schema()
export class student {
  @Prop({ required: true, })
  email: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, min: 18 })
  age: number;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'course' ,default: [] })
  courses: mongoose.Types.ObjectId[]| courseDocument[];
}

export const StudentSchema = SchemaFactory.createForClass(student);





