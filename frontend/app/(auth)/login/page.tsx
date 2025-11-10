'use client'
import { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/app/utils/axiosInstance";
import login from "./login.server";

let backend_url = "http://localhost:3000";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const [state,formAction]=useActionState(login,{message:''})

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axiosInstance.post(`${backend_url}/auth/login`, {
  //       email,
  //       password,
  //     });
  //     // console.log(data);
  //     const { status, data } = response;
  //     console.log("status",response.data);
  //     if (status == 201) {
  //       // handleSuccess(message);
  //       localStorage.setItem("userId", response.data.user.userid);
  //       localStorage.setItem("role", response.data.user.role);
  //       // setSucessMessage(message)
  //       setTimeout(() => {
  //         router.push("/welcome"); // Redirect to home on successful login
  //       }, 1000);
  //     } else {
  //       console.log();
  //       // setErrorMessage(message);
  //     }
  //   } catch (err) {
  //     alert("Login failed. Please check your credentials.");
  //   }
  // };

  return (
    <form action={formAction}>
      <h1>Login</h1>
      <input
      name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
      name='password'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      <p>{state?.message}</p>
    </form>
  );
}
