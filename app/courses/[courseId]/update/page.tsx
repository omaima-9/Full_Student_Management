// app/students/[id]/edit/page.tsx
import { course } from "@/app/utils/types";
import CourseForm from "@/app/components/CourseForm";
import axiosInstance from "@/app/utils/axiosInstance";
type Params = Promise<{
  courseId: string;
}>;


export default async function EditCoursePage(props: { params: Params }) {
  const params = await props.params;
  const courseId = params.courseId;
  const response = await axiosInstance(`/courses/${courseId}`);
  const courseInfo:course=response.data
  console.log('hi2',courseInfo)


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white p-6">
      <h2 className="text-3xl font-bold mb-6">Edit Course     {courseId}</h2>
      <CourseForm edit={true} courseInfo={courseInfo}/>
    </div>
  );
}
