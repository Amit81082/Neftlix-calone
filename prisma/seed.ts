// prisma/seed.ts

import prismadb from "@/lib/prismadb";

const movies = [
  {
    title: "Big Buck Bunny",

    description:
      "Three rodents amuse themselves by harassing creatures of the forest.",

    videoUrl:
      "https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4",

    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png",

    genre: "Comedy",

    duration: "10 minutes",
  },

  {
    title: "Sintel",

    description: "A lonely young woman, Sintel, helps and befriends a dragon.",

    videoUrl: "https://archive.org/download/Sintel/sintel-2048-surround.mp4",

    thumbnailUrl: "/thumbnails/sintel.jpg",

    genre: "Adventure",

    duration: "15 minutes",
  },
  {
    title: "Elephants Dream",

    description: "Two friends journey through a mysterious machine world.",

    videoUrl: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",

    thumbnailUrl: "https://download.blender.org/ED/cover.jpg",

    genre: "Sci-Fi",

    duration: "12m",
  },
];

async function main() {
  // 👉 DELETE OLD MOVIES
  await prismadb.movie.deleteMany();

  // 👉 INSERT NEW MOVIES
  await prismadb.movie.createMany({
    data: movies,
  });

  console.log("✅ Movies Added");
}

main()
  .catch((e) => console.log(e))
  .finally(async () => {
    await prismadb.$disconnect();
  });
