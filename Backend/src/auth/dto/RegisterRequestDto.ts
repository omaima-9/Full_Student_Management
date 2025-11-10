import { IsArray, IsEmail, IsInt, isInt, IsMongoId, IsOptional, IsString } from "class-validator";
import { course, courseDocument } from "src/courses/models/course.schema";


export class RegisterRequestDto {
  @IsString()
  @IsEmail()
  email: string

  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  courses?: string[];

  @IsString()
  password: string

  @IsString()
  role: string = "student"
}