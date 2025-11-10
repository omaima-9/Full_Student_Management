import { ObjectId, Types } from "mongoose";

export class StudentListItemDTO  {
  _id: Types.ObjectId
  name: string
  age: number
  email: string
  courses: { _id: Types.ObjectId; name: string; code?: string }[]; // populated fields only
}

