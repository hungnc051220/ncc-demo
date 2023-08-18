import { Button } from "./ui/button";
import Image from "next/image";
import imdb from "@/images/imdb.svg";
import Container from "./container";
import { HiOutlineTicket } from "react-icons/hi2";
import prismadb from '@/lib/prismadb';
import movies from '@/movies.json';

const Billboard = async () => {
  const movie = movies[0];

  return (
    <div id="home" className="relative h-screen min-h-screen wrapper">
      <video
        className="w-full h-screen min-h-screen object-cover brightness-[40%]"
        autoPlay
        muted
        loop
        poster={movie?.thumbnailUrl}
        src={movie?.videoUrl}
      />
      <div className="absolute top-[20%] text-white left-0 right-0 mx-auto z-30">
        <Container>
          <p className="text-white text-5xl h-full font-bold drop-shadow-xl">
            {movie?.title}
          </p>
          <div className="flex items-center mt-8 gap-5 text-sm">
            {movie?.genre?.map((genre) => (
              <p key={genre}>{genre}</p>
            ))}
          </div>
          <p className="w-[50%] mt-8 line-clamp-6">{movie?.description}</p>
          <div className="mt-8">
            <div className="flex items-center gap-1">
              <Image src={imdb} height={21} width={42} alt="imdb" />
              <p>Xếp hạng</p>
            </div>

            <div className="flex items-center gap-4 mt-5">
              <div className="flex gap-2">
                <p className="text-red-500 text-5xl font-bold">
                  {movie?.rating}
                </p>
                <p className="text-lg">/ 10</p>
              </div>
              <p>86K+ Đánh giá</p>
            </div>

            <div className="mt-8">Bạn đã xem bộ phim này? Đánh giá ngay</div>

            <div className="mt-8">
              <Button
                variant="destructive"
                className="hover:scale-110 transition-all duration-200 ease-in-out"
                style={{ boxShadow: "0px 4px 40px 0px #A00F12" }}
              >
                <HiOutlineTicket size={24} className="mr-2" />
                Mua vé ngay
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Billboard;
