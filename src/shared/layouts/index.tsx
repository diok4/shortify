"use client";

import { LoginForm } from "@/src/features/auth/login/ui";
import { RegisterForm } from "@/src/features/auth/register/ui";
import { useState } from "react";

export default function AuthLayout() {
  const [mode, setMode] = useState<"register" | "login">("login");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[380px]  max-w-[90%]">
        <div className="flex mb-4 border-b border-blue-800">
          <button
            className={`flex-1 p-2 ${
              mode === "login"
                ? "font-semibold border-b-2 border-blue-900"
                : "text-gray-500"
            }`}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={`flex-1 p-2 ${
              mode === "register"
                ? "font-semibold border-b-2 border-blue-900"
                : "text-gray-500"
            }`}
            onClick={() => setMode("register")}
          >
            Register
          </button>
        </div>
        {mode === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}
