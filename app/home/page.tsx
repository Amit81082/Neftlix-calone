"use client";
import { signOut } from "next-auth/react";
import useCurrentUser from "../hooks/useCurrentUser";
import Navbar from "@/app/components/Navbar";
import BillBoard from "@/app/components/BillBoard";
import MovieList from "@/app/components/MovieList";
import useMoviesList from "@/app/hooks/useMoviesList";
import useFavourites from "@/app/hooks/useFavorites";
import InfoModel from "@/app/components/InfoModel";
import useInfoModel from "@/app/hooks/useInfoModel";
import Footer from "../components/Footer";
// pages/index.tsx  (NOT app/)


export default function Home( ) {
  const {data: movies=[]} = useMoviesList();
  const {data: favorites=[]} = useFavourites();
  const { user, isLoading } = useCurrentUser();
  // destructur onOpen from useInfoModel hook
  const {isOpen: onOpenModal, onClose: onCloseModal } = useInfoModel();

  if (isLoading) return <div className="text-white">Loading...</div>;
  return (
   <>
      <InfoModel visible = {onOpenModal} onClose={ onCloseModal} />
      <Navbar />
      <BillBoard />
      <MovieList title="Trending Now" data={movies} />
      <MovieList title="MyList" data={favorites} />
      <Footer />
   </>
  );
}
