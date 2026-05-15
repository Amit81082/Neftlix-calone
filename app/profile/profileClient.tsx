// app/profile/ProfileClient.tsx

"use client";

import { signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function ProfileClient({ user }: any) {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center text-white gap-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-6xl text-center font-bold">Who is watching ?</h1>
      </div>
      <div className="flex flex-col items-center gap-10 mt-10">
        <div onClick={() => router.push('/')}>
             <div  className=" flex-row w-44 mx-auto group">
                 <div className="flex items-center justify-center rounded-md border-2 border-transparent w-44 h-44 group-hover:border-white cursor-pointer overflow-hidden">
                     <img src="/images/default-blue.jpg" alt="Profile" />
                 </div>
                 <div className="mt-4 text-gray-400 group-hover:text-white text-center w-full">
                     {user?.name || "Profile"}
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
}
