import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { student, studentDocument, } from 'src/student/models/student.schema';
import { updateStudentDTo } from './dto/updateStudent.dto';
import { StudentListItemDTO } from './dto/StudentListItemDTO.dto';
import { createStudentDTo } from './dto/createstudent.dto';
import { courseDocument } from 'src/courses/models/course.schema';

@Injectable()
export class StudentService {


    constructor(
        @InjectModel(student.name) private studentModel: mongoose.Model<studentDocument>
    ) { }

    async create(studentData: createStudentDTo): Promise<studentDocument> {
        const newStudent = new this.studentModel(studentData);  // Create a new student document
        const user = await newStudent.save()
        return user;  // Save it to the database
    }
    async findByName(username: string): Promise<studentDocument> {
        return await this.studentModel.findOne({ username });  // Fetch a student by username
    }
    async findByEmail(email: string): Promise<studentDocument> {
        const user = await this.studentModel.findOne({ email })
        return user;  // Fetch a student by username
    }
    // Get all students
    async findAll(): Promise<StudentListItemDTO[]> {
        let students = await this.studentModel.find().populate<{ courses: courseDocument[] }>('courses').lean();  // Fetch all students from the database
        console.log(students)
        return students
    }

    // Get a student by ID
    async findById(id: string, populateCourses?: boolean): Promise<studentDocument> {
        console.log(id)
        let student
        if (populateCourses)
            student = await this.studentModel.findById(id).populate<{ courses: courseDocument[] }>('courses');  // Fetch all students from the database with courses
        else
            student = await this.studentModel.findById(id);  // Fetch all students from the database
        return student
    }

    // Update a student's details by ID
    async update(id: string, updateData: updateStudentDTo): Promise<studentDocument> {
        return await this.studentModel.findByIdAndUpdate(id, updateData, { new: true });  // Find and update the student
    }

    // Delete a student by ID
    async delete(id: string): Promise<studentDocument> {
        return await this.studentModel.findByIdAndDelete(id);  // Find and delete the student
    }

}
