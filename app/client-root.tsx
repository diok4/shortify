"use client";

import { useState, useEffect } from "react";
import { getMe } from "@/src/features/auth/me/model";
import AuthLayout from "@/src/shared/layouts";
import { NavBar } from "@/src/widgets/navbar";

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const res = await getMe();
      setUser(res.user);
      setLoaded(true);
    }
    loadUser();
  }, []);

  async function reloadUser() {
    const res = await getMe();
    setUser(res.user);
  }

  if (!loaded) {
    return <div className="text-center mt-10 text-gray-400">Loading...</div>;
  }

  return (
    <div className="flex w-full">
      <AuthLayout user={user} open={!user} reloadUser={reloadUser} />

      <NavBar user={user} />

      <main className="w-full bg-blue-50 min-h-screen py-3 px-5">
        {children}
      </main>
    </div>
  );
}
