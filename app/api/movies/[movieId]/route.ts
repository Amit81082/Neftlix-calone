import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ movieId: string }> },
) {
  try {
    // 👉 CHECK USER AUTH
    await serverAuth();

    const { movieId } = await params;

    if (!movieId || typeof movieId !== "string") {
      throw new Error("Invalid ID");
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      throw new Error("Invalid ID");
    }

    return NextResponse.json(movie, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

