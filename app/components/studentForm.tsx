// components/StudentForm.tsx
"use client";
import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { student } from "../_lib/page";

export default function StudentForm({
  edit,
  studentinfo,
}: {
  edit: boolean;
  studentinfo?: student;
}) {
  const [name, setName] = useState(edit ? studentinfo!.name : "");
  const [age, setAge] = useState(edit ? studentinfo!.age : 0);
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (edit) {
         await axiosInstance.put(`/students/${studentinfo!._id}`, {
          name,
          age,
        });
        setMessage("updated successfuly");
      } else {
          await axiosInstance.post(`/students/`, {
          name,
          age,
          email:`${name}@gmail.com`,
          role:'student',
          password:'123456',// as default
          courses: [],
        });
        setMessage("added successfuly");
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center bg-[#1f1f1f] p-6 rounded-lg shadow-md w-full max-w-sm"
    >
      <div className="mb-4 w-full">
        <label className="block text-lg text-white mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
          className="w-full p-2 bg-[#333333] text-white border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4 w-full">
        <label className="block text-lg text-white mb-2">Age</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
          placeholder="Enter student name"
          required
          className="w-full p-2 bg-[#333333] text-white border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {edit ? "Update Student" : "Add Student"}
      </button>
      <p>{message}</p>
    </form>
  );
}
