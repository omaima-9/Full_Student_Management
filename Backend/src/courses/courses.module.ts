import { forwardRef, Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { course, CourseSchema } from 'src/courses/models/course.schema';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports:[  MongooseModule.forFeature([{ name: course.name , schema: CourseSchema }]),forwardRef(() => StudentModule)],
  providers: [CoursesService],
  controllers: [CoursesController],
  exports:[CoursesService]
})
export class CoursesModule {}
