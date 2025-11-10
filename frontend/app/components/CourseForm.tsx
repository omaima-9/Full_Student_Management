// components/StudentForm.tsx
"use client";
import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { course } from "../_lib/page";

export default function CourseForm({
  edit,
  courseInfo,
}: {
  edit: boolean;
  courseInfo?: course;
}) {
  console.log('hi',courseInfo)
  const [name, setName] = useState(edit ? courseInfo!.name : "");
  const [code, setCode] = useState(edit ? courseInfo!.code : "");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (edit) {
        console.log(name,code)
        await axiosInstance.put(`/courses/${courseInfo!._id}`, { name,code });
        setMessage("updated successfuly");
      } else {
        await axiosInstance.post(`/courses/`, { code, name });

        setMessage("added successfuly");
      }
    } catch (error) {
      console.log(error);
    }

    // onSubmit(name); // Submit logic will be added here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center bg-[#1f1f1f] p-6 rounded-lg shadow-md w-full max-w-sm"
    >
      <div className="mb-4 w-full">
        <label className="block text-lg text-white mb-2">code</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter course code"
          className="w-full p-2 bg-[#333333] text-white border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4 w-full">
        <label className="block text-lg text-white mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter course name"
          required
          className="w-full p-2 bg-[#333333] text-white border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {edit ? "Update Course" : "Add course"}
      </button>
      <p>{message}</p>
    </form>
  );
}
