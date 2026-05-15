// app/profile/page.tsx

import serverAuth from "@/lib/serverAuth";
import { redirect } from "next/navigation";
import ProfileClient from "./profileClient";

export default async function ProfilePage() {
  try {
    const { currentUser } = await serverAuth();

    return <ProfileClient user={currentUser} />;
  } catch(error) {
    console.log("error: ", error);
    redirect("/auth");
  }
}
