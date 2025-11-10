import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { course, courseDocument } from 'src/courses/models/course.schema';
import { updateCourseDTo } from './dto/updateCourse.dto';
import { StudentService } from 'src/student/student.service';
import { studentDocument } from 'src/student/models/student.schema';
import { populate } from 'dotenv';
import { Types } from 'mongoose';


@Injectable()
export class CoursesService {
    constructor(
        @InjectModel(course.name) private courseModel: mongoose.Model<courseDocument>, private studentService: StudentService
    ) { }

    // create a course
    async create(courseData: course): Promise<courseDocument> {
        const newCourse = new this.courseModel(courseData);  // Create a new student document
        return await newCourse.save();  // Save it to the database
    }

    // Get all courses
    async findAll(): Promise<courseDocument[]> {
        let courses = await this.courseModel.find();  // Fetch all students from the database
        return courses
    }

    // Get a course by ID
    async findById(id: string): Promise<courseDocument> {
        return await this.courseModel.findById(id);  // Fetch a student by ID
    }

    // Update a course's details by ID
    async update(id: string, updateData: updateCourseDTo): Promise<courseDocument> {
        return await this.courseModel.findByIdAndUpdate(id, updateData, { new: true });  // Find and update the student
    }

    // Delete a course by ID
    async delete(id: string): Promise<courseDocument> {
        return await this.courseModel.findByIdAndDelete(id);  // Find and delete the student
    }

    // Get a student courses
    async getStudentCourses(studentId: string): Promise<courseDocument[]> {
        const user = await (await this.studentService.findById(studentId)).populate<{ courses: courseDocument[] }>('courses');
        return user.courses;
    }

    async addStudentCourse(studentId: string, courseId: string): Promise<studentDocument> {

        const user = await this.studentService.findById(studentId,false);
        const course = await this.courseModel.findById(courseId);
        const courseIdStr = course._id.toString();
        let courses = user.courses;
        if (!user.courses.map(id => id.toString()).includes(courseIdStr)) {
            user.courses.push(course._id as any);
        } 
        const courseStrings = courses.map((id) => id.toString());
        const newUser = this.studentService.update(studentId, { courses:courseStrings })
        return newUser


    }
    async dropStudentCourse(studentId: string, courseId: string): Promise<studentDocument> {
        const user = await this.studentService.findById(studentId, false);
        const course: courseDocument = await this.courseModel.findById(courseId);
        let courses = user.courses.filter(
            (id) => id.toString() !== course._id.toString()

        ); 
        const courseStrings = courses.map((id) => id.toString());
        const newUser = this.studentService.update(studentId, { courses:courseStrings })
        return newUser;
    }

}




