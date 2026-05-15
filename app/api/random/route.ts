// app/api/random/route.ts

import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export async function GET() {
  try {
    // 👉 CHECK USER AUTH
    await serverAuth();

    // 👉 TOTAL MOVIES COUNT
    const movieCount = await prismadb.movie.count();

    // 👉 RANDOM INDEX
    const randomIndex = Math.floor(Math.random() * movieCount);

    // 👉 GET RANDOM MOVIE
    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    // 👉 RETURN MOVIE
    return NextResponse.json(randomMovies[0]);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
