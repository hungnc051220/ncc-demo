import prismadb from '@/lib/prismadb';
import MovieCard from "./movie-card";
import movies from '@/movies.json';

const MovieList = async () => {
  return (
    <div className="divide-y divide-gray-700" id="films">
      <div className="pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-red-500 w-4 h-4"></div>
            <h3 className="font-bold">Đang công chiếu</h3>
          </div>
          <a href="#" className="text-sm hover:underline">
            Xem tất cả
          </a>
        </div>
        <div className="mt-6 grid grid-cols-5 gap-10">
          {movies?.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-red-500 w-4 h-4"></div>
            <h3 className="font-bold">Sắp chiếu</h3>
          </div>
          <a href="#" className="text-sm hover:underline">
            Xem tất cả
          </a>
        </div>
        <div className="mt-6 grid grid-cols-5 gap-10">
          {movies?.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
