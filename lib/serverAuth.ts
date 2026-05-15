import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prismadb from "@/lib/prismadb";

const serverAuth = async () => {
  // 👉 GET SESSION
  const session = await getServerSession(authOptions);
  // console.log("session: ", session);

  // ❌ NOT LOGGED IN
  if (!session?.user?.email) {
    throw new Error("Not signed in ❌");
  }

  // 👉 GET USER FROM DB
  const currentUser = await prismadb.user.findUnique({
    where: { email: session.user.email },
  });

  // ❌ USER NOT FOUND
  if (!currentUser) {
    throw new Error("User not found ❌");
  }

  return { currentUser };
};

export default serverAuth;
