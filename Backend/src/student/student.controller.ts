import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { student, studentDocument } from './models/student.schema';
import { createStudentDTo } from './dto/createstudent.dto';
import { updateStudentDTo } from './dto/updateStudent.dto';
import { AuthGuard } from 'src/auth/guards/authentication.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { Role, Roles } from 'src/auth/decorators/roles.decorator';
import { authorizationGaurd } from 'src/auth/guards/authorization.gaurd';
import { CoursesService } from 'src/courses/courses.service';
import { courseDocument } from 'src/courses/models/course.schema';
import { StudentListItemDTO } from './dto/StudentListItemDTO.dto';

//  @UseGuards(AuthGuard) //class level
@Controller('students') // it means anything starts with /students
export class StudentController {
    constructor(private studentService: StudentService, private courseService:CoursesService) { }
    // @Public()
    @Get() 
    // Get all students
    async getAllStudents(): Promise<StudentListItemDTO[]> {
        let result=await this.studentService.findAll();
        console.log(result[0]._id)
        return result 
    }

    // @UseGuards(AuthGuard)// handler level
    @Get('currentUser')
    async getCurrentUser(@Req() {user}): Promise<studentDocument> {
        const student = await this.studentService.findById(user.userid);
        console.log(student)
        return student;
    }


    // @Roles(Role.Admin)
    // @UseGuards(authorizationGaurd)
    @Get(':id')// /students/:id
    // Get a single student by ID
    async getStudentById(@Param('id') id: string):Promise<studentDocument> {// Get the student ID from the route parameters
        const student = await this.studentService.findById(id,true);
        return student;
    }

    // Create a new student
    @Post()
    async createStudent(@Body()studentData: createStudentDTo):Promise<studentDocument> {// Get the new student data from the request body
        const newStudent = await this.studentService.create(studentData);
        return newStudent;
    }

    // Update a student's details
    // @Roles(Role.Admin,Role.User)
    // @UseGuards(authorizationGaurd)
    @Put(':id')
    async updateStudent(@Param('id') id:string,@Body()studentData: updateStudentDTo):Promise<studentDocument> {
        const updatedStudent = await this.studentService.update(id, studentData);
        return updatedStudent;       
    }

    // Delete a student by ID
    // @Roles(Role.Admin)
    // @UseGuards(authorizationGaurd)
    @Delete(':id')
    async deleteStudent(@Param('id')id:string):Promise<studentDocument> {
        const deletedStudent = await this.studentService.delete(id);
       return deletedStudent;
    }


    // Get courses of specific student
    // @Roles(Role.Admin,Role.User)
    // @UseGuards(authorizationGaurd)
   
     @Get(':studentId/courses')// /students/:studentId/courses
    async getStudentCourses(@Param('studentId') studentId: string):Promise<courseDocument[]> {// Get the student ID from the route parameters
        const courses = await this.courseService.getStudentCourses(studentId);
        return courses;
    }

    // add course to specific student
    // @Roles(Role.Admin)
    // @UseGuards(authorizationGaurd)
     @Put(':studentId/courses/enroll/:courseId')// /students/:studentId/courses/add/:courseId
    async addStudentCourse(@Param('studentId') studentId: string,@Param('courseId') courseId: string):Promise<studentDocument> {// Get the student ID from the route parameters
        const course = await this.courseService.addStudentCourse(studentId,courseId);
        return course;
    }
    // remove a course from specific student
    // @Roles(Role.Admin)
    // @UseGuards(authorizationGaurd)
    @Put(':studentId/courses/unenroll/:courseId')// /students/:studentId/courses/remove/:courseId
    async dropStudentCourse(@Param('studentId') studentId: string,@Param('courseId') courseId: string):Promise<studentDocument> {// Get the student ID from the route parameters
        const course = await this.courseService.dropStudentCourse(studentId,courseId);
        return course;
    }
    
}
