// app/auth/page.tsx
"use client";
import Image from "next/image";
import axios from "axios";
import Input from "../components/Input";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { log } from "console";
import toast  from "react-hot-toast";

export default function AuthPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === "login" ? "register" : "login"));
  }, []);

  const login = useCallback(async () => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log("login result: ", result);
      if (result?.ok) {
        router.push("/profile"); // ✅ REDIRECT
      }
      if (result?.error) {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
     const result = await axios.post("/api/register", { name, email, password });
     console.log("result: ", result);

      setName("");
      setEmail("");
      setPassword("");
      if(result?.status === 200){
        toast.success("Registration successful");
      }
      await login();

    } catch (error: any) {
      console.error("Registration failed:", error);
        toast.error(error?.response?.data?.error || "Registration failed");
    }
  }, [name, email, password, login]);

  return (
    <div
      className="
       relative
        h-screen
        bg-[url('/images/Hero.jpg')]
        bg-no-repeat
        bg-fixed
        bg-cover
        bg-center

      "
    >
      <div className="absolute inset-0 bg-black/40 lg:bg-opacity-50 w-full h-full" />
      <nav className=" absolute z-10 top-1 left-1">
        <img src="/images/logo.png" className="h-24" />
      </nav>
      <div className="relative z-10 flex items-center justify-center text-white h-full">
        {/* 👉 LOGIN BOX */}
        <div className=" bg-black/70 px-16 py-16 w-full lg:w-2/5 max-w-md rounded-md ">
          <h2 className="text-white text-3xl font-semibold mb-8">
            {variant === "login" ? "Sign In" : "Register"}
          </h2>
          {/* 👉 INPUT CONTAINER */}
          <div className="flex flex-col gap-4 ">
            {variant === "register" && (
              <Input
                id="name"
                label="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <Input
              id="email"
              label="Email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              id="password"
              label="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={variant === "login" ? login : register}
            className="w-full mt-10 py-3 bg-red-600 hover:bg-red-700 text-white transition rounded-md focus:outline-none cursor-pointer"
          >
            {variant === "login" ? "Login" : "Sign Up"}
          </button>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={() => signIn("google", { callbackUrl: "/" })} className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10  transition hover:bg-white/20 focus:outline-none cursor-pointer">
              <FcGoogle className="text-xl" />
            </button>
            <button onClick={() => signIn("github", { callbackUrl: "/" })} className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10  transition hover:bg-white/20 focus:outline-none cursor-pointer">
              <FaGithub className="text-xl" />
            </button>
          </div>
          <p className="text-neutral-500 mt-12">
            {variant === "login"
              ? "First time using Neftlix?"
              : "Already have an account?"}
            <span
              onClick={toggleVariant}
              className="text-white ml-1 hover:underline cursor-pointer"
            >
              {variant === "login" ? "Create an account" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
