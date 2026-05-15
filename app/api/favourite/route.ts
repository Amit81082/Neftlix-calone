import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { without } from "lodash";

export async function POST(req: Request) {
  try {
    const { currentUser } = await serverAuth();
    const { movieId } = await req.json();

    const existingMovie = await prismadb.movie.findUnique({
      where: { id: movieId },
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    }

    const user = await prismadb.user.update({
      where: { email: currentUser?.email || "" },
      data: {
        favoriteIds: {
          push: movieId,
        },
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { currentUser } = await serverAuth();
    const { movieId } = await req.json();

    const existingMovie = await prismadb.movie.findUnique({
      where: { id: movieId },
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    }

    const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);
    const updatedUser = await prismadb.user.update({
      where: { email: currentUser?.email || "" },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    });

    // console.log("deleted favorite", movieId);

    return NextResponse.json(updatedUser, {
      status: 200,
    })
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
