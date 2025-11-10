'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/app/utils/axiosInstance';
let backend_url = "http://localhost:3000";

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try{ 
         const response = await axiosInstance.post(
        `/register`,
        {
         email,
         password,
         name,
         age:25,
         courses:[],
          role: "student",
        },
      );
      const { status, data } = response;
      if (status == 201) {
        // handleSuccess(message);
        // setSucessMessage("SignUp successfuly");
        setTimeout(() => {
            router.push('/login'); 
        }, 1000);
      } else {
        // setErrorMessage(message);

        // handleError(message);
      
    } 
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

