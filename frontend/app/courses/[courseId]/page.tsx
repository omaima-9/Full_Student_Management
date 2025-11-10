import { course } from "@/app/_lib/page";
import axiosInstance from "@/app/utils/axiosInstance";

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const response = await axiosInstance<course>(`/courses/${courseId}`);
  const courseInfo:course=response.data


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Course Details</h1>
      <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-lg w-full max-w-md">
      <p className="text-lg">Details for Course </p>

        <p className="text-lg">ID: {courseId}</p>
        <p className="text-lg">Name: {courseInfo.name}</p>


      </div>
    </div>
  );
}
