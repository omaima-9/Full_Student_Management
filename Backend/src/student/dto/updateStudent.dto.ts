import { IsArray, IsInt, IsMongoId, IsOptional, IsString, Min } from "class-validator";
import { course } from "src/courses/models/course.schema";

export class updateStudentDTo {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(18)
  age?: number;
  
  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  courses?: string[];
}