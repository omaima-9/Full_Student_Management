import { IsOptional, IsString } from "class-validator";

export class updateCourseDTo {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  code?: string;

}