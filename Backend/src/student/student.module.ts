import { forwardRef, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { student, StudentSchema } from './models/student.schema';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/guards/authentication.guard';
import { CoursesModule } from 'src/courses/courses.module';

@Module({
  imports:[ MongooseModule.forFeature([{ name: student.name, schema: StudentSchema }]), forwardRef(() => CoursesModule),],
  controllers: [StudentController],
  providers: [StudentService],
  exports:[StudentService]
})
export class StudentModule{}

// @Module({
//   imports:[ MongooseModule.forFeature([{ name: 'student', schema: StudentSchema }])],
//   controllers: [StudentController],
//   providers: [StudentService,{
//     provide: APP_GUARD, // to apply guard globally to all routes instead of specifying one by one
//     useClass: AuthGuard,
//   },],
//   exports:[StudentService]
// })




// export class StudentModule  implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(AuthenticationMiddleware)
//       .forRoutes(StudentController);
//.apply(LoggerMiddleware)
//.forRoutes({ path: 'users', method: RequestMethod.GET });  // only GET /users
//   }
// }{}
/*Middleware in NestJS is built on top of Express (or Fastify).
It runs before NestJS creates its internal context (before it knows what controller or route is next).

That means middleware:

❌ Can’t use decorators like @Roles()

❌ Can’t use Reflector to read metadata

❌ Doesn’t know which controller method is about to run

❌ Doesn’t have access to the ExecutionContext object

❌ Can’t easily return HTTP exceptions (it must manually send responses)

Guards, however:

✅ Run after NestJS identifies the route

✅ Can read metadata from decorators

✅ Can throw NestJS exceptions easily

✅ Work across HTTP, GraphQL, and WebSockets*/
