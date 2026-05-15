// app/page.tsx

import serverAuth from "@/lib/serverAuth";
import { redirect } from "next/navigation";
import Home from "./home/page";

export default async function Page() {
  try {
    const { currentUser } = await serverAuth();

    return <Home />;
  } catch {
    redirect("/auth");
  }
}
