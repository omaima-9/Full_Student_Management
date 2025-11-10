import { IsArray, IsEmail, IsInt, IsMongoId, IsOptional, IsString, Min } from "class-validator";
import { course, courseDocument } from "src/courses/models/course.schema";

export class createStudentDTo {
  @IsString()
  @IsEmail()
  email: string

  @IsString()
  name: string;

  @IsInt()
  @Min(18)
  age: Number;

  @IsString()
  role: string

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  courses?: string[];

  @IsString()
  password: string
}