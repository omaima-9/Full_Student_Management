import { IsString } from "class-validator";

export class createCourseDTo {
    @IsString()
    code: string;
    @IsString()
    name: string;
  }