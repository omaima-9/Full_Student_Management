import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { course, courseDocument } from './models/course.schema';
import { createCourseDTo } from './dto/createCourse.dto';
import { updateCourseDTo } from './dto/updateCourse.dto';
//  @UseGuards(AuthGuard) //class level
@Controller('courses')
export class CoursesController {
    constructor(private courseService: CoursesService) { }
    //The courseService is injected through the class constructor. 
    //Notice the use of the private syntax. 
    //This shorthand allows us to both declare and initialize 
    //the courseService member immediately in the same location.
    
    // @Roles(Role.Admin,Role.User)
    // @UseGuards(authorizationGaurd)
    @Get()
    // Get all course
    async getAllcourses(): Promise<courseDocument[]> {
        return await this.courseService.findAll();
    }

    // @Roles(Role.Admin,Role.User)
    // @UseGuards(authorizationGaurd)
    @Get(':id')// /courses/:id   // Get a single course by ID
    async getCourseById(@Param('id') id: string):Promise<courseDocument>{// Get the student ID from the route parameters
        const course = await this.courseService.findById(id);
        return course;
    }
    // Create a new course
    // @Roles(Role.Admin)
    // @UseGuards(authorizationGaurd)
    @Post()
    async createCourse(@Body()courseData: createCourseDTo):Promise<courseDocument> {// Get the new student data from the request body
        const newCourse = await this.courseService.create(courseData);
        return newCourse;
    }
    // Update a course's details
    // @Roles(Role.Admin)
    // @UseGuards(authorizationGaurd)
    @Put(':id')
    async updateCourse(@Param('id') id:string,@Body()courseData: updateCourseDTo):Promise<courseDocument> {
        const updatedCourse = await this.courseService.update(id, courseData);
        return updatedCourse;      
    }
    // Delete a course by ID
    // @Roles(Role.Admin)
    // @UseGuards(authorizationGaurd)
    @Delete(':id')
    async deleteCourse(@Param('id')id:string):Promise<courseDocument> {
        const deletedCourse = await this.courseService.delete(id);
       return deletedCourse;
    }

}
