"use client";

import Image from "next/image";
import imdb from "@/images/imdb.svg";
import { useRouter } from "next/navigation";
import { Movie } from "@/types";

interface MovieCardProps {
  movie: any;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const router = useRouter();

  return (
    <div
      key={movie.title}
      className="cursor-pointer"
      onClick={() => router.push(`/movies/${movie.id}`)}
    >
      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
        <Image
          src={movie.thumbnailUrl}
          alt={movie.title}
          fill
          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
        />
      </div>
      <div>
        <div className="flex items-center gap-5 text-[#5D6A81] text-xs mt-2">
          <p>2021</p>
          <p>12A</p>
          <p>{movie.duration}</p>
        </div>
        <p className="mt-2 text-sm font-bold">{movie.title}</p>
        <div className="flex items-center gap-3 text-xs mt-4">
          <Image src={imdb} alt="imdb" height={17} width={33} />
          9/10
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
